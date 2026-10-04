---
layout: post
title:  Little Navmap 3.2.1.beta released
date:   2026-10-04 13:00 +0200
categories: release
release-version: 3.2.1.beta
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.2.1.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavmap-win64-3.2.1.beta-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.2.1.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavmap-macOS-3.2.1.beta.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 24.04\)** - LittleNavmap-linux-ubuntu-24.04-3.2.1.beta.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavmap-linux-ubuntu-24.04-3.2.1.beta.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 24.04\)** - LittleNavmap-linux-ubuntu-24.04-3.2.1.beta-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavmap-linux-ubuntu-24.04-3.2.1.beta-1_amd64.deb)

**Other Versions:**

[► Linux \(64 bit, based on Ubuntu 22.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-22.04-3.2.1.beta.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavmap-linux-ubuntu-22.04-3.2.1.beta.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\) - LittleNavmap-linux-ubuntu-22.04-3.2.1.beta-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavmap-linux-ubuntu-22.04-3.2.1.beta-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.2.1.beta](https://github.com/albar965/littlenavmap/releases/v3.2.1.beta) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

**This is a beta/test release of Little Navmap which adds new features, user interface improvements
and fixes bugs.**

**Note that neither the program translations nor the user manual have been updated yet.**

**The menu layout and option pages have changed. See below in sections `User Interface` and
`Options` for more information. Use the search function in the options dialog window if you cannot
find a setting.**

**Editing of features on the map has changed. See section `Markers and Userpoints`.**

**FSX or Prepar3D: There will no longer be any 32-bit versions of Little Navmap. This means that you
need to download and install the 32 bit version of Little Navconnect
[LittleNavconnect-win32-3.0.17.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavconnect-win32-3.0.17.zip)
and connect through it to FSX or Prepar3D. See the included file `README.txt`.**

**See here if you would like to run the beta release besides your stable installation:
[Little Navmap - User Manual - Portable Execution](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#portable-execution).**

**Also update Little Navconnect and Little Xpconnect if you're using one of these.
Little Navmap will show a notification dialog if you use an outdated version of Little Xpconnect.
You can still continue to use it, though.**

**macOS: Keep in mind that you have to clear the quarantine flag when updating
Little Xpconnect. See
[Little Navmap - User Manual - Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

**macOS: Little Navmap is now built into a universal binary containing Intel and Arm architectures.
Rosetta is not needed anymore to run Little Navmap and Little Navconnect.**

Note that the font handling has changed. You probably have to adapt font sizes in the information
display, the map display and the rest of the application.

Thank you very much to everyone who reported bugs and issues!

## Notes

**Context menus, the main menu and the options dialog were reorganized for greater consistency and
logic. Use the search in options on the top left to find options.**

**Drag and drop editing of markers, userpoints and the flight plan on the map has been changed for
simplicity and consistency. Please refer to section `Map` below for details.**

**Features can now be changed by pressing `Ctrl+E` in a table or `Alt+Click` on the map in the
whole program.**

## Known Issues so far

* X-Plane historical weather is not supported yet. Little Navmap will always show the
  latest weather.
* Loading of the MSFS scenery library takes at least 15 minutes. I cannot change this as long as
  SimConnect is required to load the scenery library.
* PACOTS (Pacific tracks system) are not available anymore since the FAA is hiding it
  behind an inaccessible web interface.

## Changes from 3.0.18 to 3.2.1.beta

### Flight Plan

* Added inline editing of remarks in flight plan table. Double click on remarks column opens the
  inline editor in the table. Lost focus or pressing `Esc` saves the changes. Pressing the edit
  shortcut `Ctrl+E` still opens the edit dialog window. Note that the dialog window is cleared for
  certain flight plan changes. [#1350](https://github.com/albar965/littlenavmap/issues/1350) and [#1349](https://github.com/albar965/littlenavmap/issues/1349)
* Edit dialog window for flight plan waypoints (`Edit Flight Plan Position` and
  `Edit Flight Plan Position Remarks` from context menus) does not block application now. The
  changes are applied when closing or leaving the window.
* Changed editing on multiexport configuration. The table can now select cells instead of rows.
  Functions `Reset ...` and `Edit ...` are now based on the selected cell. Press the edit shortcut
  `Ctrl+E` or double click a cell for inline editing paths and patterns directly in the table.
* Added CSV flight plan export format to multi export, menu `File` and the flight plan table
  context menu under `More` -> `Export Flight Plan as CSV`. This saves all information independent of
  column order and visibility in the flight plan table. Copying the table to the clipboard still uses
  the old behavior and omits hidden columns. [#1345](https://github.com/albar965/littlenavmap/issues/1345)
* Added a dedicated SimBrief export dialog window with flight plan summary, optional airline and
  flight number fields, and clipboard export. Thanks to [6639835](https://github.com/6639835) for the
  change.
* Added tooltips for airport links, parking links and more in flight plan header, procedure search
  and information windows. The tooltips can be enabled or disabled in options on
  page `Display and Text`.
* Added real local time indication in aircraft progress tab. Real local time can be shown for
  destination, top of climb, top of descent and the next waypoint. The display is off by default.
  Enable it in menu `Tools` -> `Aircraft display options` or the configuration button in the
  progress tab.
* Route string description can now match userpoints besides normal navaids. Reading and writing a
  description now considers userpoints of type `Waypoint`, `VOR`, `NDB` or `VRP`. Changed
  sub-menu `Advanced` in drop down dialog menu to `More` like other menus. Added option
  `Read and Write Userpoints` in sub-menu `More`. [#1288](https://github.com/albar965/littlenavmap/issues/1288)
* Reworked context menus for flight plan departure and destination related actions. Removed
  `Select Runway ...` menu items. Runways can now be selected in a dialog window after picking an
  airport using `Select Airport ... as Departure ...` or `Select Airport ... as Destination ...`.
  This will include extra waypoints for departure and approach. Do not mistake this with the
  departure parking position.
* The runway selection dialog now always shows the airport which can be used to clear a departure
  runway, approach runway or procedures. The option `Do not Show again` in runway selection dialog
  can be used to skip the dialog window. Departure or approach runways can be selected from the map
  context menu after assigning an departure or arrival airport.
* Adapted download for for North American Tracks to new URL and JSON format changed by the FAA.
* Added parameter `AIRCRAFTTYPE` to flight plan file name pattern which can be changed in options
  on page `Files`. The `AIRCRAFTTYPE` keyword is replaced with the ICAO type designator like `B738`
  for aircraft in the filename pattern. Click `Full pattern` in options on page `File` to
  preselect a file pattern containing all flight plan parameters.
* Added automatic saving for aircraft trail. The time interval can be changed in options on page
  `Map Aircraft Trail`. [#1366](https://github.com/albar965/littlenavmap/issues/1366)
* Added map link for logbook entries in information window on tab `Logbook`. This shows the whole
  flight on the map.
* Fixed loading of GFP flight plans. Now detecting procedures and runways. Resolving airports from
  user waypoint saved formats now.
* Export `GTNXi with user defined waypoints.gfp` now also saves departure and destination as
  coordinates now.
* Fixed issue where procedures were wrongly found for helipads. Example: WN70 selected accidentally
  procedures from KOLM. Now excluding helipads and closed airports when trying to match airports
  between simulator and navdata.
* Reduced waypoint name to 7 characters for MSFS to avoid the magenta line not showing up. Now
  omitting region and airport from userpoints in MSFS export.
* Fixed airport missing procedures. Airport reference points for UBBQ in simulator and navdata are
  too far away to detect the renamed airport.
* Cleanup in context menu: added sub menus `Files` and `More` to flight plan table.

### Aircraft Performance

* A saved performance collection is now continued, even if Little Navmap is restarted. Once a
  session is finished, it won't be changed when doing a new flight, even after changing the
  aircraft or restarting Little Navmap. Note that the performance collection session has to be
  reset manually to start collection. This fixes several issues where a collection would not start.
* The fuel counter in the tab `Fuel Report` now stops after touchdown when state `Finished` has
  been achieved, and keeps its value, even when restarting Little Navmap.
* Updated broken link to ICAO aircraft designator search in the dialog window
  `Edit Aircraft Performance`. [#1311](https://github.com/albar965/littlenavmap/issues/1311)

### Map

See also section `Options` below for new map display related settings.

* Improved drawing of taxiway labels. Labels are now better placed and avoid clustering. Also
  avoiding taxiway label overlap with runways now. [#1290](https://github.com/albar965/littlenavmap/issues/1290)
* Added maximum runway length slider to drop down menu in airport toolbar filter to limit display
  to smaller airports.
* Runway ends now have a hotspot which allows to select them as start position similar to parking
  spots. Hotspot for runway end  right-click is a small black and white circle.
* Now using DME location instead of LOC location for distance related procedure legs. Thanks to
  [6639835](https://github.com/6639835) for the change.
* Added display for waypoint names on lower zoom levels.
* Using long name `Danger` for airspaces now where needed. [#1312](https://github.com/albar965/littlenavmap/issues/1312)
* Changed drawing of regions for touch screen map mode and removed crosses. Removed option
  `Screen Areas Marks`.
* Fixed turn rendering when the previous procedure leg has no drawable distance, such as a
  zero-length IF leg, and the current leg has an explicit turn direction indicator. The change is
  limited to procedure legs where the previous leg cannot provide a valid inbound course for the turn
  calculation. Thanks to [6639835](https://github.com/6639835) for the change.
* Disabled wrongly included touch screen marks for map image saving and clipboard copy.
* VOR, NDB and waypoints are now filled white for better visibility. This is enabled per default
  and can be disabled in options on page `Map Display Features` below
  `Navaids, VOR, NDB, Waypoints and more` by deselecting `Fill Symbol`.
* Airports are now also drawn with yellow fill if they are a part of the flight plan.
* Added `Delete+Click` or `Ctrl+Alt+Shift+Click` for marker and userpoint deletion. See chapter
  `Markers and Userpoints` below for details.
* Added map overlay showing help for map actions. You can hide this by right-clicking on it and
  select `Hide` from the context menu. Enable it again in the map context menu in sub-menu
  `Map Overlays`.
* Added map overlay configuration options to menu `Tools`.
* Moved menus for map overlays from menu `Window` to `Map` and the map context menu.
* Cross mouse cursor indicates moveable or editable features now. Pointing hand mouse cursor
  indicates editable or removable features. This depends if `Map Drag and Drop Edit Mode` is
  enabled or not. See more below in section `Markers and Userpoints`.
* Better display of short measurement lines across the anti-meridian. Problems can still appear
  near the poles. Short measurement lines crossing the anti-meridian can still appear squiggly in
  some cases. In any case the shown distance and headings are correct. [#1381](https://github.com/albar965/littlenavmap/issues/1381)
* Changed draw order for navaids by importance: VOR, NDB, DME and waypoints.
* Fixed issues with map features not resized according to global scale and web server scale. Line
  widths are now scaled too. This applies to scaling settings on option pages `Map Font and Scale`
  and `Web Server`.
* Added line width setting for MORA grid in options on page `Map Display Features`.
* Disabled sun shading for offline maps.
* Limiting size of aircraft icons since some add-ons return invalid large values.
* Removed useless configuration options for the map scale and compass overlays.
* Fixed program freeze when drawing map near airport OINN using the map theme `Atlas`.
* Corrected several map overlay settings not saved.
* Corrected too large weather symbols. The symbol size can be changed in options on
  page `Map Display Features`.
* Removed bad file reference in DGML files describing map themes. The file `DATELINE.PNT` not
  needed. This resulted in endless loading messages in the status bar and performance degradation.
* More drawing accuracy to avoid jumping map features.
* More display and performance improvements.

### Map Themes

* Added user indication `(user)` to map theme name in menus to indicate a user installed map theme.
* Now showing a description for map themes including the path in tooltips in menu and toolbar
  drop down button menu.
* CARTO maps now require an API key which can be requested at
  [CARTO API Key](https://carto.com/basemaps/apikey/). Enter the key in the field `Carto API Key` in
  options on page `Map Theme Keys` to use the three CARTO maps `CARTO Dark Matter`,
  `CARTO Positron` and the new `CARTO Voyager` in Little Navmap. Note that all included CARTO
  maps use the same API key.
* Added free stock map themes `OpenStreetMap German` and `OpenStreetMap French`. These provide a
  better display of names by using Latin synonyms in some regions of the world and do not need an
  API key or an account.
* Now limiting maximum parallel connections for map tile downloads to two to avoid server overload.
  Adapted maximum connections in DGML files. This avoids Little Navmap from being blocked by map
  providers like OpenStreetMap or OpenTopoMap. As a result the loading speed of maps is slightly
  lower. Also set expiry time for map tiles to two weeks for all included map themes.

### Elevation Profile

* Display options for the elevation profile are reset back to defaults. Right-click into the
  profile and adjust as needed. More settings can be found in options on page `Elevation Profile` and
  other pages. Use the search function in the options dialog window on the top left to find related
  settings.
* Added elevation display for a buffer area surrounding the flight plan using a light green color.
  This shows the maximum elevation within the buffer area around the flight plan. The buffer
  radius can be changed in options on page `Elevation Profile`. The dark green area shows the
  elevation below the flight plan without buffer as before.
* Fixed issues with cut-off text at departure and destination.
* Changed order or sliders in profile. The more often used horizontal zoom is now at the left.
* Added separate font setting for elevation profile in options on page `Elevation Profile`.
* Optimizations to speed up calculation and increased profile accuracy.

### Options

* The option dialog window is now non-modal. This means that it does not block the main application
  and you can move it aside and test your changes immediately. The button `Close` in options will
  ask to apply changes if there are any.
* Option changes which require a restart are detected and Little Navmap will ask for a restart when
  applying changes.
* Improved search function (top left input field). List items are now highlighted for matches.
  The selection is now restored when clearing the search. Showing a message now if nothing matches
  or if search string is too short.
* Added `Map Display Scaling` on options page `Map Display` to change the scale of all features,
  labels and symbols. This helps to avoid issues with high density displays and allows you to change
  the map scale independently from the operating system scales.
* Separate scaling for web display can be found in options on page `Web Server`. This can help if
  you use the web server with a browser on high density displays while running Little Navmap on a
  normal display.
* Added option for enhanced accuracy for scenery and procedure developers. This shows more decimal
  places for measurement lines, flight plan lines and range rings, if enabled. [#1249](https://github.com/albar965/littlenavmap/issues/1249)
* Reorganized option pages. Moved map theme path setting to page `Map Themes`. Renamed
  `Cache and Files` to `Map Cache`, `Map Options` to  `Map Options and Labels` and
  `Map Keys` to `Map Theme Keys`. Added new pages `Map Font and Scale`. `Elevation Profile` and
  `Elevation Data`. Use the search function in the options dialog window on the top left if you
  cannot find a setting.
* Moved advanced and rarely used settings for map display cache, GLOBE cache, weather addresses,
  user agent and more to options page `Connections and Cache`.
* Added new airport display options page `Map Display Airports` including label and feature option
  tree. This has all airport display related settings now on one page.
* Added text background option for airspaces on page `Map Display Features` and for taxiways and
  runways in airport diagram on page `Map Display Airports`. [#1313](https://github.com/albar965/littlenavmap/issues/1313)
* Fixed slow updates when applying option changes. Now updating only relevant parts of the program
  after applying changes.
* Added option for buffer radius in elevation profile on page `Elevation Profile`. This is used to
  calculate the lighter green background in the elevation profile. See section `Elevation Profile`
  above.
* Added option for separate flight plan symbol size on page `Map Flight Plan`. Flight plan and
  label symbol sizes are now combined with general airport and navaid symbol and label sizes.
* Added option to hide or show nearest and interpolated METAR reports in options on page `Weather`.
* Added tooltips for all links in options dialog.
* Refined texts and added more hints.

### X-Plane

* Fixed wrong UTC time and timezone calculation which appeared some cases. [#1125](https://github.com/albar965/littlenavmap/issues/1125)
* Now correcting scenery library selection in automatic mode if navdata is newer than simulator.

### Weather

See also section `Options` above for related settings.

* Fixed METAR parser and date correction which could result in wrong date in some cases.
* Added option to hide or show nearest and interpolated METAR reports in options on page `Weather`.
  This can be set separately for information and tooltips.
* Optimizations for weather loading. Short freezes when loading METARs should be reduced.

### Search

* Added drop down lists storing the search history to airport and navaid search ident
  fields. Right-click into the search input field to delete the current entry or to clear the whole
  history. [#1335](https://github.com/albar965/littlenavmap/issues/1335)
* Added full CSV export for all search result tables. You can save a CSV file from the result table
  context menu in the sub-menu `More`. `Export Search Results as CSV` exports the whole result using
  all columns independently of selection of column order.
  The function `Copy Selection as CSV` did not change behavior and uses the same order as in the
  result table, copies only the selection, and omits collapsed columns.
* Fixed broken shortcuts in navaid search ident field. Pressing `Return` in the input should open
  the first result in the information window and show it on the map. Pressing the key `Down` should
  go to the result list and select the first entry.
* The pattern `""` (two double quotes) can now be used to search for empty fields (`is null`) and
  `-` (minus) can be used to search for not empty fields (`is not null`).
* More corrections and fixes for update issues.

### Markers and Userpoints

The term Map Markers (previously User Features or User Markers) covers measurement lines, range
rings, traffic patterns, holdings and MSA diagrams. These are all objects which can be created and
placed on the map by the user.

* Added new simpler drag and drop mode. This mode also replaces the flight plan drag and drop mode
  but includes markers and userpoints. Enable this in menu `Map` -> `Map Drag and Drop Edit Mode`
  or on the toolbar. This mode allows to move flight plan waypoints, flight plan legs, most markers
  and all userpoints.
* Now using drag and drop instead of click and drag. This means: keep the mouse button pressed
  while moving a feature and release the button to place it.
* All markers except MSA diagrams are now editable by using `Alt+Click` or from the map context
  menu. `Delete+Click` deletes features from the map. This applies to flight plan legs and
  waypoints too. [#1168](https://github.com/albar965/littlenavmap/issues/1168)
* Colors can now be set or changed individually for markers when creating or editing one.
* Moving userpoints now uses the cursor center as a hotspot instead of the icon for easier placement.
* Combined all edit and delete actions for markers and userpoints into two map context menu items.
* All markers like range rings or measurement lines are now saved into a XML (text) file
  `little_navmap.lnmmarker` in the settings folder of Little Navmap. Markers saved previously in
  `little_navmap.ini` are now loaded once after updating and are then redirected to the XML file.
* Added top level menu `Markers` which allows to delete, load, append and save all markers on the
  map. A sub-menu `Recent` shows recently used files.
* You can now hide the distance search center marker (yellow cross) from the map in menu
  `View` -> `Map Markers` -> `Show Distance Search Center Marker`. It is re-enabled if you set
  the marker again.
* The center marker for the home view (house) can be hidden from the map in menu
  `View` -> `Map Markers` -> `Show Home View Marker`. It is enabled again if you set the
  home view again.
* Added folder `Map Markers` to directory structure. Use menu
  `Tools` -> `Create Directory Structure` to add missing folders.

### Information

* Added pages `METAR & TAF` and `metar.cloud` to airport information tab.
* Removed link `AirNav.com` from airport link list since data is not global.
* Several display and formatting issues in information and map tooltips corrected.

### User Interface

* Most dialog windows now have scroll bars similar to the options dialog. Enlarge a window if it is
  too small and keep in mind that you have to scroll down to see all content of a dialog window in
  some cases. This should fix issues with dialogs having off-screen buttons on low resolution
  displays or when using a high user interface scale factor.
* Added automatic style change for dark or light system styles in menu `Window` -> `Style`.
  `Select automatically` now uses system colors while `Fusion` uses its own light colors and is
  now default. Disable this to select a style manually.
* Corrected time display in status bar. Removed GMT and added time zone for local time.
* Added configuration options for status bar. Individual fields and the status bar can now be
  hidden in the status bar context menu (right-click on it). Four different time display options
  can be selected now.
* Added small hints and help texts in status bar and other tooltips. These can be disabled in
  options on page `Display and Text`.
* Little Navmap now comes with its own timezone database that is used to show time zones and
  countries for airports in information, tooltips and the status bar. Note that daylight saving time
  is not used which is indicated by `(no DST)`.
* Added time zone and country display to status bar. Time zone and country are now shown while
  hovering the map.
* Omitting updates if status bar is not visible and for minor position changes. This should reduce
  CPU load on some systems when hovering the mouse on the map.
* Using black (★) and white (☆) star to indicate star rating for airports to avoid the sometimes
  confusing dashes.
* Links are now underlined throughout the application to make them easier to recognise.
* Resetting all table views for flight plan, search and logbook stats now. Fixed saving and
  resetting of table state. Adjust the tables by resizing and dragging the columns in the header
  as needed.
* Changed flight plan and other editing actions. Changed shortcut from `Return` to `Ctrl+E` to edit
  flight plan waypoints, userpoint notes in search and logbook entry notes in the search result.
  Double click a field with the mouse to edit it inline in the table. A tooltip shows the available
  options. The shortcut `Return` is now consistent across all tables and shows items on the map
  and in the information window.
* Links like `Remove highlights` are now grayed out (disabled) in information if no highlights are
  present. Online and normal airspaces are now cleared separately as indicated in the tabs.
* Added airport information tooltips for the flight plan header and the procedure search tab. Hover
  the mouse over one of the blue links to see airport or parking information.
* Adjusted keyboard modifiers for macOS and fixed tooltips to indicate `Ctrl` or `Command`.
* Now adding an `A` to the window title bar to indicate automatic navdata selection. Filenames are
  now shortened in the title bar.
* Changed shortcut menu texts in menu `Window` -> `Shortcuts` to clarify which shortcut toggles
  or activates a window.
* Shortcut behavior has changed: pressing a function key a second time closes the active dock.
  Example: pressing F4 shows the search dock window, activates the airport search tab and focuses
  the ident input field. Pressing F4 again closes the dock window. [#1314](https://github.com/albar965/littlenavmap/issues/1314)
* Changed shortcuts: `Ctrl+Alt+A` is now menu `View` -> `Airports` -> `Show Airports` and
  `Ctrl+Alt+H` is now menu `Map` -> `Map Follows User Aircraft`.
* Added startup messages to splash screen to indicate progress.
* Loading and canceling out when opening KML files produced a wrong error message.
* Changelog now opens the Github release page. It is now opened automatically when a version change
  is detected.
* Fixed placement of main window when last saved position is off-screen.
* Fix for broken table display in printing and PDF export.
* Improvements for tooltips. Fixed misplaced information, wrong line breaks and more. Reduced
  tooltip size and added help hints.
* Fixed several issues when changing user interface style, colors or font and color.
* Improved menus, tooltips and display.

### Web server

* Added QR code display for web server address in options on page `Web Server` and menu `Tools`.
  This opens a dialog window showing a QR code for the computer name or the IP address (select
  either one from the dropdown list button). Take a photo with your smartphone or tablet to open
  the address.
* Fixed broken wind arrows in flight plan table and more on web interface when accessing it
  from macOS. [#1318](https://github.com/albar965/littlenavmap/issues/1318)

### Scenery Library

* The country field is now set for all airports based on third-party data (the timezone database)
  when loading the scenery library of a simulator. Please note that all country names are listed in
  English.
* P3D scenery configuration files `add-on.xml` with broken encoding are not supported anymore due
  to limitations in Qt 6. Correct the files or contact the add-on author if you see issues with this.
* Skipping and logging airways without name now to avoid exception in SQL script. [#1386](https://github.com/albar965/littlenavmap/issues/1386)
* Workaround for null waypoint positions in MSFS 2024. These are logged and skipped now.
* Fixed issue when calculating airways using ambiguous navaids for X-Plane and other simulators.
  Example: H84 started wrongly at IM/ZM at ZMUB while the correct one is IM/ZM at ZMKD. [#1332](https://github.com/albar965/littlenavmap/issues/1332)
* Fixed issue where helipads and other small airports got a too large bounding rectangle.
* Corrected airport procedure display. Example: airport XZ001I/ZSQD (XP12 no Navigraph used) did
  not show procedures since Qingdao Liuting was wrongly detected. [#1337](https://github.com/albar965/littlenavmap/issues/1337)
* Now correcting all country names which are missing or misspelled. This is applied when loading
  scenery library data of all simulators.
* Now skipping the loading of all navdata and all procedures if a Navigraph update is detected in
  the scenery library. This is done by checking for the manifest files in `Community` for creator
  and other attributes. This speeds up loading significantly if a Navigraph update is installed in
  MSFS 2024 but requires the additional installation of the Navigraph update in Little Navmap.
  Note that you will see zero for navaid numbers in the load scenery library dialog window with
  Navigraph and MSFS 2024.

### General

* Optimizations to speed up loading GLOBE elevation data. Now caching files in memory. Keeping a
  maximum of eight files in cache (around 1 GB RAM) as default which can be changed in options on
  page `Connections and Cache`. Increased resolution and accuracy when calculating elevation.
* Fixed issue where program froze when quitting early during startup.
* Fixed several issues with application restart.
* Removed World Magnetic Model and navdata from embedded resources. These are now stored in the
  installation folder to speed up program start.
* Moved translation files to sub-folder `translations`.
* Fixed crash when disconnecting connection from Little Navconnect.
* Avoiding crashes now when reporting connection errors. [#1336](https://github.com/albar965/littlenavmap/issues/1336)

### Command Line

* Reworked command line options and added more functions for user features Added `--force` option
  to avoid any `has changed` dialog windows. Note that this can result in data loss.
* Added options to load GPX and marker files. Start the program with option `-h` or `--help` for
  more information.

### Internal / Development

* Changed style handling. Renamed `little_navmap_nightstyle.ini` to `little_navmap_darkstyle.ini`.
  Styles `Fusion` and `Dark` are now loaded from resources embedded in the program. You can still
  override the styles by placing a copy if the `.ini` files in the settings folder.
* Added options to load runway taxipaths and omit navaids for MSFS 2024 and 2020.
  NAVAIDS: MSFS 2024 and MSFS 2020 only - disables complete navaid loading. Will skip waypoints,
           VOR, NDB and ILS to speed up loading.
           Add `NAVAIDS` to `ExcludeBglObjectFilter` to skip navaid loading.
  TAXIWAYRUNWAY: MSFS 2024 and MSFS 2020 only - excludes or includes taxiways of type runway.
                 Remove `TAXIWAYRUNWAY` from `ExcludeBglObjectFilter` to include these.
* Cleanup in Marble library. Removed all unneeded code, astro library, plugins, QML, QtQuick and
  more.
* Changes in Marble to reduce map server load. A hard-coded maximum number of two parallel
  connections can now be set in the DGML configuration to avoid being blocked by map providers.
* Fixed issues in Marble map overlays where settings were not saved.
* Added translations to Marble.
* Ported all to Qt 6. Currently using 6.5 but all up to 6.11 should compile as well.
* Updated to standard C++20 to allow compilation with Qt 6.10.
* Minimum macOS is now 11. Now building Intel and Arm architectures into a universal binary.
  Rosetta is not needed anymore to run Little Navmap and Little Navconnect.
* Added Wayland libraries for Linux.
* Updated translation files.
* Updated Chinese translation by Eyderoe.
* Updated all used libraries like OpenSSL, Zip, SDKs and more to the latest.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.2.1.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
