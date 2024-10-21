---
layout: post
title:  Little Navmap 3.0.11 released
date:   2024-10-13 16:00 +0200
categories: release
release-version: 3.0.11
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.11-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.11/LittleNavmap-win64-3.0.11-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.11.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.11/LittleNavmap-macOS-3.0.11.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.11.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.11/LittleNavmap-linux-ubuntu-22.04-3.0.11.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.11-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.11/LittleNavmap-linux-ubuntu-22.04-3.0.11-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.11-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.11/LittleNavmap-win32-3.0.11-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.11.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.11/LittleNavmap-linux-ubuntu-20.04-3.0.11.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.11-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.11/LittleNavmap-linux-ubuntu-20.04-3.0.11-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.11](https://github.com/albar965/littlenavmap/releases/v3.0.11) \(scroll down to `Assets`\).

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br/>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a><br/>
  </b>
</p>

## Notes

**This is a stable release of Little Navmap that fixes many issues and adds some new features.**

**This update is recommended for all users.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

**The program will remind you to reload the scenery library due to database changes. This is optional.**

A big thank you to all who reported bugs and issues!

## Changes from 3.0.9 to 3.0.11

### Flight Plan

* Now adding airport, parking or other start positions to the flight plan once connected to the
  simulator with an empty plan. This function can be disabled in options on page `Files`.
* Now removing any alternate airport if the same airport is set as destination or if it is added
  otherwise to the flight plan.
* Added option to disable minor error messages about missing parking spots in flight plan. Note
  that the settings for flight plan header and footer are reset to default.
* Enabled reading and writing of NAT notation in flight plan route description. This fixes
  issues when downloading a flight plan using North Atlantic tracks from SimBrief or using the
  notation in the flight plan route description. Example: `NATA` is converted to NAT track `A`. [#1110](https://github.com/albar965/littlenavmap/issues/1110)
* Fixed issue with dropped airway information. This affected plans that have only one leg between
  departure and arrival. As a result an airway was dropped on saving, exporting and using it in the
  flight plan route description. Example: `SBRJ EVKO3A.NAXOP UZ45 IBDA1A SBSP` resulted in
  `SBRJ EVKO3A.NAXOP IBDA1A SBSP`. [#1130](https://github.com/albar965/littlenavmap/issues/1130)
* Fixed issue where parking spots could not be found resulting in an error message after reloading
  a flight plan when using the option `Use Navigraph for all Features`.
* From 3.0.10.rc1 to 3.0.11: Made GPX file detection more tolerant. Now showing a warning if the
  GPX file does not contain any track points.
* From 3.0.10.rc1 to 3.0.11: Flight plan route description is now updated after downloading or
  deleting oceanic tracks.
* From 3.0.10.rc1 to 3.0.11: Now updating flight plan route description after switching simulator.
* From 3.0.10.rc1 to 3.0.11: Corrected wrong error message `File does not contain track points`
  when loading GPX files.

## Export

* Added export format for FlightFactor Boeing 777 V2. This is a FMS format file with procedures
  stripped since the aircraft rejects loading FMS files with procedures.
* Fixed issue where RealityXP GNS export declared the destination airport wrongly as a userpoint
  when using export option with userpoints.
* Now using ISO date with offset from UTC in all flight plan files.

### Elevation Profile

* Increased number of samples when calculating elevation from GLOBE data to avoid missing peaks
  when drawing the elevation profile.
* Added option for indicated altitude label to elevation profile. Enable this in menu `Tools` ->
  `Elevation Profile Display Options` in branch `User Aircraft Labels` -> `Indicated Altitude`.
* Fixed wrong label description in profile configuration dialog mentioning wrongly
  `Actual Altitude`.

### Map

* Added function to decrease and increase the density of labels on the map. This is available in
  the detail toolbar button, menu `Map`, `Ctrl+Shift+Mouse Wheel`, `Ctrl+Shift++` and `Ctrl+Shift+-`.
* Added US VFR and IFR chart map themes.
* Added option to show heading to departure runway position using a dashed line with arrows. This
  can be disabled in menu `View` -> `Show Direction to Departure Runway`. This line is drawn from
  the departure parking or aircraft position (if connected) and disappears when arriving at the
  runway or when taking off.
* User and AI aircraft now drawn on top of user features like measurement lines or range rings.
* Userpoints related to navaids like VOR now use the same size as the real navaids. Size of
  userpoints and navaids still can be changed separately in options. This affects airport, VOR, NDB,
  waypoint, Obstacle and VRP userpoints. The last three are based on the waypoint size. [#1179](https://github.com/albar965/littlenavmap/issues/1179)
* Improved display of procedure turn instructions. Reduced distance for turn leg to fix for a
  more realistic value. Extended stub leg for turn towards runway and removed distance display for
  this leg. Added missing restriction text for procedure turns.
* Fixed alignment of procedure end or start for displaced simulator airport runways compared
  to the navdata. Example: ENOL on all simulators.
* Approach runway position now correctly terminated at offset threshold.
* First SID leg is now aligned with runway to avoid it being drawn all over the airport in
  some cases.
* Better distance estimate for procedure legs terminated by altitude. Now considering altitude.
* Fixed disappearing user aircraft tooltip after automatic trail truncation.
* Fixed potential crash when truncating short aircraft trail and applied more optimizations
  for display.
* Fixed issues with labels on long measurement lines and flight plan legs. Lines flipped direction
  arrows at certain zoom values.
* Fixed issue where Great Circle airspace boundaries were drawn as a straight lines in some cases.
* Improved display of airspaces that touch the poles.
* Fixed issue where settings of some airspace types were not saved or applied. Note that airspace
  options are reset to default on update.
* Added option to disable taxiway lines and names. These can be changed in options on page
  `Map Labels` in branch `Airport Details`. Note that airport display options are reset to default.
* Fixes for menu `Tools` -> `Reset Display Settings`. These now affect only map display options in
  menu `View`.
* Setting `Load the map display saved settings` on options page `Startup and Updates` now affects
  the same options as `View` -> `Reset Display Settings` now. This is map theme, map projection
  and detail levels as well.
* Fixed issue where userpoints were not reset correctly when using
  `Reset Display Settings`.
* Added shortcut `Ctrl+C` to copy coordinates at the cursor position in the map window to the
  clipboard. Note that you have to activate the map window by pressing F2 or clicking into it
  before using any shortcuts there.
* Disabled Shift/Ctrl/Alt+Left/Right/up/Down keys for map scrolling to avoid shorcuts overlapping
  with operating system functions.
* Fixed inadvertent movement or zooming on map display when using mouse wheel, keyboard shortcuts
  containing `+`, `-` or cursor keys.
* Now stopping map drawing on overflow of highlighted map objects (e.g. selected navaids in the
  search result table) from search to avoid program freeze.
* Fixed issue where the `Too many objects` message in the status bar was not reset in some cases.
* Fixed missing tooltip for waypoints highlighted on the map which were selected in the navaid
  search result table.
* Fixed issue where navaids like recommended fixes from flight plan procedures did not react to a
  single or double click.
* From 3.0.10.rc1 to 3.0.11: `Save Map as Image for AviTab` now uses PNG as the default format
  since JPG may cause crashes.
* From 3.0.10.rc1 to 3.0.11:  Fixed issue where images can be saved using the wrong format ignoring
  selection in the format drop down box. Now always adding file suffix according to image type.
* From 3.0.10.rc1 to 3.0.11: Fixed issue where wrong coordinates were used when selecting `More` ->
  `Jump to Coordinates` in map context menu.
* From 3.0.10.rc1 to 3.0.11: Fixed issue where procedures zoomed too far out when showing in
  procedure search. This was caused due to too far away recommended navaids like GCC/K1 for
  KASE SID 33 LINDZ1.
* From 3.0.10.rc1 to 3.0.11: Splitting large aircraft trails into partitions for better performance
  and to avoid crashes.
* From 3.0.10.rc1 to 3.0.11: Fixed memory leak when drawing lines.

### Scenery Library

* Fixed crash with older databases having table `airport` without columns `icao` and `iata`.
* Removed obsolete and unused tables. Tables `airport_medium`, `airport_large`, `route_node_radio`,
  `route_edge_radio`, `route_node_airway` and `route_edge_airway`. View creation in database now
  disabled. Note that this means that newer databases cannot be used by *Little Navmap* versions
  older than releases from around 2020. The program will show a SQL exception if this is the case.
  Update *Little Navmap* to the latest if you run into this.
* Better detection of the longest runway for airports. Now ignoring water runways if airport has
  both water and land runways.
* Added waypoint names to X-Plane and DFD compilers. [#1176](https://github.com/albar965/littlenavmap/issues/1176)
* Updated track database schema to avoid incomplete waypoint information display. [#1176](https://github.com/albar965/littlenavmap/issues/1176)
* Disabled 3D flag for empty airport display for X-Plane 12 since the 3D flag is unreliable and
  broken there. Major airports like KSEA, KORD or EDDF do not have this flag set.
* Fixed wrong airport bounding rectangle calculation for X-Plane airports. Example: KSEA in
  X-Plane 12. This resulted in zooming to far out when double clicking the airport.
* Fixed issue where detection of malformed MSFS airports rejected valid airport add-ons with a
  message `Duplicate airport ident`. This happened when add-on developers put more than one of the
  same airport into one BGL file.
* Better airspace geometry for Navigraph databases, airspaces read from simulator
  libraries and user files. Now considering Rhumb line segments in DFD airspace description.
  Note that a workaround is used to detect the segments for simulator and user airspaces since
  required information is missing there. This eliminates wrong airspace boundaries drawn as
  bows (Great Circle lines). Note that this needs a new AIRAC cycle if using the Navigraph update.
* Fixed duplicate reading of X-Plane `airspace.txt` resulting in airspaces shown twice. The file
  `airspace.txt` in `Custom Data` now correctly overrides the one in `Resources`.
* Updated minor database version to 29 due to several schema changes. This results in a notice
  about a previous database version although reloading is not required.
* Fixed issue with double and invalid COM frequencies for MSFS airports when using
  MSFS Navigraph  update.
* From 3.0.10.rc1 to 3.0.11: Fixed issues reading MSA centers for X-Plane where runways were not
  detected. Now also looking for center points of ILS.

### Search

* Added option for minimum distance in logbook cleanup dialog window.
* Fixed issue with bounding rectangle calculation which resulted in wrong results when searching by
  `Distance from Mark` and other functions around the antimeridian. [#1184](https://github.com/albar965/littlenavmap/issues/1184)
* Waypoints now can be searched by name.

### Web Server

* Fixes to web interface by [u-an-i](https://github.com/u-an-i). Click or tap now moves to the
  correct map position. Note that you have to do a hard reload in the web browser if you see an
  incomplete map or other issues. Press `Ctrl+Shift+R` on most browsers to do a hard reload bypassing
  the browser cache.
* Fixes for random crashes when using the web interface.

### User Interface

* From 3.0.10.rc1 to 3.0.11: Translations for French, Italian and Brazilian Portuguese updated.
  Thanks to Flavio, Patrick and Ricardo!
* Added winds from airport METAR to tab `Airport` -> `Runways` in dock window `Information`.
* Fixed issue where an invalid error message about a wrong X-Plane path was shown when switching
  map airport weather.
* Now getting best guess for user aircraft type designator and category in MSFS. Using keys
  `icao_type_designator` and `icao_model` from file `aircraft.cfg`.
* Added aircraft category to detect helicopters in MSFS.
* Added help menu item pointing to keyboard shortcuts.
* From 3.0.10.rc1 to 3.0.11: Fixed reversed meaning of settings `By airspace name vs. callsign` and
  `By airspace file name vs. callsign` on options page `Map Online`.
* From 3.0.10.rc1 to 3.0.11: Fixed problem with wrong crash detection when shutting down operating
  system with *Little Navmap* running.
* From 3.0.10.rc1 to 3.0.11: Now always exiting program if command line option `--quit` / `-q` was
  set, even if no other instance was found.
* From 3.0.10.rc1 to 3.0.11: Fixed wrong error message when reading flight route descriptions from
  the command line.
* From 3.0.10.rc1 to 3.0.11: Fixed issue where dialog windows appeared behind the main window that
  made the program appear to freeze or crash.

### User Manual

* Added link to Google Translate on the top page in the user manual where the whole manual can be
  translated on the fly into another language. Added the same on top of the page
  [Alex’ Projects](https://albar965.github.io/index.html) and the
  [Frequently asked Questions](https://albar965.github.io/littlenavmap-faq.html)
* Updated manual for new detail functions:
  [User Manual - Map Menu - More/Less Map Labels](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#map-label-details)
* Direct to departure function:
  [User Manual - View Menu - Show Direct to Departure](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#show-direct-to-departure).
* Updated the outdated user manual section for the web interface:
  [User Manual - Web Server](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/WEBSERVER.html).
* Updated airspace chapter for online airspace loading and matching:
  [User Manual - Loading Airspaces](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/AIRSPACELOAD.html).

### Little Navconnect Changes from 3.0.6 to 3.0.7

* Disabled crash detection since it resulted in wrong crashes found when running
  program in system tray on Windows.
* Now always exiting program if command line option `--quit` / `-q` was set, even if no other
  instance was found.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.11/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
