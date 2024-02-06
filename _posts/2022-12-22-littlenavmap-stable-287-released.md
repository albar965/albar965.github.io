---
layout: post
title:  Little Navmap 2.8.7 released
date:   2022-12-22 19:00 +0100
categories: release
release-version: 2.8.7
---

### Direct Download (outdated Version)

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.7.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.7/LittleNavmap-win64-2.8.7.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.7.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.7/LittleNavmap-macOS-2.8.7.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.7.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.7/LittleNavmap-linux-22.04-2.8.7.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.7.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.7/LittleNavmap-win32-2.8.7.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.7.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.7/LittleNavmap-linux-20.04-2.8.7.tar.gz)

#### 🎄🎁 Wishing you all a magical holiday season and best wishes for a happy New Year! 🎁🎄

## Notes

**This is a stable release of Little Navmap.**

**See
[Screenshots of new 2.8 Features](https://albar965.github.io/pages/28/littlenavmapscreens.html)
for an overview of new features.**

This version is ready for the latest MSFS and for X-Plane 12. See important known issues below for MSFS.

The updated user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/).

See here for user manual downloads:
[User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable).

**This changelog also explains new or moved/changed features.
First look here if anything is not clear or missing.**

**X-Plane users: Reinstall Little Xpconnect from this package to get but fixes and changed.
Otherwise fuel flow calculation, X-Plane weather information or other functions might not work
correctly in Little Navmap.**

**Little Navmap probably reminds you to reload scenery library databases after updating. Please do
so to benefit from new features and bug fixes.**

A big thank you to all who reported bugs and issues!

## Known Issues MSFS

**Active pause in MSFS breaks the connection and does not allow to reconnect.
Use the key `Esc` for normal pause to avoid problems.**

## Changes from 2.6.19 to 2.8.7

This list describes the most obvious changes. See below for details and changes between the beta
and candidate releases as well as links to the related user manual chapters.

