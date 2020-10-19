---
layout: post
title:  Little Navmap 2.6.2.beta released
date:   2020-10-19 10:00:00 +0200
categories: release
---

## Links

[**► Detailed Changelog for previous major update 2.6.0.beta**](https://albar965.github.io/pages/26/littlenavmapchangelog.html)

[**► Screenshots of new 2.6 Features**](https://albar965.github.io/pages/26/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.6 Versions**](https://albar965.github.io/pages/26/littlenavmapmanuals.html)

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.2.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.2.beta/LittleNavmap-win-2.6.2.beta.zip)

[**► macOS** - LittleNavmap-macOS-2.6.2.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.2.beta/LittleNavmap-macOS-2.6.2.beta.zip)

[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.2.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.2.beta/LittleNavmap-linux-20.04-2.6.2.beta.tar.gz)

[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.2.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.2.beta/LittleNavmap-linux-16.04-2.6.2.beta.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)

[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)

[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Important

* All multiexport options now reset back to default due to internal format changes.
* The hotfix for the broken offline maps is not needed anymore.

## Important for MSFS Users

* Remove the MSFS Community folder from the ignore list in _Little Navmap_, `Options`, page `Scenery Library Database` if you added it with _Little Navmap_ 2.6.0.beta. The exclusion  to avoid the crash is not needed anymore.
* Update to the latest beta Navigraph navdata update for MSFS if you use it.
* Reload the scenery library if you use MSFS.

## Known Issues

### MSFS

* _Little Navmap_ cannot read SID and STAR from MSFS. Documentation about MSFS format changes are needed in SDK.
* MSFS multiplayer and real-time AI cannot be displayed. Needs SDK updates or more documentation.
* Simulator weather cannot be shown for MSFS since SimConnect weather functions are deprecated and do not deliver data. Needs update or documentation in MSFS SDK. Use NOAA weather which gives you the most up-to-date weather reports.
* MSFS has no clear concept of scenery order as far as I can see (`Content.xml` seems unreliable) and there is no information in the SDK. Add-ons are loaded by alphabetical order by _Little Navmap_. To put an add-on to the end of the loading list add a `z_` to the folder name, for example.
* Flight plan loading in MSFS is flawed and does not produce any error messages if it fails. Quite often MSFS cannot load its own plans correctly.
* Country names are missing in MSFS translation tables and are not available in _Little Navmap_, therefore.
* Add-ons using the `.fsarchive` encrypted format are not supported and most likely never will.

### Other

* Dock window layout in _Little Navmap_ can change when resizing or maximizing window and back. Qt limitation.
* Window is restored in normal state when changing from a maximized window to fullscreen and back. This is a Qt limitation.
* The window layout might not be restored precisely on startup in some cases. This is a limitation in the used Qt library.
* The flight plan calculation might pop up shortly when starting the program. Simply ignore this.
* The height of the elevation profile window cannot be reduced in some cases. Reset to default window layout which fixes this. Rearrange or move the elevation profile window to another position which usually solves this. Save the layout once you have a working one. This is a limitation in the used Qt library.
* Zooming with touchpad or magic mouse does not work properly on macOS. Use the navigation overlay or one of the other options on page `Map Navigation` in `Options` if you think it is unusable. This is a limitation in the used Qt library.
* Program hangs on macOS Big Sur beta. Investigating.

### Going back to stable _Little Navmap_ 2.4.5 after trying the beta

The scenery databases of the new beta versions are not compatible with _Little Navmap_ 2.4.5. Delete
the databases files from the settings folder of _Little Navmap_ if you see crashes and exceptions
containing messages like `no such column`. You can find information  about the folder and the files
here in the online documentation in chapter [Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FILES.html#databases).

You can safely delete the following files since they can be created again by reloading the scenery library:

`little_navmap_fsx.sqlite`, `little_navmap_fsxse.sqlite`, `little_navmap_p3dv2.sqlite`, `little_navmap_p3dv3.sqlite`, `little_navmap_p3dv4.sqlite`, `little_navmap_msfs.sqlite` and `little_navmap_xp11.sqlite`

**Do not delete any other databases which contain userpoints and the logbook entries, for example.**

## Changes from Release 2.6.1.beta to 2.6.2.beta

### Translations

* Italian user interface translation completed. Thanks to Flavio for his work!
* German program translation completed.
* Other translations are work in progress.

**Note that you can change the user interface language in the options dialog on page `User interface`.**

### Scenery Library

* Now checking for all paths `Community`, `fs-base` and `fs-base-nav` before recognizing a MSFS installation as valid. This should help to avoid detection issues with remains from previous or other installations. * Airports in folders prefixed with `asobo-airports-` in `Official\Steam` or `Official\OneStore` are now flagged as add-ons.
* Fixed issue where program could appear frozen while counting files before loading scenery.
* Fixed detection for military airports in MSFS and extended detection with international phrases like `Militärflugplatz`.
* Now capitalizing all airport names for FSX, P3D and MSFS to fix wrong designators like `Afb`.
* Added checking for database file modifications outside application now. Showing a warning dialog if changes are detected. This should make clear that _Little Navmap_ has to be closed before updating databases.

### Map Display

* Changed `force add-on` airport display functionality completely. Now keeping add-ons airports visible on map independent of zoom level if this option is selected in the toolbar or the menu `View` ->  `Airports` -> `Force Show Add-on Airports`. Add-on airports are now shown highlighted with a yellow ring per default. Add-on highlighting can be disabled in options dialog on page `Map Display`. The colors can be adjusted in the configuration file `little_navmap_mapstyle.ini`.
* Changed display when increasing or decreasing detail level on map. Now also scaling icons, texts and other map object features. Detail level can now be used to show airport diagram earlier.
* Flight plan waypoints are now shown with higher detail level which results in more text and larger symbols. Flight plan display is now also affected by detail level changes.
* Resetting label options for flight plan line (options dialog on page `Map Display 2` tree element `Flight Plan`) on first start to distance and magnetic course since course was switched off in some cases.
* Increased map details for certain zoom factors. Certain navaids are now shown earlier as small triangles (waypoint), rectangles (VOR) or points (NDB) symbols depending on zoom.
* Fixed issue where context menu was all disabled if shown by menu key and mouse not over map.
* Fixed handling of map overflow when showing the maximum number of objects on the map. User now gets a warning `Too Many Objects` in the status bar if a result exceeds the limit. This is needed to avoid program freeze situations. This fixes the half filled map without warning message.
* Added missing shared library file back to fix the broken offline map themes. The hotfix is not needed anymore.
* Fixed issue where waypoints were queried from the database with tracks not loaded. This slowed down map rendering significantly.
* Fixed issue where context menu item to select parking was disabled on departure airport.
* Added option to enable or disable AI and user aircraft background text fill. AI/multiplayer and user aircraft label colors are now configurable in `little_navmap_mapstyle.ini`.
* Fixed issue where ghost tooltips were displayed for missed approaches.
* Added option to show indicated altitude at user aircraft label on map. This is now the default altitude shown in the label. This can be changed in options on page `Map Display 2` in the tree on the right at `User Aircraft`.
* The elevation profile now uses indicated altitude for aircraft position to avoid discrepancies in display when flying at flight levels.
* The map is now also centered and updated with disabled aircraft display. The active leg (magenta line) is now correctly updated on the map and elevation profile in this case.
* Other display improvements.

### Weather

* Fixed issue with NOAA weather downloads where a missing internet connection or wrong web address flooded the log and caused the program to crash. Now applying a grace period of three minutes after an error which blocks new downloads for METAR requests. Online weather is updated every ten minutes.

### Flight Plan

* Added option to extract flight plan for selected plan range and save it into a new file. Select a range of flight plan legs not touching alternates or procedures. Then right click into the table and choose `Save selected Range as Flight Plan`. This will not replace the current plan but add the saved file to the recent files list.
* Fixed crash while calculating elevation profile with cruise altitude below destination airport elevation.
* Corrected wrong distance calculation for an approach where a course intercept leg follows an initial fix. Example EGPB LOC FF09 via D244L.

### Export

* Export paths now remain unchanged when switching simulator after first initialization. Paths can still be adapted to the currently selected simulator by using reset.
* Now ignoring MSFS path for FSX and P3D aircraft. Best guess for export paths improved.
* Added descriptions with more details in tooltip for multiexport dialog.
* Added native LNMPLN flight plan format to multiexport. Note that using this option will clear the change flag (the `*` in the window title plus further question dialogs asking to save file). It will also set the current filename to the exported file name. Furthermore, it will add the filename to the recent files list. This way the LNMPLN export option behaves exactly as if the user called `Save` or `Save as`.
* Now stopping export and showing warning dialog if one or more paths are invalid instead of silently ignoring the error.
* Removed Garmin export option for waypoints from options dialog. Added new entries in multiexport dialog instead.
* X-Plane FMS export file name now using a dash in file name for better readability.
* Changed default F1 GTN export path to `F1TGTN`.
* Small improvements and several fixes in multiexport configuration dialog and context menu. Fixed missing update (not switching to bold font) of table when checking for export.
* Airac cycle was not correctly applied in some cases and resulted in using the current month and warnings in X-Plane.

### User Interface

* Changed default window layout to one where dock windows `Search` and `Simulator Aircraft` are merged into a tabbed view. This avoids the frozen (not resizable) elevation profile window. Look for the tabs `Search` and `Simulator Aircraft` on the lower right side of the main window.
* Removed wrong rounding to nearest 0.025 MHz for COM frequencies.
* Added source indicator for COM frequencies in information window. Either `Navigraph` or `Simulator` depending on scenery library selection.
* Now showing add-on and closed airports throughout the whole program in italic underline and strikeout respectively.
* Route description dialog now properly updates result list in macOS when using interface style `macintosh`.
* Fixed issue where fuel report remained active but was not updated due to failed top of descent calculation. Now clearing window and showing orange warning message if this is the case.
* Now showing an excerpt of the waypoint remarks in the next waypoint section of the progress display.
* Added calculated altitude for next waypoint to aircraft progress display.
* Added link to download section to the help menu.
* Now showing ice and condition column in progress only if not equal to none.
* Further user interface improvements and fixes.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.6/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
