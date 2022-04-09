---
layout: post
title:  Little Navmap 2.6.18 released
date:   2022-04-09 10:00:00 +0200
categories: release
---

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.18.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.18/LittleNavmap-win-2.6.18.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.6.18.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.18/LittleNavmap-macOS-2.6.18.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.18.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.18/LittleNavmap-linux-20.04-2.6.18.tar.gz)<br/>
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.6.18.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.18/LittleNavmap-linux-18.04-2.6.18.tar.gz)

### Alternative Download Locations

[**► Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy)<br/>
[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)<br/>
[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)<br/>
[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Known Issues

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:<br/>
[► User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

See user manual for general known problems:<br/>
[► User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

See user manual for limitations and issues around Microsoft Flight Simulator 2020:<br/>
[► User Manual - Known Problems - Microsoft Flight Simulator 2020](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems-msfs).


## Changes from 2.6.17 to 2.6.18

This release adapts *Little Navmap* to the latest MSFS changes that cause problems when loading the
scenery library as well as more fixes and improvements affecting other simulators too.

This release contains only the most important or easy to integrate issues. Development is going on
in parallel for the next release 2.8 and an alpha version 2.7 was already released.

### User Interface

* Removed hillshading option since server providing the data was shut down by `User:theDJ`. This will
  be replaced by other maps in the next version of *Little Navmap*. [#838](https://github.com/albar965/littlenavmap/issues/838)
* Fix for Windows icon notification preventing toolbar hiding on windows with `Raise Windows` options enabled.
* `Docking Allowed` setting is now applied to map window as well.

### MSFS

* Fixed issue where all airports were recognized as add-on with MSFS update 9 due to new
  folder `fs-base-genericairports`.
* Corrected detection of MSFS Navigraph update due to name change in `manifest.json`. This fixes
  issues where add-on airports did not update scenery correctly.
* Fixed issues for updating airports by disabling a corner case from FSX and P3D which does not
  apply to MSFS. Before a feature was not updated if the new airport did not contain new
  features like aprons or taxiways. Example LICC add-on.
* Corrected closed airport logic for MSFS. Now fully relying on closed airport flag for MSFS to get
  consistent behavior with the simulator. This can result in closed airports having open runways and
  open airports having all runways closed. [#876](https://github.com/albar965/littlenavmap/issues/876)
* Fixed issue in scenery library loader where airports were wrongly recognized as MSFS POI dummies.

### Weather

* Fixed IVAO weather download to use new interface. IVAO weather URL is now reset to new value on update.
* Added reset buttons for weather URLs in options dialog.

### Flight Plan

* Fixed issue where wrong distance was calculated for disconnected course to fix flight plan legs
  which resulted in wrong leg and cursor positions in elevation profile.
* Fixed issue where flight plan distance to destination was not correct in some cases.
* Fixed issues with anti-meridian detection and line split resulting in kinks in flight plan
  depiction around 180° East and West.

### Logbook

* Fixed issue where all logbook attachments were replaced with the files from the first edited entry
  when doing bulk edit. [#829](https://github.com/albar965/littlenavmap/issues/829)
* Query for airport by official code failed if ICAO columns was not available or not populated.
  Could not find airport in logbook entry dialog when using MSFS. [#808](https://github.com/albar965/littlenavmap/issues/808)
* Increased limit in logbook statistics from 250 to 1000 rows.

### Other

* Now skipping empty lines in X-Plane file header which appear in some malformed `apt.dat` files.
* Fixed issue when downloading NAT tracks containing `PBCS TRACKS AS FOLLOWS/V W X/END OF PBCS OTS`.
* Now dropping all artificial waypoints created only for procedure or airway resolution.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.18/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
