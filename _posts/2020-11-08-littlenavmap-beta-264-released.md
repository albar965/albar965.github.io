---
layout: post
title:  Little Navmap 2.6.4.beta released
date:   2020-11-08 12:00:00 +0100
categories: release
---

## Links

[**► Detailed Changelog for previous major update 2.6.0.beta**](https://albar965.github.io/pages/26/littlenavmapchangelog.html)

[**► Screenshots of new 2.6 Features**](https://albar965.github.io/pages/26/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.6 Versions**](https://albar965.github.io/pages/26/littlenavmapmanuals.html)

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.4.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.4.beta/LittleNavmap-win-2.6.4.beta.zip)

[**► macOS** - LittleNavmap-macOS-2.6.4.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.4.beta/LittleNavmap-macOS-2.6.4.beta.zip)

[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.4.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.4.beta/LittleNavmap-linux-20.04-2.6.4.beta.tar.gz)

[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.4.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.4.beta/LittleNavmap-linux-16.04-2.6.4.beta.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)

[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)

[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

## Important

* _Little Navmap_ might ask again to create the recommended folder structure for files. This can happen once after updating translations since the folder names depend on the selected language. Let the program create the paths if you like to use them and move your files accordingly.
* Update to the latest beta Navigraph navdata update for MSFS if you use it.
* Reload the scenery library.
* The manual was not updated yet. Neither the English nor the translated version. Help buttons and links are functional but point to placeholder pages.

## Known Issues

### MSFS

* _Little Navmap_ cannot read SID and STAR from MSFS. Documentation about MSFS format changes are needed in SDK.
* MSFS multiplayer and real-time AI cannot be displayed yet. These do not appear in the SimConnect interface.
* Simulator weather cannot be shown for MSFS since SimConnect weather functions are deprecated and do not deliver data. Needs update or documentation in MSFS SDK. Use NOAA weather which gives you the most up-to-date weather reports.
* MSFS seems to have no clear concept of scenery order (`Content.xml` seems unreliable) and there is no information in the SDK about this. Add-ons are loaded by alphabetical order by _Little Navmap_. To put an add-on to the end of the loading list add a `z_` to the folder name, for example.
* Flight plan loading in MSFS is flawed and does not produce any error messages if it fails. Quite often MSFS cannot load its own plans correctly.
* Country names are missing in MSFS translation tables and are not available in _Little Navmap_, therefore.
* Add-ons using the `.fsarchive` encrypted format are not supported. _Little Navmap_ will show only the stock airport instead of the add-on if a package is locked down like this.
* Some aircraft mods do not report correct fuel flow to work around simulator limitations. This cannot be fixed in _Little Navmap_.
* Some airports files like `LEMG.bgl` cannot be read due to unknown format. _Little Navmap_ reports `Error: readInt for file "...OMITTED.../LEMG.bgl" failed. Reason 1`. Exclude the airport file from reading in options on page `Scenery Library Database` or simply ignore the message. The stock LEMG and all other airports are not affected by this.

### Other

* Dock window layout in _Little Navmap_ can change when resizing or maximizing window and back. Qt limitation.
* Window is restored in normal state when changing from a maximized window to fullscreen and back. This is a Qt limitation.
* The flight plan calculation might pop up shortly or the main window might flicker when starting the program. This can be ignored.
* The height of the elevation profile window cannot be reduced in some cases. Reset to default window layout which fixes this. Rearrange or move the elevation profile window to another position which usually solves this. Save the layout once you have a working one. This is a limitation in the used Qt library.
* Zooming with touchpad or magic mouse does not work properly on macOS. Use the navigation overlay or one of the other options on page `Map Navigation` in `Options` if you think it is unusable. This is a limitation in the used Qt library.

### Going back to stable _Little Navmap_ 2.4.5 after trying the beta

The scenery databases of the new beta versions are not compatible with _Little Navmap_ 2.4.5. Delete the databases files from the settings folder of _Little Navmap_ if you see crashes and exceptions containing messages like `no such column`. You can find information  about the folder and the files here in the online documentation in chapter [Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FILES.html#databases).

You can safely delete the following files since they can be created again by reloading the scenery library:

`little_navmap_fsx.sqlite`, `little_navmap_fsxse.sqlite`, `little_navmap_p3dv2.sqlite`, `little_navmap_p3dv3.sqlite`, `little_navmap_p3dv4.sqlite`, `little_navmap_msfs.sqlite` and `little_navmap_xp11.sqlite`

**Do not delete any other databases which contain userpoints and the logbook entries, for example.**

## Changes from 2.6.3.beta to 2.6.4.beta

* Added region codes again to MSFS flight plan export. Missing region codes resulted in empty waypoints when loading into MSFS.
* Corrected runway surface for longest runway of airports which was not determined correctly for add-on airports while reading scenery library from MSFS.
* Calculation for selected flight plan legs corrected. Showed `Cannot calculate flight plan between selected legs.` for a correct selection between procedures.
* All context menus now allow correct selection for departure or arrival procedures for round trips where departure is equal to destination.
* Fix for missing preferences menu on macOS which happens for some translations.
* Now excluding all alternate airports more than 1000 NM from destination from parsing in route description. Problem was `KYIP METRO2 DUNKS J70 PMM KBIV` read PMM as far alternate airport instead of VOR.
* Removed runway smoothness indication for all simulators except X-Plane.
* Moved menu `Airspace Sources` from view menu to `Scenery Library` -> `Airspace Libraries`.
* Removed `Scenery Library` -> `Show Database Files` menu item since it is a duplicate of `Tools` -> `Files and Directories` -> `Show Database Files` which is doing the same.
* Saving the LNMPLN flight plan format with multiexport now avoids showing save as dialog when clicking save.
* Added missing fixes (like the inaccurate scalebar) from 2.6.0.beta for map overlays to Linux versions.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.6.4.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
