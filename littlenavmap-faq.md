---
layout: subpage
title:  "Little Navmap - Frequently asked Questions"
date:   2022-11-13 10:00:00 +0100
---

[Alex’ Projects](index.html) ► Little Navmap - Frequently asked Questions

# ![Little Navmap](assets/images/navroute.png) Little Navmap - Frequently asked Questions {#top}

**Use your browser search function (usually `Ctrl+F` for Windows and Linux or `⌘+F` for macOS) to find topics or keywords.**

See user manual for general known problems:\\
[► Little Navmap User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/APPENDIX.html#problems).

[► See below for limitations and issues around Microsoft Flight Simulator 2020](#problems-msfs)

Read below if you plan to use *Little Navmap* on a remote computer across a network to avoid common mistakes:\\
[► Little Navmap User Manual - Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NETWORK.html).

In case you have a question or a problem which cannot be solved:\\
[► **Contact and Support**](/contact.html).

<!-- egrep '####' littlenavmap-faq.md | sed -e 's/#### \(.\+\) {#\(.\+\)}/1. [\1](#\2)/g' -->

### Troubleshooting

1. [**How to fix issues**](#fix-issues)

### Installation {#installation}

1. [**How to update the program**](#update)
1. [Where are the log and configuration files?](#log-and-config-files)
1. [My anti-virus or anti-malware complains about _Little Navmap_](#anti-virus)
1. [Why can I see only the X-Plane connect option](#xplane-connection-only)
1. [I found an issue or have a proposal](#issue-proposal)
1. [The program crashes](#crash)
1. [The program does not start and Windows shows an error message](#no-start)
1. [I'd like to completely remove the program and all of its traces](#remove)
1. [SSL Initialization Error on Windows](#ssl-init)

### General {#general}

1. [**MSFS Specific Issues**](#problems-msfs)
1. [How can I create a flight plan](#flightplan)
1. [The map is jumping around randomly while flying](#aircraft-center)
1. [How to backup userdata or the logbook](#userdata-backup)
1. [Navaids or airways are red in the flight plan table](#red-navaids)
1. [Search result is empty](#search-empty)
1. [I get fuel flow indications that don't match _Little Navmap_'s values](#wrong-fuel-indication)
1. [Fuel planning and collection gives wrong fuel values](#wrong-fuel-planning)
1. [I cannot see my aircraft](#connect)
1. [The flight plan does not show up correctly in MSFS](#flightplan-msfs)
1. [There are airways missing over France and central Europe](#airways-missing)
1. [I see strange ILS feathers labeled `G25F, GS` and similar](#ils)
1. [Three-letter IATA airport codes are used everywhere instead of ICAO codes](#iata)
1. [Can I run _Little Navmap_ offline without an internet connection](#offline)

### Airports, scenery library, userpoint and navigation data {#scenery}

1. [All airports are marked as add-on (yellow circle on map) for MSFS](#airport-addon-msfs)
1. [Little Navmap crashes with an SQL error `unknown table fence` or similar](#crash-fence)
1. [I cannot see any airports or navaids](#load-scenery)
1. [I added an airport and it does not show up in _Little Navmap_](#no-airport)
1. [Search for airport by country, state or city does not work](#airport-admin-search)
1. [Airport runway numbers don't match the runway numbers for procedures](#runway-mismatch)
1. [How to add procedures to airports?](#add-procedures)
1. [A MSFS add-on does not show up after reloading the scenery library in _Little Navmap_](#no-airport-msfs)
1. [**How can I update the navdata to the latest cycle**](#update-navdata)
1. [I updated the navdata but it does not show up](#update-navdata-noshow)
1. [I cannot see aprons and taxiways on the map](#no-aprons-taxi)
1. [I cannot select a start position](#no-start-pos)
1. [Some procedures or procedure legs are marked red in the selection/search tree](#red-proc)
1. [Navaids from the X-Plane `user_nav.dat` and the `user_fix.dat` files do not show up in *Little Navmap*](#user-nav-fix-dat)
1. [An airport looks wrong, has runways pointing in the wrong direction, or its name is misspelled](#airport-wrong)
1. [How does _Little Navmap_ find the MSFS scenery library, or MSFS installation not found](#msfs-scenery-library)
1. [Error `Caught exception: NOT NULL constraint failed: tmp_waypoint.region ...` when loading the scenery library](#msfs-scenery-library-no-region)
1. [Error reading `.../Content.xml“ on line 6 column 13: premature end of document` when loading the scenery library](#msfs-scenery-library-content-xml)
1. [Error `Caught exception in file ..\atools\src\gui\application.cpp line 83 what UNIQUE constraint failed: userdata.userdata_id` after adding a userpoint](#userdata-exception)

### User Interface {#ui}

1. [Text and/or icons appear very small on a 4k or other high resolution monitor](#highdpi)
1. [How can I make the map window bigger](#map-window)
1. [How can I make the map window larger](#resize-map)
1. [I cannot resize a dock window](#dock-frozen)

### Map Display {#mapdisplay}

1. [I see white rectangles containing a message about contacting User:TheDJ on the map](#hillshadingissues)
1. [The map moves jerky or I see stutters in _Little Navmap_ while scrolling or zooming](#jerky-map)
1. [Lines disappearing](#lines-disappearing)
1. [I cannot remove a traffic pattern, a holding or measurement lines](#remove-pattern)
1. [Map is fuzzy and not updating](#map-no-update)
1. [Why isn't the terrain mesh shown far North and South?](#terrain-mesh-limitations)
1. [Map background is black](#map-black)
1. [Can I run the program on another client computer across the network](#networking)
1. [Can I see the program when running FSX, P3D, MSFS or X-Plane fullscreen](#sim-fullscreen)
1. [The map window is not visible or shows only a gray surface](#map-hidden)

### Apple macOS {#macos}

1. [Where is the options menu item on macOS](#prefs)
1. [I get a message complaining about an unidentified developer on macOS](#macos-unidentified-developer)
1. [Cannot run _Little Navmap_ or _Little Xpconnect_ on macOS Catalina or later](#catalina)

### X-Plane and _Little Xpconnect_ {#xp}

1. [I installed _Little Xpconnect_ but cannot find it in the X-Plane menus](#xpconnect-menus)
1. [A pop up window says my versions are not compatible Little Xpconnect needs to be updated](#xpconnect-install)
1. [Weather in X-Plane does not match what _Little Navmap_ displays](#xplane-weather)
1. [I get an error message about missing directories when loading X-Plane scenery](#missing-xplane-scenery)
1. [Airports missing in X-Plane scenery after reloading](#airports-missing-xplane-scenery)
1. [I still see an older AIRAC cycle in the Scenery Libary menu for X-Plane](#update-navdata-cycle)
1. [Little Xpconnect does not load in Ubuntu 18.04 or derived Linux distributions](#xpconnect-linux)

## Frequently asked Questions and Issues {#contents}

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### Troubleshooting

#### How to fix issues {#fix-issues}

You can try the following if you experience problems like crashes, freezes, a corrupted window layout or other issues.

**First update *Little Navmap* if you're not running the latest version.**

##### Corrupted window layout or missing map window

Try `Window` -> [Little Navmap User Manual - Reset Window layout to default](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#reset-window-layout) or load a previously saved window layout file (see [Little Navmap User Manual - Saving and Loading Layouts](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/LAYOUT.html#saving-and-loading-layouts)).

If this does not help, try the suggestions below.

##### Quick and simple Solution

Go to the *Little Navmap* main menu `Tools` and select [Little Navmap User Manual - Reset all Settings and restart](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#reset-all-settings-and-restart). *Little Navmap* will show a question dialog and then restart after deleting all settings.

If this does not help, you can restore the settings file backup which was mentioned in the dialog.

##### More complicated but thorough option

Quit *Little Navmap* and rename the main settings folder `ABarthel` which contains all
simulator databases and is stored in the following places:

* Windows: `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel`
* macOS: `/Users/YOURUSERNAME/.config/ABarthel`
* Linux: `/home/YOURUSERNAME/.config/ABarthel`

See also [Little Navmap User Manual - Configuration](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html#configuration).

Do not delete the folder, but rename it to keep your settings if this does not fix the problem.

Start *Little Navmap* and see if the issue is gone.

If this did not help: Quit *Little Navmap*. Delete `ABarthel` which was just created newly by the program and rename your backup again to `ABarthel` to get your settings and databases back.

##### Where is the log file

See [Little Navmap User Manual - Logs](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html#logs).

##### Report the problem

If nothing helps, report an issue either in the [**Support Forum at _Avsim_**](https://www.avsim.com/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or send me an email through [**Contact and Support**](contact.html).

----


### Installation

#### How to update the program [**▲**](#top) [🔗](#update) {#update}

You might either:

* Delete the previous version of _Little Navmap_ and install the new version in the same place.
* Install the new version in a new folder by using the version as a directory name suffix, for example.

In either case do not merge the two old and new directories. Remains of previous versions might cause trouble.

Always update all related programs like *Little Navconnect* and *Little Xpconnect*.



----

#### Where are the log and configuration files? [**▲**](#top) [🔗](#log-and-config-files) {#log-and-config-files}

The files can be opened in the default text editor from menu -&gt; `Tools` -&gt; `Files and Directories` in *Little Navmap*.

Details can be found in the chapter [Little Navmap User Manual - Files](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html) in the manual.



----

#### My anti-virus or anti-malware complains about _Little Navmap_ [**▲**](#top) [🔗](#anti-virus) {#anti-virus}

This is usually a false positive.

I usually upload all Zip files to [VirusTotal](https://www.virustotal.com) before making them public. This ensures that the files are checked by 50 or more anti-virus programs.

You can send your downloaded files to VirusTotal and you will get the report from my uploads immediately.

One false positive might occur and is no reason for concern.



----

#### Why can I see only the X-Plane connect option [**▲**](#top) [🔗](#xplane-connection-only) {#xplane-connection-only}

*Little Navmap* comes with a SimConnect library version 10.0.61259.0 (FSX SP2 / no Acceleration) and does not require a separate installation of SimConnect.

The included SimConnect library is compatible with all FSX and P3D versions as well as Microsoft
Flight Simulator 2020.

The X-Plane connect option is always shown. You probably installed *Little Navmap* on a computer that has no FSX, P3D or MSFS installation.
See [Little Navmap User Manual - Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NETWORK.html)
if you intend to run *Little Navmap* on a remote computer.



----

#### I found an issue or have a proposal [**▲**](#top) [🔗](#issue-proposal) {#issue-proposal}

All ideas and bugs are collected in the [Github Issues](https://github.com/albar965/littlenavmap/issues) for _Little Navmap_.

First check if your idea or finding is already covered there.

If not you can register at Github and write an issue. Alternatively, you can send me an email and I put this on my internal list
or create an issue for bigger tasks.

For errors send me a bug report in the
[Avsim Support Forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or by email.
See [Little Navmap User Manual - How to report a Bug](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/APPENDIX.html#how-to-report-a-bug).



----

#### The program crashes [**▲**](#top) [🔗](#crash) {#crash}

Rename the settings directory which also contains the scenery databases. In Windows these can be found in `c:\Users\YOURUSERNAME\Appdata\Roaming\ABarthel`.
E.g. rename `ABarthel` to `ABarthel.backup`.

If the problem persists send me a bug report in the
[Avsim Support Forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or by email.
See [Little Navmap User Manual - How to report a Bug](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/APPENDIX.html#how-to-report-a-bug).



----

#### The program does not start and Windows shows an error message [**▲**](#top) [🔗](#no-start) {#no-start}

Windows shows an error message `cannot proceed because libmarblewidget-qt5.dll was not found` or similar when trying to start *Little Navmap*.

This can have several reasons:

* Not all files were extracted and the mentioned DLL file is missing. Check if it can be found in the same folder as the `littlenamvmap.exe`.
* Anti-virus put the DLL into quarantine.
* You start the program using a shortcut (`.lnk` file) and the working directory is not the *Little Navmap* folder (the one with the `littlenamvmap.exe`). The working directory can be changed in the link properties in input field `Start In`.

Other problems on Windows:

* You double clicked the file `littlenavmap.exe.simconnect` which is not the executable file. Double clicking on this will show a dialog where Windows asks for a program to open it. Double click on `littlenamvmap.exe` (light blue globe icon) to open _Little Navmap_.
* You probably downloaded the wrong Zip archive containing only the source files or an archive for another operating system. In both cases the file `littlenamvmap.exe` is missing.



----

#### I'd like to completely remove the program and all of its traces [**▲**](#top) [🔗](#remove) {#remove}

All files and folders created by _Little Navmap_ are described in the chapter [Little Navmap User Manual - Files](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html) in the manual.

_Little Navmap_ does not create any registry entries on Windows.



----

#### SSL Initialization Error [**▲**](#top) [🔗](#ssl-init) {#ssl-init}

This is caused by a missing redistributable installation for older versions of _Little Navmap_.

Install both [vcredist_x64_2010.exe](https://www.littlenavmap.org/downloads/Windows%20Redistributable%20Packages/vcredist_x64_2010.exe) and [vcredist_x86_2010.exe](https://www.littlenavmap.org/downloads/Windows%20Redistributable%20Packages/vcredist_x86_2010.exe) to fix this issue.



----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### General

#### How can I create a flight plan [**▲**](#top) [🔗](#flightplan) {#flightplan}

Zoom to an airport in the map and right click on it. Select `Set ... as Flight Plan Departure`. Look for another airport
on the map, right click and select `Set ... as Flight Plan Destination`.

That's it. You just built a simple flight plan.

Have a look at the [Little Navmap User Manual - Tutorials](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/TUTORIALS.html) which are also linked in the help menu. These help to get around in the program.

----

#### MSFS Specific Issues [**▲**](#top) [🔗](#problems-msfs) {#problems-msfs}

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:\\
[► Little Navmap User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

**Note that many of these issues are a result of MSFS limitations and cannot be fixed in** *Little Navmap* **.**

-  **Active pause in the simulator breaks the connection and does not allow to reconnect. This has already been reported to Asobo.**
-  **Some third-party plugins like traffic add-ons might cause connection issues when used together with *Little Navmap*.**
-  Autoconnect to the simulator does not work reliably.
-  City and state names are missing in the search (fixed with *Little Navmap* 2.8.2.beta).
-  Navdata updates are not read properly from the MSFS scenery library. This is in general no issue
   since you can also update the navdata in *Little Navmap* with the Navigraph FMS Data Manager to keep the
   program in sync with MSFS. Stock data is not affected by this. See :ref:`load-scenery-library-dialog-msfs-apt-navdata`.
-  You can set a parking spot or fuel pad as starting position in a flight plan but note that runways and
   helipads as starting positions will be ignored by MSFS.
-  Parking spots having suffixes cannot be loaded by MSFS, Example EDDG, 18A to 18E.
-  MSFS multiplayer and real-time AI cannot be displayed. These do not appear in the SimConnect
   interface.
-  Simulator weather cannot be shown for MSFS since SimConnect weather functions are deprecated and
   do not deliver data. Use NOAA weather which gives you the most up-to-date weather reports.
-  Flight plan loading in MSFS has issues and does not produce any error messages if it fails.
-  Country names are missing in MSFS translation tables and are not available in *Little Navmap*,
   therefore.
-  Add-ons using the ``.fsarchive`` encrypted format are not supported. *Little Navmap* will show
   only the stock airport instead of the add-on if a package is locked down like this.
-  Some aircraft mods do not report correct fuel flow to work around simulator limitations. This
   cannot be fixed in *Little Navmap*.
-  Some airports files like ``LEMG.bgl`` cannot be read due to unknown format. *Little Navmap*
   reports ``Error: readInt for file "...OMITTED.../LEMG.bgl" failed. Reason 1``. Exclude the airport
   file from reading in options on page ``Scenery Library Database`` or simply ignore the message. The
   stock LEMG and all other airports are not affected by this.

----

#### The map is jumping around randomly while flying [**▲**](#top) [🔗](#aircraft-center) {#aircraft-center}

The map does not jump randomly. The level of zoom changes to keep aircraft and the next flight plan waypoint centered.

The default behavior is to keep aircraft and next flight plan waypoint on the screen once one flight plan leg is active (magenta), i.e. you're flying. You can move around the map manually but LNM jumps back to aircraft and waypoint after a while. All this is configurable in options on page [Little Navmap User Manual - Simulator Aircraft](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#simulator-aircraft).

You can also revert to simple aircraft centering, for example. The default values might be confusing first but they are like that to reduce the need for manual zooming.

If you switch to normal zooming you can change the level of zoom with the mouse wheel or other methods.

**Please also read the note about the special gestures in the linked manual chapter above.**



----

#### How to backup userdata or the logbook [**▲**](#top) [🔗](#userdata-backup) {#userdata-backup}

One way to back up is export all into a CSV file. This covers all used fields.

You can also backup the database directly. The userpoints and logbook entries are stored in a SQLite database.
If interested you can look into this database using tools like this one: [SQLitebrowser](https://sqlitebrowser.org/)

The main database is `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel\little_navmap_db\little_navmap_userdata.sqlite` and
`little_navmap_logbook.sqlite` respectively in
Windows and `$HOME/.config/ABarthel/little_navmap_db/little_navmap_userdata.sqlite` in macOS or Linux.

You have to close _Little Navmap_ before creating a backup or replacing the databases.

Little Navmap also creates three rolling backups (`little_navmap_userdata.sqlite.1`, etc.) on startup which you can use
if you deleted something accidentally.



----

#### Navaids or airways are red in the flight plan table [**▲**](#top) [🔗](#red-navaids) {#red-navaids}

This can happen if you load a flight plan which was made using older navdata.

It might contain waypoints that were removed later or radio navaids that were decommissioned. These cannot be found in later AIRAC cycles and therefore not in _Little Navmap_'s database.
These are shown in red and are treated like user defined flight plan waypoints in _Little Navmap_.

Airways are displayed in red if they do not exist or the minimum or maximum airway altitude restrictions are
violated by the selected cruise altitude when loading the flight plan.

See also [Little Navmap User Manual - Flight Plan - Error Display](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FLIGHTPLAN.html#error-display).



----

#### Search result is empty [**▲**](#top) [🔗](#search-empty) {#search-empty}

Check the drop down menu for the change indicator `*` and the search fields for any remaining text if the distance search does not give any or unexpected results. Use `Reset Search` in the context menu of
the result table or press `Ctrl+R` to clear all search criteria.

Note that using an ICAO code for searching will temporarily override all other options. This helps to do a quick search for an airport.



----


#### I get fuel flow indications that don't match _Little Navmap_'s values [**▲**](#top) [🔗](#wrong-fuel-indication) {#wrong-fuel-indication}

Fuel flow in the tab `Performance` of _Little Navmap_ does not match to what the aircraft is showing.

An aircraft add-on probably uses doctored values to workaround simulator limitations. This happens often with complex study level add-ons and might affect fuel calculation, planning and especially collection.



----

#### Fuel planning and collection gives wrong fuel values [**▲**](#top) [🔗](#wrong-fuel-planning) {#wrong-fuel-planning}

This is related to wrong fuel indications of an add-on aircraft. See [above](#wrong-fuel-indication).

You can still create an aircraft performance profile manually and ignore the indications.

Set TAS and fuel flow for typical cruise level.

For fuel flow, TAS and vertical speed in the descent and climb phases simply get the values at low altitude, near cruise altitude and then enter the average in _Little Navmap_.
Tune the profile manually as needed.

It might also be beneficial to create different profiles for different cruise altitude ranges, especially for large complex aircraft.



----

#### I cannot see my aircraft [**▲**](#top) [🔗](#connect) {#connect}

*Little Navmap* does not connect automatically to a simulator per default. You have to go to the main menu -&gt; `Tools` -&gt; `Flight Simulator Connection`.

See [Little Navmap User Manual - Connecting to a Flight Simulator](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/CONNECT.html).



----

#### The flight plan does not show up correctly in MSFS [**▲**](#top) [🔗](#flightplan-msfs) {#flightplan-msfs}

MSFS has many issues loading flight plans. Additionally, the format is not documented yet which requires a lot of guesswork.

The following issues are known so far:
- MSFS automatically adds transitions to approach procedures as well as SID and STAR if plan is of type IFR. Changing these results in a completely new routing.
- Saving a direct plan between two airports of type IFR will result in MSFS adding intermediate waypoints and procedures like SID and STAR.
- You cannot use airways or procedures for VFR flight plans. MSFS will quietly remove these.
- MSFS cannot load round trips where destination is equal to departure in some cases.
- MSFS uses turn anticipation which may result in wrong flight plan display in the GPS units or autopilot behavior. The GPS or autopilot will take a shortcut for hard turns which sometimes messes up a flight plan, for example. Turn anticipation is a function performed by FMS or RNAV devices to tell the pilot when to initiate a turn to the next waypoint on the programmed flight path to avoid overshooting the programmed course.
- Altitude at waypoints and sometimes the cruise altitude is ignored and replaced by MSFS' own idea of a climb and descent profile which has nothing to do with the *Little Navmap* profile. This happens despite *Little Navmap* saving the altitude for each waypoint.
- Flight plan names must not contains special characters like umlauts or accents. *Little Navmap* replaces these automatically when exporting a plan.
- Loading a flight plan containing user defined points (coordinates) results in some positions of the plan placed at the North Pole. **Note this was fixed with a Navigraph update AIRAC Cycle 2209 rev.2.**

Apart from these issues above you might see MSFS crashes or corrupted flight plans when loading.

Also, read the chapter [Little Navmap User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata) in the *Little Navmap* user manual to minimize issues with different navdata.



----

#### There are airways missing over France and central Europe [**▲**](#top) [🔗](#airways-missing) {#airways-missing}

There are gaps in the airway system over some European countries.

This is not an error but real and a result of the European airway restructuring to save fuel and emissions.

See [Free route airspace](https://www.eurocontrol.int/concept/free-route-airspace) for more information.

_Little Navmap_ can skip these gaps when calculating a flight plan. See here for information how to deal with this:
[Little Navmap User Manual - Flight Plan Route Calculation](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/ROUTECALC.html#prefer).



----

#### I see strange ILS feathers labeled `G25F, GS` and similar [**▲**](#top) [🔗](#ils) {#ils}

Update _Little Navmap_ to the latest. This was fixed with version 2.6.19.

These are GLS/RNAV approach facilities which will be shown in a future version of _Little Navmap_ and are already placed in the navigation database.

Unfortunately I cannot remove these for the current version of _Little Navmap_.



----

#### Three-letter IATA airport codes are used everywhere instead of ICAO codes [**▲**](#top) [🔗](#iata) {#iata}

Reload the scenery library database if you see the tree-letter IATA codes on the map and in the flight plan window.

The display will revert to the default ICAO codes (where available) after reloading.



----

#### Can I run _Little Navmap_ offline without an internet connection [**▲**](#top) [🔗](#offline) {#offline}

Yes. Switch to an offline map in menu `View` -> `Theme` (offline is indicated in the menus) and
disable all weather and wind downloads/assignments in the menu `Weather` as well as in options on
page `Weather`. You might also want disable the automatic check for updates in options on page `Startup
and Updates`. Additionally switch `Online Service` to `None` on options page `Online Flying`.

Also install the offline GLOBE elevation data to avoid elevation online accesses as described here in the user manual:
[Little Navmap User Manual - Install GLOBE elevation data](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#install-globe-elevation-data).

This disables all network connections in _Little Navmap_.

----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### Airports, scenery library and navigation data

#### All airports are marked as add-on (yellow circle on map) for MSFS [**▲**](#top) [🔗](#airport-addon-msfs) {#airport-addon-msfs}

Update _Little Navmap_ to the latest. This was fixed with version 2.6.18.

This appears after updating MSFS to the SU9 (beta).

Airports were moved to a new folder `fs-base-genericairports` which is the reason _Little Navmap_ does not recognize these as stock airports.



----

#### Little Navmap crashes with an SQL error `unknown table fence` or similar [**▲**](#top) [🔗](#crash-fence) {#crash-fence}

You're using a very old version of _Little Navmap_ with a new database. Update _Little Navmap_ to the latest version to fix this.



----

#### I cannot see any airports or navaids [**▲**](#top) [🔗](#load-scenery) {#load-scenery}

Load the scenery library from the simulator. See [Little Navmap User Manual - Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html)
in the manual.



----

#### I added an airport and it does not show up in _Little Navmap_ [**▲**](#top) [🔗](#no-airport) {#no-airport}

You have to reload the scenery library. See [Little Navmap User Manual - Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html).
in the manual.

See topic below for limitations with MSFS.



----

#### Search for airport by country, state or city does not work [**▲**](#top) [🔗](#airport-admin-search) {#airport-admin-search}

Data sources limit this functionality and it depends on the selected navdata source in menu `Scenery Library`:

* Navigraph only: This has only limited administrative airport information. Only airport name (`Frankfurt am Main`), ICAO code (`EDDF`), ICAO region (`ED`) and area code (`EUR`) are available.
* All other modes: The completeness of administrative information depends on the airport. Administrative data (State, City, etc.) is often missing for X-Plane airports. Country information is completely missing in MSFS.



----

#### Airport runway numbers don't match the runway numbers for procedures [**▲**](#top) [🔗](#runway-mismatch) {#runway-mismatch}

This depends on the scenery mode as set in the menu `Scenery Library` -&gt; `Navigraph`. The default is to use the flight simulator scenery for runways and ILS and the Navigraph database for all airspaces, airways and all other navaids.

Runways are named by the magnetic direction which changes over the years. This results in airports renaming their runways from time to time.
Therefore, mismatches between old airports, be it stock or add-on, can happen.

It's neither a _Little Navmap_ nor Navigraph issue. It is an unavoidable real world issue where simulator scenery or airports are not updated as fast as the real world airports.

See the [Little Navmap User Manual - Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NAVDATA.html) chapter in the manual for more information.

For **FSX or Perpar3D** you can use the [Airport Design Editor](https://www.scruffyducksoftware.com/airport-design-editor) to change the runway numbers.

Use [WED](https://developer.x-plane.com/tools/worldeditor/) to change an airport for X-Plane.



----

#### How to add procedures to airports? [**▲**](#top) [🔗](#add-procedures) {#add-procedures}

This is a very complex task.

For **FSX or Perpar3D** you can use the [Airport Design Editor](https://www.scruffyducksoftware.com/airport-design-editor),
add procedures to the airport and then switch off Navigraph in the scenery library menu. LNM will
read the procedures from your add-on airport and you can use them like the others.

**X-Plane**: You can try to create a CIFP file but this is very complex and not recommended as stated on the page [here](https://developer.x-plane.com/?article=navdata-in-x-plane-11#How_do_I_make_my_own_approach_No_hand_editing_please).

See [Navdata in X-Plane 11](https://developer.x-plane.com/?article=navdata-in-x-plane-11) and [XP-CIFP1101-Spec.pdf](http://developer.x-plane.com/wp-content/uploads/2016/10/XP-CIFP1101-Spec.pdf).



----

#### A MSFS add-on does not show up after reloading the scenery library in _Little Navmap_ [**▲**](#top) [🔗](#no-airport-msfs) {#no-airport-msfs}

Encrypted add-on airports in MSFS cannot be read by *Little Navmap*.

The add-on is locked down with a DRM ([Digital _Restriction_ Management](https://en.wikipedia.org/wiki/Digital_rights_management)) scheme if you find a file `BGL.fsarchive` in the add-on folders. *Little Navmap* will not show a new airport or only the stock airport if an add-on replaces a stock one.

Buy add-ons directly from developers instead of the Microsoft market which enforces encryption. Alternatively you can also use and support freeware scenery.

See also [Little Navmap User Manual - Known Issues](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/APPENDIX.html#microsoft-flight-simulator-2020).



----

#### How can I update the navdata to the latest cycle [**▲**](#top) [🔗](#update-navdata) {#update-navdata}


You have to get a [Navigraph](https://www.navigraph.com/) subscription. This allows you to update the _Little Navmap_ navdata to the latest.

I recommend to keep *Little Navmap*, the simulator and all tools on the same AIRAC cycle to avoid issues when loading flight plans.



----

#### I updated the navdata but it does not show up [**▲**](#top) [🔗](#update-navdata-noshow) {#update-navdata-noshow}

You should use the automatic scan in the _FMS Data Manager_ which usually finds the correct path.

See [Little Navmap - Install Navigraph Updates](/littlenavmap_navigraph.html) to see
how to set the path correctly if the automatic scan did not find the path.



----

#### I cannot see aprons and taxiways on the map [**▲**](#top) [🔗](#no-aprons-taxi) {#no-aprons-taxi}

There are only white bars with a black outline showing the runways.

You probably selected `Use Navigraph for all Features` in the `Scenery Library` menu. `Use Navigraph for Navaids and Procedures` is the recommended mode which will show detailed stock or add-on airports mixed with Navigraph navaids.

See [Little Navmap User Manual - Navigation Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NAVDATA.html) in the manual.



----

#### I cannot select a start position [**▲**](#top) [🔗](#no-start-pos) {#no-start-pos}

You might use the wrong scenery mode `Use Navigraph for all Features`.
See [Little Navmap User Manual - Navigation Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NAVDATA.html) and  [Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata) for more information about this.

Select either `Use Navigraph for Navaids and Procedures` or `Do not use Navigraph Database` depending on information in above links (Navigraph MSFS update installed or not).



----

#### Some procedures or procedure legs are marked red in the selection/search tree [**▲**](#top) [🔗](#red-proc) {#red-proc}

This can happen if navdata read from the simulator has errors or is incomplete. Note that this issue appears only when using `Do not use Navigraph Database` in the menu `Scenery Library`.

The procedures cannot be used at all or only after confirming a warning dialog.

A currently known problem is missing recommended fix information for constant radius arc procedure legs in MSFS navdata.

See also [Little Navmap User Manual - Search Procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SEARCHPROCS.html) and
[Procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/APPROACHES.html) for more information.



----

#### Navaids from the X-Plane `user_nav.dat` and the `user_fix.dat` files do not show up in *Little Navmap* [**▲**](#top) [🔗](#user-nav-fix-dat) {#user-nav-fix-dat}

LNM reads both the `user_nav.dat` and the `user_fix.dat` files. The problem is that the navaids are hidden by Navigraph data per default. Therefore, you have to switch to `Do not use Navigraph database` in the menu `Scenery Library` to see the user navaids.

You also have to reload the LNM scenery library after adding or changing the user files.

The user navaids can be used in the X-Plane stock FMS and GPS. But keep in mind that the user navaids do not show up on the X-Plane internal map.



----

#### An airport looks wrong, has runways pointing in the wrong direction, or its name is misspelled [**▲**](#top) [🔗](#airport-wrong) {#airport-wrong}

The following are scenery or add-on issues:
1. Aprons are over sized or at the wrong position: Some add-on developers misuse apron polygons for other purposes like parking lots or flattening. MSFS seems to have automatically generated apron polygons which can be wrong. This is not a bug in _Little Navmap_ which reads these structures as is.
2. Taxiway signs are missing or wrong: This is an issue with the stock airport scenery or an add-on.
3. Runways pointing into the wrong direction, e.g. runway 27 pointing to 90 east: This is an issue with the airport scenery or an add-on having wrong runway designators.
4. Runway in procedures do not match the runways of the airport: This happens since runways are renamed because of magnetic drift from time to time. As a result an older add-on might not match the latest navdata update.
5. Airport names are misspelled. This is a scenery problem.
6. Country, state, province, city or airport name is wrong or missing: Completeness of administrative information depends on simulator or airport add-on. Administrative data is often missing or wrong for X-Plane airports. Country information is completely missing in MSFS. Other simulators might provide only obsolete data.

What can you do:
1. You can contact the add-on developers and ask them to fix the issue.
2. For X-Plane you can use [WED](https://developer.x-plane.com/tools/worldeditor/) to correct the issue and upload your changes to the [Scenery Gateway](https://gateway.x-plane.com/) or file a bug report at the Gateway.
3. Use the MSFS development tools to create a corrected version of the airport.



----

#### How does _Little Navmap_ find the MSFS scenery library, or MSFS installation not found [**▲**](#top) [🔗](#msfs-scenery-library) {#msfs-scenery-library}

_Little Navmap_ looks into fixed installation folders for the various MSFS installation options (MS Online, MS Boxed or Steam). There are no Windows registry entries used. Installation on a removable drive is usually no problem.

_Little Navmap_ first looks for a file `UserCfg.opt` at the following fixed locations:
1. MS online installation: `C:\Users\USER\AppData\Local\Packages\Microsoft.FlightSimulator_8wekyb3d8bbwe\LocalCache\UserCfg.opt`
2. Steam installation: `C:\Users\USER\AppData\Roaming\Microsoft Flight Simulator\UserCfg.opt`
3. MS Boxed installation: `C:\Users\USER\AppData\Local\MSFSPackages\UserCfg.opt`

Replace `USER` with your login name.

The text file `UserCfg.opt` contains a last line `InstalledPackagesPath` which points to the MSFS scenery library.

From there _Little Navmap_ looks up `...\Official\Steam\fs-base\layout.json` or `...\Official\OneStore\fs-base\layout.json` to check if the installation path is really valid or if it consists only of remains from previous installations.

Detection problems can usually caused by file permission issues, missing files / folders or remaining files from previous installations.



----

#### Error `Caught exception: NOT NULL constraint failed: tmp_waypoint.region ...` when loading the scenery library [**▲**](#top) [🔗](#msfs-scenery-library-no-region) {#msfs-scenery-library-no-region}

Note: This issue was fixed with the Little Navmap beta 2.8 versions. See page [Alex' Projects](https://albar965.github.io/index.html) for latest releases of stable and beta versions.

The problem is caused by a faulty add-on which inserts waypoints without the two-letter ICAO region code into the scenery library. This causes the error.

You can find the offending add-on by opening the log file of _Little Navmap_ in menu `Tools` -> `Files and Directories` -> `Open Log File`.
This will show the logfile in your default text editor.

You can find one or more messages like below if you search through the log file for the text `has no region`:

```
[... INFO ]: Scenery path "C:\\MSFS\\Community\\2nxx-mountain-air"
[... INFO ]: =P=== "9379 of 11465 (81 %) [1]" "2nxx-modelLib.BGL"
[... INFO ]: =P=== "9380 of 11465 (81 %) [1]" "2nxx_Objects.bgl"
[... WARN ]: Waypoint at Pos(-170.55,-87.86,0.000000) ident EXAMPLE has no region
```

The problem is the scenery file above the warning (`2nxx_Objects.bgl` here).

Now go to menu `Tools` -> `Options` in _Little Navmap_ and select the page `Scenery Library Database`.
You can exclude the whole add-on by adding the directory `C:\MSFS\Community\2nxx-mountain-air` or only the file `C:\MSFS\Community\2nxx-mountain-air\2nxx_Objects.bgl` to the upper list.

Reload the scenery library and the issue should be gone.



----

#### Error reading `.../Content.xml“ on line 6 column 13: premature end of document` when loading the scenery library [**▲**](#top) [🔗](#msfs-scenery-library-content-xml) {#msfs-scenery-library-content-xml}

Note: This issue was fixed with the *Little Navmap* beta 2.8 versions. See page [Alex' Projects](https://albar965.github.io/index.html) for latest releases of stable and beta versions.

The file `Content.xml` was changed with the MSFS update SU10. The new and changed format will only be written if you install MSFS or if you use development functions in MSFS to reorganize the scenery package priority.

There are two possible solutions:
1. You can rename the file temporarily while loading the scenery library database in *Little Navmap*.
1. Use *Little Navmap* beta version 2.8 or later. See [the main page here](https://albar965.github.io/index.html) for announcements of beta releases.



----

#### Error `Caught exception in file ..\atools\src\gui\application.cpp line 83 what UNIQUE constraint failed: userdata.userdata_id` after adding a userpoint [**▲**](#top) [🔗](#userdata-exception) {#userdata-exception}

This is related to a bug that appeared in *Little Navmap* version 2.8.0.beta. The userpoint database has inconsistencies.

Do the following to fix this:

1. Export all your userpoints as CSV file from *Little Navmap* main menu -> `Userpoints` -> `Export CSV`. Disable `Export selected entries only` and `Append to an already present file`. Leave the other option as is.
2. Rename the file `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel\little_navmap_db\little_navmap_userdata.sqlite` (file locations on other operating systems are documented [Little Navmap User Manual - Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html#databases)). Do not delete it to have a backup.
3. Import the CSV from 1. from main menu -> 'Userpoints' -> `Import CSV`.

Note that this also removes all undo/redo steps from the database.

The error should not appear again.



----


<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### User Interface

#### Text and/or icons appear very small on a 4k or other high resolution monitor [**▲**](#top) [🔗](#highdpi) {#highdpi}

Go to menu `Tools` -> `Options` and then to page `Display and Text`. Check `Enable high DPI monitor support` and restart _Little Navmap_.



----

#### How can I make the map window bigger [**▲**](#top) [🔗](#map-window) {#map-window}

there are several options:

- Close the search window and/or close search options in airport search (three lines or "hamburger" button). These take a lot of space.
- Undock the search window, i.e. remove it from them main window and/or close it. Normally not needed while flying anyway. I have it only open for flight planning.
- Undock the map and move it to another screen if available.
- Take the search window and drop it on the progress window. This will create a window with search and progress tabs at the bottom.

Here are some tips for undocking (Ctrl-key, etc.) and moving around in the interface:
[Little Navmap User Manual - Dock Windows](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/DOCKWINDOWS.html)



----

#### How can I make the map window larger [**▲**](#top) [🔗](#resize-map) {#resize-map}

The issue is similar to the one above.

It's usually the search window which keeps the map from expanding.
Disable all unneeded search options in the "hamburger" drop down menu on the top right in the airport search. Do the same for navaid search.

Additionally undock the search window and let it float. Since the search is usually only needed for flight preparation you can close the search dock window when flying (`Alt-1`). You can always open it quickly by hitting `F4`.



----

#### I cannot resize a dock window [**▲**](#top) [🔗](#dock-frozen) {#dock-frozen}

Freezing dock windows. Try one of the following:

1. Main menu -> `Window` -> `Reset Window layout`
2. Double click on a window title to undock it, i.e. bring it into floating state. Double click again to put it back. Resizing should be allowed now.

Another reason can be the search window taking up too much space:

1. Switch around in the search tabs or undock and dock one back by double clicking into the title bar.
1. Undock the search window and let it float. This dock window is very expansive and squeezes other docks into the corners even when search options are disabled.



----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### Map Display

#### I see white rectangles containing a message about contacting `User:TheDJ` on the map [**▲**](#top) [🔗](#hillshadingissues) {#hillshadingissues}

Update _Little Navmap_ to the latest. This was fixed with version 2.6.18.

This is related to the hillshading option.

The admin for the server providing the hillshading data decided to shut down the service.



----


#### The map moves jerky or I see stutters in _Little Navmap_ while scrolling or zooming [**▲**](#top) [🔗](#jerky-map) {#jerky-map}

You might have selected too many details. Go to main menu -&gt; `View` -&gt; `Details` -&gt; `Default Detail`.



----

#### Lines disappearing [**▲**](#top) [🔗](#lines-disappearing) {#lines-disappearing}

Parts of the flight plan disappear.

This is a known error and can happen at certain zoom distances with long flight plan legs.



----

#### I cannot remove a traffic pattern, a holding or measurement lines [**▲**](#top) [🔗](#remove-pattern) {#remove-pattern}

You have to right-click on the hotspot.

See [Little Navmap User Manual - Mouse Click Hotspots](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MAPDISPLAY.html#mouse-click-hotspots).



----

#### Map is fuzzy and not updating [**▲**](#top) [🔗](#map-no-update) {#map-no-update}

This can have several reasons:
1. The server for the online map is down. These are free services where I have no influence on availability. Wait a few hours and they are usually back.
2. Your internet connection is broken or your firewall forbids network access for _Little Navmap_.



----

#### Why isn't the terrain mesh shown far North and South? [**▲**](#top) [🔗](#terrain-mesh-limitations) {#terrain-mesh-limitations}

I installed the Global mesh for LNM, but still nothing far North and South?

The GLOBAL elevation data is only for the elevation profile and altitude display in the status bar. Hillshading comes from an open server and that has known limitations and bugs. Coverage is limited. You can use another map theme which includes worldwide hillshading like the `StamenTerrain` or `OpenTopoMap`.



----

#### Map background is black [**▲**](#top) [🔗](#map-black) {#map-black}

Something went wrong when installing _Little Navmap_. Most likely the directory `data` is missing.



----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### Apple macOS

#### Can I run the program on another client computer across the network [**▲**](#top) [🔗](#networking) {#networking}

Yes. You can even mix different systems like using macOS for _Little Navmap_ and Windows for flying.
The client computer does not need a SimConnect or simulator installation at all.

See [Little Navmap User Manual - Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NETWORK.html)
in the manual.



----

#### Can I see the program when running FSX, P3D, MSFS or X-Plane fullscreen [**▲**](#top) [🔗](#sim-fullscreen) {#sim-fullscreen}

You can not. But you can:

1. Use an old second monitor for the map before throwing it away.
2. Take an old and slow notebook and use it in networked mode. _Little Navmap_ is happy with 2 GB of ram and there are options to speed up map display. This notebook can run Linux or macOS. Have a look at the manual here: [Little Navmap User Manual - How to run a network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INTRO.html#network-setup)
3. Run the simulator in seamless window mode. Then you can `Alt+Tab` between applications.



----

#### The map window is not visible or shows only a gray surface [**▲**](#top) [🔗](#map-hidden) {#map-hidden}

This can happen for various reasons (like a crash) or if you change the option [Little Navmap User Manual - Allow to undock the map window](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#allow-to-undock-the-map-window) in the options dialog.

Use menu `Window` -> [Little Navmap User Manual - Reset Window Layout](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#reset-layout-menu) in the main menu to clean up the window layout.



----

#### Where is the options menu item on macOS [**▲**](#top) [🔗](#prefs) {#prefs}

Options can be accessed in the application menu `Little Navmap` -&gt; `Preferences`.



----

#### I get a message complaining about an unidentified developer on macOS [**▲**](#top) [🔗](#macos-unidentified-developer) {#macos-unidentified-developer}

First move the extracted archive out of the folder `Downloads`.
Then right click or `Ctrl+Click` on the application and select `Open`. Confirm the dialog to run the program.

You probably have to enter an administrator name and password once. The program can be started normally after this procedure.

See [Little Navmap User Manual - Installation - macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos).



----

#### Cannot run _Little Navmap_ or _Little Xpconnect_ on macOS Catalina or later [**▲**](#top) [🔗](#catalina) {#catalina}

A new security feature in macOS forbids the execution of unsigned libraries or apps.

See [Little Navmap User Manual -  Installation - macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos) for information how to remove the flag.

Alternatively, you can download the tool [Mac OS - CleanUp Quarantine Flags](https://forums.x-plane.org/index.php?/files/file/79828-mac-os-cleanup-quarantine-flags/) from x-plane.org, place this in the X-Plane base folder and run it to clean up the flags on all plugins at once.



----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### X-Plane and _Little Xpconnect_

#### I installed _Little Xpconnect_ but cannot find it in the X-Plane menus [**▲**](#top) [🔗](#xpconnect-menus) {#xpconnect-menus}

_Little Xpconnect_ does not create any menus items in X-Plane.
Installation was successful if you can find _Little Xpconnect_ in the plugin information of the X-Plane plugin manager.



----

#### A pop up window says my versions are not compatible Little Xpconnect needs to be updated [**▲**](#top) [🔗](#xpconnect-install) {#xpconnect-install}

Pop up window says my versions are not compatible and I need to upgrade _Little Xpconnect_ despite having the latest _Little Xpconnect_ installed.

There is probably an old version of _Little Xpconnect_ installed wrongly somewhere in your X-Plane plugins path.
Maybe it was installed accidentally in the plugins base path without the _Little Xpconnect_ folder structure.

Check if there is another folder with the _Little Xpconnect_ executable (`win.xpl`, `mac.xpl` or `lin.xpl` depending on operating system) around or if the file is stored in the plugins folder on the top level.

You can see the path of the (wrongly) loaded plugin in the X-Plane plugin manager.



----

#### Weather in X-Plane does not match what _Little Navmap_ displays [**▲**](#top) [🔗](#xplane-weather) {#xplane-weather}

The X-Plane weather interface is very limited.

_Little Navmap_ can only read the X-Plane weather file `METAR.rwx` and display only the nearest weather report for an airport in some cases.

There is no information available how and if X-Plane interpolates weather between stations. Therefore, the nearest weather and even the station weather might not match.



----

#### I get an error message about missing directories when loading X-Plane scenery [**▲**](#top) [🔗](#missing-xplane-scenery) {#missing-xplane-scenery}

You have `Read inactive Scenery Entries:` disabled in the scenery loading dialog and X-Plane's `scenery_packs.ini` contains stale entries. Fix this by restarting X-Plane which will remove the old entries.

You might as well enable `Read inactive Scenery Entries:` which will cause _Little Navmap_ to ignore `scenery_packs.ini` and read all. See [Little Navmap User Manual - Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html).



----

#### Airports missing in X-Plane scenery after reloading [**▲**](#top) [🔗](#airports-missing-xplane-scenery) {#airports-missing-xplane-scenery}

If you have `Read inactive Scenery Entries:` enabled: Restart X-Plane so that it can update the `scenery_packs.ini`.

See [Little Navmap User Manual - Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html).



----

#### I still see an older AIRAC cycle in the Scenery Libary menu for X-Plane [**▲**](#top) [🔗](#update-navdata-cycle) {#update-navdata-cycle}

You have to reload the scenery library in *Little Navmap* after updating the navdata in the simulator.
*Little Navmap* will show the correct cycle and navdata after reloading.



----

#### Little Xpconnect does not load in Ubuntu 18.04 or derived Linux distributions [**▲**](#top) [🔗](#xpconnect-linux) {#xpconnect-linux}

The problem is caused by a missing library. You can install this manually.

`libicu55` was supported until Ubuntu 16.04 Xenial, but it is compatible with 18.04 Bionic as well.

Add the following repository and install the package

```
sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"
sudo apt-get update
sudo apt-get install libicu55
```

Thanks to Wolfgang for the tip!




----

*[🔗]: Get permalink
*[▲]: Go to top
