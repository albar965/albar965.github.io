---
layout: post
title:  Little Navmap 2.6.17 released
date:   2021-10-18 16:00:00 +0200
categories: release
---

----

**►► This release adapts *Little Navmap* to the latest MSFS changes that cause crashes when loading the scenery library, as well as other fixes and improvements that also affect X-Plane. ◄◄**

----

### Hotfix for SSL intialization failure

Install [vcredist_x64_2010.exe](https://www.littlenavmap.org/downloads/Windows%20Redistributable%20Packages/vcredist_x64_2010.exe) and [vcredist_x86_2010.exe](https://www.littlenavmap.org/downloads/Windows%20Redistributable%20Packages/vcredist_x86_2010.exe) to fix this issue.

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.17.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.17/LittleNavmap-win-2.6.17.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.6.17.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.17/LittleNavmap-macOS-2.6.17.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.17.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.17/LittleNavmap-linux-20.04-2.6.17.tar.gz)<br/>
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.6.17.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.17/LittleNavmap-linux-18.04-2.6.17.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)<br/>
[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)<br/>
[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Known Issues

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:<br/>
[► User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

See user manual for general known problems:<br/>
[► User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

See user manual for limitations and issues around Microsoft Flight Simulator 2020:<br/>
[► User Manual - Known Problems - Microsoft Flight Simulator 2020](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems-msfs).

## Changes from 2.6.16 to 2.6.17

### MSFS

* Fixed crashes when loading scenery library of MSFS SU6. [#799](https://github.com/albar965/littlenavmap/issues/799)
* Corrected MSFS airport detection. Now ignoring airport closed flag which removes many POI wrongly detected as airports.
* Reduced warnings for unknown BGL records to avoid flooding the log with messages and crashing when reading scenery.

### Map

* Limited minimum detail level to -2 to avoid confusion about missing map features when user selects a too low value. Now resetting details to default on update.
* Fixed issue where runway offset markings were not visible on unknown runway surfaces like when using scenery library mode `Use Navigraph for all Features`.
* Corrected drawing for logbook entries where departure or destination airport could not be found in the scenery library database.

### Options

* Changed IVAO weather URL to use HTTPS (secure connection). The URL is now reset to the new default on first startup.
* Fixed issue where AI and user aircraft tooltip settings were not restored in options.

### Flight Plan

* Corrected flight plan calculation using radio navaids. Selected navaids were too close in some cases. Example: `PAYA MDO ODK CDB ELF DUT PADK` where CDB and ELF are too close resulting in zig-zag routing.
* Added heading for departure parking position to LNMPLN flight plan format.
* Adjusted cost factor for flight plan calculation to avoid direct calculation (no airways at all) on the last two ticks of the slider. Default value for slider after installation is not centered.
* Fixed issues where departure position type (runway, parking, helipad or airport) was not saved in LNMPLN after changing start position to a runway or assigning departure airport. Departure position type now set correctly to `runway` after assigning a runway automatically.

### Logbook Search

* Fixed broken search for departure and destination airport in logbook.
* Disabled not working airport filters in logbook search context menu (`Filter by ...` in context menu). These will be enabled again in a later version.
* X-Plane: Fixed several issues where an airport using official ids (ICAO, FAA, IATA or local) was not found in logbook context menu, logbook edit dialog and information display for log entries.

### Other and User Interface

* Fixed issue where an internal cache gave wrong results which caused random wrong airport assignments when working with flight plans or after switching scenery library databases.
* Removed slow down in internal airport queries when searching by official codes. This caused short freezes when clicking on an airport for information in some cases.
* Fixed several issues where airports were wrongly identified as X-Plane airports. Corrected display of airport ids.
* Fixed issue where a X-Plane was still wrongly detected while using scenery library mode `Use Navigraph for all Features`.
* X-Plane: Adjusted display options for official airport codes. IATA is now used before internal ident in all cases. Route description now shows IATA code as well if available.
* Adjustments to flight plan and aircraft centering when getting close to ground while flying. Now avoiding too close zoom.
* Added Pilot Nav to airport link list.
* Removed `Work offline` option in file menu since it is of limited use and causes too many problems if users check this inadvertently.
* Fixed bug with wrong airspace assignment for class F and G when reading OpenAir files. [#797](https://github.com/albar965/littlenavmap/issues/797)
* Better coordinate parsing. Removing separators `|`, `;`, `_` and `:` for latitude and longitude now.
* Fixed several typos in user interface and more small user interface improvements.

### Build and Development

* Now using Qt libraries 5.15.2.
* Changed build to use OpenSSL library provided by the Qt installer on Windows.
* Updated flight plan schema file [lnmpln.xsd](https://www.littlenavmap.org/schema/lnmpln.xsd) and LNMPLN file format documentation in the user manual.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.17/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
