---
layout: post
title:  Little Navmap 3.0.13.beta1 released
date:   2025-01-14 15:00 +0100
categories: release
release-version: 3.0.13.beta1
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.13.beta1-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta1/LittleNavmap-win64-3.0.13.beta1-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.13.beta1.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta1/LittleNavmap-macOS-3.0.13.beta1.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.13.beta1.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta1/LittleNavmap-linux-ubuntu-22.04-3.0.13.beta1.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.13.beta1-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta1/LittleNavmap-linux-ubuntu-22.04-3.0.13.beta1-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.13.beta1-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta1/LittleNavmap-win32-3.0.13.beta1-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.13.beta1.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta1/LittleNavmap-linux-ubuntu-20.04-3.0.13.beta1.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.13.beta1-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.13.beta1/LittleNavmap-linux-ubuntu-20.04-3.0.13.beta1-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.13.beta1](https://github.com/albar965/littlenavmap/releases/v3.0.13.beta1) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a test release of Little Navmap that adds support for MSFS 2024 and fixes other small
issues. Please read the release notes below.**

Note that not all reported issues were fixed so far. See
[Release 3.0.13](https://github.com/albar965/littlenavmap/milestone/35). This will be done in the next
releases.

Translations and user manual are not yet updated.

The MSFS 2024 Steam installation should work but is untested. Do not hesitate to give feedback if
you see issues.

# Version 3.0.13.beta1

## Changes from 3.0.12 to 3.0.13.beta1

### MSFS 2024 Scenery Library [#1198](https://github.com/albar965/littlenavmap/issues/1198)

There are limitations since Little Navmap has to load the complete scenery library through the MSFS
SimConnect interface and cannot rely on files anymore. All files used by Little Navmap from MSFS
2020 were dropped due to the streaming only approach of MSFS 2024. This required a full new
compiler implementation.

Note that some of theses limitations can only be fixed by Asobo.

* The simulator has to run to load the scenery library.
* The simulator connection in Little Navmap has to be paused during loading. You will not see
  aircraft updates in Little Navmap while loading.
* Loading airports and navaids takes about 10 minutes. Future optimizations are planned.
* Detection of add-on airports is not possible. Right click on an airport icon on the map, the
  airport search result table or the flight plan table and use the function `Mark Airport as add-on`
  which will add a userpoint on top of an airport marking it as an add-on.
* Airports have no city, country or state/province names.
* Airport names are always English. Translations or exonyms are not available.
* Neither closed runways nor closed airports can be recognised.
* About 140 ILS of 4100 are not connected to runways and therefore won't be shown in the Little Navmap
  elevation profile. Example: LOWI OEV heading West.
* Runways used by procedures which are present at an airport do not always match. Example: EDDK, LSZR,
  LSZN, ENSB, EKRN, LFLO, LOWK and more where runways have been renamed recently in the real world.
* The airport Istanbul Intl (LTFM) is missing in the stock data. Little Navmap will show the airport
  if you install an add-on.
* A workaround has to be used to detect if an airport has lighted runways or not since this
  information is missing in the SimConnect interface. This is not 100 percent reliable.
* MSFS 2020 provides around 42000 airports while MSFS 2024 has almost 84000 airports. Half of these
  are heliports.
* Airspaces are not available through SimConnect. You can use other sources for airspaces. See chapter
  [Little Navmap User Manual - Loading Airspaces](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/AIRSPACELOAD.html)
  for more information and links to public airspace sources.
* Airport aprons are not available, only taxiways.
* Airline codes for parking are missing.
* Navaids like waypoints, VOR, NDB or ILS can only be loaded if they are connected to a procedure,
  a runway or an airway. This means that waypoints in the North Atlantic needed for Oceanic tracks
  will be missing, for example. LOWI localizer OEJ heading East cannot be loaded and is missing on
  the map. As a result, around 70000 navaids are missing from the map due to SimConnect limitations,
  which do not allow the world-wide enumeration of navaids.
* Full SID and STAR are duplicated for each runway. This will be fixed in one of the next releases
  of Little Navmap and does not affect functionality.
* Note that all fields in the load scenery library dialog are now disabled when selecting MSFS 2024
  since no path is used.
* A warning dialog is shown when trying to compile MSFS 2024 with the 32-bit build.
* Note that loading airports via SimConnect allows to read encrypted add-on airports. You will not
  see the notification message about encrypted airports anymore for MSFS 2024.

### MSFS 2024 Other

* Added detection of MSFS 2024 Steam and Microsoft Store installations. Detection of Steam
  installations is untested but should work.
* Added reading and writing of MSFS 2024 flight plans to export from menu `File` and multiexport.
  `Ctrl+Shift+F` now saves a PLN file for MSFS 2024 from the Little Navmap menu `File`. Note that you
  have to load the flight plans in the MSFS 2024 EFB after starting a free flight. [#1216](https://github.com/albar965/littlenavmap/issues/1216)
* The keyboard shortcut `Ctrl+Shift+B` is now used for MSFS 2020 PLN files. [#1216](https://github.com/albar965/littlenavmap/issues/1216)
* Note that detailed user or AI/multiplayer aircraft descriptions are not available in MSFS 2024
  since aircraft files are not accessible.

### MSFS Simulators

* Added TACAN and VORTAC station types for all MSFS simulators including display of channel.
* Removing airport vehicles now from all MSFS simulator AI traffic.
* Now flagging all VOR and NDB waypoints as artificial in FSX, P3D and MSFS simulators to hide them
  in Little Navmap. These are not real waypoints and are used only internally to build the
  airway and routing network system.
* Now omitting duplicate waypoints with invalid regions in all MSFS simulators. Also using better
  duplicate waypoint removal for MSFS 2020 now.
* Added exclusion of traffic and AIRAC BGL from loading for MSFS 2020 to avoid error messages in
  the log.

### Other

* Fixed issue where ILS could not be found for procedure if airport ident was empty. This resulted
  in recommended navaids not being resolved in procedures (red error message in procedure search).
* Fixed bug where X-Plane 11/12 FMS exported FMS format had departure and destination wrongly swapped.
* Fixed crash when selecting airport as alternate in airport search result table or in logbook
  where `Add as Alternate` was wrongly enabled despite having an empty route. [#1222](https://github.com/albar965/littlenavmap/issues/1222)
* Fixed drawing issue where exact vertical lines were not shown in Mercator projection. This
  affected measuring lines, flight plan legs, airways and more. Example: Airway L888 between PEXUN
  and SANLI. [#1221](https://github.com/albar965/littlenavmap/issues/1221)
* Fixed disappearing large distance rings when zooming close in. [#1207](https://github.com/albar965/littlenavmap/issues/1207)
* Removed AUSOTS track system since it is discontinued. Now uses preferred routes.
* Fixed airway and ILS text background affected by airspace display. Background color for labels
  was incorrect. [#1207](https://github.com/albar965/littlenavmap/issues/1207)
* Removed white fill for unknown runway surface and replaced it with light gray for better
  visibility in dark and light map themes.
* Fixed wrong transponder display `0000` shown for ships and other vehicles. Now omitted.
* Added map theme `MapBox Streets`. Remove an already installed map theme if you have one.
  Otherwise, Little Navmap will show error messages hinting you to do so.
* Added airway type description to flight plan table configuration to make airway suffixes
  `L` (low) and `H` (high) clearer.
* Updated to World Magnetic Model WMM2025 coefficients for more accurate declination calculation
  when using X-Plane and MSFS simulators.
* ILS feather geometry is now using a minimum width of 2 degrees to avoid ILS feathers shown as
  lines in all simulators.
* Improved on-ground approximation to avoid wrong takeoff detection when hovering with helicopters.
* Fixed more disambiguations for translation texts to avoid wrong translations.
* Changed certain texts to be untranslatable to avoid issues with database indicators.
* Added disambiguations for translation texts to avoid same translation for procedure
  restrictions and airway types, for example.
* Updated translation files and add Chinese back again.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.13.beta1/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
