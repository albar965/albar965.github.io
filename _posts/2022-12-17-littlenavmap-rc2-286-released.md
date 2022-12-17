---
layout: post
title:  Little Navmap 2.8.6.rc2 released
date:   2022-12-17 15:00 +0100
categories: release
release-version: 2.8.6.rc2
---

### Direct Download

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.6.rc2.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.6.rc2/LittleNavmap-win64-2.8.6.rc2.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.6.rc2.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.6.rc2/LittleNavmap-macOS-2.8.6.rc2.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.6.rc2.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.6.rc2/LittleNavmap-linux-22.04-2.8.6.rc2.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.6.rc2.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.6.rc2/LittleNavmap-win32-2.8.6.rc2.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.6.rc2.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.6.rc2/LittleNavmap-linux-20.04-2.8.6.rc2.tar.gz)

## Notes

This is a release candidate for the next major release of Little Navmap.

**This version is ready for the latest MSFS and for X-Plane 12. See known issues below for MSFS.**

**The updated user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/)**.

**See here for user manual downloads:
[User Manuals - Beta Releases](https://albar965.github.io/manuals.html#beta).**

**This changelog also explains new or moved/changed features.
First look here if anything is not clear or missing.**

**X-Plane users: Reinstall Little Xpconnect from this package to get but fixes and changed. Otherwise fuel flow
calculation, X-Plane weather information or other functions might not work correctly in Little Navmap.**

**Little Navmap probably reminds you to reload scenery library databases after updating. Please do
so to benefit from new features and bug fixes.**

A big thank you to all who reported bugs and issues!

## Known Issues MSFS

* **Active pause in MSFS breaks the connection and does not allow to reconnect.
  Use the key `Esc` for normal pause to avoid problems.**
* **Some third-party plugins like traffic add-ons might cause connection issues when used together
  with Little Navmap and MSFS.**
* **The autoconnect function of Little Navmap does not work reliably with MSFS. Connect manually
  after starting your flight if you see problems. Little Navconnect can have the same issues as
  Little Navmap since it always uses autoconnect. Start the simulator first and then Little Navconnect.**

## Changes from 2.8.5.rc1 to 2.8.6.rc2

### General

* Fixed case of wrong elevation profile error if restrictions at end of STAR conflicts with restrictions at
  beginning of an approach transition. Example: EHAM, arrive using STAR NORK2A via ARTIP and R18R.
* Now checking regularily for updates instead of only on startup. Update notification messages
  might now also pop up after startup except when being connected to a simulator or having a dialog
  window open. Not that the update check across the network is still done only every day, week or
  month.
* Changed display of missed approaches in procedure preview. Missed approaches can now also be
  disabled for the procedure preview on the toolbar or in view menu `Show missed approaches`.
* Fixes for approach transition and STAR procedures when drawing flight plan.
* Corrected display in airport information for missing paths.

### Little Xpconnect Version 1.0.33

* Added menu item `Load AI Aircraft Information` which allows to disable the background loading of
  `.acf` files.
* Fixed an issue where ICAO type and other values of AI and multiplayer aircraft were messed up.
* Now detecting on-ground status correctly for AI or multiplayer aircraft.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.6.rc2/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
