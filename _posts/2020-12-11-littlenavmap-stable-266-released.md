---
layout: post
title:  Little Navmap 2.6.6 released
date:   2020-12-11 12:00:00 +0100
categories: release
---

## Links

[**► Screenshots of new 2.6 Features**](/pages/26/littlenavmapscreens.html)\\
[**► Little Navmap and Little Navconnect Manuals for 2.6 Versions**](/manuals.html)

### Direct Download

[**► Windows** - LittleNavmap-win-2.6.6.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.6/LittleNavmap-win-2.6.6.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.6.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.6/LittleNavmap-macOS-2.6.6.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.6.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.6/LittleNavmap-linux-20.04-2.6.6.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 16.04\)** - LittleNavmap-linux-16.04-2.6.6.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.6/LittleNavmap-linux-16.04-2.6.6.tar.gz)

### Alternative Download Locations

[**► Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)\\
[**► Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)\\
[**► OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

----

| [![Image](/assets/images/26/msfs_small.jpg)](/assets/images/26/msfs.jpg) | *Little Navmap* using style `Night` showing<br/>**Microsoft Flight Simulator 2020** functions.<br/>Airport, taxiways, apron, parking spots, approaches and navaids are visible. |

----

| [![Image](/assets/images/26/tracks_small.jpg)](/assets/images/26/tracks.jpg) | [![Image](/assets/images/26/multiexport_small.jpg)](/assets/images/26/multiexport.jpg) |
| PACOTS **oceanic tracks** visible on map, tooltip and information view.<br/>New flight plan calculation window opened. | **Multi-export** configuration window open with context menu. |

----

## Important

* **The data exchange protocol has changed. You have to update *Little Navconnect* (if using
  remote/network connections) and *Little Xpconnect* (if using X-Plane) too. Both are included in the *Little Navmap* download package.**
* **Reload the scenery library database to see fixes and improvements.**
* *Little Navmap* asks to create a recommended folder structure for files on first start after updating to 2.6 versions.
  Let the program create the paths if you like to use them and move your files accordingly.
  Note that this is purely optional. All Files of *Little Navmap* can be stored in any place.

## Known Issues

See here: [User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

## Notable Changes from Release 2.4.5 to 2.6.6

### User Manuals and Help

* All help buttons and links are functional now in the program.
* English online manual is now complete and vailable for download in PDF, EPUB and MOBI format:\\
  [Little Navmap and Little Navconnect Manuals](/manuals.html).

#### New Chapters

* [Flight Plan Route Calculation](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/ROUTECALC.html)
* [Flight Plan Multiexport](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/ROUTEEXPORTALL.html)
* [Tracks](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TRACKS.html)
* [Edit Flight Plan Position](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/EDITFPPOSITION.html)
* [Edit Flight Plan Remarks](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/EDITFPREMARKS.html)
* [Window Layout](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/LAYOUT.html)
* [Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/NETWORK.html)
* [Start](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/START.html)
* [Directories](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FOLDERS.html)

#### Updated Chapters

* [Flight Plan Formats](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FLIGHTPLANFMT.html)
* [Options](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/OPTIONS.html)
* [Installation](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INSTALLATION.html)
* [Menus and Toolbars](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MENUS.html)
* [Introduction](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INTRO.html)
* [Map Display](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MAPDISPLAY.html)
* [Legend](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/LEGEND.html)
* [Elevation Profile](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/PROFILE.html)
* [Logbook](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/LOGBOOK.html)
* [Connecting to a Flight Simulator](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/CONNECT.html)
* [Tutorial - Building a VFR Flight Plan](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TUTORIALVFR.html)
* [Tutorial - Building an IFR Flight Plan with Approach Procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TUTORIALIFR.html)
* [Tutorial - Creating an Aircraft Performance Profile](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TUTORIALPERF.html)

### Program Changes

* **Microsoft Flight Simulator 2020 support. *Little Navmap* detects all known MSFS installation paths, can read the scenery library, follows user aircraft and can save/load flight plans also with procedures.**  All star airports in MSFS get a five star rating in *Little Navmap*. See known issues above for limitations.
* **Oceanic tracks: NAT, PACOTS and AUSOTS.** Visible on map and can be used in flight planning as well as for automatic plan calculation. See `Flight Plan` -> `Download Tracks`.
* **Multi-export:** Export more than one flight plan format at once with just one click. Formats and paths are configurable. See `File` -> `Multi Export Flight Plan Options`.
* **Improvements to logbook**: A log entry now gets track and flight plan attached which can be saved or shown in preview.
* Added total flight time numbers in logbook statistics dialog.
* **Improved flight plan calculation.** Can now calculate across regions which are void of airways. Can use oceanic tracks, avoid RNAV airways and more options. `Flight Plan` -> `Calculate Flight Plan`.
* *Little Navmap* now uses its own flight plan format (extension `LNMPLN`) which allows removing most of the confusing warning dialogs. Flight plan saving and loading logic has changed completely and is now more straigtforward.
* User can add **remarks or comments on flight plan and flight plan waypoints**. See tab `Flight Plan Remarks` in `Flight Planning` dock window. Right click on flight plan waypoint in plan table or map and select `Edit Flight Plan Position Remarks`.
* **Auto renumbering all user flight plan positions** (green rectangle) that match default name pattern prefixed with `WP` like `WP1`, `WP2` or `WP99` now. Note that positions are already renumbered when loading a plan.
* Program suggests to create a **recommended folder structure** on first startup. Click `Do not show this dialog again` and press `Cancel` if you do not like this.
* Added option to **extract flight plan for selected range** and save it into a new file. Select a range of flight plan legs not touching alternates or procedures. Then right click into the table and choose `Save selected Range as Flight Plan`. This will not replace the current plan but add the saved file to the recent files list.
* **Better map context menu** with sub-menus for easier selection of actions if more than one map object is below clicked position.
* Changed display functionality to **force add-on airport display**. Now keeping add-ons airports visible on map independent of zoom level if this option is selected in the toolbar or the menu `View` ->  `Airports` -> `Force Show Add-on Airports`. Add-on airports are now shown highlighted with a yellow ring per default. Add-on highlighting can be disabled in options dialog on page `Map Display`. The colors can be adjusted in the configuration file `little_navmap_mapstyle.ini`.
* Now always drawing approach procedure related ILS and airport diagram from flight plan even if these features are disabled in map. Allows to hide all map features and show only the important flight plan related navaids.
* Changed display when increasing or decreasing detail level on map. Now also scaling icons, texts and other map object features. Detail level can now be used to show airport diagram earlier.
* Replaced title bar information for mouse hover in elevation profile with tooltip window showing more information.
* User can now **select font for user interface and map display**. Options dialog on pages `User Interface` and `Map`.
  See [b612-font](https://b612-font.com) for an open source font used in aviation.
* **Free user interface language selection** (if translation available). Change this in the dialog `Options` on page `User Interface`
* **Fullscreen mode** maximizes map on one click or key press of `Shift+F11`. See `Window` -> `Fullscreen Map`.
* Save and **load window layouts** for dock windows. This also saves toolbar positions and the main window size. See menu `Window`. Layouts are saved separately for both normal and fullscreen mode. Added option to restore window layout from last loaded file on startup. This is the file on top of the `Recent Window Layouts` menu. See options dialog on page `Startup`.
* Changed default window layout which is used after `Reset Window Layout to Default` to one where dock windows `Search` and `Simulator Aircraft` are merged into a tabbed view. This avoids the frozen (not resizable) elevation profile window. Look for the tabs `Search` and `Simulator Aircraft` on the lower right side of the main window.
* The elevation **profile now uses indicated altitude** for aircraft position to avoid discrepancies in display when flying at flight levels.
* Optionally **focus and raise dock windows or main window on mouse hover**. Change this in `Options` on page `User Interface`.
* Option to disallow docking windows from snapping back to main window when moving around. Can be toggled in menu `Window` -> `Show all floating Windows`.
* Added new map display options. Text size and line width for airways, labels for measurement lines, airport diagram features and more. See dialog `Options` on pages `Map Display` and `Map Display 2`.
* Now reading and showing **X-Plane frigate and carrier as AI**.
* Many drawing issues fixed like disappearing lines near the date line, problems with procedures and symbols popping out at the map window border. Also solved problems with ghost tooltips which appear at positions without map content.
* **Tear off toolbar button menus**, e.g. for userpoints. Click the dashed line to move the drop down menu to its own window.
* **SimConnect library is included now.** A FSX SP2 SimConnect installation is not required.
* Many improvements and fixes for procedure display, map display, window layout, weather updates, route description, flight plan handling, tooltips, logbook statistics, error reporting and more.
* Better reading of coordinate formats. Wikipedia coordinates can now be pasted into the input fields.

### User Interface Changes

* Brazilian Portuguese, Chinese (draft), Dutch (draft), French, German and Italian user interface translation completed. Thanks to all who helped!
* Support for macOS Big Sur.
* Made display of **head- and tailwind** consistent. Arrow down `▼` now indicates headwind and arrow up `▲` indicates tailwind in all parts of the program.
* Removed `Scenery Library` -> `Show Database Files` menu item since it is a duplicate of `Tools` -> `Files and Directories` -> `Show Database Files` which is doing the same.
* Moved menu `Airspace Sources` from view menu to `Scenery Library` -> `Airspace Libraries`.
* More changes to options dialog where some settings were added and/or moved to the tree view on page `Map Display 2`.
* Added new splash screen image by Günter Steiner.

**See the included `CHANGELOG.txt` file or [here](https://github.com/albar965/littlenavmap/blob/v2.6.6/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
