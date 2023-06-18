---
layout: post
title:  Little Navmap 2.8.11 released
date:   2023-06-18 13:00 +0200
categories: release
release-version: 2.8.11
---

### Direct Download

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.11.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.11/LittleNavmap-win64-2.8.11.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.11.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.11/LittleNavmap-macOS-2.8.11.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.11.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.11/LittleNavmap-linux-22.04-2.8.11.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.11.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.11/LittleNavmap-win32-2.8.11.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.11.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.11/LittleNavmap-linux-20.04-2.8.11.tar.gz)

## Notes

**This is a stable release of *Little Navmap* which fixes several bugs and crashes and adds
improvements as well as new features.**

**Note that the installation of map themes has changed. Furthermore, there are changes in the scenery library
menu and in the flight plan route description. See below for more information.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

The updated online user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/).

See here for user manual downloads:
[User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable).

A big thank you to all who reported bugs and issues!

## Changes from 2.8.10 to 2.8.11

### Flight Plan and Export

* Now recognizing runway assignments from SimBrief when downloading flight plans. This fixes the
  random runway assignment after import.
* Now resolving SID and STAR transitions when loading MSFS PLN flight plan files. This also works
  for the SimBrief exported plans where the STAR name is omitted on the first waypoint. Note that
  this is not 100 percent reliable due to deficits in the MSFS PLN file format design.
* Trying to automatically select approach transitions for matching STAR waypoint similar as
  MSFS if an approach procedure is selected when importing MSFS PLN files.
* Improved X-Plane FMS export. Airports with procedures are now always saved with keywords `ADEP` or
  `ADES` to allow manual departure or arrival procedure selection in the GPS or FMS.
* Added warning if the scenery library mode `Use Navigraph for all Features` is enabled when
  exporting X-Plane FMS files to avoid issues when selecting procedures in the FMS or GPS.
* Fixed wrong error message when calculating elevation profile due to required vertical angle
  conflicting with an altitude restriction. Example: Airport LTFM with approach I17LX and other
  ILS at LTFM. Vertical angle is now ignored in such cases.
* Fixed issue with excessive fight plan altitude on loading causing program freeze and crash.
  This can happen when importing a flight plan using a format which does not provide cruise altitude
  information like FMS in some cases or FSC PLN.
* Now using best guess to set cruise altitude automatically after loading flight plan format without
  support for cruise altitude. This is based on procedure and airway restrictions.
* Added warning dialog if cruise altitude cannot be loaded from flight plan and has to be estimated.
* Applying best guess now for flight plan type (IFR/VFR) when loading flight plan formats not
  supporting this.
* Now attempting to load SID, STAR and respective transitions from FSC PLN files.
* Added workaround for broken X-Plane FMS flight plans having partially invalid altitude information.
* Rounding error related procedure altitude violations corrected when using metric altitude.
* Fixed issues with wrong flight plan cruise altitude when using metric altitude.
  Rounding errors in cruise altitude when loading and saving plans with metric altitude are minimized now.
* Added new optional element `CruisingAltF` to LNMPLN file format to avoid rounding errors when using
  metric units.
* Now using metric speed and altitude designators in route description if units are set accordingly
  in options on page `Units`.
* Fixed issue where imported flight plan (for example in FMS or PLN format) could be overwritten with the
  LNMPLN format after updating the plan from a route string.
* Fixed issues with default filename generation having `CRUISEALT` parameter. Now using local altitude
  unit as set in options.
