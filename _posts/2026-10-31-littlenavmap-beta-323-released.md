---
layout: post
title:  Little Navmap 3.2.3.beta released
date:   2026-10-31 15:00 +0100
categories: release
release-version: 3.2.3.beta
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

#### Windows

[**► Little Navmap Windows 64-bit Installer - preferred for Windows** - LittleNavmap-win64-3.2.3.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.2.3.beta/LittleNavmap-win64-3.2.3.beta-Install.exe)<br/>
[**► Little Navmap Windows 64-bit Zip - can run in portable mode** - LittleNavmap-win64-3.2.3.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.3.beta/LittleNavmap-win64-3.2.3.beta.zip)

[**► Little Navconnect Windows 32-bit Zip - required to connect to FSX or P3D** - LittleNavconnect-win32-3.0.17.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.3.beta/LittleNavconnect-win32-3.0.17.zip)

#### macOS

[**► Little Navmap Apple macOS - Universal Binary for Intel and Silicon** - LittleNavmap-macOS-3.2.3.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.3.beta/LittleNavmap-macOS-3.2.3.beta.zip)

#### Linux

[**► Little Navmap Linux - 64 bit, Ubuntu 26.04** - LittleNavmap-linux-ubuntu-26.04-3.2.3.beta.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.2.3.beta/LittleNavmap-linux-ubuntu-26.04-3.2.3.beta.tar.xz)<br/>
[**► Little Navmap Linux Debian Installation Package - 64 bit, Ubuntu 26.04** - LittleNavmap-linux-ubuntu-26.04-3.2.3.beta-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.2.3.beta/LittleNavmap-linux-ubuntu-26.04-3.2.3.beta-1_amd64.deb)

[**► Little Navmap Linux - 64 bit, Ubuntu 24.04** - LittleNavmap-linux-ubuntu-24.04-3.2.3.beta.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.2.3.beta/LittleNavmap-linux-ubuntu-24.04-3.2.3.beta.tar.xz)<br/>
[**► Little Navmap Linux Debian Installation Package - 64 bit, Ubuntu 24.04** - LittleNavmap-linux-ubuntu-24.04-3.2.3.beta-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.2.3.beta/LittleNavmap-linux-ubuntu-24.04-3.2.3.beta-1_amd64.deb)

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a>
  </b>
</p>

**This is a beta/test release of Little Navmap which fixes crashes when running the web server,
fixes broken offline maps and several other issues. It also adds support for historical weather
in X-Plane.**

