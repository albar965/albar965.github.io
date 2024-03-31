---
layout: post
title:  Little Navmap 3.0.6 released
date:   2024-03-31 16:00 +0200
categories: release
release-version: 3.0.6
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.6-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.6/LittleNavmap-win64-3.0.6-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.6.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.6/LittleNavmap-macOS-3.0.6.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-3.0.6.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.6/LittleNavmap-linux-22.04-3.0.6.tar.gz)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.6-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.6/LittleNavmap-win32-3.0.6-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-20.04-3.0.6.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.6/LittleNavmap-linux-20.04-3.0.6.tar.gz)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.6](https://github.com/albar965/littlenavmap/releases/v3.0.6) \(scroll down to `Assets`\).

**Alternative Download Locations - Look into sub-folders for beta, development or release candidates:**

**► [Alternative Download Locations](https://albar965.github.io/downloads.html)**

## Notes

**This is a stable release of Little Navmap which fixes several bugs and adds a few
improvements and new features.**

**Notable changes:** New add-on airport filter modes in menu View.
Airport and navaid links in aircraft progress tab.
Logbook status and collected aircraft performance now kept between restarts.

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

The updated online user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/).

See here for user manual downloads:
[User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable).

A big thank you to all who reported bugs and issues!

## Changes from 3.0.5 to 3.0.6

### Flight Plan and Procedures

* Fixed wrong warning for runway mismatches in procedure search. Showed unneeded mismatch warning
  for runways without procedure. Example: KSTK.
* Fixed issue where SID/STAR could not be reloaded due to wrongly detected runway mismatch when
  using the MSFS scenery library. Example: EDDE ERNE1V EDDK/I14L
  could not load ERNE1V when loading the flight plan for MSFS.
* Flight plan name now updated in window title bar when using `Save` or `Save as`.
* Now correctly assigning `ALL` as runway designator to SID/STAR having no runway assignments in MSFS.
  Reload the scenery library if you use MSFS.
* Fixed issue where STAR could not be loaded from MSFS PLN file. Example: KIAD/30 ANJLL4.DNERO KLAX/06L.
* Fixed crash when modifying flight plan.

### Flight Plan Route Description

* Fixed issue where STAR keyword was not generated from flight plan in route description.
  Now always adding generic SID/STAR keywords in export formats like the Rotate MD-80 .txt format
  to avoid issues when loading plan in FMC.
* Fixed issue with alternate airports having the same STAR as destination.
  Example: `KVHN SSO SUNSS8 KDVT KPHX` showed a wrong error message and used KPHX as destination.
* Fixes in route description where description `MUHA EPMAR3 MAXIM SNDBR3 KMIA` was not recognized
* Added `Ctrl+Return` shortcut to create flight plan from route description.
* Fixed issues where airways were not recognized. Example: `KCNM WHOLE EWM J4 SUNSS8.SSO KDVT` where
  J4 was added as a far off NDB.
* Fixed plan reset to VFR in route description. Flight plan type is now set from current flight plan
  type in window `Flight Planning` when clicking `Load from Flight Plan`.

### Flight Plan Export

* Reverted change for degree sign `°` vs. `*` in MSFS PLN flight plan files to avoid issues with
  third-party software not capable to read this MSFS compatible format.
* Added new multiexport format `Microsoft Flight Simulator 2020 format using "*" as degree sign`
  for cases where the simulator or add-ons  cannot deal with the `°` sign.
* Removed obsolete annotated PLN export. Little Navmap can still read this format from old flight
  plans.

### Map Display

* Added three add-on airport map display options to menu `View` and toolbar.
  See [User Manual - View Menu - Airports](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#airports).
  1. `Add-on no override` (`Ctrl+Alt+O`): Add-on airports are shown like normal airports.
  2. `Add-on override zoom`  (`Ctrl+Alt+Z`): Add-on airports override zoom distance only but filters
     like `Soft Surface` can still be used to hide them.
  3. `Add-on override zoom and filter` (`Ctrl+Alt+Y`): Add-on airports override zoom distance and
     filters, i.e. are always shown. Filters like `Soft Surface` have no effect on add-on airports.
* Added airport filter preset `Show only add-on airports` in menu `View` and toolbar.
* Map theme shortcuts for included themes can now be defined in DGML file.
* Assigned shortcuts `Ctrl+Alt+0` to `Ctrl+Alt+7` for all default free included map themes.
  These do not change when adding additional themes.
* Fixed disappearing related navaids when drawing procedures. This happened when navaid was outside
  the bounding box of the flight plan.
* Added options for airport runway labels and taxiway label size on page `Map Display` in section
  `Airports`.

### User Interface

* Replaced outdated airway types `Victor` and `Jet` with `Low` and `High` everywhere in the program.
* Fixed too small table cell height on Windows with the high DPI option switched off.
* Now also closing the startup image splash window in all dialog windows to avoid being hidden.
  As a result, the program looked like frozen since the hidden dialog window blocked input.
* Fix in Dutch shortcut translation ('Ctrl+D' vs. 'Ctrl+Down') which overlapped with other keys.
* More user interface improvements.
* Minimum number of trail points lowered to 1000.

### Aircraft Progress

* Added map, information and procedure links in progress tab for destination airport, top of climb,
  top of descent, next waypoint and related navaids.
* Fixed wrong next waypoint indication when flying missed approach.

### Logbook

* Logbook takeoff and landing detection is now kept for program restart.
* Improved logbook entry creation to avoid creating of unneeded entries. A flight can now be continued
  after program restart and logbook entry is updated accordingly.
* Now detecting off-airport takeoff and landing. Logbook entries get coordinates in degree/minute
  format as departure and landing position in this case.

### Other

* Translations updated. Thanks to Flavio, Patrick and Ricardo!
* Updated user manual for new features and changes.
* The aircraft performance collection now keeps results on restart. Note that you have to restart
  the collection manually by clicking in menu `Aircraft` -> `Restart Aircraft Performance Collection`,
  the button in the window or `File` -> `Reset all for a new Flight`.
* Now adding backup log file `abarthel-little_navmap.log.1` to issue and crash reports
* Added new X-Plane 12 VASI types `APAPI_L` and `APAPI_R`.
* Fixed issue where X-Plane airways had wrong type assigned. Example:
  EVMON to PAPAL airway Z8 was wrongly declared Jet. #1111
* Corrected VOR range for X-Plane data to use 130 NM for "unspecified but likely high power VOR".

**🐇🐇🪺🪺 Happy Easter! 🪺🪺🐇🐇**


**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.6/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

