---
layout: post
title:  Little Navmap 2.6.0.beta released
date:   2020-09-18 10:00:00 +0200
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.6.0.beta/LittleNavmap-win-2.6.0.beta.zip) - [macOS](https://github.com/albar965/littlenavmap/releases/download/v2.6.0.beta/LittleNavmap-macOS-2.6.0.beta.zip) - [Linux \(64 bit, based on Ubuntu 20.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.6.0.beta/LittleNavmap-linux-20.04-2.6.0.beta.tar.gz) - [Linux \(64 bit, based on Ubuntu 16.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.6.0.beta/LittleNavmap-linux-16.04-2.6.0.beta.tar.gz)**

**Alternative download locations: [Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) -
[Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) -
[OneDrive](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)**

[**► Detailed Changelog for 2.6 Versions**](/pages/26/littlenavmapchangelog.html)

[**► Screenshots of new 2.6 Features**](/pages/26/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.6 Versions**](/pages/26/littlenavmapmanuals.html)

**Please do not hesitate to let me know about bugs, inconsistencies and ideas for improvement.**

----

| [![Image](/assets/images/26/msfs_small.jpg)](/assets/images/26/msfs.jpg) | _Little Navmap_ using style `Night` showing<br/>**Microsoft Flight Simulator 2020** functions.<br/>Airport, taxiways, apron, parking spots, approaches and navaids are visible. |

----

| [![Image](/assets/images/26/tracks_small.jpg)](/assets/images/26/tracks.jpg) | [![Image](/assets/images/26/multiexport_small.jpg)](/assets/images/26/multiexport.jpg) |
| PACOTS **oceanic tracks** visible on map, tooltip and information view.<br/>New flight plan calculation window opened. | **Multi-export** configuration window open with context menu. |

----

## Important

* **The data exchange protocol has changed. You have to update _Little Navconnect_ (if using
  remote/network connections) and _Little Xpconnect_ (if using X-Plane) too.**
* **Reload the scenery library database to see fixes and improvements.**

## Limitations

* Translations are not updated yet. The user interface might be a mix of your local language and
  English. Map legend not updated.
  Feel free to send me an email or ask in the [Avsim forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum/) if you like to contribute a translation of the program or the manual.
* The online and offline manuals are not updated yet. Neither the English nor the translated
  versions. Help buttons and links are functional but point to placeholder pages. Map legend not updated.
  Ask in the [Avsim forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum/) if you have questions.

## Notable Changes from Release 2.4.5 to 2.6.0.beta

* **Microsoft Flight Simulator 2020 support. _Little Navmap_ detects MSFS installation paths, can read the scenery library,
  follows user aircraft and can save/load flight plans also with procedures.**
  See `MSFS Limitations` in the [detailed changelog](/pages/26/littlenavmapchangelog.html) for known issues.
  Star airports in MSFS get a five star rating in _Little Navmap_.
* **Oceanic tracks: NAT, PACOTS and AUSOTS.** Visible on map and can be used in flight planning as well
  as for automatic plan calculation. See `Flight Plan` -> `Download Tracks`.
* **Multi-export:** Export more than one flight plan format at once with just one click. Formats and
  paths are configurable. See `File` -> `Multi Export Flight Plan Options`.
* **Improvements to logbook**: A log entry now gets track and flight plan attached which can be saved
  or shown in preview.
* **Improved flight plan calculation.** Can now calculate across regions which are void of airways. Can
  use oceanic tracks, avoid RNAV airways and more options. `Flight Plan` -> `Calculate Flight Plan`.
* _Little Navmap_ now uses its own flight plan format which allows removing most of the
  warning dialogs. Flight plan saving and loading logic has changed completely.
* User can add remarks or comments on flight plan and flight plan waypoints. See tab `Flight Plan
  Remarks` in `Flight Planning` dock window. Right click on flight plan waypoint in plan table or map
  and select `Edit Flight Plan Position Remarks`.
* Program suggests to create a recommended folder structure on first startup. Click
  `Do not show this dialog again` and press `Cancel` if you do not like this.
* **Better map context menu** with sub-menus for easier selection of actions if more than one map
  object is below clicked position.
* Replaced title bar information for mouse hover in elevation profile with tooltip window
  showing more information.
* User can now **select font for user interface and map display**. Options dialog on pages `User
  Interface` and `Map`.
  See [b612-font](https://b612-font.com) for an open source font used in aviation.
* **Free user interface language selection** (if translation available). Change this in the dialog
  `Options` on page `User Interface`
* **Fullscreen mode** maximizes map on one click or key press of `Shift+F11`. See `Window` ->
  `Fullscreen Map`.
* Save and **load window layouts** for dock windows. This also saves toolbar positions and the main
  window size. See menu `Window`. Layouts are saved separately for both normal and fullscreen mode.
* Optionally focus and raise dock windows or main window on mouse hover. Change this in `Options`
  on page `User Interface`.
* Option to disallow docking windows from snapping back to main window when moving around. Can be
  toggled in menu `Window` -> `Show all floating Windows`.
* Many changes in user interface for more usability. Better error reporting for flight plan
  and other issues.
* Added new map display options. Text size and line width for airways, labels for measurement
  lines, airport diagram features and more. See dialog `Options` on pages `Map Display` and `Map
  Display 2`.
* Now reading and showing X-Plane frigate and carrier as AI.
* Many drawing issues fixed like disappearing lines near the date line, problems with procedures
  and symbols popping out at the map window border.
* Tear off toolbar button menus, e.g. for userpoints. Click the dashed line to move the drop down
  menu to its own window.
* SimConnect library is included now. A FSX SP2 SimConnect installation is not required.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.6/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
