---
layout: post
title:  Little Navmap 2.8.10 released
date:   2023-04-07 16:00 +0200
categories: release
release-version: 2.8.10
---

### Direct Download (outdated Version)

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.10.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.10/LittleNavmap-win64-2.8.10.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.10.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.10/LittleNavmap-macOS-2.8.10.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.10.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.10/LittleNavmap-linux-22.04-2.8.10.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.10.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.10/LittleNavmap-win32-2.8.10.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.10.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.10/LittleNavmap-linux-20.04-2.8.10.tar.gz)

## Notes

**This is a stable release of *Little Navmap* which fixes small bugs, crashes and adds small improvements.**

**X-Plane: Update your Little Xpconnect installation as well with the included version 1.0.37 to
fix issues with AI injection tools.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

The online user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/).

See here for user manual downloads:
[User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable).

A big thank you to all who reported bugs and issues!

Special thanks to Max Hille for finding the issue with Xpconnect on Linux and X-Plane 12!

## MSFS Notes

**The active pause problem was fixed with the MSFS version SU12.**

**Loading a flight plan with user-defined points placed at the at the North Pole has been fixed
with MSFS version SU12.**

See also [MSFS Common Problems](https://albar965.github.io/littlenavmap-faq.html#problems-msfs) in the FAQ.

## Changes from 2.8.9 to 2.8.10

* Navigraph selection is now remembered for each simulator selection separately. This means that
  the Navigraph selection is automatically changed when switching between simulators. The simulator
  and Navigraph selection is reset on the first startup on update. Use the menu item
  `Scenery Library` -> `Validate Scenery Library Settings` to check your settings.
* Created a clone of the scenery library settings validation menu item `Scenery Library` ->
  `Validate Scenery Library Settings` on the toolbar.
* Added support for ActiveSky for X-Plane 12. *Little Navmap* detects the ASX 12 files
  automatically when selecting the X-Plane 12 scenery library.
* Changed flight plan export for TDS GTNXi to add waypoint coordinates for disambiguation as well
  as procedures. This should help with flight loading issues due to navdata cycle mismatches.
* Added TDS GTNXi export using waypoints only.
* Density altitude added to airport weather report in window `Information` on tabs
  `Airport` -> `Weather`.
* Added density altitude to aircraft progress if aircraft is on ground. This is disabled per
  default and can be enabled in the menu `Tools` -> `Aircraft Progress Display Options` by checking
  `Density Altitude` in branch `Environment`.
* ILS, GLS and RNP approach slopes in elevation profile can now be forced to display for all
  approach types:
    * Disable ILS or GLS/RNP on the toolbar or in the menu `View` -> `Navaids` to see only flight
      plan related navaids on the map and approach related navaids in the elevation profile. This means
      you won't see an ILS slope for a VOR approach, for example.
    * Enable ILS to see slopes in the elevation profile independent of the approach type. A
      destination runway or an approach has to be selected to see the slope.
* Menu item `Map` -> `Remove all Highlights and Selections` (shortcut `Ctrl+H`) now also clears
  the multi procedure preview (`Preview all Procedures` in procedure search context menu).
* Added link `Show Procedures` besides link `Map` to related airport information tabs to avoid
  context menu use for departure or destination airport.
* Now copying flight plan cruise altitude over to the flight plan calculation window when opening
  or changing it in flight plan window.
* More accuracy for flight plan calculation preference slider.
* Added blue question mark help buttons to information and aircraft progress windows linking to the
  related user manual chapters.
* Fixed userpoints category not being enabled after assigning a new type to a userpoint.
  This avoids the confusing disappearance of a userpoint after changing the type.
* Added workaround for missing translations in MSFS for AI or multiplayer aircraft. Needs a reload
  of the scenery library.
* Adjusted airport rating calculation for MSFS. Now setting airports having only automatically
  generated apron snippets to zero rating which equal to `Empty Airport`. Fix needs reloading
  the scenery library.
* Now using correct localizer width in map for Navigraph and MSFS navaids. Localizer width added to
  ILS information display in tab `Navaids` and map display depiction. Note that this is only
  available for FSX, P3D, MSFS and future Navigraph databases. Needs a reload of the scenery
  library. [#1011](https://github.com/albar965/littlenavmap/issues/1011)
* Wind pointer size on top of map now depends on set font size for map.
* Corrected VOR to/from courses which were omitted before or after procedures.
* Fixed crash when using the MSFS toolbar plugin or other web services of *Little Navmap*.
* Fixed issue with Italian translation using wrong units in search window. [#1012](https://github.com/albar965/littlenavmap/issues/1012)
* Issue with disappearing navaids being part of missed approach selection fixed.
* Updated included SimConnect.dll in 64-bit build for MSFS to SDK 0.21.0.0.
* Other corrections to map drawing of procedures and selected legs.
* Updated user manual for functionality changes.

### Little Xpconnect X-Plane plugin Version 1.0.37

* Fixed fetching of aircraft registrations/tailnumbers for AI and online aircraft.
* Better logic to read AI aircraft from add-ons where some use the new TCAS interface and some the
  old multiplayer interface.
* Added version number to menu item `Little Xpconnect`.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.10/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