**See [Version 3.2.1.beta](https://github.com/albar965/littlenavmap/releases/tag/v3.2.1.beta) and
[Version 3.2.2.beta](https://github.com/albar965/littlenavmap/releases/tag/v3.2.2.beta) for
the recent changelogs.**

**Note that neither the program translations nor the user manual have been updated yet.**

**The menu layout and option pages have changed. See below in sections `User Interface` and
`Options` in the version 3.2.1.beta announcement for more information. Use the search function
in the options dialog window on the top left if you cannot find a setting.**

**Editing of features on the map has changed. See section `Markers and Userpoints` the
version 3.2.1.beta announcement.**

**FSX or Prepar3D: Download and install the 32 bit version of Little Navconnect
[LittleNavconnect-win32-3.0.17.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavconnect-win32-3.0.17.zip)
and connect through it to FSX or Prepar3D. See the included file `README.txt`.**

**See here if you would like to run the beta release besides your stable installation:
[Little Navmap - User Manual - Portable Execution](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#portable-execution).**

**Also update Little Navconnect and Little Xpconnect if you're using one of these.**

**macOS: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Little Navmap - User Manual - Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

**macOS: Little Navmap is now built into a universal binary containing Intel and Arm architectures.
Rosetta is not needed anymore to run Little Navmap and Little Navconnect.**

**Please note that when reverting to Little Navmap 3.0.18, file names may appear garbled and
corresponding error messages may be shown if the paths contain special characters such as
umlauts or accents. This can happen when loading files from one of the menus `Recent`, for example.
You can ignore the error messages and adjust paths in options and simply reload the affected files
normally to fix this.**

## Changes from 3.2.2.beta to 3.2.3.beta

### X-Plane

* The minimum recommended version for Little Xpconnect is now 1.4.3.beta. Although you can still
  use older versions, Little Navmap will display a warning in this case. Reinstall
  Little Xpconnect from the menu `Tools` in Little Navmap to enable X-Plane historical weather.
* Now reading X-Plane historical weather. Winds aloft and METAR files are loaded depending on
  simulator settings and time. This might also improve [#1353](https://github.com/albar965/littlenavmap/issues/1353). Note that some inaccuracies cannot
  be avoided. The weather is reset to the current time when disconnecting the simulator.
* Added indicator `Historical weather using simulator time.` for X-Plane 12 weather in the airport
  information and in tooltips.
* Fixed wrong date and time calculation for X-Plane 12. This requires X-Plane version 12.4.1 or
  later.
* Note that custom weather is not detected for now. Little Navmap will still show real weather from
  the X-Plane METAR files if you build your own weather.
* Calculated simulator time can be off for an hour for X-Plane 11 since datarefs are missing for a
  precise calculation.

### Markers

* Magnetic declination is now correctly saved with holding and measurement markers which resulted
  in a wrong course display. To fix this, any previously created markers must be deleted and
  added again.

### Map

* Offline maps have been updated and display issues on Windows, such as missing country borders
  and city centers, have been fixed. Also corrected wrong cities shown in higher zoom levels
  on offline maps.
* Removed overlay plugins for maps drawn in background like web or printing. This fixes
  the crashes on startup when running the web server.
* Now reverting back to the previous map theme after showing an information dialog window
  if API keys or other required information is missing. This avoids polluting the map tile cache
  with watermarked tiles like `API Key Required`. Go to menu
  `Tools` -> `Files and Directories` -> `Show Map Cache` and delete the related map
  cache directory if needed.

### Aircraft Trail

* Added function `Go to last Aircraft Trail Position` in menu `Map`. Use this to go to the last
  saved position of your aircraft.
* Added information dialog window on loading GPX files that shows the number of visible and the
  number of loaded trail points if points are hidden due to the setting
  `Maximum number of aircraft trail points shown` on options page `Map Aircraft Trail`.
* Corrected display of aircraft trail. Small segments are now shown when zooming out in
  spherical projection.
* Fixed issue where last trail position was invalid after loading from a GPX file.
* Lowered maximum number of shown trail points for new installations to 5,000 points to avoid
  performance issues. Note that points above this number are not deleted but only hidden.
  Internally up to 5,000,000 points are saved. Change the setting in options on page
  `Map Aircraft Trail`.
* Applied several optimizations to speed up drawing of the aircraft trail and other lines.

### User Interface

* Changes in automatic waypoint numbering to start from zero similar to Garmin units.
* Added hint about automatic waypoint numbering in dialog window `Edit Flight Plan Position`
  window. User waypoints having idents like `WP0` or `WP10` are renumbered automatically in
  flight plan order.
* Now hiding the navaid numbers when loading the MSFS 2024 scenery library database with the
  Navigraph navdata update installed in the simulator. Also showing an indication
  `Navigraph navdata update found in simulator. No navaids loaded.` for installed navdata update.
  Install the navdata update directly in Little Navmap using the Navigraph FMS Data Manager if
  you see missing navaids. Also enable `Select Automatically` in menu
  `Scenery Library` -> `Navigraph`.
* Change timezone indication (`CEST` and others) to an offset based indication like `+01:30`
  since the Qt library gives wrong timezone names.
* Timezones and offsets in the status bar and the airport information now consider daylight
  savings time. This is calculated based on real time or simulator time. Removed `(no DST)`
  indication in all timezone displays.
* Avoiding `Empty Flight Plan` when saving GPX without a plan.
* Now showing country when entering coordinates in several dialog windows like from
  menu `Map` -> `Go to coordinates`.
* Unused base path in load scenery library dialog window is now blank for MSFS 2024 to
  avoid confusion.
* Corrected missing cross map cursor on Linux Wayland.
* More user interface improvements and optimizations.

### Development

* Fixed compilation for Qt versions later than 6.5. Lowered deprecation level to 6.5 and fixed
  `map::MapBase`. The program can now be compiled using Qt 6.5 to 6.12. [#1343](https://github.com/albar965/littlenavmap/issues/1343)
* Added include to allow compilation on macOS 27. [#1394](https://github.com/albar965/littlenavmap/issues/1394)
* Fixed debugging build on Windows to allow the use of the Marble library again.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.2.3.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
