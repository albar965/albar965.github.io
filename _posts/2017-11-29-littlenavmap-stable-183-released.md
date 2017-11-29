---
layout: post
title:  Little Navmap 1.8.3 released - Navigraph Support
date:   2017-11-29 19:00:00 +0100
categories: release
---

**Direct download:
[Windows](https://github.com/albar965/littlenavmap/releases/download/v1.8.3/LittleNavmap-win-1.8.3.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v1.8.3/LittleNavmap-macOS-1.8.3.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v1.8.3/LittleNavmap-linux-1.8.3.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/)

[**► Features**](/littlenavmap.html)

## Notes

This release adds **support for Navigraph updates** and includes a full AIRAC cycle including
procedures, airspaces, navaids and more.

**Note that Navigraph updates will only be available as of December 7th with the next cycle 1713.**

Furthermore, new flight plan export formats like the Majestic Dash and the new X-Plane 11 FMS format were added.

## Changes from Release 1.6.7 to 1.8.3

*Little Xpconnect* was updated to 1.0.5. Minor changes only.

*Little Navconnect* was updated to 1.8.2. Minor changes and bug fixes only.

**The program will automatically prepare the included Navigraph database on first start.**

**Reloading the scenery databases is recommended.**

### Improvements

#### Navigraph

* Added Navigraph database cycle 1707 to program download archive. Database is prepared and
  used automatically on startup. See the
  [Navigation Databases](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/NAVDATA.html)
  chapter in the manual for more information.
* Added sub-menu for Navigraph database in menu `Scenery Library` with three display options.
* Program can now display mixed data (e.g. `FSX/N` in titlebar) on map and in information window:
  * Complete airports and ILS from simulator data.
  * Navaids, airways, airspaces and procedures from third party navdata like Navigraph.
* Changed main window title bar to indicate usage of navdata (e.g. Navigraph):
  `FSX/N`: simulator and navdata, `(FSX)/N`: navdata only and `FSX`: simulator only.
  See [Window Title](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/INTRO.html#window-title)
  in the online manual.
* Additonal third party database is now opened from application directory
  first and can be overloaded in settings database directory by a newer one. Programm checks
  database internal compilation time before copying and creates database indexes on demand.
  Database is copied and prepared on first startup.

#### Flight Plan Export
* Enabled saving of the new X-Plane 11 FMS file format and added warning before saving since the
  format is not usable by X-Plane 11.05.
  FMS 11 is now the default format when saving FMS although it needs at least a 11.10 beta version.
  FMS 3 can still be saved using the export option. See in the manual:
  [FMS 11](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-fms11)
  and
  [FMS 3](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-fms3).
* Added flight plan export for Majestic Dash. Currently limited to waypoints. See in the manual:
  [FPR](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-fpr).
* Added export for IXEG 737 flight plan format. See in the manual:
  [FPL](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-fpl).
* Flight plan export to Flight Factor Airbus added. See in the manual:
  [corte.in](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-cortein).

#### Translation
* Updated English manual and French program translation.
* Added translated offline manual PDF by Patrick. Not yet available online.
* Added French legend and updates to translation.

#### Options

* Added settings in option dialog on tab `User Interface`
  to force user interface language and locale \(number format, date format and more\) in program to English.
* Added options to disable restoring the last search parameters, information window content and
  aircraft trail on startup in options dialog on tab `Startup`.

#### Other

* Updated Linux startup script so that it can be used also by the desktop launcher (thanks to Valerio for the tip).
* Now adding all readme and changelog files to macOS deployment.
* Added command line option `-s` or `--settings-directory` that allows to change the `ABarthel` part of the
  settings directory for testing purposes like running more than one version of Little Navmap.
* Fixed display of navaids in information dock window on procedure tab and removed SIDs and STARs
  since this information was not useful.
* Added cycle information to X-Plane menu item in scenery library menu showing AIRAC cycle of loaded X-Plane database.
* Scenery library menu item is now disabled instead of being hidden if only one simulator is installed.
* Adapted airspace and COM display to new types. Added caution airspace.
* Information dock window on tab `Runways/Helipads`
  can now display more than one ILS for a runway end (EDDF 25R/07L in X-Plane).

### Fixed Errors

* Fixed error where ARINC name of procedures was not loaded causing problems when exporting and loading flight plans.
* Fixed problem in ATS route string parser where an airway as an invalid first entry did not generate a warning message.
* Fixed error in route string parser which did not recognize STARs correctly.
* Fixed error where first enroute waypoint contained an airway reference after calculating with SID in some cases.
  This caused problems when exporting some flight plan formats and in the route string parser.
* Fixed several display issues with large airspaces and airways crossing the anti meridian. These showed up
  mirrored with their tooltips in other parts of the world. Small problems remain (e.g. Melbourne FIR).
* FSX/P3D: Added workaround for scenery sort order with `add-on.xml` files missing layer id.
  Now forcing navaid updates of fsAerodata to highest priority.
* Fixed error where an automatic connect was attempted even when hostname is empty.
* Fixed problem with almost invisible checkbox, radiobutton and toolbar-button state in night mode.
* Fixed error with wrong ILS pitch in X-Plane compiler. Value was rounded to integer value.
* Better handling of X-Plane OpenAirspace comments.
* Fixed crashes and freezes with invalid or incomplete procedures.
  Drawing code is now more robust for invalid procedure legs as they appear in some add-on scenery.
* Fixed problem where invalid procedure legs were not recognized \(course/heading to DME distance or VOR radial\).
* Fixed problem where no scenery database was selected on first startup causing crashes when loading a flight plan.
* Fixed handling of missing or inaccessible legend file. Now silently ignores error and redirects to
  web page if unavailable.
* Fixed error in scenery library menu where a menu item could be deselected resulting in no selection at all.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/1.8/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

