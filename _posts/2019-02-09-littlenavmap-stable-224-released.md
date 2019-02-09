---
layout: post
title:  Little Navmap 2.2.4 released
date:   2019-02-09 10:00:00 +0100
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.2.4/LittleNavmap-win-2.2.4.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.2.4/LittleNavmap-macOS-2.2.4.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v2.2.4/LittleNavmap-linux-2.2.4.tar.gz)**

**Alternative download locations: [Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) - [Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► User manuals for _Little Navmap_ and _Little Navconnect_ in all formats and languages.**](/manuals.html)

[**► Features**](/littlenavmap.html)

## Notes

**This release contains small bugfixes, new keyboard shortcuts, enabled IVAO online network, AviTab export and more flight plan export formats.**

## Changes from Release 2.2.3 to 2.2.4

### Flight Plan Export

* Added **saving and loading of [FlightGear](http://home.flightgear.org/) XML flight plans** (`.fgfp`) also covering SID and STAR. [#361](https://github.com/albar965/littlenavmap/issues/361)
* MDX flight plan export for Leonardo Maddog X added. [#232](https://github.com/albar965/littlenavmap/issues/232)
* Added RTE flight plan export for QualityWings aircraft. [#335](https://github.com/albar965/littlenavmap/issues/335)
* Export for AivlaSoft EFB (`.efbr` version 1 - currently no SID and STAR). [#226](https://github.com/albar965/littlenavmap/issues/226)
* Added **saving of PNG or JPG map images for [AviTab](https://github.com/fpw/avitab)** to file menu. Includes JSON calibration file. [#310](https://github.com/albar965/littlenavmap/issues/310)
* Added **flight plan export for online networks** including dialog for additional data. [#317](https://github.com/albar965/littlenavmap/issues/317) (vPilot, `VFP`) and [#176](https://github.com/albar965/littlenavmap/issues/176) (IVAP and X-IVAP, `FPL`)
* Added FPL flight plan export for FeelThere aircraft. [#206](https://github.com/albar965/littlenavmap/issues/206)
* New flight plan export for Level-D (`.rte`). [#206](https://github.com/albar965/littlenavmap/issues/206)
* Adapted flight plan file type detection to new formats and improved it for drag and drop loading. Files are now accepted for dropping/loading independent of file extension.
* Now automatically suggesting a numbered filename if file already exists when exporting or using `Save as`. Same for aircraft performance files.
* Reorganized export flight plan menu items into categories (Aircraft, Online, etc.) for better overview.
* Changed default export folder for aircraft flight plan formats to use simulator base folder instead of `Documents`.

### Online Networks

* **Enabled IVAO online network support** based on mirror on [www.littlenavmap.org](https://www.littlenavmap.org). [#244](https://github.com/albar965/littlenavmap/issues/244)
* Now displaying flight simulator type in information window for online network clients.

### Help

* Changed default email, manual and help link URLs from Gitbook to [www.littlenavmap.org](https://www.littlenavmap.org). [#238](https://github.com/albar965/littlenavmap/issues/238)\\
  **Manuals in all formats and languages can be found here: [Little Navmap and Little Navconnect Manuals](https://albar965.github.io/manuals.html).**
* Moved help URLs into configuration file `urls.cfg` which can be overloaded in settings directory. [#238](https://github.com/albar965/littlenavmap/issues/238)

### Map

* Fixed issue where MORA data was displayed only with Navigraph data enabled. Now always shown independent of selection. [#331](https://github.com/albar965/littlenavmap/issues/331)
* Changed taxiway color for better visibility with light backgrounds.
* Added taxiway colors and pens to `little_navmap_mapstyle.ini` to allow configuration.
* Logbook userpoint icon now displayed using an offset from airport icon to avoid covering the airport symbol. Hotspot of logbook userpoint is now top left of the symbol. [#366](https://github.com/albar965/littlenavmap/issues/366)
* Changed AI/multiplayer aircraft on ground to appear earlier when zooming in.
* Now disabling text in MORA display if it gets too small to avoid garbled up display.
* Now hiding the scalebar when saving map images. Scale bar is now only included when printing.
* Fixed several display issues with procedure legs.

### Flight Plan and Performance

* Fixed issue where selecting a parking position as departure resulted in zero cruising altitude in flight plan (FSX/P3D `.pln`).
* Now disabling aircraft performance collection when sim is paused or replaying (replay only detected on X-Plane).
* Relaxed maximum distance requirements for waypoints in route string parser.\\
  Airports are now always used independent of distance to previous waypoint. This allows to build plans like `EDDF KORD EDDM`.\\
  [#376](https://github.com/albar965/littlenavmap/issues/376)
* Fixed display and conversion issues in aircraft performance when using metric units.
* Vertical descent speed, descent speed and descent rule of thumb now displayed correctly.
* Fixed route description parser to ignore runway designations attached to airport like `USSS/08R ... ZMUB1200/33`.
* Route description parser can now read long SID and STAR names like `ENVA UTUNA1A` vs. `ENVA UTUN1A`.

### Scenery Library

* Airports with open helipads and closed runways are now considered open.
* Now considering helipads for rating calculation for airports.
* Fixed issue with error messages when loading OpenAIR files with missing airspace class. Now omitting only the invalid airspaces instead of the whole file.
* Now looking for registry keys in a case insensitive manner to avoid problems where FSX or P3D could not be found.

### User Interface

* Added **function key shortcuts** in menu `Window` -> `Shortcuts` **to have quick access to search, flight plan, map and more**. [#364](https://github.com/albar965/littlenavmap/issues/364)
* Added shortcuts to switch between styles `Fusion` (`Shift+F2`) and `Night` (`Shift+F3`).
* Added **links to well known airport folder** `Documents/Little Navmap Files/ICAO` for airport information. Links to all files in the related folder are shown if the path exists for an airport with the given ICAO ident. The path is locale sensitive, e.g. in German `Dokumente/Little Navmap Dateien/ICAO`. This depends on completeness of the translation. Try both variants (`Files` vs. your system language) if in doubt. Clicking on a link opens the file in the default editor or viewer of the system.
* Fixed wrong test in options dialog for online `status.txt` file. Now looking for the correct values to verify the file or download.
* Default folder is now the simulator base path when selecting exclusions in the options dialog on tab `Scenery Library Database`.
* Fixed issue where date display used 12 hour time without AM/PM indicator. Now always using 24 hour time for UTC time display.
* Moved all context menus a few pixels off the cursor to avoid accidental selection of first entry on touchpads or some mice.
* Changed lengthy prefix for custom map themes to `*` in the drop down box on the toolbar.
* Limited text length for files and paths in scenery loading dialog to avoid growing the progress dialog too large.

### Weather

* **Fixed default NOAA and VATSIM weather URLs to use HTTPS/SSL.**
* Added migration code to convert NOAA weather URL to use SSL/HTTPS if user left URL unchanged.
* Made METAR parser more tolerant for invalid temperature values not separated by a `/`.
* Fixed issues with missing weather updates when switching airport weather.

### Configuration

* Now reading environment variable `LNM_RENDERER` for potential fixes on crashes or graphic problems.\\
  To use desktop OpenGL renderer set it to `desktop`. \\
  Use Angle to DirectX adapter for rendering: `angle`.\\
  To use the software renderer set it to `software`.
* Added `[Options]` / `PixmapCache` allowing to change pixmap cache size as a potential fix for disappearing icons.
* Added preliminary options for manual application of user interface font configuration in settings. [#373](https://github.com/albar965/littlenavmap/issues/373). Example:\\
  `[Options]`\\
  `GuiFontFamily=FONTNAME`\\
  `GuiFontFile=FILE.ttf` (Optional)\\
  `GuiFontPixelSize=12` (Optional)
* `[Options]` / `Language` override in settings file now fixed for online help and legend loading.

### related from Little Xpconnect version 1.0.14

* Fixed issue with AI detection where aircraft remained on map moving along with the user aircraft after deleting AI in simulator.
* Now linking Xpconnect statically to Qt to avoid plugin conflicts with libaries in Linux.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.2/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
