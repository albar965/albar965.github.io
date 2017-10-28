---
layout: post
title:  Little Navmap 1.6.7 update released - bug fixes and French translation
date:   2017-10-28 14:00:00 +0200
categories: release
---

**Direct download:
[Windows](https://github.com/albar965/littlenavmap/releases/download/v1.6.7/LittleNavmap-win-1.6.7.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v1.6.7/LittleNavmap-macOS-1.6.7.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v1.6.7/LittleNavmap-linux-1.6.7.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.6/en/)

[**► Features**](/littlenavmap.html)

## Screenshot

Click on image for full size.

----

[![Little Navmap 1.6.7](/assets/images/littlenavmapfrench_small.jpg)](/assets/images/littlenavmapfrench.jpg)

_**Picture above:** French translation._

----

## Notes

This small update covers bugfixes, a new export format and a complete French translation of the program.

## Changes from Release 1.6.6 to 1.6.7

Little Xpconnect was updated to 1.0.3. Minor changes only.

Little Navconnect was updated to 1.6.3. Minor changes and French translation.

### Improvements
* **French translation by Patrick JUNG alias Patbest.**
* Added TXT flight plan format usable by JARDesign or Rotate Simulations aircraft.
* Added adjustable limitation for maximum points of aircraft track.
* Flight plan GPX export saves procedure points and altitude for route points now.

### Bug Fixes
* Fixed problem where procedures were assigned to the wrong runway in search window.
* `No runway` filter is now back in procedure search.
* Fixed errors in ATS route string generation where a DCT was inserted after
  SID or before STAR statement creating invalid routes.
* Fixed problem where X-Plane basepath was not found as `Save as` or `Export` default path.
* Fixed exception when compiling new TACAN approach in P3D version 4.1.
* Fixes for translation support.
* Fixed crash after startup when airport procedures changed.
* Fixed problem with gap on map display and wrong distance calculation for SIDs starting with an initial fix.
* Fixed error where loading FMS flight plans can result in a missing
  flight plan line in elevation profile.


**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/1.6/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

