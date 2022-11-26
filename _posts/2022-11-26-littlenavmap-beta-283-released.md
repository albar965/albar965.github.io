---
layout: post
title:  Little Navmap 2.8.3.beta released
date:   2022-11-26 13:00 +0100
categories: release
release-version: 2.8.3.beta
---

### Direct Download

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.3.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.3.beta/LittleNavmap-win64-2.8.3.beta.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.3.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.3.beta/LittleNavmap-macOS-2.8.3.beta.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.3.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.3.beta/LittleNavmap-linux-22.04-2.8.3.beta.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.3.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.3.beta/LittleNavmap-win32-2.8.3.beta.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.3.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.3.beta/LittleNavmap-linux-20.04-2.8.3.beta.tar.gz)

## Notes

This is a public beta release which is feature complete but might have small issues.

**This version is ready for MSFS SU11 and for the X-Plane 12 beta. See known issues below for MSFS.**

**Draft user manual available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/)**.

**See here for user manual downloads:
[User Manuals - Beta Releases](https://albar965.github.io/manuals.html#beta).**

**This changelog also explains new or moved/changed features.
First look here if anything is not clear or missing.**

**X-Plane users: In any case reinstall Little Xpconnect from this package. Otherwise fuel flow
calculation or other functions might not work correctly in Little Navmap.**

**Little Navmap probably reminds you to reload scenery library databases after updating. Please do
so to benefit from new features and bug fixes.**

**To try out the program: Use one of the scripts `Little Navmap Portable.cmd` (Windows),
`Little Navmap Portable.command` (macOS) and `Little Navmap Portable.sh` (Linux) to let
Little Navmap store all settings, databases and caches in the installation folder (portable mode).**

Note that certain settings and table layouts are reset to default after updating.
Some features like MSA, vertical paths or en-route holdings require either X-Plane, the included
AIRAC 1801 database or a Navigraph database newer or equal than AIRAC 2201.

See here for a [list of issues done](https://github.com/albar965/littlenavmap/milestone/11?closed=1).
More issues are solved than publicly known on Github. This changelog lists the most important.
Please report if something does not work or does not work as expected.

A big thank you to all who reported bugs and issues!

## Known Issues MSFS

* **Active pause in MSFS breaks the connection and does not allow to reconnect.
  Use the Escape key for normal pause to avoid problems.**
* **Some third-party plugins like traffic add-ons might cause connection issues when used together
  with Little Navmap and MSFS.**
* **The autoconnect function of Little Navmap does not work reliably with MSFS. Connect manually
  after starting your flight if you see problems.**
* **Little Navconnect can have the same issues as Little Navmap since it always uses
  autoconnect. Start the simulator first and then Little Navconnect.**

## Other Known Issues

* Running Little Navmap with autoconnect for P3D, FSX or MSFS for several hours without starting
  the simulator leaks a small amount of resources. This is mitigated by reducing the connection
  rate automatically after 30 minutes. Disable autoconnect or quit the program to avoid this.
* En-route holding courses were not correct due to an error in declination calculation. This was
  fixed with AIRAC cycle 2210.

## Changes from 2.8.2.beta to 2.8.3.beta

### Flight Plan Export

* Fixed duplicate waypoints in some formats like FMS 3 with departure or destination runway selected.
* Fixed dot in GFP export separating waypoints wrongly.
* Waypoints resulting from departure and runway selection (extended runway center line and other points)
  are now omitted in all export formats for complex aircraft and third-party Garmin units to avoid
  issues when loading. Use the aircraft FMS or MCDU to select a departure or approach runway.

### Map Display

* Better alignment for ILS feathers with runway due to rounding errors. This does not
  affect offset ILS.
* Fixed issue where ILS heading was offset after switching scenery library databases.
* Optimizations for ILS display. Now omitting details and alignment on higher zoom levels.
* MSA, holdings and MORA grid are now shown when using MSFS and scenery library mode
  `Do not use Navigraph Database`. Buttons and menu items in `View` were previously disabled.
* Fixed on-ground indication for MSFS user aircraft (gray icon border now restored on ground).

### Aircraft Performance

* Fixed issues where merge aircraft performance dialog window showed the example profile values.
* Omitting warning message about wrong aircraft type now when using new example performance profile.

### Weather

* Fix for X-Plane 12 METAR file name changes. Made file selection more tolerant and applied
  optimizations for faster reading. [#950](https://github.com/albar965/littlenavmap/issues/950)
* Added delayed loading for information display to avoid freezes when loading X-Plane METAR files.
  Added wait pointer when loading X-Plane METAR files. Optimizations for loading.
* Added hours and colored warning for more than 3 (orange) and more than 6 hour (red) old METAR reports
  in airport tab, airport tooltip and airport weather tab.

### User Interface

* Fixed issue where flight plan was centered on startup despite using
  `On startup show on map` -> `Last position` or `Home position` on options page `Startup and Updates`.
* Changed X-Plane FMS export menu item for X-Plane 12 to avoid misunderstandings. [#949](https://github.com/albar965/littlenavmap/issues/949)
* Fixed program freeze when trying to load user airspaces with an empty path or an empty list of
  file extensions.
* Updated program translations: Brazilian Portuguese by Ricardo, French by Patrick, Italian by Flavio and German.

### Command Line and Portable Mode

* Added option `l` / `--log-path` to put log files into a separate folder.
* Adapted portable scripts to store log files into folder `Little Navmap Logs`.
* Fixes for overriding log and settings paths when using portable mode scripts. Paths and files are now
  correctly referenced and shown in about dialog and tools menu.
* Corrected wrong settings file name from `little_navmap` to `little_navmap.ini` when using portable mode.
  Rename the file to restore your settings if using portable mode.

### Help

* User manual updated.
* Now automatically using HTML help files from folder `help/en` or other supported language
  codes if installed. Download help from
  [User Manuals - Beta Releases](https://albar965.github.io/manuals.html#beta) and  extract the zip file to
  `.../Little Navmap/help/en` to use the offline user manual.

### Little Xpconnect Version 1.0.31

* Updated Linux build and removed unneeded dependencies to shared libraries.
  This helps to avoid conflicts with other plugins.

### Internal

* Completely restructured build system to make all OS versions automatically in virtual
  machines running on Linux.
* Added scripts for generating announcement post and Github release drafts automatically.

These changes help to make more frequent releases.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.3.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