See [Screenshots of new 2.8 Features](https://albar965.github.io/pages/28/littlenavmapscreens.html)
for an overview of new features.

### Help

* Updated English user manual:
  [Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/).
  Adapted to new features and is available online as well as included as PDF
  (see [User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable)).
* Now automatically using HTML help files from folder `help/en` or other supported language codes
  if installed. Download help from
  [User Manuals - Stable Releases](https://albar965.github.io/manuals.html#stable)
  and extract the zip file to `.../Little Navmap/help/en` to use the offline user manual.
* Added changelog item to help menu.
* Removed built-in map legend. This now available either online or in the included PDF user manual.
  See online
  [Little Navmap User Manual - Legend](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/LEGEND.html)
  or from the menu `Help`.

### Windows Builds

**There are two builds of Little Navmap and Little Navconnect for Windows available now:**

* **Windows 64-bit:** For MSFS and all X-Plane versions.
* **Windows 32-bit:** For FSX and Prepar3D.

See [Little Navmap User Manual - Windows Builds](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/INSTALLATION.html#windows-builds) for details.

### User Interface

* Changed status bar to avoid growing and shrinking fields. Now keeping maximum size to avoid
  jitter.
* Added option to hide dock window title bars in menu `Window` -> `Show Dock Window Title Bars`.
  Uncheck this to get more screen space inside the main window.
* Added airport transition level for X-Plane and Navigraph data.
* Resetting flight plan table, airport search result table and navaid search result table view on
  update now to avoid display of wrong columns or missing table columns.
* Added introductory dialog for first time users explaining further steps.
* Swapped `Shift+F11` and `F11` functions. Fullscreen is now `F11` since this is a common shortcut
  for most applications.
* All actions for `None` and `All` in toolbar button dropdown menus can now toggle between states
  none, all and last selected state. Click `All` a second time to revert to the previous selection.
[#762](https://github.com/albar965/littlenavmap/issues/762)
* Now checking for base folder structure (`Little Navmap Documents`) only on first startup to avoid
  issues when changing language. Folder structure can be now be created manually from `Tools` ->
  `Create Directory Structure`. [#782](https://github.com/albar965/littlenavmap/issues/782)
* Added warning message when using scenery library with not matching simulator in connect dialog.
  This shows up when connecting to MSFS with an active X-Plane scenery database, for example.
* Separated tab bar reset into a new menu item `Reset Tabs to Default` in menu `Window`. Window
  layout and and tabs can now be reset separately.
* Added show map cache to menu `Tools` -> `Files`.
* Changed symbol for nautical miles to correct official `NM`.
* Fixed issues with macOS aliases. These can now be used in X-Plane `Custom Scenery` to link to
  add-ons.
* Default style on macOS after first start is now Fusion and also reset on update since the default
  macOS style is too clunky.
* Removed check for wrong macOS version on program startup to avoid false warnings.
* Raised macOS minimum requirement to 10.13 High Sierra.
* Updated French translations by Patrick.
* Updated Italian translations by Flavio.

### Flight Plan

* Flight plan is now saved to a temporary file on exit. This avoids the question dialog when
  exiting the program after building or modifying a plan. This means: You create a new flight plan
  from scratch or modify a present one and Little Navmap will not ask to save the plan when exiting.
  Instead the same plan is reloaded on next startup. Continue editing without saving and the changed
  plan will be reloaded on next startup. You can still use the `Save` and `Save as` functions as
  before. You can disable this behavior on options page `Startup and Updates` by disabling `Load last
  used flight plan`. The temporary plan is stored in the settings folder as file
  `little_navmap.lnmpln` besides `little_navmap.ini`.
* `Avoid overwriting Flight Plan with not matching departure and destination` now enabled per
  default on new installations. You can disable this setting in the options dialog on page `Flight
  Plan` if needed.
* Now allowing arbitrary points for departure and destination. This covers all navaids, user points
  and coordinates which can be used as start or destination points. The elevation profile is now
  calculated without error messages for these kind of flight plans. Note that you have to install the
  GLOBE elevation data to get the correct elevations for these points. You have to use the `Add to
  flight plan` menu item, the `Append to flight plan` menu item, the keyboard shortcut
  `Ctrl+Alt+Click` (add), `Shift+Alt+Click` (append) or the drag and drop flight plan editing to add
  arbitrary points as departure or destination. Note these flight plans are not supported by all
  simulators or add-ons.
* Magnetic course of flight plan legs is now always calculated using normal magnetic declination.
  VOR calibrated declination is ignored. Other options to display VOR inbound and outbound magnetic
  course are now available. See
  [Little Navmap User Manual - Magnetic Declination](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/MAGVAR.html).
* Added optional inbound and outbound VOR course to aircraft progress display considering VOR
  calibrated declination. This is always shown when the next or last waypoint is a VOR, VORDME or
  VORTAC. Enable this in `Tools` -> `Aircraft progress display options` -> branch `Next Waypoint` ->
  `Leg course from` and `Leg course to`.
* Removed `Ignore declination of VOR and other radio navaids` on options page `Flight Plan` since
  there are other ways to display VOR inbound and outbound magnetic course now.
* Removed merging (e.g. grouping of multiple deletions into one) of same changes for undo or redo
  in flight plan operations. Now single changes can be undone.
* Changed flight plan calculation to a normal non-blocking dialog window also to avoid the short
  popping up on start. Note that these non-blocking dialog windows can be put behind the main window
  and show up in the Windows or other task lists as well.
* Highlight of active in flight plan table can be disabled in options on page `Flight Plan`. [#785](https://github.com/albar965/littlenavmap/issues/785)
* Removed forced assignment of runways if no parking is set for departure. An airport can now be
  used as a departure point. Improved parking selection dialog.
* Related navaids in flight plan table and other places in program now use notation with prefix `R`
  like `R090` for radials instead of `°M`.
* Changed flight plan table column selection to use configuration tree dialog including a
  description column. Can also be used to disable header and footer labels in flight plan window.
* Added optional footer line in flight plan table which shows distance, time and fuel for selected
  flight plan entries. Flight plan table options (menu `Tools` -> `Flight Plan Table Options` ->
  `Flight Plan Table Footer` -> `Selected Flight Plan Legs`) allows to disable selection and error
  footer lines in flight plan table. [#892](https://github.com/albar965/littlenavmap/issues/892)
* Added safe altitude display in flight plan table (orange line in elevation profile). Can be
  enabled in menu `Tools` -> `Flight Plan Table Options`.
* Users can now select departure runway with extended runway center line instead of a SID. See
  context menus or menu `Flight Plan´ -> `Select Departure Runway`.
* An offset angle relative to runway heading can now be selected when choosing the destination
  runway (former `Create Procedure` function). See context menus or menu `Flight Plan´ -> `Select
  Destination Runway`.
* Added departure and approach runway information to flight plan table header.
* Added header label in flight plan tab `Remarks` showing used scenery data, cycle and performance.
* Added column for related/recommended fixes and navaids in flight plan table. These are now shown
  with frequency and radial in flight plan table, elevation profile and other places.
* Added latitude/longitude columns shown in user selected format to flight plan table as well as
  CSV and HTML export.
* Improved start position selection dialog (menu `Flight Plan` -> `Select a Start Position`). Added
  runway dimensions, runway facilities and surface. User can now search for airline codes or other
  texts in the parking, runway or helipad entries. Airport center is always added as an option.
* Improved error messages in tooltip on error label in flight plan tab. Removed redundant error
  label in elevation profile. Showing aircraft performance related warnings now in flight plan table
  footer which can be disabled.
* Fixed issue where flight plan was centered on startup despite using `On startup show on map` ->
  `Last position` or `Home position` on options page `Startup and Updates`.
* Resetting flight plan table, airport search result table and navaid search result table view on
  update now to avoid display of wrong columns or missing table columns.

### Flight Plan Export

* Added functionality to fetch and send flight plans to/from SimBrief to file menu. Use menu `File`
  -> `Open Flight Plan from SimBrief` and `Export Flight Plan to SimBrief`. Follow instructions in
  dialog windows. [#828](https://github.com/albar965/littlenavmap/issues/828)
* Waypoints resulting from departure and runway selection (extended runway center line and other
  points) are omitted in all export formats for complex aircraft and third-party Garmin units to
  avoid issues when loading. Use the aircraft FMS or MCDU to select a departure or approach runway.
* Several fixes for X-Plane flight plan export.
* Added file patterns for multi export which can be set for each format. Improved context menu,
  keyboard shortcuts and error messages in multi export options. Added bottom label in multi export
  options dialog to preview export file path and name as well as other information. [#751](https://github.com/albar965/littlenavmap/issues/751)
* Added reading support for Garmin GFP flight plan files. These are text files containing the
  flight plan after the prefix `FPN/RI:`.
* `File` -> `Export Options` are now unchecked for this update since these often cause issues. Now
  showing warning dialog if these options are enabled.
* Added X-Plane 12 FMS export which uses the same X-Plane format but a different folder.
* Added separate export option for PMDG MSFS aircraft.
* Added flight plan export for iFly Jets Advanced Series. [#817](https://github.com/albar965/littlenavmap/issues/817)
* Added GFP flight plan export for TDS GTNXi and MSFS IniBuilds Airbus.
* Added support for MSFS parking suffix to allow reloading LNMPLN flight plans. Example EDDG, 18A
  to 18E. MSFS still cannot load parking positions with suffix. Not even its own ones.
* Changes to Flightgear plan import and export: Waypoints with missing coordinates can now be
  loaded. Waypoints marked `<type>basic</type>` can now be exported and loaded. Thanks a lot to
  [colingeniet](https://github.com/flpduarte) at Github for the fix
* Changed GPX loading and saving to use millisecond accuracy. Fixed timezone issues when loading
  and saving GPX. GPX loading now reads both millisecond and second ISO date. [#907](https://github.com/albar965/littlenavmap/issues/907)

### Weather

* Added hours and colored warning for more than 3 (orange) and more than 6 hour (red) old METAR
  reports in airport tab, airport tooltip and airport weather tab.
* Added warning message if X-Plane 11 or 12 weather files cannot be read due to broken weather
  paths or wrong simulator base path in dialog `Load Scenery Library`.

### Wind

* Resetting wind source to NOAA on update now. Adjust as needed.
* Changed user interface for wind for more consistency. Removed wind checkbox from fuel report
  header and added drop down box which mirrors the items in menu `Weather` -> `Wind source`.
* Added manual wind layer altitude to fuel report which is independent from flight plan cruise
  altitude.
* Improved indications in wind tooltip to show manually selected wind altitude layer, altitude of
  shown wind barbs and flight plan cruise altitude indication.
* Performance optimizations. Wind barbs now drawn sparse at higher zoom levels and near the poles.
[#940](https://github.com/albar965/littlenavmap/issues/940)
* Added more layers for winds aloft download to get more accuracy at lower levels.
* Changed wind altitude levels in toolbar button to use a slider instead of fixed altitude levels.

### Aircraft Performance

* The default performance profile which is created when using menu `Aircraft` -> `New Aircraft
  Performance` is now based on the data of a Cessna C172 and named `Example Performance Profile`.
  This avoids warning messages when using a new performance profile. Adapt it to your aircraft as
  needed.

* Added menu item `Aircraft` -> `Warning for Aircraft Type Mismatch` which is disabled per default.
  This allows to enable warnings if aircraft type in the performance profile does not match the one
  in the simulator aircraft. Recommended is to disable this when flying MSFS and keep it enabled for
  X-Plane and all other simulators.

* Warning for performance file aircraft type mismatch is reset to off on update since MSFS causes
  issues with this function. You can enable this again in menu `Aircraft` -> `Warning for aircraft
  type mismatch` if you use another simulator than MSFS.
* More warnings for invalid fuel flow and speed values in aircraft performance: `Climb fuel flow is
  smaller than cruise fuel flow`, `Descent fuel flow is higher than cruise fuel flow`, `Climb speed
  is higher than cruise speed` and `Descent speed is much smaller than cruise speed`.
* Added simulator type to aircraft performance file, edit dialog and display.
* Added display for average wind at cruise level only in tab `Fuel Report`.

### Options

* Reordered pages in options and added new pages `Map Display Keys`, `Map Display Labels`, `Map
  Display User` and `Map Display Flight Plan`. Removed page `Map Display 2`.
* Added new page `Map Display Labels` in options and moved tree settings from `Map Display 2` to
  it. Setting description is now shown in a second column instead of tooltips.
* Added option for tooltips in menus which is off per default. Option to show tooltips in whole
  program is now reset to enabled. Menu tooltips are not available on macOS.
* Now keeping the undock map window state to avoid a messed up layout after a restart when using
  `Restore Defaults`. The `Allow to undock the map window` option on page `Map` is now unchanged
  after resetting settings.
* Added option to disable startup image screen (splash screen) on page `Startup and Updates`.
* Added option to change main toolbar icon size on page `Display and Text`.

### Undo / Redo

* Added progress dialog for long undo operations in logbook and userpoints which can happen when
  undoing the import or a bulk change of large datasets. Operations can be canceled now.
* Fixed performance issues for undo and redo operations resulting in frozen program.
* Fixed issue where import of logbook or userpoint data resulted in a messed up undo state.
* Logbook and userpoint undo function assigned to `Ctrl+Shift+Z` and `Ctrl+Shift+Y` to avoid
  overlap with flight plan undo/redo functions.

### Updates

* Simplified update notification dialog to show only a HTML message from the server. Removed
  `Download in Browser` button as well as header information and `Download now` to simplify release
  management.
* *Little Navmap* now checks regularily for updates instead of only on startup. Update notification
  messages might now also pop up after startup except when being connected to a simulator or having a
  dialog window open. Note that the update check across the network is still done only every day,
  week or month.

### X-Plane 11 and 12

* Scenery library data compilation adapted for X-Plane 12 folder changes. [#867](https://github.com/albar965/littlenavmap/issues/867)
* *Little Navmap* now requires `x-plane_install_11.txt` and `x-plane_install_12.txt` as well as a
  valid installation path to be recognized. Run the X-Plane installer or X-Plane once to create this
  file so that *Little Navmap* can detect the simulator.
* Now supporting X-Plane 12 METAR airport weather reports and GRIB winds aloft by checking folder
  `Output/real weather`. Added folder configuration in options on page `Weather Files`. [#926](https://github.com/albar965/littlenavmap/issues/926)
* Fixed issue where X-Plane 12 add-on airports were not read from `Custom Scenery` in some cases.
  Airports not included in the file `scenery_packs.ini` are now treated like enabled. [#927](https://github.com/albar965/littlenavmap/issues/927)
* Corrected userpoint export and import to and from `user_fix.dat` for X-Plane 11 and 12. Exporting
  and importing waypoint flags and full name for X-Plane 12 now. The Little Navmap Userpoint tags
  field is used to load and save the ID of the airport terminal area as well as the waypoint type.
  Waypoint type is based on ARINC 424 field type definition 5.42. Spaces are replaced by underscores
  '_' for userpoint tags. Alternatively double quotes and spaces can be used. Example tags:
  `EDDF V__` is a VFR Waypoint at airport EDDF, `ENRT "I  "` is an en-route unnamed charted intersection
  and `ENRT R__` is an en-route named intersection.

### Little Xpconnect

See also
[Little Navmap User Manual - Little Xpconnect](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/XPCONNECT.html).

* Fixed an issue where ICAO type and other values of AI and multiplayer aircraft were messed up.
* Now detecting on-ground status correctly for AI or multiplayer aircraft.
* Little Xpconnect now adds items in the X-Plane plugin menu to set AI fetch and more performance
  options.
* Adapted new weather and environment datarefs to X-Plane 12 changes.
* Little Xpconnect now supports Apple Silicon / ARM 64 machines. The Zip file contains two folders
  `Little Xpconnect arm64` for Apple Silicon and newer Intel machines and `Little Xpconnect x86` for
  older Intel machines. See link above.  [#923](https://github.com/albar965/littlenavmap/issues/923)
* Changed Little Xpconnect build for Linux to use a minimum of shared library dependencies.

### Map Display User Interface

* Replaced map theme and map projection boxes in toolbar with a new tool button having a drop down
  menu (dark globe icon on toolbar). This saves space in the toolbar area. Removed `Map Projection
  and Theme Toolbar`.
* Combined the three toolbar buttons for map detail into one drop down menu button on the toolbar
  containing a slider and reset menu item. Moved map detail level settings from menu 'View' to menu
  `Map`.
* Added toolbar drop down menu button for a more detailed airport display filter including runway
  length, type, procedures and light status.

### Map Display

* Added turn prediction line for user aircraft also having tick marks for one NM distance. This is
  disabled by default in menu `View` -> `Show Turn Flight Path`.
* Added option to display selected autopilot altitude range as a dark green arc on the map. Enable
  this in menu `View` -> `Show selected altitude range`. Note that some add-on aircraft misuse the
  autopilot altitude which results in a wrong display. [#247](https://github.com/albar965/littlenavmap/issues/247)
* Added display on map and elevation profile for GLS/RNP paths. Showing information for these
  virtual approach paths in tooltip and info window now. Enable RNP/GPS path display in menu `View`
  -> `Navaids` -> `Show GLS/RNP Approach paths` or elevation profile context menu.
* New option to show aircraft endurance as circle around user aircraft. This is based on reserves,
  contingency, fuel load, current fuel flow and ground speed (but not wind). Enable in menu `View` ->
  `Show Aircraft Endurance`. Note that this shows the endurance based on current fuel flow. Numbers
  on range ring shown in warning and error colors depending on endurance. [#341](https://github.com/albar965/littlenavmap/issues/341)
* Added forced navaid display for recommended navaids from used procedures including indication in
  tooltip. This means that a related VOR being part of a procedure in a flight plan is shown even if
  the display of VOR is disabled. This allows to have a clean map with only flight plan related
  navaids.
* Added display of MSA (minimum sector altitude) diagrams on map similar to range rings. Can be set
  by user in map, flight plan table, airport search and navaid search context menus. Enable display
  of MSA icons in menu `View` -> `Navaids` -> `Show MSA Sectors`. Enable a larger scaled display by
  right clicking on the MSA icon and selecting `Add MSA diagram at ...`. [#498](https://github.com/albar965/littlenavmap/issues/498)
* Added option for MSA diagram transparency and text size in options on page `Map Display User`.
* Added display of en-route holdings to map display, map context menu, information display and
  tooltips. Old saved user defined holdings are discarded. [#363](https://github.com/albar965/littlenavmap/issues/363)
* Unpaved, heliports and water airports are now shown smaller than paved airports depending on zoom
  level. Now adjusting airport label font size depending on zoom and minor airport status. Minor
  airports have a smaller symbol and text on higher zoom distances.
* Added button and menu item to disable online aircraft and simulator AI separately. [#754](https://github.com/albar965/littlenavmap/issues/754)
* Added new range ring dialog allowing to add a label, change the coordinates or change the color.
  Removed range ring setting from options dialog since radii can now be changed when adding rings.
* Display of a feature category is now automatically enabled on the map after adding an user
  feature like range rings.
* Added function to zoom and jump to defined coordinates on map in main menu and map context menu.
  See map context menu `More` -> `Jump to Coordinates ...`.
* Added `Go to User Aircraft` menu item in menu `Map` and toolbar plus keyboard shortcut
  `Ctrl+PgUp`.
* Added tooltip for distance measurement lines showing distance, label, initial and final course.
* Outbound and inbound VOR calibrated declination now ignored per default in normal route leg
  course shown in the moving labels.
* AI aircraft label visibility is now adjusted depending on aircraft ground status and details.
* Final course for measurement lines at VOR is now calculated based on VOR calibrated declination.
* Fixed issue where ILS heading was offset after switching scenery library databases.
* Moved whole map configuration to a file `maplayers.xml` embedded in program. This can be
  overridden in configuration folder for a detailed map display customization. Program is watching
  overloaded file in settings folder for changes and updates map accordingly. See file
  `maplayers.xml` and embedded comments for more information here:
  [maplayers.xml](https://github.com/albar965/littlenavmap/blob/release/2.8/resources/config/maplayers.xml).

### Map Display Options

* Added option on page `Map Display Labels` to show start and end course labels also considering
  VOR calibrated declination. Useful when flying VOR to VOR. Labels are shown at a fixed position at
  start or end of flight plan legs.
* Added option to show compass rose with true heading. See options on page `Map Display Labels` in
  branch `Compass Rose`.
* Outline color (old and default style in *Little Navmap*) and semi-transparent (like SkyVector)
  for flight plan can now be selected. Option for semi-transparent flight plan line also affects
  logbook preview and procedure preview. See options on page `Map Display Flight Plan`.
* New options for semi-transparent highlight circles. Colors for highlights can now be changed.
  Page `Map Display User`.
* Added option to disable magenta highlight for active leg in options on page `Map Display Flight
  Plan` in checkbox `Highlight active leg`. [#785](https://github.com/albar965/littlenavmap/issues/785)
* Added optional label `Distance and Bearing from User` for AI aircraft. This can be enabled in
  options on page `Map Display Labels`, branch `AI, Multiplayer and Online Client Aircraft` in line
  `Distance and Bearing from User`. [#708](https://github.com/albar965/littlenavmap/issues/708)
* Added options for measurement lines thickness, color and font size. These can be changed in
  options on page `Map Display User` -> `Distance measurements`.
* Added size option for highlight marks in options on page `Map Display User` -> `Circle Size`.
* Added option for navaid radial display when drawing a measurement line from a VOR, VORTAC or NDB.
  Default is off. Enable this in options on page `Map Display Labels` branch `Measurement Lines`. [#860](https://github.com/albar965/littlenavmap/issues/860)
* Added options for display of user and AI aircraft coordinates on map. Page `Map Display Labels`.
[#700](https://github.com/albar965/littlenavmap/issues/700)
* Added AGL label option for user aircraft on map. See `Map Display Labels`.
* Added optional display of red ice warning labels on map (not in elevation profile) on page `Map
  Display Labels`. [#745](https://github.com/albar965/littlenavmap/issues/745)
* Wind pointer is now kept when disabling aircraft display. Wind pointer can be disabled separately
  in options on page `Map Display Labels` in branch `Top of Map`.
* Split delete options for user feature types like range rings or measurement lines for all feature
  types in menu `Map` and `Reset all for a new Flight`. Holdings and traffic patterns can now deleted
  independently, for example.
* New option for verbose tooltips on page `Map`. Default is enabled. Disable this to get brief
  tooltips when hovering the mouse cursor over the map.
* Option to hide user feature tooltips (traffic patterns, measurement lines and others) on page
  `Map` added.
* Added option to reverse all mouse wheel functions in map and elevation profile in options dialog
  on page `User Interface`.

### Map Display Themes

* Added MapTiler, MapBox and Thunderforest map themes plus required API key and token assignments.
  See
  [Little Navmap User Manual - Map Display Keys](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/OPTIONS.html#map-display-keys)
  for more information on using these maps.
* Themes requiring keys or tokens are marked with a `*` in menu and dropdown box. A dialog window
  with more information is shown when selecting a map theme needs more information. See options on
  page `Map Display Keys` for key or token input.
* Fixed graphical "smearing" issues with maps not covering the whole view like the
  Norway N50 Topo Map.

### DGML for Map Theme Developers

* All themes are added to the drop-down list by name as extracted from the DGML files. Now checking
  visibility flag in DGML. Themes having this set to `false` are excluded. All themes are now shown
  without distinction between user or stock.
* Added option to pass key/value pairs to replace in DGML map configuration files. This is needed
  for online maps requiring API keys or tokens. These keys are collected from DGML map configuration
  files and can be edited in options on page `Map Display Keys`. [#85](https://github.com/albar965/littlenavmap/issues/85)
* Added new key `{language}` in DGML for custom map request URLs. This allows to fetch Google map
  tiles using the user interface language instead of getting map labels in random languages. Append
  `&amp;hl={language}` to the download URL path in Google map themes to force map tiles in the user
  interface language or `&amp;hl=en` to force all maps in English. This fixes issue with random
  language used for labels in some maps. Note that you have to clear the tile cache to see the
  changes. See
  [User Manual - Disk Cache](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FILES.html#disk-cache).
* Added commented example for DGML configuration including new keys in
  `data/maps/earth/example/example.dgml`.

### Airspaces

* Changed loading of user airspaces now by showing a separate loading dialog similar to the scenery
  library dialog. Removed user airspace paths and patterns from options dialog. [#490](https://github.com/albar965/littlenavmap/issues/490)
* Added reader for IVAO and VATSIM JSON boundaries. You can now read IVAO JSON and VATSIM GeoJSON
  files. Currently you can find IVAO boundaries here:
  [Airspace Boundaries](https://www.littlenavmap.org/downloads/Airspace%20Boundaries/).
  VATSIM boundaries are available here
  [VATSPY Data Project](https://github.com/vatsimnetwork/vatspy-data-project).
* Added two sliders in airspace toolbar button dropdown menu for minimum and maximum altitude in
  500 ft steps to show overlapping airspaces. [#612](https://github.com/albar965/littlenavmap/issues/612)

### Elevation Profile

* Added display of required (by approaches) or calculated optional vertical descent flight path
  angle to elevation profile map and tooltip. Calculated vertical angle is shown with transparent
  background and required angle is shown with yellow background. [#803](https://github.com/albar965/littlenavmap/issues/803)
* Showing optional vertical track line from user aircraft on the elevation profile. Enable this by
  checking `Show Vertical Track` in the elevation profile context menu. [#247](https://github.com/albar965/littlenavmap/issues/247)
* Added options to display vertical path angle and speed to reach the next waypoint at the
  calculated altitude. Can be shown in elevation profile (`Tools` -> `Elevation Profile Display
  Options`) as aircraft label and in aircraft progress tab (`Tools` -> `Aircraft Progress Display
  Options`). Made aircraft labels in elevation profile optional.
* Vertical paths in approaches are now considered like altitude restrictions and enforced while
  calculating profile. Error messages can appear if altitude restrictions related to a vertical path
  are violated by a too low cruise altitude.
* Added option to vertically and horizontally zoom to aircraft and destination point in elevation
  profile. Enable this in context menu of the elevation profile (`Zoom to aircraft and destination`).
  [#868](https://github.com/albar965/littlenavmap/issues/868)
* Added top header to elevation profile optionally showing course, distance and related navaid.
  Optional flight plan line labels added to elevation profile. Profile labels can now be set in
  options dialog. Added context menu item to disable top label in profile.
* Added display options for profile on options page `Map Display Labels` in branch `Elevation
  Profile`.
* Added optional display of altitude and speed restriction labels in elevation profile. [#601](https://github.com/albar965/littlenavmap/issues/601)
* Moved elevation profile display settings from page `Map Display` in options dialog into a
  separate configuration dialog. Added menu item in `Tools`, elevation profile context menu and a
  button in elevation profile window for configuration options.
* Fixed several cases of wrong elevation profile errors where profile could not be calculated.

### Flight Plan Route Description

* Flight plan route description window is now non-blocking and allows to continue working with the
  main window while opened. Note that the non-blocking dialog window can be put behind the main
  window and shows up in the Windows or other task lists. Update description by clicking `Load from
  Flight Plan` after changing plan on the map or flight plan table.
* Flight plan route description string is now saved independently from flight plan and reloaded on
  startup.
* Changes done by clicking `Create Flight Plan` can now be undone in the tab `Flight Plan`.
* Enabled undo/redo in the description input field. Use keyboard shortcuts or the context menu to
  undo changes.
* Removed `Read Route Description` button in route description window and replaced its
  functionality with a delayed automatic update. Results updated while typing.
* Removed `IFR`/`VFR` selection box from route description window. The flight plan type is now
  taken from the tab `Flight Plan`.
* Extended waypoint coordinate parser for all ARINC 424 Code Convention full degree waypoint
  formats like `57N30`, `5730E` or `57S30`. Flight plan route description can now read these
  waypoints independent if they are in the navdata or not.
* Added separate help area in route description window. Open or close the help area with the blue
  help button at the right.
* Added new options to route string dialog: `Write STAR and transition reversed` (format
  `TRANS.STAR` or `TRANS STAR`) and `Write SID/STAR and transition space separated`.
* Now reading both space and dot separated notation `SID TRANS`, `SID.TRANS` as well as
  `STAR TRANS`, `TRANS STAR`, `STAR.TRANS` and `TRANS.STAR` in route description.
* Fixed issues where airways were wrongly detected in route description.

### Online Flying [#761](https://github.com/albar965/littlenavmap/issues/761) and [#754](https://github.com/albar965/littlenavmap/issues/754)

* Completely reworked removal of duplicate aircraft (shadow aircraft) coming from both the
  simulator and the online network. Registration/callsign match function is now replaced by a
  distance and altitude match. There is no need to have matching registration/callsign values now.
  This applies to the user aircraft as well as multiplayer aircraft.
* Added note for simulator and online shadow aircraft in tooltip and information window.
* Showing connected online network in main window title bar now.
* Moved option `Remove duplicate aircraft from online service and simulator` to page `Online
  Flying` in options dialog.

### Logbook

* Added footer line to logbook search which shows summed up values for travel times and distances
  for selected logbook entries.
* Added simulator and real travel time to logbook search result table.
* Logbook entry dialog is now pre-filled with all data (flight plan, performance and trail) from
  current session. This can be removed by pressing reset.
* Added cleanup function for logbook which removes invalid logbook entries that can result from
  pattern work or repeated approches. Main menu `Logbook` -> `Cleanup Logbook Entries` or logbook
  table context menu.

### Flying and User Aircraft

See
[Little Navmap User Manual - User Aircraft Centering](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/AIRCRAFTCENTER.html)
for more explanations.

* Removed confusing move/zoom gesture when on ground with simple aircraft centering. Now keeping
  current zoom value when jumping back to user aircraft.
* Added option to modify zoom for aircraft and next waypoint. Options on page `Simulator Aircraft`
  input field `Zoom Distance`.
* Added zoom out on takeoff option. See `Options` on page `Simulator Aircraft` checkbox `Zoom out
  on takeoff`.
* Added distance option to zoom in on aircraft touchdown in options on page `Simulator Aircraft`.
* Added separate timeout to jump back to current active leg for flight plan table on page
  `Simulator Aircraft`.

### Search

* Added random destination finder in airport search tab to select a random departure and arrival
  from the current search result. Enable this by checking `Random Flight` in the drop down menu
  button. Thanks to [u-an-i](https://github.com/u-an-i) for implementing this.
* Added undo/redo functionality to logbook and userpoint search tabs. Can be accessed in main menu,
  context menu or shortcuts. The undo/redo information is saved in the database and permanent between
  restarts. Warning dialogs before deleting entries removed. [#280](https://github.com/albar965/littlenavmap/issues/280)
* Added literal search using double quotes for navaid and airport idents. Example: Search for "TAU"
  including the double quotes to find exactly the two VORs with this id instead of waypoints like
  `TAURA`.
* Idents in airport or navaid search can now be separated by space to search for a list. Example:
  Enter `LIRF EDDF` without quotes to find these two airports.

### Procedures

* Added procedure preview showing all available procedures of an airport on the map. Enable with
  new button in airport search tab on the top or from `Preview all procedures` context menu. View is
  updated automatically when changing search parameters in procedure tab.
* Procedures can now be selected into flight plan by right-clicking on a waypoint or other fix of a
  procedure preview in the map.
* Procedures and custom arrival and departures can now be deleted from the map context menu when
  right-clicking on a flight plan procedure waypoint.
* Added name search filter in procedure search tab. This filters the procedures by the content of
  the field `Ident`. The parameter is saved between sessions.
* Added separate procedure filters for STAR and all approach types like ILS, RNAV or VORDME.
* Added indicator for transitions `(T)` in procedure search tab for SID, STAR and approaches.
  Number of transitions is shown in the remarks column.
* Added display of aircraft category and required navigation performance indicator to procedures
  and procedure legs in flight plan table and procedure search.
* The vertical angle now shown in procedure leg restrictions in flight plan and procedure search.
[#803](https://github.com/albar965/littlenavmap/issues/803)
* Changed display of missed approaches in procedure preview. Missed approaches can now also be
  disabled for the procedure preview on the toolbar or in view menu `Show missed approaches`.

### User Aircraft Progress

* Added user aircraft progress tab configuration using a tree control which allows to select data
  fields to show. The dialog also shows a description for each progress data field. Open this
  configuration dialog by clicking on the small button on the top right in the progress tab (gear
  symbol) or by using the context menu. [#768](https://github.com/albar965/littlenavmap/issues/768)
* Added new data fields fuel load, gross weight, real time, top of climb and autopilot selected
  altitude to aircraft progress.
* Showing vertical path and required descent rate in aircraft progress in descent and approach
  phase.
* Endurance in progress tab now considers reserves and contingency fuel.
* Added options to display speeds, altitude and vertical speed in other than selected default
  units. This is for indicated and actual altitude as well as indicated, ground and vertical speed in
  the progress display tab. Enable this in menu `Tools` -> `Aircraft Progress Display Options`. [#656](https://github.com/albar965/littlenavmap/issues/656)

### Information

* Now showing the canonical path (i.e. symbolic links, Windows shortcuts and Windows junctions
  resolved to the real path) for airport add-ons in information display. This means that the real
  installation location of linked add-ons using symbolic links, shortcuts, junctions or aliases is
  shown now.
* Added [ChartFox](https://chartfox.org) to airport information in link section. You have to be
  logged into ChartFox to see charts.
* Added radial and distance to related navaid in waypoint information for special waypoints like
  `D095J` which is 95°M and 10 nm from VOR SUM.
* Added display of transition level to information airport and weather tab. Only X-Plane or
  Navigraph.
* Showing detailed waypoint description now if available (Navigraph and X-Plane). Examples are
  `Named`, `RNAV`, `VFR` or `Off Airway`. [#321](https://github.com/albar965/littlenavmap/issues/321)

### Userpoints

* A userpoint category is now automatically enabled after adding one on the map. This helps to
  avoid confusion when a userpoint is hidden right after adding.
* Added separate symbol size and text options for userpoints. See page `Map Display User`.
* Updated stock icon translations. Translated userpoint types are now shown in tooltip and
  information tab. Note that translated types cannot be used in search.

### Scenery Library Database

* Now allowing a `no simulator` state of the program instead of always showing a X-Plane
  installation. This avoids the confusing X-Plane state despite not having it installed.
* Now supporting symbolic links (all OS), Windows junctions and Windows shortcuts (`.lnk` files) as
  well as macOS aliases in MSFS `Community` and X-Plane `Custom Scenery` folders.
* Fixed exclude file, exclude directory and exclude add-on recognition to work with symbolic links,
  shortcuts or junctions.
* Scenery library database can now be loaded in background which allows the user to plan a flight
  while loading. Progress dialog is not blocking access to the program now and can be brought into
  background. Loading dialog now gives an option to use or discard a database after loading.
* Now notifying user about wrong scenery library modes after loading. Considers MSFS and Navigraph
  special cases. Allows user to change to the recommended mode after loading.
* Now showing a warning dialog on startup and database switch if user has a stale simulator
  database loaded. The warning shows if the scenery library database was created with a previous
*Little Navmap* version or if it is older than two months.
* Now adding suffix `... reload advised` to database in scenery library menu if a database was
  loaded with a previous version of *Little Navmap* or if database was loaded two months ago. This is
  a reminder for users to reload after simulator updates or updates of _Little Navmap_.
* Added `Validate Scenery Library Settings` in menu `Scenery Library` which helps to set the
  correct scenery library mode.
* Now hiding artificial waypoints created internally for procedure or airway resolution from
  search, information and tooltips.
* ILS and GLS/RNP information is now always taken from Navigraph database except when using `Do not
  use Navigraph Database`. As a result ILS course might probably not match for older scenery data or
  airport add-ons. Select `Do not use Navigraph Database` temporarily if this is an issue.
* Corrected issues with runways designated by true course like BGTL. Approaches were missing runway
  assignments and could not be resolved before. [#870](https://github.com/albar965/littlenavmap/issues/870)

#### MSFS

* Changed handling for MSFS file `Content.xml` for SU10 and fixed crash when reading new file
  layout. Corrected layer ordering for MSFS scenery library to adhere to priorities in file
  `Content.xml`.
* Fixed issue where airport city names were missing since MSFS SU11 beta. Note that country names
  are not available from the simulator.
* Changed fuel detection for MSFS. An airport now gets Avgas and Jet A availability assigned if it
  has a fuel pad (which has no fuel type information). Now showing only `Fuel` for MSFS if both are
  available. [#918](https://github.com/albar965/littlenavmap/issues/918)
* Now ignoring invalid waypoints with empty ICAO region code and invalid type as they appear in
  some MSFS add-on sceneries. This fixes the exception `NOT NULL constraint failed:
  tmp_waypoint.region ...` when loading. [#910](https://github.com/albar965/littlenavmap/issues/910)
* Now also loading BGL files from missions to catch respective airports.
* Fixed bug where Little Navmap would only read and display a single transition from add-on
  (Community) SIDs and STARs, despite these procedures actually having more than one transition. This
  happens when using the latest MSFS SDK (SU9 or later). Thanks a lot to
  [flpduarte](https://github.com/flpduarte) at Github for the fix.
* Added notification message for encrypted MSFS add-ons when reading the scenery library. This
  helps to identify unreadable airports where the layout in *Little Navmap* will not match the layout
  in the simulator.

### Command Line [#431](https://github.com/albar965/littlenavmap/issues/431)

Start program with the help option `-h` from a terminal to see available command line options.

See
[Little Navmap User Manual - Command Line Options](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/COMMANDLINE.html)
for details.

* Added scripts for portable execution: `Little Navmap Portable.cmd` (Windows), `Little Navmap
  Portable.command` (macOS) and `Little Navmap Portable.sh` (Linux). All settings, databases and
  cache folders are saved to the installation folder when starting the program with these scripts.
  See
  [Little Navmap User Manual - Portable Execution](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/INSTALLATION.html#portable-execution).

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.7/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
