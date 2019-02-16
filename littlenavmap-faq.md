---
layout: subpage
title:  "Little Navmap - Frequently asked Questions"
date:   2019-02-16 10:00:00 +0100
---

[Alex’ Projects](index.html) ► Little Navmap - Frequently asked Questions

# ![Little Navmap](assets/images/navroute.png) Little Navmap - Frequently asked Questions

**Die deutsche Übersetzung ist noch in Arbeit. German translation is work in progress.**
<!-- [**► Diese Seite auf Deutsch**](/littlenavmap-faq_de.html) -->

**You might also have a look at the [appendix in the manual](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/APPENDIX.html).**

**Use your browser search function (usually `Ctrl+F`) to find topics or keywords.**

<!-- egrep '{###}' littlenavmap-faq.md |sed -e 's/### \(.\+\) {#\(.\+\)}/1. [\1](#\2)/g' -->

## Contents {#contents}

1. [How to update the program](#update)
1. [Where are the log and configuration files?](#log-and-config-files)
1. [How can I create a flight plan](#flightplan)
1. [How to backup userdata](#userdata-backup)
1. [I cannot resize a dock window](#dock-frozen)
1. [How can I make the map window larger](#resize-map)
1. [Navaids or airways are red in the flight plan table](#red-navaids)
1. [I added an airport and it does not show up in _Little Navmap_](#no-airport)
1. [X-Plane: I installed _Little Xpconnect_ but cannot find it in the X-Plane menus](#xpconnect-menus)
1. [How can I update the navdata to the latest cycle](#update-navdata)
1. [I updated the navdata but it does not show up](#update-navdata-noshow)
1. [I cannot see aprons and taxiways on the map](#no-aprons-taxi)
1. [Why can I see only the X-Plane connect option](#xplane-connection-only)
1. [Cannot connect to FSX or P3D](#simconnect-issues)
1. [The program crashes](#crash)
1. [Lines disappearing](#lines-disappearing)
1. [Can I run the program on another client computer across the network](#networking)
1. [Can I see the program when running FSX, P3D or X-Plane fullscreen ](#sim-fullscreen)
1. [Cannot remove the traffic pattern or measurement lines](#remove-pattern)
1. [Map is fuzzy and not updating](#map-no-update)
1. [The map has a grayish backgroud](#map-gray)
1. [Why isn't the terrain mesh shown far North and South?](#terrain-mesh-limitations)
1. [Search result empty](#search-empty)
1. [Weather in X-Plane does not match what _Little Navmap_ displays](#xplane-weather)
1. [I get a message complaining about an unidentified developer on macOS](#macos-unidentified-developer)
1. [I see waiting for data forever in the statusbar](#waiting-for-data)
1. [Map background is black](#map-black)
1. [I cannot see any airports or navaids](#load-scenery)
1. [I get an error message about missing directories when loading X-Plane scenery](#missing-xplane-scenery)
1. [Airports missing in X-Plane scenery after reloading](#airports-missing-xplane-scenery)
1. [I found an issue or have a proposal](#issue-proposal)
1. [I get fuel flow indications that don't match _Little Navmap_'s values](#wrong-fuel-indication)
1. [Fuel planning and collection gives wrong fuel values](#wrong-fuel-planning)
1. [My anti-virus or anti-malware complains about _Little Navmap_](#anti-virus)
1. [How to add procedures to airports?](#add-procedures)
1. [Airport runway numbers don't match the runway numbers for procedures](#runway-mismatch)
1. [Search for airport by country, state or city is unreliable in X-Plane](#airport-admin-search)
1. [I'd like to completely remove the program and all of its traces](#remove)

### How to update the program {#update}

You might either:

* Delete the previous version of _Little Navmap_ and install the new one in the same place.
* Install the new version in a new folder, e.g. by using the version as a directory name suffix.

In either case do not merge the two old and new directories. Remains of previous versions might cause trouble.

[**▲**](#contents)

### Where are the log and configuration files? {#log-and-config-files}

The files are linked in the about dialog of _Little Navmap_ (`Help` -&gt `About Little Navmap`). For Windows these are:

Log file: `C:\Users\YOURUSERNAME\AppData\Local\Temp\abarthel-little_navmap.log`

Configuration file: `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel\little_navmap.ini`

Details can be found in the [Files](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/FILES.html) chapter in the manual.

[**▲**](#contents)

### How can I create a flight plan {#flightplan}

Zoom to an airport in the map and right click on it. Select `Set ... as Flight Plan Departure`. Look for another airport
on the map, right click and select `Set ... as Flight Plan Destination`.

That's it. You just built a simple flight plan.

Have a look at the [Tutorials](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/TUTORIALS.html) which are
also linked in the help menu. These help to get around in the program.

[**▲**](#contents)

### How to backup userdata {#userdata-backup}

One way to backup is export all into a CSV file. This covers all used fields.

You can also backup the database directly. The userpoints are stored in a SQLite database.
If interested you can look into this database using tools like this one: [SQLitebrowser](https://sqlitebrowser.org/)

The main database is `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel\little_navmap_db\little_navmap_userdata.sqlite` in
Windows and `$HOME/.config/ABarthel/little_navmap_db/little_navmap_userdata.sqlite` in macOS or Linux.

You have to close _Little Navmap_ before creating a backup or replacing the databases.

Little Navmap also creates three rolling backups (`little_navmap_userdata.sqlite.1`, etc.) on startup which you can use
if you deleted something accidentally.

[**▲**](#contents)

### I cannot resize a dock window {#dock-frozen}

Freezing dock windows. Try one of the following:

1. Main menu -> `Window` -> `Reset Window layout`
2. Double click on a window title to undock it, i.e. bring it into floating state. Double click again to put it back. Resizing should be allowed now.

Another reason can be the search window taking up too much space:

1. Switch around in the search tabs or undock and dock one back by double clicking into the title bar.
1. Undock the search window and let it float. This dock window is very expansive and squeezes other docks into the corners even when search options are disabled.

[**▲**](#contents)

### How can I make the map window larger {#resize-map}

The issue is similar to the one above.

It's usually the search window which keeps the map from expanding.
Disable all unneeded search options in the "hamburger" drop down menu on the top right in the airport search. Do the same for navaid search.

Additionally undock the search window and let it float. Since the search is usuall only needed for
flight preparation you can close the search dock window when flying (`Alt-1`). You can always open it quickly by hitting `F4`.

[**▲**](#contents)

### Navaids or airways are red in the flight plan table {#red-navaids}

This can happen if you load a flight plan which was made using older navdata.

It might contain waypoints that were removed later or radio navaids that were decommissioned. These cannot be found in later AIRAC cycles and therefore not in _Little Navmap_'s database.
These are shown in red and are treated like user defined flight plan waypoints in _Little Navmap_.

Airways are displayed in red if they do not exist or the minimum or maximum airway altitude restrictions are
violated by the selected cruise altitude when loading the flight plan.

[**▲**](#contents)

### I added an airport and it does not show up in _Little Navmap_ {#no-airport}

You have to reload the scenery library. See [Load Scenery Library Dialog](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/SCENERY.html).
in the manual.

[**▲**](#contents)

### X-Plane: I installed _Little Xpconnect_ but cannot find it in the X-Plane menus {#xpconnect-menus}

_Little Xpconnect_ does not create any menus items in X-Plane.
Installation was successful if you can find _Little Xpconnect_ in the plugin information of the X-Plane plugin manager.

[**▲**](#contents)

### How can I update the navdata to the latest cycle {#update-navdata}

You have to get a [Navigraph](https://www.navigraph.com/) subscription. This allows you to update the _Little Navmap_ navdata to the latest.

[**▲**](#contents)

### I updated the navdata but it does not show up {#update-navdata-noshow}

You should use the automatic scan in the _FMS Data Manager_ which usually finds the correct path.

See [Little Navmap - Install Navigraph Updates](https://albar965.github.io/littlenavmap_navigraph.html) to see
how to set the path correctly if the automatic scan did not find the path.

[**▲**](#contents)

### I cannot see aprons and taxiways on the map {#no-aprons-taxi}

There are only white bars with a black outline showing the runways.
You probably selected `Use Navigraph for all Features` in the `Scenery Library` menu. `Use Navigraph for Navaids and Procedures`
is the recommended mode which will show detailed stock or add-on airports mixed with Navigraph navaids.

See [Navigation Databases](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/NAVDATA.html) in the manual.

[**▲**](#contents)

### Why can I see only the X-Plane connect option {#xplane-connection-only}

_Little Navmap_ did not recognize SimConnect. X-Plane does not use this. Therefore, this option is always present.

_Little Navmap_ is build based on the FSX SP2 SimConnect version 61259. You have to install this version.
See
[Other Simulators than FSX SP2](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/INSTALLATION.html#other-simulators-than-fsx-sp2)
in the manual.

Note that the installation is skipped if this SimConnect version is already installed. Also, you cannot uninstall SimConnect which is no issue since it does not take much space and does not harm otherwise.

[**▲**](#contents)

### Cannot connect to FSX or P3D {#simconnect-issues}

First See
[Other Simulators than FSX SP2](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/INSTALLATION.html#other-simulators-than-fsx-sp2)
in the manual.

If that does not help: Check if there is a file `C:\users\YOURUSERNAME\Documents\SimConnect.cfg`. This is sometimes used
to create remote connections with SimConnect. Rename this file. This might fix the connection problems.

[**▲**](#contents)

### The program crashes {#crash}

Rename the settings directory which also contains the scenery databases. In Windows 7, 8 or 10 these can be found in `c:\Users\YOURUSERNAME\Appdata\Roaming\ABarthel`.
E.g. rename `ABarthel` to `ABarthel.backup`.

Install the Visual C++ Redistributable Packages as outlined here in the manual:
[Installation - Windows](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/INSTALLATION.html#windows).

These redistributable packages do no harm, do not take much space and are usually needed by other programs too.
In some cases it also helped to install the 2008 and 2017 redistributables.

If the problem persists send me a bug report in the
[Avsim Support Forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or by email.
See [How to report a Bug](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/APPENDIX.html#how-to-report-a-bug).

Direct links to all redistributable packages so far:
[2005](https://www.microsoft.com/en-us/download/details.aspx?id=18471),
[2008](https://www.microsoft.com/en-us/download/details.aspx?id=2092),
[2010](https://www.microsoft.com/en-us/download/details.aspx?id=13523),
[2012](https://www.microsoft.com/en-us/download/details.aspx?id=30679),
[2013](https://www.microsoft.com/en-us/download/details.aspx?id=40784) and
[2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145).

[**▲**](#contents)

### Lines disappearing {#lines-disappearing}

Parts of the flight plan disappear.
This is a known error and can happen at certain zoom distances with long flight plan legs.

[**▲**](#contents)

### Can I run the program on another client computer across the network {#networking}

Yes. You can even mix different systems like using macOS for _Little Navmap_ and Windows for flying.
The client computer does not need a SimConnect or simulator installation at all.

See [How to run a network Setup](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/INTRO.html#network-setup)
in the manual.

[**▲**](#contents)

### Can I see the program when running FSX, P3D or X-Plane fullscreen  {#sim-fullscreen}

You can not. But you can:

1. Use an old second monitor for the map before throwing it away.
2. Take an old and slow notebook and use it in networked mode. _Little Navmap_ is happy with 2 GB of ram and there
   are options to speed up map display. This notebook can run Linux or macOS. Have a look at the manual here:
   [How to run a network Setup](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/INTRO.html#network-setup)
3. Run the simulator in seamless window mode. Then you can `Alt+Tab` between applications.

[**▲**](#contents)

### Cannot remove the traffic pattern or measurement lines {#remove-pattern}

You have to right-click on the hotspot. That is:
* The small disk at the runway threshold for the traffic pattern.
* The center spot of all distance or range circles.
* The small cross at the end of all measurement lines.

The cursor shape changes to a hand if you hover the mouse over such a spot.
Then you can use one of the [Mouse Clicks](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/LEGEND.html#mouse-clicks)
or the context menu to do something with the feature.

[**▲**](#contents)

### Map is fuzzy and not updating {#map-no-update}

This can have several reasons:
1. The server for the online map is down. These are free services where I have no influence on availability.
   Wait a few hours and they are usually back.
2. You are using offline mode. This shows a red `Offline` warning message in _Little Navmap_'s status bar. Disable offline mode in the file menu.
   See [Work Offline](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/MENUS.html#work-offline).
3. Your internet connection is broken or your firewall forbids network access for _Little Navmap_.
4. _Little Navmap_ cannot establish an encrypted connection to the map server. See [Installation - Windows](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/INSTALLATION.html#windows)
in the manual for more information how to fix this.

[**▲**](#contents)

### The map has a grayish backgroud {#map-gray}

You use an online map and have  hillshading enabled where it has no coverage. Disable hillshading
([Show  Hillshading](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/MENUS.html#show-hillshading))
or use another theme.

[**▲**](#contents)

### Why isn't the terrain mesh shown far North and South? {#terrain-mesh-limitations}

I installed the Global mesh for LNM, but still nothing far North and South?

The GLOBAL elevation data is only for the elevation profile and altitude display in the status bar. Hillshading comes
from an open server and that has known limitations and bugs. Coverage is limited. You can use
another map theme which includes worldwide hillshading like the `StamenTerrain` or `OpenTopoMap`.

[**▲**](#contents)

### Search result empty {#search-empty}

Check the drop down menu for the change indicator `*` and the search fields for any remaining text if the distance
search does not give any or unexpected results. Use `Reset Search` in the context menu of
the result table or press `Ctrl+R` to clear all search criteria.

Note that using an ICAO code for searching will temporarily override all other options. This helps to do a quick search for an airport.

[**▲**](#contents)

### Weather in X-Plane does not match what _Little Navmap_ displays {#xplane-weather}

The X-Plane weather interface is very limited.

_Little Navmap_ can only read the X-Plane weather file `METAR.rwx` and display only the nearest weather report for an airport in some cases.

There is no information available how and if X-Plane interpolates weather between stations. Therefore, nearest weather and even station weather might not match.
Additionally, X-Plane seems to have problems reading certain METARs, completely bails out for the corresponding station
and falls back to ISA standard conditions.

[**▲**](#contents)

### I get a message complaining about an unidentified developer on macOS {#macos-unidentified-developer}

Right click or `Ctrl+Click` on the application and select `Open`.
You probably have to enter an administrator name and password once. The program can be started normally after this procedure.

[**▲**](#contents)

### I see waiting for data forever in the statusbar {#waiting-for-data}

Three reasons:

1. You zoomed in too deep where the online map does not support more details.
2. The online map server is not available ([Map is fuzzy and not updating](#map-no-update)).
3. You have hillshading enabled where it is not available ([The map has a grayish backgroud](#map-gray)).

[**▲**](#contents)

### Map background is black {#map-black}

Something went wrong when installing _Little Navmap_. Most likely the directory `data` is missing.

[**▲**](#contents)

### I cannot see any airports or navaids {#load-scenery}

Load the scenery library from the simulator. See [Load Scenery Library Dialog](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/SCENERY.html)
in the manual.

[**▲**](#contents)

### I get an error message about missing directories when loading X-Plane scenery {#missing-xplane-scenery}

You have `Read inactive Scenery Entries:` disabled in the scenery loading dialog and X-Plane's `scenery_packs.ini` contains
stale entries. Fix this by restarting X-Plane which will remove the old entries.

You might as well enable `Read inactive Scenery Entries:` which will cause _Little Navmap_ to ignore `scenery_packs.ini`
and read all. See [Load Scenery Library Dialog](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/SCENERY.html).

[**▲**](#contents)

### Airports missing in X-Plane scenery after reloading {#airports-missing-xplane-scenery}

If you have `Read inactive Scenery Entries:` enabled: Restart X-Plane so that it can update the `scenery_packs.ini`.

See [Load Scenery Library Dialog](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/SCENERY.html).

[**▲**](#contents)

### I found an issue or have a proposal {#issue-proposal}

All ideas and bugs are collected in the [Github Issues](https://github.com/albar965/littlenavmap/issues) for _Little Navmap_.

First check if your idea or finding is already covered there.

If not you can register at Github and write an issue. Alternatively, you can send me an email and I put this on my internal list
or create an issue for bigger tasks.

For errors send me a bug report in the
[Avsim Support Forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or by email.
See [How to report a Bug](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/APPENDIX.html#how-to-report-a-bug).

[**▲**](#contents)

### I get fuel flow indications that don't match _Little Navmap_'s values {#wrong-fuel-indication}

Fuel flow in the tab `Performance` of _Little Navmap_ does not match to what the aircraft is showing.

An aircraft add-on probably uses doctored values to workaround simulator limitations. This happens often
with complex study level add-ons and might affect fuel calculation, planning and especially collection.

See [next issue below](#wrong-fuel-planning).

[**▲**](#contents)

### Fuel planning and collection gives wrong fuel values {#wrong-fuel-planning}

This is related to wrong fuel indications of an add-on aircraft. See [above](#wrong-fuel-indication).

You can still create an aircraft performance profile manually and ignore the indications.

Set TAS and fuel flow for typical cruise level.

For fuel flow, TAS and vertical speed in the descent and climb phases simply get the values at low altitude, near cruise altitude and then enter the average in _Little Navmap_.
Tune the profile manually as needed.

It might also be beneficial to create different profiles for different cruise altitude ranges, especially for large complex aircraft.

[**▲**](#contents)


### My anti-virus or anti-malware complains about _Little Navmap_ {#anti-virus}

This is usually a false positive.

I usually upload all Zip files to [VirusTotal](https://www.virustotal.com) before making them public. This ensures
that the files are checked by 50 or more anti-virus programs.

You can send your downloaded files to VirusTotal and you will get the report from my uploads immediately.

The results of `LittleNavmap-win-2.2.2.zip` [can be seen here](https://www.virustotal.com/#/file/724b1fba67da125cd45b3e01f370b340b485ebaf4e24c377f1e4cc4b902aa22a/detection).

One false positive might occur and is no reason for concern.

[**▲**](#contents)

### How to add procedures to airports? {#add-procedures}

For **FSX or Perpar3D** you can use the [Airport Design Editor](http://www.scruffyduck.org/airport-design-editor/4584106799),
add procedures to the airport and then switch off Navigraph in the scenery library menu. LNM will
read the procedures from your add-on airport and you can use them like the others.

**X-Plane**: You can try to create a CIFP file but this is very complex and not recommended as stated on the page [here](https://developer.x-plane.com/?article=navdata-in-x-plane-11#How_do_I_make_my_own_approach_No_hand_editing_please).

See [Navdata in X-Plane 11](https://developer.x-plane.com/?article=navdata-in-x-plane-11) and [XP-CIFP1101-Spec.pdf](http://developer.x-plane.com/wp-content/uploads/2016/10/XP-CIFP1101-Spec.pdf).

[**▲**](#contents)


### Airport runway numbers don't match the runway numbers for procedures {#runway-mismatch}

This depends on the scenery mode as set in the menu `Scenery Library` -&gt; `Navigraph`. The default is to use the flight
simulator scenery for runways and ILS and the Navigraph database for all airspaces, airways and all other navaids.

Runways are named by the magnetic direction which changes over the years. This results in airports renaming their runways from time to time.
Therefore, mismatches between old airports, be it stock or add-on, can happen.

It's neither a _Little Navmap_ nor Navigraph issue. I's an unavoidable
real world issue where simulator scenery or airports are not updated as
fast as the real world airports.

See the [Navdata](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/NAVDATA.html) chapter in the manual for more information.

For **FSX or Perpar3D** you can use the [Airport Design Editor](http://www.scruffyduck.org/airport-design-editor/4584106799) to change the runway numbers.

Use [WED](https://developer.x-plane.com/tools/worldeditor/) to change an airport for X-Plane.

[**▲**](#contents)

### Search for airport by country, state or city is unreliable in X-Plane {#airport-admin-search}

Data sources limit this functionality and it depends on the selected navdata source in menu `Scenery Library`:

* Navigraph only: This has only limited administrative airport information. Only airport name (`Frankfurt am Main`),
  ICAO code (`EDDF`), ICAO region (`ED`) and area code (`EUR`) are available.
* All other modes: The completeness of administrative information depends on the airport. Administrative data (State, City, etc.)
  is often missing for X-Plane airports.

You can use [WED](https://developer.x-plane.com/tools/worldeditor/) to change the administrative information of an airport.

For add-on airports you can also use a text editor to change this. Below an example with misspelled city name:

```
I
1100 Generated by WorldEditor 1.7.0a19

1    354 1 0 EDDF Frankfurt am Main
1302 city Frankfurt-am-Main
1302 country Germany
1302 datum_lat 50.033305556
1302 datum_lon 8.570455556
1302 faa_code
1302 iata_code FRA
1302 icao_code EDDF
1302 region_code ED
1302 state Hesse
...
```

[**▲**](#contents)

### I'd like to completely remove the program and all of its traces {#remove}

All files and folders created by _Little Navmap_ are described in the
chapter [Files](https://albar965.gitbooks.io/little-navmap-user-manual/content/en/FILES.html) in the manual.

_Little Navmap_ does not create any registry entries on Windows.

[**▲**](#contents)



