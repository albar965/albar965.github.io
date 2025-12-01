---
layout: post
title:  Little Navmap 3.0.18 released
date:   2025-11-19 14:00 +0100
categories: release
release-version: 3.0.18
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.18-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.18/LittleNavmap-win64-3.0.18-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.18.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.18/LittleNavmap-macOS-3.0.18.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 24.04\)** - LittleNavmap-linux-ubuntu-24.04-3.0.18.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.18/LittleNavmap-linux-ubuntu-24.04-3.0.18.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 24.04\)** - LittleNavmap-linux-ubuntu-24.04-3.0.18-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.18/LittleNavmap-linux-ubuntu-24.04-3.0.18-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.18-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.18/LittleNavmap-win32-3.0.18-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 22.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-22.04-3.0.18.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.18/LittleNavmap-linux-ubuntu-22.04-3.0.18.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\) - LittleNavmap-linux-ubuntu-22.04-3.0.18-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.18/LittleNavmap-linux-ubuntu-22.04-3.0.18-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.18](https://github.com/albar965/littlenavmap/releases/v3.0.18) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a stable release of Little Navmap that fixes small issues.**

**macOS users:** Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect.
See [Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).

Thanks to everyone who reported issues!

## Changes from 3.0.17 to 3.0.18

* Adapted NAT download location to changed FAA page. Moved track URLs to track.cfg which can be
  overridden by placing the file in the settings folder. [#1298](https://github.com/albar965/littlenavmap/issues/1298)
* Added option for displaying true airspeed in other units. You can enable this in menu `Tools` ->
  `Aircraft Progress Display Options` in branch `True Alternate`.
* Changed `File` -> `Open Flight Plan or File`. This function can now open all formats supported by
  Little Navmap similar to drag-and-drop of files into the program window. These formats are flight
  plans, aircraft performance (.lnmperf), GPX aircraft trails (.gpx) and window layouts (.lnmlayout).
* Cleaned up layout of logbook entry edit dialog window.
* Fixed centering of in procedure search tab. Now including airport when centering procedures with
  `Follow selection enabled`.
* Linux: Dropped Ubuntu 20.04 build and added build for 24.04.
* MSFS 2024: Removed wrong check for recently removed path `StreamedPackages` when reading
  MSFS 2024 data.
* Now centering all shown procedures when clicking `Preview all procedures` in search tab.
* Now showing a warning for an invalid cruise altitude when exporting a flight plan.
* Removed PACOTS tracks since the FAA DINS Query page is no longer publicly available. Removed
  selection option for track types since only NAT is available for now.
* Reworked aircraft trail. The setting in options on page `Map Aircraft Trail` does now affect only
  the visible trail points. The number of stored trail points is not affected by changing the field
  `Maximum number of trail points shown`. Maximum number of stored points is five million which is
  enough for several around the world trips. Keep in mind that the stored points are exported when
  saving as GPX and not the visible part.
* When adding range rings, the system now: Automatically detects and attaches to map objects:
  When Shift+clicking on or near a waypoint, airport, or other map feature, range rings now snap to
  that feature's position and display its identifier. Status messages now show what the range rings
  are attached. Thanks to [Justin](https://github.com/6639835) for the contribution.
* Fixed airport runway length filter which was not considered in the web interface.
* Map grid color settings are now considered in web interface.
* X-Plane: Adapted Little Xpconnect to X-Plane 12 datarefs to fix wind display on the map.
  Little Navmap will show a warning message if you use the outdated Little Xpconnect plugin.
  Update the plugin from Little Navmap menu `Tools`.
* X-Plane: Added hint regarding the X-Plane base path in `Load Scenery Library` dialog window:
  `Note that the flight simulator base path is also used to detect weather files and the
  Little Xpconnect installation path for X-Plane.`
* X-Plane: Minimum required version for Little Xpconnect is now 1.2.2. Reinstall this from
  menu `Tools`.
* macOS: Now detecting if Little Navmap runs in the Apple translocation sandbox. The program will
  show a warning if this is detected. Extract the downloaded archive in another folder than
  `Downloads` and continue to follow the installation instructions from the user manual if you see
  this.
* Updated user manual.
* Updated Windows Redistributables to latest.
* Other small fixes and user interface improvements.

### Web UI

* Fixed map vertical centering on click
* Fixed widget plugins moving, resizing and bounds under certain conditions
* Updated web UI iframe feature support
* Clarified Web API documentation for LatLon data

Changes by [u-an-i](https://github.com/u-an-i).

## Translations

* Updated German translation.
* Updated Brazilian Portuguese translation by Ricardo.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.18/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
