---
layout: subpage
title:  "Changelog for 2.4 Versions"
date:   2019-10-20 19:00:00 +0200
---

[Alex’ Projects](/index.html)
► [Little Navmap 2.4.0.beta released](/release/2019/09/08/littlenavmap-beta-240-released.html) / [Little Navmap 2.4.1.beta released](/release/2019/09/19/littlenavmap-beta-241-released.html)
► Changelog for 2.4 Versions

# Version 2.4.0.beta

This page contains changes for the current version only. See [CHANGELOG.txt](https://github.com/albar965/littlenavmap/blob/release/2.4/CHANGELOG.txt) for a complete log.

[**► Screenshots of new 2.4 Features**](/pages/24/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.4 Versions**](/pages/24/littlenavmapmanuals.html)

[**► Updated map Legend for 2.4 Versions**](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/LEGEND.html)

## Limitations

* Translations are not updated yet. The user interface will be a mix of your local language and
  English.
* The online and offline manuals are not updated yet. Neither the English nor the translated
  versions. Help buttons and links are functional but point to empty placeholder pages.

## Help
* Included map legend updated \([Map Legend Online](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/LEGEND.html)\).

## Installation

* You might have to install the Microsoft Visual C++ 2015 Redistributable on a fresh installation of
  Windows 10. Most will have this already installed since it is needed by many programs.
  You can get the Redistributable from the following download links:<br/>
  **► Microsoft Visual C++ 2015-2019 Redistributable Package 14.22.27821.0:
[64 bit](https://www.littlenavmap.org/downloads/Windows%20Redistributable%20Packages/vc_redist.x64_2015-2019.exe) /
[32 bit](https://www.littlenavmap.org/downloads/Windows%20Redistributable%20Packages/vc_redist.x86_2015-2019.exe)**<br/>
  **Install both 32 bit and 64 bit versions if needed.**<br/>
  **You can safely skip the installation if you get an error about a newer version already installed.**
* Reloading the scenery library is recommended.
* Reinstall the _Little Xpconnect_ X-Plane plugin to see bug fixes.

## Notable Changes

* **Winds aloft forecast for display and fuel planning.**
* Wind gust factor in airport weather symbols.
* **Alternate airports for flight plan and fuel planning.**
* **Complete rework of logbook. Separated from userpoints and improved functionality.**
* **Permanent aircraft performance collection. Results can be merged any time. Improvements to fuel planning.**
* Accurate fuel and time prediction in aircraft progress tab based on aircraft performance.
* **Internal webserver. Access map and flight plan from everywhere.**
* ILS tooltip and information.
* **User defined final approach for vertical guidance including VASI and ILS slope at any airport.**
* **Preferred runway by wind for airports in tooltip and information.**
* **Nearest navaids and airports around a selected airport.**
* **Display holdings on map like traffic patterns.**
* **Two new map navigation modes: Click to center and navigation areas for touchscreens.**
* Map images can now be saved with an arbitrary size.
* Hide columns in flight plan table.
* Can highlight full airways from information window `Map` link like airspaces.
* Improved airspace database. Added user airspaces. Assign online centers to airspace geometry.
* **Movable and closable tabs. Tab menu button and context menu for tabs.**
* Fixed all known procedure display issues.
* Display alternate fuel units and true course optionally.
* User features like range rings, holds and others can be hidden on the map.
* Error and warning messages in user interface have tooltip for more information now.
* Many user interface improvements and bug fixes for procedure display, METAR parsing and more.

## Changes

### User Interface

* Tabs can now be closed and moved in information display, aircraft progress, flight plan and
  search. [#437](https://github.com/albar965/littlenavmap/issues/437) and [#345](https://github.com/albar965/littlenavmap/issues/345)
  - A drop down menu in a button at the right top corner and a context menu on the tab bar allow to
    close, open and lock tabs.
  - Tab states and positions are saved between sessions.
  - Tabs are opened and/or raised on demand on info click or menu selection.
  - Reset window layout also resets tab layout and reopens all closed.
* Now raising windows and/or tabs optionally on actions like e.g. `Set Destination`. Also after
  loading, importing or creating a new flight plan, aircraft performance file or others.
  This should help to avoid confusion when creating new or modifying documents.
  This behavior can be disabled in `Options` -> `User Interface` -> `Raise related windows ...`.
* Moved map theme and projection into separate toolbar. This helps to avoid toolbar overflow on the
  right for the map toolbar.
* Changed default layout to use a bigger window which is also used after `Reset Window Layout`.
* Added menu item to save all options and window layout. Menu `Tools` -> `Save Options and State`. [#420](https://github.com/albar965/littlenavmap/issues/420)
* Now saving full program state after changing options or style.
* Renamed dock window `Flight Plan` to `Flight Planning` and tab `Aircraft Performance` to
  `Fuel Report`.
* Changed user interface style to `Fusion` as default on macOS since the cumbersome default style
  needs too much space for tabs.
* Fixed issue where table cells where initially not resized and appeared too large despite
  selecting a small font.
* Added display of SSL version into about dialog for easier problem diagnosis.
* Fixed issues where update notification dialog could not be closed.

### Options

* Replaced tabs in options dialog with list including icons and tooltips for better overview.
* Added option for high DPI high resolution display support.
  Dialog `Options` -> `User Interface` -> `Enable high DPI ...`.
* Added option to disable proposed filename when doing `Save as` or `Export` and file already
  exists. Dialog `Options` -> `User Interface` -> `Propose new name ...`. [#433](https://github.com/albar965/littlenavmap/issues/433)
* Added option to add true heading/course to all values in display in smaller font. This affects
  all information, progress and tooltip displays.
  Can be selected in `Options` -> `Units` -> `Show true course ...`.  Useful for flying in areas
  with high or unreliable magnetic declination.
* Added option to ignore radio navaid declination when calculating magnetic flight plan leg course.
  This is helpful if you use mostly GPS for flying and do not care about radials of VOR which might
  have an  outdated calibration. Dialog `Options` -> `Flight Plan` -> `Ignore Declination ...`.
* Other fuel units (kg/liter vs. lb/gal) can now be displayed in small font besides selected fuel
  unit. This affects the fuel plan and aircraft progress tabs. See dialog `Options` -> `Units` ->
  `Show other fuel  units too`. [#401](https://github.com/albar965/littlenavmap/issues/401)
* Added new coordinate formats for display and reading: Plain latitude/longitude or
  longitude/latitude numbers with sign. Can be selected in `Options` -> `Units` -> `Coordinates`. Not
  that this also affects the order  (lat/lon vs. lon/lat) when reading coordinates in dialogs if
  selected.
* Added options to change MORA grid transparency and text size.
  Dialog `Options` -> `Map Display 2`. [#343](https://github.com/albar965/littlenavmap/issues/343)
* Added separate size option for airport weather icons.
* Added text display options for flight plan legs. Now one can select distance, and
  true/magnetic/rhumb/great circle indicators. Labels indicating type will be shown and values will
  be merged if equal. `Options` -> `Map Display 2` -> `Flight Plan` in tree. [#365](https://github.com/albar965/littlenavmap/issues/365)

### Scenery Database

* Added recursive import of OpenAir airspaces for user database from folder. [#236](https://github.com/albar965/littlenavmap/issues/236) and [#426](https://github.com/albar965/littlenavmap/issues/426)
  - New folder setting in options dialog for default airspace base folder and file extensions.
    See dialog `Options` -> `Cache and Files`.
  - Load airspaces from folder in `Scenery Library` -> `Load Airspaces ...`.
  - Added switches in menu for airspace source databases and added separate user airspace database.
    User can now choose between any combination of simulator, Navigraph, user or online airspaces.
    Menu `View`  -> `Airspace Source`.
  - Removed online airspace button and function to copy airspaces from P3D to X-Plane.
  - Removed option to read airspaces from `Documents/Little Navmap` in X-Plane compiler.
  - Made airspace databases independent of navdata switch.
* Added better error message about missing `scenery_packs.ini` for X-Plane.
* Added geomagnetic model calculation for X-Plane compilation based on current year and month. [#300](https://github.com/albar965/littlenavmap/issues/300)
  - Resulting table is written into database when compiling scenery library.
  - Showing error dialog about missing declination data. Falling back to world magnetic model if
    database is empty now.
* Added support for the new `gui_label` 3D attribute in X-Plane 11.35 and higher. This gives a more
  precise detection of 3D airports now which will be consistent with the X-Plane airport selection
  and can be used to hide `Empty Airports`. [#424](https://github.com/albar965/littlenavmap/issues/424) and [#410](https://github.com/albar965/littlenavmap/issues/410)
* Fixed display for transparent aprons in X-Plane.
* Fixed issue where FSX was wrongly selected on initial startup on Linux or macOS.
* Potential fix on macOS folder resolution problems that appear when using case sensitive file
  systems. [#392](https://github.com/albar965/littlenavmap/issues/392)
* Added support for X-Plane 8.33 kHz frequency spacing. [#409](https://github.com/albar965/littlenavmap/issues/409)
* Fixed crash that appears when using fsAerodata cycle 1905r1 or later. [#413](https://github.com/albar965/littlenavmap/issues/413)

### Information and Aircraft Progress

* Added ILS map tooltip, `Show information` in map context menu and information display. [#386](https://github.com/albar965/littlenavmap/issues/386)
  - Click on ILS shows information in `Navaid` tab.
  - Zoom to ILS on double click in map or selecting `Map` link in information display.
  - Added offset localizer hint to ILS information if runway heading does not match ILS heading.
  - Displaying ILS source for clarification in information panel. Either `Navigraph` or `Simulator`.
* Added preferred runways depending on wind conditions to tooltip, airport information tab and
  as detailed table including runway surface and length to weather tab. [#187](https://github.com/albar965/littlenavmap/issues/187)
* Aircraft progress tab now shows red warning text for icing and insufficient fuel.
* Progress tab now shows orange warnings if fuel and time have to be estimated because of
  invalid aircraft performance or an invalid flight plan. Shows also orange warning text if fuel is
  below reserve at destination (needs valid aircraft performance).
* Now showing orange warning text if no active flight plan leg can be found if aircraft is too far
  from plan.
* Tab `Aircraft` on window `Simulator Aircraft` shows gross weight as red warning text if heavier
  than max weight.
* Now displaying more fuel values and weights in alternative units as small text in information
  window and progress window. See above in `Options`. [#401](https://github.com/albar965/littlenavmap/issues/401)
* Added new tab to show nearest map objects around selected airport: One list with airports having
  procedures and one list with radio navaids. [#344](https://github.com/albar965/littlenavmap/issues/344)
* Added highlighting of whole airway strings from information window similar to airspaces. [#348](https://github.com/albar965/littlenavmap/issues/348)
  - Highlighted airways as well as highlighted airspaces have tooltips now.
  - Thickness of highlighted lines (airspace boundaries, airways, etc.) and text size can now now
    adjusted with option settings (`Options` -> `Map Display 2` -> `Range rings, ...`).
* Added links to FlightAware, SkyVector, X-Plane Gateway and OpenNav web pages in airport
  information which link to the airport information on the respective pages.
* Fuel and time prediction in aircraft progress tab is now based on aircraft performance (if
  available and valid) and therefore more accurate. Will fall back to an estimate based on current
  speed and fuel consumption if aircraft performance is not valid.
* Added message in weather information tab if all sources are disabled.

### Flight Plan

* Added support for alternate airports to map display, flight plan, printing, web server, drag and
  drop editing, all flight plan move, delete, edit and append functions as well as all relevant context menus.
  Fuel calculation considers farthest alternate in fuel calculation now. [#230](https://github.com/albar965/littlenavmap/issues/230)
* Added reset all function to quickly set up program for a new flight.
  Menu `File` -> `Reset all for a new Flight`.
* Added dialog to show or hide columns in flight plan table. See context menu of flight plan table.
  Context menu item `Select visible Columns`.
* Added columns for true rhumb and true great circle course to flight plan table.
* Better messages about missing and invalid flight plan. Now adding tooltip to empty flight plan
  table space and header label with hints if plan is empty. Same for procedure search. This should
  help new users.
* Now clearly describing which flight plan legs violate altitude restrictions in tooltip of error
  message. [#347](https://github.com/albar965/littlenavmap/issues/347)
* Added warning if cruise altitude could not be detected when loading X-Plane FMS plan.
* Edit flight plan position now allows to use shortcut `Return` for editing of user defined flight
  plan waypoints.
* Added missing region information (where available) for airports in flight plan table.
* Improved route description parser. Now using VOR if a VOR and NDB with the same name are close by
  (for example `LOWI VIC FAL PRU TEA LIRN`).
* Fixed crashes after dropping several flight plans into the main window for loading.

### Flight Plan Export

* Added separate export menu item for X-IvAp since format differs slightly from IvAp. [#395](https://github.com/albar965/littlenavmap/issues/395)
  Fixed more issues with IVAP export. Alternate airports are now pre-filled in online format export.
* Added TFDi Design 717 flight plan export format. [#399](https://github.com/albar965/littlenavmap/issues/399)
* Now omitting final DCT for flight factor aircraft export to `corte.in`.
  Should fix loading of flight plans without STAR. [#394](https://github.com/albar965/littlenavmap/issues/394)
* Fixed Maddog X export to use correct file extension `mdr`.
* Fixed missing `=` in cruise altitude for BBS Airbus export. [#396](https://github.com/albar965/littlenavmap/issues/396)
* Made loading of X-Plane FMS flight plans more tolerant for wrong `DIRECT` instead of `DRCT`
  which comes from incorrect simBrief plans.
* Fixed issue where flight plan was saved in wrong format when exporting to clean PLN.
* Added flight plan table export to HTML page. [#4](https://github.com/albar965/littlenavmap/issues/4)
* Fixed issue when saving flight plans from airports with empty names which could crash Prepar3D.

### Weather

* Added NOAA and X-Plane high altitude wind forecast (Prepar3D does neither provide a documented format nor
  an interface). [#283](https://github.com/albar965/littlenavmap/issues/283) This shows the NOAA wind aloft forecast which is updated four times a day and
  is used as a source by most weather programs and simulators.
  - Display of wind barbs for selected altitude, flight plan altitude and/or at flight plan
    waypoints. Toolbar button with drop down menu or menu `View` -> `Wind Levels` allow to select
    wind display.
  - Tooltip on map shows wind for several layers when hovering over a wind barb. Setting for
    wind barbs tooltip on `Options` -> `Map Display`.
  - Hovering over the elevation profile shows wind at position in the header line of the elevation
    profile.
  - Fuel planning now considers high altitude winds. The manual cruise wind selection is still
    available and can be used to override the downloaded winds.
  - Top of climb and top of descent and now adjusted for head- and tailwind.
  - See menu `View` -> `Wind Levels` and `Wind Source`, dialog `Options` -> `Map` -> `Tooltips` and
    `Options` -> `Weather` -> `Files and web addresses for wind reports`.
  - Download and processing can be disabled in menu if not needed.
* Added display of gusts as red lines in wind barbs for airport weather.
* Fixed several METAR parsing issues related to no data like `///`. [#441](https://github.com/albar965/littlenavmap/issues/441)
* Now ignoring ASX weather files written for X-Plane and fixed excessive logging about missing
  file. [#422](https://github.com/albar965/littlenavmap/issues/422)
* Full NOAA METAR file is now downloaded to avoid time consuming single web requests for airports.
  Weather display is now faster on map for NOAA METARs.  Changed NOAA download URL in dialog
  `Options`. [#359](https://github.com/albar965/littlenavmap/issues/359)
* Added option to change X-Plane `METAR.rwx` path to allow custom file, e.g. for remote setups
  across a share.
* Added error dialog if weather downloads fail.

### Online Networks

* Added two options to fetch online center boundary from user airspaces. Now optionally looking
  up geometry for online centers either by airspace name or filename. Falling back to circle shape
  if not present. See dialog `Options` -> `Map Display Online` -> `Online Center Boundary Lookup ...`.
* Disabled wrong rounding of frequencies for online centers. Now displaying as given.
* Replacing `A7` in online ATIS text now with line breaks.
* Changed AI and online network aircraft icon colors for better visibility. This is also reflected
  in the toolbar buttons. The aircraft icons can still be overloaded by the user.
* Enabled PilotEdge network. [#388](https://github.com/albar965/littlenavmap/issues/388)
* Fixed issue with negative heading display for online aircraft.

### Map

* Added option to display holding on map similar to traffic pattern. Holding can be customized
  before adding to map. See map, search and flight plan context menu item
  `Add Holding at position`. [#326](https://github.com/albar965/littlenavmap/issues/326)
* Added menu items and drop down button to hide or show user features like range rings, holdings,
  measurement lines and traffic patterns.
  - See menu `View` -> `User Features`.
  - Context menu items for range rings, measurement lines, holds and patterns are now disabled with
    a remark in the menu text when respective user feature is hidden on the map. You have to enable
    the respective user feature before you can add one on the map.
  - Special shortcut clicks on the map like e.g. `Shift+Left Mouse button` for range rings enable
    display of the respective user features silently if hidden.
* Traffic patterns and holdings have tooltips now.
* Added warning dialog before deleting all user features. Warning dialog can be disabled.
* Added small direction arrows for one-way airways which are shown in overview.
* Updated traffic pattern dialog with better table view instead of the simple combo box. Double
  click in pattern dialog now confirms dialog and adds pattern to the map.
* Now disabling all tooltips while doing drag and drop operations: Flight plan changes,
  dragging measurement lines and userpoint movement. [#337](https://github.com/albar965/littlenavmap/issues/337)
* Increased maximum number of map objects from 4000 to 8000.
* Disabled OpenMapSurfer since map is not publicly available at the given URL anymore, needs an
  API key and has download limitations now.
* Added required OpenStreetMap copyright message to map which replaces the Marble plugin which
  often gets into the way stealing mouse clicks.
* Added dialog to image export for files, AviTab and clipboard that allows to choose an arbitrary
  image resolution. This allows to export high resolution and highly detailed maps. A download timer
  allows to wait for online map updates to avoid blurry maps. [#377](https://github.com/albar965/littlenavmap/issues/377) and [#384](https://github.com/albar965/littlenavmap/issues/384)

### Map Navigation

* Added `Click to center map` navigation mode where mouse wheel zooms to center position. Also added
  new `Map Areas` navigation mode using click/touch zones on the map screen. The latter mode is
  helpful for touchscreen navigation. Both navigation options can be selected on new tab
  `Map Navigation` in the options dialog. `Map Areas` still allows the classic navigation if clicking
  outside the active zones. [#380](https://github.com/albar965/littlenavmap/issues/380) and [#411](https://github.com/albar965/littlenavmap/issues/411)
* Navigation aids like symbols, center cross and navigation areas for the above mentioned navigation
  modes can be enabled in `Options` -> `Map Display 2` -> `Navigation Aids` in tree.

### Procedures

* Added custom, user defined final approaches made of final leg altitude and distance to threshold
  which allows to see the approach path including ground, VASI and/or ILS slope in the elevation
  profile. The custom approaches consist of an initial fix and a runway fix. [#307](https://github.com/albar965/littlenavmap/issues/307)
* Now removing all flight plan waypoints that overlap with procedure points when adding a new
  procedure for an already calculated flight plan.
* Fixed many procedure decoding and drawing issues: [#406](https://github.com/albar965/littlenavmap/issues/406), [#408](https://github.com/albar965/littlenavmap/issues/408), [#379](https://github.com/albar965/littlenavmap/issues/379), [#336](https://github.com/albar965/littlenavmap/issues/336) and [#370](https://github.com/albar965/littlenavmap/issues/370)
  - Fixed procedure drawing for course/heading to radial termination legs.
  - Fixed procedure issues with track from fix to DME distance legs and similar.
  - Removed unnecessary intercept instructions at course reversal procedures.
  - Fixes for display of manual procedure legs. Now connecting manual legs to next leg or airport
    using a dotted line.
  - Now also drawing vector legs as dashed line.
  - Fixed display of SID that start with an initial fix. Now using vectors leg. Example: ENSG EVNA1F
  - Fixed issue where first course to fix procedure leg was missing intercept point.
  - Fixed procedure decoding which wrongly used the final endpoint fix altitude as a restriction.
* Fixed several issues with runways from simulator database having no `0` prefix.

### Userpoints

* Moved user point information out of information tab `Navaids` and added separate information tab
  for user defined waypoints.
* Custom userpoint icons now allow SVG, PNG, JPG and GIF image formats.
* Added new default userpoint types VOR, VORDME, VORTAC, DME, TACAN, NDB and lighthouse.
* Fixed crash and missing updates in information window when deleting userpoints.

### Aircraft Performance

[#367](https://github.com/albar965/littlenavmap/issues/367), [#340](https://github.com/albar965/littlenavmap/issues/340) and [#339](https://github.com/albar965/littlenavmap/issues/339).

* Removed manual option to collect performance and introduced background collection which is running
  permanently now. Tab `Current Performance` in window `Flight Planning`.
* New dialog for merging current performance at any time with collected aircraft performance or
  another performance file. See menu `Aircraft` -> `Merge Collected ...` and
  menu `Aircraft` -> `Open Aircraft Performance and merge ...`
* Added new tab `Current Performance` showing collected values.
* Renamed tab `Aircraft Performance` to `Fuel Report`.
* Function `New Aircraft Performance` shows edit dialog now to avoid confusion.
* Aircraft performance dialog now allows to switch between US and metric units independent of
  program settings.
* Added alternate speed, alternate fuel flow, minimum runway length, runway type and usable fuel to
  aircraft performance.
* Tab `Fuel Report` shows a warning if usable fuel (new field) is not given.
* Changed aircraft performance editing dialog and split page in three tabs.
* Added aircraft state, required runway parameters and alternate fuel units to fuel report.
* Improved aircraft performance display without flight plan. Now showing basic information about
  aircraft like estimated range.
* Aircraft performance now uses cruise altitude from flight plan tab to detect if aircraft is in
  cruise state even if no flight plan is loaded.
* Fuel calculation now considers fuel to farthest alternate and falls back to cruise fuel flow and
  speed if values for alternate are not given.
* Added more error and warning messages if performance settings have errors or missing values.
* Now showing a warning if aircraft type does not match performance type.
* Top of climb and top of descent are now calculated considering the manual or real (NOAA or X-Plane)
  wind situation.
* Fix for invalid `Cannot Comply with Altitude Restriction` message. [#417](https://github.com/albar965/littlenavmap/issues/417)

### Search

* All keyboard shortcuts can now be used in search tabs from input fields or buttons. For example:
  Enter an airport ICAO in the search field and press `Ctrl+M` to show the airport on top of the list
  on the map.
* Fixed issues in procedure search where runway selection did not show up when opening context menu
  above a leg.
* Keyboard shortcuts now working everywhere in procedure search.
* `Show in search` in map context menu now selects found items in search result table.
* Fixed issue where map objects were centered unexpectedly when follow mode was enabled for a
  search tab.
* Now showing warning dialog when enabling distance search and search center is not set.

### Webserver

[#163](https://github.com/albar965/littlenavmap/issues/163)

* Added internal web server which can be started in menu `Tools`. This shows a web page which has
  simple use cases for map display, aircraft progress and airport information with automatic refresh.
  The page can be accessed from any computer, tablet or smartphone in the local network (you need to
  adjust you router settings to access it from the internet).
* Simple stateless protocol added to fetch map images and more. See directory `web/test.html` or
  `http://localhost:8965/test.html` when running the webserver for examples.
* Allowing HTTPS/SSL connections to internal web server. An example private and public key for
  encrypted server connections is included.
* Added configuration for web server in option dialog on page `Web Server`.

### Logbook

[#346](https://github.com/albar965/littlenavmap/issues/346)

* Split logbook completely off from userpoints and added new format for entries.
  - New main menu `Logbook`.
  - Added own search tab including edit, delete and create facilities similar to userpoints.
  - Bulk edit for logbook entries available similar to userpoints.
  - Selected logbook entries are highlighted on the map showing great circle line connection
    between departure and destination. Highlights have own tooltip.
  - Added separate logbook entry tab in information window.
  - CSV export and import as well as X-Plane logbook import (Prepar3D logbook format is not
    open and therefore unusable).
  - Legacy logbook entries from the Little Navmap userpoint database can be converted to new
    logbook entries. Entries are shown in search after import including detailed error report.
* Added dialog for logbook statistics with overview, various group queries as well as export
  as CSV and formatted clipboard.
* Detection for takeoff or landing runway for logbook entries is now more error tolerant.

### Little Xpconnect / X-Plane

* Added new X-Plane turboprop definitions used since 11.30 to better recognize aircraft and fuel type.
* Now using tail number from aircraft `.acf` file only if the tail number from the dataref is not set.
  This helps to get the right tail number if add-on aircraft inject this manually using a script.

### Build and Deployment for Developers

[#387](https://github.com/albar965/littlenavmap/issues/387)

* Updated for Qt 5.12.4. Changed OpenSSL to 1.1.1.
* Linux compilation now uses system OpenSSL again and is based on Ubuntu 18.04.
* Added build for Travis CI. Thanks to Jannik for all his work!
* Complete update of project files to allow configuration with environment variables. Removed all
  hard coded paths.
* Added documentation about environment variables to configure build and updated build instructions
  in `BUILD.txt` and `littlenavmap.pro` files.
* Added template for Linux desktop file. Explained usage of Linux desktop file in `README.txt`. [#378](https://github.com/albar965/littlenavmap/issues/378)

### related from atools version 3.4.0.beta

See [CHANGELOG.txt](https://github.com/albar965/atools/blob/release/3.4/CHANGELOG.txt) in atools project for more technical details. Relevant comments were added to list above.

