---
layout: post
title:  Little Navmap 3.0.17 released
date:   2025-04-20 13:00 +0200
categories: release
release-version: 3.0.17
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.17-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.17/LittleNavmap-win64-3.0.17-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.17.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.17/LittleNavmap-macOS-3.0.17.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.17.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.17/LittleNavmap-linux-ubuntu-22.04-3.0.17.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.17-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.17/LittleNavmap-linux-ubuntu-22.04-3.0.17-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.17-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.17/LittleNavmap-win32-3.0.17-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.17.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.17/LittleNavmap-linux-ubuntu-20.04-3.0.17.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.17-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.17/LittleNavmap-linux-ubuntu-20.04-3.0.17-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.17](https://github.com/albar965/littlenavmap/releases/v3.0.17) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a stable release of Little Navmap that fixes several small issues.**

**macOS users:** Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect.
See [Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).

Thanks to everyone who reported issues!

## Changes from 3.0.16 to 3.0.17

* Fixed an issue where all VORTACs were loaded as TACAN in MSFS 2020, resulting in incorrect
  bearings and type display.
* Now omitting the channel for VOR, VORDME, and DME for all MSFS simulators. The channel applies
  only to VORTAC and TACAN.
* Fixed the issue with double runways when using the Navigraph navdata update in MSFS 2020.
  Example: The add-on for FHSH (no stock airport available) `kychungdotcom-airport-fhsh-sthelena`
  showed duplicate runways.
* Cleaned up error handling for the scenery library loader to allow loading to continue after an
  error in XML or JSON files.
* Fixed the issue where a broken CSV import resulted in errors for further imports of userpoints or
  logbook entries.
* More filtering has been implemented to eliminate incorrect MSFS aircraft indications before
  starting a flight in the simulator. The incorrect aircraft resulted in an aircraft trail crossing
  all over the world, causing display issues and crashes.
* Saving flown distance is now maintained between restarts. This avoids a zero flown distance in
  logbook entries.
* Now properly disabling context menu items in the logbook and user data search to avoid crashes.
* Added flown distance alongside flight plan distance to the bottom summary line in the logbook.
* Added an option to scale aircraft icons separately for web pages on high-resolution displays.
  This can be changed in the options on the `Web Server` page.
* Disabled the compass rose and other features on the `Dynamic Touch and Drag` web map.
* The compass rose, endurance, altitude range, and turn path are disabled to avoid a cluttered
  display when using the `Dynamic Touch and Drag` web map.
* Added a red extra range ring for zero fuel range. While the black dotted range ring shows the
  range with reserves, the red range ring shows the range without fuel.
* Clearing the procedure preview now occurs when adding a procedure from the map context menu. This
  is now consistent with the behavior when adding a procedure from the search tab.
* Improved circle drawing for range rings to avoid edges.
* Changes in command line handling: Opening flight plans using `-f` from the command line now
  leaves plans in an unchanged state to avoid question dialogs and ease automation. Passing a
  filename without an option might still change a plan on loading to adjust cruise and leave it
  changed.
* Plans created  from descriptions from the command line are not temporary and will be cleared on
  restart. Save the  plan manually to avoid this.
* Fixed issues where a changed flight plan was erased when loading from the command line or by
  double-clicking on the plan file.
* Enabled a warning when loading a plan with the wrong cruise altitude from a logbook entry.
* Fixed the blurry map issue when jumping back to the user aircraft after user interaction.
* Fixed issue where the map center was shifted with airspaces enabled. This placed the compass
  rose out of center at the right corner of the map.
* Added two options to disable distance and bearing display on top of the map tooltip. Change
  these in the options on the `Map Tooltips and Clicks` page.
* Attempt to fix crashes with long aircraft trails.
* Updated user manual for changes in command line and endurance.
* Updated Windows redistributable packages to the latest version.

**🐇🐇🪺🪺 Happy Easter! 🪺🪺🐇🐇**

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.17/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
