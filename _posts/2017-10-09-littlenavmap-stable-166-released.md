---
layout: post
title:  "Little Navmap 1.6.6 update released - airspaces for X-Plane"
date:   2017-10-09 12:00:00 +0200
categories: release
---

**Direct download:
[Windows](https://github.com/albar965/littlenavmap/releases/download/v1.6.6/LittleNavmap-win-1.6.6.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v1.6.6/LittleNavmap-macOS-1.6.6.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v1.6.6/LittleNavmap-linux-1.6.6.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.6/en/)

[**► Features**](/littlenavmap.html)

## Notes

This update includes several bugfixes, small GUI improvements, a revised manual and support for the OpenAir airspace format for X-Plane.

## Changes from Release 1.6.4 to 1.6.6

Version 1.6.5 was an internal beta release.

Little Xpconnect did not change.

Little Navconnect was updated to 1.6.2.

### Improvements

* Added OpenAir airspace format compilation for X-PLane. Also reading airspace files from
  from `YOUR_DOCUMENTS_DIR/Little Navmap/X-Plane Airspaces`. You have to create the `Little Navmap/X-Plane Airspaces` directory manually.
* Added new airspace types `Wave Window` and `Glider Prohibited`.
* Removed restrictions on user defined waypoint names. Names are now adjusted according to flight plan format when saving.
* Enabled user defined waypoint names for X-Plane FMS format.
* Changed rating checkbox to drop down list in airport search.
* X-Plane 3D airport state is now considered when calculating rating.
* Added display of simulator type to connection status in statusbar.
* Airspace buttons are now disabled if no airspaces are loaded.
* Now clipping long airport and user waypoint names on map.
* Removed `no SimConnect` header label in connect dialog.
* Added display of AIRAC cycle to database dialog \(X-Plane only\).
* Added scenery file display for airspaces in information window.
* Added download button to update notification dialog.
* Better error handling and reporting of too old files with version < 850 when loading X-Plane scenery. Now checking X-Plane CIFP filenames before loading.
* Now showing dialog on certain crash types to avoid silent crash to desktop.
* Made loading of `add-on.xml` more robust for files with wrong encoding.
* Added coordinates to CSV export to clipboard from flight plan and search result tables.

### Bug Fixes

* Offline map themes `Atlas` and `Simple`: Fixed missing lakes in map.
* Fixed problem loading FS9 flight plans.
* Attempt to fix zoom distance creep while using moving map.
* Fixed error in airspace copy process from older database schemes where bounding rectangle was messed up. This resulted in an `Too many objects` message in the statusbar.
* Solved problem with gaps between SIDs, STARs and the respective transitions resulting in wrong
  display and distance calculation.
* Fixed problem where STAR was not reloaded after database switch.
* Fixed issue where airspace display was not updated when changing cruise altitude with empty flight plan.
* Fixed user waypoint format for FLP so that it can be reloaded.
* Fixed confusing `0 errors` dialog appearing after loading X-Plane database successfully.
* Fixed `Connect on startup` checkbox state not saved in some cases.
* Fixed status bar connection indication remaining in disconnected state sometimes.
* Fixed potential crash on failing network connection.
* `Calculate based on given altitude` is working again. Previously failed with `Cannot find a route`.
* Now correctly considering minimum and maximum altitude ranges when calculating to avoid
  non-overlapping airway altitude ranges in one flight plan.
* Fixed error in flight plan saving logic where cancel did not stop saving.


**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/1.6/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

