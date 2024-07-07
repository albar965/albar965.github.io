---
layout: post
title:  Little Navmap 3.0.8 released
date:   2024-07-07 13:00 +0200
categories: release
release-version: 3.0.8
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.8-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.8/LittleNavmap-win64-3.0.8-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.8.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.8/LittleNavmap-macOS-3.0.8.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.8.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.8/LittleNavmap-linux-ubuntu-22.04-3.0.8.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.8-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.8/LittleNavmap-linux-ubuntu-22.04-3.0.8-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.8-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.8/LittleNavmap-win32-3.0.8-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.8.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.8/LittleNavmap-linux-ubuntu-20.04-3.0.8.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.8-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.8/LittleNavmap-linux-ubuntu-20.04-3.0.8-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.8](https://github.com/albar965/littlenavmap/releases/v3.0.8) \(scroll down to `Assets`\).

**Alternative Download Locations - Look into sub-folders for beta, development or release candidates:**

**► [Alternative Download Locations](https://albar965.github.io/downloads.html)**

## Notes

**This is a stable release of Little Navmap which fixes several bugs and crashes and adds a few
improvements and new features.**

**The program translations for Brazilian Portuguese, French, German and Italian as well as the user manual have been updated.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

**Reload the scenery library to see fixes like the duplicate COM frequencies for MSFS airports.**

A big thank you to all who reported bugs and issues!

## Changes from 3.0.6 to 3.0.8

### Flight Plan Loading and Export

* Added export option for MSFS [KLN 90B](https://github.com/falcon71/kln90b) [#1136](https://github.com/albar965/littlenavmap/issues/1136)
* 3.0.7.rc1 to 3.0.8: Fixed KLN90B export to using `kln.pln` as filename. [#1164](https://github.com/albar965/littlenavmap/issues/1164)
* Added multiexport option for MSFS JustFlight BAE-14. This uses the QualityWings format.
* Made loading of MSFS PLN flight plan files more tolerant for missing altitude in element
  `WorldPosition`.
* Fixed issue where a wrong error message about invalid procedures appeared after loading a MSFS
  PLN file. The message appeared when saving loaded PLN as LNMPLN.
* Better cruise altitude estimate if altitude could not determined from the flight plan after
  loading. Altitude is rounded up to 2000 ft to the maximum of departure and destination elevation if
  all else fails.
* Changed file extensions in multiexport to be untranslatable for local language to avoid issues.
* Now adding STAR entry waypoint plus airway to MSFS PLN export in certain cases. Removing
  destination runway waypoints from MSFS PLN export if STAR is used.
* Fixed aircraft trail for logbook entry that was incorrectly truncated.
* Corrected display of split aircraft trail when starting a new flight on ground. Previously
  the trails were shown wrongly connected.
* Fixed an issue where the cruise altitude was set incorrectly after downloading a flight plan
  from SimBrief.

### Weather

* Added interpolated weather reports for NOAA, VATSIM, IVAO and X-Plane weather. These appear
  at airports having no METAR reports. Note that this does not cover cloud layers.
* Added wind display for landing and takeoff runway in flight plan table header. This uses station
  or interpolated winds as selected in menu `Weather` -> `Airport Weather Source`.
* Added support for Active Sky FS (MSFS).
* Fixed issue where Active Sky weather was not updated.
* Fixed crash that happened randomly when updating METAR data or switching between simulators with
  weather enabled.
* Added sunrise and sunset to weather report page in information dock window.
* Now showing weather stations with invalid reports crossed out on the map.
* Fixed wrong time zone for METAR reports from FSX/P3D.
* Better error messages for METAR decoding and outdated weather.
* More optimizations to weather handling.

### Random Flight Generation

* Added shortcut to random flight creation: Menu `Flight Plan` -> `Generate Random Flight`. This
  opens the search dock window and activates the controls to generate a random flight.
* Added a dialog window where a user can select either a fixed departure or a fixed destination
  airport for the random flight generation. Add at least one airport to your flight plan to enable this
  function. [#1013](https://github.com/albar965/littlenavmap/issues/1013)
* Random flight generation now puts the change on the undo/redo stack once the user accepts a
  generated flight. This is the same behavior as used in the flight plan route description which
  allows to restore a previous flight plan and its changes.
* Adjusted the maximum distance for random flight plan to realistic values.
  The maximum is 10.800 NM.
* Fixed the minimum and maximum distance for random flight search not being saved on exit.
* Performance improvements and random selection for departure and destination functionality
  by [u-an-i](https://github.com/u-an-i).

### Procedures and Runway Selection

* Improved procedure search. Now showing the first and last waypoint of procedures in the procedure
  tree. Also, showing the first and last waypoint of a selected procedure in the header. The header
  shows first and last for the full path including the procedure when selecting a transition.
* Search now also looks for first and last waypoint of procedures. Procedures and and transitions
  are hidden if no criteria match text search. Procedures are expanded if a transition matches the
  search text. This allows finding the matching STAR for a selected approach and vice versa, for example.
* Procedure view now tries to keep content when switching simulators, provided the airport exists
  in both simulators.
* The procedure search tab now expands procedure branches already added to the flight plan.
  Procedures and/or respective transitions are expanded when showing procedures for departure or
  destination airport.
* Runway selection dialog windows now have the current runway end from the flight plan preselected.
* The selection in procedure search is not saved anymore when changing airports to avoid unwanted
  highlighting on the map.
* Added `Shift+F5` shortcut for procedure search.
* Fixed issue where switching between simulator databases left the procedure search in an invalid
  state resulting in a crash.
* Fixed issue where the show procedure menu item was not enabled in map context menu and others.
  Example: Weston (EIWT) on X-Plane. [#1154](https://github.com/albar965/littlenavmap/issues/1154)
* Procedures for a clicked airport can now be shown with checkbox `Airports` disabled in options on
  page `Map Tooltips and Clicks`.
* Added keyboard shortcuts in procedure search. Hit `Return` to show a procedure or a waypoint in
  the tree. Use the `Down` key to activate the tree from text input field.

### Logbook

* Added cruise altitude from used flight plan to logbook table. The logbook table layout is reset
  back to default.
* Logbook cleanup method improved. Extended function to cleanup off-airport coordinates like
  2956N10702E 4831N12255W in addition to empty airport idents.
* Optimizations for aircraft trail loading and display for logbook entries.

### Map Display

* Added warning dialog if aircraft trail is too long after startup as a hint for performance
  issues. Also, showing warning if trail was truncated after loading a GPX file.
* Fixed issue where updated maximum number of trail points was not applied until restart.
* Fixed crash when fetching tooltip information for short aircraft trails.
* Fixed disappearing flight plans and aircraft trails on high zoom distances or long flight plans.
  [#1126](https://github.com/albar965/littlenavmap/issues/1126)
* Fixed display issue where userpoints without type were hidden. Optimized code for userpoint
  display.
* AI/multiplayer aircraft labels now have a `…` appended if label texts are suppressed due to higher
  zoom distances Reworked aircraft label code.
* Added internal object ID as optional aircraft label for AI/multiplayer. Enable this in options on
  page `Map Labels` in branch `AI, Multiplayer and Online Client Aircraft`.
* Fixed wrong bearing for nearest radio navaids of airport in information dock window. Used wrong
  magnetic declination instead of airport value.
* Attempt to fix not updating sun shading. [#1125](https://github.com/albar965/littlenavmap/issues/1125)
* Optimizations for airspace name and aircraft trail display.

### Scenery Library

* Fix for crash when reading BGL files having invalid airports.
* Fixed COM frequency duplicates in MSFS scenery library with Navigraph navdata update installed.
  Reload the scenery library to see the fix.
* Now bailing out early when reading malformed BGL files from MSFS resulting in endless loop.
  Example: Broken `UWLS.bgl`. The same appears with the package `microsoft-canada-point-of-interest`
  which is excluded from loading now. Ignore these errors for now.
* 3.0.7.rc1 to 3.0.8: Now excluding all Microsoft POI libraries from MSFS. These libraries contain
  POIs modeled as fake airports and are partially not readable. The folder exclusion affects all
  matching the pattern `*\Official\OneStore\microsoft-*-point-of-interest\*`.
* 3.0.7.rc1 to 3.0.8: Fixed issue where heliports or other simple airports in MSFS could not be
  shown on the map by double clicking in airport search or information window.

### Information and Aircraft Progress

* Now keeping airport, VOR, NDB, procedure, waypoint, userpoint and logbook information when
  switching between simulators.
* Omitting wrong X-Plane propeller ice indications for jets in user aircraft progress now.
* Better formatting in weather and runway information.
* Corrected wrong text for bearing from user aircraft. Now showing bearing and distance `from` user
  aircraft instead of `to`.
* 3.0.7.rc1 to 3.0.8: Fixed crash when trying to show information for incomplete or missing
  airports or navaids when switching between simulator databases.

### User Interface

* Added hint and link to clear the map tile cache in add Mapbox style dialog when changing or
  updating the Mapbox user map.
* Fixed issues where coordinates received the wrong sign near Meridian line when using Google
  coordinates. This resulted in misplaced userpoints or distance rings.
* Corrected inconsistent naming for arrival/approach. Now using both in related user interface
  elements.
* Reworked database error reporting to include more information. SQLite scenery library databases
  open read only now.
* Non-blocking dialog windows now remember position. This covers `Flight Plan Calculation`,
  `Logbook Statistics` and `Flight Plan Route Description` dialog windows.
* Resetting all non-blocking windows to default size and center position now when using `Reset
  window layout` to avoid windows being lost off-screen. Also, re-centering the main window when
  resetting layout from window menu.
* Added message dialog to `Reset all Messages` for clarification.
* Fixed issue where application was still detected as running when trying to send a command through
  the command line.
* Added `-q` / `--quit` command line argument to exit an already running instance.
* New icons for 32 and 64 bit Windows builds to easier see the difference if both are installed.
* More checks to avoid crashes
* 3.0.7.rc1 to 3.0.8: Translations updated. Thanks to Flavio, Patrick and Ricardo!
* 3.0.7.rc1 to 3.0.8: Fixed issue where wind arrows did not show up on some systems.
* 3.0.7.rc1 to 3.0.8: Removed Dutch, Chinese and Spanish translations translations since these have
  not been updated for a long time which can cause problems in the user user interface. The resulting
  issues can range from arrows pointing into the wrong direction to missing texts and numbers.
  You can still install the translations manually if you wish by downloading the related `*.qm` files
  from [GitHub - littlenavmap - release/3.0](https://github.com/albar965/littlenavmap/tree/release/3.0)
  and saving them besides the other translations in the installation folder.
  Contact me if you'd like to update a translation or if you would like to create a new one:
  [Contact](https://albar965.github.io/contact.html).

### Web Interface

* Fixed missing aircraft trail in web interface.
* Fixed KML overlays not shown on the web interface.

#### Improvements and fixes by [u-an-i](https://github.com/u-an-i) and [KOKAProduktion](https://github.com/KOKAProduktion)

* Default display mode now uses a new navigation method. Click to center the map around the
  click-spot and use the mouse wheel to zoom in or out.
* The plugin `Dynamic touch and drag map` enables a dynamic map which has smooth scrolling
  (click-and-move) as well as zooming with the mouse wheel. Note that neither the AI/multiplayer
  aircraft nor the flight tracks of the user aircraft are shown in this mode. Small display errors
  like duplicate labels can appear.
* Legacy map removed.
* More restructuring, performance improvements and updated documentation for the web frontend in
  general, web API, web plugin API, web toolbar API and web theming CSS templates; useful for
  developers and people who wish to enhance or modify the web frontend experience.

### Installation

* Windows installer now checks for running program on install and uninstall to avoid a broken
  installation.
* Changed Linux archive to XZ format for smaller files.
* Added Debian installation packages provided by Daniel Buschke
  [tuxmainy](https://github.com/tuxmainy). This package installs Little Navmap and Little Navconnect.
  Little Xpconnect can still be installed using the menu item `Install Little Xpconnect in X-Plane plugins`
  in the menu `Tools`.
* Installer has a new icon to avoid confusion with the program file.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.8/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
