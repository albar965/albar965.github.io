---
layout: post
title:  Little Navmap 2.0.2 released
date:   2018-06-02 09:30:00 +0200
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.0.2/LittleNavmap-win-2.0.2.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.0.2/LittleNavmap-macOS-2.0.2.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v2.0.2/LittleNavmap-linux-2.0.2.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/)

[**► Features**](/littlenavmap.html)

## Notes

* **It is recommended to reload the scenery library.**
* **X-Plane users: Reinstall the included _Little Xpconnect_ 1.0.9 for bug fixes regarding magnetic variation.**
* **Translations for the graphical user interface are included with the download.<br/>Translation packages are not required.**

**IVAO is currently not activated due to server capacity problems, which is completely understandable. Since I don't have time to set up and run a mirror, I'm looking for volunteers.**

## Changes from Release 1.8.5 to 2.0.2

### Quick Overview

* Several user interface translations included.
* Support for online networks like VATSIM or custom networks.
* User defined waypoints: Complete management, import, export, search and display.
* More flight plan export formats.
* Added menu options to save waypoints instead of SID/STAR or approaches.
* New airport display options.
* Compass Rose
* IVAO weather and nearest NOAA weather.
* Included Navigraph AIRAC database was updated to cycle 1801.

### New online manual chapters and/or changes

