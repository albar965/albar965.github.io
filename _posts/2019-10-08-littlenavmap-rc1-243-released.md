---
layout: post
title:  Little Navmap 2.4.3 Release Candidate 1 released
date:   2019-10-08 16:00:00 +0200
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.4.3.rc1/LittleNavmap-win-2.4.3.rc1.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.4.3.rc1/LittleNavmap-macOS-2.4.3.rc1.zip) -
[Linux \(64 bit, based on Ubuntu 18.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.3.rc1/LittleNavmap-linux-18.04-2.4.3.rc1.tar.gz) -
[Linux \(64 bit, based on Ubuntu 16.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.3.rc1/LittleNavmap-linux-16.04-2.4.3.rc1.tar.gz)**

**Alternative download locations: [Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) -
[Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) -
[OneDrive](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)**

[**► Screenshots of new 2.4 Features**](/pages/24/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Manuals for 2.4 Versions**](/pages/24/littlenavmapmanuals.html)

**Please do not hesitate to let me know about bugs or crashes.**

## Changes from Release 2.4.2.beta to 2.4.3.rc1

**Please reload the scenery library.**

**Map theme is reset back to OpenStreetMap.**

### Help

* All help buttons and links are functional now in the program.
* English online manual is now complete. PDF and other formats are available for download:
  [Little Navmap and Little Navconnect Manuals](/pages/24/littlenavmapmanuals.html).
* PDF Manuals for French, Italian and German are included in download archive but still based on version 2.2.
* Sources for the manuals are committed to Github and can be found [**here**](https://github.com/albar965/littlenavmap-manual/tree/release/2.4) on branch `release/2.4` for translation.

### Help - New Chapters

* [Dock Windows](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/DOCKWINDOWS.html)
* [Tabs](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/TABS.html)
* [**Holding**](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/HOLD.html)
* [Image Export](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/IMAGEEXPORT.html)
* [**User Defined Approach**](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/CUSTOMPROCEDURE.html)
* [Reset all for a new Flight](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/RESET.html)
* [Aircraft Performance Merge](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/AIRCRAFTPERFMERGE.html)
* [**Logbook**](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/LOGBOOK.html)
* [**Winds aloft**](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/WEATHER.html#wind)
* [OpenAir Airspaces](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/SCENERY.html#load-scenery-library-openair-airspaces)
* [Web Server](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/WEBSERVER.html)
* [**Tutorial - Creating an Aircraft Performance Profile**](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/TUTORIALPERF.html)
* [Keyboard Shortcuts](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/SHORTCUTS.html)

### Help - Updated Chapters

* [Menus and Toolbars. Updated for new functions.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/MENUS.html)
* [Overview. Updated images and added image for help.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/QUICKOVERVIEW.html)
* [Legend. Updated for new features.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/LEGEND.html)
* [Flight Plan Tab. Wind and alternates.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/FLIGHTPLAN.html)
* [Flight Plan Route Description. Updated for alternates.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/ROUTEDESCR.html)
* [Edit Aircraft Performance. Updated for wind and changed report.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/AIRCRAFTPERFEDIT.html)
* [Aircraft Performance Collection. Permanent collection.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/AIRCRAFTPERFCOLL.html)
* [Aircraft Performance. New performance features.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/AIRCRAFTPERF.html)
* [Information Dock Window. Logbook, userpoint tabs and airport file links. Nearest and preferred runways.](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/INFO.html)
* [Options Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/OPTIONS.html)
* [All Tutorials](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/TUTORIALS.html)

### Fuel Report and Aircraft Performance

* Fixed several issues with fuel conversion: Metric units now shown correctly in fuel report and
  merge dialog.
* Fuel flow, amount and estimated range now shown correctly if aircraft performance is based on
  fuel volume instead of weight.
* Estimated range in fuel report now considers reserve as in performance edit dialog. Numbers were
  different before.
* Merging collected values into current performance now set changed state of performance file
  correctly to avoid data loss.

### Flight Plan

* X-Plane FMS flight plans now get correct ICAO ID for destination if available. Destination could
  receive an empty id before which resulted in an invalid FMS flight plan.
* Fixed issue where procedure information was lost when loading flight plan into a database which
  does not contain procedures or after switching databases.
* Fixed crash when loading flight plan with invalid waypoint while being connected to simulator.
* Fixed crash that happens with invalid flight plans when switching databases in connected state.
  The active leg is now reset when switching to avoid crashes.
* Removed wrong warning of airway altitude violations where upper limit is 0.
* User set cruise altitude remains unchanged now after victor or jet calculation when east/west rule
  adjustment is off.
* Cruise altitude is now adjusted to next valid value for east/west rule based on the current value
  entered in the user interface. Was always set to lowest allowed value. Now also lowering or raising
  cruise altitude if not valid for used airways when using jet or victor calculation.
* Fixed issues which cruise altitude correction when using metric units.

### Elevation Profile

* Fixed problem where aircraft trail was not recorded in elevation profile when window was closed
  or program was hidden/minimized.
* Fixed issue where flight plan and elevation profile was built incorrectly if waypoints were not
  valid in plan.

### Options

* Restore defaults in options dialog can now be reverted by pressing cancel.
* Resetting map theme back to OpenStreetMap to avoid wrong selection of disabled OpenMapSurfer theme.
* Other small user interface fixes.

### Procedures

* Fixed display issue for procedure leg names like `XAROL+5`. Was using wrong distance value before.
* Fixed issue where navaids were hidden on the map if part of a missed procedure in the flight plan.
* Fixed display problem when deleting transitions from a flight plan resulting in invalid approach.

### Apple macOS

* Now showing correct application name and correct application menus on macOS.
* Fixed wrong color button appearance in options dialog on macOS..

### related from atools version 3.4.3.rc1

See CHANGELOG.txt in atools project for more technical details. Relevant comments were added to list above.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.4/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
