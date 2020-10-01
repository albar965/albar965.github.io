---
layout: post
title:  Little Navmap 2.6.1.beta released
date:   2020-09-30 14:00:00 +0200
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.6.1.beta/LittleNavmap-win-2.6.1.beta.zip) - [macOS](https://github.com/albar965/littlenavmap/releases/download/v2.6.1.beta/LittleNavmap-macOS-2.6.1.beta.zip) - [Linux \(64 bit, based on Ubuntu 20.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.6.1.beta/LittleNavmap-linux-20.04-2.6.1.beta.tar.gz) - [Linux \(64 bit, based on Ubuntu 16.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.6.1.beta/LittleNavmap-linux-16.04-2.6.1.beta.tar.gz)**

**Alternative download locations: [Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) -
[Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) -
[OneDrive](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)**

[**► Detailed Changelog for previous Version 2.6.0.beta**](/pages/26/littlenavmapchangelog.html)

[**► Screenshots of new 2.6 Features**](/pages/26/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.6 Versions**](/pages/26/littlenavmapmanuals.html)

**Please do not hesitate to let me know about bugs, inconsistencies and ideas for improvement.**

## Hotfix for the broken offline maps

For all operating systems. Includes a missing plugin to repair the offline map themes.

[**► LittleNavmap-2.6.1.beta-offlinemap-hotfix.zip**](https://github.com/albar965/littlenavmap/releases/download/v2.6.1.beta/LittleNavmap-2.6.1.beta-offlinemap-hotfix.zip)

## Important for MSFS Users

* Remove the MSFS Community folder from the ignore list in *Little Navmap*, `Options`, page `Scenery Library Database`
  if you added it. The exclusion to avoid the crash is not needed anymore.
* Update to the latest beta Navigraph navdata update for MSFS if you use it.
* Reload the scenery library if you use MSFS.

## Limitations

* Translations are not updated yet. The user interface might be a mix of your local language and
  English. Map legend not updated.
  Feel free to send me an email or ask in the [Avsim forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum/) if you like to contribute a translation of the program or the manual.
* The online and offline manuals are not updated yet. Neither the English nor the translated
  versions. Help buttons and links are functional but point to placeholder pages. Map legend not updated.
  Ask in the [Avsim forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum/) if you have questions.

## Known Issues

### MSFS

* *Little Navmap* cannot read SID and STAR from MSFS. Documentation about MSFS format changes are
  needed in SDK.
* MSFS multiplayer and real-time AI cannot be displayed. Needs SDK updates or more documentation.
* Simulator weather cannot be shown for MSFS since SimConnect weather functions are deprecated and
  do not deliver data. Needs update or documentation in MSFS SDK. Use NOAA weather which gives you
  the most up-to-date weather reports.
* MSFS has no clear concept of scenery order as far as I can see (`Content.xml` seems unreliable)
  and there is no information in the SDK. Add-ons are loaded by alphabetical order by Little Navmap.
  To put an add-on to the end of the loading list add a `z_` to the folder name, for example.
* Flight plan loading in MSFS is flawed and does not produce any error messages if it fails. Quite
  often MSFS cannot load its own plans correctly.
* Country names are missing in MSFS translation tables and are not available in *Little Navmap*, therefore.
* Add-ons using the `.fsarchive` encrypted format are not supported and most likely never will.

### Other

* Dock window layout in *Little Navmap* can change when resizing or maximizing window and back.
  Qt limitation.
* Window is restored in normal state when changing from a maximized window to fullscreen and back.
  This is a Qt limitation.
* The window layout might not be restored precisely on startup in some cases. This is a limitation
  in the used Qt library.
* The height of the elevation profile window cannot be reduced in some cases. Rearrange or move the
  elevation profile window to another position which usually solves this. Save the layout once you
  have a working one. This is a limitation in the used Qt library.
* Zooming with touchpad or magic mouse does not work properly on macOS. Use the navigation overlay
  or one of the other options on page `Map Navigation` in `Options` if you think it is unusable. This
  is a limitation in the used Qt library.
* Program hangs on macOS Big Sur. Investigating.

### Going back to stable *Little Navmap* 2.4.5 after trying the beta

The scenery databases of the new beta versions are not compatible with *Little Navmap* 2.4.5. Delete
the databases files from the settings folder of *Little Navmap* if you see crashes and exceptions
containing messages like `no such column`. You can find information  about the folder and the files
here in the documentation: [Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FILES.html#databases).

You can safely delete the following files since they can be created again by reloading the scenery library:

`little_navmap_fsx.sqlite`, `little_navmap_fsxse.sqlite`, `little_navmap_p3dv2.sqlite`,
`little_navmap_p3dv3.sqlite`, `little_navmap_p3dv4.sqlite`, `little_navmap_msfs.sqlite` and
`little_navmap_xp11.sqlite`

## Changes from Release 2.6.0.beta to 2.6.1.beta

### MSFS

* Fixed issue with `NOT NULL constraint failed:tmp_waypoint.ident Unable to fetch...` caused by
  incomplete waypoints emitted by MSFS BGL compiler. Navaids with empty names are now ignored and
  printed into the log with BGL file name. Do not forget to remove the community folder from
  exclusion list in *Little Navmap*.
* AI aircraft names are now correctly shown instead of the user aircraft name for all AI.
* Fix for update issues where wrong aircraft positions are emitted while user is in MSFS menu.
  These caused *Little Navmap* jumping back to the old position and wrong progress updates. Now
  omitting wrong positions with an invalid state like no groundspeed and position 0/0.
* Exporting MSFS flightplan now reverts type to `Direct` if using VFR to avoid MSFS changing plan
  to IFR.
* MSFS exported flight plans now have special characters like umlauts or accents replaced or
  removed. Note that MSFS cannot load flightplans that have special characters in the filename or
  path.
* Localizer heading for MSFS now saved correctly in scenery database.
* Fixed issues where the default instead of changed simulator paths were used in some dialog windows.
* Changed default MSFS Steam flight plan path to base folder `Microsoft Flight Simulator`
  (`LocalState` on MS installations).
* Also looking in `...\Official\OneStore` and `...\Official\Steam` folders for purchased add-ons now.
  These are added with add-on flag to the database and are shown italic and underlined on the map.
* Updating administrative names like city in airports now. This also corrects missing city and
  airport names for the Navigraph navdata update.
* Adapted to Navigraph navdata update 12 for MSFS. *Little Navmap* only reads required features which
  are: Airports, COM and ILS. Everything else is ignored and not needed since it can be updated with
  a more complete dataset by Navigraph directly for *Little Navmap*.
* Corrected ILS course for Navigraph update in simulator. Slight variations like for EDDM remain.

### Other

* Added option to restore window layout from last loaded file on startup. This is the file on top
  of the `Recent Window Layouts` menu. See options dialog on page `Startup`.
* Improved handling of dock window layout. Now applying dock state after window shown. This might
  cause a small visible layout change after loading but solves issues when restoring the layout.
* Fixed issue where layout of maximized windows was not restored properly.
* Fix for blinking aircraft when updating weather over SimConnect. This affected FSX, P3D and MSFS.
* Better sensitivity and handling for zooming when using touchpad (better, yet limited on macOS).
* Compass rose settings are now saved again from `Options` on page `Map Display 2`.
* Fixed issue where magnetic declination was not created correctly for locale which do not have a
  dot as decimal separator. Declination was 20 degrees off near VORDME STN
  in X-Plane, for example. #564
* Updated to world magnetic model 2020. This will be used to calculate X-Plane declination when
  loading the scenery database or as a fallback if the file `magdec.bgl` is not available.
* Changed drawing of online airspaces for better visibility. Add center circle.
* Fixed issue with long route legs causing garbled elevation display when using online elevation.
* Removed unused Marble OsmPlugin, Pn2 and Pnt Plugins.
* Added error message when trying to load missing KML file.
* Corrected route calculation to allow calculation of selected between last leg of a SID and
  first leg of an arrival procedure.
* Fixed issue where procedures disappeared with low detail settings.
* Clean up of user interface in flight plan calculation dock window to avoid window resizes due
  to error messages.
* Fixed error `Bind name "flightplan" does not exist` when importing logfiles from CSV or X-Plane.
* Display of time to next waypoint and fuel at next waypoint in progress tab corrected.
* Added new columns for distance flown and more to logbook search table.
* Fixed issue where NOAA weather was not updated despite showing download message.


**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.6/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
