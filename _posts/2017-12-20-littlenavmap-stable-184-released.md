---
layout: post
title:  Little Navmap 1.8.4 released
date:   2017-12-20 10:00:00 +0100
categories: release
---

**Direct download:
[Windows](https://github.com/albar965/littlenavmap/releases/download/v1.8.4/LittleNavmap-win-1.8.4.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v1.8.4/LittleNavmap-macOS-1.8.4.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v1.8.4/LittleNavmap-linux-1.8.4.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/)

[**► Features**](/littlenavmap.html)

## Notes

This release fixes several errors and adds two new export functions
for the [Reality XP](http://www.reality-xp.com) _GNS 530W/430W V2_ and _GTN 750/650 Touch_.

The changelog below contains links to the relevant parts of the manual if applicable.

The program will automatically show a question dialog and then copy and prepare the included Navigraph database on first
start if the included cycle 1707 is still used. The included database received minor updates.

**For Linux users:** The startup shell scripts have been deleted since they are not needed anymore. The program
can be started directly from any folder.

**►► Please reload the scenery databases to avoid problems with saved flight plans. ◄◄**

## Included Progams

*Little Xpconnect* was updated to 1.0.6. See included `CHANGELOG.txt` for a list of changes.

*Little Navconnect* was updated to 1.8.3. See included `CHANGELOG.txt`.

## Changes from Release 1.8.3 to 1.8.4

* Added flight plan export for _Reality XP_ GTN and GNS units in the `Export Flight Plan to other Formats` menu.
  See here in the manual:
  [FPL (Reality XP Garmin GNS)](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-rxpgns),
  [GFP (Reality XP Garmin GTN)](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-rxpgtn) and
  [Export Sub-Menu](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/MENUS.html#export-submenu).
* Added option to save Garmin flight plans with user defined waypoints to avoid
  locked waypoints on AIRAC cycle mismatch. See dialog `Options` on tab `Flight Plan` and here in the online manual:
  [Notes about the Garmin Formats GFP and FPL](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#garmin-notes).
* Added **X-Plane 3D airport attribute** in the airport search window in the dropdown list `All Ratings`.
  Also shown in airport facilities list in tooltips and information window.
* Now displaying runway names for SIDs and STARs with reference to multiple parallel or all runways in procedure search.
  Partial solution for issue [#179](https://github.com/albar965/littlenavmap/issues/179). Needs scenery database reload.
* **macOS compatibility changed** since program crashes on 10.9 and below.
  **Now at least version 10.10 is needed**. Program now refuses to run on Mavericks or older and shows an error dialog.
  This had to be done due to requirements in used programming libraries.
* Added setting in dialog `Options` on tab `Map` to **disable tooltips** for selected map features: airports, navaids or airspaces.
* Changed route description text field to mono-spaced font and changed wrapping for better readability.
* Added warning dialog when AIRAC cycle is not available when saving flight plans in X-Plane FMS 11 format.
* Helipads can now be selected as a start position from the map context menu.
* Small adjustment to taxiway labels to show more often.
* Added display for airport regions where available.
* Updated French translation, French manual and legend.
* Updated database to allow future fixes of issue [#179](https://github.com/albar965/littlenavmap/issues/179).
* Database minor version changed to 8 to indicate updated schema. Reloading the scenery databases is recommended.

### Fixed Errors

* **Fixed Majestic Dash FPR flight plan export on Windows.**
* Departure runway is now correctly assigned according to SID runway when loading from formats
  which do not support departure parking (e.g. FMS or FPL).
* Made flight plan format detection more tolerant for X-Plane FMS 11 files with missing cycle information.
* Fixed issues where X-Plane cannot load STAR in FMS 11 flight plans because runway reference is missing.
* Now using correct AIRAC cycle from nav database when writing X-Plane FMS 11 files. Used simulator database version previously which
  could result in X-Plane warnings and unusable flight plans.
* Fixed issue where helipad was not loaded correctly from FSX PLN files in certain cases.
* Fixed Linux build to avoid problems with shared libraries on some platforms for all programs.
* Removed unneeded startup scripts for Linux. Program executable can now be started directly from any folder without
  setting library path.
* Fixed problem where French translation was loaded if OS has French as second or third language.
* Solved problem where translation files were loaded mixed in some cases.
* Fixed problem with initial wrong folder selection if default does not exist when saving or exporting flight plans.
* Fixed `No Simulator found ...` warning dialog for Linux and macOS which should show up only on Windows first startup.
* Made program more tolerant for older database files and improved compatibility.
* Number of approach lighting systems is now correctly assigned to airports in loaded X-Plane scenery data.
  This issue resulted in many airports having an ALS indication where none is.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/1.8/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

