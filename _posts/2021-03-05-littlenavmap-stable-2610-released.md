---
layout: post
title:  Little Navmap 2.6.10 released
date:   2021-03-05 14:00:00 +0100
categories: release
---

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.10.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.10/LittleNavmap-win-2.6.10.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.10.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.10/LittleNavmap-macOS-2.6.10.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.10.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.10/LittleNavmap-linux-20.04-2.6.10.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.10.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.10/LittleNavmap-linux-16.04-2.6.10.tar.gz)

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

## Changes from 2.6.9 to 2.6.10

* Fixed crash that occurs when showing the dialog `The flight plan had no valid start position` on startup. This kept the user from starting *Little Navmap*.
* Removed wrong warning dialog about start position when loading MSFS flight plans. MSFS cannot load start positions like gates from a flight plan file.
* Fixed missing time, fuel and altitude values for departure and destination legs in flight plan table.
* Corrected message in progress tab which gave the wrong impression that program is already connected when using a network connection.
* Fixed issue where minimum zoom was wrongly set in the elevation profile in some cases. As a result the user could not zoom in to the minimum of around 4 NM and was stuck at much higher levels.
* Changed keyboard shortcut for `Create Approach` in context menus to `Alt+Shift+R` to avoid overlap  with `Calculate Flight Plan`.
* Added new sub-menu `Track Sources` in menu `Flight Plan` which allows to enable or disable the different track systems to load. Note that AUSOTS is disabled per default since there are no flex tracks available for almost one year and the service is unreliable causing download errors.
* More small user interface and map display improvements.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.10/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
