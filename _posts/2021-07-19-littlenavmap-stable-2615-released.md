---
layout: post
title:  Little Navmap 2.6.15 released
date:   2021-07-26 14:00:00 +0200
categories: release
---

----

**►► This version contains bug fixes, small user interface improvements, support for MSFS scenery library changes and a new airport ident search for X-Plane. ◄◄**

----

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.15.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.15/LittleNavmap-win-2.6.15.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.15.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.15/LittleNavmap-macOS-2.6.15.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.15.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.15/LittleNavmap-linux-20.04-2.6.15.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.6.15.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.15/LittleNavmap-linux-18.04-2.6.15.tar.gz)

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

## Important Notes

* All simulators: Reload the scenery library to get the changes. Also update *Little Navmap* on remote/networked computers before copying a new scenery library database. Older *Little Navmap* versions will crash with the new databases.
* MSFS: Avoid the scenery library mode `Do not use Navigraph Database` if you have the Navigraph update for MSFS installed. You will see errors in procedures. Instead directly update the scenery database of *Little Navmap* using the Navigraph FMS Data Manager.
* The manual is not updated for the webserver / web user interface changes. Scroll by clicking or tapping and zoom by using the mouse wheel or the two-finger pinch gesture.
* The table column order and width for the search results is reset to default for the search result table in tab `Airports`.
* The status bar can be hidden in some cases. Show it again by selecting `Window` -> `Show Statusbar`.
* The window layout might be different after updating in some cases. Reset it to default using `Window` -> `Reset Window Layout to Default` or load a saved window layout.

## Changes from 2.6.14 to 2.6.15

* Updated English and German manual for airport ident changes in search and information display.
  * [Ident in Airport Search](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SEARCH.html#airport-search-ident)
  * [Override in Airport Search](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SEARCH.html#airport-search-override)
  * [Ident in Information and Tooltips](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INFO.html#airport-ident-info)
  * [Ident in Flight Plan Route Description](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/ROUTEDESCR.html#routedescr-airport-ident)
  * [Allow Window moving](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MENUS.html#allow-window-moving)

### General

* Changed weather download process to minimize user interface freezes during wind aloft or METAR downloads with slow internet connections. [#737](https://github.com/albar965/littlenavmap/issues/737)
* Correcting VATSIM weather address which was taken over wrongly from old versions in some cases. The wrong address caused quickly repeating downloads.
* Now allowing to set departure airport as alternate in the map context menu. The menu item was wrongly disabled before.
* Added estimated flight time to top of descent and destination to profile header.
* Menu `Weather` -> `Airport Weather` now allows to disable the weather source which also disables all file accesses. The airport weather menu item and toolbar button will disabled if this is selected.
* Added function to disable the moving of dock windows by click and drag on the title bar. Uncheck `Allow Window moving` in menu `Window` to avoid accidental movement of dock windows which might mess up the window layout. You can still resize the dock windows at the border.
* Fixed issue where flight plan calculation window header text was not updated on flight plan changes.
* Fixed crash when decoding procedures. Example: Sumburgh (EGPB), approach ILS 27, transition D064L for P3D scenery.
* Fixed crash that occured when moving flight plan legs in empty or one leg plan with the keyboard.
  Now updating context menu items in flight plan table accordingly.
* Showing status bar again which might be hidden after recent updates.

### MSFS

* Adapted MSFS scenery library loader to new scenery file structures in MSFS introduced in version 1.18.9. This is needed to avoid missing procedures. [#735](https://github.com/albar965/littlenavmap/issues/735)
* Several fixes in MSFS flight plan export. Approach transition waypoints are now removed. Removing airway for STAR entry waypoints. SID and STAR transitions can be used now. Keep in mind that some information will be lost when reloading MSFS PLN files. Several problems with MSFS flight plan import remain.
* Localizer approaches were not recognized when loading MSFS PLN files into *Little Navmap*. Fixed now.
* Corrected export for circling approaches and localizer backcourse approaches in MSFS PLN which can now be loaded.

### X-Plane

* Added ICAO, FAA, IATA and local airport codes to search result table as well as in information and tooltips. This is only used by X-Plane. Move the columns in the search result table out of the way by clicking and dragging the column header or shrink them to minimum if you're not an X-Plane user. Note that Navigraph additionally provides IATA codes  while FSX, P3D, and MSFS do not provide any additional official codes at all. [#706](https://github.com/albar965/littlenavmap/issues/706)
* Enabled search for the additional airport codes in ident field in airports tab. This means that *Little Navmap* matches all internal, ICAO, FAA, IATA or local idents to the search input.
* X-Plane internal idents (`X...`, five or more characters) are now hidden throughout the whole user interface except in information and tooltips if an airport has one or more official idents assigned. The internal ids might show up  occasionally, e.g. in the flight plan table when switching simulators.
* The flight plan route description now uses and outputs one of the official codes for airports if available.
* Fixed issues with X-Plane flight plan export where airports have an internal ident different from official ICAO and FAA codes.
* Fixed missing display for X-Plane airport flatten attribute.
* Fixed potential crash in search functions for airport.
* Resetting table layout for airport search since columns have changed. [#707](https://github.com/albar965/littlenavmap/issues/707)
* Added columns `faa` and `local` to airport table and removed column `xpident` in database schema. Database minor version updated to 20.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.15/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
