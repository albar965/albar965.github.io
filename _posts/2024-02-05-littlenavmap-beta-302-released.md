---
layout: post
title:  Little Navmap 3.0.2.beta released
date:   2024-02-05 16:00 +0100
categories: release
release-version: 3.0.2.beta
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.2.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.2.beta/LittleNavmap-win64-3.0.2.beta-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.2.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.2.beta/LittleNavmap-macOS-3.0.2.beta.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-3.0.2.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.2.beta/LittleNavmap-linux-22.04-3.0.2.beta.tar.gz)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.2.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.2.beta/LittleNavmap-win32-3.0.2.beta-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-20.04-3.0.2.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.2.beta/LittleNavmap-linux-20.04-3.0.2.beta.tar.gz)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.2.beta](https://github.com/albar965/littlenavmap/releases/v3.0.2.beta) \(scroll down to `Assets`\).

**Alternative Download Locations - Look into sub-folders for beta, development or release candidates:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)

## Notes

**This is a beta/test release of Little Navmap which adds new features, user interface improvements and fixes bugs.**

**Note that the program translations and the user manual have not been updated yet.**

**See here if you would like to run the beta release besides your stable installation:
[Little Navmap - User Manual - Portable Execution](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#portable-execution).**

**Also update Little Navconnect and Little Xpconnect if you're using one of these.
Little Navmap will show a notification dialog if you use an outdated version of Little Xpconnect.
You can still continue to use it, though.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Little Navmap - User Manual - Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

If you think the overall appearance of fonts in Little Navmap on Windows is blurry:
Remove the file `qt.conf` in the Little Navmap installation folder.
Keep in mind that this will revert map display and performance improvements.

A big thank you to all who reported bugs and issues!

## Changes from 3.0.1.beta to 3.0.2.beta


### Flight Plan and Export

* Now assigning runway automatically for STAR and approaches to avoid error messages about runway
  mismatches. This means that a selected STAR runway changes automatically to the one used by a
  newly selected approach if the STAR allows multiple runways.
  The runway of a multi-runway STAR will also be automatically selected for an approach runway
  already inserted avoiding the runway selection dialog.
* Fix for PLN flight plan export in MSFS where transitions were not loaded by MSFS due to a missing
  waypoint. Example: EDDV, using STAR NIE27 and approach NIE.I27RY or approach SAS.I27RZ.
* Fixed issue where no departure runway could be selected if a plan consisted of only one airport.
  This can happen when starting to build a flight plan and left menu items in context menus disabled.
* Corrected wrong warning about VFR when exporting a PLN flight plan for MSFS. This appeared when
  using a departure or destination runway selection.
* Better transition detection now when importing MSFS PLN files. Using last STAR waypoint or last
  en-route waypoint to automatically find a matching approach transition.
* Fixed issue where runway filters were missing in some cases in procedure search.
  Example: KIAD and 15L where the runway has only SID and STAR but no approaches.
* Fixed route description to recognize a STAR which is equal to waypoint after an airway.
  Example: `RJAA OOITA Y40 KAZMA RJFT` resulted in `No waypoint after airway Y40`.
  KAZMA is STAR as well as a waypoint ending airway Y40. Now adding STAR to plan for these cases.
* Now generating correct route description for single digit runway.
  Example: KYKM runway 9 to 'KYKM/09'.
* Fixed wrong error message about parking not found after deleting or replacing departure airport.

### Map Display

* Added a reject list for map themes. You will see a warning for broken and discontinued
  map themes. Uninstall these to silence the warning.
* Better error checking for theme path in options dialog to avoid accidental selection of the stock
  theme folder.
* Updated installer to remove the now unsupported StamenTerrain map theme on update to avoid
  error messages.
* Added MapBox Dark and Light map themes. Note that you need a free MapBox account and an API key
  to use these.
* Map themes MapBox Outdoors and Satellite Streets updated to latest MapBox theme address.
* Added option for filtering out FBZ (flight buffer zone) airspaces on page `Map Display` in section
  `Airspaces`. This is on per default and reduces clutter when showing airspaces.
* Better airspace matching for online airspaces. You can load the files
  [firboundaries.json](https://map.vatsim.net/livedata/firboundaries.json) and
  [traconboundaries.json](https://map.vatsim.net/livedata/traconboundaries.json) into the
  Little Navmap user airspace library to get more real boundaries for VATSIM online centers
  instead of the generic circles. [#490](https://github.com/albar965/littlenavmap/issues/490)
* Removed drawing of empty white rectangle on map on startup. Now showing background map like the
  OpenStreetMap first.
* Adjusted display of navaids for better visibility on dark maps like CARTO Dark Matter or
  Mapbox Dark.
* The empty airport display option is now disabled per default on new installations to avoid
  confusion also with wrongly labeled 2D airports in X-Plane 12.
* Fixes for airspace altitude display in information and in map.
* Adjusted aircraft trail recording to generate more accurate points when flying slow aircraft.
* Other small improvements in map display.

### User Interface

* Added installation option for Little Xpconnect from main menu
  `Tools` -> `Install Little Xpconnect in X-Plane plugins`.
  This can be used to install or update the X-Plane plugin from the installation folder.
  Note that the plugin will be installed in the currently selected X-Plane instance from
  menu `Scenery Library`.
  Do not download the plugin manually. It is included in the Little Navmap download archive.
  * Renamed user interface style `Night` to `Dark`.
* Improved text and icon display for the user interface style `Dark`.
* Added option to adjust text size for tab 'Flight Plan Remarks' in options on page `Display and Text`.
* Fixed bug where cleanup did not work properly in logbook and left over logbook entries which could
  not be removed.
* Changed application to catch Windows shutdown which resulted in wrong crash reports.
  Now exiting program cleanly when shutting down Windows with Little Navmap running.
* Now safely catching termination signals on Linux. This avoids data loss due to unsaved files when
  terminating with Ctrl+C from the command line.
* Now resizing connection and load scenery dialogs to avoid cut off content. Saving size now.
* Added menu item in `Tools` -> `Files and Directories` ->
  `Show GLOBE Offline Elevation Data Installation Directory` to open the GLOBE installation folder.
* Added more clickable blue links for files and folders in information, warning or question dialog windows.
* Now opening and selecting files in system file manager when clicking on links in dialogs. This is
  working now for Linux and macOS too.

### Web Server

* Fixed a deadlock resulting in program freeze in HTTP server. This appeared when shutting down with
  parallel incoming web requests.
* Updated internal HTTP server by Stefan Frings to latest version from 1.9.0.
* Corrected excessive logging in HTTP server which can cause stutters.

### Scenery Library

* MSFS: Fixed issues with moved or updated airports when reading scenery library.
* Doubled number of airspace arc and circle segments for more accuracy.
* Fixed wrong calculation for airport rating which did not update add-on airports in some cases
  for MSFS, FSX and P3D.
* Deleting duplicate navaids now by region, ident and position. This allows to update frequency or
  type for VOR and NDB on P3D or FSX by add-on.
* Wrongly built airports like the MS MKJS now keep their procedure information in MSFS despite
  trying to override it with an empty procedure set. [#1085](https://github.com/albar965/littlenavmap/issues/1085)

### Navigraph Navdatabase

Note that these changes will be deployed in a future cycle (most likely 2402) and need an
updated Navigraph navdatabase.

* Runways marked as closed are now shown as such when using mode `Use Navigraph for all Features`.
* Airport patterns now correctly marked as not available.
* Runways having one end closed are now positioned correctly. This also resulted in misplaced
  departure procedures. Example: EDDF runway 18.
* Fixed issue where circular airspace arcs resulted in self crossing polygons and wrong
  text placement.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.2.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
