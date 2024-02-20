---
layout: post
title:  Little Navmap 3.0.3.rc1 released
date:   2024-02-20 13:00 +0100
categories: release
release-version: 3.0.3.rc1
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.3.rc1-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.3.rc1/LittleNavmap-win64-3.0.3.rc1-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.3.rc1.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.3.rc1/LittleNavmap-macOS-3.0.3.rc1.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-3.0.3.rc1.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.3.rc1/LittleNavmap-linux-22.04-3.0.3.rc1.tar.gz)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.3.rc1-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.3.rc1/LittleNavmap-win32-3.0.3.rc1-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-20.04-3.0.3.rc1.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.3.rc1/LittleNavmap-linux-20.04-3.0.3.rc1.tar.gz)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.3.rc1](https://github.com/albar965/littlenavmap/releases/v3.0.3.rc1) \(scroll down to `Assets`\).

**Alternative Download - Locations Look into sub-folders for beta, development or release candidates:**

**► [Alternative Download Locations](https://albar965.github.io/downloads.html)**

**This is a beta/test release of Little Navmap which adds new features, user interface improvements and fixes bugs.**

**Note that the program translations and the user manual have not been updated yet.**

**See here if you would like to run the beta release besides your stable installation:
[Little Navmap - User Manual - Portable Execution](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#portable-execution).**

**Also update Little Navconnect and Little Xpconnect if you're using one of these.
Little Navmap will show a notification dialog if you use an outdated version of Little Xpconnect.
You can update and install Litte Xpconnect from the menu `Tools` in Little Navmap now.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Little Navmap - User Manual - Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

If you think the overall appearance of fonts in Little Navmap on Windows is blurry:
See options on page `Display and Text` and deselect `Use FreeType font engine on Windows`.
Keep in mind that this will revert map display and performance improvements.

A big Thank You! to all who reported bugs and issues.

# Version 3.0.3.rc1

## Changes from 3.0.2.beta to 3.0.3.rc1

### User Manual

#### Map Display and Map Context Menu

* [Convert procedure to waypoints function](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MAPDISPLAY.html#convert-to-waypoints)
* [Direct to here function](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MAPDISPLAY.html#direct-to-here)
* [Map overlays](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MAPDISPLAY.html#overlays-map)
* [Select leg in flight plan on click](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MAPDISPLAY.html#show-in-flight-plan)
* [Map Display - New handling of file little_navmap_mapstyle.ini](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/CUSTOMIZE.html#customize-map-display)

#### Flight Plan Route Description

* [Improved route description now able to use runways and approaches](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/ROUTEDESCR.html)

#### User Interface

* [Web and internal links in dialog windows explained](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/INTRO.html#links)
* [Copy and paste formatted text from all dialog windows](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/INTRO.html#copy-and-paste)

#### New Menu Items

* [Search menu for quick access](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#search-menu)
* [Changed map display filter for add-on airports as requested by users](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#add-on)
* [Show or hide alternate airports](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#show-alternate-airports)
* [Automatic installation of Little Xpconnect menu item](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#install-xpconnect)
* [Manually create an issue report menu item](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#create-issue-report)
* [New menu items to show map cache and more](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#files-and-directories)
* [Links to helpful user manual chapters](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#help-chapters)

#### Aircraft Trail

* [New chapter for user aircraft trail loading, saving and display options](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/AIRCRAFTTRAIL.html)
* [GPX exchange format (GPX) menu for load and export](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/MENUS.html#menu-gpx)

#### Options

* [Search in options dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/OPTIONS.html#options-search)
* [Hints in options dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/OPTIONS.html#options-hints)
* [Option to toggle Freetype font engine](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/OPTIONS.html#options-freetype)

#### Changed Search

* [Changed text search in airport and navaid search windows](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCH.html)
* [Changed search for hidden options and new suffixes](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCH.html#menu-button-search)
* [Changed handling of runways to avoid error messages when adding procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCHPROCS.html#procedure-runways)
* [Showing preferred runways as well as head and cross winds in procedure search](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCHPROCS.html#procedure-preferred-runways)
* [Search for approach idents](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/SEARCHPROCS.html#filter-ident-procs)

#### Other

* [New departure leg option in traffic pattern](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/TRAFFICPATTERN.html)
* [Install the Little Xpconnect plugin from the tools menu](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/XPCONNECT.html#xpconnect-installation)
* [New chapter for GLOBE installation](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/GLOBE.html)
* [Create a manual issue report](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/ISSUEREPORT.html)
* [Automatic crash report after improper shutdown](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/CRASHREPORT.html)

### General

* Fixed several issues with flight plan labels when crossing the anti-meridian.
* Now removing leading and trailing white space from URLs in options to avoid issues with wrong
  user input. [#1089](https://github.com/albar965/littlenavmap/issues/1089)
* Improved altitude correction after reading flight plan description without altitude designation.
  Now using lowest possible altitude depending on airway and procedure restrictions if present.
  Otherwise falls back to defaults for 10000 ft when using VFR or 20000 ft for IFR. Adjust in the
  flight plan table as needed.
* Missing PAPI in profile fixed when last procedure leg is short circle-to-land.
  Example: EGPF via GOW and D23.
* Fixed turn indicator curve at low aircraft speeds and small turn radii.
* Added text size option for flight plan table header text in options on page `Display and Text`.
* Fixed aircraft index flooding log with messages when loading MSFS aircraft files to get ICAO type.
  Now avoiding re-reading if aircraft files are not available.
* Now writing ICAOIdent field for userpoints in FSX/P3D flight plan export to fix userpoint display
  in GPS.
* Removed log flooding with messages when adding points to aircraft trail while flying.
* Adding `More` sub-menus in menu `View` -> `Userpoints` to avoid overflow on screen when using many
  custom userpoint icons.
* Fixed wrong distance calculation for procedure leg sequence intercept, intitial fix and following legs.
  This resulted in wrong distance, time and ETA calculations as well as a wrong elevation profile.
  Example: EFVA via AXUTI and I16-Y.
* Windows installer now removes portable execution script `Little Navmap Portable.cmd` since this cannot
  be used with the installer. Download one of Zip archives of Little Navmap to use the portable mode.
* Removed offline PDF manual in program and installer. You can download the user manual in PDF and other
  formats from the page [User Manuals](https://albar965.github.io/manuals.html).
* Now ignoring empty GRIB files from the X-Plane weather folder. Replaced error dialog window with
  warning message in log.
* Moved option to enable or disable the Freetype font engine on Windows into options on page `Display and Text`.
  Enabling this option results in better and faster text display on the map, especially for rotated labels.
  But the text will appear slightly blurred throughout the whole application. Deselect this to
  avoid the slightly blurred text in menus and application windows.
* More fixes in PLN flight plan export for MSFS where transitions were not loaded by MSFS due to a missing
  waypoint. This case without a STAR. Example: EDDV, using approach NIE.I27RY or approach SAS.I27RZ both
  without STAR.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.3.rc1/CHANGELOG.txt) online for a complete list across all versions.**
