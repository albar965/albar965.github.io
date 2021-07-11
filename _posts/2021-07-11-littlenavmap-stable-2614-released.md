---
layout: post
title:  Little Navmap 2.6.14 released
date:   2021-07-11 14:00:00 +0200
categories: release
---

----

**►► This version contains bug fixes, small user interface improvements and support for the new IVAO interface which allows higher update rates. ◄◄**

----

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.14.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.14/LittleNavmap-win-2.6.14.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.14.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.14/LittleNavmap-macOS-2.6.14.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.14.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.14/LittleNavmap-linux-20.04-2.6.14.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.6.14.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.14/LittleNavmap-linux-18.04-2.6.14.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)\\
[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)\\
[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Known Issues

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:\\
[► User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

See user manual for general known problems:\\
[► User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

See user manual for limitations and issues around Microsoft Flight Simulator 2020:\\
[► User Manual - Known Problems - Microsoft Flight Simulator 2020](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems-msfs).

## Important Notes

* MSFS: Avoid the scenery library mode `Do not use Navigraph Database` if you have the Navigraph update for MSFS installed. You will see errors in procedures. Instead directly update the scenery database of *Little Navmap* using the Navigraph FMS Data Manager.
* The manual is not updated for the webserver / web user interface changes. Scroll by clicking or tapping and zoom by using the mouse wheel or the two-finger pinch gesture.
* The table column order and width for the search results is reset to default for the tabs `Online Clients` and `Online Servers`.

## Changes from 2.6.13 to 2.6.14

### Flight Plan

* Fixed issue where waypoints being part of a missed approach were removed when saving a flight plan. #728
* Now disabling `Add Alternate` in map context menu for empty flight plan to avoid crash when selecting without plan.
* Enabled information display on right click or double click in flight plan table for navaids which are part of a procedure. Menu item was wrongly disabled before. #727
* Fixed problem where flight plan could be internally corrupted after saving. This caused a wrong warning about invalid destination airports when exporting plans and other issues like disappearing flight plan legs.
* Fixed issue where Garmin Base Camp could not load GPX files. Added missing attributes and default namespace in XML according to specification.
* Now avoiding ICAO region when exporting MSFS flight plans since it is not reliable for airports and the sim garbles the flight plan when loading. Example: Direct EDMG to LHSK.
* Reworked resolving of departure parking, helipad or runway positions from flight plan. Now omitting positions which are too far away from saved position for all simulators now. Fixed issue where helipad starting position was not loaded correctly in some cases.
* Saving and loading departure type (runway, parking, helipad, etc.) to LNMPLN now.
* Reorganized and cleaned up text in tab `Fuel Report`.

### Logbook

* Now omitting flight plan when saving a logbook entry instead of saving an invalid plan with missing waypoints. This happens if no flight plan was set while flying. Note that you still might see an exception if you try to save a flight plan from older log entries from flights without a plan.
* Now ignoring invalid or missing flight plans when saving GPX files from logbook entry. Previously showed an exception `Invalid LNMPLN flight plan file ".". No waypoints found.`.
* Adjustments for flying user aircraft detection to avoid creating log entries for low passes. #693

### Procedures

* Now correcting final procedure legs where last altitude restriction is wrongly below airport elevation. This can happen due to errors in scenery libraries or runway threshold elevation being below general airport elevation. *Little Navmap* refused to build the elevation profile if this happened. #711
* Fixed issue where a far away VOR was selected instead of a closer ILS with the same ident when resolving fixes for procedures. Example: LJMB SID PETO5D RWY 32 showed a 800 NM leg towards a remote VOR.
* Corrected display issue in flight plan table where DME terminated procedure legs showed the wrong navaid and the wrong distance. Example: EGPH I06 via TLA showed `D322O+5` instead of `TLA+20`.

### User Interface

* Added `Toggle Flight Simulator Connection` function with keyboard shortcut `Ctrl+Shift+A` in tools menu. This allows to quickly connect to the simulator.
* Added previously missing keyboard shortcuts for functions `View` -> `Show Aircraft` (`Ctrl+Alt+B`) and `View` -> `Show Aircraft Trail` (`Ctrl+Alt+T`).
* Added keyboard shortcuts for map themes: `Ctrl+Alt+1` to `Ctrl+Alt+6` for default themes.
* Fixed issue where coordinates for online aircraft map link were not updated in information panel. Clicking on the link `Map` showed the wrong aircraft position as a result. #722
* VOR now shows `Calibrated declination` and `Magnetic declination` in information window where the latter one is the environment value.
* Added flown distance and takeoff time to progress tab. This is also available without flight plan.

### Scenery Library

* Fixed issue where empty folders like `OneStore` in the wrong place confused detection of MSFS. Now also checking for file `.../fs-base/layout.json` in required path.
* Now logging empty, invalid or inaccessible XML and JSON files while scanning for MSFS or P3D scenery instead of throwing an exception. #720
* Now computing ARINC approach id (e.g. `I27C`) for all approaches from FSX, P3D and MSFS to allow better procedure detection when loading flight plans across different simulator databases.

### Other

* Added support for IVAO JSON 2 format in whazzup parser. Removed unneeded attributes for online airspaces and clients. Resetting online client, center and server search result table layout for database schema changes. Update rate is now 15 seconds for IVAO instead of two minutes. #722
* Several updates to the internal webserver / web user interface by [u-an-i](https://github.com/u-an-i).
* X-Plane and *Little Xpconnect*: Now using more datarefs from flightmodel which are not affected by failures. #693
* Updated Qt libraries to 5.12.11.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.14/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
