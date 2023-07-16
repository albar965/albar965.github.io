---
layout: post
title:  Little Navmap 2.8.12 released
date:   2023-07-16 15:00 +0200
categories: release
release-version: 2.8.12
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-2.8.12-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v2.8.12/LittleNavmap-win64-2.8.12-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.12.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.12/LittleNavmap-macOS-2.8.12.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.12.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.12/LittleNavmap-linux-22.04-2.8.12.tar.gz)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-2.8.12-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v2.8.12/LittleNavmap-win32-2.8.12-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-20.04-2.8.12.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.12/LittleNavmap-linux-20.04-2.8.12.tar.gz)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 2.8.12](https://github.com/albar965/littlenavmap/releases/v2.8.12) \(scroll down to `Assets`\).

**Alternative Download Locations - Look into sub-folders for beta, development or release candidates:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Notes

**This is a stable release of *Little Navmap* which fixes several bugs and adds
improvements as well as new features.**

**Notable changes: Windows Installation program, Prepar3D v6 support,
  fix for MSFS waypoint moved to North issue, Little Navconnect tray icon and more.**

**Also update *Little Navconnect* and *Little Xpconnect* if you're using one of them to
avoid crashes that were introduced with 2.8.12.rc1.**.

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

The updated online user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/).

See here for user manual downloads:
[User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable).

A big thank you to all who reported bugs and issues!

## Changes from 2.8.11 to 2.8.12

### Installation and Startup

* Added [Inno Setup](https://jrsoftware.org/isinfo.php) installer packages. This installs
  *Little Navmap* for all users in the folders `Program Files` for the 64-bit package or
  `Program Files  (x86)` for the 32-bit package. Both can be installed in parallel. The installer
  creates start menu entries for all included programs as well as most important files and links.
  File types can optionally be associated with *Little Navmap* which allows to load a flight plan by
  double clicking on a LNMPLN file in Windows Explorer or other file managers. *Little Navmap* is
  then either started or a running instance is used to load a plan. See
  [Little Navmap User Manual - Installation](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/INSTALLATION.html#windows).
  Note that there is no need to install or modify any files in the installation folder. See also
  [Little Navmap User Manual - Map Themes](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/MAPTHEMES.html).
* Removed restart requirement after installing MSVC Redistributables in 64-bit Windows
  installer (from 2.8.12.rc1).
* Improved the detection of an already running instance of *Little Navmap*. Removed warning dialog
  for `Program is already running` situation. Instead the *Little Navmap* window is brought into
  foreground and any file passed to the program is opened. Furthermore, all files passed on the
  command line without parameters are checked for type and are loaded accordingly. This is working
  on Windows, macOS and Linux. See also
  [Little Navmap User Manual - Command Line Options](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/COMMANDLINE.html).
* Now allowing to run more than one *Little Navmap* instance when using separate configuration folders.
* Updated MSFS SimConnect DLL to the latest version 0.21.1.0.

### Map

* Added configuration option for degree grid in view menu. Select menu `View` ->
  `Show Map Grid Configuration` to change color of grid lines and labels.
* Fixed issue where split user aircraft trails from previous version 2.8.10 were read wrongly
  and appeared all connected to one.
* Corrected loading of oceanic tracks to avoid disappearing flight plan after load.
* Now creating two backups for main trail file `little_navmap.track` to avoid data loss on update.
* Now backing up configuration and track files with `..._update-backup.N` suffix after installing
  and starting a new version to avoid data loss.
* Corrected issue where map grid was drawn below landmass in some offline maps.
* Menu and toolbar items for airspace altitude filter are now correctly selected again after
  restart.
* Fixed missing flight plan waypoint tooltips and click spots with airway or track display enabled.
* Added theme [open flightmaps](https://www.openflightmaps.org/) to included map themes.
  This is a modified version of the map theme by
  [AmbitiousPilots](https://github.com/AmbitiousPilots/LittleNavmapOFMTheme) including changes
  from [b-faller](https://github.com/b-faller).
* Now showing top level map image tile correctly for open flightmaps instead of an black area.
* Fixed more issues with the external map theme folder where maps having more than one layer like
  the open flightmaps map theme could not be used.
* Updated map theme file `example.dgml`.
* Corrected checking for duplicate elements of `sourceDir` in map theme DGML files for maps having
  more than one layer. This avoids the issue where different map themes might overwrite data in the
  cache folder.

### Userpoint and Logbook

* Fixed problem where no error was shown when importing invalid userpoint or logbook CSV files.
* Fixed issue where an aborted CSV import might corrupt the undo data in some cases.
* Update CSV import and export for userpoints to allow unit suffixes in altitude. Now detecting
  suffixes `m` for meter and `f` for feet to import altitude in respective units. Feet is
  default when using no suffix.
* Fixed various issues with units in userpoint edit dialog. Now correctly setting and displaying
  metric units for `Visible from` and `Elevation or altitude`. Corrected `Visible from` display in
  userpoint search result table. Now using more precision in userpoint altitude to avoid rounding
  errors between units.

### Flight Plan and Export

* Corrected wrong error message for procedures having a MAP lower than airport elevation.
  Example: FAUP RNAV UP1F1 (R35)
* Fix in flight plan export for MSFS where several waypoints are moved to North. Thanks to Github user
  [eaides](https://github.com/eaides) for the hint. [#1038](https://github.com/albar965/littlenavmap/issues/1038)
* Added selection box for `IFR` or `VFR` flight plan type to route description.

### Other

* Fixed issues where X-Plane simulator weather was not loaded from manually set folder without a
  X-Plane installation. The weather was not loaded and wrong warning dialog was shown.
  This is the case when *Little Navmap* runs on an networked or remote computer and the weather
  is loaded from a shared network drive from the flying computer.
* Flight plan route description dialog is now updated on style change.
* Moved AI and online aircraft menu items to sub-menu in `View` to avoid menu size limitation.
* More fixes in weather to skip unneeded reading of ActiveSky weather files. These are now read
  on demand if ActiveSky sky options like tooltips are enabled.
* Fixed crash when copying log file on size overflow which was introduced with 2.8.12.rc1.
  This resulted in a random crash to desktop while loading the scenery library.
* Fixed crash when loading Active Sky files if Active Sky file path was set manually and removed
  later on.
* Corrected menu items and toolbar buttons which remained disabled after connecting to simulator.

## Little Navconnect Version 2.8.7

* Added support for system tray icon. Close button on window frame now optionally minimizes window
  to system tray. Enable this in menu `Window` -> `Minimize to system tray`. The tray icon is always
  visible. System tray icon shows last five messages from log in tooltip. [#712](https://github.com/albar965/littlenavmap/issues/712)
  See [Little Navconnect User Manual - Tray](https://www.littlenavmap.org/manuals/littlenavconnect/release/2.8/en/TRAY.html).
* Tray icon has a context menu to restore window, show settings and more. Left click on the tray icon
  to restore or minimize the *Little Navconnect* window.
* New option `Window` -> `Start minimized to system tray` to start program without opening a window.
* Fixed various issues with text field updates causing warnings in log file.
* Updated user manual.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.12/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
