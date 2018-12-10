---
layout: post
title:  Little Navmap 2.2.2 released
date:   2018-12-10 09:30:00 +0100
categories: release
---

[**► Diese Seite auf Deutsch**](/de/2018-12-10-littlenavmap-stable-222-released_de.html)

----

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.2.2/LittleNavmap-win-2.2.2.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.2.2/LittleNavmap-macOS-2.2.2.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v2.2.2/LittleNavmap-linux-2.2.2.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/)

[**► Features**](/littlenavmap.html)


## Notes

* List of closed issues for milestone 2.2 is [here at GitHub](https://github.com/albar965/littlenavmap/milestone/6?closed=1).
* **It is recommended to reload the scenery library.**
* **Translations for the graphical user interface are included with the download.\\
  Translation packages are not required. Note that some translations are incomplete. The completed packages will be delivered later.**
* **Some new features like the MORA grid, display of FAF, MAP and others need either an AIRAC cycle from Navigraph later or equal to 1810 or the included AIRAC cycle.**
* **X-Plane: Replace the _Little Xpconnect_ plugin with the new included one to see the improvements for aircraft display mentioned below at `X-Plane / Little Xpconnect`.**

## Changes from Release 2.0.3 to 2.2.2

**For more details on fixed issues look at the included `CHANGELOG.txt` or [here online](https://github.com/albar965/littlenavmap/blob/release/2.2/CHANGELOG.txt) for a complete list across all versions.**

Click on images for large view.

### Quick Overview

* Aircraft performance, fuel planning and more.
* Elevation profile now zoomable, displays top of climb and procedure altitude restrictions.
* Display of Airport traffic pattern.
* MORA Grid (minimum off-route altitude grid) shown on map.
* Sun shadow on map.
* Airport weather symbols on the map.
* Modifier mouse clicks in map. E.g. `Ctrl+Click` to start measurement or `Shift+Click` to place range rings.
* Sunrise and sunset for airport in information.
* Bearing and distance to user aircraft in information display for airports and navaids.
* Better printing for map and flight plan.
* Insert flight plan at any position into the current one.
* Change style (also `Night`) on the fly without restart from the menu `Window`.
* Copy map image to clipboard.
* Performance issues with X-Plane airports fixed.
* Prepared for Active Sky XP.

### New online manual chapters and/or changes

* Major update and enhancements in elevation profile:
  [Profile](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/PROFILE.html)
  and
  [Legend](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/LEGEND.html#elevation-profile-legend).
* Aircraft performance:
  [General](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/AIRCRAFTPERF.html),
  [Editing](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/AIRCRAFTPERFEDIT.html)
  and
  [New Flight Plan Table Columns](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/FLIGHTPLAN.html#flight-plan-table-columns).
* Airport Weather:
  [General](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/WEATHER.html#airport-weather),
  [Menu Items](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/MENUS.html#show-airport-weather)
  and
  [Legend](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/LEGEND.html#airport-weather).
* [Sun shading](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/SUNSHADOW.html).
* New settings, crab angle and next wayppoint:
  [Compass Rose](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/COMPASSROSE.html)
  and
  [Legend](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/LEGEND.html#compass-rose).
* Airport traffic pattern:
  [General](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/TRAFFICPATTERN.html),
  [New Menu Items](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/MAPDISPLAY.html#show-traffic-pattern)
  and
  [Legend](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/LEGEND.html#airport-traffic-pattern).
* MORA Grid (minimum off-route altitude grid):
  [New Menu Item](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/MENUS.html#show-mora-grid)
  and
  [Legend](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/LEGEND.html#mora-grid).
* [Mouse clicks with modifiers in map](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/MAPDISPLAY.html#mouse-clicks-modifiers).
* [Switch user interface styles on the fly](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/MENUS.html#window-styles).
* Options for map display and simulator aircraft:
  [Avoid blurry map](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/OPTIONS.html#blurred-map)
  and
  [more details for scrolling and zooming while flying](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/OPTIONS.html#simulator-aircraft-allow-scroll-zoom).
* [X-Plane scenery\_packs.ini is used now](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/SCENERY.html#load-scenery-library-dialog-options).
* [Scenery loading can now exclude files](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/OPTIONS.html#scenery-library-database_exclude).
* [Improvements to printing](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/PRINT.html#printing-the-flight-plan).
* [New airport related menu items in procedure search](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/SEARCHPROCS.html#show-information).
* [Insert flight plan into current plan](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/FLIGHTPLAN.html#insert-flight-plan).
* [Sunrise and sunset for airport in information](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/INFO.html#airport).
* [Bearing and distance of user aircraft to airport or navaid in information](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/INFO.html#general).
* [Show more less data in aircraft progress](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/INFO.html#progress).
* [Better highlighting for airspaces from information window](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.2/en/INFO.html#airspaces).

### New Options

Tooltips in dialog `Options` give more help.

Note that some options were moved around in the options dialog. These are also marked in the images.

| ---- | ---- |
| **Map**<br/> [![Map](/assets/images/littlenavmap_new_options_22_map_small.jpg)](/assets/images/littlenavmap_new_options_22_map.jpg) | **Map Display**<br/> [![Map Display](/assets/images/littlenavmap_new_options_22_mapdisplay_small.jpg)](/assets/images/littlenavmap_new_options_22_mapdisplay.jpg) |
| **Map Display Online**<br/> [![Map Display Online](/assets/images/littlenavmap_new_options_22_online_small.jpg)](/assets/images/littlenavmap_new_options_22_online.jpg) | **Flight Plan**<br/> [![Flight Plan](/assets/images/littlenavmap_new_options_22_plan_small.jpg)](/assets/images/littlenavmap_new_options_22_plan.jpg) |
| **Scenery Library**<br/> [![Scenery Library](/assets/images/littlenavmap_new_options_22_scenery_small.jpg)](/assets/images/littlenavmap_new_options_22_scenery.jpg) | **User Interface**<br/> [![User Interface](/assets/images/littlenavmap_new_options_22_ui_small.jpg)](/assets/images/littlenavmap_new_options_22_ui.jpg) |

### New Features

| ---- | ---- |
| [![New Features](/assets/images/littlenavmap_new_22_small.jpg)](/assets/images/littlenavmap_new_22.jpg) | [![New Menu Items](/assets/images/littlenavmap_new_22_menus_small.jpg)](/assets/images/littlenavmap_new_22_menus.jpg) | [![New Context Menu Items](/assets/images/littlenavmap_new_22_contextmenus_small.jpg)](/assets/images/littlenavmap_new_22_contextmenus.jpg) |

### Elevation Profile

| ---- | ---- | ---- |
| [![New](/assets/images/littlenavmap_new_22_profile_descent_small.jpg)](/assets/images/littlenavmap_new_22_profile_descent.jpg) | [![New](/assets/images/littlenavmap_new_22_profile_ils_small.jpg)](/assets/images/littlenavmap_new_22_profile_ils.jpg) | [![New](/assets/images/littlenavmap_new_22_profile_vasi_small.jpg)](/assets/images/littlenavmap_new_22_profile_vasi.jpg) |

* Added scrolling and zooming ability to elevation profile. Elevation profile now has a context menu also including `Show on Map` and more functions.\\
  Added splitter to elevation profile dock window which has sliders for zooming vertically and horizontally. These can be hidden by dragging the splitter to the right.\\
  Zooming can also be done using mouse wheel (`Wheel+Shift` for vertical zooming).\\
  Added keyboard navigation using cursor keys and numpad keys for zooming and scrolling.\\
  Panning in elevation profile with mouse click and moving like in map. Double click zooms to position on map.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Elevation profile now uses same aircraft icon as map. Changed elevation profile to completely adhere to map painting settings like line width, text size and symbol size. Profile display now hides flight plan if hidden on map.
  [#298](https://github.com/albar965/littlenavmap/issues/298)
* Adjusted elevation profile to display passed, active, straight-in and circle-to-land flight plan legs in the same colors like the flight plan on the map. Navaid symbols are now shown on the descending or ascending line.
  [#298](https://github.com/albar965/littlenavmap/issues/298)
* Added option to display ILS and VASI slopes in elevation profile if an approach is selected. Menu items allow to disable these.
  [#299](https://github.com/albar965/littlenavmap/issues/299)
* Added calculation and display for top of climb to elevation profile display. Calculation based on aircraft performance data.
* Now showing procedure altitude restrictions in profile display.
* Top of descent is calculated considering altitude restrictions of approach or STAR. Same for top of climb and SID. All legs after and at the FAF and FACF points are forced to minimum altitude to avoid arriving above ILS glideslope.
* Display of `Above Ground Altitude` on top label in profile window follows climb and descent slope instead of using cruise altitude.
* Giving clear error indication if cruise altitude is too high (i.e. TOC and TOC overlap) or if restrictions are violated due to too low cruise altitude.
* Removed barely visible highlight on map when hovering cursor above elevation profile. Highlight colors can now be customized in `little_navmap_mapstyle.ini`. Mouse position in elevation profile is now shown with a cyan/black circle on the map.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Jump back to aircraft functionality added in elevation profile. Uses the same settings as the map.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Fixed display color of profile labels for night mode. Removed all dark profile colors and pens from `little_navmap_mapstyle.ini`. Using OS and style colors now.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Solved problems where aircraft in elevation profile jumped to wrong leg or moved backwards.
* Aircraft track is now ignored when determining profile window altitude to avoid confusion when stale tracks result in wrong profile maximum.
* Aircraft direction now turned if reversal relative to active leg detected.
* Fixed several issues with aircraft movement and trail in elevation profile. Profile trail now depends on active leg and is now saved separately from aircraft trail on map.

### Aircraft Performance

[#255](https://github.com/albar965/littlenavmap/issues/255)

See main menu -&gt; `Aircraft` and tab `Aircraft` in dock window `Flight plan`.

Note that the new tab in the `Flight plan` dock window is meant for fuel planning and does not change during flight (except when collecting performance data).

| ---- |
| [![New](/assets/images/littlenavmap_new_22_perf_small.jpg)](/assets/images/littlenavmap_new_22_perf.jpg) |

* Added aircraft performance facilities including edit dialog, new, save, save as, load, file history and report.\\
  Performance files (`lnmperf`) can be dragged into the main window of _Little Navmap_ to load.\\
  Added main menu `Aircraft` and tab on flight plan dock window for loading, saving and editing of performance files.
* Performance and fuel calculation can use an average cruise wind setting where wind is interpolated for climb and descent for calculation.
* Added automatic aircraft performance calculation option during flight (`Aircraft` -&gt; `Collect Performance for Flight`).
* A default performance profile with 3 NM / 1000 ft descent and climb rules and no fuel consumption is default.
* Flight plan table shows both fuel weight and volume in separate columns.
* Window title now shows aircraft performance file name additionally to flight plan file and change state indicated by `*`.
* URLs are recognized in aircraft performance description and can be opened there. Local file and directory links (e.g. `file:///C:/Projekte/atools` or `file:///home/alex/`) as well as web URLs are recognized and opened.
* Showing red error messages on top of fuel report indicating invalid or missing values.
* Added setting in options to change text size in performance report.
* Added aircraft performance file to userpoint log entry.
* Removed now useless speed setting from flight plan dock and deleted rule of thumb descent setting in options dialog.

### Printing

See main menu -&gt; `File` -&gt; `Print Map` and `Print Flight Plan`.

* Added flight plan column selection to print dialog. Added more options for header, fuel, performance and others to print dialog.
* Improved printing of flight plan table. Now has proper word wrap, proper column sizes and shows a header for each page.
* Now uses printer resolution for printing the map to get sharper images. This does not apply to the map background.
* Added colors for procedures to printed flight plan table as shown in flight plan dock window.

### Online Networks

* Added settings for online center sizes in options dialog. Previous settings from INI file are now ignored. See dialog `Options` on tab `Map Display Online`.
  [#267](https://github.com/albar965/littlenavmap/issues/267)
* Added estimated arrival time to online client information tab and search table. Invalid times are now omitted in display.
  [#303](https://github.com/albar965/littlenavmap/issues/303)
* Changed lower limit of online updates for custom networks to five seconds. Emphasized warning to **not to use this for official networks**. See dialog `Options` on tab `Online Flying`.
* Fixed wrong heading display for online aircraft in information display in some cases.
* Improved check for valid whazzup file in options dialog. Now looking for sections `!GENERAL` and `!CLIENTS`.

### Compass Rose

* Now showing crab angle and added display indicator for next waypoint in compass rose.
  [#284](https://github.com/albar965/littlenavmap/issues/284)
* Added configuration options for compass rose in tree view in dialog `Options` on tab `Map Display`.
  [#285](https://github.com/albar965/littlenavmap/issues/285)
* Text size for compass rose, measurement lines and range rings can now be set in dialog `Options` on tab `Map Display`.
* Compass rose range rings are now always drawn. Also if not connected to simulator.
* Fixed error in compass rose where decimal digits were truncated in some cases.

### Flight Plan

* Added drag and drop of flight plans from file manager into main window for loading. Accepts a single flight plan file and all allowed formats for loading (`fms`, `flp`, `pln`) as well as aircraft performance files (`lnmperf`).
  [#291](https://github.com/albar965/littlenavmap/issues/291)
* Added `Insert Flight Plan` menu item into flight plan table context menu. Added `Append Flight Plan` menu item into flight plan table context menu.
* Now selecting and highlighting imported legs after inserting or appending flight plan.
  [#264](https://github.com/albar965/littlenavmap/issues/264)
* Now displaying FAF, IAF, FACF and MAP in the procedure preview, flight plan table and tooltips.
  [#196](https://github.com/albar965/littlenavmap/issues/196)
* FAF and/or FACF is shown with a Maltese cross on the map and in elevation profile. The Maltese cross is applied to either final approach fix or final approach course fix depending on ILS GS intercept altitude and approach type.
  [#196](https://github.com/albar965/littlenavmap/issues/196)
* Changed last `Proceed to Runway` leg to correct `Circle to Land` for approaches without runway ends and `Straight In` for others.
* Circle-to-land and straight-in legs following a missed approach point are now drawn correctly with a dashed line on the map and in the flight plan profile.
  [#252](https://github.com/albar965/littlenavmap/issues/252)
* Added indication for DME distance to or from waypoint in procedure search (e.g. `TAU+6`) and flight plan table for certain leg types.\\
  This minimizes the confusing duplicate display of idents in the flight plan table.
  [#265](https://github.com/albar965/littlenavmap/issues/265)
* Added procedure name to flight plan table instead of the generic names like `SID` or `STAR`.
* Added display of ARINC name (e.g. `Q21` or `I16`) to flight plan header label since some FMCs need this value.
  [#306](https://github.com/albar965/littlenavmap/issues/306)
* Added warning dialog for flight plan zero cruise altitude before saving.
  [#263](https://github.com/albar965/littlenavmap/issues/263)
* Made loading of procedures more tolerant for renamed runways and for ARINC names of procedures.
* Removed annoying change in flight plan when _Little Navmap_ adapted start position on loading. Now leaving flight plan change status unchanged.
* Disabled export of approach procedures for Flight Factor airbus since required data is unknown.
* Fixed issue with missing runway in X-Plane FMS files having circle-to-land approaches. X-Plane can now load these type of approaches without error message.
* Fixed issue for FSX/P3D flight plans missing byte order mark. These were not accepted by ASN or ASX.
* Added saving of altitudes for X-Plane FMS formats which will show up for each waypoint in the stock FMS now.
* Fixed issue in route description generator which omitted SID and STAR when no intermediate waypoints were present.
* Flight plan table now displays localizer frequencies for approaches.
* Moved FMS 3 format to export sub-menu since it became less important.

### Procedures

* Now loading procedures partially from a flight plan if some could not be found.
* Better error report on procedure loading issues. Now showing the procedure names which cannot be found in the database.
* Fixed several drawing and other issues with procedures.
* Added workaround for 3-letter airport idents in procedures which were not recognized and showed an error in the procedure search (red procedure leg).

### Map

| ---- |
| [![New](/assets/images/littlenavmap_new_22_sunshadow_small.jpg)](/assets/images/littlenavmap_new_22_sunshadow.jpg) | [![New](/assets/images/littlenavmap_new_22_mora_small.jpg)](/assets/images/littlenavmap_new_22_mora.jpg) |

* Added mouse click and modifier options for quick access. Doing a second click on the hot spot of a shown feature like range rings or measurement lines removes it. [#268](https://github.com/albar965/littlenavmap/issues/268)
  * Shift+Click: Add or remove range rings or navaid range ring.
  * Ctrl+Click: Start rhumb-line measurement or delete measurement line.
  * Alt+Click: Start great circle line measurement or delete measurement line.
  * Ctrl+Shift+Click: Add or edit userpoint.
  * Ctrl+Alt+Click: Insert point into nearest flight plan leg.
  * Shift+Alt+Click: Append point to flight plan.
* Added `Shift+Wheel` and key combinations for zooming in small steps. See legend for a list of keys.
* Added minimum off route altitude (MORA) data one degree grid display to map. Data coming from Navigraph (also from the included database cycle 1801). See main menu -&gt; `View` -&gt; `Show Minimum Altitude`.
  [#84](https://github.com/albar965/littlenavmap/issues/84)
* Added extra airport display layer in map that shows runways and runway numbers before airport diagram shows up.
  [#308](https://github.com/albar965/littlenavmap/issues/308)
* Fixed several problems for aircraft and next waypoint centering mode. Updates are now triggered by a timer depending on speed and distance to waypoint. Minimum zoom distance is now a function of altitude above ground.\\
  See dialog `Options` on tab `Simulator Aircraft`: `Allow scrolling ...` and `Jump back ...`.
* Centering of active flight plan leg and aircraft (if enabled in options) falls back to simple aircraft centering if distance to flight plan is larger than 50 NM.\\
  This helps to avoid situations where the program zoomed too far out when flying with stale flight plans.
* Changed jump-back-to-aircraft logic to avoid weird behavior (zooming far out and other issues).\\
  **When aircraft is on ground or `Center map on aircraft and next flight plan waypoint` is not selected:**\\
  * Start looking around on the map by moving first (mouse drag or cursor keys) and not by zooming (mouse wheel or plus and minus keys) to suppress aircraft centering for a while.
  * Zooming without movement (drag or cursor keys only) keeps the zoom distance.
* Added option to avoid blurred online maps. This is enabled per default. See dialog `Options` on tab `Map`: `Avoid blurred ...`. This options works best with the map projection `Mercator`.
  [#254](https://github.com/albar965/littlenavmap/issues/254)
* Added option for sun shading on map which can use real time, simulator time or user defined time. See main menu `View` -&gt; `Show Sun Shading` and `Sun Shading` sub-menu.\\
  Shading darkness can be adjusted in dialog `Options` on tab `Map Display`: `Sun shading ...`.
* Added dialog to set user defined time and date for sun shading. See main menu `View` -&gt; `Sun Shading` -&gt; `Set user defined time`.
  [#60](https://github.com/albar965/littlenavmap/issues/60)
* Drawing of complex X-Plane airports accelerated significantly.
  [#245](https://github.com/albar965/littlenavmap/issues/245)
* Added dashed center line to ILS feathers and made feathers semi-transparent.
* ILS labels now adhere to the text background color setting for navaids. This allows to select a white background for the labels for better visibility.
* Now omitting curves, arcs, holds, procedure turns and other fancy geometry of procedures on high zoom factors to avoid a mess up of graphics in the spherical projection. Fixed flight plan leg distance label turning into weird directions when using spherical projection and at high zoom factors.
  [#287](https://github.com/albar965/littlenavmap/issues/287)
* Aircraft icon heading is now more correct at higher zoom levels when using spherical projection.
  [#239](https://github.com/albar965/littlenavmap/issues/239)
* Improved zooming when using a touchpad. Now less sensitive when using two finger touchpad or other gestures.
* Added workaround for issues when zooming to map objects. Now determining the best zoom distance until all is visible.
* Fixed issue of map jumping to the wrong place when zooming around the anti-meridian with the mouse wheel.
* Changed map context menu to correctly show only the mentioned item in `Show information` menu item and nothing else.
* Replaced home view symbol on map with actual icon from toolbar button.
* Moved `Remove all Ranges, Measurements and Patterns` from all context menus to main menu `Map`.
* Several issues with the map context menu and `Show Information fixed`.
* Fixed several drawing issues with the aircraft trail, procedures on high zoom levels, flight plan, ILS and others.
* Replaced OpenMapSurfer hillshading with the one used for OpenStreetMap since server is offline.

### Airport Weather

See main menu -&gt; `View` -&gt; `Show Airport Weather` and
`Airport Weather Source`. [#6](https://github.com/albar965/littlenavmap/issues/6)

| [![New](/assets/images/littlenavmap_new_22_weather_map_small.jpg)](/assets/images/littlenavmap_new_22_weather_map.jpg) |

* Added display for weather symbols to map showing lowest cloud coverage (from empty to filled circle), wind direction, wind speed (barbs) and flight rules according to official color coding: LIFR/magenta, IFR/red, MVFR/blue and VFR/green.
* Added map weather selection for all supported weather sources in menu view. See main menu -&gt; `View` -&gt; `Airport Weather Source`.
* Airport weather icons are loaded from FSX/P3D and remote connections too.
* Showing flight rules and icons for all sources in information and tooltip. Showing selected source for weather in map in the information display by adding suffix `- Map` to `Flight Rules` text.

### Weather

* Attempt to fix weather loading issues (disappearing report) for X-Plane `METAR.rwx`. Weather data is now kept if file was deleted.
* Fixed issue with ActiveSky showing old weather from stale `activeflightplanwx.txt` flight plan files. Now always using the latest from either `activeflightplanwx.txt` or `current_wx_snapshot.txt`.
* General improvements to improve reliability when reading weather files and detecting changes on them.
* More improvements on error tolerance and fixes when reading METARs.
* Prepared for Active Sky XP.

### Information and Progress

* Added sunrise and sunset display (civil twilight) in UTC for airport information display. Time is based on simulator date or real date depending on connection status. See in dock window `Information` on tab `Airport`.
  [#281](https://github.com/albar965/littlenavmap/issues/281)
* Added distance and bearing (rhumb line) to navaids and airports from the user aircraft in information window and tooltip. Disabled when distance is larger than 500 NM.
  [#274](https://github.com/albar965/littlenavmap/issues/274)
* Added `More` / `Less` link to aircraft progress display to show detailed or brief performance information during flight.
* Added crab angle to aircraft progress display to indicate the needed heading to the next flight plan waypoint in cross wind.
  [#284](https://github.com/albar965/littlenavmap/issues/284)
* Information tabs for airspaces and online centers now highlight geometry on map when clicking the blue `Map` link in the information window.\\
  Above mentioned tabs also have a `Remove Highlights from Map` link on top that clears all highlighted airspaces from the map.
* Now showing restricted airspace designation (like `D-30`) in information and tooltip.
* Showing active time criteria (NOTAM, holidays or others) for airspaces in information window. Added multiple code as indicator for duplicate overlapping airspaces. Navigraph data only.
  [#279](https://github.com/albar965/littlenavmap/issues/279)
* Now displaying related airport information for navaids if available.
  [#289](https://github.com/albar965/littlenavmap/issues/289)
* Com frequencies are now forced into 25 kHz raster on display to avoid invalid frequencies like 0.69 MHz.
* Showing more important flight parameters (IAS, indicated altitude, etc.) bold in aircraft progress.
* More fixes and improvements to information display and tooltips.

### Airport Traffic Pattern

[#197](https://github.com/albar965/littlenavmap/issues/197)

| ---- | ---- |
| [![New](/assets/images/littlenavmap_new_22_pattern_dialog_small.jpg)](/assets/images/littlenavmap_new_22_pattern_dialog.jpg)  | [![New](/assets/images/littlenavmap_new_22_pattern_small.jpg)](/assets/images/littlenavmap_new_22_pattern.jpg) |

* Added option to draw airport traffic pattern on the map to all map, flight plan table and airport search context menus. `Display Airport Traffic pattern at ...` is enabled when right clicking on an airport.\\
  Right click on traffic patter hotspot near runway threshold to remove it.
* A configuration dialog is shown when adding a traffic pattern that allows to customize distances, colors and other options.

### Options

* Moved options `Use a short name ICAO_ICAO.pln when saving FSX or P3D flight plans instead of the long name`, `Avoid overwriting Flight Plan with not matching departure and destination` and `Center flight plan on map after loading` to flight plan tab in options.
* Various other changes for online networks, map display, scenery library and more. See related items in this change log.

### Search

* Added `Show Information for Airport`, `Show Airport on Map` and `Show Airport in Search` items to the context menu in the procedure search tab.
* Various other improvements and fixes to procedure search.

### Userpoints

* URLs are now recognized in userpoint information display and can be opened there. Local file and directory links (e.g. `file:///C:/Projekte/atools` or `file:///home/alex/`) links as well as web URLs are recognized and opened.
* Fixed issue where takeoff or landing airports and runways were not recognized correctly for logbook entries.

### User Interface and General

* GUI style including `Night` can now be changed on the fly from the menu `Window` -&gt; `Style`. Removed style from options dialog and moved map darkness for night style to dialog `Options` to tab `Map Display`. Fixed all remaining artifacts which appeared after style change.
  [#142](https://github.com/albar965/littlenavmap/issues/142)
* Added option to disable map window undocking in options dialog on tab `Map`.\\
  Allowing to undock the map window (option checked - default) can cause issues when resizing dock windows or the main window.\\
  Uncheck this option if you see strange or annoying resizing behavior when changing dock window or main window sizes.\\
  In some cases the dock window might also freeze, i.e. docks cannot be resized. Uncheck this option if you see one of these issues.
* `Reset window layout` now also changes window size and centers window to avoid messed up layouts. Changed default layout to avoid locked elevation profile size.
* Disabled restoring of full screen mode on macOS since Qt freezes dock windows.\\
  If that happens double click the title bar of any dock window to float it. Double click again to dock it back and you can resize all docks again.
* Now always showing version in main window title. Development versions also show Git revision.
  [#304](https://github.com/albar965/littlenavmap/issues/304)
* Added `Copy Map Image to Clipboard` function in file menu.
* Now appending date and time suffix to map screenshot name to avoid overwriting for `Save Map as Image`.
* Added warning dialog when using the buggy and limited online elevation data.
* Added information dialog for Navigraph only scenery mode.
  [#262](https://github.com/albar965/littlenavmap/issues/262)
* Changed `Show map window` menu item to `Show all floating Windows` which raises all floating dock windows. Can also be used to get a lost map window back.
* Now raising all floating windows on startup to avoid hidden and/or inaccessible windows.
* Changed search path for custom map themes to be based on executable path since macOS gives a wrong current directory.
  [#261](https://github.com/albar965/littlenavmap/issues/261)
* Log file is now rotated if the file size of 10 MB is exceeded. This avoids overwriting on startup and eases error reporting.
  [#275](https://github.com/albar965/littlenavmap/issues/275)
* Added new `Remove all Highlights and Selections` menu item to menu `Map` and toolbar. [#308](https://github.com/albar965/littlenavmap/issues/308)
* Added `Copy to Clipboard` to update notification dialog to copy contents as plain and formatted text.
* Added FAQ link help menu.
* Various other improvements regarding error messages and changes in menu structure.

### Scenery Library

* Files can now be excluded from loading for all simulators in options dialog.
  [#29](https://github.com/albar965/littlenavmap/issues/29)
* List in exclusion paths now allow multi selection. See dialog `Options` on tab `Scenery Library Database`: `Add Files ...`.
* Check box for reading inactive scenery is now enabled for X-Plane to choose between reading  `scenery_packs.ini` or full directory structure in scenery loading dialog. This helps if using tools to disable scenery.
  [#151](https://github.com/albar965/littlenavmap/issues/151)
* Now fetching the first X-Plane installation path from `x-plane_install_11.txt` as base path.
* X-Plane parking positions are now at correct coordinates.
  [#256](https://github.com/albar965/littlenavmap/issues/256)
* Fixed issues with symbolic links in scenery loader. Now using path as-is instead of converting to canonical path (i.e. resolving the symbolic links).
  [#29](https://github.com/albar965/littlenavmap/issues/29)
* Database minor version updated to 13.

### X-Plane / Little Xpconnect

* Now reading X-Plane `acf` files once to get aircraft name and engine type for a better classification. Allows to show helicopter and jet AI symbols in Little Navmap.
  [#271](https://github.com/albar965/littlenavmap/issues/271)
* Added airplane model and registration. Now using description for title.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.2/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
