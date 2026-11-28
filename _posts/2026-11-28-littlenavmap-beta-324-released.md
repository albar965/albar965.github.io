---
layout: post
title:  Little Navmap 3.2.4.beta released
date:   2026-11-28 16:00 +0100
categories: release
release-version: 3.2.4.beta
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

#### Windows

[**► Little Navmap Windows 64-bit Installer - preferred for Windows** - LittleNavmap-win64-3.2.4.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.2.4.beta/LittleNavmap-win64-3.2.4.beta-Install.exe)<br/>
[**► Little Navmap Windows 64-bit Zip - can run in portable mode** - LittleNavmap-win64-3.2.4.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.4.beta/LittleNavmap-win64-3.2.4.beta.zip)

[**► Little Navconnect Windows 32-bit Zip - required to connect to FSX or P3D** - LittleNavconnect-win32-3.0.17.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.4.beta/LittleNavconnect-win32-3.0.17.zip)

#### macOS

[**► Little Navmap Apple macOS - Universal Binary for Intel and Silicon** - LittleNavmap-macOS-3.2.4.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.4.beta/LittleNavmap-macOS-3.2.4.beta.zip)

#### Linux

[**► Little Navmap Linux - 64 bit, Ubuntu 26.04** - LittleNavmap-linux-ubuntu-26.04-3.2.4.beta.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.2.4.beta/LittleNavmap-linux-ubuntu-26.04-3.2.4.beta.tar.xz)<br/>
[**► Little Navmap Linux Debian Installation Package - 64 bit, Ubuntu 26.04** - LittleNavmap-linux-ubuntu-26.04-3.2.4.beta-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.2.4.beta/LittleNavmap-linux-ubuntu-26.04-3.2.4.beta-1_amd64.deb)

[**► Little Navmap Linux - 64 bit, Ubuntu 24.04** - LittleNavmap-linux-ubuntu-24.04-3.2.4.beta.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.2.4.beta/LittleNavmap-linux-ubuntu-24.04-3.2.4.beta.tar.xz)<br/>
[**► Little Navmap Linux Debian Installation Package - 64 bit, Ubuntu 24.04** - LittleNavmap-linux-ubuntu-24.04-3.2.4.beta-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.2.4.beta/LittleNavmap-linux-ubuntu-24.04-3.2.4.beta-1_amd64.deb)

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a>
  </b>
</p>

**This is a beta/test release of Little Navmap which fixes several crashes compared to recent betas,
has a lot of small improvements and a complete German program translation.**

**Little Navmap for Windows and Linux is now based on Qt 6.12.0 library which means that a new
foundation is used. This port was needed to avoid the numerous bugs in Qt 6.5 which caused crashes
on Windows and Linux. As a result the program startup is now a bit slower but the general
performance did not change. Note that the program takes some time to shutdown. Application windows
will disappear immediately when closing but Qt needs some time in the background for cleanup. Keep
this in mind when restarting the program.**

**Note that except German no program translations have been updated yet.
The user manual has not been updated yet either.**

**The menu layout and option pages have changed compared to 3.0.18. See the three links below in
sections `User Interface` and `Options` in the version 3.2.1.beta announcement for more information.
Use the search function in the options dialog window on the top left if you cannot find a setting.**

**Editing of features on the map has changed. See section `Markers and Userpoints` the
version 3.2.1.beta announcement. See links below.**

