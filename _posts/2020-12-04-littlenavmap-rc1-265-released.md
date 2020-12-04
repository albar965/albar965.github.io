---
layout: post
title:  Little Navmap 2.6.5.rc1 released
date:   2020-12-04 14:00:00 +0100
categories: release
---

## Links

[**► Detailed Changelog for previous major update 2.6.0.beta**](https://albar965.github.io/pages/26/littlenavmapchangelog.html)

[**► Screenshots of new 2.6 Features**](https://albar965.github.io/pages/26/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Manuals for 2.6 Versions**](https://albar965.github.io/pages/26/littlenavmapmanuals.html)

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.5.rc1.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.5.rc1/LittleNavmap-win-2.6.5.rc1.zip)

[**► macOS** - LittleNavmap-macOS-2.6.5.rc1.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.5.rc1/LittleNavmap-macOS-2.6.5.rc1.zip)

[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.5.rc1.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.5.rc1/LittleNavmap-linux-20.04-2.6.5.rc1.tar.gz)

[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.5.rc1.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.5.rc1/LittleNavmap-linux-16.04-2.6.5.rc1.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)

[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)

[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Important

* Update to the latest beta Navigraph navdata update for MSFS if you use it.
* Reload the scenery library.

## Known Issues

See here: [User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

## Changes from 2.6.4.beta to 2.6.5.rc1

### User Manuals and Help

* All help buttons and links are functional now in the program.
* English online manual is now complete. Available for download in PDF, EPUB and MOBI format:\\
  [Little Navmap and Little Navconnect Manuals for 2.6 Versions](https://albar965.github.io/pages/26/littlenavmapmanuals.html).

#### New Chapters

* [Flight Plan Route Calculation](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/ROUTECALC.html)
* [Flight Plan Multiexport](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/ROUTEEXPORTALL.html)
* [Tracks](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TRACKS.html)
* [Edit Flight Plan Position](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/EDITFPPOSITION.html)
* [Edit Flight Plan Remarks](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/EDITFPREMARKS.html)
* [Window Layout](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/LAYOUT.html)
* [Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/NETWORK.html)
* [Start](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/START.html)
* [Directories](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FOLDERS.html)

#### Updated Chapters

* [Flight Plan Formats](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FLIGHTPLANFMT.html)
* [Options](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/OPTIONS.html)
* [Installation](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INSTALLATION.html)
* [Menus and Toolbars](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MENUS.html)
* [Introduction](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INTRO.html)
* [Map Display](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MAPDISPLAY.html)
* [Legend](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/LEGEND.html)
* [Elevation Profile](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/PROFILE.html)
* [Logbook](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/LOGBOOK.html)
* [Connecting to a Flight Simulator](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/CONNECT.html)
* [Tutorial - Building a VFR Flight Plan](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TUTORIALVFR.html)
* [Tutorial - Building an IFR Flight Plan with Approach Procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TUTORIALIFR.html)
* [Tutorial - Creating an Aircraft Performance Profile](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TUTORIALPERF.html)

### Flight Plan and Export

* Fixed issue where airways were not selected in flight plan calculation after a SID exit point
  resulting in not optimal flight plans.
* Corrected wrong display of distance in leg ident (e.g. `TAU+4`) in flight plan which showed too
  small numbers in some cases.
* Added missing `All files` filter in all flight plan file save dialogs.

### Logbook

* Now excluding flights with wrong simulator time (negative duration) from logbook statistics.
  This can happen if a simulator reports wrong UTC time or a user changes the simulator time during
  flight. Correct these manually if you see this.
* Added the missing total flight time numbers in logbook statistics dialog. Rearranged logbook
  statistics and put more important tables on top.
* Changed ordinate order in GPX file export to fix Google Maps import issues.

### Procedures

* Corrected selection of SID and STAR with multiple runways in procedure search when right clicking
  on leg.
* Added keyboard shortcut `Return` for `Show procedure`.
* Now denying to add procedures which are completely broken due to missing navaids.
  This is needed to avoid crashes.
* Solved issue where warning dialog appeared twice after adding procedure.
* Fixed inaccessible keyboard shortcuts in procedure search.

### Map

* Fixed slowdown and freezes in map when showing only add-on airports forced with high detail levels.
* Adjusted MORA number display for dark maps like CartoDark for better visibility.
* Fixed several issues where elevation profile was not updated after merging performance or
  changing the performance profile.
* Fixed display and flight plan issues with SID UNIT7K and others at LIMJ.
* Now always drawing approach ILS and airport diagram from flight plan even if these features are disabled in map.
  Allows to hide all map features and show only the important flight plan related ones.
* Corrected rendering order if airport diagram is active when changing detail level. Airspaces are
  now always disabled at the same zoom distance independent of detail level to keep them from disappearing
  at higher zoom levels.
* Fixed issue where ghost tooltips could appear for airspaces when changing detail level.
* Limited localizer width to 20 degree to avoid excessive values from FSX and MSFS distorting ILS
  display.
* Fixed issue with missing or wrong longest runway surface for airports read from MSFS.

### User Interface

* Corrected main window title which showed wrong AIRAC cycle for scenery libraries which do not
  support one (FSX, P3D and MSFS).
* Now omitting thousands group separator in range ring radius list in options since it can cause problems with
  regional settings using space as a separator. Sorting range ring radii after saving now. #590.

### Weather

* Fixed issue where VATSIM weather was only downloaded and updated once after start.
* Now correcting VATSIM weather URL from http to https on startup to avoid outdated METARs from the
  wrong address.

## Going back to stable _Little Navmap_ 2.4.5 after trying the beta

The scenery databases of the new beta versions are not compatible with _Little Navmap_ 2.4.5. Delete the databases files from the settings folder of _Little Navmap_ if you see crashes and exceptions containing messages like `no such column`. You can find information  about the folder and the files here in the online documentation in chapter [Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FILES.html#databases).

You can safely delete the following files since they can be created again by reloading the scenery library:

`little_navmap_fsx.sqlite`, `little_navmap_fsxse.sqlite`, `little_navmap_p3dv2.sqlite`, `little_navmap_p3dv3.sqlite`, `little_navmap_p3dv4.sqlite`, `little_navmap_msfs.sqlite` and `little_navmap_xp11.sqlite`

**Do not delete any other databases which contain userpoints and the logbook entries, for example.**

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.6.5.rc1/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
