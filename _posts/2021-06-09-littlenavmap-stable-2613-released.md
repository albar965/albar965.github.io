---
layout: post
title:  Little Navmap 2.6.13 released
date:   2021-06-09 14:00:00 +0200
categories: release
---

----

**►► This version contains mostly bug fixes, adaption to MSFS scenery library changes, support for the new
X-Plane TCAS scheme and a reworked web user interface. ◄◄**

----

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.13.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.13/LittleNavmap-win-2.6.13.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.13.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.13/LittleNavmap-macOS-2.6.13.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.13.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.13/LittleNavmap-linux-20.04-2.6.13.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.13.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.13/LittleNavmap-linux-16.04-2.6.13.tar.gz)

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

* You have to update/reinstall *Little Navconnect* and *Little Xpconnect* if you use these since
  the data protocol has changed. This version is compatible with *Little Navconnect* 2.6.11
  and *Little Xpconnect* 1.0.24 or newer.
* Aircraft label settings are reset back to default. Adjust these in the options dialog on page
  `Map Display 2`.
* All MSFS scenery library related changes need at least MSFS version 1.16.2 .
* MSFS users need to reload the scenery library to new features like SID and STAR.
* Do not use the scenery library mode `Do not use Navigraph Database` if you have the Navigraph
  udpate installed. You will see errors in procedures. Instead update the scenery database of *Little
  Navmap* using the Navigraph FMS Data Manager.

## Changes from 2.6.11 to 2.6.13

Version 2.6.12.beta was an unofficial beta release.

### Flight Plans

* Corrected loading and saving of GPX tracks. Now also saving timestamps and considering
  disconnected trail segments. A flight where the aircraft was moved or warped during flight results
  in a straight line connecting the two segments. Changing aircraft, restarting the simulator or
  *Little Navmap* results in disconnected trail segments.
* Fixed issue causing error messages on flight plan elevation profile calculation if destination
  airport is below sea level and an approach procedure is used.
* Flight cruise altitude was set wrongly after calculating route with metric altitude units.
* Now omitting visual reporting points (like `VP123`) and other obscure numbered waypoints from
  route calculation. Also ignoring half degree points like `H5711` in north atlantic now. Simplified
  and optimized loading of routing network.
* Fixed issue where a flight plan calculation resulted in not optimal routes. This happened when a
  nearby navaid connected to the airway system could not be found.

### Flight Plan Export

* Enabled departure parking position for MSFS flight plan export and import. Enabled check for
  parking position for MSFS export which shows a warning if starting on a runway.
  You can also set a fuel pad as starting position but note that runways and helipads as starting
  positions will be ignored by MSFS.
* More relaxed user waypoint naming conventions for MSFS. Now allowing more special characters.
* Corrected Aerosoft CRJ flight plan export as far as possible. Now exporting a list of waypoints
  instead of airway routes for MSFS CRJ to minimize issues when loading plan in aircraft.
  Adapted changed keywords in `.flp` file and compressing airway segments now. [#632](https://github.com/albar965/littlenavmap/issues/632)
* Added export of modified PLN format for Integrated Simavionics / ISG devices and gauges.
* Export option for MSFS PMS50 GTN750 Garmin added. This export saves the flight plan using a fixed
  filename `fpl.pln`.
* Now always adding procedure entry and exit waypoints for flight plan export formats not
  supporting procedures like FSX/P3D PLN. User can an additional waypoint in the simulator if needed.
* Corrected default flight plan pattern to use departure and destination ident if flight plan
  pattern is empty. Used departure airport ident wrongly before.
* Changes to allow updates for new export formats.
* Now clearing invalid procedures (red error message below flight plan table) before saving LNMPLN.
  Reloading a saved LNMPLN clears any error messages now.

### Procedures and Scenery Library

* Now fully recognizing SID and STAR from MSFS scenery library. Many thanks to
  [icykoneko](https://github.com/icykoneko) for implementing this. [#649](https://github.com/albar965/littlenavmap/issues/649)
* Adapted loading of approach procedures and some airport structures to new MSFS changes since
  1.16.2. This fixes the issue of empty and not selectable approaches in the procedure tab.
* Constant turn radius legs in procedures are now correctly depicted for MSFS.
* Fixed issue where some navaids did not get airport ident assigned if in different BGL file.
* Other improvements for procedure drawing.
* Added speed limit for MSFS procedure legs.
* Now checking all MSFS procedures before saving in the database. A warning will be logged and the
  procedure will be omitted if not valid.
* Now omitting closed dummy airport structures having no runways and no start positions which are
  used by MSFS as POIs.
* Fixed issue where an error was shown when loading `Library.xml` files from add-on aircraft.
* `Library.xml` files are now considered when excluding folders from loading.
* Removed exception for invalid files in X-Plane CIFP path. Now simply writing a warning to the log
  file.

### Map

* Fixed issue where tooltips and click regions for route preview were wrongly active when showing
  more than on logbook entry highlighted.
* Added new airspace types MCTR, TRSA and GCA where GCAis for unknown and general types. [#607](https://github.com/albar965/littlenavmap/issues/607)
* Function `Center map on aircraft and next flight plan waypoint` now uses defined box for aircraft
  and waypoint to avoid aircraft or next waypoint leaving screen space. More improvements to aircraft
  centering to avoid permanent updates or hanging view.
* Corrected flight plan editing on map which could cause various issues if editing near a missed
  approach which is hidden on the map.
* Removed wrongly drawn procedure point underlay (like overfly indication) from intercept point for
  legs.
* Now updating online centers (transceivers) in VATSIM network every five minutes. Fixes issue
  where user had to restart LNM to update VATSIM centers.

### Logbook

* Logbook entry now uses a separate aircraft trail which does not include previously flown segments
  from other flights.
* Corrected storing of local real time in logbook. Now uses a time format with timezone (not shown
  in logbook search result table but in information window).
* Avoiding crash if previously created logbook entry cannot be found on landing.

## User Interface and General

* Completely reworked web user interface. Now with mouse wheel zoom, a mode to follow the user
  aircraft and more. Big thanks to [u-an-i](https://github.com/u-an-i) for implementing this!
* Now using new X-Plane TCAS AI and traffic scheme based on `sim/cockpit2/tcas/targets` datarefs.
  Note that X-Plane provides only limited information about AI or multiplayer aircraft. Only
  transponder code, position, groundspeed, vertical speed and heading are available. [#525](https://github.com/albar965/littlenavmap/issues/525)
* Fetching transponder code for all simulators now.
* Added transponder code to user and AI aircraft. Now showing in tooltips, information and map.
* Added transponder code option to aircraft labels. Note that aircraft label settings are now reset
  back to default.
* Added properties to transferred simulator aircraft data to avoid future incompatibilities when
  adding new values.
* Increased data version to 11 to force incompatibility. This requires to update/install *Little
  Navconnect* and *Little Xpconnect* as well.
* Added links in flight plan table header to quickly get information and jump to departure,
  departure parking and destination on map.
* Added clickable airport link to procedure search header to get information and jump to airport on
  the map.
* Corrected issue where airport files were not found in related documents folder when using
  translated file and folder names. Adapted all translations to this change.
* Added new userpoint icons based on [Bushtalk Radio](https://bushtalkradio.com/) categories.
* *Little Xpconnect*: Offloaded loading of aircraft files and scanning for keys to separate thread
  to avoid blocking main thread on startup. This could have caused stutters when starting X-Plane.
* Chinese translation revised. Thanks to [Tong Hui](https://github.com/tonghuix) and
  [yudongx](https://github.com/yudongx) for their effort.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.13/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
