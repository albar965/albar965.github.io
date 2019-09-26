---
layout: post
title:  Little Navmap 2.4.2.beta released
date:   2019-09-26 10:00:00 +0200
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.4.2.beta/LittleNavmap-win-2.4.2.beta.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.4.2.beta/LittleNavmap-macOS-2.4.2.beta.zip) -
[Linux \(64 bit, based on Ubuntu 18.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.2.beta/LittleNavmap-linux-18.04-2.4.2.beta.tar.gz) -
[Linux \(64 bit, based on Ubuntu 16.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.2.beta/LittleNavmap-linux-16.04-2.4.2.beta.tar.gz)**

**Alternative download locations: [Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) -
[Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) -
[OneDrive](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)**

[**► Detailed Changelog for 2.4 Versions**](/pages/24/littlenavmapchangelog.html)

[**► Screenshots of new 2.4 Features (updated for 2.4.1.beta)**](/pages/24/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.4 Versions**](/pages/24/littlenavmapmanuals.html)

**Please do not hesitate to let me know about bugs and inconsistencies.**

## Changes from Release 2.4.1.beta to 2.4.2.beta

## Limitations

* Translations are not updated yet except Italian and French. The user interface will be a mix of your local language and
  English.
* The online and offline manuals are not updated yet and are work in progress. Neither the English nor the translated
  versions. Help buttons and links are functional but point to empty placeholder pages.
* Tutorials not updated yet.

## Installation

* Microsoft Visual C++ Redistributables are not needed.
* Reloading the scenery library is recommended.
* Reinstall the Little Xpconnect X-Plane plugin to see bug fixes on macOS.

## Help

* Draft manuals can be accessed here: [2.4 Draft Manuals](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/)
* List of closed issues: [Closed for Milestone 2.4](https://github.com/albar965/littlenavmap/milestone/7?closed=1)

## Changes

* Fixed crash when reading GRIB winds aloft or WMM (magentic declination) data on Windows if
  user's home path contains special characters like umlauts or accents.
* Fuel flow and amount is now displayed correctly in current performance tab if fuel unit is
  changed to volume in edit dialog. Was too high before.
* Removed merge options for aircraft type and model in performance merge dialog which resulted in
  unwanted changes. Now limited to copy and ignore.
* Added real ICAO code to airport to avoid issues with X-Plane's artificial airport ids. Now finds
  procedures for e.g. "AT4" where ICAO is actually "CAT4". Reload the scenery library to see this fix.
* X-Plane FMS flight plan is now adjusted for real ICAO airport idents when using procedures to
  avoid problems loading plan.
* Fixed display problem when deleting transitions from a flight plan.
* Added IATA and ICAO codes to airport information display if available.
* Adjusted window texts in night style to better see disabled checkboxes like on the weather
  tab in options dialog.
* Solved problem where ILS tooltips and click regions appeared in the wrong places on the map.
* Now ignoring first zero value when interpolating fuel for aircraft performance.
* Resetting route description dialog options to default.
* Updated French and Italian translations. Now complete. Thanks to Flavio, Patrick and Valerio!

### related from atools version 3.4.2.beta

See CHANGELOG.txt in atools project for more technical details. Relevant comments were added to list above.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.4/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