* [Userpoints](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/USERPOINT.html)
* [Userdata menu](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/MENUS.html#userdata-menu)
* [Userpoint map context menu items](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/MAPDISPLAY.html#add-userpoint)
* [Online Networks](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/ONLINENETWORKS.html)
* [Compass Rose](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/COMPASSROSE.html)
* [Edit flight plan positions](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/EDITFPPOSITION.html)
* [Coordinate formats](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/COORDINATES.html)
* [Customize display radius for online centers](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/CUSTOMIZE.html#customize-online-center)
* [Customize userpoint icons](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/CUSTOMIZE.html#customize-userpoint-icons)

Thanks to Marc from Germany for revising the manual!

### New Options

Click on image for large view. Tooltips in dialog `Options` give more help.

| ---- | ---- |
| **Map Display**<br/> [![Options Map Display](/assets/images/littlenavmap_new_options_mapdisplay_small.jpg)](/assets/images/littlenavmap_new_options_mapdisplay.jpg) | **Simulator Aircraft**<br/> [![Options Simulator Aircraft](/assets/images/littlenavmap_new_options_aircraft_small.jpg)](/assets/images/littlenavmap_new_options_aircraft.jpg) |
| **Weather**<br/> [![Options Weather](/assets/images/littlenavmap_new_options_weather_small.jpg)](/assets/images/littlenavmap_new_options_weather.jpg) | **Map**<br/> [![Options Map](/assets/images/littlenavmap_new_options_map_small.jpg)](/assets/images/littlenavmap_new_options_map.jpg) |

### Translations

* Github Issue: [#135](https://github.com/albar965/littlenavmap/issues/135)
* Program user interface translations: Dutch, Brazilian Portuguese, French, Spanish and German. All complete.
  No language packages needed. Thanks to all who contributed!
* Included map legend in Spanish, French and German.
* Help system now more flexible and can load legend and help files if present for language.
  Also uses a fuzzy way to find files by ignoring language region/country
  like `pt` (Portuguese) vs. `pt_BR` (Brazilian Portuguese).
* French offline PDF manual is from previous version. Full translation will be provided as an update package.

Thanks to Daniel "Wolf", Eddy Crequie, merspieler, Patrick JUNG , Ricardo Vitor and Stephan Leukert for the translations.

### Online Networks

* Github Issue: [#45](https://github.com/albar965/littlenavmap/issues/45)
* Manual: [Online Networks](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/ONLINENETWORKS.html)
* Added IVAO, VATSIM and custom online networks. **IVAO is currently disabled due to missing clearance.
  Need volunteers to run a mirror.**
* All online network tabs and menu items are hidden in Little Navmap until online is activated in
  dialog `Options` on tab `Online Flying`.
* Update rate and URL configuration for custom networks in dialog `Options` on tab `Online Flying`.
* Display of clients, servers and online centers on map, in information windows, search tabs and context menus.
* Search highlights and tooltips for centers and client aircraft similar to airports and navaids.
* CSV export via clipboard for all online information in search window.

### Userpoints

User defined waypoints like visual reporting points, bookmarks, points of interest and others.

* Github Issue: [#3](https://github.com/albar965/littlenavmap/issues/3)
* Manual: [Userpoints](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/USERPOINT.html)
* New main menu `Userdata` which provides various import and export options and more.
* A new search tab `Userpoints` in the `Search Window` for editing and searching with the same functionality
  as the other search tabs.
* New menu entries in map context menu to add, edit, delete or move userpoints.
* Information window and map tooltips can display userpoint information on tab `Navaids`.
* Edit dialog for userpoints also allows bulk edits on more than one selected point.
* Add userpoint dialog remembers input to ease adding more than one similar point.
  Content can be cleared using the reset button.
* Add dialog is context sensitive and prefills airport data if you add a bookmark on an airport for example.
* Add userpoint from map is filled with actual elevation at clicked position (only for GLOBE data).
* Coordinates can be edited manually in edit/add dialog. More than 10 coordinate formats are recognized. See tooltip on `Latitude and Longitude` field.
* Userpoints can be added to a flight plan and are converted to flight plan user defined waypoints (green square).
* A timestamp of last change is kept for each userpoint which allows to find latest changes or imports.
* Userpoints can be temporary. These will be removed on startup.
* Flight plan drag and drop editing allows to add userpoints.
* Import and export for CSV (format from other well known programs), Garmin `user.wpt` and X-Plane `user_fix.dat`.
* Export to a XML file suitable for the FSX/P3D BGL compiler.
* Icons and types can be extended by placing SVG files with names like `userdata_My own Userpoint Type.svg` in
  the settings directory. Icons for stock types can be changed by placing an icon with the same name like
  `userdata_Airstrip.svg` in the settings directory. See customization below.
* Option for automatic creation of userpoint entry of type `Logbook` for each takeoff and landing.
  Logbook entry for landing contains trip information like average speed, fuel consumption and more.
* Made naming in GUI more consistent. `Userpoints` are bookmarks, VRPs, etc.,
  `Positions` are user defined positions in a flight plan.
* Creating backups of file `little_navmap_userdata.sqlite` on startup since undo/redo is not available yet.

### Flight Plan Save and Export

* Added menu options to save waypoints instead of SID/STAR or approaches. This affects all flight plan formats.
  Note that procedure information is omitted in the flight plans if enabled and cannot be reloaded.
  [#195](https://github.com/albar965/littlenavmap/issues/195)
  See [Save Waypoints for Approaches and Save Waypoints for SID and STAR](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/MENUS.html#export-flight-plan-approach-waypoints)
  in the manual.
* New flight plan export formats: Blackbox Simulations Airbus, iFly 737, ProSim, UFMC and X-FMC.
* Added `Show in SkyVector` to export menu.
* Can now load FSC flight plan files. Does not load procedures.
* Save button is now always enabled to allow saving PLN file again after P3D changes file on loading.
* Added option to save FSX/P3D flight plans using short names. `Options` on tab `Flight Plan`.
* Export clean PLN flight plan file now remembers its own directory to allow saving to separate folder.
* Fixed issues where circle-to-land procedures were not loaded properly and were incorrectly assigned to a runway.
* Fixed issue where STAR procedures with runway assignment were not loaded correctly.
* Fixed issues in `corte.in` export for flight factor aircraft. Last `DCT` is now omitted on export and full names
  are used for approach ident (`I16L` before, now `ILS16L`).
* Fixed issue where flight plan was saved in the wrong format after undo/redo and
  `Save as`. This resulted in e.g. FSX PLN content in a FMS file.
* Fixed issue when loading Fsbuild created flight plans which are missing the altitude field.

### Flight Plan

* Coordinates of flight plan user defined waypoints can now be changed in edit dialog.
  See [Edit Flight Plan Position](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/EDITFPPOSITION.html).
* Now highlighting flight plan segments traveling wrongly against one-way airways in red to indicate error.
* Showing ILS frequency in flight plan table if an ILS or LOC approach procedure is used.
* Added follow selection mode to context menus of the flight plan window.
  This will center selected navaids or airports on the map using the current zoomlevel when
  enabled. [#129](https://github.com/albar965/littlenavmap/issues/129)
* Added `zoom to departure` option in parking question dialog which shows up before saving. This allows to quickly
  assign a parking position on the map.
* Fixed display issues around procedure names and suffixes.
* Now showing navaid ranges for navaids which are parts of procedures E.g. `Show navaid range` for a
  NDB which is part of a procedure.

### Flight Plan Description

* Fixed errors in flight plan description parser. Now nearest airport or navaid is used for non
  unique names instead of giving preference to (possibly far away) waypoints.
  [#213](https://github.com/albar965/littlenavmap/issues/213)
* Fixed several issues when parsing route strings. Now takes nearest navaid only if no
  waypoint/airway combination was found.
* Fixed misleading warning in route string parser if airport name as intermediate destination or waypoint.
  is equal to an airway.

### GUI

* Added zulu time and day of month to status bar on the right (real time and date - not simulator time and date).
* Added display of magnetic declination below cursor to status bar.
* Split Map menu into Map and View since it got too big.
* Added tooltips for all tab headers in main window and shortened some tab names to save space.
* Removed menu items from macOS application menu since automatic adaption from Qt does not work.
  Fixes for missing about dialog on macOS.

### Flying

* Added option to keep active leg on top of flight plan table while flying. `Options` on tab `Simulator Aircraft`.
* Added new flight plan and aircraft centering mode which keeps active leg and aircraft
  visible on the map when flying. Falls back to center aircraft on ground. `Options` on tab `Simulator Aircraft`.
  [#133](https://github.com/albar965/littlenavmap/issues/133)
* Added `jump back to aircraft` options after given time when flying. Dialog `Options` on tab `Simulator Aircraft`.
  Allows zooming and scrolling during flight without disabling and re-enabling `Center Aircraft`.
  [#133](https://github.com/albar965/littlenavmap/issues/133)
* Added option to dim passed legs of flight plan on the map and display them in a different
  color. Labels for passed legs are omitted to unclutter the map. Added color selection for passed
  flight plan legs. `Options` on tab `Map Display`. All [#218](https://github.com/albar965/littlenavmap/issues/218)
* Adjusted label display for nearest five AI to show within 20 nm if vertical difference is not more than 5000 ft.
* On-ground indication was unreliable for X-Plane causing first leg already centered on ground.
  [#133](https://github.com/albar965/littlenavmap/issues/133)

### Weather

* Added display for NOAA nearest weather stations. Now downloading index page from NOAA to avoid empty requests.
* Added IVAO weather reports including options, URL configuration, URL test and display of nearest station.
  [#132](https://github.com/albar965/littlenavmap/issues/132)
* Weather reports older than six hours are now shown in red in information window on tab `Weather`.
* Fixed error on METAR stations improperly reporting `CAVOK 9999`.
* Weather report now corrects old dates back to last valid date instead of showing future dates.
* Variable winds are now reported correctly when speed is missing. [#212](https://github.com/albar965/littlenavmap/issues/212)
* Now reporting variable winds together with wind/direction if both are given. [#212](https://github.com/albar965/littlenavmap/issues/212)
* Fixed report on clouds when altitude was not given. [#212](https://github.com/albar965/littlenavmap/issues/212)
* Fixed variable wind reported incorrectly for `///KT` METAR. [#224](https://github.com/albar965/littlenavmap/issues/224)
* Solved problem with X-Plane METAR.rwx containing duplicate records. [#212](https://github.com/albar965/littlenavmap/issues/212)
* Removed METAR date for simulator weather since it was wrongly parsed and corresponds to simulator date anyway.

### Compass Rose

* Github Issue: [#141](https://github.com/albar965/littlenavmap/issues/141)
* Manual: [Compass Rose](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/COMPASSROSE.html)
* Added compass rose showing magnetic direction plus option for line thickness
 (`Options` on tab `Map Display`). Compass rose is always visible when enabled.
 Heading and track lines are displayed as well if an aircraft is shown. Size is adjusted to screen
 with a maximum of 500 nm radius. Enable in menu `View` -> `Show compass rose`.

### Map

* Now falling back to magnetic heading for aircraft rotation on map if true heading is not available.
  This should solve wrong aircraft heading on some online network clients where all client aircraft were shown
  with a heading of zero degree.
* Added X-Plane 3D airport flag as additional criteria for treating empty airports. This can
  be used to hide or dim all X-Plane airports which are not 3D. See `Options` on tab `Map`.
* White airport background can be disabled now. `Options` on tab `Map Display`.
* Added option to disable all airport diagram features except runways for all who like to use
  the OpenStreetMap or other map background. See dialog `Options` on tab `Map Display`.
* Added options to disable label background color for airport, flight plan and navaids. `Options` on tab `Map Display`.
* Added options to disable map clicks for airports, navaids and airspaces similar to
  tooltips. Dialog `Options` on tab `Map`.
* Fixed map overlays reappearing randomly when switching map theme.

### Map Themes

* Changed OpenStreetMap, OpenMapSurfer and Hillshading map downloads to use a SSL encrypted connections (HTTPS).
* Fixed SSL loading problems on Linux (first noticed on Ubuntu 18.04) which kept the program from checking for updates or loading certain map themes like the OpenTopoMap.

### Search

* Added override mode for airport ICAO search. All other search options will be ignored if a
  user enters more than two characters in the `ICAO Code` field. Override is indicated in
  the bottom label below the search result table. This helps to quickly find an airport without
  resetting search options.
* Added follow selection mode to context menus of all search windows.
  Will center selected navaid, airport or procedures on the map using the current zoomlevel when
  enabled. [#129](https://github.com/albar965/littlenavmap/issues/129)
* Increased maximum search radius for airports to 8000 nm.

### Information

* Added zero fuel weight and total payload to window `Simulator Aircraft` on tab `Aircraft`.
* Added estimated fuel at destination and TOD was well as estimated gross weight at
  destination to window `Simulator Aircraft` on tab `Progress`.
* Now showing transition altitude in airport information if available in Navigraph database.

### Procedures

* Changes for SID and STAR that use multiple or parallel runway assignments indicated by e.g.
  `All` or `23L/23R`. Added sub menu in procedure search for SID/STAR selection
  if more than one runway can be selected. Procedures are now correctly resolved if loading or
  assigning such cases. This solves problems when saving procedures in X-Plane FMC 11 format or other
  various formats. [#179](https://github.com/albar965/littlenavmap/issues/179)
* Changed context menu `Show Procedures` to show different texts when airport is
  destination or departure of current flight plan. Show procedures now sets filter to departure or
  arrival procedures depending on selected airport of flight plan.
* Now showing a red warning message on top of the flight plan window if STAR and approach
  runways do not match. [#179](https://github.com/albar965/littlenavmap/issues/179)
* Fixed tooltip and information display showing facility `Procedures` for all airports.
* Fixed problem where fixes for long (> 200 NM) SID or STAR procedures could not be resolved
  and showed red waypoint errors in the procedure search tree.
* Duplicate approach procedures for circle-to-land approaches are now suppressed.

### Scenery Database

#### Navigraph

* The included Navigraph AIRAC database was updated to cycle 1801.
* Wrong magnetic declination for VOR stations now fixed.
* Procedures of three letter airports are now recognized (if airport ident did not change).
* Added transition altitude to airports.
* Now updating magnetic declination for VOR, DME or TACAN with a calculated value where missing.
* Corrected wrong runway heading for Navigraph compilation. [#214](https://github.com/albar965/littlenavmap/issues/214)
* Fixes for missing airway segments in DFD compiler. Fixed duplicate removal of
  waypoints. [#201](https://github.com/albar965/littlenavmap/issues/201)
* Now ignoring artificial circle-to-land approaches in DFD compiler.

#### X-Plane and Navigraph

* SID and STAR common routes are now merged correctly into
  procedures. This results in correct SID/STAR and also removes
  the `ghost` entries. [#193](https://github.com/albar965/littlenavmap/issues/193)
* Now removing all unneeded dummy NDB and VOR waypoints that were
  created for airway generation. [#201](https://github.com/albar965/littlenavmap/issues/201)
* Fixed issue where approach name and/or suffix were not read correctly in X-Plane and DFD compiler.

#### FSX/P3D

* Now reading FSX/P3D scenery entries pointing to `scenery` instead
  of the base directory which is allowed in P3D. These were silently omitted previously.
* Reading `.../Roaming/.../add-on.cfg` and
  `.../ProgramData/.../add-on.cfg` now. [#211](https://github.com/albar965/littlenavmap/issues/211)
* FSX/P3D is now hidden in the scenery library menu if the simulator base folder from the registry does not exist. This should help to avoid menu items for uninstalled simulators.
* Added script by Gérard to clean out fake runways for AI in FSX/P3D.
* Added logging for airport altitude to log file when reading delete records from FSX/P3D.
  Example: `Add-on airport altitude for VQ10 changed from 7703 ft (BGL Scenery/0902/APX72220.bgl) to 8363 ft`
* Improved BGL file and scenery reading to include hidden and system files.

#### X-Plane

* Updated included magnetic declination file to 2018.
* Fixed issue with X-Plane airports that have a far off reference position. Now
  falling back to center of bounding rectangle or center of a single runway.
* Fixed problem where CIFP files with lower case names were not recognized correctly.
* Fixed issues with file or directory exclusion for X-Plane scenery loader
  which did not work properly in some cases.
* `Custom Scenery/Global Airports/Earth nav data/earth_nav.dat` is
  now read properly to get fixed ILS. This solves problems wrong ILS heading in many places like LOWI.

## Customization

* Program will create a backup of `little_navmap_mapstyle.ini` and replace file with new colors
  (blue airways). All customization files are now versioned. Section `[Options]`.
* Added `customize` folder and icons.zip for icon templates to allow users creating their own icons
  based on default ones.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.0/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