**See
[Version 3.2.1.beta](https://github.com/albar965/littlenavmap/releases/tag/v3.2.1.beta),
[Version 3.2.2.beta](https://github.com/albar965/littlenavmap/releases/tag/v3.2.2.beta) and
[Version 3.2.3.beta](https://github.com/albar965/littlenavmap/releases/tag/v3.2.3.beta) for
recent changelogs.**

**FSX or Prepar3D: You have to download and install the 32 bit version of Little Navconnect
[LittleNavconnect-win32-3.0.17.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.1.beta/LittleNavconnect-win32-3.0.17.zip)
and connect through it to FSX or Prepar3D. See the included file `README.txt`.**

**See here if you would like to run the beta release fully independent besides your
stable installation:
[Little Navmap - User Manual - Portable Execution](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#portable-execution).**

**Also update Little Navconnect and Little Xpconnect if you're using one of these.**

**macOS: Little Navmap is now built into a universal binary containing Intel and Arm architectures.
Rosetta is not needed anymore to run Little Navmap and Little Navconnect.**

**macOS: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Little Navmap - User Manual - Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

**Please note that when reverting to Little Navmap 3.0.18, file names may appear garbled and
corresponding error messages may be shown if the paths contain special characters such as
umlauts or accents. This can happen when loading files from one of the menus `Recent`, for example.
You can ignore the error messages and adjust paths in options and simply reload the affected files
normally to fix this.**

## Changes from 3.2.3.beta to 3.2.4.beta

### User Interface

* Finished German translation.
* Fixed crashes on exit with active simulator connection.
* Removed macOS and Windows user interface styles since they cause problems.
* Fixed texts and wrong menu references in dialog windows. Removed wrong offline help manual menu item.
* Several issues with styles, colors, information and tooltip formatting fixed around the program.
* Removed update menu item from `Help` since the same can be done in options on
  page `Startup and Updates`.
* Now hiding windows early on shutdown. The program can be still active in the background for a
  few seconds up to half a minute.
* Added wait dialog when closing to indicate slow shutdown when restarting program.
* Changed application font now also applied to performance tabs in flight plan window.
* Changed overlapping keyboard shortcuts.
  `Ctrl+F` is now used for `Map` -> `Go to last user aircraft tail position`.
* Better crash detection dialog window. Now offering options to skip the loading of certain
  settings to avoid loss of all settings. As a first start use the default settings after a crash.

### Elevation Profile

* Fixed several issues in elevation profile which resulted in randomly missing elevation tiles
  when using the offline GLOBE elevation data.
* Fixed Crash in elevation profile when using long flight plan segments with online elevation data.
  Now avoiding profile calculation with message when plan segments are longer than 1000 NM. Note
  that this does not affect the offline GLOBE data. [#1403](https://github.com/albar965/littlenavmap/issues/1403)
* Showing tri-color VASI in correct layout and colors in elevation profile now.

### Options

* Renamed option page `Connections and Cache` to `Advanced`.
* Moved the trail auto save option to page `Files`.
* Option `Add departure and start position to flight plan after connecting to simulator` moved
  to page `Simulator Aircraft`.
* Now building search index late on first search for a faster startup.

### Map

* Added Top-O-Map and Top-O-Map relief map themes which both require a key.
  See [Top-O-Map](https://top-o-map.com).
* Fixed disappearing flight plan segments on the map when zooming in.
* Better text placement for ILS labels and fixed wrong text placement in some cases around ILS.
* Fixed map server returning PNG for JPG image requests. [#1398](https://github.com/albar965/littlenavmap/issues/1398)
* Fixed issue with map missing in full screen mode.
* Cleanup in DGML map theme files and example. Removed unused elements.
* More map and tooltip related improvements and fixes.

### Scenery Library

* Fixed detection of Navigraph update which resulted in all airports marked as add-on. Navigraph
  update is now detected if a folder starting with `navigraph-navdata` was found.
* Added AIRAC validity time to menu 'Scenery Library`.
* The included 1801 database is now updated silently without question dialog.

### X-Plane

* Now also reading X-Plane historical wind data according to simulator settings
  `Simulator time` or `Real time`.
* Fixed Linux build of Little Xpconnect where too many shared libraries were used.
* Fixed potential crash in X-Plane connection handler in Little Navmap. Note that this did not
  affect X-Plane.

### Development

* Now using Qt 6.12.0 to build for Windows and Linux. Added several workarounds for performance issues
  in Qt 6.12.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.2.4.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
