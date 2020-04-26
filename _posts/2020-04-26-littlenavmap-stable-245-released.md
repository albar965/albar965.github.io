---
layout: post
title:  Little Navmap 2.4.5 released
date:   2020-04-26 12:00:00 +0200
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.4.5/LittleNavmap-win-2.4.5.zip) - [macOS](https://github.com/albar965/littlenavmap/releases/download/v2.4.5/LittleNavmap-macOS-2.4.5.zip) - [Linux \(64 bit, based on Ubuntu 18.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.5/LittleNavmap-linux-18.04-2.4.5.tar.gz) - [Linux \(64 bit, based on Ubuntu 16.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.5/LittleNavmap-linux-16.04-2.4.5.tar.gz)**

**Alternative download locations: [Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) -
[Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) -
[OneDrive](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manuals**](/manuals.html)

[**► Features**](/littlenavmap.html)

<!-- ================================================================================================ -->

## Notes

**This release adds support for Prepar3D v5, Chinese user interface translation by John Liu, bug fixes for crashes and other small improvements.**

Note that not all reported issues are fixed so far.

Most will be fixed in the next major update version 2.6 (2.5 is only internal) which I'm working on in parallel.

## Changes from Release 2.4.4 to 2.4.5

See [CHANGELOG.txt](https://github.com/albar965/littlenavmap/blob/release/2.4/CHANGELOG.txt) in littlenavmap project for changes across all versions.

### Prepar3D v5

[#512](https://github.com/albar965/littlenavmap/issues/512)

* Added P3D v5 to simulator detection.
* Adapted loading of BGL files to P3D v5 structure changes and added new records as well as new COM
  and other types.
* Enabled loading of add-on packages from `%USERPROFILE%\Documents\Prepar3D v5 Add-ons`.

### Fixed Crashes and other Errors

* Fixed crash to desktop when adding an approach after a list of user defined waypoints. [#500](https://github.com/albar965/littlenavmap/issues/500)
* Fixed error reporting in wind download and decoding. Program does not crash to desktop if wind
  download has errors. [#480](https://github.com/albar965/littlenavmap/issues/480)
* Now limiting weather display to the 10 most important/biggest airports if connected via network
  or SimConnect to P3D/FSX. This minimizes map stutters when scrolling or zooming. [#497](https://github.com/albar965/littlenavmap/issues/497)
  Disable display of airport weather symbols if stutters still appear:
  - Menu `Weather` -> `Airport Weather Source`: Select anything but `Simulator`.
  - Or menu `View`: Disable `Show Airport Weather`.
* Fixed crash when entering an invalid ICAO in web interface for airport information. [#491](https://github.com/albar965/littlenavmap/issues/491)
* Fixed wrong handling of `Options/RenderOpt` setting in `little_navmap.ini`.
* Corrected encoding when exporting flightplan as HTML page.

### User Interface

* Fixed spelling and typos in user interface.
* Small UI changes in connection dialog for more clarity.
* Added word wrap to avoid dialogs growing too large in user interface.
* Better display on mobile devices for webserver.
* Updated German legend.

### Build and Deployment for Developers

* Added option to include common `../build_options.pro` file with defines for qmake.
  File is included automatically if it exists.

### related from atools version 3.4.6

See [CHANGELOG.txt](https://github.com/albar965/atools/blob/release/3.4/CHANGELOG.txt) in atools project for more technical details. Relevant comments were added to list above.

**All files are checked by [VirusTotal](https://www.virustotal.com).**
