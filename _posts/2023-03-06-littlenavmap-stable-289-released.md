---
layout: post
title:  Little Navmap 2.8.9 released
date:   2023-03-06 15:00 +0100
categories: release
release-version: 2.8.9
---

### Direct Download

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.9.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.9/LittleNavmap-win64-2.8.9.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.9.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.9/LittleNavmap-macOS-2.8.9.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.9.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.9/LittleNavmap-linux-22.04-2.8.9.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.9.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.9/LittleNavmap-win32-2.8.9.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.9.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.9/LittleNavmap-linux-20.04-2.8.9.tar.gz)

## Notes

**This is a stable release of Little Navmap fixing crashes and other bugs.**

**X-Plane: Update your Little Xpconnect installation as well with the included version 1.0.34 to
fix wrong TAS and GS speeds.**

**macOS users: Keep in mind that you have to clear the quarantine flag for Little Xpconnect on update. See
[Clearing the Quarantine Flag on macOS]
(https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

This version is ready for the latest MSFS and for X-Plane 12. See important known issues below for MSFS.

The online user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/).

See here for user manual downloads:
[User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable).

A big thank you to all who reported bugs and issues!

Special thanks to Max Hille for finding the issue with Xpconnect on Linux and X-Plane 12!

## Known Issues MSFS

**Active pause in MSFS breaks the connection and does not allow to reconnect even when restarting *Little Navmap*.
This is a MSFS issue. Use the key `Esc` for normal pause or click the toolbar button for pause to avoid problems.
Note that you can also start active pause the usual way (keyboard or joystick) but end it with the MSFS toolbar button.
This keeps the connection intact.**

**The active pause problem was fixed with the MSFS SU12 Beta version.**

**Loading a flight plan containing user defined points (coordinates) results in some positions of the plan
placed at the North Pole. Note this was fixed with the MSFS SU12 Beta.**

See also [MSFS Common Problems](https://albar965.github.io/littlenavmap-faq.html#problems-msfs) in the FAQ.

## Changes from 2.8.8 to 2.8.9

### Map Display

* AI aircraft with unreliable on-ground status injected by third party traffic tools are now
  corrected if there is vertical speed or ground speed. This helps to avoid flying aircraft
  hidden wrongly on the map.
* Changed speed display for AI and user aircraft. Now showing ground speed on ground in map display
  labels and progress tab for AI if user and AI aircraft are moving. Disabled wrong IAS and TAS display
  labels for user aircraft on ground.
* Fixed en-route holdings drawn with the wrong turn direction.
* Added turn direction for en-route holding tooltips and information window.
* Fixed issue where map highlights remained after putting a dock widget like search to the bottom
  of dock stack.
* Added margins to map display text labels to improve readability.
* Airport diagrams now shown earlier on map when zooming in.
* Updated map themes on [Little Navmap Downloads - Map Themes](https://www.littlenavmap.org/downloads/Map%20Themes/).
* Removed unneeded Marble map theme legend files.
* Increased maximum number of entries in map position history.
* More adjustments and fixes for better drawing.

### Flight Plan and Export

* Corrected loading of flight plan routing network which was incomplete due to new MSFS RNAV waypoint type.
  This resulted in calculated flight plans using too many direct-to instead of airways when using
  `Do not use Navigraph Database` in the scenery library menu. [#1001](https://github.com/albar965/littlenavmap/issues/1001)
* Better error checking for flight plan export file pattern in multi export options. Added
  validation and error messages for export file patterns and file extensions. A file pattern with
  errors is now always highlighted red also if not selected for export.
* Now resetting empty file patterns in multiexport to default values on loading. This fixes issues where
  the configuration was not migrated correctly from earlier versions and exported files used a flight
  plan name without file extension.
* Now falling back to correct default file pattern on flight plan export if the pattern in the
  multi export options dialog is empty.
* Fixed crash when loading X-Plane FMS files with negative airport elevation. Made flight plan
  loading more robust in general.
* Increased maximum length for user waypoint names to 80 characters in MSFS PLN flight plan file export
  to allow descriptions.
* Fixed inconsistencies for course display in flight plan leg in table, aircraft progress,
  elevation profile and the map.
* Removed not applicable inbound and outbound VOR course display in aircraft progress at procedure legs.

### User Interface

* Fixed issue where the wrong runways were fetched for ILS in information and tooltips. As a
  result ILS were declared `Offset to Runway` showing the wrong runway heading.
* Corrected airport ident to use displayed value from map and flight plan table in context menus
  to avoid confusing mismatches of airport idents between map and context menu. Now additionally
  showing display ident and internal ident in airport search context menu.
* Added menu item `Tools` -> `Files and Directories` -> `Show Map Installation Directory`
  to ease installation of new map themes.
* Changed reading of MSFS scenery library. Now also reading manifest content type `AIRCRAFT` since
  aircraft add-ons may contain airports as well.
* Fix for stacked dock windows appearing in the wrong order after un-minimizing main window. [#1000](https://github.com/albar965/littlenavmap/issues/1000)
* Updated user manual for customization, map theme installation, SimBrief changes and cold weather
  altitude correction.
* Fixed elevation profile losing display reverting to a gray area when resetting view after vertical zoom.
* Fixed issues with dock windows moved to the wrong screen on multi screen configurations.
* Added AirNav.com to airport link list.
* Fixed regression where red warning text for empty database was missing in status bar.
* Several other small text fixes.

### Weather

* Fixed several issues with warnings about X-Plane weather files. Now warning
  if simulator is not installed or weather files are missing. Dialogs can be disabled.
* Adapted to read new winds aloft file names from X-Plane which were introduced with version 12.04b2.
* Made reading of GRIB wind files more error tolerant. Checking for wrong or empty files now.

### X-Plane and Little Xpconnect Version 1.0.35 and 1.0.36

* Fixed ground speed used wrongly as true airspeed for X-Plane AI and multiplayer aircraft.
  Ground speed is now correctly shown.
* Added fix from Max Hille (https://github.com/maxhille) to avoid X-Plane 12 issues
  with light colors and ignored exclusion regions on Linux after installing plugin. [#983](https://github.com/albar965/littlenavmap/issues/983)

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.9/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
