---
layout: subpage
title:  "Little Navmap - Frequently asked Questions"
date:   2021-06-26 10:00:00 +0200
---

[Alex’ Projects](index.html) ► Little Navmap - Frequently asked Questions

# ![Little Navmap](assets/images/navroute.png) Little Navmap - Frequently asked Questions {#top}

See user manual for general known problems:\\
[► User Manual - Known Problems](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems).

See user manual for limitations and issues around Microsoft Flight Simulator 2020:\\
[► User Manual - Known Problems - Microsoft Flight Simulator 2020](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#problems-msfs).

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:\\
[► User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

Read below if you plan to use *Little Navmap* on a remote computer across a network to avoid common mistakes:\\
[► User Manual - Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/NETWORK.html).

**Use your browser search function (usually `Ctrl+F` for Windows and Linux or `⌘+F` for macOS) to find topics or keywords.**

<!-- egrep '####' littlenavmap-faq.md | sed -e 's/#### \(.\+\) {#\(.\+\)}/1. [\1](#\2)/g' -->

### Installation

1. [How to update the program](#update)
1. [Where are the log and configuration files?](#log-and-config-files)
1. [My anti-virus or anti-malware complains about _Little Navmap_](#anti-virus)
1. [Why can I see only the X-Plane connect option](#xplane-connection-only)
1. [I found an issue or have a proposal](#issue-proposal)
1. [The program crashes](#crash)
1. [The program does not start and Windows shows an error message](#no-start)
1. [I'd like to completely remove the program and all of its traces](#remove)

### General

1. [How can I create a flight plan](#flightplan)
1. [The map is jumping around randomly while flying](#aircraft-center)
1. [How to backup userdata or the logbook](#userdata-backup)
1. [Navaids or airways are red in the flight plan table](#red-navaids)
1. [Search result is empty](#search-empty)
1. [I get fuel flow indications that don't match _Little Navmap_'s values](#wrong-fuel-indication)
1. [Fuel planning and collection gives wrong fuel values](#wrong-fuel-planning)
1. [I cannot see my aircraft](#connect)

### Airports, scenery library and navigation data

1. [I cannot see any airports or navaids](#load-scenery)
1. [I added an airport and it does not show up in _Little Navmap_](#no-airport)
1. [Search for airport by country, state or city does not work](#airport-admin-search)
1. [Airport runway numbers don't match the runway numbers for procedures](#runway-mismatch)
1. [How to add procedures to airports?](#add-procedures)
1. [A MSFS add-on does not show up after reloading the scenery library in _Little Navmap_](#no-airport-msfs)
1. [How can I update the navdata to the latest cycle](#update-navdata)
1. [I updated the navdata but it does not show up](#update-navdata-noshow)
1. [I cannot see aprons and taxiways on the map](#no-aprons-taxi)
1. [I cannot choose a start position](#no-start-pos)
1. [Some procedures or procedure legs are marked red in the selection/search tree](#red-proc)
1. [Navaids from the X-Plane `user_nav.dat` and the `user_fix.dat` files do not show up in *Little Navmap*](#user-nav-fix-dat)

### User Interface and Windows

1. [How can I make the map window bigger](#map-window)
1. [How can I make the map window larger](#resize-map)
1. [I cannot resize a dock window](#dock-frozen)

### Map Display

1. [The map moves jerky or I see stutters in _Little Navmap_ while scrolling or zooming](#jerky-map)
1. [Lines disappearing](#lines-disappearing)
1. [I cannot remove a traffic pattern, a holding or measurement lines](#remove-pattern)
1. [Map is fuzzy and not updating](#map-no-update)
1. [The map has a grayish or dark background when zooming in](#map-gray)
1. [Why isn't the terrain mesh shown far North and South?](#terrain-mesh-limitations)
1. [Map background is black](#map-black)
1. [Can I run the program on another client computer across the network](#networking)
1. [Can I see the program when running FSX, P3D, MSFS or X-Plane fullscreen](#sim-fullscreen)
1. [The map window is not visible or shows only a gray surface](#map-hidden)

### Apple macOS

1. [Where is the options menu item on macOS](#prefs)
1. [I get a message complaining about an unidentified developer on macOS](#macos-unidentified-developer)
1. [Cannot run _Little Navmap_ or _Little Xpconnect_ on macOS Catalina](#catalina)

### X-Plane and _Little Xpconnect_

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

### Installation

#### How to update the program {#update}

You might either:

* Delete the previous version of _Little Navmap_ and install the new one in the same place.
* Install the new version in a new folder, e.g. by using the version as a directory name suffix.

In either case do not merge the two old and new directories. Remains of previous versions might cause trouble.

Always update all related programs like *Little Navconnect* and *Little Xpconnect*.

[**▲**](#top)

----

#### Where are the log and configuration files? {#log-and-config-files}

The files can be opened in the default text editor from menu -&gt; `Tools` -&gt; `Files and Directories` -&gt; `Open Log File` in *Little Navmap*.

For Windows these are:

Log file: `C:\Users\YOURUSERNAME\AppData\Local\Temp\abarthel-little_navmap.log`

Configuration file: `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel\little_navmap.ini`

Details can be found in the [Files](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FILES.html) chapter in the manual.

[**▲**](#top)

----

#### My anti-virus or anti-malware complains about _Little Navmap_ {#anti-virus}

This is usually a false positive.

I usually upload all Zip files to [VirusTotal](https://www.virustotal.com) before making them public. This ensures
that the files are checked by 50 or more anti-virus programs.

You can send your downloaded files to VirusTotal and you will get the report from my uploads immediately.

One false positive might occur and is no reason for concern.

[**▲**](#top)

----

#### Why can I see only the X-Plane connect option {#xplane-connection-only}

*Little Navmap* comes with a SimConnect library version 10.0.61259.0 (FSX SP2 / no Acceleration) and
does not require a separate installation of SimConnect.

The included SimConnect library is compatible with all FSX and P3D versions as well as Microsoft
Flight Simulator 2020.

The X-Plane connect option is always shown. You probably installed *Little Navmap* on a computer that has no FSX, P3D or MSFS installation.
See [User Manual - Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/NETWORK.html)
if you intend to run *Little Navmap* on a remote computer.

[**▲**](#top)

----

#### I found an issue or have a proposal {#issue-proposal}

All ideas and bugs are collected in the [Github Issues](https://github.com/albar965/littlenavmap/issues) for _Little Navmap_.

First check if your idea or finding is already covered there.

If not you can register at Github and write an issue. Alternatively, you can send me an email and I put this on my internal list
or create an issue for bigger tasks.

For errors send me a bug report in the
[Avsim Support Forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or by email.
See [How to report a Bug](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#how-to-report-a-bug).

[**▲**](#top)

----

#### The program crashes {#crash}

Rename the settings directory which also contains the scenery databases. In Windows these can be found in `c:\Users\YOURUSERNAME\Appdata\Roaming\ABarthel`.
E.g. rename `ABarthel` to `ABarthel.backup`.

If the problem persists send me a bug report in the
[Avsim Support Forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or by email.
See [How to report a Bug](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#how-to-report-a-bug).

[**▲**](#top)

----

#### The program does not start and Windows shows an error message {#no-start}

Windows shows an error message `cannot proceed because libmarblewidget-qt5.dll was not found` or similar
when trying to start *Little Navmap*.

This can have several reasons:

* Not all files were extracted and the mentioned DLL file is missing. Check if it present in the same folder as the `littlenamvmap.exe`.
* Anti-virus put the DLL into quarantine.
* You start the program using a shortcut (`.lnk` file) and the working directory is not the *Little Navmap* folder (the one with the `littlenamvmap.exe`). The working directory can be changed in the link properties in input field `Start In`.

[**▲**](#top)

----

#### I'd like to completely remove the program and all of its traces {#remove}

All files and folders created by _Little Navmap_ are described in the
chapter [Files](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FILES.html) in the manual.

_Little Navmap_ does not create any registry entries on Windows.

[**▲**](#top)

----






<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### General

#### How can I create a flight plan {#flightplan}

Zoom to an airport in the map and right click on it. Select `Set ... as Flight Plan Departure`. Look for another airport
on the map, right click and select `Set ... as Flight Plan Destination`.

That's it. You just built a simple flight plan.

Have a look at the [Tutorials](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/TUTORIALS.html) which are
also linked in the help menu. These help to get around in the program.

[**▲**](#top)

----

#### The map is jumping around randomly while flying {#aircraft-center}

The map does not jump randomly. The level of zoom changes to keep aircraft and the next flight plan waypoint centered.

The default behavior is to keep aircraft and next flight plan waypoint on the screen once one flight plan leg is active (magenta), i.e. you're flying. You can move around the map manually but LNM jumps back to aircraft and waypoint after a while. All this is configurable in options on page [Simulator Aircraft](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/OPTIONS.html#simulator-aircraft).

You can also revert to simple aircraft centering, for example. The default values might be confusing first but they are like that to reduce the need for manual zooming.

If you switch to normal zooming you can change the level of zoom with the mouse wheel other other methods.

**Please also read the note about the special gestures in the linked manual chapter above.**

[**▲**](#top)

----

#### How to backup userdata or the logbook {#userdata-backup}

One way to backup is export all into a CSV file. This covers all used fields.

You can also backup the database directly. The userpoints and logbook entries are stored in a SQLite database.
If interested you can look into this database using tools like this one: [SQLitebrowser](https://sqlitebrowser.org/)

The main database is `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel\little_navmap_db\little_navmap_userdata.sqlite` and
`little_navmap_logbook.sqlite` respectively in
Windows and `$HOME/.config/ABarthel/little_navmap_db/little_navmap_userdata.sqlite` in macOS or Linux.

You have to close _Little Navmap_ before creating a backup or replacing the databases.

Little Navmap also creates three rolling backups (`little_navmap_userdata.sqlite.1`, etc.) on startup which you can use
if you deleted something accidentally.

[**▲**](#top)

----

#### Navaids or airways are red in the flight plan table {#red-navaids}

This can happen if you load a flight plan which was made using older navdata.

It might contain waypoints that were removed later or radio navaids that were decommissioned. These cannot be found in later AIRAC cycles and therefore not in _Little Navmap_'s database.
These are shown in red and are treated like user defined flight plan waypoints in _Little Navmap_.

Airways are displayed in red if they do not exist or the minimum or maximum airway altitude restrictions are
violated by the selected cruise altitude when loading the flight plan.

See also [User Manual - Flight Plan - Error Display](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/FLIGHTPLAN.html#error-display).

[**▲**](#top)

----

#### Search result is empty {#search-empty}

Check the drop down menu for the change indicator `*` and the search fields for any remaining text if the distance
search does not give any or unexpected results. Use `Reset Search` in the context menu of
the result table or press `Ctrl+R` to clear all search criteria.

Note that using an ICAO code for searching will temporarily override all other options. This helps to do a quick search for an airport.

[**▲**](#top)

----


#### I get fuel flow indications that don't match _Little Navmap_'s values {#wrong-fuel-indication}

Fuel flow in the tab `Performance` of _Little Navmap_ does not match to what the aircraft is showing.

An aircraft add-on probably uses doctored values to workaround simulator limitations. This happens often
with complex study level add-ons and might affect fuel calculation, planning and especially collection.

[**▲**](#top)

----

#### Fuel planning and collection gives wrong fuel values {#wrong-fuel-planning}

This is related to wrong fuel indications of an add-on aircraft. See [above](#wrong-fuel-indication).

You can still create an aircraft performance profile manually and ignore the indications.

Set TAS and fuel flow for typical cruise level.

For fuel flow, TAS and vertical speed in the descent and climb phases simply get the values at low altitude, near cruise altitude and then enter the average in _Little Navmap_.
Tune the profile manually as needed.

It might also be beneficial to create different profiles for different cruise altitude ranges, especially for large complex aircraft.

[**▲**](#top)

----

#### I cannot see my aircraft {#connect}

*Little Navmap* does not connect automatically to a simulator per default. You have to go to the main menu -&gt; `Tools` -&gt; `Flight Simulator Connection`.

See [User Manual - Connecting to a Flight Simulator](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/CONNECT.html).

[**▲**](#top)

----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### Airports, scenery library and navigation data

#### I cannot see any airports or navaids {#load-scenery}

Load the scenery library from the simulator. See [Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html)
in the manual.

[**▲**](#top)

----

#### I added an airport and it does not show up in _Little Navmap_ {#no-airport}

You have to reload the scenery library. See [Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html).
in the manual.

See topic below for limitations with MSFS.

[**▲**](#top)

----

#### Search for airport by country, state or city does not work {#airport-admin-search}

Data sources limit this functionality and it depends on the selected navdata source in menu `Scenery Library`:

* Navigraph only: This has only limited administrative airport information. Only airport name (`Frankfurt am Main`),
  ICAO code (`EDDF`), ICAO region (`ED`) and area code (`EUR`) are available.
* All other modes: The completeness of administrative information depends on the airport. Administrative data (State, City, etc.)
  is often missing for X-Plane airports. Country information is missing in MSFS.

[**▲**](#top)

----

#### Airport runway numbers don't match the runway numbers for procedures {#runway-mismatch}

This depends on the scenery mode as set in the menu `Scenery Library` -&gt; `Navigraph`. The default is to use the flight
simulator scenery for runways and ILS and the Navigraph database for all airspaces, airways and all other navaids.

Runways are named by the magnetic direction which changes over the years. This results in airports renaming their runways from time to time.
Therefore, mismatches between old airports, be it stock or add-on, can happen.

It's neither a _Little Navmap_ nor Navigraph issue. It is an unavoidable
real world issue where simulator scenery or airports are not updated as
fast as the real world airports.

See the [Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/NAVDATA.html) chapter in the manual for more information.

For **FSX or Perpar3D** you can use the [Airport Design Editor](http://www.scruffyduck.org/airport-design-editor/4584106799) to change the runway numbers.

Use [WED](https://developer.x-plane.com/tools/worldeditor/) to change an airport for X-Plane.

[**▲**](#top)

----

#### How to add procedures to airports? {#add-procedures}

This is a very complex task.

For **FSX or Perpar3D** you can use the [Airport Design Editor](http://www.scruffyduck.org/airport-design-editor/4584106799),
add procedures to the airport and then switch off Navigraph in the scenery library menu. LNM will
read the procedures from your add-on airport and you can use them like the others.

**X-Plane**: You can try to create a CIFP file but this is very complex and not recommended as stated on the page [here](https://developer.x-plane.com/?article=navdata-in-x-plane-11#How_do_I_make_my_own_approach_No_hand_editing_please).

See [Navdata in X-Plane 11](https://developer.x-plane.com/?article=navdata-in-x-plane-11) and [XP-CIFP1101-Spec.pdf](http://developer.x-plane.com/wp-content/uploads/2016/10/XP-CIFP1101-Spec.pdf).

[**▲**](#top)

----

#### A MSFS add-on does not show up after reloading the scenery library in _Little Navmap_ {#no-airport-msfs}

Encrypted add-on airports in MSFS cannot be read by *Little Navmap*.
The add-on is locked down with a DRM scheme if you find a file `BGL.fsarchive` in the add-on folders

Note that *Little Navmap* reads only add-on scenery which has `"content_type": "CORE"` or `"content_type": "SCENERY"` set in the file `manifest.json` of the add-on.
Some add-on developers still use wrong values like `"UNKNOWN"` which will cause *Little Navmap* to ignore the scenery.
You can change the `manifest.json` manually in a text editor and replace the wrong `"UNKNOWN"` with `"SCENERY"`.

See also [User Manual - Know Issues](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPENDIX.html#microsoft-flight-simulator-2020).

[**▲**](#top)

----

#### How can I update the navdata to the latest cycle {#update-navdata}

You have to get a [Navigraph](https://www.navigraph.com/) subscription. This allows you to update the _Little Navmap_ navdata to the latest.

I recommend to keep *Little Navmap*, the simulator and all tools on the same AIRAC cycle to avoid issues when loading flight plans.

[**▲**](#top)

----

#### I updated the navdata but it does not show up {#update-navdata-noshow}

You should use the automatic scan in the _FMS Data Manager_ which usually finds the correct path.

See [Little Navmap - Install Navigraph Updates](/littlenavmap_navigraph.html) to see
how to set the path correctly if the automatic scan did not find the path.

[**▲**](#top)

----

#### I cannot see aprons and taxiways on the map {#no-aprons-taxi}

There are only white bars with a black outline showing the runways.

You probably selected `Use Navigraph for all Features` in the `Scenery Library` menu. `Use Navigraph for Navaids and Procedures`
is the recommended mode which will show detailed stock or add-on airports mixed with Navigraph navaids.

See [Navigation Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/NAVDATA.html) in the manual.

[**▲**](#top)

----

#### I cannot choose a start position {#no-start-pos}

You might use the wrong scenery mode `Use Navigraph for all Features`.
See [Navigation Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/NAVDATA.html) and  [Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata) for more information about this.

Select either `Use Navigraph for Navaids and Procedures` or `Do not use Navigraph Database` depending on information in above links (Navigraph MSFS update installed or not).

[**▲**](#top)

----

#### Some procedures or procedure legs are marked red in the selection/search tree {#red-proc}

This can happen if navdata read from the simulator has errors or is incomplete. Note that this issue appears only when
using `Do not use Navigraph Database` in the menu `Scenery Library`.

The procedures cannot be used at all or only after confirming a warning dialog.

A currently known problem is missing recommended fix information for constant radius arc procedure legs in MSFS navdata.

See also [Search Procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SEARCHPROCS.html) and
[Procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/APPROACHES.html) for more information.

[**▲**](#top)

----

#### Navaids from the X-Plane `user_nav.dat` and the `user_fix.dat` files do not show up in *Little Navmap* {#user-nav-fix-dat}

LNM reads both the the `user_nav.dat` and the `user_fix.dat` files. The problem is that the navaids
are hidden by Navigraph data per default. Therefore, you have to switch to `Do not use Navigraph
database` in the menu `Scenery Library` to see the user navaids.

You also have to reload the LNM scenery library after adding or changing the user files.

The user navaids can be used in the X-Plane stock FMS and GPS. But keep in mind that the user navaids
do not show up on the X-Plane internal map.

[**▲**](#top)

----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### User Interface and Windows

#### How can I make the map window bigger {#map-window}

there are several options:

- Close the search window and/or close search options in airport search (three lines or "hamburger" button). These take a lot of space.
- Undock the search window, i.e. remove it from them main window and/or close it. Normally not needed while flying anyway. I have it only open for flight planning.
- Undock the map and move it to another screen if available.
- Take the search window and drop it on the progress window. This will create a window with search and progress tabs at the bottom.

Here are some tips for undocking (Ctrl-key, etc.) and moving around in the interface:
[User Interface - Dock Windows](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/DOCKWINDOWS.html)

[**▲**](#top)

----

#### How can I make the map window larger {#resize-map}

The issue is similar to the one above.

It's usually the search window which keeps the map from expanding.
Disable all unneeded search options in the "hamburger" drop down menu on the top right in the airport search. Do the same for navaid search.

Additionally undock the search window and let it float. Since the search is usually only needed for
flight preparation you can close the search dock window when flying (`Alt-1`). You can always open it quickly by hitting `F4`.

[**▲**](#top)

----

#### I cannot resize a dock window {#dock-frozen}

Freezing dock windows. Try one of the following:

1. Main menu -> `Window` -> `Reset Window layout`
2. Double click on a window title to undock it, i.e. bring it into floating state. Double click again to put it back. Resizing should be allowed now.

Another reason can be the search window taking up too much space:

1. Switch around in the search tabs or undock and dock one back by double clicking into the title bar.
1. Undock the search window and let it float. This dock window is very expansive and squeezes other docks into the corners even when search options are disabled.

[**▲**](#top)

----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### Map Display

#### The map moves jerky or I see stutters in _Little Navmap_ while scrolling or zooming {#jerky-map}

You might have selected too many details. Go to main menu -&gt; `View` -&gt; `Details` -&gt; `Default Detail`.

[**▲**](#top)

----

#### Lines disappearing {#lines-disappearing}

Parts of the flight plan disappear.

This is a known error and can happen at certain zoom distances with long flight plan legs.

[**▲**](#top)

----

#### I cannot remove a traffic pattern, a holding or measurement lines {#remove-pattern}

You have to right-click on the hotspot.

See [User Manual - Mouse Click Hotspots](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MAPDISPLAY.html#mouse-click-hotspots).

[**▲**](#top)

----

#### Map is fuzzy and not updating {#map-no-update}

This can have several reasons:
1. The server for the online map is down. These are free services where I have no influence on availability.
   Wait a few hours and they are usually back.
2. You are using offline mode. This shows a red `Offline` warning message in _Little Navmap_'s status bar. Disable offline mode in the file menu.
   See [Work Offline](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MENUS.html#work-offline).
3. Your internet connection is broken or your firewall forbids network access for _Little Navmap_.

[**▲**](#top)

----

#### The map has a grayish or dark background when zooming in {#map-gray}

You use an online map and have hillshading enabled where it has no coverage. Disable hillshading
([Show  Hillshading](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MENUS.html#show-hillshading))
or use another theme.

[**▲**](#top)

----

#### Why isn't the terrain mesh shown far North and South? {#terrain-mesh-limitations}

I installed the Global mesh for LNM, but still nothing far North and South?

The GLOBAL elevation data is only for the elevation profile and altitude display in the status bar. Hillshading comes
from an open server and that has known limitations and bugs. Coverage is limited. You can use
another map theme which includes worldwide hillshading like the `StamenTerrain` or `OpenTopoMap`.

[**▲**](#top)

----

#### Map background is black {#map-black}

Something went wrong when installing _Little Navmap_. Most likely the directory `data` is missing.

[**▲**](#top)

----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### Apple macOS

#### Can I run the program on another client computer across the network {#networking}

Yes. You can even mix different systems like using macOS for _Little Navmap_ and Windows for flying.
The client computer does not need a SimConnect or simulator installation at all.

See [User Manual - Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/NETWORK.html)
in the manual.

[**▲**](#top)

----

#### Can I see the program when running FSX, P3D, MSFS or X-Plane fullscreen {#sim-fullscreen}

You can not. But you can:

1. Use an old second monitor for the map before throwing it away.
2. Take an old and slow notebook and use it in networked mode. _Little Navmap_ is happy with 2 GB of ram and there
   are options to speed up map display. This notebook can run Linux or macOS. Have a look at the manual here:
   [How to run a network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INTRO.html#network-setup)
3. Run the simulator in seamless window mode. Then you can `Alt+Tab` between applications.

[**▲**](#top)

----

#### The map window is not visible or shows only a gray surface {#map-hidden}

This can happen for various reasons (like a crash) or if you change the option [Allow to undock the map window](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/OPTIONS.html#allow-to-undock-the-map-window) in the options dialog.

Use menu `Window` -> [Reset Window Layout](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/MENUS.html#reset-layout-menu) in the main menu to clean up the window layout.

[**▲**](#top)

----

#### Where is the options menu item on macOS {#prefs}

Options can be accessed in the application menu `Little Navmap` -&gt; `Preferences`.

[**▲**](#top)

----

#### I get a message complaining about an unidentified developer on macOS {#macos-unidentified-developer}

First move the extracted archive out of the folder `Downloads`.
Then right click or `Ctrl+Click` on the application and select `Open`. Confirm the dialog to run the program.

You probably have to enter an administrator name and password once. The program can be started normally after this procedure.

See [User Manual - Installation - macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INSTALLATION.html#macos).

[**▲**](#top)

----

#### Cannot run _Little Navmap_ or _Little Xpconnect_ on macOS Catalina {#catalina}

A new security feature in macOS forbids the execution of unsigned libraries or apps.

See [User Manual - Installation - macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INSTALLATION.html#macos).

[**▲**](#top)

----

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

### X-Plane and _Little Xpconnect_

#### I installed _Little Xpconnect_ but cannot find it in the X-Plane menus {#xpconnect-menus}

_Little Xpconnect_ does not create any menus items in X-Plane.
Installation was successful if you can find _Little Xpconnect_ in the plugin information of the X-Plane plugin manager.

[**▲**](#top)

----

#### A pop up window says my versions are not compatible Little Xpconnect needs to be updated {#xpconnect-install}

Pop up window says my versions are not compatible and I need to upgrade _Little Xpconnect_ despite having the latest _Little Xpconnect_ installed.

There is probably an old version of _Little Xpconnect_ installed wrongly somewhere in your X-Plane plugins path.
Maybe it was installed accidentally in the plugins base path without the _Little Xpconnect_ folder structure.

Check if there is a another folder with the _Little Xpconnect_ executable (`win.xpl`, `mac.xpl` or `lin.xpl` depending on operating system) around or if the file is stored in the plugins folder on the top level.

You can see the path of the (wrongly) loaded plugin in the X-Plane plugin manager.

[**▲**](#top)

----

#### Weather in X-Plane does not match what _Little Navmap_ displays {#xplane-weather}

The X-Plane weather interface is very limited.

_Little Navmap_ can only read the X-Plane weather file `METAR.rwx` and display only the nearest weather report for an airport in some cases.

There is no information available how and if X-Plane interpolates weather between stations. Therefore, nearest weather and even station weather might not match.

[**▲**](#top)

----

#### I get an error message about missing directories when loading X-Plane scenery {#missing-xplane-scenery}

You have `Read inactive Scenery Entries:` disabled in the scenery loading dialog and X-Plane's `scenery_packs.ini` contains
stale entries. Fix this by restarting X-Plane which will remove the old entries.

You might as well enable `Read inactive Scenery Entries:` which will cause _Little Navmap_ to ignore `scenery_packs.ini`
and read all. See [Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html).

[**▲**](#top)

----

#### Airports missing in X-Plane scenery after reloading {#airports-missing-xplane-scenery}

If you have `Read inactive Scenery Entries:` enabled: Restart X-Plane so that it can update the `scenery_packs.ini`.

See [Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/SCENERY.html).

[**▲**](#top)

----

#### I still see an older AIRAC cycle in the Scenery Libary menu for X-Plane {#update-navdata-cycle}

You have to reload the scenery library in *Little Navmap* after updating the navdata in the simulator.
*Little Navmap* will show the correct cycle and navdata after reloading.

[**▲**](#top)

----

#### Little Xpconnect does not load in Ubuntu 18.04 or derived Linux distributions {#xpconnect-linux}

The problem is caused by a missing library. You can install this manually.

`libicu55` was supported until Ubuntu 16.04 Xenial, but it is compatible with 18.04 Bionic as well.

Add the following repository and install the package

```
sudo add-apt-repository "deb http://security.ubuntu.com/ubuntu xenial-security main"
sudo apt-get update
sudo apt-get install libicu55
```

Thanks to Wolfgang for the tip!


[**▲**](#top)

----
