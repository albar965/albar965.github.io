---
layout: post
title:  Little Navmap 3.0.0.beta released
date:   2023-12-23 11:00 +0100
categories: release
release-version: 3.0.0.beta
---

### Direct Download (outdated Version)

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.0.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.0.beta/LittleNavmap-win64-3.0.0.beta-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.0.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.0.beta/LittleNavmap-macOS-3.0.0.beta.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-3.0.0.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.0.beta/LittleNavmap-linux-22.04-3.0.0.beta.tar.gz)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.0.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.0.beta/LittleNavmap-win32-3.0.0.beta-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-20.04-3.0.0.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.0.beta/LittleNavmap-linux-20.04-3.0.0.beta.tar.gz)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.0.beta](https://github.com/albar965/littlenavmap/releases/v3.0.0.beta) \(scroll down to `Assets`\).

**► [Alternative Download Locations](downloads.html)**

## Notes

**This is a beta/test release of Little Navmap which adds new features, user interface improvements and fixes bugs.**

**Note that the program translations and the user manual have not been updated yet.**

**Toolbar layout has changed. See below in section "User Interface" for more information.**

**See here if you would like to run the beta release besides your stable installation:
[Little Navmap - User Manual - Portable Execution](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#portable-execution).**

**Also update Little Navconnect and Little Xpconnect if you're using one of these.
Little Navmap will show a notification dialog if you use an outdated version of Little Xpconnect.
You can still continue to use it, though.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Little Navmap - User Manual - Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

Note that the font handling has changed. You probably have to adapt font sizes in the information display, the
map display and the rest of the application.

A big thank you to all who reported bugs and issues!

**🎁🎁🎁 🎄🎄🎄 Happy Holidays to all of you! 🎄🎄🎄 🎁🎁🎁**

## Changes from 2.8.12 to 3.0.0.beta

### Crash and Issue Report

* Added functionality to automatically generate a crash report on startup. Little Navmap will show
  a notification dialog if it detects an improper shutdown of the last session, i.e. a crash. You can
  then choose to skip loading last used files such as the flightplan or window layout that may have caused
  the crash. A Zip file with all important settings and other files is created and can be shown by
  clicking the blue link in the dialog. Upload this file to a platform like
  [FileTransfer.io](https://filetransfer.io/) and send me the link so I can try to reproduce the
  issue. Note that there is no need to collect the log and other files for a bug report now. The
  files optionally skipped on loading are: Flight plan, aircraft performance, all search terms,
  information content, aircraft trail, window layout and KML files. No files are modified or removed.
* You can create a bug or issue report manually by selecting main menu `Tools` ->
  `Create an Issue Report` to get a Zip file containing all relevant files needed to reproduce a problem.

### Flight Plan

* Added function to convert procedures into a list of waypoints. Right click on a procedure leg in
  the flight plan table or the map display and select `Convert to Waypoints`. A warning will be shown
  to indicate limitations of the conversion. After converting you can edit the procedure waypoints
  like any other flight plan waypoint list.
* Added direct to function to all related context menus in flight plan table, map and search result
  table. This function is only enabled if you are connected to a simulator. You can select a direct
  to any waypoint ahead of the active leg, the destination airport or an alternate airport.
  Furthermore you can direct to any position, navaid or airport which are not a part of the flight
  plan. Using `Direct to` adds a waypoint `PPOS` (present position) at the aircraft location and a
  direct line to the clicked position.
* Less important columns are now hidden in the flight plan table per default. You can bring these
  back in the flight plan table context menu item `Flight Plan Table Display Options` or in the main
  menu `Tools` -> `Flight Plan Table Display Options`.
* Added preferred runway indication in departure and destination runway selection dialog window.
  This is based on the selection in menu `Weather` -> `Airport Weather Source` and shows the best
  runways for wind and the used weather source. Also showing head and crosswind for each runway in
  the selection table.
* Added calibrated magnetic declination at a VOR or real magnetic declination at a waypoint to
  flight plan table. This is disabled per default. Enable it in main menu `Tools` -> `Flight Plan
  Table Display Options`
* Now checking altitude restrictions correctly against airways considering the climb and descent
  phase of a flight plan.
* Now clearing airways in flight plan leg if they conflict with restrictions in climb or descent
  after flight plan calculation to avoid errors.
* Added button to dialog windows `Select Departure Runway` and `Select Destination Runway` to
  quickly jump to the procedure search tab showing departure or arrival and approach procedures.
* Changes in flight plan loading. Now detecting and correcting invalid cruise altitude values when
  loading a plan. The corrected altitude depends on plan type (IFR or VFR), used procedures and used
  airways. A notification dialog is displayed if a correction had to be applied.
* An invalid departure and/or destination airport is now allowed when loading a flight plan. The
  altitude at departure and destination points is assigned only if GLOBE elevation data is installed
  and active.
* Corrected wrong indications for flight plan having only one airport as is useful for pattern
  work. Fixed wrong departure indication. Now showing airport as destination as well as distance and
  time for single point plans again.
* Fixed issue with too late loading of elevation data possibly resulting in wrong flight plan
  altitudes.
* Fixes issues where flight modifications triggered unwanted follow selection jumping randomly to
  waypoints.
* Removed wrong indentation in print and HTML flight plan. More cleanup in HTML export and
  printing. Made header smaller. [#1054](https://github.com/albar965/littlenavmap/issues/1054)
* Moved distance and time section in flight plan header up to general data. Added underline as
  separator in flight plan table header below distance and time section.
* Now showing a warning message if the parking spot of a flight cannot be found after loading or
  switching simulator databases.
* Fixed altitude adjustment. An altitude of 28,000 ft now remains at this value instead of wrongly
  extending it to 30,000
* User interaction fixes in flight plan table. Now avoiding unwanted centering of navaids due to
  follow selection while editing flight plan. Reduced unneeded updates. Fixed cursor positioning when
  editing flight plan.

### Flight Plan Route Description

* Now reading and optionally writing departure runway and approach procedure/runway to and from ATS
  strings.
  You have to enable this in the dropdown menu button of the `Flight Plan Route Description` by
  selecting `Write Runway and Approach instructions` and fetch the route description from the current
  flight plan. Examples: `EDDK/06 NVO1K NVO Q760 INLAR T853 LMA EDDL/LMA.I05R` (approach ILS 05R via
  LMA) `GCLA/36 TFS3T TFS GCTS/TES2.I07-Y` (depart from runway 36 using SID TFS3T) and `KSFO/01R DCT
  BAART R464 BITTA KAENA2 PHNL/BOOKE.R04L` (approach RNAV 04L via BOOKE). This allows to share a
  complete flight plan by just using the route description.
* Logbook entries now use the detailed format for route description.
* Moved less used menu items to sub-menu `Advanced` in drop down button menu in
  `Flight Plan Route Description` dialog window.
* Fixed issue where wrong SID and STAR runway assignments were not recognized and no error message
  was printed.
* Better error report and warnings in output window.
* Updated quick help for route description.

### Flight Plan Export

* Added export, loading and appending of an aircraft track from and to a GPX file in main menu
  `File` -> `GPX Exchange Format`. GPX track is centered after loading if enabled in options on page
  `Files`.
* Moved GPX export to category `Garmin` in multiexport.
* Fixed wrong altitude in route section for GPX export. Now using calculated altitudes as shown in
  elevation profile. [#1053](https://github.com/albar965/littlenavmap/issues/1053)
* Corrected export of `txt` flight plans where STAR keyword was missing in some cases. This
  affected JarDesign and Rotate MD-80 aircraft.
* Added warning for invalid VFR flights plans when exporting a VFR plan to MSFS using airways and
  procedures.
* Fixed issue where export did not stop when answering `No` in warning dialog.
* Now prefixing one digit runway numbers with zero for X-Plane FMS export to avoid issues when
  loading into the GPS or FMS.

### Information

* Better text formatting in airport runway and procedure information. Added separator line for
  runways and procedures.
* Made more important fields in aircraft progress bold and large for better visibility while
  flying: Heading, wind and pressure.
* Fixed issue where airports having procedures were not loaded properly in airport tab `Nearest`.

### Map Display

* Added new map theme `Stadia StamenTerrain` now requiring an API key. Delete the old StamenTerrain
  files in your map themes folder which can be seen in options on page `Cache and Files` or in the
  installation folder `.../Little Navmap/data/maps/earth` to avoid error messages when starting
  Little Navmap. [The obsolete installation instructions are here](https://www.avsim.com/forums/topic/638380-stamenterrain-map-theme-is-discontinued-gray-blocks-in-map/).
* Better error messages about map theme conflicts now showing both offending files.
* Added option to define distance of departure leg in airport traffic pattern.
* Option to use color or black and white gradients for aircraft trail indicating flown altitude.
  Enable this in options on page `Map Aircraft Trail`. The gradient is also used in the elevation
  profile. [#97](https://github.com/albar965/littlenavmap/issues/97)
* Added tooltips for aircraft trail and logbook trail preview. This is off per default. Enable this
  function in option on page `Map Tooltips and Clicks`.
* Trail points are now created dynamically depending on aircraft flight path to result in a trail
  having less points on straight legs but more points in turns or when doing altitude changes. This
  helps to improve map display performance. As a result, the trail points are not evenly spaced.
* Add-on airport display has changed and now adheres to airport filters instead of forcing an
  always-on display. Add-on filter now only overrides zoom settings and not filters. This means you
  can hide all add-on airports having a `Soft Surface`, for example.
* Fixed incorrect airport filter by procedure status which omitted airports in some cases. Examples
  EDFQ, EDGS, EDME and EKSN with MSFS and Navigraph in mixed data mode. [#1055](https://github.com/albar965/littlenavmap/issues/1055)
* Added select in flight plan in map context menu `More` -> `Select Leg in Flight Plan` or for each
  click on a flight plan leg if enabled in options on page `Map Tooltips and Clicks`. This will
  highlight a flight plan leg in the table if you click on it in the map.
* Added option to hide alternate airports and related flight plan legs in menu
  `View` -> `Show alternate Airports` or on toolbar.
* ILS are now shown or hidden depending on related airport visibility as selected in the airport
  filter on the toolbar or in main menu `View` -> `Airports`.
* Added new airspace styles by Michael Schuster. Thank you a lot for your help!
* Map colors and styles are now loaded from a resource embedded in the program. You can still add a
  file `little_navmap_mapstyle.ini` to the settings folder to override the default styles. Your
  current `little_navmap_mapstyle.ini` is automatically backed up on first start after updating
  Little Navmap.
* Fixed issue where color for caution airspace could not be changed in `little_navmap_mapstyle.ini`.
* Now disabling font anti-aliasing for all labels when moving map to get a smoother movement.
* Fixed performance issues when drawing airway and other rotated text labels on Windows which
  resulted in performance issues when moving the map with airways or ILS visible.
* Now using Freetype as font engine for better text labels and better performance on Windows.
  Rotated texts are better readable now.
* Improved placement of flight plan text labels to minimize overlap.
* Procedure preview now shows restrictions also for `Preview all Procedures`.
* Added airspace labels. This is not perfect yet, labels may still overlap. Disable the labels or
  limit airspace display to improve map display performance if you see jerky map movement.
* Airspace label options added to options dialog on page `Map Labels` in branch `Airspaces`.
* Added text size option for airspaces on options page `Map Display` section `Airspaces`.
* Fixed missing COM on online center previews. [#625](https://github.com/albar965/littlenavmap/issues/625)
* Added option to disable redundant airspaces with multiple code `Z` on options page `Map Display`.
  [#1047](https://github.com/albar965/littlenavmap/issues/1047)
* New option for airspace transparency and boundary line thickness on options page `Map Display`.
  These options are combined with styles in `little_navmap_mapstyle.ini` if this file is present.
* Fixed issue where large airspaces near anti-meridian disappeared.
* Now drawing transparent surfaces in X-Plane as light gray.
* Colors for apron, runway and other surfaces can now be changed in little_navmap_mapstyle.ini.
  [#1059](https://github.com/albar965/littlenavmap/issues/1059)
* Fixed issue where truncated labels appeared at measurement or other lines.
* Added length in NM and ft or Meters to measurement line tooltips.
* Fixed missing inbound an outbound arrows at flight plan and improved text placement for these
  labels around VOR to avoid overlapping the symbols.
* Improved labels on parking spots on the map. Now replacing known keywords like `Gate` and others.
* Adjustments to background text boxes. Using rounded rectangles now. Corrected margins for text
  background rectangle.
* Changed default map darkening when using style from menu `Window` -> `Style` -> `Night` to a
  lighter value. You can adjust this in options on page `Map` in section `Map Display Options`.
* Fixed issue where internal cache was not cleaned when switching databases resulting in wrong
  nearest airport with procedure indications.
* New performance checking options for drawing in `little_navmap.ini` in group `[Options]`, key
  `MapLayerDebugDraw`. This will print draw times to the map display.
* Fixed random crash when calculating best runway by wind for tooltip.
* Further optimizations and drawing improvements.

### Elevation Profile

* Now deleting aircraft trail in elevation profile on takeoff to avoid a cluttered elevation
  profile. This does not affect the trail on the map display which is independently stored.
* Added optional display of vertical speeds to elevation profile header. You can enable this in the
  profile context menu or in the main menu `Tools` -> `Elevation Profile Display Options` in branch
  `Header Line`. Elevation profile settings are reset now and have to be re-adjusted.

### Options

* Reorganized options dialog and moved some options to new pages.
* Added search function to options dialog on the top left. Search reduces the visible pages to the
  ones containing the search text. Matching labels and buttons are highlighted on each page.
* Added hints prefixed with a lightbulb in the options dialog pointing to other related settings.
  Some hints contain a link which directly opens the related page. Bold text is still an important
  note like `Restart required`.
* Corrected truncated texts in options label tree.
* Extended minimum and maximum line widths that can be set in options dialog for map features.

### Procedures

* Added ARINC procedure type like `I13R` or `R12` in brackets for approaches in procedure search
  tree.
* ARINC type and procedure ident can now be searched. `DACNA (R06)` will be found when entering
  `DAC` or `R06`, for example.
* Better indication for number of transitions using text instead of the misleading `T`.
* Added preferred runway indication in procedure search top label based on selection in menu
  `Weather` -> `Airport Weather Source`. This shows the best runways for wind and the used weather
  source.
* Showing head and crosswind components for approach procedures in procedure tree based on
  `Airport Weather Source`.
* Now considering airport ident when resolving procedure leg fixes to avoid invalid duplicate
  waypoint names in a region.

### Search

* Completely reworked search functions for all search tabs. Now looking for partial text matches
  per default instead of requiring stars as wildcards in all text fields. This means that a search
  term of `Chicago` will find Gary Chicago as well as KORD and `EDDE` will find Erfurt-Weimar (EDDE)
  as well as Wedderburn. Stars `*` as wildcards and double quotes `"` for exact search can still be
  used. You can also enter a space separated list of names or idents and Little Navmap will show the
  results for each name.
* Added search field for all airport idents and names (ICAO, FAA, city, name and others) using
  partial match for quick search. Separate search fields are still available. The same rules as
  mentioned in the point above apply.
* Modified search fields hidden from the dropdown button menu (three-lines-button) are now ignored
  when searching.
* Search option fields selected from context menu using include/exclude are now opened
  automatically to avoid confusion.
* Now using better indications in the dropdown menu items. `(changed)` shows an option is used and
  visible to the user. `(changed, not used)` indicates a changed option which is not used since the
  related fields are hidden from the dropdown menu button.
* Corrected broken sort order of numerical columns when using distance search [#1060](https://github.com/albar965/littlenavmap/issues/1060)
* Fixed search to allow usage of underscore (`_`) and percent (`%`) characters.
* Added option to preview the entries to be deleted when using the cleanup function in the
  userpoint and the logbook search.
* Fixed date and time stored in wrong format after editing a logbook entry. This resulted in a
  wrong sort order when sorting by time in the logbook table. Now storing local real time with
  timezone offset. Log data with wrong local real time and missing timezone is now corrected to
  current timezone offset. [#1057](https://github.com/albar965/littlenavmap/issues/1057)
* Fixed crash that appeared when importing logbook entries or userpoints a second time.
* Optimizations to avoid redundant queries on loading and parameter switch.

### User Interface

* Split toolbars into smaller sections and reorganized toolbar buttons for a more logical order.
  The smaller toolbars can now be better arranged to user needs.
  Note that the initial state after the update is not defined. You either have to re-arrange
  the toolbars manually or use the function in main menu `Window` -> `Reset Window Layout to Default`
  which also resets the toolbar layout to default.
* Added sub-menu `User Manual - Helpful Chapters` with important help links.
* Added new menu `Search` for quick access to most used search functions.
* Moved toolbars and dock window actions in menu `Window` to sub-menus.
* Now applying a font change to all tables and widgets instantly. Fixed issue where not all font
  attributes were taken in program windows.
* Fixed issue where bold font attribute was not considered in flight plan table and map labels.
* Updated menu button and tab button icons for better visibility.
* Corrected paths in logbook and other places. Now using operating system native path notation.
* Now compacting status bar fields after timeout if the mouse cursor is not inside the map (no
  coordinate display).
* Fixed issue where a canceled save process kept an invalid filename in file name history.
* Adjustments for style `windowsvista` for a better indication of selected menu items which were
  barely visible before.
* Adjusting selection color for inactive tables on Windows.
* Fixed issue where not all toolbars were resized on macOS.

### Other

* Now also searching for ICAO code instead of internal ident for METAR reports when using X-Plane
  to avoid missing weather reports.
* Increased tolerance for altitude difference when detecting duplicates while flying online. This
  should help to avoid the shadow aircraft.
* Fixed various issues when using Windows UNC paths (file shares like `\\server\share\path`).
* Enabled IPv6 for remote connections to Little Navconnect.
* Added semicolon to invalid characters in filename. This will be replaced in file names when
  exporting flight plans.
* Replaced colon with comma as separator on Google coordinates in Italian translation.

### Scenery Library

* Additional scenery folder added in options on page `Scenery Library Database` is now read
  recursively for all simulators. This means that you can use sub-directories to organize your
  add-ons.
* Hints about encrypted airports and others can now be skipped (`Do not show hints again ...`)
  after loading a scenery library database.
* Now excluding all navaids in detected Navigraph update when reading scenery library of MSFS. This
  speeds up the loading time.
* Fixed issues with moved or updated airports in MSFS when reading scenery library.

### Web Server

* Enabled IPv6 for webserver and added additional IPv6 addresses to display.
* Fixed additional map theme not set on web server map which was stuck to OpenStreetMap.
* Fixed log flooding in web server.
* Corrected display of loopback or localhost device which is not accessible from a local network.
  This is now only added if no other address was found.

### X-Plane

* Added version check for Little Xpconnect. Now showing a warning message if an outdated version of
  the plugin was found.


### Linux

* Little Navmap supports the Wayland compositor which is used on some of the newer Linux distributions
  but you have to install the package `qwayland5`.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.0.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
