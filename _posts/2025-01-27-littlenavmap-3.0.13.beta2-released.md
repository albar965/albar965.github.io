---
layout: post
title:  Little Navmap 3.0.13.beta2 released
date:   2025-01-27 12:00 +0100
categories: release
release-version: 3.0.13.beta2
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.13.beta2-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta2/LittleNavmap-win64-3.0.13.beta2-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.13.beta2.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta2/LittleNavmap-macOS-3.0.13.beta2.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.13.beta2.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta2/LittleNavmap-linux-ubuntu-22.04-3.0.13.beta2.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.13.beta2-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta2/LittleNavmap-linux-ubuntu-22.04-3.0.13.beta2-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.13.beta2-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta2/LittleNavmap-win32-3.0.13.beta2-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.13.beta2.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta2/LittleNavmap-linux-ubuntu-20.04-3.0.13.beta2.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.13.beta2-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta2/LittleNavmap-linux-ubuntu-20.04-3.0.13.beta2-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.13.beta2](https://github.com/albar965/littlenavmap/releases/v3.0.13.beta2) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a test release of Little Navmap that improves support for MSFS 2024 and fixes other small
issues. Please read the release notes below.**

Note that not all reported issues were fixed so far. See
[Release 3.0.13](https://github.com/albar965/littlenavmap/milestone/35). This will be done in the next
releases.

Translations and user manual are not yet updated.

### MSFS 2024 Scenery Library [#1198](https://github.com/albar965/littlenavmap/issues/1198)

There are limitations since Little Navmap has to load the complete scenery library through the MSFS
SimConnect interface and cannot rely on files anymore. All files used by Little Navmap from MSFS
2020 were dropped due to the streaming only approach of MSFS 2024. This required a full new data
compiler implementation.

Note that some of theses limitations can only be fixed by Asobo.

* The simulator has to run to load the scenery library.
* The simulator connection in Little Navmap has to be paused during loading. You will not see
  aircraft updates in Little Navmap but you can use Little Navmap normally while loading.
* Loading airports and navaids takes about 10 to 15 minutes. Better loading times need improvements
  and fixes in the SimConnect interface which has to provide a world wide list of navaids.
* A workaround is used to load all navaids which are not connected to procedures or airways until
  the SimConnect interface is fixed. Oceanic tracks can be loaded now. Note that this workaround
  does not ensure that really all available navaids are loaded.
* Detection of add-on airports is not possible. Right click on an airport icon on the map, the
  airport search result table or the flight plan table and use the function `Mark Airport as add-on`
  which will add a userpoint on top of an airport marking it as an add-on.
* Airports have no city, country or state/province names.
* Airport names are always in your local language as set in MSFS 2024.
* Neither closed runways nor closed airports can be recognized.
* Runways used by procedures at an airport do not always match. Example: EDDK, LSZR, LSZN, ENSB,
  EKRN, LFLO, LOWK and more where runways have been renamed recently in the real world. This can
  cause missing SID and STAR. You will see an orange warning message about runway mismatches in
  the procedure search tab of Little Navmap.
* The airport Istanbul Intl (LTFM) is missing in the stock data. Little Navmap will show the
  airport if you install an add-on.
* A workaround has to be used to detect if an airport has lighted runways or not. This information
  is missing in the SimConnect interface. This is not 100 percent reliable.
* MSFS 2020 provides around 42000 airports while MSFS 2024 has almost 84000 airports. Half of these
  are heliports.
* Airspaces are not available through SimConnect. You can use other sources for airspaces. See
  chapter
  [Little Navmap User Manual - Loading  Airspaces](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/AIRSPACELOAD.html)
  for more information and links to public airspace sources.
* Airport aprons are not available, only taxiways.
* Airline codes for parking are missing.
* Note that all fields in the load scenery library dialog are disabled when selecting MSFS 2024
  since no path is used.
* A warning dialog is shown when trying to compile MSFS 2024 with the 32-bit build.
* Note that loading airports via SimConnect allows to read encrypted add-on airports. You will not
  see the notification message about encrypted airports anymore for MSFS 2024.

### MSFS online flight planner

Note that the [MSFS online flight planner](https://planner.flightsimulator.com/) cannot import
valid MSFS 2024 flight plans. [#1234](https://github.com/albar965/littlenavmap/issues/1234)

## Changes from 3.0.13.beta1 to 3.0.13.beta2

### MSFS 2024

* Now detecting Navigraph navdata update to select correct scenery library mode automatically.
  Note that navaids are loaded incompletely to save time if this is detected since the Little Navmap
  database should be updated directly using the Navigraph FMS data manaeger.
* Fixed ILS detection. Previously some or all ILS were wrongly read as VOR stations.
* Fixed invalid runway references in ILS. As result ILS or localizers used in the flight plan were
  not shown in the elevation profile or the map.
* Corrected counting of ILS when loading scenery library.
* Now combining procedures having the same runway transitions. Runway transitions are now collapsed
  to parallel runways (indicated by e.g. `SID 16L, 16R`) or `All`.
* Now adding navaids not connected to procedures or airways to MSFS 2024 loading process. These are
  required to build Oceanic tracks or off-airways routes, for example. This function uses a
  workaround until SimConnect is improved to deliver a world-wide list of navaids.
* Now correcting odd altitude values by rounding. This affected procedure altitude restrictions,
  for example.
* Now calculating magnetic declination for all facilities except VOR using the World Magnetic Model
  instead of the partially wrong MSFS 2024 values.
* Fixed detection of military airports. Added new keywords for military names in other languages.

### Other

* Added keyboard shortcut `Ctrl+Shift+K` to preview all procedures. Now activating tree widget when
  pressing `Shift+F5` to activate the procedure search.
* Added missing portable script `Little Navmap Portable.command` to macOS build
* Broken taxiway paths being wider than 1000 ft are now omitted. Example: EDDF in MSFS 2020
  resulting in a large white area on top of the airport.
* Completely removed drawing of transparent paths and aprons using patterns. All are now opaque.
* Added workaround where co-located NDB and localizers with the same name preferred the NDB wrongly
  for procedures. This resulted in the ILS or localizer not being shown for related approaches.
  Example ENOV approach LDMB. Localizer and NDB are named HN there.
* Added hint how to fix wrong map theme path in error message window.
* Adapted German translation to new texts. Changed term `Prozedur` to more common `Verfahren`.
* Fixed broken build where Chinese translation was not available. [#1228](https://github.com/albar965/littlenavmap/issues/1228)
* Added Chinese translations for Qt components from project
  [qt_zh_CN.ts](https://github.com/niemingzhao/qt_zh_CN.ts) to fix not translated buttons. [#1228](https://github.com/albar965/littlenavmap/issues/1228)

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.13.beta2/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
