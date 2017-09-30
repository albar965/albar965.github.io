---
layout: post
title:  "Little Navmap 1.6.3 released - now supports X-Plane"
date:   2017-09-18 15:00:00 +0200
categories: release
---

**Direct download:
[Windows](https://github.com/albar965/littlenavmap/releases/download/v1.6.3/LittleNavmap-win-1.6.3.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v1.6.3/LittleNavmap-macOS-1.6.3.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v1.6.3/LittleNavmap-linux-1.6.3.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.6/en/)

[**► Features**](/littlenavmap.html)

## Notes

Most changes are regarding X-Plane support but installation of this update is also recommended for FSX or Prepar3D users due to several bug fixes and small improvements.

The scenery database format has changed since 1.4.4 and the program will ask to erase its own databases if started. The `Load Scenery Library` dialog will open after removing the old databases.

*Little Navconnect* is now included in the *Little Navmap* download archive in a sub-directory.

The *Little Xpconnect* X-Plane plugin included in the *Little Navmap* download archive.

## Changes from Release 1.4.4 to 1.6.3


### Full support for X-Plane 11

* Scenery database: Airports, aprons, taxiways, navaids, airways, procedures \(SIDs, STARs, ...\) and all.
* Read and decode the downloaded X-Plane weather files.
* Copy airspaces from FSX/P3D to X-Plane database.
* Can load and save FMS files.
* Moving map \(needs included *Little XpConnect* plugin\) also allowing remote setups.
* Displays AI traffic.
* Flight plan calculation considers additional maximum altitude and one-way restrictions.
* Enabled database file exclusions and add-on override options to X-Plane loader.
* Speed limit for procedure segments.
* All for Windows, macOS and Linux.

### General Improvements

* Automatic update check with notification and settings in dialog `Options` on tab `Startup`.
* _Active Sky for Prepar3D v4_ weather now supported.
* Rhumb line measurement now shows both magnetic and true course where declination is based on origin.
* Improved weather display for nearest station: Added name, distance and map link to reporting station if the station is an airport.
* Route string generation is now more robust for malformed and incomplete flight plans.
* Added buttons to clear selection and reset search in search dock window and flight plan window.
* Now erasing wrong airway entries at departure and destination when loading flight plan to avoid problems with malformed files from other tools.
* Can now load FMS, FLP and FS9 ini-style PLN flight plan formats.
* Shows startup positions in the information window now.
* Added donation link to help menu and about dialog.
* Database loading dialog now pops up after erasing incompatible databases.

### Bug Fixes

* Fixed multiple problems with magnetic declination by using `magdec.bgl` file.
* Several problems fixed when loading FSX/P3D scenery databases and P3D v4 `add-on.xml`.
* Corrected handling and display of helipads. Now using name as an identifier.
* Fixed missing encoding in saved PLN files which caused problems with other tools.
* Better detection of military airports name capitalization.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/1.6/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

