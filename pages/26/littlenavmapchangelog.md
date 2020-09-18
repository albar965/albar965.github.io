---
layout: subpage
title:  "Changelog for 2.6 Versions"
date:   2020-09-17 09:00:00 +0200
---

[Alex’ Projects](/index.html)
►  [Little Navmap 2.6.0.beta released](/release/2020/09/18/littlenavmap-beta-260-released.html)
► Changelog for 2.6 Versions

# Version 2.6.0.beta

This page contains changes for the current version only. See [CHANGELOG.txt](https://github.com/albar965/littlenavmap/blob/release/2.6/CHANGELOG.txt) for a complete log.

[**► Screenshots of new 2.6 Features**](/pages/26/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.6 Versions**](/pages/26/littlenavmapmanuals.html)

**Please do not hesitate to let me know about bugs, inconsistencies and ideas for improvement.**

## Important

* **The data exchange protocol has changed. You have to update _Little Navconnect_ (if using
  remote/network connections) and _Little Xpconnect_ (if using X-Plane) too.**
* **Reload the scenery library database to see fixes and improvements.**

## Limitations

* Translations are not updated yet. The user interface might be a mix of your local language and
  English.
  Feel free to send me an email or ask in the Avsim forum if you like to contribute a translation
  of the program or the manual.
* The online and offline manuals are not updated yet. Neither the English nor the translated
  versions. Help buttons and links are functional but point to placeholder pages.
  Ask in the [Avsim forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum/) if you have questions.

## Notable Changes from Release 2.4.5 to 2.6.0.beta

* **MSFS support. _Little Navmap_ detects MSFS installation paths, can read the scenery library,
  follows user aircraft and can save/load flight plans also with procedures.**
  See `MSFS Limitations` below for known issues.
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

## MSFS Limitations

* No airport weather or any other weather information since the weather functions in SimConnect are
  deprecated and can even cause crashes. Weather functionality will be added again once supported by
  MSFS.
* MSFS cannot load transitions and inserts these automatically depending on plan.
* No TACAN (all shown as DME) and no VORTAC (all shown as VORDME).
* Airways in MSFS are lacking maximum altitude restrictions, one-way restrictions
  and RNAV attribute. This can result in invalid plans calculated by MSFS.
* Distinct airways with same name can appear as a single connected airway
  opposed to real world in LNM due to MSFS format limitations.
* Flight plans for MSFS cannot be saved with a parking spot like ramp or
  gate selected. Select these in the simulator after loading the plan.
  Use the dropdown list in MSFS to select a parking position. Selecting a parking position as departure
  will erase the flight plan.

## Notes

* Some features like RNAV airways and the new UIR/FIR regions are only available with Navigraph
  databases from cycle 2008.
* Little Navmap will reset some settings like range rings, window layout, search options, order of
  table columns on first start using the new version.
* Range ring radii in options dialog are reset back to default values.
* The flight plan short and long format options were dropped. Go to `Options` on page `Flight Plan`
  and adjust the file pattern to your needs.
* Little Navmap will ask to create a recommended folder structure for your files in documents
  folder. Skip this step (`Do not show again`) if you do not like this.
* macOS is supported up from macOS Sierra 10.12 inclusive. Older versions cannot be supported anymore.

## Changes

### Flight Plan

* Introduced the new default LNMPLN flight plan format for saving and loading. Completely changed
  open/save/save-as logic. All other formats are now only exported and not saved. Removed most of the
  confusing warning dialogs when exporting to other formats. Little Navmap can still open and export
  the same flight plan formats as the old version. No limitations were introduced in this regard.
* Now showing message below flight plan table if procedures, waypoints or airways could not be
  found. Details for message can be shown by clicking on message.
* Added remarks tab to flight planning window which is saved with the new flight plan format.
  Adding change indication `*` to flight plan remarks tab only if it has text.
* Added region, name and comment fields for user defined flight plan points (green rectangles)
  which can be saved in LNMPLN format. Right click on user defined flight plan position in the map or
  flight plan table to edit.
* New option to add comments for waypoints and other navaids in flight plan. Limited to departure,
  destination and en-route points. Not available for alternate and procedure waypoints. Right click
  on waypoint in flight plan table or map to edit.
* Added columns for wind forecast and calculated altitude to flight plan table.
* Added button for column settings to flight plan window.
* Fixed issues when loading flight plans with ICAO ids that are different to X-Plane ids. For
  example ICAO `CAT4` versus X-Plane `AT4`.
* Removed route type (VOR, Direct, etc).
* Automatic changing of departure position when switching simulator does not alter
  changed status (`*` in title) now. This helps to avoid flight plan changed warnings dialogs
  when changing the simulator database.
* Now showing correct approach related ILS frequency for runways with more than one ILS. For
  example `EDDF 25R/07L`.
* Flight plan table header now shows tooltips.
* Preventing crashes when setting cruise altitude to zero now.
* Fixed crash when adding procedure after user defined flight plan waypoints.
* Fixed problem where flight plan legs inside procedures could be moved.
* Disappearing airports fixed when editing flight plan with drag and drop (rubberband).

### Flight Plan Export, Save and Print

* Added flight plan multi-export with configuration dialog in menu `File`. Removed now redundant
  menu items for export.
* Removed short and long flight plan name option and replaced it by a more flexible pattern based
  approach. User can now define own default flight plan name. See dialog `Options` on page `Flight
  Plan`.
* Improved style and text display for flight plan table in HTML export, web server and printing.
* Added cruise altitude and distance to top of climb as well as top of descent to flight plan table
  print as well as HTML export.
* Attempt to fix issues for X-IvAp, IvAp and vPilot export.
* Added flight plan export format for Aerosoft CRJ.
* Added support for reading Garmin FPL files (XML format).
* Added option to export flight plan without airways using only waypoints.

### Route Description

* Fixed issue where a SID was wrongly identified as a waypoint. Example: `SGES COSTA COSTA A311 VAS
  A556 VIR W11 PAZ A304 JUL V11 ILMOX ILMO3B SPZO`. Where `COSTA` is the name of the SID as well as
  the name of the exit waypoint.
* Clean up and improvements in route description code to be able to parse tracks. Can read route
  strings without destination and departure airports now for parsing snippets. Can now optionally
  match user coordinates to waypoints.
* Fixed several issues when reading and writing route descriptions with airways at procedure
  entry/exit.
* More bug fixes in reading and writing route descriptions and cleanup in drop-down menu button.

### Fuel Report and Aircraft Performance

* Changed aircraft performance file saving to new XML format. Old INI format is automatically
  detected and can still be loaded. LNMPERF can be saved into old format by selecting another file
  filter in save dialog if needed.
* Issue in performance tab fixed which was not updated after connecting to simulator.

### Flight Plan Calculation

* Flight plan calculation was completely reworked and can now optionally skip regions void of
  airways by inserting waypoints into plan.
* Added floating dock window for flight plan calculation and options. Removed now useless toolbar
  buttons and menu items.
* New options to use oceanic tracks and avoid RNAV airways when calculating flight plans.
* Added progress dialog with cancel option for flight plan calculation.
* Fixed issues where airway was erased in flight plan at procedure entry or exit. Now adding extra
  waypoint in export formats at procedure entry or exit if an attached airway is used. Overlapping
  departure waypoints are now correctly removed when adding a SID.
* Flight plan can now be calculated between or at procedure entry and exit points without the need to
  add dummy waypoints.
* Removed option to force algorithm using the closest radio navaids near start and destination
  before waypoints. Add these manually if needed.

### Oceanic Tracks

* Added loading and display of NAT, PACOTS and AUSOTS tracks on map, in information display and for
  tooltips. Added new toolbar button for track display. See menu `Flight Plan` and `View`.
* Flight plan calculation can now use tracks.
* Added download on startup as well as manual download for tracks.

### Elevation Profile

* Added tooltip replacing the header text for mouse hover in the elevation profile. Added
  calculated altitude, course and heading (based on wind) to display text in profile tooltip.
* More display improvements.

### Options

* New shortcut `Ctrl+Shift+,` for options.
* Options dialog now adds scrollbars on pages to avoid window growing too large.
* Added option to fill and raise procedure search tab when clicking on airport. Page `Map` ->
  `Update Procedures on airport click`.
* Added option to enable or disable loading of aircraft performance file on page `Startup` in
  dialog `Options`.
* Moved airport display options to tree view on right side of page `Map Display 2`. Added options
  to show runways, taxiways, aprons, parking and boundary separately for airports.
* Added customization options for airway line thickness, airway text size and airway text
  background. Page `Map Display`.
* Added options to disable user and AI aircraft click and tooltip on page `Map`.
* Added option to select map font in options dialog on page `Map Display`. Uses bold system font
  per default.
* Added option to clear flight plan table selection and highlights while flying on page `Simulator
  Aircraft`.
* New display option to show true airspeed for user and AI aircraft on tree on the right side of
  page `Map Display 2`.
* Split page `Weather` into two new pages `Weather` and `Weather Files`.
* Tooltips can now be disabled for the whole program except for the map where separate options for
  disabling exist. See options on page `Display and Text`.
* Fixed issues with online connections when using high update rates.

### Procedures

* Added fix for DME arc legs where last fix before arc does not match distance. Example: `LTBS
  WESTB LCRA`
* Fixed issue where intercept position of track to fix legs with an initial fix in between was not
  calculated correctly.
* Display issue for course to fix procedure legs after initial fix solved.
* Fixed issue with wrong intercept legs after circular (DME Arc or constant turn radius) legs in
  procedures.
* Problems with manually terminated procedure leg types fixed. Example: `CYDC PIGLU3 CYLW`. Fixed
  crashes, display issues and wrong distance calculation.
* Increased detail level for procedure drawing to avoid circular legs, holds or turns collapsing
  into lines too early.
* Fixed disappearing holds and/or procedure turns when scrolling map. For example at KSMN, approach
  VORDME-B IRWAV (VDMB) via LKT.
* Many more fixes and improvements when loading and displaying procedures.

### Weather

* Added download of full VATSIM weather file which results in faster updates. The program can now
  show nearest VATSIM weather station for an airport.
* Changed VATSIM METAR URL to encrypted HTTPS/SSL.
* Improvements to METAR reading and weather display.

### User Interface

* Added saving and loading of window layouts to menu `Window` including recent file list. Layout files
  can also be loaded by dropping the files into the main window. Saved state covers window size,
  position, maximized, full screen, dock windows, tool bars and status bar for both normal main
  window as well as maximized main window.
* Added an option to window menu to forbid dock windows snapping back into main window.
* Added options to raise dock windows and/or main window on mouse over.
* Tooltips for whole program are now always shown even if window is inactive.
* Added startup dialog asking to create recommended folder structure in documents folder. This also
  sets the default path for all file dialogs where applicable.
* Added menu items to open log file, configuration file and database folder. See `Tools` -> `Files
  and Folders`.
* New option to keep main window in foreground before other applications.
  Menu `Window` -> `Keep in Foreground`.
* Made instructions for installing the GLOBE data more clear in user interface.
* Added toolbar for simulator connection, load scenery library and options.
* All toolbutton (toolbar and route string) drop down menus can now be teared off by clicking on
  the dashed line. This allows clicking menu items repeatedly without the need to reopen the menu
  again.
* Tooltips in file histories now show full file path.
* Added handling for HTTPS/SSL errors in encrypted connections like they happen for self signed
  certificates. Now showing a dialog on SSL errors which allows to cancel downloading or to ignore
  the error.
* Added options to select GUI and map font separately in options dialog. Removed old options to
  change font in configuration file.
  Note that any custom font like [b612-font](https://b612-font.com) has to be installed using
  operating system functions before.
* Added log of background messages like weather downloads on the left side of the status bar
  tooltip. Tooltip with messages can be shown on click. Shows number of messages if no other status
  bar message is shown.
* Moved option to show top of climb and top of descent into `View` menu and to elevation profile
  context menu.
* Added free language selection in options dialog. Shows all available translations in combo box.
* Now overriding locale/region settings after setting language. This fixes an issue where setting
  region formats like number and date to English also changed the language.
* Added `Remove all Ranges, Measurements, Patterns and Holdings` option to reset all function.
* Fixed issues where shortcuts in flight plan menu could be triggered inadvertently even if
  disabled.
* Disabled splitter styling for Linux to avoid messing up user interface themes.
* Removed rhumb measurement lines and all other rhumb distance/course options in flight plan legs
  and flight plan table. Removed rhumb course and distance display settings in options dialog.

### Scenery Database

* MSFS: Full support to load airports, airways and navaids. SID and STAR cannot be loaded, though.
* Changed progress dialog when loading scenery to avoid dialog growing larger than screen size.
  Added `Counting files` to describe initial freeze in scenery loading dialog.
* Now using airport ICAO ids throughout the whole program instead of the X-Plane internal ids. The
  X-Plane internal id is still shown in information window if it differs from ICAO id.
* Fixed issues with user home folders containing special characters. This caused issues when
  detecting flight simulators. Path to `Scenery.cfg` was wrongly requested for X-Plane in this case.
* Fixed issue where loading of X-Plane on a blank system without `x-plane_install_11.txt` failed
  which can happen if XP was copied manually to the system without starting it. Path to `Scenery.cfg`
  was wrongly requested in this case.

### Simulator Connection

* Reorganized connect dialog user interface. Now using a tab for each simulator.
* Added frigate and carrier as boat AI for X-Plane. Added fetch AI ships option for X-Plane.
* SimConnect is now included. Enabled loading of a local copy of `SimConnect.dll` if present.
  WinSxS and manifest is only used as fallback.
* Showing a warning message in connect dialog if FSX SP2 SimConnect cannot be loaded.

### Information and Aircraft Progress

* Moved all airport information tabs to a separate airport tab. This should make more clear which
  tabs are updated when clicking on an airport or navaid.
* Corrected waypoint from/to display in progress display for next waypoint. Now indicating from/to
  for certain procedure legs like `Fix to altitude`. Omitting duplicate waypoint display for manual
  legs in elevation profile.
* Replaced wrong `Crab angle` label with `Heading` in aircraft progress. This still shows the same
  wind corrected heading value.
* Now showing fuel and estimated time of arrival for next waypoint.
* Added runway smoothness and airport flatten flags from X-Plane to information display.
* Showing new X-Plane icing options in user aircraft tab:
  AOA, inlet, prop, static and window ice given in percent of the maximum in case of multiple sources.

### Online Networks and AI

* New option to set maximum AI range around the user aircraft in connection dialog for FSX, P3D and
  MSFS.

### Map

* Completely reorganized the map context menu. Now showing sub-menus for all objects nearby the
  right-click position if a menu action can be applied to more than one object.
* Now showing more hints why menu items are disabled, like `no procedure`, `hidden on map` or `is
  destination`.
* Added hints for mouse click modifiers like `Ctrl+Click` to map context menu.
* Procedures can now be deleted from the map context menu by right clicking on a procedure waypoint.
* Mouse `Ctrl+Wheel` can now be used to quickly increase and decrease details in map.
* Added distance to last flight plan leg to airport and navaid tooltip. This helps when building
  plans manually.
* Compass rose can now be detached from the user aircraft independent of connection status.
  Detached compass rose remains in screen center. Change this in menu `View` -> `Attach Compass Rose
  to Aircraft`.
* Range rings now allow distance rings smaller than one unit. See `Options` -> `Map`. Allowed
  values are 0.01 to 4000 NM, km or miles.
* Added tooltip for range ring center with distances.
* Font can be changed for map display. This affects the map and the elevation profile. Font is set
  to a bold variant of the system font on first start of the new Little Navmap version.
* Inaccurate map scale overlay corrected. Scale now uses natural range steps opposed to values
  like 32, 48, 96 before. Scale saves options now.
* Now showing five to one degree grid on map if enabled with visible latitude and longitude labels.
* Fixed problem with inadvertent zooming when moving the mouse above the navigation overlay on the
  bottom right while scrolling.
* Fixed several line drawing issues around the anti-meridian in Mercator mode. Related to .
  This also solves issues with ghost tooltips for airways and ghost airspace tooltips in the Pacific
  Ocean. Range circles now drawing correctly.
* Increased VOR and NDB symbol sizes at lowest zoom levels.
* Fixed issues where wrong waypoints were shown in tooltip and other selections over procedure
  points.
* Now showing warning if zooming to a position near the poles in Mercator projection.
* Disabled loading status (`Waiting for update`, now `Loading`) in statusbar for custom maps since
  it is unusable there. Status `Loading` is removed after a timeout since some maps do not provide
  meaningful values.
* Changed map settings for AI aircraft. Now visible for higher zoom levels.
* Many more improvements and fixes in map display and map handling.

### Logbook

* Flight plan, aircraft performance and GPX format files for trail and flight plan preview are now
  attached to a logbook entry. Files are attached upon takeoff and landing and can be opened, loaded
  and saved from the context menu in the search table or the logbook entry edit dialog. Export to and
  import from CSV covers these attachments too.
* Direct connection, flight plan with waypoints and trail are shown when clicking on one or more
  logbook entries in the search table. All three options can be enabled or disabled.
* Added separate airport search field to logbook search window which filters by both departure and
  destination. Departure and destination search fields were moved to additional search options line.
* Added more airport related menu items to logbook context menu: `Show Information`, `Show on Map`,
  `Set as destination`, `Set as Departure` and `Add as alternate`. Right click on departure or
  destination airport name or ICAO field in the search table to enable these menu items.
* Option for CSV header in logbook export added. Added header detection on CSV import.

### Airspaces

* Added new `FIR` and `UIR` boundary types instead of the merged type `Center`. New program remains
  backward compatible with old databases and new databases can still be used with the old program
  (versions <= 2.4.5). New boundaries need Navigraph databases newer or equal to cycle 2008.
* Moved class F and G airspaces to ICAO dropdown button in toolbar.
* Fixed display issues of large airspaces and ghost tooltips, especially near the anti-meridian and
  for airspaces extending to the poles.

### Userpoints

* New userpoints can now be created as a copy when right clicking on the map. This means that all
  fields are taken from a present userpoint on the map if you right click on it and select `Add
  Userpoint`.
* Corrected default types for userpoint when creating a userpoint based on navaid. Now setting
  types `VOR`, `NDB` and others correctly.
* Added display of magnetic declination in userpoint edit dialog and userpoint infofmation.
* Changed userdata export headers for more readability. Added header option for CSV export in
  userdata. Added recognition of header on import.
* Renamed all occurrences of `Userdata` in the user interface to `Userpoints` for more consistency.

### related from atools version 3.6.0.beta

See [CHANGELOG.txt](https://github.com/albar965/atools/blob/release/3.6/CHANGELOG.txt) in atools project for more technical details. Relevant comments were added to list above.

