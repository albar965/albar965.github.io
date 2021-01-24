---
layout: post
title:  Little Navmap 2.6.7 released
date:   2021-01-24 14:00:00 +0100
categories: release
---

## Links

[**► Screenshots of 2.6 Features**](/pages/26/littlenavmapscreens.html)\\
[**► Little Navmap and Little Navconnect User Manuals for 2.6 Versions**](/manuals.html)

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.7.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.7/LittleNavmap-win-2.6.7.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.7.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.7/LittleNavmap-macOS-2.6.7.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.7.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.7/LittleNavmap-linux-20.04-2.6.7.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.7.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.7/LittleNavmap-linux-16.04-2.6.7.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)\\
[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)\\
[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Known Issues

* No SID and STAR yet from MSFS scenery library. This will come with a future update.
* MSFS multiplayer traffic is not shown in *Little Navmap*.

See also [User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems) for more.

## Changes from 2.6.6 to 2.6.7

### Help

* **Updated German online and included PDF manual as well as legend for changes in version 2.6. [Little Navmap - Benutzerhandbuch](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/de).**
* Updated German program translation.
* Corrections to English online and PDF manual as well as map legend.

### MSFS

* **Added workaround for the simulator crashes that were introduced with the MSFS 1.12.13.0 update.** This was possible due to a hint in the official forum. The workaround disables the display of departure and destination for AI.

### User Interface

* Corrected issue where status bar was hidden on first start or after first installation. Now forcing status bar to be visible again when updating from any older version to 2.6.7.
* Flight plan calculation window changed to appear near cursor on first show to avoid random placement off-screen.
* Added recovery if main window gets off screen after changing monitors. Puts window back on top left of main screen if it is not visible.
* Fix for Windows removing file extensions when these are hidden in Windows Explorer. This prevented saving of map images.
* Winds aloft now scanning for the latest dataset to avoid outdated reports. Note that reports might still be outdated at times which happens if no newer one is available.

### Map and Elevation Profile

* Fixed cut off altitude labels on the elevation profile left area.
* Measurement lines now use the declination at the end to calculate magnetic great circle course at end of line. The start course is still calculated based on start declination or attached navaid declination.
* Fixed issue where wrong `Too many objects` message was shown and map performance degraded with tracks enabled.
* Fixed several issues when centering route or flight plan legs with very long flight plans.
* Fixed issues when painting aircraft trail around the anti-meridian.
* Now painting full aircraft trail even when jumping long distances.
* Adjustments and optimizations for taxiway label drawing. Map shows more labels now.
* Markers are now fetched from the simulator database in default scenery mode just like the ILS. Previously markers from add-on sceneries were not visible.
* Fixed issues where marker tooltips appeared after hiding ILS and markers.
* Fixed zooming functions with keyboard input in map where normal zooming was not possible on US and other keyboard layouts.
* Disabled home key which zoomed the map all way out when hit accidentally.
* Fixed crash when disabling all labels for measurement lines. This caused the program to crash on startup which was hard to recover.

### Procedures

* Fixed issue where intercept procedure legs were not calculated correctly. Examples: LGKO SID 32 KOPA3A and LILJ SID DOL1W.
* Small improvements in procedure drawing for turn legs to avoid too large course discrepancies between label and line caused by drawing turn.
* Corrected drawing for several procedure leg types and labels in elevation profile.

### Scenery Library

* Now also including MSFS scenery with content type `CORE` which kept *Little Navmap* from loading some add-on airports.
* Now skipping file `maintenance.bgl` from Navigraph update in MSFS scenery library which caused warnings when loading.
* Airport names now loaded from base scenery with Navigraph update in MSFS. Were missing previously.
* Now omitting scenery library entries which are marked with `active="false"` in `Content.xml`. This lets *Little Navmap* to recognize changes made by scenery management tools now.

### Flight Plan and Export

* Now always adapting departure and destination airport names to the names taken from the selected scenery library. This also affects the proposed files names when saving or exporting flight plans. Behavior before was confusing since it kept an airport name from a previously used simulator scenery database.
* Flight plan calculation now correctly omits waypoints which are part of a procedure. These should be avoided for en-route navigation and are excluded now from calculation except for airway waypoints.
* Folder names are now remembered correctly for MSFS and FSX/P3D manual flight plan export instead of using an arbitrary place depending on scenery library selection.
* Now setting voice type to `Full` as a default for vPilot export since other values produce error messages.
* Applied workaround for XML files with wrong encoding in header. This helps to read wrongly decoded ForeFlight flight plans which are saved in UTF-16 while having a UTF-8 indication in the file header.
* Fix for GPX export to allow saving of files and trails without flight plan. An empty flight plan does not disable the export menu item now and allows to save only the trail as GPX.
* Fixed issue with X-Plane FMS plans where long airport idents like `XRP0001` cannot be loaded by the simulator. Idents are now truncated to six characters.
* Exported FLP flight plans `Aerosoft Airbus and others` and `Aerosoft CRJ` now get a suffix `01.flp` to avoid import problems in the aircraft. Note that the number is static and is not counted up.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.7/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
