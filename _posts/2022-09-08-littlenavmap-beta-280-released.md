---
layout: post
title:  Little Navmap 2.8.0.beta released
date:   2022-09-09 14:00:00 +0200
categories: release
---

### Direct Download

[**► Windows** - LittleNavmap-win-2.8.0.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.0.beta/LittleNavmap-win-2.8.0.beta.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.0.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.0.beta/LittleNavmap-macOS-2.8.0.beta.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.8.0.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.0.beta/LittleNavmap-linux-20.04-2.8.0.beta.tar.gz)<br/>
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.8.0.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.0.beta/LittleNavmap-linux-18.04-2.8.0.beta.tar.gz)

### Alternative Download Locations

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) /
[**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g) - **Look into folder `Beta`.**

## Notes

This is a public beta release which is feature complete but might have issues.
Furthermore, translations are incomplete, some help links do not work and the user manual is not
adapted yet to the new features. Feel free to ask if something is not clear.

**A big thank you to all who reported bugs and issues!**

**This version is ready MSFS SU10 and for X-Plane 12 and also supports FSX, P3D and X-Plane 11.**

Some features like MSA, vertical paths or en-route holdings require either X-Plane, the included
AIRAC 1801 database or a Navigraph database newer or equal than AIRAC 2201.

See here for a [list of issues done](https://github.com/albar965/littlenavmap/milestone/11?closed=1).
More issues are solved than publicly known on Github. This changelog lists the most important.

Please report if something does not work or does not work as expected.

**Little Navmap will remind you to reload the scenery library after updating. Please do so to
benefit from new features and bug fixes.**

**Note that certains settings are reset to default after updating to 2.8.**

**A few keyboard shortcuts have changed.**

**Create a backup of your settings and database folder just in case you'd like to go back to the
stable release. Backup `ABarthel` in `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel` on Windows
and `$HOME/.config/ABarthel` on Linux and macOS.**

Or see [Multiple Installations](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INSTALLATION.html#multiple-installations)
for information how to run the stable and beta versions in parallel.

## Known Issues

* X-Plane 12 weather and winds aloft are not read from the simulator yet. This will be added in the
  next release. Use NOAA as a workaround for now.
* Xpconnect build for Apple Silicon CPUs (ARM architecture) not yet available.
  You can run X-Plane in the Intel emulation Rosetta as a workaround:
  [How to force a native M1 Mac app to run as an Intel app instead](https://www.macworld.com/article/338843/how-to-force-a-native-m1-mac-app-to-run-as-an-intel-app-instead.html).
* En-route holding courses are not correct due to an error in declination calculation. This will be
  fixed with AIRAC cycle 2210.
* Running Little Navmap with autoconnect for P3D, FSX or MSFS for several hours without starting
  the simulator leaks resources. This is mitigated by automatically reducing the connection rate
  after 30 minutes. Disable autoconnect or quit the program to avoid this.
* MSFS marker beacons and airport fuel are not recognized for SU10. [#919](https://github.com/albar965/littlenavmap/issues/919)

## Changes from 2.6.19 to 2.8.0.beta

### Map Display

* Added turn prediction line for user aircraft also having tick marks for half and one NM distance.
  Enabled by default in menu `View` -> `Show Turn Flight Path`.
* Added option to display selected autopilot altitude range as a dark green arc on the map. Enable
  this in menu `View` -> `Show selected altitude range`. Note that some add-on aircraft misuse the
  autopilot altitude which results in a wrong display. [#247](https://github.com/albar965/littlenavmap/issues/247)
* Outline color (old and default style in *Little Navmap*) and semi-transparent (like SkyVector)
  option for flight plan added. Option for semi-transparent flight plan line also affects logbook
  preview and procedure preview. See options on page `Map Display Flight Plan`.
* Added display on map and elevation profile for GLS paths. Showing information for GLS paths in
  tooltip and info window now. Now showing GLS channel information in flight plan table for GLS
  approach. Enable RNP/GPS path display in menu `View` -> `Navaids` -> `Show GLS Approach paths` or
  elevation profile context menu.
* Added two sliders in airspace toolbar button dropdown menu for minimum and maximum altitude in
  500 ft steps to show overlapping airspaces. [#612](https://github.com/albar965/littlenavmap/issues/612)
* Changed wind altitude levels in toolbar button to use a slider instead of fixed altitude levels.
* Combined the three toolbar buttons for map detail into one drop down menu button on the toolbar
  containing a slider and reset menu item. Moved map detail level settings from menu 'View' to menu `Map`.
* Replaced map theme and map projection boxes in toolbar with a new tool button having a drop
  down menu (dark globe icon on toolbar). This saves space in the toolbar area. Removed
  `Map Projection and Theme Toolbar`.
* Added toolbar drop down menu button for a more detailed airport display filter including runway
  length, type, procedures and light status.
* New option to show aircraft endurance as circle around user aircraft. This is based on reserves,
  contingency, fuel load, current fuel flow and ground speed (but not wind). Enable in menu `View` ->
  `Show Aircraft Endurance`. Note that this shows the endurance based on current fuel flow. Numbers
  on range ring shown in warning and error colors depending on endurance. [#341](https://github.com/albar965/littlenavmap/issues/341)
* Added forced navaid display for recommended navaids from used procedures including indication in
  tooltip. This means that a related VOR being part of a procedure in a flight plan is shown even if
  the display of VOR is disabled. This allows to have a clean map with only flight plan related navaids.
* Added display of MSA (minimum sector altitude) diagrams on map similar to range rings. Can be set
  by user in map, flight plan table, airport search and navaid search context menus. Enable display
  of MSA icons in menu `View` -> `Navaids` -> `Show MSA Sectors`. Enable a larger scaled display by
  right clicking on the MSA icon and selecting `Add MSA diagram at ...`. [#498](https://github.com/albar965/littlenavmap/issues/498)
* Added option for MSA diagram transparency and text size in options on page `Map Display User`.
* Added MSA tooltip, map context menu for show information and information display.
* Added display of en-route holdings to map display, map context menu, information display and
  tooltips. Holdings are automatically either fetched from an updated Navigraph database or the
  X-Plane database. Old saved user defined holdings are discarded. [#363](https://github.com/albar965/littlenavmap/issues/363)
* Unpaved, heliports and water airports are now shown smaller than paved airports depending on zoom
  level. Now adjusting airport label font size depending on zoom and minor airport status. Minor
  airports have a smaller symbol and text on higher zoom distances.
* Added button and menu item to disable online aircraft and simulator AI separately. [#754](https://github.com/albar965/littlenavmap/issues/754)
* Added new range ring dialog allowing to add a label, change the coordinates or change the color.
  Removed range ring setting from options dialog since radii can now be changed when adding rings.
* New option for verbose tooltips on page `Map`. Default is enabled. Disable this to get brief
  tooltips when hovering over the map.
* New options for semi-transparent highlight circles. Colors for highlights can now be changed.
  Page `Map Display User`.
* Added option to disable magenta highlight for active in options on page `Map Display Flight Plan`
  in checkbox `Highlight active leg`. [#785](https://github.com/albar965/littlenavmap/issues/785)
* Added optional label `Distance and Bearing from User` for AI aircraft. This can be enabled in options
  on page `Map Display Labels`, branch `AI, Multiplayer and Online Client Aircraft` in line
  `Distance and Bearing from User`. [#708](https://github.com/albar965/littlenavmap/issues/708)
* Added options for measurement lines thickness, color and font size. These can be changed in options
  on page `Map Display User` -> `Distance measurements`.
* Added size option for highlight marks in options on page `Map Display User` -> `Circle Size`.
* Added option for navaid radial display when drawing a measurement line from a VOR, VORTAC or NDB.
  Default is off. Enable this in options on page `Map Display Labels` branch `Measurement Lines`. [#860](https://github.com/albar965/littlenavmap/issues/860)
* Added options for display of user and AI aircraft coordinates on map. Page `Map Display Labels`. [#700](https://github.com/albar965/littlenavmap/issues/700)
* Added AGL label option for user aircraft on map. See `Map Display Labels`.
* Added optional display of red ice warning labels on map (not in elevation profile) on page `Map
  Display Labels`. [#745](https://github.com/albar965/littlenavmap/issues/745)
* Wind pointer is now kept when disabling aircraft display. Wind pointer can be disabled in options
  on page `Map Display Labels` in branch `Top of Map`.
* Split delete options for user feature types like range rings or measurement lines for all feature
  types in menu `Map` and `Reset all for a new Flight`. Holdings and traffic patterns can now deleted
  independently, for example.
* Display of a feature category is now automatically enabled on the map after adding an user
  feature like range rings.
* Added function to zoom and jump to defined coordinates on map in main menu and map context menu.
  See map context menu `More` -> `Jump to Coordinates ...`.
* Added `Go to User Aircraft` menu item in menu `Map` plus keyboard shortcut `Ctrl+PgUp`.
* Added tooltip for distance measurement lines showing distance, label, initial and final course.
* Now allowing compass rose minimum size down to 0.2 NM when zooming close. Corrected distance ring
  labels for small distances in compass rose.
* Added option to show compass rose with true heading. See options on page `Map Display Labels` in
  branch `Compass Rose`.
* Moved whole map configuration to a file `maplayers.xml` embedded in program. This can be
  overridden in configuration folder for a detailed map display customization. Program is watching
  overloaded file in settings folder for changes and updates map accordingly. See file
  `maplayers.xml` and embedded comments for more information here:
  [maplayers.xml](https://github.com/albar965/littlenavmap/blob/master/resources/config/maplayers.xml).
* Fixed graphical "smearing" issues with maps not covering the whole view like the Norway N50 Topo Map.
* Many more map display issues fixed and improvements added.

### Map Display Themes

* Added MapTiler, MapBox and Thunderforest map themes plus required API key and token assignments.
* Themes requiring keys or tokens are marked with a `*` in menu and dropdown box. A dialog window
  with more information is shown when selecting a map theme needs more information. See options
  on page `Map Display Keys` for key or token input.

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
* Added commented example for DGML configuration including new keys in `data/maps/earth/example/example.dgml`.

### Airspaces

* Changed loading of user airspaces now by showing a separate loading dialog similar to the scenery
  library dialog. Removed user airspace paths and patterns from options dialog. [#490](https://github.com/albar965/littlenavmap/issues/490)
* Added reader for IVAO and VATSIM JSON boundaries. You can now read IVAO JSON and VATSIM GeoJSON files.
  Currently you can find IVAO boundaries here:
  [Airspace Boundaries](https://www.littlenavmap.org/downloads/Airspace%20Boundaries/).
  VATSIM boundaries are available here [VATSPY Data Project](https://github.com/vatsimnetwork/vatspy-data-project).

### Flight Plan

* Added footer line in flight plan table which shows distance, time and fuel for selected flight
  plan entries. Flight plan table options (menu `Tools` -> `Flight Plan Table Options` -> `Flight
  Plan Table Footer` -> `Selected Flight Plan Legs`) allows to disable selection and error footer
  lines in flight plan table. [#892](https://github.com/albar965/littlenavmap/issues/892)
* Changed flight plan calculation to a normal non-blocking dialog window also to avoid
  the short popping up on start. Note that these non-blocking dialog windows can be put behind the
  main window and show up in the Windows or other task lists.
* Highlight of active in flight plan table can be disabled in options on page `Flight Plan`. [#785](https://github.com/albar965/littlenavmap/issues/785)
* Removed forced assignment of runways if no parking is set for departure. An airport can now be
  used as a departure point. Improved parking selection dialog.
* Added safe altitude display in flight plan table (orange line in elevation profile). Can be
  enabled in menu `Tools` -> `Flight Plan Table Options`.
* Related navaids in flight plan table and other places in program now use notation with prefix `R`
  like `R090` for radials instead of `°M`.
* Changed flight plan table column selection to use configuration tree dialog including a
  description column instead showing the description in tooltips. Can also be used to disable
  header and footer labels in flight plan.
* Users can now select departure runway instead of a SID. See context menus or menu `Flight Plan´ ->
  `Select Departure Runway`.
* An offset angle relative to runway heading can now be selected when choosing the destination
  runway (former `Create Procedure` function). See context menus or menu `Flight Plan´ -> `Select
  Destination Runway`.
* Added departure and approach runway information to flight plan table header.
* Added header label in flight plan tab `Remarks` showing used scenery data, cycle and performance.
* Added column for related/recommended fixes and navaids in flight plan table. These are now shown
  with frequency in flight plan table, elevation profile and other places.
* Added latitude/longitude columns shown in user selected format to flight plan table as well as
  CSV and HTML export.
* Improved start position selection dialog (menu `Flight Plan` -> `Select a Start Position`). Added
  runway dimensions, runway facilities and surface. User can now search for airline codes or other
  texts in the parking, runway or helipad entries. Airport is always added as an option.
* Improved error messages in tooltip on error label in flight plan tab. Removed redundant error
  label in elevation profile. Showing aircraft performance related warnings now in flight plan
  table footer.
* More fixes and improvements.

### Elevation Profile

* Added display of required (by approaches) or calculated vertical descent flight path angle to
  elevation profile map and tooltip. Calculated vertical angle is shown with transparent background
  and required angle is shown with yellow background. [#803](https://github.com/albar965/littlenavmap/issues/803)
* Showing optional vertical track line from user aircraft on the elevation profile. Enable this by
  checking `Show Vertical Track` in the elevation profile context menu. [#247](https://github.com/albar965/littlenavmap/issues/247)
* Added options to display vertical path angle and speed to reach the next waypoint at the calculated
  altitude. Can be shown in elevation profile (`Tools` -> `Elevation Profile Display Options`) as
  aircraft label and in aircraft progress tab (`Tools` -> `Aircraft Progress Display Options`). Made
  aircraft labels in elevation profile optional.
* Vertical paths in approaches are now considered as restrictions and enforced while calculating
  profile. Error messages can appear if altitude restrictions related to a vertical path are violated
  by a too low cruise altitude.
* Added option to vertically and horizontally zoom to aircraft and destination point in elevation
  profile. Enable this in context menu of the elevation profile (`Zoom to aircraft and destination`). [#868](https://github.com/albar965/littlenavmap/issues/868)
* Added top header to elevation profile optionally showing course, distance and related navaid.
  Optional flight plan line labels added to elevation profile. Profile labels can now be set in
  options dialog. Added context menu item to disable top label in profile.
* Added display options for profile on options page `Map Display Labels` in branch `Elevation
  Profile`.
* Added optional display of altitude and speed restriction labels in elevation profile. [#601](https://github.com/albar965/littlenavmap/issues/601)
* Moved elevation profile display settings from page `Map Display` in options dialog into a
  separate configuration dialog. Added menu item in `Tools`, elevation profile context menu
  and a button in elevation profile window for configuration options.
* More options, fixes and drawing improvements.

### Flight Plan Export

* Added functionality to fetch and send flight plans to/from SimBrief to file menu. Use menu `File`
  -> `Open Flight Plan from SimBrief` and `Export Flight Plan to SimBrief`. Follow instructions in
  dialog windows. [#828](https://github.com/albar965/littlenavmap/issues/828)
* Added file patterns for multi export which can be set for each format. Improved context
  menu, keyboard shortcuts and error messages in multi export options. Added bottom label in multi
  export options dialog to preview export file path and name as well as other information. [#751](https://github.com/albar965/littlenavmap/issues/751)
* Added reading support for Garmin GFP flight plan files. These are text files containing the
  flight plan after the prefix `FPN/RI:`.
* `File` -> `Export Options` are now unchecked for this update since these often cause issues. Now
  showing warning dialog if these options are enabled.
* Fixed issue with X-Plane FMS flight plan export where wrong airport designator for custom / add-on
  only airports and airports using long ids.
* Added X-Plane 12 FMS export which uses the same X-Plane format but a different folder.
* Added separate export option for PMDG MSFS aircraft.
* Added flight plan export for iFly Jets Advanced Series. [#817](https://github.com/albar965/littlenavmap/issues/817)
* Added support for MSFS parking suffix to allow reloading LNMPLN flight plans. Example EDDG, 18A
  to 18E. MSFS still cannot load parking positions with suffix. Not even its own ones.
* Changes to Flightgear plan import and export: Waypoints with missing coordinates can now be
  loaded. Waypoints marked `<type>basic</type>` can now be exported and loaded. Thanks a lot to
  [colingeniet ](https://github.com/flpduarte) at Github for the fix
* Changed GPX loading and saving to use millisecond accuracy. Fixed timezone issues when loading and
  saving GPX. GPX now allows both millisecond and second ISO date. [#907](https://github.com/albar965/littlenavmap/issues/907)

### Flight Plan Route Description

* Flight plan route description window is now non-blocking and allows to continue working with the
  main window while opened. Note that the non-blocking dialog window can be put behind the main window
  and shows up in the Windows or other task lists. Update description by clicking
  `Load from Flight Plan` after changing plan on the map or flight plan table.
* Flight plan route description string is now saved independently from flight plan.
* Changes done by clicking `Create Flight Plan` can now be undone in the tab `Flight Plan`.
* Removed `Read Route Description` button in route description window and replaced its functionality with
  a delayed automatic update. Results update while typing.
* Removed `IFR`/`VFR` selection box from route description window. The flight plan type is now
  taken from the tab `Flight Plan`.
* Extended waypoint coordinate parser for all ARINC 424 Code Convention full degree waypoint formats
  like `57N30`, `5730E` or `57S30`. Flight plan route description can now read these waypoints
  independent if they are in the navdata or not.
* Added separate help area in route description window and removed tooltips. Open or close the help
  area with the blue help button at the right.
* Added new options to route string dialog: `Write STAR and transition reversed` (format `TRANS.STAR` or
  `TRANS STAR`) and `Write SID/STAR and transition space separated`.
* Now reading both space and dot separated notation `SID TRANS`, `SID.TRANS` as well as `STAR
  TRANS`, `TRANS STAR`, `STAR.TRANS` and `TRANS.STAR` in route description.
* More improvements in route description parsing.

### Online Flying [#761](https://github.com/albar965/littlenavmap/issues/761) and [#754](https://github.com/albar965/littlenavmap/issues/754)

* Completely reworked removal of duplicate aircraft (shadow aircraft) coming from simulator and
  online network. Registration/callsign match function is now replaced by a distance and altitude
  match. There is no need to have matching registration/callsign values now. This applies to the user
  aircraft as well as multiplayer aircraft.
* Added note for simulator and online shadow aircraft in tooltip and information window.
* New option in configuration file to disable shadow aircraft: `[Options]`, `OnlineNetworkDisableShadow`.
* Added dark red online aircraft icons by type for simulator shadow aircraft. Now also showing
  online helicopter or jet icon for online aircraft shadows.
* Showing connected online network in main window title bar now.

### Logbook

* Added footer line to logbook search which shows summed up values for travel times and distances
  for selected logbook entries.
* Added simulator and real travel time to logbook search result table.
* Logbook entry dialog is now pre-filled with all data (flight plan, performance and trail) from current
  session. Can be removed by pressing reset.

## Weather

* Added more layers for winds aloft download to get more accuracy at
  lower levels: 850 mbar (rounded to 4000 ft), 925 mbar (rounded to 2000 ft).
* Better error detection on downloaded empty weather files where page does not return an error.

### Flying and User Aircraft

* Removed confusing move/zoom gesture when on ground with simple aircraft centering. Now keeping
  current zoom value when jumping back to user aircraft.
* Added option to modify zoom for aircraft and next waypoint. Options on page `Simulator Aircraft`
  input field `Zoom Distance`.

### Aircraft Performance

* Now checking roughly for correct ICAO aircraft type in performance edit dialog. Added link to
  official ICAO aircraft type database and Wikipedia in aircraft performance edit dialog.
* More warnings for invalid fuel flow and speed values in aircraft performance: `Climb fuel flow is
  smaller than cruise fuel flow`, `Descent fuel flow is higher than cruise fuel flow`,  `Climb speed
  is higher than cruise speed` and `Descent speed is much smaller than cruise speed`.
* Added simulator type to aircraft performance file, edit dialog and display.
* Added display for winds at cruise level only in tab `Fuel Report`.
* Improved wind data calculation to achieve more accuracy and better matching path angles.
* More user interface improvements.

### Search

* Added random destination finder in airport search tab to select a random departure and arrival
  from the current search result. Enable this by checking `Random Flight` in the drop down menu
  button. Thanks to [u-an-i](https://github.com/u-an-i) for implementing this.
* Added undo/redo functionality to logbook and userpoint search tabs. Can be accessed in main menu,
  context menu or shortcuts. The undo/redo information is saved in the database and permanent between
  restarts. Note that undoing large bulk changes can take a while. Warning dialogs before deleting
  entries removed. [#280](https://github.com/albar965/littlenavmap/issues/280)
* Logbook and userpoint undo function assigned to `Ctrl+Shift+Z` and `Ctrl+Shift+Y` to avoid
  overlap with flight plan undo/redo functions.
* Added literal search using double quotes for navaid and airport idents. Example: Search for "TAU"
  including the double quotes to find exactly the two VORs with this id instead of waypoints like `TAURA`.
* Idents in airport or navaid search can now be separated by space to search for a list. Example:
  Enter `LIRF EDDF` without quotes to find these two airports.
* More improvements and bug fixes to search functionality.

### Procedures

* Added procedure preview showing all available procedures of an airport on the map. Enable with new
  button in airport search tab on the top. View is updated automatically when changing search
  parameters in procedure tab.
* Procedures can now be selected into flight plan by right-clicking on a waypoint or other fix of a
  procedure preview in the map.
* Procedures and custom arrival and departures can now be deleted from the map context menu when
  right-clicking on a procedure waypoint.
* Added name search filter in procedure search tab. This filters the procedures by the content of
  the field `Ident`. The parameter is saved between sessions.
* Added procedure filter for STAR and all approach types like ILS, RNAV or VORDME.
* Added indicator for transitions `(T)` in procedure search tab for SID, STAR and approaches.
  Number of transitions is shown in the remarks column.
* Added display of aircraft category and RNP indicator to procedures and procedure legs in flight
  plan table and procedure search.
* Vertical angle now shown in procedure leg restrictions in flight plan and procedure search. [#803](https://github.com/albar965/littlenavmap/issues/803)

### User Aircraft Progress

* Added user aircraft progress tab configuration using a tree control which allows to select data
  fields to show. The dialog also shows a description for each progress data field. Show this
  configuration dialog by clicking on the small button on the top right in the progress tab (gear) or
  by using the context menu. [#768](https://github.com/albar965/littlenavmap/issues/768)
* Added fuel load, gross weight, real time, top of climb and autopilot selected altitude to
  aircraft progress.
* Showing vertical path and required descent rate in aircraft progress in descent and approach phase.
* Endurance in progress tab now considers reserves and contingency fuel.
* Added options to display speeds, altitude and vertical speed in other than selected default units.
  This is for indicated and actual altitude as well as indicated, ground and vertical speed in the
  progress display tab. Enable this in menu `Tools` -> `Aircraft Progress Display Options`. [#656](https://github.com/albar965/littlenavmap/issues/656)

### Information and Aircraft Progress

* Moved multiple code for airspaces from name to description to avoid the confusing name suffix.
* Added [ChartFox](https://chartfox.org) to airport information in link section. You have to be
  logged into ChartFox to see charts.
* Added radial and distance to related navaid in waypoint information for special waypoints like
  `D095J` which is 95°M and 10 nm from VOR SUM.
* Added display of transition level to information airport and weather tab. Only X-Plane or Navigraph.
* Showing detailed waypoint description now if available (Navigraph and X-Plane). [#321](https://github.com/albar965/littlenavmap/issues/321)

### Userpoints

* Userpoint category is now automatically enabled after adding one on the map. This helps to avoid
  confusion when a userpoint is hidden right after adding.
* Now creating `More ...` overflow menu in for userpoint categories if userpoint category menu gets
  too large.
* Added separate symbol size and text options for userpoints. See page `Map Display User`.

### User Interface

* Added introductory dialog for first time users explaining further steps. Moved all initial dialog
  actions to the delayed window actions to have main window and map complete. Dialog advising
  database reload now allows to open the scenery library dialog. Other small text changes.
* Swapped `Shift+F11` and `F11` functions. Fullscreen is now `F11` since this is a common shortcut for
  most applications.
* All actions for `None` and `All` in toolbar button dropdown menus can now toggle between states
  none, all and selected state. Click `All` a second time to revert to the previous selection. [#762](https://github.com/albar965/littlenavmap/issues/762)
* Removed `Delete Aircraft Trail` function from toolbar to avoid accidental deletion. The function
  can be accessed by shortcut `Alt+Shift+T` or in menu `Map`.
* Now checking for base folder structure only on first startup to avoid issues when changing
  language. Folder structure can be now be created manually from `Tools` -> `Create Directory
  Structure`. [#782](https://github.com/albar965/littlenavmap/issues/782)
* Added warning message when using scenery library with not matching simulator in connect dialog.
  This shows up when connecting to MSFS with an active X-Plane scenery database, for example.
* Now decreasing connection rate for long running sessions using autoconnect to avoid loss of
  internal SimConnect resources. After 30 minutes, an attempt is made to connect every 30 seconds, and
  after one hour, every minute. Workaround for [#891](https://github.com/albar965/littlenavmap/issues/891).
* Separated tab bar reset into a new menu item `Reset Tabs to Default` in menu `Window`. Window layout
  and and tabs can now be reset separately.
* Added show map cache to menu `Tools` -> `Files`.
* Resetting some essential messages on update now to keep users alert and aware of potential issues.
* Changed symbol for nautical miles to correct official `NM`.
* More small user interface fixes and improvements.

### Options

* Reordered pages in options and added new pages `Map Display Keys`, `Map Display Labels`, `Map
  Display User` and `Map Display Flight Plan`. Removed page `Map Display 2`.
* Added new page `Map Display Labels` in options and moved tree settings from `Map Display 2` to
  it. Setting description is now shown in a second column instead of tooltips.
* Option to hide user feature tooltips (traffic patterns, measurement lines and others) on page
  `Map` added.
* Added option to disable startup image screen (splash screen) on page `Startup and Updates`.
* Added distance option to zoom in on aircraft touchdown in options on page `Simulator Aircraft`.
* Added separate timeout to jump back to current active leg for flight plan table on page
  `Simulator Aircraft`.
* Added option to change main toolbar icon size on page `Display and Text`.
* Added option to reverse all mouse wheel functions in map and elevation profile in options dialog on
  page `User Interface`.

### Scenery Library Database

#### General

* Scenery library database can now be loaded in background which allows the user to plan a flight while
  loading. Progress dialog is not blocking access to the program now and can be brought into background.
  Loading dialog now gives an option to use or discard a database after loading.
* Now notifying user about wrong scenery library modes after loading. Considers MSFS and Navigraph
  special cases. Allows user to change to the recommended mode after loading.
* Now showing a warning dialog on startup and database switch if user has a stale simulator
  database loaded. The warning shows if the scenery library database was created with a previous
  *Little Navmap* version or if it is older than two months.
* Now adding suffix `... reload advised` to database in scenery library menu if a database was loaded with a
  previous version of *Little Navmap* or if database was loaded two months ago. This is a reminder
  for users to reload after simulator updates or updates of _Little Navmap_.
* Added `Validate Scenery Library Settings` in menu `Scenery Library` which helps to set the correct
  scenery library mode.
* Corrected issues with runways designated by true course like BGTL. Approaches were missing runway assignments
  and could not be resolved before. [#870](https://github.com/albar965/littlenavmap/issues/870)
* Now allowing a `no simulator` state of the program instead of always showing X-Plane. This avoids the
  confusing X-Plane state despite not having it installed.
* Now hiding all artificial waypoints created internally for procedure or airway resolution from
  search, information and tooltips.
* ILS and GLS information is now always taken from Navigraph database except when using
  `Do not use Navigraph Database`. As a result ILS course might probably not match for older
  scenery data or airport add-ons. Select `Do not use Navigraph Database` temporarily if this is an
  issue.

#### MSFS

* Now ignoring invalid waypoints with empty ICAO region code and invalid type as they appear in
  some MSFS add-on sceneries. This fixes the exception `NOT NULL constraint failed:
  tmp_waypoint.region ...` when loading. [#910](https://github.com/albar965/littlenavmap/issues/910)
* Now also loading BGL files from missions to catch respective airports.
* Changed handling for MSFS file `Content.xml` for SU10 and fixed crash when reading new file
  layout. Priorities for known base folders are now forced to lowest values to ensure the correct
  loading order. Other folders are loaded without any special order if not set in `Content.xml`.
* Fixed bug where Little Navmap would only read and display a single transition from add-on
  (Community) SIDs and STARs, despite these procedures actually having more than one transition. This
  happens when using the latest MSFS SDK (SU9 or later).
  Thanks a lot to [flpduarte](https://github.com/flpduarte) at Github for the fix.
* Added messages for encrypted MSFS add-ons when reading the scenery library. This helps to
  identify unreadable airports.
* More fixes around MSFS scenery library loading.

#### X-Plane

* Data compilation adapted for X-Plane 12 folder changes. [#867](https://github.com/albar965/littlenavmap/issues/867)
* X-Plane now requires `x-plane_install_11.txt` or `x-plane_install_12.txt` and a valid installation
  path to be recognized. Run X-Plane once to create this file so that *Little Navmap* can detect it.
* Now skipping empty X-Plane `apt.dat` files and files having empty lines in the header to avoid
  program freezing when reading malformed files.
* Added airport transition level for X-Plane. This is not yet enabled in the Navigraph database.
* Fixed issue `Index out of bounds: Index: 5, size: 5` when reading X-Plane user_fix.dat with
  optional last column missing.
* More X-Plane related fixes.

### Command Line [#431](https://github.com/albar965/littlenavmap/issues/431)

Start program with the help option `-h` from a terminal to see available command line options.

* Added command line option `-f` or `--flight-plan` to load a flight plan file on startup using one
  of the supported formats (`.lnmpln`, `.pln`, `.fms` and more).
* New command line option to load and parse a flight plan route description (`-d` or
  `--flight-plan-descr`). For example, use `littlenavmap.exe -d "KYKM WENAS7 PERTT 4741N12051W DIABO
  J503 FOLDY YDC PIGLU4 CYLW CYYF CZGF"` to load plan on startup.
* Aircraft performance file can now be loaded from command line with option `-a` or `--aircraft-perf`.
* Added option `-p` or `--settings-path` to change full path to settings and databases using an
  absolute folder or a path relative to the installation folder. This allows to put all settings and
  databases on another drive or into the installation folder.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.0.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
