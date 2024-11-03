---
layout: post
title:  Little Navmap 3.0.12 released
date:   2024-11-03 12:00 +0100
categories: release
release-version: 3.0.12
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.12-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.12/LittleNavmap-win64-3.0.12-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.12.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.12/LittleNavmap-macOS-3.0.12.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.12.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.12/LittleNavmap-linux-ubuntu-22.04-3.0.12.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.12-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.12/LittleNavmap-linux-ubuntu-22.04-3.0.12-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.12-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.12/LittleNavmap-win32-3.0.12-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.12.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.12/LittleNavmap-linux-ubuntu-20.04-3.0.12.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.12-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.12/LittleNavmap-linux-ubuntu-20.04-3.0.12-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.12](https://github.com/albar965/littlenavmap/releases/v3.0.12) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a stable release of Little Navmap that fixes smaller issues.**

**Reload the scenery library database to get fixes for airports and procedures.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

A big thank you to all who reported bugs and issues!

# Version 3.0.12

## Changes from 3.0.11 to 3.0.12

* Problem with disappearing large range rings and other lines on very high and very close zoom
  distances fixed. Range rings > 4000 NM disappeared from the map when using Mercator projection
  or when zooming in close.
* Fixed exception when downloading Oceanic tracks.
* Fixed issue where ILS were missing for MSFS. Examples EGPH using ILS approach with an add-on
  airport.
* EDDF double ILS as for runway 25R, using the ILS IFNW and IFNR now correctly used for MSFS.
  The right ILS is selected for display when using the related approach.
* Fixed broken airway collection for X-Plane. Example: Airway W66 not found for the flight plan
  route description `ZUCK ATBUG W66 JNQ ZWWW`. [#1197](https://github.com/albar965/littlenavmap/issues/1197)
* Fixed issue where last airway in scenery library was omitted. This affected all simulators.
* Better error reporting and validation in log file for invalid taxiway structures in MSFS. [#1200](https://github.com/albar965/littlenavmap/issues/1200)
* Display of marker beacons now disabled if ILS or airports are not shown.
* Fixed missing circles for online towers and centers not having a matching geometry in the user
  airspace database. This also disabled the tooltips on the map.
* Corrected online center size settings in options on page 'Map Online`. *Little Navmap* now falls
  back to user defined value if an online center does not provide a visual range value. Fixed values
  reset back to default when applying options.
* Fixed several issues in X-Plane database when assigning airports to procedures. As a result
  procedures could not be loaded from flight plans and the airport procedures menu was wrongly disabled.
  Examples for X-Plane 12: No procedures were found for Pokhara Intl (VNPR) and Qualicum Beach (AT4)
  since their X-Plane ident does not match official airport codes like ICAO, FAA or local.
  Note that X-Plane 11 may still refuse to load flight plans created using such airports while there
  are normally no issues using X-Plane 12.
* Wrong procedure centering when clicking in procedure search corrected. Now depends on visibility
  of the missed approach.
* Improved export of X-Plane FMS files if airport has several idents. Flight plans using
  Qualicum Beach (AT4) and similar cases as departure or destination can now be loaded in X-Plane.
* Removing fullscreen button now when copying map image to the clipboard or when saving screenshots.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.12/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
