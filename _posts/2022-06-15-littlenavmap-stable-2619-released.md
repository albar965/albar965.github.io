---
layout: post
title:  Little Navmap 2.6.19 released
date:   2022-06-15 10:00:00 +0200
categories: release
---

This release fixes several issues affecting elevation profile, MSFS and X-Plane scenery libraries.

Only the most imortant or easy to integrate issues are integrated into this release.
Development is going on in parallel for the next major release and a public alpha version was already published in the [Avsim Forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum/).

**Reload the scenery library to see fixed issues.**

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.19.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.19/LittleNavmap-win-2.6.19.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.6.19.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.19/LittleNavmap-macOS-2.6.19.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.19.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.19/LittleNavmap-linux-20.04-2.6.19.tar.gz)<br/>
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.6.19.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.19/LittleNavmap-linux-18.04-2.6.19.tar.gz)

### Alternative Download Locations

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) /
[**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Known Issues

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:<br/>
[► User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

See user manual for general known problems:<br/>
[► User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

See user manual for limitations and issues around Microsoft Flight Simulator 2020:<br/>
[► User Manual - Known Problems - Microsoft Flight Simulator 2020](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems-msfs).

## Changes from 2.6.18 to 2.6.19

### User Interface

* Fixed issue where main window could not be resized below 1000 pixels. Minimum limit is now 300 pixels.
* Changed style `Night` to improve visibility for checked icon menu items and menu separator lines which were barely visible before.

### Map Display

* Disabled GLS and other virtual paths which were wrongly shown as ILS when using latest Navigraph databases updated for future versions of Little Navmap.
* Fixed issue where new user airspaces were not drawn after reading from disk.

### Flight Plan and Elevation Profile

* Fixed issue which appeared when airport altitude is reported higher from simulator than runway altitude from navdata for procedures. Program showed wrongly a violated altitude restriction at runway and refused to build elevation profile.
* Fixed issue where alternate airport was lost and error message remained after switching scenery library databases.
* Corrected mapping of parking names for empty or invalid MSFS parking spots which broke reloading of parking positions from flight plans. Exported MSFS PLN files now have correct parking name set for these cases.
* Fixed issue where flight plan leg in elevation profile had wrong position offset related to restriction.
* Fixed issue where elevation profile could not be calculated if a STAR has an `At Altitude` restriction.
* Fixed missing waypoints in MSFS flight plan export for all distance, altitude or otherwise terminated procedure legs.
* Fixed issue where MSFS SID and STAR cannot be loaded due to missing runway in database.
* Extended waypoint coordinate parser for all ARINC 424 Code Convention full degree waypoint formats like `57N30`, `5730E` or `57S30`. Flight plan route description can now read these waypoints independent if they are in the navdata or not.
* Improvements to Flightgear XML flightplan files import and export. Thanks to @colingeniet at Github for the fixes.

### Scenery Library

* Database minor version updated to 21. Reloading is adivsed to see bug fixes.
* Added push request [#6](https://github.com/albar965/littlenavmap/issues/6) of @flpduarte. Fixed bug in which Little Navmap would only read and display a single transition from addon (Community) SIDs and STARs, despite these procedures actually having more than one transition. This happens when using the latest MSFS SDK (SU9 or later).
* Now saving invalid and null parking names from MSFS with indicator `NONE` into the database to allow handling in flight plans.
* Fixed issue where airport frequencies were written as 0 instead of null for MSFS resulting in wrong search results.
* Now skipping empty X-Plane `apt.dat` files to avoid program freezing in an empty loop for malformed files.

### Other

* Now decreasing connection rate for long running sessions using autoconnect to avoid loss of internal SimConnect resources. An attempt to connect is made every 30 seconds after half an hour and every minute after one hour. Workaround for SimConnect issue mentinoned in [#91](https://github.com/albar965/littlenavmap/issues/91).

### Development and Build

* Moved version number to variable `VERSION_NUMBER` in file `littlenavmap.pro` instead of coding it into sources.
* Now writing files `version.txt` and `revision.txt` files into install folder allowing deployment scripts to automatically name archives. These files can be used to identify a version without opening the program.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.19/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
