---
layout: post
title:  Little Navmap 2.6.11 released
date:   2021-03-29 10:00:00 +0200
categories: release
---

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.11.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.11/LittleNavmap-win-2.6.11.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.11.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.11/LittleNavmap-macOS-2.6.11.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.11.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.11/LittleNavmap-linux-20.04-2.6.11.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.11.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.11/LittleNavmap-linux-16.04-2.6.11.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)\\
[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)\\
[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Known Issues

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:\\
[► User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

See user manual for general known problems:\\
[► User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

See user manual for limitations and issues around Microsoft Flight Simulator 2020:\\
[► User Manual - Known Problems - Microsoft Flight Simulator 2020](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems-msfs).

## Changes from 2.6.10 to 2.6.11

### Weather

* Fixed `Error downloading or reading wind data` issue. Adapted URL for winds aloft download to NOAA changes and added `atmos` as directory. [#623](https://github.com/albar965/littlenavmap/issues/623)
* Now suppressing wind and other downloads with log warning message if URLs are empty. [#623](https://github.com/albar965/littlenavmap/issues/623)
* New decompression methods to speed up weather and track downloads.
* Now showing airport weather symbols on higher zoom levels. Avoiding simple line on wind barb which can be confused with low wind.

### Flight Plans

* Corrected approach identifier in FLP flight plan export and loading for Aerosoft aircraft. Now using ARINC identifier for approaches and ignoring transitions of type `VECTOR`. Adapted changed keywords in file for CRJ. Problems still appear when loading flight plans into the aircraft. This will be fixed in one of the next updates.
* Added extra entry for Aerosoft MSFS CRJ in multi export to avoid loading issues because of a too long file name.
* Added patch by Slawek Mikula to support loading of Aviamaps flight plans. [#616](https://github.com/albar965/littlenavmap/issues/616)
* Exporting online network flight plan files from menu now correctly remembers last used folder for each format.

### Other

* Adjustments to drawing. ILS, online aircraft and AI aircraft are now shown at higher zoom levels.
* Added support for new VATSIM JSON version 3 data feed. Better update rate for online networks is now one minute for VATSIM and PilotEdge and two minutes for IVAO. Allowing centers and clients (VATSIM prefile) without coordinates now throughout program. Keep in mind that the real center boundaries are not depicted yet. [#606](https://github.com/albar965/littlenavmap/issues/606)
* MSFS: Now ignoring invalid content types like `Unknown` in MSFS `manifest.json` file which are often set wrongly by add-on developers. This kept add-on airports from showing up.
* Fixed issue where userdata CSV backup files could not be loaded and had to be manually corrected before import.
* Updates for detection of military airports and name capitalization.
* More small user interface corrections.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.11/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
