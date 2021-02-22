---
layout: post
title:  Little Navmap 2.6.9 released
date:   2021-02-22 19:00:00 +0100
categories: release
---

----

**►► This is a bugfix release which addresses an unrecoverable crash on startup when downloading tracks (**`Caught unknown exception in file ... line 85`**). ◄◄**

----

## Links

[**► Screenshots of 2.6 Features**](/pages/26/littlenavmapscreens.html)\\
[**► Little Navmap and Little Navconnect User Manuals for 2.6 Versions**](/manuals.html)

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.9.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.9/LittleNavmap-win-2.6.9.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.9.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.9/LittleNavmap-macOS-2.6.9.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.9.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.9/LittleNavmap-linux-20.04-2.6.9.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.9.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.9/LittleNavmap-linux-16.04-2.6.9.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)\\
[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)\\
[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Notes


Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:

[User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

## Known Issues

See user manual for general known problems:

[User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

See user manual for limitations and issues around Microsoft Flight Simulator 2020:

[User Manual - Known Problems - Microsoft Flight Simulator 2020](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems-msfs).

## Changes from 2.6.8 to 2.6.9

* Fixed unrecoverable error when downloading PACOTS tracks (`Caught unknown exception in file ... line 85`).
* Improved error handling for unreadable track information. Program now logs an error message
  instead of crashing.
* Fixed error when reading procedures with invalid or unknown approach types from FSX, P3D and MSFS.
  Now logging error instead.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.9/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