* Adjusted route string reader to prefer a close VOR or waypoint before a NDB with the same ident.
* Fixed flight plan export and save functions to avoid suggesting filenames containing `/`, `\`
  or other invalid characters.
* Fixed issue where airway information in flight plan at STAR entry was dropped after manually
  adding a STAR.
* Now removing first waypoint `RW` from X-Plane FMS 11 if a departure runway is selected. This avoids
  confusing the stock FMS and GPS which gave wrong turn indications.

### Flight plan route description

* The lower part of the input field can now be used as a scratch pad. The upper bold highlighted
  section separated by an empty line is the current route description which is read and interpreted.
  The lower gray description texts are a part of the scratch pad. These are saved on program exit but
  ignored apart from that.
* The function `Create flight plan` now reads the first paragraph in the input field, i.e. until
  the first empty line.
* 'Load from flight plan' inserts the route description on top of the input field and leaves other
  texts below intact.
* Added undo/redo buttons to route description dialog window.
* Fixed issues where airways and waypoints were dropped in some cases.

### Scenery Library

* Added optional automatic navdata selection depending on simulator and AIRAC cycle. The new option in
  menu `Scenery Library` -> `Navigraph` -> `Select Automatically` is enabled per default and selects
  the right navdata mode when switching between simulators or after compiling the database. The automatically
  selected mode can be seen in the disabled menu items in menu `Navigraph` or in the window title bar.
  [Little Navmap User Manual - Navigraph](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/MENUS.html#navigraph)
* The mode `Use Navigraph for all Features` is now enabled per default on first run after a fresh
  installation to have airports available if the simulator database is empty This is independent of
  the AIRAC cycle.
* Added option to include extra directories for scenery library scanning. Extra folders extending
  MSFS ``Community``, X-Plane ``Custom Scenery`` or FSX/P3D ``Addon Scenery`` can be added in
  options on page `Scenery Library Database` in the top list. [#959](https://github.com/albar965/littlenavmap/issues/959)
  [Little Navmap User Manual - Scenery Library Database](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/OPTIONS.html#scenery-library-database)
* Added message in dialog window `Load Scenery Library` indicating excluded folders. This is a
  hint since wrong and unintended exclusions can often cause issues like missing airports.
* More cleanup for MSFS airport names. Now removing leading and trailing space from all names to
  allow search since some airport names are entered wrongly with spaces.
* Fixed issue where MSFS navdata update was recognized despite having its folders excluded.
* Fixed country names appearing as language keys when compiling MSFS. Names are now empty again
  since MSFS does not provide these.
* Corrected detection and reading of Navigraph navdata update in MSFS. Now reading airports from
  update. Navdata and procedures are omitted. Wrongly excluded package is now read. Speed up for
  reading scenery library by ignoring unused procedures from navdata update. [#1019](https://github.com/albar965/littlenavmap/issues/1019)
* Workaround for missing aircraft model translations since MSFS SU12.
* Now adding start positions for runways and parking spots in Navigraph navdata compiler to allow
  departure parking selection for runways as well when using mode `Use Navigraph for all Features`.
  This change will appear with future Navigraph navdata updates.
* Updated included Navigraph cycle 1801 to cover above mentioned database changes.
* X-Plane 12 manually corrected localizers file is now read.
* Corrected overzealous filter for MSFS airport dummy structures which removed add-on helipads or
  airports. Example add-on: `willicopta-spital-la-chaux-de-fonds-lsh9` which did not show up.

### Userpoints

* Added quick `Mark Airport as Add-on` function in all related context menus in map, flight plan
  table and airport search result table. This inserts a userpoint of type `Addon` without additional
  editing. The labels of this userpoint type (yellow ring) are not shown on map to avoid overlap
  with the airport labels. You can add your own types starting with text `Addon`. These will be
  treated the same way.
  [Little Navmap User Manual - Mark Airport as Add-on](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/MAPDISPLAY.html#mark-airport-as-addon)
* Added cleanup function for userpoints to remove empty or duplicates by several criteria. See menu
  `Userpoints` -> `Cleanup Userpoints` or the context menu in the userpoint search result table.
  [Little Navmap User Manual - Cleanup Userpoints](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/USERPOINT.html#cleanup-userpoints)
* Userpoint CSV import is now one undo step for all selected files to avoid confusion after
  selecting more than one file for import.

### Logbook

* Fixed takeoff and landing detection in logbook for airports without runways like heliports.
  These are now always registered in the logbook. Now falling back to any nearest airport on
  takeoff or landing if no runways were found.
* Reworked logbook statistics dialog. Enabled sorting for all columns (click on the column header)
  and removed the 1000 rows limit. The view loads more rows when scrolling down if needed.
* Added query `Aircraft hours flown` to logbook statistics. [#1026](https://github.com/albar965/littlenavmap/issues/1026)

### Map Display

* Added option to read map themes outside the installation folder. You can select a map theme
  folder in options on page `Cache and Files` below `Map Display Themes`. This is empty and therefor
  disabled per default. Put the map folders like `google-maps-sat` or `us-vfr-sectionals` directly
  into the selected folder and restart Little Navmap to detect the new map themes.
  This helps to avoid the re-installation of map themes after each update.
  [Little Navmap User Manual - Map Themes](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/MAPTHEMES.html)
* Removed not working `Clear Cache` from page `Cache and Files`. Clear the map cache by going
  directly to the folders using menu `Tools` -> `Files and directories` -> `Show map cache`.
  Delete folders for related map themes there to clear the cache. [#619](https://github.com/albar965/littlenavmap/issues/619)
  [Little Navmap User Manual - Cache and Files / Map Display](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/OPTIONS.html#cache-map-display)
* Added airport filter to hide military airports. Airport filters are reset after update.
* Fixed potential issue with steps effect when drawing lines like the aircraft trail.
* Now adding runway true heading to labels if declination is excessive as in Antarctica.
* Now rounding the entry altitude for destination runways to nearest 10 feet or meter to avoid
  confusing single digit values.
* Added option to hide AI on ground on options page `Map Display`. This is enabled per default and can help
  to avoid hidden AI if traffic tools do not update the on-ground status of aircraft properly.
* Improved measurement line drawing. Added new measurement line label text colors to configuration
  file `little_navmap_mapstyle.ini` (look for `DistanceMarker`).
* Measurement label now aligned with line.
* Avoiding flickering course values while dragging measurement line.
* Better measurement line handling: Tooltip and hotspot for measurement lines is now origin and end.
  The line can be moved from both ends.
* Measurement lines can now be the origin of a userpoint showing its label.
* Added option for airway display at flight plan legs in options on page `Map Display Labels` in
  branch `Flight Plan`. This is disabled per default.
* Adjusted settings for offset localizer to also detect slightly offset KJFK 22R. This is indicated
  by `Offset Localizer` in the tooltip.

### User Interface

* Reading correct ICAO aircraft designator from MSFS `aircraft.cfg` files for user aircraft now.
  This allows to get the right ICAO aircraft designator like `B738` or `C172` which is used to
  match the aircraft performance to the simulator aircraft resulting in a warning in case of mismatch.
  You might need to adapt the aircraft performance files in some cases to avoid the warning message like
  `User aircraft type "BE58" in simulator is not equal to type "EPIC" used in performance file`.
  Adapt performance and menu `Aircraft` -> `Edit Aircraft Performance`. Change the field `Aircraft type`
  on the tab `Aircraft` accordingly.
  [Little Navmap User Manual - Aircraft Type]https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/AIRCRAFTPERFEDIT.html#aircraft-type)
* Changed the airspace category toolbar buttons and menu items to a more logical order.
* Fixed several issues in dialog window and when creating folder structure for user files from
  menu `Tools` -> `Create Directory Structure for saving Files`.
* The web server is now only restarted on parameter change in options. This avoids the hanging due
  to unneeded restart on exit or cancel. [#1019](https://github.com/albar965/littlenavmap/issues/1019)
* Now allowing comma separated coordinates for decimal coordinate formats like `50,07477,8,54053` or
  `50.07477,8.54053`. Spaces before and after the comma are allowed.
  [Little Navmap User Manual - Coordinates](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/COORDINATES.html)
* Added capability to read Google Earth or Google Maps coordinates with space separated degree
  and decimal minutes like `-54 50.60, -68 17.73`.
* Added option for Google coordinate output format in options on page `Units`.
* Fixed issue where a search for userpoint type was not applied on startup.
* Fixed freeze after error dialog when moving or deleting GLOBE path.
* Fixed occasional freeze or crash when loading the elevation profile on startup.

### User Manual

* Adapted included and online user manual to changes.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.11/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
