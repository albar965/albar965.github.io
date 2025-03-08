---
layout: post
title:  Little Navmap 3.0.16 released
date:   2025-03-08 14:00 +0100
categories: release
release-version: 3.0.16
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.16-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.16/LittleNavmap-win64-3.0.16-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.16.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.16/LittleNavmap-macOS-3.0.16.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.16.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.16/LittleNavmap-linux-ubuntu-22.04-3.0.16.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.16-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.16/LittleNavmap-linux-ubuntu-22.04-3.0.16-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.16-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.16/LittleNavmap-win32-3.0.16-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.16.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.16/LittleNavmap-linux-ubuntu-20.04-3.0.16.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.16-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.16/LittleNavmap-linux-ubuntu-20.04-3.0.16-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.16](https://github.com/albar965/littlenavmap/releases/v3.0.16) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a stable release of Little Navmap which fixes issues with AI display in MSFS 2020 and MSFS 2024. In addition, issues with in-game panels in MSFS that use the Little Navmap web server have been fixed.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

A big thank you to everyone who reported bugs and issues!

# Version 3.0.16

## Changes from 3.0.15 to 3.0.16

* Added check for mismatch between simulator and scenery library database. This will show a dialog
  window if you start to fly MSFS 2024 while having the MSFS 2020 scenery library enabled.
  Click `Do not show again` to switch automatically to the right scenery library.
* Now showing a notification dialog when a user tries to export a MSFS 2020 plan while using the
  MSFS 2024 scenery library, for example. Click `Do not show again` to continue saving without the
  message.
* Reworked SimConnect code. This helps to fix problems with disappearing AI traffic, multiplayer
  aircraft and other issues.
* Added better message in the information window when no weather station can be found near an
  airport. A lack of weather stations prevents the display of interpolated and nearest weather.
* Fix for wrong navaid selection in procedures. Example: LOWW SID SNU2A used the wrong navaid SNU
  in Sweden.
* Corrected saving of map image and copying to clipboard using the wrong image size when using a
  scaled user interface.
* Fixed crashes due to invalid aircraft data sent through SimConnect by MSFS.
* From 3.0.15.rc1: Fixed the white aircraft with question mark seen when using X-Plane due to
  missing category.
* From 3.0.15.rc1: Now hiding message `No online aircraft shown on map` in window `Simulator
  aircraft` which appeared wrongly without an online network selected.
* From 3.0.15.rc1: Fix for error message when installing the Debian package on Linux. The error
  appeared when calling ´apt upgrade´. Now removing link before.
* From 3.0.15.rc1: Now avoiding program abort on exception when reading the scenery library.
  This keeps *Little Navmap* running in case of exceptions while loading the scenery library.
* From 3.0.15.rc1: Improved error handling when loading the scenery library from MSFS 2024.
* From 3.0.15.rc1: Added option to add missing navaids to MSFS 2024.
  See [User Manual - Additional Navaids for MSFS 2024](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html#additional-navaids-for-msfs-2024) for more information.
* Limiting vehicle size to avoid over sized ship icons.
* More detailed information in log when clicking on AI or user aircraft helping to diagnose AI
  issues.
* Now clearing remaining wrong map highlights for selected legs in flight plan.
* Fixed double labels for airports which are a part of the flight plan.
* Procedure highlights from `Preview all Procedures` are now cleared with the selection when
  clicking into the empty space of the tree widget or when adding a procedure to a flight plan.
* The distance for the inclusion of airports in the METAR interpolation has been increased
  from 200 to 600 NM.
* Removing `&` from file names and airport names in MSFS 2020 and MSFS 2024 exported flight plans
  to avoid simulator hiccups.

## Web Interface

* Fixed display for web interface map `Dynamic Touch and Drag` also when using a scaled user interface.
* Fixed issues with the MSFS add-ons
  [Little Navmap VR](https://flightsim.to/file/43086/little-navmap-vr-panel) (MSFS 2020),
  [ALL IN ONE](https://flightsimulator.me) (MSFS 2020 and MSFS 2024)
  and
  [Little NavMap EFB Client](https://flightsim.to/file/85446/little-navmap-efb-client) (MSFS 2024)
  all now work correctly when using a scaled or a non-scaled user interface.
* Added setting `Scale delivered images according to system user interface scale level` in options
  on page `Web Server`. Note that this applies only to add-ons using the Little Navmap WebAPI. This
  will deliver map images scaled according to the user interface scale level if checked and if you use
  the web server with high resolution monitors. This is the default behavior but can cause issues
  when using certain web interfaces. Deselect this if you use such an add-on or see issues like a corrupted
  map display. Does not apply to the OpenLayers API.
* The OpenLayers API now returns images scaled by the system user interface scale factor
  (125%, 150% or 200%). This means that the returned image might be larger than the requested size
  depending on the user interface scale factor.
* OpenLayers API returned requested images with a minimum height of 300 due to an internal bug.
  This is fixed now and images are returned in the requested size.
* From 3.0.15.rc1: Adjusting map image request for display scaling by [u-an-i](https://github.com/u-an-i).

## Translations

* From 3.0.15.rc1: Fixed untranslatable texts in help buttons in search tabs.
* Updated Chinese translation by Eyderoe.
* Updated Brazilian Portuguese translation by Ricardo.
* Updated French translation by Patrick.
* Updated German translation.
* Updated Italian translation by Flavio.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.16/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
