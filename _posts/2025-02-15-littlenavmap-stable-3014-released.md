---
layout: post
title:  Little Navmap 3.0.14 released
date:   2025-02-15 13:00 +0100
categories: release
release-version: 3.0.14
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.14-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.14/LittleNavmap-win64-3.0.14-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.14.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.14/LittleNavmap-macOS-3.0.14.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.14.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.14/LittleNavmap-linux-ubuntu-22.04-3.0.14.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.14-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.14/LittleNavmap-linux-ubuntu-22.04-3.0.14-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.14-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.14/LittleNavmap-win32-3.0.14-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.14.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.14/LittleNavmap-linux-ubuntu-20.04-3.0.14.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.14-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.14/LittleNavmap-linux-ubuntu-20.04-3.0.14-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.14](https://github.com/albar965/littlenavmap/releases/v3.0.14) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a stable version of Little Navmap which adds support for MSFS 2024 and fixes several
issues, including X-Plane related ones.**

Translations and user manual have been updated.

### MSFS 2024 Scenery Library [#1198](https://github.com/albar965/littlenavmap/issues/1198)

There are limitations since Little Navmap has to load the scenery library through the MSFS 2024
SimConnect interface and cannot rely on files anymore. All files used by Little Navmap from
MSFS 2020 were dropped due to the streaming only approach of MSFS 2024. This required a full new data
compiler implementation.

Please read
[Frequently asked Questions - MSFS 2024 Scenery Library Limitations](https://albar965.github.io/littlenavmap-faq.html#problems-scenery-msfs24)
for a detailed list of limitations.

### MSFS online flight planner

Note that the [MSFS online flight planner](https://planner.flightsimulator.com/) cannot import
valid MSFS 2024 flight plans. You can still load flight plans copying the Little Navmap flight plan
route description (see menu `Flight Plan`) and pasting it into the online flight planner. This has
to be fixed by the developers of the MSFS online flight planner. [#1234](https://github.com/albar965/littlenavmap/issues/1234)

# Version 3.0.14

## Changes from 3.0.12 to 3.0.14

### MSFS 2024 [#1198](https://github.com/albar965/littlenavmap/issues/1198) and [#1216](https://github.com/albar965/littlenavmap/issues/1216)

* Loading of navaids is based on airport procedure references. Then starting with these the
  airway/route network is traversed to collect further navaids. Therefore, the long loading time of
  10 to 15 minutes you have to expect.
* A workaround has to be used to load navaids which are not connected to procedures or airways.
  These disconnected navaids are required to build Oceanic tracks or off-airway routes, for example.
  The workaround has to be used until SimConnect is improved to provide a worldwide list of navaids.
* The Navigraph navdata update is detected in folder `Community` to select the correct scenery
  library mode in Little Navmap automatically. Note that navaids are loaded incompletely in this mode
  to save time. The Little Navmap database should be updated directly using the Navigraph FMS data
  manager.
* Procedures having the same runway transitions are combined. Runway transitions are collapsed to
  parallel runways (indicated by `SID 16L, 16R`, for example) or `All` opposed to MSFS 2020 where
  procedures are duplicated.
* Magnetic declination for all facilities except VOR is calculated using the World Magnetic Model 2025
  instead of the partially off MSFS 2024 values.
* Added reading and writing of MSFS 2024 flight plans to export from menu `File` and multiexport.
  `Ctrl+Shift+F` now saves a PLN file for MSFS 2024 from the Little Navmap menu `File`. Note that you
  have to load the flight plans in the MSFS 2024 EFB after starting a free flight. This format does
  not support selection of a departure parking position.
* The keyboard shortcut `Ctrl+Shift+B` is now used for MSFS 2020 PLN files.
* From 3.0.13.beta2: Fixed issue with missing and broken airways.
* From 3.0.13.beta2: Now extracting aircraft ICAO designator (`BE80` or `C172`, for example) from
  MSFS 2024 to avoid problems with performance collection.

### Scenery Library

* Added TACAN and VORTAC station types for all MSFS simulators including display of channel.
* Now flagging all VOR and NDB waypoints as artificial in FSX, P3D and MSFS simulators to hide them
  in Little Navmap. These are present in the simulator but are not real waypoints and are used only
  internally to build the airway network.
* From 3.0.13.beta2: Fixed issues where airways were not built correctly reading X-Plane data.
  Examples which did not read:
  `ZBAA IDKEX B339 ASILA A575 INTIK Y655 AROGU A575 KD A308 ML A300 RUBOR T448 SOPUS USSS`,
  `ZUCK PINAB W80 WFX W179 OMBON B330 GOBIN W66 NUKTI B215 HAM W99 AGOXA ZWWW` and
  `ZUCK UNRIX W180 BONSA W91 IDSID W30 MEBNA ZPPP` [#1219](https://github.com/albar965/littlenavmap/issues/1219)
* From 3.0.13.beta2: Fixed issue where airways were built using wrong navaids. Example: The NDB
  BM/UH exists twice using this ident/region combination and the Little Navmap airway builder
  selected the wrong and far away NDB to build the airway A800. [#1237](https://github.com/albar965/littlenavmap/issues/1237)
* Fixed detection of military airports. Added new keywords for military names in other languages.
* Broken taxiway paths from MSFS 2020 being wider than 1000 ft are now omitted. Example: EDDM in
  MSFS 2020 resulting in a big white area drawn on top of the airport when zooming closer.
* ILS feather geometry is now using a minimum width of 2 degrees to avoid ILS feathers shown as
  lines.
* Updated to World Magnetic Model 2025 for more accurate declination calculation when using X-Plane
  and MSFS simulators.

### Map

* Removed drawing of transparent paths and aprons using patterns. All are now opaque.
* Fix for wrong drawing of aircraft trail around anti-meridian resulting in straight horizontal lines.
* Default flight plan display and highlight options changed. Now using transparent flight plan line
  and all highlights. This affects only new users. Go to options on page `Map Flight Plan` to enable
  the transparency manually.
* From 3.0.13.beta2: Fixed drawing issue where exact vertical lines were not shown in Mercator
  projection. This affected measuring lines, flight plan legs, airways and more. Example: Airway L888
  between PEXUN and SANLI. [#1221](https://github.com/albar965/littlenavmap/issues/1221)
* Fixed disappearing large distance rings when zooming close in. [#1207](https://github.com/albar965/littlenavmap/issues/1207)
* Corrected airway and ILS text background affected by airspace display. Background color for
  labels was incorrect. [#1207](https://github.com/albar965/littlenavmap/issues/1207)
* Removed white fill for unknown runway surface and replaced it with light gray for better
  visibility in dark and light map themes.
* Removed wrong transponder display `0000` shown for ships and other vehicles.
* Added map theme `MapBox Streets`. Remove any map theme using the same name if you have one
  installed. Otherwise, Little Navmap will show error messages hinting you to do so.
* From 3.0.13.beta2: Removing airport vehicles from all MSFS simulator AI traffic. This can result
  in missing traffic when using AI traffic tools which supply the wrong vehicle category. Only
  vehicle categories `Airplane`, `Helicopter` and `Boat` are shown. All others are disregarded.
* From 3.0.13.beta2: Fix for missing distance at first missed approach leg.
* From 3.0.13.beta2: Fixed issue where wrongly sized images were returned to the web interface
  which resulted in an  off/displaced image in the web interface. This appeared when using a user
  interface scale (125 % or 150 %, etc.) on high DPI screens on the computer running Little Navmap.
* From 3.0.13.beta2: Image export now uses more precise map bounds as seen on the screen and uses
  correct image sizes when using a user interface scale.

### Flight Plan, Procedures and Aircraft Progress

* Added keyboard shortcut `Ctrl+Shift+K` to preview all procedures.
* Now activating tree display when pressing `Shift+F5` to activate the procedure search. This
  allows navigating through procedures in the tree   after pressing the shortcut.
* Added hint in flight plan calculation dialog window to add procedures before calculating flight plan.
* From 3.0.13.beta2: Now always adding SID exit and STAR entry waypoint for SimBrief export.
  Example: `LFTH RUBIT XAMAL USANO BASIP EGHIN EGHI1D LIMJ` [#1205](https://github.com/albar965/littlenavmap/issues/1205)
* Fixed issue where ILS could not be found for procedures if airport ident was empty. This resulted
  in recommended navaids not being resolved in procedures (red error message in procedure search).
* Fixed bug where X-Plane 11 and 12 exported FMS formats had departure and destination wrongly swapped.
* Fixed crash when selecting airport as alternate in airport search result table or in logbook. The
  function `Add as Alternate` was wrongly enabled despite having an empty route. [#1222](https://github.com/albar965/littlenavmap/issues/1222)
* Added airway type description to flight plan table configuration to make the meaning of airway
  suffixes `L` (low) and `H` (high) clear.
* Removed Australian AUSOTS track system since it is discontinued. Now uses preferred routes.
* Added workaround where co-located NDB and localizers with the same name preferred the NDB wrongly
  for procedures. This resulted in the ILS or localizer not being shown for related approaches.
  Example ENOV approach LDMB. Localizer and NDB are both named HN there.

### Other

* Improved on-ground approximation to avoid wrong takeoff detection when hovering with helicopters.
* Added missing portable script `Little Navmap Portable.command` mentioned in the user manual to macOS build.
* Added hint explaining how to fix wrong map theme path in error message window.
* Removed animated logo element in web interface since it might cause display issues in plugins.
* Better message in information weather display if not connected to simulator.

### Translations

* Added disambiguation for translation texts to avoid same translation for procedure restrictions
  and airway types, for example.
* Updated Brazilian Portuguese translation by Ricardo.
* Updated Italian translation by Flavio.
* Updated French translation by Patrick.
* Updated German translation. Changed term `Prozedur` to more common `Verfahren`.
* Enabled Chinese translation again and update it by Eyderoe
* Added Chinese translations for Qt components from project
  [qt_zh_CN.ts](https://github.com/niemingzhao/qt_zh_CN.ts) to fix not translated buttons. [#1228](https://github.com/albar965/littlenavmap/issues/1228)

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.14/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
