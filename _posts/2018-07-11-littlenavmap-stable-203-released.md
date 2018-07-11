---
layout: post
title:  Little Navmap 2.0.3 released
date:   2018-07-11 15:00:00 +0200
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.0.3/LittleNavmap-win-2.0.3.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.0.3/LittleNavmap-macOS-2.0.3.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v2.0.3/LittleNavmap-linux-2.0.3.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/)

[**► Features**](/littlenavmap.html)

## Notes

This release contains mostly bugfixes.

## Changes from Release 2.0.2 to 2.0.3

### Online Networks

* Fixed issue where simulator, AI or multiplayer aircraft did not move or were not updated on the map with certain settings.
* Now showing both online client and simulator aircraft tabs if user clicks on own aircraft when using online network.
* Both online and simulator information is now shown when clicking on shadow AI/multiuser/simulator aircraft.
* Fixed issue where online ATC was not removed from the map when the related center shut down.
* Online network ACC and FIR regions now have a default radius of 100.
* Removed error dialog for online network downloads. Now showing online network errors/status in statusbar on the connection status label and tooltip.
* Fixed issue when parsing whazzup with small timeintervals. (atools)
* Now assuming that aircraft is on ground for VATSIM and GS smaller than 30 kts (VATSIM has no on ground indication). (atools)
* Fixed wrong tooltip for online shadow aircraft which appear both in simulator and online network.
    Now showing tooltip for simulator aircraft.

### User Interface

* Rearranged controls in search window to allow smaller dock windows.
* Now showing warning message box if SSL/HTTPS was not initialized due to missing MSVC redist installation or other issues.
* Increased size of status bar field for time to avoid creeping/flickering field in macOS.

### Flight Plan

* Fixed several issues with copy CSV to clipboard from flight plan and search result tables.
* Fixed issue where route type (High/Low Alt) was assigned wrongly after flight plan calculation or loading flight plan.
* Fixes for flight factor flight plan export to corte.in. RNAV approaches should be recognized now.
* Flight plan names for flight factor flight plan export to corte.in are now made unique when saving.
* Fixed issues with export for flight plans for iFly 737 that could crash the simulator. (atools)
* Fixed issue where translated parking names were used in PLN files which resulted in wrong flight plan departure
       in saved file. This can appear in the French and Spanish translation.
    [#243](https://github.com/albar965/littlenavmap/issues/243)

### Map

* Added departure and destination to map label for online network and AI aircraft.
* Disabled SSL for OpenMapSurfer theme due to problems on macOS.
* Now hiding all airspaces at small zoom distance when airport diagram is shown.
* Fixed issue where airspace was not displayed when selecting "show information".
* Now ignoring null frequencies on airspaces.
* Fixed issues with map context menu where "Show ..." and "Show ... in search" used the wrong map objects,
    i.e. "Show Network Client" showed airport in information window.
* Now using consistent priority where online and simulator aircraft are now prioritized above airports when
    clicking in the map for all show functions.

### Misc

* Fixed issue where program cannot be opened by Linux file managers.
* Fixed translation issues in navserver resulting in confusing messages in Little Navconnect log window. (atools)
* Now showing coordinates in userpoint search result table.
  A "Reset View" from the context menu is required to show the new columns.
* Increased Garmin userdata export ident length. (atools)
* Fixed issue where aprons from stock airports remained in add-ons when loading FSX or P3D scenery.
* Fixed missing first update of X-Plane weather when starting X-Plane after Little Navmap.
* Now disabling less used search options on first startup after initial installation to get a less cluttered user interface.
* Added option to disable less used type filters in nav search.
* Workaround for partially invalid NDB and waypoint structures in APX27190.bgl from P3D v4.3 which causes errors
  when reading the scenery library.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.0/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
