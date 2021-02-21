---
layout: post
title:  Little Navmap 2.6.8 released
date:   2021-02-21 13:00:00 +0100
categories: release
---

## Links

[**► Screenshots of 2.6 Features**](/pages/26/littlenavmapscreens.html)\\
[**► Little Navmap and Little Navconnect User Manuals for 2.6 Versions**](/manuals.html)

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.8.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.8/LittleNavmap-win-2.6.8.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.8.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.8/LittleNavmap-macOS-2.6.8.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.8.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.8/LittleNavmap-linux-20.04-2.6.8.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.8.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.8/LittleNavmap-linux-16.04-2.6.8.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)\\
[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)\\
[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Notes

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:

[User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

## Known Issues

See user manual for general known problems:

[User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

See user manual for limitations and issues around Microsoft Flight Simulator 2020:

[User Manual - Known Problems - Microsoft Flight Simulator 2020](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems-msfs).

## Changes from 2.6.7 to 2.6.8

### Help and Manuals

* Revised German user manual for spelling and grammar errors.
* Small additions and corrections to English manual.

### General

* Reverted change that was needed for work around a MSFS crash which occured when connecting. Now fetching destination and departure for AI aircraft again.
* Fixed unrecoverable crash on startup which can occur with Mercator projection zoomed far out.
* Resolved crashes when showing information for VOR and NDB having no type like `High` or `Terminal`.
* Added error handling for missing layout file on startup if `Load window layout from last used file` in `Options` on page `Startup and Updates` is checked. Removing or renaming the layout file resulted in an unrecoverable crash on startup.
* Fixed procedure display issues for turn bow after circular legs. Example: LGSR VOR-B transition BINKI.
* Fixed issue where weather from FSX and P3D was not transferred across networked connections.
* Logbook details (route preview and trail) on the map are now only shown if one entry is selected in the logbook search result table. Selecting more than one entry shows only the direct connection lines if enabled. This fixes performance issues when selecting many logbook entries.
* Added warning dialog when user switches to offline mode.
* Fixed issues with disappearing flight plan and measurement lines. Lines might still disappear near the poles for long flight plan legs depending on zoom factor.
* Navaid resolution when loading flight plans or switching scenery databases is now more tolerant for wrong ICAO regions. Navaids were marked red with an error in the flight plan table before if the region did not match.
* Fixed issue resulting in degraded drawing performance for airport diagrams. This was most visible on large airports.
* Various drawing and user interface corrections.

### Flight Plan

* Fixed issue where waypoints inserted for procedure endpoints received wrong altitude when saving or exporting flight plans right after calculation. This caused error messages when loading the resulting LNMPLN files. [GitHub issue #608](https://github.com/albar965/littlenavmap/issues/608).
* Now extracting ICAO airport idents for waypoints, NDB and VOR for MSFS export. PLN element `ICAOAirport` was missing before and caused problems when loading flight plans in MSFS. [GitHub issue #614](https://github.com/albar965/littlenavmap/issues/614).
* Split up export options for JARDesign and Rotate aircraft to allow export for both separately.
* Corrections to X-Plane FMS export. Using keywords `DEP` and `DES` now instead of truncating ident. This allows to reload the FMS file in *Little Navmap*.
* Fixed a regression where circle-to-land approaches could not be loaded by X-Plane due to missing destination runway in FMS export.
* Fixed flight plan export for FSX and MSFS which used the wrong coordinates for destination element `DestinationLLA` in flight plan. This confused third party programs which relied on this value.
* Corrected wrong departure position for saved LNMPLN and FSX/P3D PLN flight plans. Now uses position from parking, helipad or runway/start for PLN `DepartureLLA` and LNMPLN `Start` element. [GitHub issue #613](https://github.com/albar965/littlenavmap/issues/613).
* Fixed issue where LNMPLN flight plan procedures were replaced with waypoints inadvertently if enabled in export options menu. This happened when saving LNMPLN plans with multiexport.
* Removed extra space to fix flight plan export for iFly (`.FLTPLAN`).
* Other small corrections for flight plan export.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.8/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
