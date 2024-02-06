---
layout: post
title:  Little Navmap 2.8.8 released
date:   2023-01-18 17:00 +0100
categories: release
release-version: 2.8.8
---

### Direct Download (outdated Version)

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.8.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.8/LittleNavmap-win64-2.8.8.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.8.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.8/LittleNavmap-macOS-2.8.8.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.8.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.8/LittleNavmap-linux-22.04-2.8.8.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.8.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.8/LittleNavmap-win32-2.8.8.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.8.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.8/LittleNavmap-linux-20.04-2.8.8.tar.gz)

## Notes

**This is a stable release of Little Navmap fixing crashes and other bugs.**

**X-Plane: Update your Little Xpconnect installation as well with the included version 1.0.34 to
avoid wrong timezone calculations.**

**macOS users: Keep in mind that you have to clear the quarantine flag for Little Xpconnect on update. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

**See
[Screenshots of new 2.8 Features](https://albar965.github.io/pages/28/littlenavmapscreens.html)
for an overview of new features.**

This version is ready for the latest MSFS and for X-Plane 12. See important known issues below for MSFS.

The user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/).

See here for user manual downloads:
[User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable).

A big thank you to all who reported bugs and issues!

## Known Issues MSFS

**Active pause in MSFS breaks the connection and does not allow to reconnect even when restarting *Little Navmap*.
This is a MSFS issue. Use the key `Esc` for normal pause or click the toolbar button for pause to avoid problems.**

See also [MSFS Common Problems](https://albar965.github.io/littlenavmap-faq.html#problems-msfs) in the FAQ.

## Changes from 2.8.7 to 2.8.8

### Flight Plan and Export

* Added export option for X-Plane CIVA Navigation System. Files exported as FMS 3 split up into
  partitions containing nine waypoints. Procedure waypoints are included.
* Fixed issues with multi export file selection that appeared when using a file export pattern
  without suffix.
* Made loading of X-Plane FMS plans more tolerant for invalid files. Now throwing error messages in
  case of invalid coordinates to avoid crash.
* Adjustments for flight plan calculation for better results with less airway usage at the right of
  the slider `Prefer`.
* Updated NAT track download address to new `https://www.notams.faa.gov/common/nat.html` to avoid error
  messages on download. Addresses can be changed in `little_navmap.ini` in section `[Track]`.
* Fixed wrong flight plan read while importing from SimBrief and changing plan with download dialog open.

### Flight Plan Route Description

* Corrected reading of a flight plan having SID and STAR with the same transition waypoint
  resulting in incomplete plans from SimBrief import. Example: MUHA EPMAR3 MAXIM SNDBR2 KMIA KMCO. [#975](https://github.com/albar965/littlenavmap/issues/975)
* Fixed crash while typing when entering incomplete route description texts.
* Fixed several issues when reading and writing a route description using space separated transitions.
  This avoids error messages when reading flight plans from SimBrief.
* Flight plan cruise altitude is now adjusted to adhere to airway and procedure altitude
  restrictions. This avoids creating new plans with initial restriction errors.
* Tear off drop down menu in route description dialog can now be reopened again after closing dialog.

### Map Display and Elevation Profile

* Fixed issue with disappearing aircraft trail and other map lines near anti-meridian. [#976](https://github.com/albar965/littlenavmap/issues/976)
* Now suppressing VASI display in elevation profile if approach has a large offset course compared
  to the runway. The VASI slope cannot be used in these cases.
* Omitting wrong X-Plane runway shoulders for water runways on map.
* Moved flight plan table colors to `little_navmap_mapstyle.ini`. Added new section `[FlightPlan]`.

### Online Flying

* Fixed crash because of missing icon for unknown aircraft types. [#973](https://github.com/albar965/littlenavmap/issues/973)
* Added white aircraft icon with question mark for invalid aircraft types like online boats.
* Now ignoring boat traffic in aircraft shadow resolution.
* Adjusted shadow aircraft detection online vs. simulator to better resolve duplicate aircraft when
  flying online.

### Scenery Library

* Fixed several issues with new X-Plane 12 runway surface types. Runways were previously dropped
  for unknown surface types. This resulted in airports registered without runways and having a
  helipad symbol assigned in some cases.
* Now reading new X-Plane asphalt and concrete textures.
* Corrected behavior when clicking `Load Scenery Database` which could open the loading dialog
  again and crash while still waiting for confirmation on database usage.
* Fixed issue with mapped drives on Windows where add-on airports were not detected if having MSFS
  installed on such a drive. [#967](https://github.com/albar965/littlenavmap/issues/967)

### User Interface and Other

* Corrected window order when using `Keep in Foreground` to avoid blocked or hidden dialogs after
  loading scenery library.
* The `Keep in Foreground` status is now applied to all non-blocking dialog windows like 'Flight
  Plan Calculation' and 'Flight Plan Route Description' to avoid windows being blocked and hidden
  by main window.
* Added userpoint type `Addon` to highlight airports with a yellow ring similar to detected add-on
  airports.
* Fixed issue where bearing and distance to user aircraft was not updated in tooltips for parking spots.
* Fixed regression where tooltips disappeared quickly when being connected to a simulator.
* Now correcting logbook time if off by one day at arrival due to wrong time and date jumps while
  flying (caused by warp or similar tools). This previously resulted in negative travel times.
* Corrected logbook and userpoint import functions where first row in CSV files caused an error message
  if using quoted names.
* Fix for wrong names in options dialog. [#965](https://github.com/albar965/littlenavmap/issues/965)
* Fixes to avoid crash with duplicate ids when adding userpoints or logbook entries after import. [#985](https://github.com/albar965/littlenavmap/issues/985)
* Solved issue with crash when doing undo or redo quickly using keyboard shortcut repeats.
* Wind calculation functions are now more tolerant for invalid coordinates to avoid crashes.
* Corrections to statusbar and time. Time now correctly suffixed with `UTC`.
* Updated program translation for Brazilian Portuguese by Ricardo.
* Disabled Spanish translation since it did not receive updates for a long time and has other issues.
* Reverted workaround for MSFS unreliable on-ground indication for user aircraft.
* Updated SimConnect.dll to latest from SDK version 0.20.5.0.
* Corrected SSL library in Linux package to fix SSL handshake errors. Now adding correct OpenSSL
  version 1.1 to the folder `lib` to avoid loading of a wrong system library version 3. [#974](https://github.com/albar965/littlenavmap/issues/974)

### X-Plane and Little Xpconnect

* Fixed wrong date and timezone calculation in Little Xpconnect 1.0.34 which resulted in wrong or
  jumping endurance and turn anticipation display.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.8/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
