---
layout: post
title:  Little Navmap 2.6.16 released
date:   2021-08-14 12:00:00 +0200
categories: release
---

----

**►► This version fixes flight plan issues with X-Plane as well as flight plan export and printing issues. ◄◄**

----

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.16.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.16/LittleNavmap-win-2.6.16.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.6.16.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.16/LittleNavmap-macOS-2.6.16.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.16.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.16/LittleNavmap-linux-20.04-2.6.16.tar.gz)<br/>
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.6.16.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.16/LittleNavmap-linux-18.04-2.6.16.tar.gz)

### Alternative Download Locations

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

## Changes from 2.6.15 to 2.6.16

### X-Plane flight plan export and loading [#741](https://github.com/albar965/littlenavmap/issues/741)

* Now falling back to DEP/DES keywords in X-Plane FMS flight plan files. These keywords denote departure or destination as a waypoint or a not identifiable airport opposed to ADEP/ADES. This avoids loading issues in X-Plane FMS and third party tools. Flight plans should be loadable in X-Plane FMS and GPS in any case. The conditions for this case are below:
   - Airport ident is longer than four characters. Example: White Lake (`XC0004`).
   - Airport has ICAO and this does not match internal id. Example: Torres with official ICAO id `SSTE` using internal ident of `SBTR`.
   - Airport has no ICAO but FAA code which does not match the internal id. Example: Red Lion with FAA code `JY73` using internal ident of `N73`.
   - Airport has neither of above but a local code which does not match internal. Example: Edmonton Cooking Lake having local code of `CEZ3` and internal X-Plane ident `EZ3`.
* Now truncating all X-Plane airport idents to six characters. Also the ones used in intermediate waypoints.
* Enabled loading of X-Plane FMS plans with truncated airport ids.

### General

* Added airport elevation to tab `Runways` and airport transition altitude in tab `Weather` in information window.
* Fixed issues with flight plan and waypoint remarks being truncated when saving plan as HTML, printing plan or copying plan as CSV (`Ctrl+C` in table).
* Fixed issues when copying CSV text to clipboard in flight plan table and search result tables (`Ctrl+C` in table). Wrong columns were copied into the CSV text if columns in the table were reordered.
* Added missing flight plan remarks field to HTML export and print.
* Table columns which are shrinked to minimum width are now excluded from export to HTML and CSV.
* Fixed issue where the wrong flight plan columns were printed or exported to HTML or columns were missing. This happened if the user rearranged the flight plan table columns by moving the headers around.
* Small corrections to options dialog text, aircraft labels on the map (`TCAS` vs `XPDR`) and airport labels on the map.
* More tolerance for finding airports when loading flight plans. Trying all available internal and official ids (ICAO, FAA, IATA and local) now.
* Now also showing ILS frequency for final approach in flight plan table for circling as well as IGS, LDA, LOC and SDF approaches if navaid is present.

### Web interface

Fixes provided by [u-an-i](https://github.com/u-an-i).

* Fixed JavaScript errors on desktop due to pointer move after generalizing touch zoom.
* Now giving user commands always priority if server does not respond.
* Adjusted fast map refresh to not produce images too large at for slow connections.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.16/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
