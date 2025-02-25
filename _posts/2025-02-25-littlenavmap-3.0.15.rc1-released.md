---
layout: post
title:  Little Navmap 3.0.15.rc1 released
date:   2025-02-25 15:00 +0100
categories: release
release-version: 3.0.15.rc1
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.15.rc1-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.15.rc1/LittleNavmap-win64-3.0.15.rc1-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.15.rc1.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.15.rc1/LittleNavmap-macOS-3.0.15.rc1.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.15.rc1.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.15.rc1/LittleNavmap-linux-ubuntu-22.04-3.0.15.rc1.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.15.rc1-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.15.rc1/LittleNavmap-linux-ubuntu-22.04-3.0.15.rc1-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.15.rc1-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.15.rc1/LittleNavmap-win32-3.0.15.rc1-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.15.rc1.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.15.rc1/LittleNavmap-linux-ubuntu-20.04-3.0.15.rc1.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.15.rc1-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.15.rc1/LittleNavmap-linux-ubuntu-20.04-3.0.15.rc1-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.15.rc1](https://github.com/albar965/littlenavmap/releases/v3.0.15.rc1) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a test version of Little Navmap which attempts to fix issues with AI in MSFS 2020 and
MSFS 2024 and has additional facilities to diagnose issues. In addition, issues with in-game panels
in MSFS that use the Little Navmap web server have been fixed.**

**Please read the release notes below before reporting an issue.**

This version was tested by me and shows the following results here:

* Stock AI aircraft and ship traffic on MSFS 2020 (GAIST 6.1 add-on) are visible. Other traffic add-ons
  not tested.
* Stock AI aircraft and ship traffic on both MSFS 2024 stable and beta versions are visible. Traffic
  add-ons not tested.
* No MSFS simulator shows stock ground traffic vehicles anymore. No add-ons like pushback or GSX tested.
  Let me know if you see issues with an add-on.

## How to report an issue

If you see the wrong vehicles at the wrong place or an aircraft with a question mark inside the symbol:

1. Run the simulator and connect Little Navmap as usual.
2. Click on the wrong vehicle, ship or aircraft on the map. This pops up the window `Simulator Aircraft`
   and the tab `AI / Multiplayer`.
3. Right click into the tab `AI / Multiplayer`, click `Select all` and then `Copy` from the
   context menu.
4. Paste the formatted content into the
   [Avsim forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum/)
   into one of the related threads.
5. Please always mention the used simulator (2020 or 2024) and version (beta or stable) as well as
   any traffic, pushback or other add-on you use. A link to the add-on can help.
6. Optional but better: Send me your log file (menu `Tools` -> `Files and Directories`). Also mention
   the simulator used and related add-ons as explained above.
   [Contact](https://albar965.github.io/contact.html).

## Changes from 3.0.14 to 3.0.15.rc1

* Added check for mismatch between simulator and scenery library database. This will show a dialog
  window if you start to fly MSFS 2024 while having the MSFS 2020 scenery library enabled.
* Now showing a notification dialog when a user tries to export a MSFS 2020 plan while using the
  MSFS 2024 scenery library, for example. Click `Do not show again` to continue saving without
  message.
* More detailed information in log when clicking on AI or user aircraft helping to diagnose AI
  issues.
* Now always showing the vehicle category in the aircraft progress window and falling back to an
  aircraft icon with a question mark for unsupported vehicle categories.
* Now limiting vehicle size to avoid oversized ship icons.
* Reworked SimConnect code. This helps to fix problems with disappearing AI traffic, multiplayer
  aircraft or similar issues.
* Added better messages in the information window when no weather station can be found near an
  airport. This prevents display of interpolated and nearest weather.
* Fix for wrong navaid selection in procedures. Example: LOWW SID SNU2A used the wrong navaid SNU
  in Sweden.
* Fixed display for web interface Dynamic Touch and Drag map also when using a scaled user interface.
* Corrected saving of map image and copying to clipboard using the wrong image size.
* Fixed crashes due to invalid aircraft data sent through SimConnect by MSFS.
* Updated Chinese translation by Eyderoe.
* Updated German translation.
* Updated Brazilian Portuguese translation by Ricardo.

## Web API

* Fixed issues with the MSFS add-ons
  [Little Navmap VR](https://flightsim.to/file/43086/little-navmap-vr-panel) (MSFS 2020),
  [Ingamepanel NAVMAP for Flight Simulator](https://flightsimulator.me/simulators/flight-simulator/panels/105-ingamepanel-navmap-for-flight-simulator)
  and
  [Little NavMap EFB Client](https://flightsim.to/file/85446/little-navmap-efb-client) (MSFS 2024)
  all now work correctly when using a scaled or a non-scaled user interface.
* Added setting `Scale delivered images accoring to system user interface scale level` in options
  on page `Web Server`. Note that this applies only to add-ons using the Little Navmap WebAPI. This
  will deliver map images scaled according to the user interface scale level if checked and if you use
  the web server with high resolution monitors. This is the default behavior but can cause issues
  when using certain web interfaces. Uncheck if you use such an add-on or see issues like a corruped
  map display. Does not apply to the OpenLayers API.
* The OpenLayers API now returns images scaled by the system user interface scale factor
  (125%, 150% or 200%). This means that the returned image might be larger than the requested size
  depending on scale factor. This change was  needed to fix the Dynamic Touch and Drag map.
* OpenLayers API returned requested images with a minimum height of 300 due to an internal bug.
  This is fixed now and images are returned in the requested size. Dynamic Touch and Drag uses
  256x256 pixels, while other add-ons use larger images.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.15.rc1/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
