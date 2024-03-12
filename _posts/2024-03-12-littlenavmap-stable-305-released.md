---
layout: post
title:  Little Navmap 3.0.5 released
date:   2024-03-12 15:00 +0100
categories: release
release-version: 3.0.5
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.5-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.5/LittleNavmap-win64-3.0.5-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.5.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.5/LittleNavmap-macOS-3.0.5.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-3.0.5.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.5/LittleNavmap-linux-22.04-3.0.5.tar.gz)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.5-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.5/LittleNavmap-win32-3.0.5-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-20.04-3.0.5.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.5/LittleNavmap-linux-20.04-3.0.5.tar.gz)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.5](https://github.com/albar965/littlenavmap/releases/v3.0.5) \(scroll down to `Assets`\).

**Alternative Download Locations - Look into sub-folders for beta, development or release candidates:**

**► [Alternative Download Locations](https://albar965.github.io/downloads.html)**

**This is a hotfix for Little Navmap which fixes a problem loading MSFS flight plan files.**

See
[Little Navmap 3.0.4 released](https://albar965.github.io/release/2024/03/11/littlenavmap-stable-304-released.html)
or below for the full changelog from 2.8.12.

## Changes from 3.0.4 to 3.0.5

* Hotfix to avoid error message `Caught exception: Invalid lat/long format`
  when loading the new MSFS PLN files with `*` as degree sign, as used since 3.0.4.
* Fixed missing navaids in tabs `Airport` -> `Nearest` and added missing links to navaids.

----

# Version 3.0.4

## Notes

**This is a stable release of Little Navmap which fixes several bugs and adds
improvements as well as new features.**

**Notable changes:** Direct to waypoint function, search refined and simplified,
convert procedure to waypoints for editing, route description using runways and approaches,
load and save aircraft trail as GPX, search in options dialog window, hints in options,
wind in runway and procedure selection, install Little Xpconnect from menu `Tools`,
crash and issue reports, colored aircraft trail and more.

**Also update Little Navconnect and Little Xpconnect if you're using one of them.
Little Navmap will show a notification dialog if you use an outdated version of Little Xpconnect.
You can update and install Little Xpconnect from the menu `Tools` in Little Navmap now.**

**Little Navmap will show a reminder to reload the scenery library databases to get improvements.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

The updated online user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/).

See here for user manual downloads:
[User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable).

A big thank you to all who reported bugs and issues!

## Changes from 2.8.12 to 3.0.4

See below for changes from 3.0.3.rc1 to 3.0.4.

### User Manual and FAQ

* [Frequently asked questions](https://albar965.github.io/littlenavmap-faq.html) updated.

* Revised the user manual. Added more tips, hints and screenshots.
* User manual is updated for all new functions. All help buttons and links point to the right chapters.
* Added sub-menu `User Manual - Helpful Chapters` with important help links in main menu.
* Removed offline PDF manual in program and installer. You can download the user manual in PDF and other
  formats from the page [User Manuals](https://albar965.github.io/manuals.html). This page is also linked
  from the menu `Help` -> `Download User Manuals`.

#### Map Display and Map Context Menu

* [Convert procedure to waypoints function](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MAPDISPLAY.html#convert-to-waypoints)
* [Direct to here function](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MAPDISPLAY.html#direct-to-here)
* [Select leg in flight plan on click](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MAPDISPLAY.html#show-in-flight-plan)
* [Map Display - New handling of file little_navmap_mapstyle.ini](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/CUSTOMIZE.html#customize-map-display)
* [Map overlays explained](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MAPDISPLAY.html#overlays-map)

#### Flight Plan Route Description

* [Improved route description now able to write and read runways and approaches](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/ROUTEDESCR.html)

#### User Interface

* [Web and internal links in dialog windows explained](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/INTRO.html#links)
* [Copy and paste formatted text from all dialog windows](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/INTRO.html#copy-and-paste)

#### New Menu Items

* [Search menu for quick access to airport, navaid and other search tabs](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#search-menu)
* [Changed map display filter for add-on airports as requested by users](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#add-on)
* [Show or hide alternate airports](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#show-alternate-airports)
* [Install or update Little Xpconnect from the Little Navmap menu](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#install-xpconnect)
* [Manually create an issue report menu item](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#create-issue-report)
* [New menu items to show map cache and more](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#files-and-directories)
* [Links to helpful user manual chapters](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#help-chapters)

#### Aircraft Trail

* [New chapter for user aircraft trail loading, saving and display options](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/AIRCRAFTTRAIL.html)
* [GPX exchange format (GPX) menu for load and export](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#menu-gpx)

#### Options

* [Search in options dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/OPTIONS.html#options-search)
* [Hints in options dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/OPTIONS.html#options-hints)
* [Option to toggle FreeType font engine](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/OPTIONS.html#options-freetype)

#### Changed Search

* [Changed text search in airport and navaid search windows](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCH.html)
* [Changed search for hidden options and new suffixes](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCH.html#menu-button-search)
* [Changed handling of runways to avoid error messages when adding procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCHPROCS.html#procedure-runways)
* [Showing preferred runways as well as head and cross winds in procedure search](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCHPROCS.html#procedure-preferred-runways)
* [Search for approach idents](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCHPROCS.html#filter-ident-procs)

#### Other

* [New departure leg option in traffic pattern](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/TRAFFICPATTERN.html)
* [Install the Little Xpconnect plugin from the tools menu](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/XPCONNECT.html#xpconnect-installation)
* [New chapter for GLOBE installation](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/GLOBE.html)
* [Create a manual issue report](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/ISSUEREPORT.html)
* [Automatic crash report after improper shutdown](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/CRASHREPORT.html)

### Translations

* Updated Italian translation by Flavio Borgna.
* Updated translation for Brazilian Portuguese by Ricardo Vitor.
* Updated French translation by Patrick.
* Updated German translation.

### Flight Plan

* Added direct to function to all related context menus in flight plan table, map and search result
  table. This function is only enabled if you are connected to a simulator. You can select a direct
  to any waypoint ahead of the active leg, the destination airport or an alternate airport.
  Furthermore you can direct to any position, navaid or airport which are not a part of the flight
  plan. Using `Direct to` adds a waypoint `PPOS` (present position) at the aircraft location and a
  direct line to the clicked position.
* Added function to convert procedures into a list of waypoints. Right click on a procedure leg in
  the flight plan table or the map display and select `Convert to Waypoints`. A warning will be shown
  to indicate limitations of the conversion. After converting you can edit the procedure waypoints
  like any other flight plan waypoint list.
* Added preferred runway indication in departure and destination runway selection dialog window.
  This is based on the selection in menu `Weather` -> `Airport Weather Source` and shows the best
  runways for wind and the used weather source. Also showing head and crosswind for each runway in
  the selection table.
* Less important columns are now hidden in the flight plan table per default. You can bring these
  back in the flight plan table context menu item `Flight Plan Table Display Options` or in the main
  menu `Tools` -> `Flight Plan Table Display Options`.
* Added calibrated magnetic declination at a VOR or real magnetic declination at a waypoint to
  flight plan table. This is disabled per default. Enable it in main menu `Tools` ->
  `Flight Plan Table Display Options`
* Now checking altitude restrictions correctly against airways considering the climb and descent
  phase of a flight plan. Clearing airways in flight plan leg if they conflict with restrictions in
  climb or descent after flight plan calculation to avoid errors.
* Added button to dialog windows `Select Departure Runway` and `Select Destination Runway` to
  quickly jump to the procedure search tab showing departure or arrival and approach procedures.
* An invalid departure and/or destination airport is now allowed when loading a flight plan. The
  altitude at departure and destination points is only assigned if GLOBE elevation data is installed
  and active.
* Corrected wrong indications for flight plan having only one airport as is useful for pattern
  work. Fixed wrong departure indication. Now showing airport as destination as well as distance and
  time for single point plans.
* Removed wrong indentation in print and HTML flight plan. More cleanup in HTML export and
  printing. Made header smaller. [#1054](https://github.com/albar965/littlenavmap/issues/1054)
* Moved distance and time section in flight plan header up to general data. Added underline as
  separator in flight plan table header below distance and time section.
* Now showing a warning message if the departure parking spot of a flight cannot be found after
  loading or switching simulator databases.
* User interaction fixes in flight plan table. Now avoiding unwanted centering of navaids due to
  follow selection while editing flight plan. Fixed cursor positioning when editing flight plan.
* Fixed issues with wrong error messages for runway mismatches. The logic is now more tolerant for
  airports where renamed runway numbers do not match exactly the runways in the navigation data due
  to magnetic drift.
* Now trying to find a cruise altitude which does not violate restrictions if it cannot be loaded
  from a flight plan or if the plan has an invalid cruise altitude. This applies to all plans
  which are loaded manually by an user. The change can be undone to revert to the previously
  invalid cruise altitude.
* Fixed issue where PLN, FMS or other imported flight plan files were wrongly overwritten in LNMPLN
  format in some cases.
* Now assigning runway automatically for STAR and approaches to avoid error messages about runway
  mismatches. This means that a selected STAR runway changes automatically to the one used by a
  newly selected approach if the STAR allows multiple runways.
  The runway of a multi-runway STAR will also be automatically selected for an approach runway
  already inserted avoiding the runway selection dialog. Error messages remain if a STAR does not
  allow runways for a selected approach or vice versa.
* Fixed issue where no departure runway could be selected if a plan consisted of only one airport.
  This can happen when starting to build a flight plan and left menu items in context menus disabled.
* Better transition detection now when importing MSFS PLN files. Using last STAR waypoint or last
  en-route waypoint to automatically find a matching approach transition.
* Fixed wrong distance calculation for procedure leg sequence intercept, initial fix and following legs.
  This resulted in wrong distance, time and ETA calculations as well as a wrong elevation profile.
  Example: EFVA via AXUTI and I16-Y.
* Added option to adjust text size for tab 'Flight Plan Remarks' in options on page `Display and Text`.
* Added text size option for flight plan table header text in options on page `Display and Text`.
* Replaced degree sign `°` in MSFS flight plan export with `*` to avoid issues on computers with
  Asian locale.
* More usability improvements.

### Flight Plan Route Description

* Now reading and optionally writing departure runway and approach procedure/runway to and from
  ATS strings.
  You can disable this in the dropdown menu button of the `Flight Plan Route Description` by
  selecting `Write Runway and Approach instructions`.
  Examples: `EDDK/06 NVO1K NVO Q760 INLAR T853 LMA EDDL/LMA.I05R` (approach ILS 05R via
  LMA) `GCLA/36 TFS3T TFS GCTS/TES2.I07-Y` (depart from runway 36 using SID TFS3T) and
  `KSFO/01R DCT BAART R464 BITTA KAENA2 PHNL/BOOKE.R04L` (approach RNAV 04L via BOOKE).
  This allows to share a complete flight plan by just using the route description.
* Logbook entries now use the detailed format including runways and approaches for route description.
* Moved less used menu items to sub-menu `Advanced` in drop down button menu in
  `Flight Plan Route Description` dialog window.
* Fixed route description to recognize a STAR which is equal to waypoint after an airway.
  Example: `RJAA OOITA Y40 KAZMA RJFT` resulted in `No waypoint after airway Y40`.
  KAZMA is STAR as well as a waypoint ending airway Y40. Now adding STAR to plan for these cases.
* Improved altitude correction after reading flight plan description without altitude designation.
  Now using lowest possible altitude depending on airway and procedure restrictions if present.
  Otherwise falls back to defaults for 10000 ft when using VFR or 20000 ft for IFR. Adjust in the
  flight plan table as needed.
* More fixes and improvements.

### Flight Plan Export

* Added export, loading and appending of an aircraft track from and to a GPX file in main menu
  `File` -> `GPX Exchange Format`. GPX track is centered after loading if enabled in options on page
  `Files`.
* Moved GPX export to category `Garmin` in multiexport.
* Fixed wrong altitude in route section for GPX export. Now using calculated altitudes as shown in
  elevation profile. [#1053](https://github.com/albar965/littlenavmap/issues/1053)
* Corrected export of `.txt` flight plans where STAR keyword was missing in some cases. This
  affected JarDesign and Rotate MD-80 aircraft.
* Added warning for invalid VFR flights plans when exporting a VFR plan to MSFS wrongly using airways
  and procedures.
* Fixed issue where export did not stop when answering `No` in warning dialog.
* Now prefixing one digit runway numbers with zero for X-Plane FMS export to avoid issues when
  loading into the GPS or FMS.
* Now writing field `ICAOIdent` for userpoints in FSX/P3D flight plan export to fix userpoint display
  in GPS.
* Fix for PLN flight plan export in MSFS where transitions were not loaded by the simulator due to a
  missing waypoint. Example: EDDV, using STAR NIE27 and approach NIE.I27RY or approach SAS.I27RZ.
  Same fix for loading without STAR.
* Fix for missing airport ident for waypoints in PLN flight plan export for FSX/P3D.

### Procedures

* Added ARINC procedure type like `I13R` or `R12` in brackets for approaches in the
  procedure search tree. The ARINC type and procedure ident can now be searched.
  `DACNA (R06)` will be found when entering `DAC` or `R06`, for example.
* Better indication for number of transitions in procedure search using clear text instead of
  the misleading `T`.
* Added preferred runway indication in procedure search top label based on selection in menu
  `Weather` -> `Airport Weather Source`. This shows the best runways for wind and the used weather
  source. Also showing head and crosswind components for approach procedures in procedure tree
  based on `Airport Weather Source`.
* Fixed issue where runway filters were missing in some cases in procedure search.
  Example: KIAD and runway 30 where the runway has only SID and STAR but no approaches.
* Corrected a problem where procedures could not be found in Navigraph database for airports that
  had moved. Examples are GAKL and DAUU in MSFS.
* Now considering airport ident when resolving procedure leg fixes to work around invalid duplicate
  waypoint names in a region. This is to avoid malformed procedures.
* Added warning message if procedure runways cannot be not found for simulator airport. This means
  that runways from navigation data do not match runways of the simulator airport data. You can
  update the navigation data or update or install an add-on airport to fix this. Procedures can still
  be used for such airports since Little Navmap uses a best guess to cross reference simulator
  runways. As a result you will see slightly differring runway numbers in portions of the program.

### Map Display

* Option to use color or black and white gradients for aircraft trail indicating flown altitude.
  Enable this in options on page `Map Aircraft Trail`. The gradient is also used in the elevation
  profile and logbook trail preview. [#97](https://github.com/albar965/littlenavmap/issues/97)
* Added tooltips for aircraft trail and logbook trail preview. Enable this function in option on
  page `Map Tooltips and Clicks`.
* Trail points are now created dynamically depending on aircraft flight path to save trail points and
  get better map display performance. As a result, the trail points are not evenly spaced.
* Add-on airport display has changed and now adheres to airport filters instead of forcing an
  always-on display. Add-on filter now only overrides zoom settings and not filters. This means you
  can hide all add-on airports having a `Soft Surface`, for example.
* Added option to define distance of departure leg when adding airport traffic pattern.
* Fixed incorrect airport filter `No procedure` which omitted airports in some cases. Examples
  EDFQ, EDGS, EDME and EKSN with MSFS and Navigraph in mixed data mode. [#1055](https://github.com/albar965/littlenavmap/issues/1055)
* Added function `Select Leg in Flight Plan` in map context menu `More` or for each
  click on a flight plan leg if enabled in options on page `Map Tooltips and Clicks`. This will
  highlight a flight plan leg in the table if you click on the waypoint in the map.
* Added option to hide alternate airports and related flight plan legs in menu
  `View` -> `Show alternate Airports` or on toolbar.
* ILS are now shown or hidden depending on related airport visibility as selected in the airport
  filter on the toolbar or in main menu `View` -> `Airports` to have less clutter on the map.
* Added new airspace styles by Michael Schuster. Thank you a lot for your help!
* Map colors and styles are embedded in the program. You can still add a file
  `little_navmap_mapstyle.ini` to the settings folder to override the default styles. Your
  current `little_navmap_mapstyle.ini` is automatically backed up on first start after updating
  Little Navmap.
* Fixed performance issues when drawing airway and other rotated text labels on Windows which
  resulted in jerky map movement with airways or ILS visible.
* Now disabling font anti-aliasing for all labels when moving map to get a smoother movement.
* Now using FreeType as font engine for better text labels and better performance on Windows.
  Rotated texts are better readable now. You can disable this in options on page `Display and Text`.
* Added airspace labels. Note that labels might still overlap. Disable the labels or
  limit airspace display to improve map display performance if you see jerky map movement.
* Airspace label options added to options dialog on page `Map Labels` in branch `Airspaces`.
* New option for airspace transparency and boundary line thickness on options page `Map Display`.
  These options are combined with styles in `little_navmap_mapstyle.ini` if this file is present.
* Added option for filtering out FBZ (flight buffer zone) and  multiple code `Z` airspaces
  on page `Map Display` in section `Airspaces`. This is on per default and reduces clutter. [#1047](https://github.com/albar965/littlenavmap/issues/1047)
* Added text size option for airspaces on options page `Map Display` section `Airspaces`.
* Fixed issue where large airspaces near anti-meridian disappeared.
* Improved placement of flight plan text labels to minimize overlap.
* Fixed missing COM on online center previews. [#625](https://github.com/albar965/littlenavmap/issues/625)
* Now drawing transparent surfaces in X-Plane as light gray for airports with wrong surface
  definitions.
* Colors for apron, runway and other surfaces can now be changed in little_navmap_mapstyle.ini.
  [#1059](https://github.com/albar965/littlenavmap/issues/1059)
* Added length in NM and ft or Meters to measurement line tooltips.
* Improved labels on parking spots on the map. Now replacing known keywords like `Gate` and
  others with first word character like `G 1` for `Gate 11`.
* Changed default map darkening when using style from menu `Window` -> `Style` -> `Dark` to a
  lighter value. You can adjust this in options on page `Map` in section `Map Display Options`.
* Fixed issue where internal cache was not cleaned when switching databases resulting in wrong
  nearest airport with procedure indications.
* Improved taxiway labels and increased number of labels.
* Better airspace matching for online airspaces. You can load the files
  [firboundaries.json](https://map.vatsim.net/livedata/firboundaries.json) and
  [traconboundaries.json](https://map.vatsim.net/livedata/traconboundaries.json) into the
  Little Navmap user airspace library to get more real boundaries for VATSIM online centers
  instead of the generic circles. [#490](https://github.com/albar965/littlenavmap/issues/490)
* The empty airport display option is now disabled per default on new installations to avoid
  confusion with wrongly labeled 2D airports in X-Plane 12.
* Adjusted display of navaids for better visibility on dark maps like CARTO Dark Matter or
  Mapbox Dark.
* More map display improvements.

### Map Display Themes

* Better error messages about map theme conflicts showing clickable links to files.
* Added new map theme `Stadia StamenTerrain` requiring an API key since StamenTerrain is discontinued.
  Delete the old StamenTerrain files in your map themes folder which can be seen in options on
  page `Cache and Files` or in the installation folder `.../Little Navmap/data/maps/earth` to avoid
  error messages when starting Little Navmap.
* Updated installer to remove the now unsupported StamenTerrain map theme on update to avoid
  error messages.
* Added a reject list for map themes. You will see a warning for broken and discontinued
  map themes. Uninstall these to silence the warning.
* Added MapBox Dark and MapBox Light map themes. Note that you need a free MapBox account and an API key
  to use these.

### Elevation Profile

* Elevation profile settings are reset now and have to be re-adjusted.
* Now deleting aircraft trail in elevation profile on takeoff to avoid a cluttered profile display.
  This does not affect the trail on the map display which is independently stored.
* Added optional display of vertical speeds to elevation profile header. You can enable this in the
  profile context menu or in the main menu `Tools` -> `Elevation Profile Display Options` in branch
  `Header Line`.
* Fixed issue with wrong error message that kept the program from building the elevation profile.
  Example: Approach I29-Z via PLADE at MMGL.
* Missing PAPI in profile fixed when last procedure leg is a short circle-to-land.
  Example: EGPF via GOW and D23.
* Fixed inaccuracy where highlight point differed from center position and was sometimes hidden
  when using `Follow on map` in the elevation profile.

### Information

* Better text formatting in airport runway and procedure information. Added separator line for
  runways and procedures.
* Made more important fields in aircraft progress bold and large for better visibility while
  flying: Heading, wind and pressure.
* Fixed issue where airports having procedures were not loaded properly in airport tab `Nearest`.

### Options

* Added search function to options dialog on the top left. Search reduces the visible pages to the
  ones containing the search text. Matching labels and buttons are highlighted on each page.
* Reorganized options dialog and moved some options to new pages.
* Better error checking for theme path in options dialog to avoid accidental selection of the stock
  theme folder.
* Added hints prefixed with a light bulb in the options dialog pointing to other related settings.
  Some hints contain a link which directly opens the related page. Bold text is still an important
  note like `Restart required`.
* Extended minimum and maximum line widths and text sizes that can be set in options dialog for
  map features.
* Now removing leading and trailing white space from URLs in options to avoid issues with wrong
  user input. [#1089](https://github.com/albar965/littlenavmap/issues/1089)
* New option to enable or disable the FreeType font engine on Windows on options on page `Display and Text`.
  Enabling this results in better and faster text display on the map, especially for rotated labels.
  But the text will appear slightly blurred throughout the whole application. Deselect this to
  avoid the blurred text in menus and application windows.

### Search

* Added combined search field for airport idents and names (ICAO, FAA, city, name and others)
  using partial match for quick search. Separate search fields are still available. The same rules as
  mentioned in the point below apply.
* Completely reworked search functions for all search tabs. Now looking for partial text matches
  per default in all input fields instead of requiring stars as wildcards. This means that a search
  term of `Chicago` will find Gary Chicago as well as KORD. `EDDE` will find Erfurt-Weimar (EDDE)
  as well as Wedderburn. Stars `*` act as wildcards and double quotes `"` force an exact search.
  You can also enter a space separated list of names or idents and Little Navmap will show the
  results for each name.
* Search option fields selected from context menu using include/exclude are now opened
  automatically to avoid confusion. This applies to the `Show in search` function in the
  map context menu.
* Modified search fields hidden from the dropdown button menu (three-lines-button) are now ignored
  when searching.
* Now using better indications in the dropdown menu items. `(changed)` shows that an option is
  used and visible to the user. `(changed, not used)` indicates a changed option is ignored
  since the related fields are hidden from the dropdown menu button.
* Corrected broken sort order of numerical columns when using distance search [#1060](https://github.com/albar965/littlenavmap/issues/1060)
* Fixed search to allow usage of underscore (`_`) and percent (`%`) as literals in search terms.
  Note that these are not used as wildcard characters like in SQL.
* Added option to preview the entries to be deleted when using the cleanup function in the
  userpoint and the logbook search.
* Fixed date and time stored in wrong format after editing a logbook entry. This resulted in a
  wrong sort order when sorting by time in the logbook table. Now storing local real time with
  timezone offset. Log data with wrong local real time and missing timezone is now corrected to
  current timezone offset. [#1057](https://github.com/albar965/littlenavmap/issues/1057)
* Fixed crash that appeared when importing logbook entries or userpoints a second time.

### Weather

* Now also searching for ICAO code instead of internal ident for METAR reports when using X-Plane
  to avoid missing airport weather reports.
* Now ignoring empty GRIB files from the X-Plane weather folder.

### Scenery Library

* Additional scenery folder added in options on page `Scenery Library Database` is now read
  recursively for all simulators. This means that you can use sub-directories to organize your
  add-ons.
* Hints about encrypted airports and others can now be skipped (`Do not show hints again ...`)
  after loading a scenery library database.
* Now excluding all navaids in detected Navigraph update when reading scenery library of MSFS. This
  speeds up the loading time by skipping unused data.
* Fixed issues with moved or updated airports in MSFS when reading scenery library.
* Doubled number of airspace arc and circle segments for more display accuracy for all simulators.
* Fixed wrong calculation for airport rating which did not update add-on airports in some cases
  for MSFS, FSX and P3D.
* Deleting duplicate navaids now by region, ident and position. This allows to update frequency or
  type for VOR and NDB on P3D or FSX by add-on.
* Wrongly built MSFS airports like the Microsoft MKJS now keep their procedure information despite
  trying to override it with an empty procedure set. [#1085](https://github.com/albar965/littlenavmap/issues/1085)
* Updated database version to 14.28. The version is shown in the dialog window `Load Scenery Library`
  as `Database Version`. The current version assigned by Little Navmap is shown as `Program Version`.
  Little Navmap will show a reminder to reload scenery library databases.
* The program now checks for obsolete database versions. You need at least a version later than 14.24
  to avoid crashes. Little Navmap will show a notification dialog on startup where it offers to
  erase and reload the outdated database.
* Added new approach markings for XP12.
* Fixed wrong language settings used to load MSFS database on first startup. Now always using the
  language set in options by the user.

### Navigraph Navdatabase

Note that these changes were first published in AIRAC cycle 2402 and need an updated Navigraph navdatabase.

* Runways marked as closed are now shown as such when using mode `Use Navigraph for all Features`.
* Airport patterns now correctly marked as not available.
* Runways having one end closed are now positioned correctly. This also resulted in misplaced
  departure procedures even when using `Use Navigraph for Navaids and Procedures`. Example: EDDF runway 18.
* Fixed issue where circular airspace arcs resulted in self crossing polygons and thus in wrong
  text placement.

### User Interface

* Split toolbars into smaller sections and reorganized toolbar buttons for a more logical order.
  The smaller toolbars can now be better arranged to user needs.
  Note that the initial state after the update is not defined. You either have to re-arrange
  the toolbars manually or use the function in main menu `Window` -> `Reset Window Layout to Default`
  which also resets the toolbar layout to default.
* Added new main menu `Search` for quick access to most used search functions.
* Moved toolbars and dock window actions in menu `Window` to sub-menus.
* Now compacting status bar fields after timeout if the mouse cursor is not inside the map (no
  coordinate display).
* Fixed issue where not all toolbars were resized on macOS when changing size in options.
* Changed dock window menu items and tool buttons as well as shortcuts to have same order as
  dock windows clockwise.
* Updated all message dialogs to make text in dialog boxes selectable by mouse click and
  right-click context menu. Text can now copied and pasted from all message boxes. No need
  to make screenshots since text can simply be copied.
* Renamed user interface style `Night` to `Dark`.
* More improvements for user interface font changes, dark mode and style `windowsvista`.
* Fixed bug where cleanup did not work properly in logbook and left over logbook entries which could
  not be removed.
* Added menu item in `Tools` -> `Files and Directories` ->
  `Show GLOBE Offline Elevation Data Installation` to open the GLOBE installation folder.
* Added more clickable blue links for files and folders in information, warning or question dialog windows.
  These either open a file in the default program or open a file manager like Windows Explorer or
  Apple Finder showing the file or directory selected.
* Opening and selecting files in system file manager when clicking on links in dialogs. This is now
  working for Linux and macOS too.
* Assigned shortcut `Ctrl+Alt+Shift+W` to `Reset Window Layout to Default` to restore the main window if
  Little Navmap is hidden or off-screen after starting.

### Crash and Issue Report

* Added functionality to automatically generate a crash report on startup. Little Navmap will show
  a notification dialog if it detects an improper shutdown of the last session, i.e. a crash. You can
  then choose to skip loading last used files such as the flight plan or window layout which may have caused
  the crash. A Zip file with all important settings and other files is created and can be shown by
  clicking the blue link in the dialog. Upload this file to a platform like
  [FileTransfer.io](https://filetransfer.io/) and send me the link
  ([Contact](https://albar965.github.io/contact.html)) so I can try to reproduce the
  issue. Note that there is no need to collect the log and other files for a bug report now. The
  files optionally skipped on loading are: Flight plan, aircraft performance, all search terms,
  information content, aircraft trail, window layout and KML files. No user files are modified or removed.
* You can create an issue report manually by selecting main menu `Tools` ->
  `Create an Issue Report` to get a Zip file containing all relevant files needed to reproduce a problem.

### Other

* Fixed various issues when using Windows UNC paths (file share names like `\\server\share\path`).
* Windows installer now removes portable execution script `Little Navmap Portable.cmd` since this cannot
  be used with the installer. Download one of Zip archives of Little Navmap to use the portable mode.
* Enabled IPv6 for remote connections to Little Navconnect.
* Removed command line option `-s` (`--settings-directory`). Use `-p` (`--settings-path`) instead which uses
  either the full path or a path relative to the application executable.
* Fixed settings like high DPI mode not read when using command line options to relocate the settings folder
  like it is used in portable mode.

### Web Server

* Enabled IPv6 for web server and added additional IPv6 addresses to display.
* Fixed additional map theme not used on web server map which was stuck to OpenStreetMap.
* Removed display of loopback or localhost devices in options on page `Web Server` which are not
  accessible from other computers on a local network. This is now added only if no other
  address was found, i.e. no network interfaces like Wi-Fi or Ethernet available.
* Fixed issues where the web server map reverted back to the Atlas map theme when using external map
  themes.
* Fixed a deadlock resulting in program freeze in HTTP server. This appeared when shutting down with
  parallel incoming web requests.
* Corrected excessive logging in HTTP server which could cause stutters in simulators.
* Document root folder change in options on page `Web Server` is now handled correctly.
* Better error checking and display for wrong document root folder in options on page `Web Server`.
* Fixed creating of unwanted registry entries in `HKEY_CURRENT_USER\SOFTWARE\ABarthel\Little Navmap`.
  `HKEY_CURRENT_USER\SOFTWARE\ABarthel` and all sub-keys are now removed when starting Little Navmap
  after updating.

### X-Plane and Little Xpconnect

* Added installation option for Little Xpconnect from main menu
  `Tools` -> `Install Little Xpconnect in X-Plane plugins`.
  This can be used to install or update the X-Plane plugin from the installation folder.
  Note that the plugin will be installed in the currently selected X-Plane instance from
  menu `Scenery Library`. Additonally Little Navmap will scan for double and wrong installations of
  Little Xpconnect. Do not download the plugin manually. It is included in the Little Navmap
  download archive.
* Added version check for Little Xpconnect. Now showing a warning message if an outdated version of
  the plugin was found.

### Linux

* Now safely catching termination signals on Linux. This avoids data loss due to unsaved files when
  terminating the program with Ctrl+C from the command line.
* Show in file manager function for blue links in Little Navmap now also works on Linux. This uses
  the DBUS protocol to start the default file manager and select a file in in.
* Little Navmap supports the Wayland compositor which is used on newer Linux distributions
  but you have to install the package `qtwayland5`.

## Changes from 3.0.3.rc1 to 3.0.4

These are fixes for bugs introduced with the 3.0 versions.

* AI aircraft altitude now appears at higher zoom distance on the map.
* Corrected not translatable texts in runway dialog.
* Fixed issues in route description when opening from SimBrief. Now hiding advanced menu and adding
  runways to route description when opening dialog after download.
* Attempt to fix crashes on Windows shutdown with Little Navmap open.
* Fixed issue where a wrong crash report was triggered after identifying incompatible database.
* Now omitting IPv6 link local addresses in display in options on page `Web Server`.
* Reworked issue report to include up-to-date files now as well as flight plan as loaded in memory.
* Removed ILS de-duplication from X-Plane data compiler and adjusted it for MSFS, P3D and FSX.
* Fixed issue where procedures having runways not matching simulator runways resulted in a wrong
  runway warning. Example: SKBO in X-Plane 11/12 having 13L, 13R, 31L and 31R while latest
  navigation data (cycle 2402) refers to 14L, 14R, 32L and 32R. In December 2022 the runways at
  SKBO (Bogotá El Dorado International Airport) were renamed due to magnetic heading drift.
  This can occiasinally happen at airports.
* Changed application to catch Windows shutdown correctly. Now exiting program cleanly when shutting
  down Windows with Little Navmap running.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.5/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
