---
layout: post
title:  Little Navmap 2.8.12.rc2 released
date:   2023-07-11 14:00 +0200
categories: release
release-version: 2.8.12.rc2
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-2.8.12.rc2-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v2.8.12.rc2/LittleNavmap-win64-2.8.12.rc2-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.12.rc2.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.12.rc2/LittleNavmap-macOS-2.8.12.rc2.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.12.rc2.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.12.rc2/LittleNavmap-linux-22.04-2.8.12.rc2.tar.gz)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-2.8.12.rc2-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v2.8.12.rc2/LittleNavmap-win32-2.8.12.rc2-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-20.04-2.8.12.rc2.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.12.rc2/LittleNavmap-linux-20.04-2.8.12.rc2.tar.gz)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 2.8.12.rc2](https://github.com/albar965/littlenavmap/releases/v2.8.12.rc2) \(scroll down to `Assets`\).

**Alternative Download Locations - Look into sub-folders for beta, development or release candidates:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Notes

**This is a release candidate of *Little Navmap* which fixes a crash when loading the scenery
library as well as other issues that were introduced with Version 2.8.12.rc1.**

**►► Important: Also update *Little Navconnect* and *Little Xpconnect* if you're using one of them to
avoid crashes.**.

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

A big thank you to all who reported bugs and issues!

## Changes from 2.8.12.rc1 to 2.8.12.rc2

* Fixed crash when rotating log file on size overflow. This resulted in a random crash to desktop
  while loading the scenery library.
* Fixed crash when loading Active Sky files if Active Sky file path was set manually and removed
  later on.
* Now allowing to pass a flight plan route description to an already running instance.
  This is command line option `-d` or `--flight-plan-descr`.
* Removed restart requirement after installing Microsoft Visual C++ Redistributable packages in
  64-bit Windows installer.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.12.rc2/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
