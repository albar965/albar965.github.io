---
layout: post
title:  Little Navmap 2.6.3.beta released
date:   2020-11-05 12:00:00 +0100
categories: release
---

## Links

[**► Detailed Changelog for previous major update 2.6.0.beta**](https://albar965.github.io/pages/26/littlenavmapchangelog.html)

[**► Screenshots of new 2.6 Features**](https://albar965.github.io/pages/26/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.6 Versions**](https://albar965.github.io/pages/26/littlenavmapmanuals.html)

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.3.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.3.beta/LittleNavmap-win-2.6.3.beta.zip)

[**► macOS** - LittleNavmap-macOS-2.6.3.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.3.beta/LittleNavmap-macOS-2.6.3.beta.zip)

[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.3.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.3.beta/LittleNavmap-linux-20.04-2.6.3.beta.tar.gz)

[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.3.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.3.beta/LittleNavmap-linux-16.04-2.6.3.beta.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)

[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)

[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Important

* _Little Navmap_ might ask again to create the recommended folder structure for files. This can happen once after updating translations since the folder names depend on the selected language. Let the program create the paths if you like to use them and move your files accordingly.
* Update to the latest beta Navigraph navdata update for MSFS if you use it.
* Reload the scenery library.
* The manual was not updated yet. Neither the English nor the translated version. Help buttons and links are functional but point to placeholder pages.
* X-Plane users: Update _Little Xpconnect_ to see time related bug fixes.

## Known Issues

### MSFS

* _Little Navmap_ cannot read SID and STAR from MSFS. Documentation about MSFS format changes are needed in SDK.
* MSFS multiplayer and real-time AI cannot be displayed yet. These do not appear in the SimConnect interface.
* Simulator weather cannot be shown for MSFS since SimConnect weather functions are deprecated and do not deliver data. Needs update or documentation in MSFS SDK. Use NOAA weather which gives you the most up-to-date weather reports.
* MSFS seems to have clear concept of scenery order (`Content.xml` seems unreliable) and there is no information in the SDK about this. Add-ons are loaded by alphabetical order by _Little Navmap_. To put an add-on to the end of the loading list add a `z_` to the folder name, for example.
* Flight plan loading in MSFS is flawed and does not produce any error messages if it fails. Quite often MSFS cannot load its own plans correctly.
* Country names are missing in MSFS translation tables and are not available in _Little Navmap_, therefore.
* Add-ons using the `.fsarchive` encrypted format are not supported. _Little Navmap_ will show only the stock airport instead of the add-on if a package is locked down like this.
* Some aircraft mods do not report correct fuel flow to work around simulator limitations. This cannot be fixed in _Little Navmap_.

### Other

* Dock window layout in _Little Navmap_ can change when resizing or maximizing window and back. Qt limitation.
* Window is restored in normal state when changing from a maximized window to fullscreen and back. This is a Qt limitation.
* The flight plan calculation might pop up shortly or the main window might flicker when starting the program. This can be ignored.
* The height of the elevation profile window cannot be reduced in some cases. Reset to default window layout which fixes this. Rearrange or move the elevation profile window to another position which usually solves this. Save the layout once you have a working one. This is a limitation in the used Qt library.
* Zooming with touchpad or magic mouse does not work properly on macOS. Use the navigation overlay or one of the other options on page `Map Navigation` in `Options` if you think it is unusable. This is a limitation in the used Qt library.

## Changes from Release 2.6.2.beta to 2.6.3.beta

### Translations

* French, German and Italian user interface translation completed. Thanks to Patrick for adding the French translation!
* Updated Chinese translation. Thanks to John Liu for providing a first draft!
* Other translations are work in progress.

Note that you can change the user interface language in the options dialog on page `User interface`.

### User Interface

* Added new splash screen image by Günter Steiner.
* Fixed freezing on startup on macOS Big Sur.
* Fixed several problems with dialogs hidden behind main window when using `Keep in Foreground`.
* Added support for coordinate parsing from Wikipedia which uses special characters to minute and second symbols. Coordinates like `40°41′21″N 74°2′40″W` (note ″ and ′ instead of " and ') can now be directly pasted into _Little Navmap_ dialogs.
* Corrected parsing of coordinate format longitude/latitude (reversed order compared to usual format). Now swapping coordinates in this format only if no designators N, S, E and W are given. See options dialog on page `Units` and tooltip on coordinate format box.
* Added `Manual Wind` menu item to weather menu which is a clone of the checkbox in the fuel report.

### Flight Plan

* Corrected wrong calculation of time to next waypoint where time was not affected by wind.
* Fixed missing aircraft information when elevation profile and performance data cannot be calculated.
* Now checking for path validity more often in multiexport dialog to catch path changes done outside _Little Navmap_.
* Auto renumbering all user flight plan positions (green rectangle) that match default pattern prefixed with `WP` like `WP1`, `WP2` or `WP99` now. Note that positions are already renumbered when loading a plan.
* Waypoint names and positions for user created approaches now correct when exporting plan.
* Problem with wrong active leg sequencing in some procedures solved.
* Fixed procedure query for airports which have a different ident in sim and navdata. Procedures were not shown before. Example: Vanderhoof which is AU4 in some simulators vs. CAU4 in Navigraph where procedures are loaded from Navigraph database.
* Fixed crash when loading LNMPLN flight plans with an empty waypoint list and added error message.
* PLN files for FSX, P3D and MSFS now have altitude set for all waypoints.
* Removed ICAO region code from MSFS export to improve loading in simulator.

### Map

* Fixed problem where procedure legs like arcs could disappear when zooming.
* Improved drawing of procedures with curves and arcs when following in elevation profile.
* Reduced size of VOR and NDB symbols in lower zoom levels on map.
* Flight plan details reduced on map display.
* Tooltips, map click and menus now working on add-on airports if all other airports are off. Before some menu items like `Set as destination` where disabled although airport was visible.
* Corrected display for manual wind. Map and tooltips now show wind based on manual setting instead of a probably enabled online wind source.
* Enabled `Set as Destination` and `Set as Departure` in map context menu again to allow round trips where destination is equal to departure.

### Elevation Profile

* Fixed wrong display of mouse hover position and wrong waypoint position in elevation profile for some procedures. Example: Norwich (EGSH), via NWI1 and NDB FN27 (N27) to runway 27.
* Removed green elevation ramp in profile for legs longer than 2000 NM when using online elevation data. Now filling long legs with zero elevation if maximum length for online data is exceeded.
* PAPI slope for approaches now shown again on elevation profile.
* Tooltip in elevation profile not showing up in front of other windows anymore.
* Set minimum size for elevation profile to avoid corrupted display.
* Fixed issue with missing update in tooltip data after flight plan altitude change.
* Several crashes in elevation profile and context menu fixed.
* More improvements in profile.

### Other

* Adjusted detection of MSFS Navigraph navdata update to avoid all airports being detected as add-on.
* Fixed parsing of the incomplete METAR date which gives only day of month. The error could result in reports having the wrong date one month back.
* Fixed issue where METAR reports might not be updated in index which could result in old reports shown.
* Now imitating MSFS if an scenery update like the Navigraph navdata update tries to reuse the ident of an airport for a new one. Example: Boyd Field (54XS) in MSFS which actually Bar C Ranch Airport (54XS) in real life at another location. 54XS is shown in the old and wrong location by MSFS while the Navigraph update assigns the ident to the new and correct position.
* Fixed issue where military airports were not recognized in add-ons.
* Limited logging for online network connections to avoid log flooding with high frequency connections.
* Fixed issues where the wrong UTC time might be sent by _Little Xpconnect_ X-Plane in some cases.
* Made display of head- and tailwind consistent. Arrow down `▼` now indicates headwind and arrow up `▲` indicates tailwind in all parts of the program.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.6.3.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
