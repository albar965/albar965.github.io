---
layout: subpage
title:  "Little Navmap - Frequently asked Questions"
date:   2024-03-11 14:00 +0100
release-version: 3.0.4
---

<!-- VERSION_NUMBER_TODO -->

[Alex’ Projects](index.html) ► Little Navmap - Frequently asked Questions

# ![Little Navmap](assets/images/navroute.png) Little Navmap - Frequently asked Questions {#top}

**Always update to the latest version if you have issues. The latest can be found here:
[Alex’ Projects - Little Navmap Downloads](https://albar965.github.io/index.html).**

**Use your browser search function (usually `Ctrl+F` for Windows and Linux or `⌘+F` for macOS) to find topics or keywords.**

In case you have a question or a problem which cannot be solved:\\
[► **Contact and Support**](/contact.html).

Read below if you plan to use *Little Navmap* on a remote computer across a network to avoid common mistakes:\\
[► Little Navmap User Manual - Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NETWORK.html).

### Installation {#installation}

1. [**How to update the program**](#update)
1. [My anti-virus or anti-malware complains about _Little Navmap_](#anti-virus)
1. [I'd like to completely remove the program and all of its traces](#remove)

### General {#general}

1. [**Troubleshooting**](#troubleshooting)
1. [**Common Problems**](#problems-general)
1. [**MSFS Common Problems**](#problems-msfs)
1. [The program, all menus and windows look blurry](#blurry)
1. [Can I publish screenshots of _Little Navmap_, flight plans or other files made with _Little Navmap_?](#copyright)
1. [Where are the log and configuration files?](#log-and-config-files)
1. [I found an issue or have a proposal](#issue-proposal)
1. [The program crashes](#crash)
1. [**The program does not start and Windows shows an error message**](#no-start)
1. [How can I create a flight plan](#flightplan)
1. [The map is jumping around randomly while flying](#aircraft-center)
1. [How to backup userdata or the logbook](#userdata-backup)
1. [Navaids or airways are marked red in the flight plan table](#red-navaids)
1. [The elevation profile is a flat line at cruise altitude](#profile-flat)
1. [Search result is empty](#search-empty)
1. [Actual aircraft altitude differs from indicated despite correct baro settings](#altitude-correction)
1. [I get fuel flow indications that do not match the values in _Little Navmap_](#wrong-fuel-indication)
1. [Fuel planning and collection gives wrong fuel values](#wrong-fuel-planning)
1. [I cannot see my aircraft](#connect)
1. [AI or online aircraft are only visible when zooming in close](#ai-hidden)
1. [The flight plan does not show up correctly in MSFS](#flightplan-msfs)
1. [Waypoints are moved North when loading a flight plan in MSFS](#flightplan-north-msfs)
1. [There are airways missing over France and central Europe](#airways-missing)
1. [Can I run _Little Navmap_ offline without an internet connection](#offline)
1. [SSL Handshake failed on Linux](#ssl-init-linux)
1. [_Little Navmap_ does not start on Linux](#linux-start)
1. [_Little Navmap_ or _Little Navconnect_ pop up quickly and vanish](#start-monitor)
1. [There is a message `SimConnect not found.` in the connect dialog window](#no-simconnect)
1. [The simulator crashes or the connection drops when using SimConnect and other programs](#simconnect-drop)
1. [Too many errors when trying to connect to FSX](#no-fsx-connect)
1. [I see strange texts with question marks in curly brackets like `{2020.?}` in the program windows and dialogs](#strange-texts)
1. [Error version `GLIBCXX_3.4.29' not found` or smilar on Linux](#glibc-linux)

### Airports, scenery library, userpoint and navigation data {#scenery}

1. [**How can I update the navdata to the latest cycle**](#update-navdata)
1. [**Encrypted add-on found. Add-on might not show up correctly.**](#msfs-notes-encrypted)
1. [**Found 10 notes in 12 scenery entries when loading the scenery database**](#msfs-notes)
1. [Buttons for en-route holdings, MSA sectors, MORA grid and others are disabled](#msfs-features-missing)
1. [TACAN or VORTAC are missing on the map](#msfs-tacan-missing)
1. [Little Navmap crashes with an SQL error `unknown table fence` or similar](#crash-fence)
1. [I cannot see all airports](#load-scenery)
1. [I added an airport and it does not show up in _Little Navmap_](#no-airport)
1. [Search for airport by country, state or city does not work](#airport-admin-search)
1. [Airport runway numbers don't match the runway numbers for procedures](#runway-mismatch)
1. [How to add procedures to airports?](#add-procedures)
1. [A MSFS add-on does not show up after reloading the scenery library in _Little Navmap_](#no-airport-msfs)
1. [I updated the navdata but it does not show up](#update-navdata-noshow)
1. [I cannot see aprons and taxiways on the map](#no-aprons-taxi)
1. [I cannot select a start position](#no-start-pos)
1. [Some procedures or procedure legs are marked red in the selection/search tree](#red-proc)
1. [Navaids from the X-Plane `user_nav.dat` and the `user_fix.dat` files do not show up in *Little Navmap*](#user-nav-fix-dat)
1. [An airport looks wrong, has runways pointing in the wrong direction, or its name is misspelled](#airport-wrong)
1. [How does _Little Navmap_ find the MSFS scenery library, or MSFS installation not found](#msfs-scenery-library)
1. [Error `Caught exception: NOT NULL constraint failed: tmp_waypoint.region ...` when loading the scenery library](#msfs-scenery-library-no-region)
1. [Error reading `.../Content.xml“ on line 6 column 13: premature end of document` when loading the scenery library](#msfs-scenery-library-content-xml)
1. [After adding a userpoint: Error `Caught exception in file ..\atools\src\gui\application.cpp line 83 what UNIQUE constraint failed: userdata.userdata_id`](#userdata-exception)
1. [After importing userpoints from CSV: Error `Caught exception in file ..\atools\src\gui\application.cpp line 83 what UNIQUE constraint failed: userdata.userdata_id`](#userdata-exception-csv)
1. [Loading of the scenery library database takes a long time](#loading-too-long)
1. [X-Plane 12 airports appear with a gray icon](#xp-gray-airports)
1. [AI and/or multiplayer aircraft disappear early when zooming out](#ai-zoom-out)

### User Interface {#ui}

1. [Is there a night or dark mode for the user interface](#night)
1. [Text and/or icons appear very small on a 4k or other high resolution monitor](#highdpi)
1. [How can I make the map window bigger](#map-window)
1. [How can I make the map window larger](#resize-map)
1. [I cannot resize a dock window](#dock-frozen)

### Map Display {#mapdisplay}

1. [The map moves jerky or I see stutters in _Little Navmap_ while scrolling or zooming](#jerky-map)
1. [I cannot remove a traffic pattern, a holding or measurement lines](#remove-pattern)
1. [Map is fuzzy and not updating](#map-no-update)
1. [Map background is black](#map-black)
1. [Can I run the program on another client computer across the network](#networking)
1. [Can I see the program when running FSX, P3D, MSFS or X-Plane fullscreen](#sim-fullscreen)
1. [The map window is not visible or shows only a gray surface](#map-hidden)
1. [The map theme StamenTerrain shows gray blocks on the map](#stamenterrain)
1. [The map display looks too clutterd and overloaded](#clutter)

### Apple macOS {#macos}

1. [Where is the options menu item on macOS](#prefs)
1. [I get a message complaining about an unidentified developer on macOS](#macos-unidentified-developer)
1. [Cannot run _Little Navmap_ or _Little Xpconnect_ on macOS Catalina or later](#catalina)
1. [To open "Little Navmap" you need to install Rosetta](#rosetta)

### X-Plane and _Little Xpconnect_ {#xp}

1. [How do I load a flight plan in X-Plane](#load-xplane)
1. [X-Plane shows a warning or error message after trying to load a flight plan in the stock GPS or FMS](#fms-export-issues)
1. [A pop up window says my versions are not compatible Little Xpconnect needs to be updated](#xpconnect-install)
1. [Weather in X-Plane does not match what _Little Navmap_ displays](#xplane-weather)
1. [*Little Navmap* shows an error message about file `METAR.rwx` or directory `Output/real weather` does not exist](#xplane-weather-missing)
1. [I get an error message about missing directories when loading X-Plane scenery](#missing-xplane-scenery)
1. [Airports missing in X-Plane scenery after reloading](#airports-missing-xplane-scenery)
1. [I still see an older AIRAC cycle in the Scenery Libary menu for X-Plane](#update-navdata-cycle)
1. [X-Plane crashes and the last log message is `--=={This application has crashed because of the plugin: Little Xpconnect/64/*.xpl}==--`](#xpconnect-crash)

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

## Frequently asked Questions and Issues {#contents}

### Troubleshooting {#troubleshooting}

#### How to fix issues

You can try the points below if you experience problems like crashes, freezes, a corrupted window layout or other issues.

**First update *Little Navmap* if you're not running the latest version.**

1. Corrupted window layout or missing map window
   Try `Window` -> [Little Navmap User Manual - Reset Window layout to default](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#reset-window-layout) or load a previously saved window layout file (see [Little Navmap User Manual - Saving and Loading Layouts](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/LAYOUT.html#saving-and-loading-layouts)).
   If this does not help, try the suggestions below.

2. Quick and simple Solution
   Go to the *Little Navmap* main menu `Tools` and select [Little Navmap User Manual - Reset all Settings and restart](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#reset-all-settings-and-restart). *Little Navmap* will show a question dialog and then restart after deleting all settings.

   If this does not help, you can restore the settings file backup which was mentioned in the dialog.

3. More complicated but thorough option
   Quit *Little Navmap* and rename the main settings folder `ABarthel` which contains all simulator databases and is stored in the following places:

   * Windows: `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel`
   * macOS: `/Users/YOURUSERNAME/.config/ABarthel`
   * Linux: `/home/YOURUSERNAME/.config/ABarthel`

   See also [Little Navmap User Manual - Configuration](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html#configuration).

   Do not delete the folder, but rename it to keep your settings if this does not fix the problem.

   Start *Little Navmap* and see if the issue is gone.

   If this did not help: Quit *Little Navmap*. Delete `ABarthel` which was just created newly by the program and rename your backup again to `ABarthel` to get your settings and databases back.

4. Where is the log file
   See [Little Navmap User Manual - Logs](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html#logs).

5. Report the problem
   If nothing helps, report an issue either in the [**Support Forum at _Avsim_**](https://www.avsim.com/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or send me an email through [**Contact and Support**](contact.html).

   The chapter [Little Navmap User Manual - Issue Report](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/ISSUEREPORT.html#logs)
contains further links and describes how to create a report Zip archive containing all needed files.

6. Other Issues

   1. **Program starts slowly:** This can happen if a distance search
      is enabled in one of the search tabs. The search is executed at each
      start. Simply disable the distance search or reset the search options
      to avoid the slow startup.

      Also exclude the installation and settings folder `Abarthel` from anti-virus scanning.

      Furthermore disable uneeded weather downloads like NOAA, VATSIM or IVAO. Also shut down
      the web server if it is not needed.
   2. **Online maps do not load or update:** Check your firewall settings
      if Windows blocks any outgoing connections. Check if *Little
      Navmap* can connect to the internet by going to the options dialog on
      tab [Little Navmap User Manual - Options - Weather Files](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#weather-files). Use one of the buttons `Test` for NOAA or VATSIM
      weather. *Little Navmap* cannot reach the internet if these fail.
   3. **Search shows no result or unexpected results:** Check the drop down
      menu for the change indicator `*` and the search fields for any
      remaining text if the distance search does not give any or unexpected
      results. Use [Little Navmap User Manual - Search - Reset Search](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SEARCH.html#reset-search) in the context menu of the result table
      or press `Ctrl+R` to clear all search criteria.
   4. **Search or flight plan tables shows strange column names like** `airport_id` **or others:**
      This can happen if the program is updated. Use `Reset View` in the context menu of the result table.
   5. **The flight plan elevation profile has errors or invalid elevation data:**
      The online elevation data contains several known errors. Use
      the recommended GLOBE offline elevation data. See
      [Little Navmap User Manual - GLOBE Offline Elevation Data](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/GLOBE.html) for information how to install the offline data.
   6. **Loading of the scenery database takes too long:** Exclude scenery
      directories containing only landclass, elevation data or other for
      *Little Navmap* irrelevant data. You can do that in the `Options`
      dialog on the `Scenery Library Database` tab. See
      [Little Navmap User Manual - Options - Scenery Library Database](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#ref:`scenery-library-database-exclude).
   7. **Crash while loading the scenery library database:** You can exclude
      scenery directories in the `Options` dialog on the
      `Scenery Library Database` tab if loading of an add-on BGL causes
      the program to crash ([Little Navmap User Manual - Options - Scenery Library Database](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#scenery-library-database-exclude)). Do not restart the program after it shows the
      crash dialog and instead load the log file which is typically
      `C:\Users\YOURUSERNAME\AppData\Local\Temp\abarthel-little_navmap.log`.
      The path may vary depending on your Windows installation. Search for
      the last line in the log-file that looks like:

      `[2016-10-14 22:58:21.903 default INFO ]  unknown: ==== "404 of 521 (77 %)" "APX41080.bgl"`

      Now search for `APX41080.bgl` and exclude the file or its directory
      from loading in the `Options` dialog.

#### How to update the program [**▲**](#top) [🔗](#update) {#update}

You might either:

* Download and run the installer if you use Windows. The installer takes care of all obsolete files.
* Delete the previous version of _Little Navmap_ and install the new version in the same place.
* Install the new version in a new folder by using the version as a directory name suffix, for example.

In either case do not merge the two old and new directories. Remains of previous versions might cause issues.

Always update all related programs like *Little Navconnect* and *Little Xpconnect*.

#### Where are the log and configuration files? [**▲**](#top) [🔗](#log-and-config-files) {#log-and-config-files}

The files can be opened in the default text editor from menu -&gt; `Tools` -&gt; `Files and Directories` in *Little Navmap*.

Details can be found in [Little Navmap User Manual - Files](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html).

#### My anti-virus or anti-malware complains about _Little Navmap_ [**▲**](#top) [🔗](#anti-virus) {#anti-virus}

This is usually a false positive.

I usually upload all Zip files to [VirusTotal](https://www.virustotal.com) before making them public. This ensures that the files are checked by 50 or more anti-virus programs.

You can upload your downloaded files to VirusTotal and you will get the report from my uploads immediately.

One or two false positive might occur and is no reason for concern.

#### I found an issue or have a proposal [**▲**](#top) [🔗](#issue-proposal) {#issue-proposal}

All ideas and bugs are collected in the [GitHub Issues](https://github.com/albar965/littlenavmap/issues) for _Little Navmap_.

First check if your idea or finding is already covered there.

If not, you can register at GitHub and write an issue. Alternatively, you can send me an email and I put this on my internal list
or create an issue for bigger tasks.

For errors send me a bug report in the
[Avsim Support Forum](https://www.avsim.com/forums/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) or by email.
See [Little Navmap User Manual - How to report a Bug](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/APPENDIX.html#how-to-report-a-bug).

#### The program crashes [**▲**](#top) [🔗](#crash) {#crash}

*Little Navmap* shows and error message if a previous unsafe shutdown was detected, i.e. a crash.
Follow the notes in the dialog window to send the generated crash report.

See [Little Navmap User Manual - Crashreport](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/CRASHREPORT.html).

What you can try to workaround the issue:
1. Use [Little Navmap User Manual - Reset all Settings and Restart](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#reset-all-settings-and-restart) in the menu `Tools`.
2. If the program crashes before even showing the main window: Rename the settings directory which also contains the scenery databases.
   In Windows these can be found in `c:\Users\YOURUSERNAME\Appdata\Roaming\ABarthel`. E.g. rename `ABarthel` to `ABarthel.backup`.
   See chapter [Little Navmap User Manual - Files - Configuration](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html#configuration)
   for file locations on other operating systems.

#### The program does not start and Windows shows an error message [**▲**](#top) [🔗](#no-start) {#no-start}

**Use one of the provided installer packages for Windows to avoid issues like this.**

Windows shows an error message `cannot proceed because libmarblewidget-qt5.dll was not found` or similar when trying to start *Little Navmap*.

This can have several reasons:

* You're starting the program from the Windows Explorer Zip view. You have to extract the Zip archive before running _Little Navmap_.
* You downloaded the wrong Zip archive containing only the source files or an archive for another operating system. In both cases the file `littlenamvmap.exe` is missing and you try to start a different file.
* Not all files were extracted and the mentioned DLL file is missing. Check if it can be found in the same folder as the `littlenamvmap.exe`. Try to download and install again.
* Anti-virus put the DLL into quarantine. This is a false positive since all _Little Navmap_ files are checked by [VirusTotal](https://www.virustotal.com/) before release.
* You start the program using a shortcut (`.lnk` file) and the working directory is not the *Little Navmap* installation folder (the one with the `littlenamvmap.exe`). The working directory can be changed in the link properties in input field `Start In`.


#### I'd like to completely remove the program and all of its traces [**▲**](#top) [🔗](#remove) {#remove}

All files and folders created by _Little Navmap_ are described in the chapter [Little Navmap User Manual - Files](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FILES.html) in the manual.

_Little Navmap_ does not create any registry entries on Windows except when using the installer.

#### SSL Handshake failed on Linux [**▲**](#top) [🔗](#ssl-init-linux) {#ssl-init-linux}

**Note: This issue was fixed with the Little Navmap version 2.8.8. See page [Alex' Projects](https://albar965.github.io/index.html) for latest releases of stable and beta versions.**

The problem appears when checking for updates and all other network communication. You see errors like `Reason: "SSL handshake failed"` in the log file.

This is an issue in the Linux build. The included `libssl.so` is not loaded by Qt. Instead the not compatible version SSL version 3 is loaded on some systems.

To fix this download the hotfix [LittleNavmap-linux-22.04-2.8.7-openssl-1.1.tar.gz(]https://github.com/albar965/littlenavmap/releases/download/v2.8.7/LittleNavmap-linux-22.04-2.8.7-openssl-1.1.tar.gz) and install it according to the included `README.txt`.

#### _Little Navmap_ does not start on Linux [**▲**](#top) [🔗](#linux-start) {#linux-start}

Commonly missing shared libraries can be installed by entering `sudo apt install libxcb-xinerama0 libxcb-icccm4`.

Also missing might be `qt5dxcb` which can be installed with `sudo apt install qt5dxcb-plugin` on a terminal in an Ubuntu or derived system. Use your system package manager (`rpm`, `pacman`, etc.) to install missing libraries if using another system.

Little Navmap supports the Wayland compositor which is used on newer Linux distributions
but you have to install the package `qtwayland5`.

You can run _Little Navmap_ and generate more diagnostics by opening a terminal/shell and cd to the
_Little Navmap_ installation folder if above does not help. Enter the following:

`bash -c "(ldd littlenavmap && export QT_DEBUG_PLUGINS=1 && ./littlenavmap )" >start_log.txt 2>&1`

This will check dependencies for _Little Navmap_, enable extra output for plugin loading, run the program and put the output into a file `start_log.txt`.

Look at the file to see missing dependencies or send me this file and I can check which library is missing: [Contact](https://albar965.github.io/contact.html).

#### _Little Navmap_ or _Little Navconnect_ pop up quickly and vanish [**▲**](#top) [🔗](#start-monitor) {#start-monitor}

Chances are that you attached a monitor recently and removed or disconnected it afterwards.
The program still opens on the vanished monitor since the screen space is still valid in the operating system.

Remove the monitor from the system settings or check if it still present.
_Little Navmap_ or _Little Navconnect_ will relocate their main windows once they detect that they are off space.

#### There is a message `SimConnect not found.` in the connect dialog window [**▲**](#top) [🔗](#no-simconnect) {#no-simconnect}

**Use one of the provided installer packages for Windows to avoid issues like this.**

_Little Navmap_ does not connect to FSX/P3D or you see an error message in the connection dialog window when trying to connect:

```
SimConnect not found. Your Little Navmap installation is missing the file "SimConnect.dll".
Reinstall Little Navmap or install a FSX SP2 compatible version of SimConnect on your computer.
```

First check if the file `SimConnect.dll` is present in the _Little Navmap_ installation folder,
in case it was removed by virus protection or it is missing due to improper installation. Note that the file is only present in
the 32-bit build. It is not required for

You're probably missing common libraries on your computer if the file exists but cannot be loaded.

**Download and install two Windows Redistributable Packages from Microsoft:**<br/>
**[Microsoft Visual C++ Redistributable latest supported downloads](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170)**.<br/>
You need to get the download links in chapter `Visual Studio 2015, 2017, 2019 and 2022` for `X86` and `X64`.

You can also download the files directly from the _Little Navmap_ download page:<br/>
_Little Navmap Downloads - Windows Redistributable Packages -_ [vcredist_2015-2022.x64.exe](https://www.littlenavmap.org/downloads/Windows%20Redistributable%20Packages/vcredist_2015-2022.x64.exe) and [vcredist_2015-2022.x86.exe](https://www.littlenavmap.org/downloads/Windows%20Redistributable%20Packages/vcredist_2015-2022.x86.exe).

Restart _Little Navmap_ after installing the packages. The error message should be gone.

#### The simulator crashes or the connection drops when using SimConnect and other programs [**▲**](#top) [🔗](#simconnect-drop) {#simconnect-drop}

This can be caused by too many applications using the SimConnect interface in MSFS, P3D or FSX or by bugs in the simulator.

You can try to reduce the load on SimConnect by disabling certain options in _Little Navmap_:

1. Disable all weather options `Flight Simulator` in _Little Navmap_ options on page `Weather`.
2. Disable all `Flight Simulator` options in the _Little Navmap_ menu `Weather`.
2. Deselect the `Fetch AI ...` options in the simulator connection dialog.

You can use NOAA weather instead which is the most up-to-date source.

Another option is to increase the setting for `MaxClients` entries in the file `Simconnect.xml` to 128 or more.

The file can be found for MSFS:
- Microsoft Store: `C:\Users\YOURUSERNAME\AppData\Local\Packages\Microsoft.FlightSimulator_8wekyb3d8bbwe\LocalCache`
- Steam: `C:\Users\YOURUSERNAME\AppData\Roaming\Microsoft Flight Simulator`

See here for more information about `Simconnect.xml` in MSFS:
[SimConnect XML Definition](https://docs.flightsimulator.com/html/Programming_Tools/SimConnect/SimConnect_XML_Definition.htm)

See here for more information about `Simconnect.xml` in P3D:
[The SimConnect.xml file](https://www.prepar3d.com/SDKv3/LearningCenter/utilities/simconnect/simconnect.html#The%20SimConnect%20xml%20file)

You probably have to create the file.

#### Too many errors when trying to connect to FSX [**▲**](#top) [🔗](#no-fsx-connect) {#no-fsx-connect}

You see an error message
`Too many errors when trying to connect to simulator. Not matching simulator interface or other SimConnect problem.`
when trying to connect to FSX using the 32-bit build of _Little Navmap_.

You have to update FSX with the SP2. _Little Navmap_ cannot connect to a plain not updated FSX.

#### I see strange texts with question marks in curly brackets like `{2020.?}` in the program windows and dialogs [**▲**](#top) [🔗](#strange-texts) {#strange-texts}

This is a sign for an incomplete user interface translation. Go to the _Little Navmap_ options
dialog on page `User Interface` and select English as interface language to get rid of these artifacts.

#### Error version `GLIBCXX_3.4.29' not found` or similar on Linux [**▲**](#top) [🔗](#glibc-linux) {#glibc-linux}

You see an error about a missing GLIBC version on the terminal when running *Little Navmap* on Debian or other distributions:

```
./littlenavmap: /lib/x86_64-linux-gnu/libstdc++.so.6: version GLIBCXX_3.4.29' not found (required by ./littlenavmap)
./littlenavmap: /lib/x86_64-linux-gnu/libc.so.6: version GLIBC_2.34' not found (required by ./littlenavmap)
```

Use the *Little Navmap* build based on Ubuntu 20.04. You can find it in the assets of every release on GitHub.
For example [LittleNavmap-linux-20.04-{{ page.release-version }}.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v{{ page.release-version }}/LittleNavmap-linux-20.04-{{ page.release-version }}.tar.gz).

The functionality of this build is identical to the 22.04 builds ad they use the same settings folder and files.

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

#### How can I create a flight plan [**▲**](#top) [🔗](#flightplan) {#flightplan}

Zoom to an airport in the map and right click on it. Select `Set ... as Flight Plan Departure`. Look for another airport
on the map, right click and select `Set ... as Flight Plan Destination`.

That's it. You just built a simple flight plan.

Have a look at the [Little Navmap User Manual - Tutorials](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/TUTORIALS.html) which are also linked in the help menu. These help to get around in the program.

#### Common Problems [**▲**](#top) [🔗](#problems-general) {#problems-general}

-  Some airport add-ons do not modify the stock airports but only add
   new scenery and buildings. These add-ons will not be recognized as
   such and are therefore not highlighted on the map (italic and
   underlined text).
-  Add-on developers have to use all kind of workarounds to avoid FSX or
   P3D limitations which means the display and information given for
   add-on airports is not always correct. A lot of these changes are
   also done to make AI behave properly. Typical examples are: Airports
   without runways, airports with runway dimensions 0 by 0 ft or 0 ft
   runway width, taxiways with 0 ft width, seemingly closed taxiways,
   duplicate airports, duplicate runways in water, taxiways in water,
   military gates at civilian airports and more.
-  Some KML/KMZ files do not show up on the map. Adding a center point
   pushpin to the KML/KMZ file can fix this.
-  There are errors in the online elevation source data (like in
   northern Italy, Po Valley or Lake Titicaca in Peru and Bolivia) which
   will show up in the flight plan elevation profile.
-  Magnetic declination is partially not set (for example VORDME
   Cambridge Bay YCB) or inconsistent between airports an adjacent
   navaids. This is an error in the source data.
-  Airports are misplaced (for example Cabo San Lucas, MM15 in Mexico for FSX)
   compared to the background maps. This is an error in the source data
   and cannot be fixed.
-  Procedures are drawn incorrectly in some cases.
-  The airport search attribute `Procedures` does not work correctly
   in the mixed database. It will show only simulator airports having
   procedures instead of using the Navigraph airport status.
-  Dock window layout in Little Navmap can change when resizing or maximizing window and back.
-  Window is restored in normal state when changing from a maximized window to fullscreen and back.
-  The window layout might not be restored precisely on startup in some cases.
-  The height of the elevation profile window cannot be reduced in some cases. Reset to default window
   layout which fixes this. Rearrange or move the elevation profile window to another position which
   usually solves this. Save the layout once you have a working one.
-  Zooming with touchpad or magic mouse does not work properly on macOS. Use the navigation overlay
   or one of the other options on page `Map Navigation` in `Options` if you think it is unusable.
-  X-Plane airport administrative data like city or country are not accurate and use many wrong variations.

#### MSFS Common Problems [**▲**](#top) [🔗](#problems-msfs) {#problems-msfs}

Read the linked chapter below to minimize issues when loading flight plans into **MSFS**:\\
[► Little Navmap User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).

**Note that many of these issues are a result of MSFS limitations and cannot be fixed in** *Little Navmap* **.**

-  Navdata updates are not read properly from the MSFS scenery library. This is in general no issue
   since you can also update the navdata in *Little Navmap* with the Navigraph FMS Data Manager to keep the
   program in sync with MSFS. Stock data is not affected by this. See [Little Navmap User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata).
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
-  Add-ons using the `.fsarchive` encrypted format are not supported. *Little Navmap* will show
   only the stock airport instead of the add-on if a package is locked down like this.
-  Some aircraft mods do not report correct fuel flow to work around simulator limitations. This
   cannot be fixed in *Little Navmap*.
-  Some airports files like `LEMG.bgl` cannot be read due to unknown format. *Little Navmap*
   reports `Error: readInt for file "...OMITTED.../LEMG.bgl" failed. Reason 1`. Exclude the airport
   file from reading in options on page `Scenery Library Database` or simply ignore the message. The
   stock LEMG and all other airports are not affected by this.

#### The program, all menus and windows look blurry [**▲**](#top) [🔗](#blurry) {#blurry}

Disable the FreeType font engine on Windows on options page `Display and Text`.
Enabling this option results in better and faster text display on the map, especially for rotated labels.
But the text will appear slightly blurred throughout the whole application. Deselect this to
avoid the slightly blurred text in menus and application windows.

See [Little Navmap User Manual - Options -  Use FreeType font engine on Windows](https://www.littlenavmap.org/manuals/littlenavmap/release/3.0/en/OPTIONS.html#use-freetype-font-engine-on-windows).

#### Can I publish screenshots of _Little Navmap_, flight plans or other files made with _Little Navmap_? [**▲**](#top) [🔗](#copyright) {#copyright}

Yes, these are entirely your own files and you can share, copy and publish them as you like.

#### The map is jumping around randomly while flying [**▲**](#top) [🔗](#aircraft-center) {#aircraft-center}

The map does not jump randomly. The level of zoom changes to keep aircraft and the next flight plan waypoint centered.

The default behavior is to keep aircraft and next flight plan waypoint on the screen once one flight plan leg is active (magenta), i.e. you're flying. You can move around the map manually but _Little Navmap_ jumps back to aircraft and waypoint after a while. All this is configurable in options on page [Little Navmap User Manual - Simulator Aircraft](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#simulator-aircraft).

You can also revert to simple aircraft centering, for example. The default values might be confusing first but they are like that to reduce the need for manual zooming.

If you switch to normal zooming you can change the level of zoom with the mouse wheel or other methods.

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

#### Navaids or airways are marked red in the flight plan table [**▲**](#top) [🔗](#red-navaids) {#red-navaids}

This can happen if you load a flight plan which was made using older navdata.

It might contain waypoints that were removed later or radio navaids that were decommissioned. These cannot be found in later AIRAC cycles and therefore not in _Little Navmap_'s database.
These are shown in red and are treated like user defined flight plan waypoints in _Little Navmap_.

Airways are displayed in red if they do not exist or the minimum or maximum airway altitude restrictions are
violated by the selected cruise altitude when loading the flight plan.

See also [Little Navmap User Manual - Flight Plan - Error Display](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FLIGHTPLAN.html#error-display).

#### The elevation profile is a flat line at cruise altitude [**▲**](#top) [🔗](#profile-flat) {#profile-flat}

The elevation profile cannot be calculated by _Little Navmap_ and you see a red error message ([Little Navmap User Manual - Warning and Error Messages](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INTRO.html#warning-and-error-messages)) at the bottom of the flight plan table for one of the reasons below:

1. The cruise altitude is too high. Therefore the top of climb and the top of descent cannot be calculated. Lower the cruise altitude until the profile can be calculated again.
2. The flight plan violates altitude restrictions of used procedures (SID, STAR or approach). Change the flight plan cruise altitude to match these restrictions or remove or change the procedures.
3. The aircraft performance profile is wrong or configured for too shallow climb and descent sections. See [Little Navmap User Manual - Aircraft Performance](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/AIRCRAFTPERF.html) for more information.
4. Cruise altitude is below a high elevation departure or destination airport.

#### Search result is empty [**▲**](#top) [🔗](#search-empty) {#search-empty}

Check the drop down menu for the change indicator `*` and the search fields for any remaining text if the distance search does not give any or unexpected results. Use `Reset Search` in the context menu of
the result table or press `Ctrl+R` to clear all search criteria.

Note that using an ICAO code for searching will temporarily override all other options in some search fields. This helps to do a quick search for an airport.

#### Actual aircraft altitude differs from indicated despite correct baro settings [**▲**](#top) [🔗](#altitude-correction) {#altitude-correction}

Actual altitude shown in *Little Navmap* might differ from indicated altitude even with a correct baro setting.

This is an effect of the outside air temperature (OAT) on actual altitude where low temperatures affect the aircraft altimeter.
When temperature is less than ISA conditions an aircraft will be lower than the altimeter reading.

This effect is currently modeled in X-Plane 12 and MSFS.

Corrections have to be applied when the aerodrome temperature is 0°C or colder:

- DH/DA or MDH/MDA and step-down fixes inside the final approach fix (FAF).
- All low altitude approach procedure altitudes in mountainous regions (terrain of 3000 ft AMSL or higher)

See [SKYbrary - Altimeter Temperature Error Correction](https://skybrary.aero/articles/altimeter-temperature-error-correction)
for more information.

#### I get fuel flow indications that do not match the values in _Little Navmap_ [**▲**](#top) [🔗](#wrong-fuel-indication) {#wrong-fuel-indication}

Fuel flow in the tab `Performance` of _Little Navmap_ does not match to what the aircraft is showing.

An aircraft add-on probably uses doctored values to workaround simulator limitations. This happens often with complex study level add-ons and might affect fuel calculation, planning and especially collection.

#### Fuel planning and collection gives wrong fuel values [**▲**](#top) [🔗](#wrong-fuel-planning) {#wrong-fuel-planning}

This is related to wrong fuel indications of an add-on aircraft. See [above](#wrong-fuel-indication).

You can still create an aircraft performance profile manually and ignore the indications.

Set TAS and fuel flow for typical cruise level.

For fuel flow, TAS and vertical speed in the descent and climb phases simply get the values at low altitude, near cruise altitude and then enter the average in _Little Navmap_.
Tune the profile manually as needed.

It might also be beneficial to create different profiles for different cruise altitude ranges, especially for large complex aircraft.

#### I cannot see my aircraft [**▲**](#top) [🔗](#connect) {#connect}

*Little Navmap* does not connect automatically to a simulator per default. You have to go to the main menu -&gt; `Tools` -&gt; `Flight Simulator Connection`.

See [Little Navmap User Manual - Connecting to a Flight Simulator](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/CONNECT.html).

Also check if the option in menu `View` -> `Show User Aircraft` is enabled.

#### AI or online aircraft are only visible when zooming in close [**▲**](#top) [🔗](#ai-hidden) {#ai-hidden}

Some online or AI tools do not provide enough or wrong information
for the aircraft injected into the simulator. As a result, _Little Navmap_ considers all
aircraft on ground and hides them on higher zoom levels.

Go to options on page `Map Display`, section `AI or Multiplayer Aircraft` and disable `Hide Aircraft on Ground` to override this behavior.

#### The flight plan does not show up correctly in MSFS [**▲**](#top) [🔗](#flightplan-msfs) {#flightplan-msfs}

MSFS has many issues loading flight plans. Additionally, the format is not documented yet which requires a lot of guesswork.

The following issues are known so far:
- MSFS automatically adds transitions to approach procedures as well as SID and STAR if plan is of type IFR. Changing these can result in a completely new routing.
- Saving a direct plan between two airports of type IFR will result in MSFS adding intermediate waypoints and procedures like SID and STAR.
- You cannot use airways or procedures for VFR flight plans. MSFS will quietly remove these. *Little Navmap* shows a warning if you try to export such a plan.
- MSFS uses turn anticipation which may result in wrong flight plan display in the GPS units or autopilot behavior. The GPS or autopilot will take a shortcut for hard turns which sometimes messes up a flight plan, for example. Turn anticipation is a function performed by FMS or RNAV devices to tell the pilot when to initiate a turn to the next waypoint on the programmed flight path to avoid overshooting the programmed course.
- Altitude at waypoints and sometimes the cruise altitude is ignored and replaced by MSFS' own idea of a climb and descent profile which has nothing to do with the *Little Navmap* profile. This happens despite *Little Navmap* saving the altitude for each waypoint.
- Flight plan names must not contains special characters like umlauts or accents. *Little Navmap* replaces these automatically when exporting a plan.

Apart from these issues above you might see MSFS crashes or corrupted flight plans when loading.

Also, read the chapter [Little Navmap User Manual - Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata) in the *Little Navmap* user manual to minimize issues with different navdata.

#### Waypoints are moved North when loading a flight plan in MSFS [**▲**](#top) [🔗](#flightplan-north-msfs) {#flightplan-north-msfs}

**This issue was fixed with *Little Navmap* release 2.8.12.**

#### There are airways missing over France and central Europe [**▲**](#top) [🔗](#airways-missing) {#airways-missing}

There are gaps in the airway system over some European countries.

This is not an error but real and a result of the European airway restructuring to save fuel and emissions.

See [Free route airspace](https://www.eurocontrol.int/concept/free-route-airspace) for more information.

_Little Navmap_ can skip these gaps when calculating a flight plan. See here for information how to deal with this:
[Little Navmap User Manual - Flight Plan Route Calculation](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/ROUTECALC.html#prefer).

#### Can I run _Little Navmap_ offline without an internet connection [**▲**](#top) [🔗](#offline) {#offline}

Yes. Switch to an offline map in menu `View` -> `Theme` (offline is indicated in the menus) and
disable all weather and wind downloads/assignments in the menu `Weather` as well as in options on
page `Weather`. You might also want disable the automatic check for updates in options on page `Startup
and Updates`. Additionally switch `Online Service` to `None` on options page `Online Flying`.

Also install the offline GLOBE elevation data to avoid elevation online accesses as described here in the user manual:
[Little Navmap User Manual - Install GLOBE elevation data](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#install-globe-elevation-data).

This disables all network connections in _Little Navmap_.

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

#### Encrypted add-on found. Add-on might not show up correctly [**▲**](#top) [🔗](#msfs-notes-encrypted) {#msfs-notes-encrypted}

See next topic below.

#### Found 10 notes in 12 scenery entries when loading the scenery database [**▲**](#top) [🔗](#msfs-notes) {#msfs-notes}

This message appears after loading the MSFS scenery library. Numbers will differ.

Futhermore there are one or more messages like the one below:

```
Scenery Title: OneStore
Encrypted add-on "asobo-airport-eddf-frankfurt" found. Add-on might not show up correctly.
```

This is not an error message but merely a reminder that the layout of encrypted payware aiports in _Little Navmap_ might not match what you see in the simulator.
You can still use the airport for flight planning but taxiways, parking spots and aprons might probably differ.

This is related to [A MSFS add-on does not show up after reloading the scenery library in _Little Navmap_](#no-airport-msfs). See there for more information.

#### TACAN or VORTAC are missing on the map for MSFS[**▲**](#top) [🔗](#msfs-tacan-missing) {#msfs-tacan-missing}

These are not yet considered by *Little Navmap* when reading the scenery library.

#### Buttons for en-route holdings, MSA sectors, MORA grid and others are disabled when using MSFS[**▲**](#top) [🔗](#msfs-features-missing) {#msfs-features-missing}

Certain features are not available from the MSFS scenery library. Partially this affects FSX and P3D as well.

If you have the Navigraph navdata update for MSFS installed: You have to update the *Little Navmap* navdata too. See [Install Navigraph Updates](https://albar965.github.io/littlenavmap_navigraph.html).

The following features are not provided by the MSFS scenery library:

- One-way attribute for airways
- Airway maximum altitude restrictions
- TACAN, these are shown as DME instead
- VORTAC, shown as VORDME instead
- MORA grid ([Show Minimum off-route Altitude Grid](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#show-mora-grid))
- Airport MSA sectors ([Show MSA Sectors](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#view-show-msa-sectors))
- En-route holdings ([Show Holdings](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#view-show-holdings))
- GLS/RNV glidepaths ([Show GLS/RNP Approach Paths](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#view-show-gls-approach-paths))

See also [Load Scenery Library](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html) and
[Navigation Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NAVDATA.html) for more information.

You can avoid these limitations by updating the MSFS and *Little Navmap* navdata with a Navigraph subscription and the Navigraph FMS Data Manager
[Install Navigraph Updates](https://albar965.github.io/littlenavmap_navigraph.html).

#### Little Navmap crashes with an SQL error `unknown table fence` or similar [**▲**](#top) [🔗](#crash-fence) {#crash-fence}

You're using a very old version of _Little Navmap_ with a new database. Update _Little Navmap_ to the latest version to fix this.
See page [Alex' Projects](https://albar965.github.io/index.html) for latest releases of stable and beta versions.

#### I cannot see all airports [**▲**](#top) [🔗](#load-scenery) {#load-scenery}

Additionally you see all runways filled white and aprons as well as taxiways are missing.

*Little Navmap* uses the included navigation database if no scenery library is loaded. You see a red error message `Database empty` in the status bar.

Load the scenery library from the simulator. See [Little Navmap User Manual - Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html)
in the manual.

#### I added an airport and it does not show up in _Little Navmap_ [**▲**](#top) [🔗](#no-airport) {#no-airport}

You have to reload the scenery library. See [Little Navmap User Manual - Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html).
in the manual.

See topic below for limitations with MSFS.

#### Search for airport by country, state or city does not work [**▲**](#top) [🔗](#airport-admin-search) {#airport-admin-search}

Data sources limit this functionality and it depends on the selected navdata source in menu `Scenery Library`:

* Navigraph only: This has only limited administrative airport information. Only airport name (`Frankfurt am Main`), ICAO code (`EDDF`), ICAO region (`ED`) and area code (`EUR`) are available.
* All other modes: The completeness of administrative information depends on the airport and simulator. Administrative data (State, City, etc.) is often missing for X-Plane airports. Country information is completely missing in MSFS.

#### Airport runway numbers don't match the runway numbers for procedures [**▲**](#top) [🔗](#runway-mismatch) {#runway-mismatch}

This depends on the scenery mode as set in the menu `Scenery Library` -&gt; `Navigraph`. The default is to use the flight simulator scenery for runways and ILS and the Navigraph database for all airspaces, airways and all other navaids.

Runways are named by the magnetic direction which changes over the years. This results in airports renaming their runways from time to time. Therefore, mismatches between old airports, be it stock or add-on, can happen.

See [Little Navmap User Manual - Runway Mismatches between Simulator and Navigation Data](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SEARCHPROCS.html#runway-mismatches-between-simulator-and-navigation-data) for more information.

It's neither a _Little Navmap_ nor Navigraph issue. It is an unavoidable real world issue where simulator scenery or airports are not updated as fast as the real world airports.

See the [Little Navmap User Manual - Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NAVDATA.html) chapter in the manual for more information.

For **FSX or Perpar3D** you can use the [Airport Design Editor](https://www.scruffyducksoftware.com/airport-design-editor) to change the runway numbers.

Use [WED](https://developer.x-plane.com/tools/worldeditor/) to change an airport for X-Plane or download the latest airport from the [The X-Plane Scenery Gateway](https://gateway.x-plane.com/).

#### How to add procedures to airports? [**▲**](#top) [🔗](#add-procedures) {#add-procedures}

This is a very complex task.

For **FSX or Perpar3D** you can use the [Airport Design Editor](https://www.scruffyducksoftware.com/airport-design-editor),
add procedures to the airport and then switch off Navigraph in the scenery library menu. _Little Navmap_ will
read the procedures from your add-on airport and you can use them like the others.

**X-Plane**: You can try to create a CIFP file but this is very complex and not recommended as stated on the page [here](https://developer.x-plane.com/?article=navdata-in-x-plane-11#How_do_I_make_my_own_approach_No_hand_editing_please).

See [Navdata in X-Plane 11](https://developer.x-plane.com/?article=navdata-in-x-plane-11) and [XP-CIFP1101-Spec.pdf](http://developer.x-plane.com/wp-content/uploads/2016/10/XP-CIFP1101-Spec.pdf).

#### A MSFS add-on does not show up after reloading the scenery library in _Little Navmap_ [**▲**](#top) [🔗](#no-airport-msfs) {#no-airport-msfs}

Encrypted add-on airports in MSFS cannot be read by *Little Navmap*.

The add-on is locked down with a DRM ([Digital _Restriction_ Management](https://en.wikipedia.org/wiki/Digital_rights_management)) scheme if you find a file `BGL.fsarchive` in the add-on folders. *Little Navmap* will not show a new airport or only the stock airport if an add-on replaces a stock one.

You can still use the stock airport shown in _Little Navmap_ for flight planning but keep in mind that parking, taxiways or aprons might probably look different in the simulator.

Buy add-ons directly from developers instead of the Microsoft market which enforces encryption. Alternatively you can also use and support freeware scenery.

#### How can I update the navdata to the latest cycle [**▲**](#top) [🔗](#update-navdata) {#update-navdata}

You have to get a [Navigraph](https://www.navigraph.com/) navdata only subscription. This allows you to update the _Little Navmap_ navdata to the latest.

I recommend to keep *Little Navmap*, the simulator and all tools on the same AIRAC cycle to avoid issues when loading flight plans.

##### How to get a Navdata only Subscription

Create an accout at [Navigraph](https://navigraph.com/) if you do not already have one.

Click on your name in the top right corner when logged in on the web page. Click on `Subscription` on the left if you're not already there.
You will see the webpage below where you can select the `Navigation Data subscription` at the bottom of the page.

![Select navdata option](assets/images/navdata_only.jpg)

This will allow you to download navdata and update *Little Navmap*, simulators and add-ons to the latest AIRAC cycle on a monthly basis.

#### I updated the navdata but it does not show up [**▲**](#top) [🔗](#update-navdata-noshow) {#update-navdata-noshow}

You should use the automatic scan in the _FMS Data Manager_ which usually finds the correct path.

See [Little Navmap - Install Navigraph Updates](/littlenavmap_navigraph.html) to see
how to set the path correctly if the automatic scan did not find the path.

#### I cannot see aprons and taxiways on the map [**▲**](#top) [🔗](#no-aprons-taxi) {#no-aprons-taxi}

There are only white bars with a black outline showing the runways.

You probably selected `Use Navigraph for all Features` in the `Scenery Library` menu. `Select Automatically` is the recommended mode which will show detailed stock or add-on airports mixed with Navigraph navaids.

See [Little Navmap User Manual - Navigation Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NAVDATA.html) in the manual.

#### I cannot select a start position [**▲**](#top) [🔗](#no-start-pos) {#no-start-pos}

You might use the wrong scenery mode `Use Navigraph for all Features`.
See [Little Navmap User Manual - Navigation Databases](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NAVDATA.html) and  [Microsoft Flight Simulator 2020 Airports and Navdata](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html#load-scenery-library-dialog-msfs-apt-navdata) for more information about this.

Select either `Use Navigraph for Navaids and Procedures` or `Do not use Navigraph Database` depending on information in above links (Navigraph MSFS update installed or not).

#### Some procedures or procedure legs are marked red in the selection/search tree [**▲**](#top) [🔗](#red-proc) {#red-proc}

This can happen if navdata read from the simulator has errors or is incomplete. Note that this issue appears only when using `Do not use Navigraph Database` in the menu `Scenery Library`.

The procedures cannot be used at all or only after confirming a warning dialog.

A currently known problem is missing recommended fix information for constant radius arc procedure legs in MSFS navdata.

See also [Little Navmap User Manual - Search Procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SEARCHPROCS.html) and
[Procedures](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/APPROACHES.html) for more information.

#### Navaids from the X-Plane `user_nav.dat` and the `user_fix.dat` files do not show up in *Little Navmap* [**▲**](#top) [🔗](#user-nav-fix-dat) {#user-nav-fix-dat}

_Little Navmap_ reads both the `user_nav.dat` and the `user_fix.dat` files. The problem is that the navaids are hidden by Navigraph data per default. Therefore, you have to switch to `Do not use Navigraph database` in the menu `Scenery Library` to see the user navaids.

You also have to reload the _Little Navmap_ scenery library after adding or changing the user files.

The user navaids can be used in the X-Plane stock FMS and GPS. But keep in mind that the user navaids do not show up on the X-Plane internal map.

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

#### How does _Little Navmap_ find the MSFS scenery library, or MSFS installation not found [**▲**](#top) [🔗](#msfs-scenery-library) {#msfs-scenery-library}

**Click `Reset Paths` in the scenery library load dialog if you've moved your simulator.**

_Little Navmap_ looks into fixed installation folders for the various MSFS installation options (MS Online, MS Boxed or Steam). There are no Windows registry entries used. Installation on a removable drive is usually no problem.

_Little Navmap_ first looks for a file `UserCfg.opt` at the following fixed locations:
1. MS online installation: `C:\Users\USER\AppData\Local\Packages\Microsoft.FlightSimulator_8wekyb3d8bbwe\LocalCache\UserCfg.opt`
2. Steam installation: `C:\Users\USER\AppData\Roaming\Microsoft Flight Simulator\UserCfg.opt`
3. MS Boxed installation: `C:\Users\USER\AppData\Local\MSFSPackages\UserCfg.opt`

Replace `USER` with your login name.

The text file `UserCfg.opt` contains a last line `InstalledPackagesPath` which points to the MSFS scenery library.

From there _Little Navmap_ looks up `...\Official\Steam\fs-base\layout.json` or `...\Official\OneStore\fs-base\layout.json` to check if the installation path is really valid or if it consists only of remains from previous installations.

Detection problems can usually caused by file permission issues, missing files or folders or remaining files from previous installations.

#### Error `Caught exception: NOT NULL constraint failed: tmp_waypoint.region ...` when loading the scenery library [**▲**](#top) [🔗](#msfs-scenery-library-no-region) {#msfs-scenery-library-no-region}

**Note: This issue was fixed with the Little Navmap beta 2.8 versions. See page [Alex' Projects](https://albar965.github.io/index.html) for latest releases of stable and beta versions.**

#### Error reading `.../Content.xml“ on line 6 column 13: premature end of document` when loading the scenery library [**▲**](#top) [🔗](#msfs-scenery-library-content-xml) {#msfs-scenery-library-content-xml}

**Note: This issue was fixed with the *Little Navmap* beta 2.8 versions. See page [Alex' Projects](https://albar965.github.io/index.html) for latest releases of stable and beta versions.**

#### After adding a userpoint: Error `Caught exception in file ..\atools\src\gui\application.cpp line 83 what UNIQUE constraint failed: userdata.userdata_id` [**▲**](#top) [🔗](#userdata-exception) {#userdata-exception}

**Note: This root issue was fixed with the Little Navmap stable version 2.8.8. See page [Alex' Projects](https://albar965.github.io/index.html) for latest releases of stable and beta versions.**

#### After importing userpoints from CSV: Error `Caught exception in file ..\atools\src\gui\application.cpp line 83 what UNIQUE constraint failed: userdata.userdata_id` [**▲**](#top) [🔗](#userdata-exception-csv) {#userdata-exception-csv}

**Note: This issue was fixed with the Little Navmap stable version 3.0.4. See page [Alex' Projects](https://albar965.github.io/index.html) for latest releases of stable and beta versions.**

#### Loading of the scenery library database takes a long time [**▲**](#top) [🔗](#loading-too-long) {#loading-too-long}

First exclude the main folders of *Little Navmap* from anti-virus scanning. Anti-virus can significantly slow down reading the scenery library.

Therefore, it is recommended to exclude the following directories from scanning:

- Disk cache for map tiles: ``C:\Users\YOURUSERNAME\AppData\Local\.marble\data``
- Scenery library and userpoint databases\ ``C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel\little_navmap_db``

These directories do not contain executable files and are accessed frequently by *Little Navmap*.

Do the same for you flight simulator scenery libraries:

* **X-Plane:** `Custom Data`, `Custom Scenery` and `Global Scenery` (X-Plane 12 only).
* **MSFS:** `Community` and `Official\\One Store` or `Official\\Steam`.
* **FSX and P3D:** `Scenery` and `Addon scenery`.

Alternatively you can exclude unneeded folders in *Little Navmap* from scanning by adding them in option on
page `Scenery Library Database`.

#### X-Plane 12 airports appear with a gray icon [**▲**](#top) [🔗](#xp-gray-airports) {#xp-gray-airports}

_Little Navmap_ considers the X-Plane airport flag `3D` which indicates that an airport also contains 3D objects.
This can be a lamp post or a fully modeled terminal building. The full explanation is here:
[Little Navmap User Manual View -> Airports -> Empty](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#empty).

Some major airports in X-Plane 12 are wrongly missing the 3D flag and _Little Navmap_ shows them as `empty`.
This affects major airports like KSEA, EDDF or EDDS.

You can disable this behavior in _Little Navmap_ options on page `Map`.
Uncheck `Consider all X-Plane airports not being 3D empty` and maybe `Treat empty airports special`
as well if you don't care about this functionality at all.


#### AI and/or multiplayer aircraft disappear early when zooming out [**▲**](#top) [🔗](#ai-zoom-out) {#ai-zoom-out}

Some traffic or multiplayer tools do not set the on-ground status correctly. *Little Navmap* hides aircraft being on
ground early when zooming out to avoid cluttered up airports.

You can disable this in the options on page `Map Display`.
Look for the section `AI or Multiplayer Aircraft` and deselect `Hide Aircraft on Ground`.

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

#### Is there a night or dark mode for the user interface [**▲**](#top) [🔗](#night) {#night}

If you'd like to use a dark mode or night mode when flying: Enable this in menu `Window` -> `Styles` -> `Dark`

The darkness of the map window can be adjusted in options on page `Map` -> `Map dimming in dark style`.

#### Text and/or icons appear very small on a 4k or other high resolution monitor [**▲**](#top) [🔗](#highdpi) {#highdpi}

Go to menu `Tools` -> `Options` and then to page `Display and Text`. Check `Enable high DPI monitor support` and restart _Little Navmap_.

#### How can I make the map window bigger [**▲**](#top) [🔗](#map-window) {#map-window}

there are several options:

- Close the search window and/or close search options in airport search (three lines or "hamburger" button). These take a lot of space.
- Undock the search window, i.e. remove it from them main window and/or close it. Normally not needed while flying anyway. I have it only open for flight planning.
- Undock the map and move it to another screen if available.
- Take the search window and drop it on the progress window. This will create a window with search and progress tabs at the bottom.

Here are some tips for undocking (Ctrl-key, etc.) and moving around in the interface:
[Little Navmap User Manual - Dock Windows](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/DOCKWINDOWS.html)

#### How can I make the map window larger [**▲**](#top) [🔗](#resize-map) {#resize-map}

The issue is similar to the one above.

It's usually the search window which keeps the map from expanding.
Disable all unneeded search options in the "hamburger" drop down menu on the top right in the airport search. Do the same for navaid search.

Additionally undock the search window and let it float. Since the search is usually only needed for flight preparation you can close the search dock window when flying (`Alt-1`). You can always open it quickly by hitting `F4`.

#### I cannot resize a dock window [**▲**](#top) [🔗](#dock-frozen) {#dock-frozen}

Freezing dock windows. Try one of the following:

1. Main menu -> `Window` -> `Reset Window layout`
2. Double click on a window title to undock it, i.e. bring it into floating state. Double click again to put it back. Resizing should be allowed now.

Another reason can be the search window taking up too much space:

1. Switch around in the search tabs or undock and dock one back by double clicking into the title bar.
1. Undock the search window and let it float. This dock window is very expansive and squeezes other docks into the corners even when search options are disabled.

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

#### The map moves jerky or I see stutters in _Little Navmap_ while scrolling or zooming [**▲**](#top) [🔗](#jerky-map) {#jerky-map}

You might have selected too many details. Go to main menu -&gt; `View` -&gt; `Details` -&gt; `Default Detail`.
Recommended is to disable all unneeded features like airways when flying.

#### I cannot remove a traffic pattern, a holding or measurement lines [**▲**](#top) [🔗](#remove-pattern) {#remove-pattern}

You have to right-click on the hotspot and select `Remove ...` from the context menu.

See [Little Navmap User Manual - Mouse Click Hotspots](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MAPDISPLAY.html#mouse-click-hotspots)
for more information.

#### Map is fuzzy and not updating [**▲**](#top) [🔗](#map-no-update) {#map-no-update}

This can have several reasons:

1. The server for the online map is down. These are free services where I have no influence on availability. Wait a few hours and they are usually back.
2. Your internet connection is broken or your firewall forbids network access for _Little Navmap_.

#### Map background is black [**▲**](#top) [🔗](#map-black) {#map-black}

Something went wrong when installing _Little Navmap_. Most likely the directory `data` is missing.

**Use one of the provided installer packages for Windows to avoid issues like this.**

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

#### Can I run the program on another client computer across the network [**▲**](#top) [🔗](#networking) {#networking}

Yes. You can even mix different systems like using macOS for _Little Navmap_ and Windows for flying.
The client computer does not need a SimConnect or simulator installation at all.

See [Little Navmap User Manual - Network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/NETWORK.html)
in the manual.

#### Can I see the program when running FSX, P3D, MSFS or X-Plane fullscreen [**▲**](#top) [🔗](#sim-fullscreen) {#sim-fullscreen}

No. But you can:

1. Use an old second monitor for the map before throwing it away.
2. Take an old and slow notebook and use it in networked mode. _Little Navmap_ is happy with 2 GB of ram and there are options to speed up map display. This notebook can run Linux or macOS. Have a look at the manual here: [Little Navmap User Manual - How to run a network Setup](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INTRO.html#network-setup)
3. Run the simulator in seamless window mode. Then you can `Alt+Tab` between applications.
4. Try one of the tools mentioned in this thread: [Avsim - littlenavmap in vr](https://www.avsim.com/forums/topic/627045-littlenavmap-in-vr/).
5. Use the web server in *Little Navmap* to show the map and aircraft on a smartphone, tablet or a remote computer.
   See [Little Navmap User Manual - Web Server](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/WEBSERVER.html).

#### The map window is not visible or shows only a gray surface [**▲**](#top) [🔗](#map-hidden) {#map-hidden}

This can happen for various reasons like a crash or if you change the option [Little Navmap User Manual - Allow to undock the map window](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/OPTIONS.html#allow-to-undock-the-map-window) in the options dialog.

Use menu `Window` -> [Little Navmap User Manual - Reset Window Layout](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#reset-layout-menu) in the main menu to clean up the window layout.

#### The map theme StamenTerrain shows gray blocks on the map [**▲**](#top) [🔗](#stamenterrain) {#stamenterrain}

You see map tiles with the message `These basemap tiles will no longer be available as of October 31, 2023. The site administrator can upgrade to the new map at stamen.com/faq.`.

The free StamenTerrain map theme is discontinued.

**Note that the map theme `StamenTerrain` was replaced with the map theme `Stadia StamenTerrain` in *Little Navmap* 3.0.4.**

Close _Little Navmap_ now and delete the folders `stadiastamenterrain` and `stamenterrain` folders to clear the cache.


#### The map display looks too clutterd and overloaded [**▲**](#top) [🔗](#clutter) {#clutter}

Unlike static charts, *Little Navmap* allows you to customize the way the map is displayed.

Lower the detail level in menu `View` or deselect uneeded features you do not need for the task.
Hide airways when flying, for example.

See [Little Navmap User Manual - Map Display - Declutter](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MAPDISPLAY.html#map-clutter) for more information.

#### Where is the options menu item on macOS [**▲**](#top) [🔗](#prefs) {#prefs}

Options can be accessed in the application menu `Little Navmap` -&gt; `Preferences`.

#### I get a message complaining about an unidentified developer on macOS [**▲**](#top) [🔗](#macos-unidentified-developer) {#macos-unidentified-developer}

First move the extracted archive out of the folder `Downloads`.
Then right click or `Ctrl+Click` on the application and select `Open`. Confirm the dialog to run the program.

You probably have to enter an administrator name and password once. The program can be started normally after this procedure.

See [Little Navmap User Manual - Installation - macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos) and
[Safely open apps on your Mac](https://support.apple.com/HT202491).

#### Cannot run _Little Navmap_ or _Little Xpconnect_ on macOS Catalina or later [**▲**](#top) [🔗](#catalina) {#catalina}

A security feature in macOS forbids the execution of unsigned libraries or apps.

See [Little Navmap User Manual - Installation - macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos),
[Little Navmap User Manual - Little Xpconnect](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html) and
[Safely open apps on your Mac](https://support.apple.com/HT202491).

Alternatively, you can download the tool [Mac OS - CleanUp Quarantine Flags](https://forums.x-plane.org/index.php?/files/file/79828-mac-os-cleanup-quarantine-flags/) from x-plane.org, place this in the X-Plane base folder and run it to clean up the flags on all plugins at once.

#### To open _Little Navmap_ you need to install Rosetta [**▲**](#top) [🔗](#rosetta) {#rosetta}

*Little Navmap* (unlike Little Xpconnect) is not compiled to run natively on Apple Silicon. You need to install Rosetta. The impact on performance is negligible. See [How to install Rosetta](https://support.apple.com/HT211861).

<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

#### How do I load a flight plan in X-Plane [**▲**](#top) [🔗](#load-xplane) {#load-xplane}

See [Little Navmap User Manual - Export Flight Plan as FMS for X-Plane 11 and 12](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/MENUS.html#export-flight-plan-as-x-plane-fms-11) for more information.

#### X-Plane shows a warning or error message after trying to load a flight plan in the stock GPS or FMS [**▲**](#top) [🔗](#fms-export-issues) {#fms-export-issues}

See the user manual for more information about these issues: [Little Navmap User Manual - FMS Export Issues](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/FLIGHTPLANFMT.html#fms-export-issues).

#### A pop up window says my versions are not compatible Little Xpconnect needs to be updated [**▲**](#top) [🔗](#xpconnect-install) {#xpconnect-install}

Pop up window says my versions are not compatible and I need to upgrade _Little Xpconnect_ despite having the latest _Little Xpconnect_ installed.

There is probably an old version of _Little Xpconnect_ installed wrongly somewhere in your X-Plane plugins path.
Maybe it was installed accidentally in the plugins base path without the _Little Xpconnect_ folder structure.

Check if there is another folder with the _Little Xpconnect_ executable (`win.xpl`, `mac.xpl` or `lin.xpl` depending on operating system) around or if the file is stored in the plugins folder on the top level.

You can see the path of the (wrongly) loaded plugin in the X-Plane plugin manager.

See [Little Navmap User Manual - Little Xpconnect](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html)
for more information.

#### Weather in X-Plane does not match what _Little Navmap_ displays [**▲**](#top) [🔗](#xplane-weather) {#xplane-weather}

The X-Plane weather interface is limited.

_Little Navmap_ can only read the X-Plane 11 ``METAR.rwx`` and ``global_winds.grib`` files as well as the X-Plane 12 ``Output/real weather`` folder for weather information. Only the nearest weather report for an airport is available in some cases.

There is no information available how and if X-Plane interpolates weather between stations. Therefore, the nearest weather and even the station weather might not match.

#### *Little Navmap* shows an error message about file `.../X-Plane 11/METAR.rwx` or directory `.../X-Plane 12/Output/real weather` does not exist [**▲**](#top) [🔗](#xplane-weather-missing) {#xplane-weather-missing}

*Little Navmap* reads weather information the file or directory and either one is missing.
This can happen if you never have used X-Plane with real weather.

Start X-Plane once using real weather as a workaround.
Note that you will get wrong weather indications if you used X-Plane with real weather some time ago and stopped doing so.

Functions that trigger access to X-Plane weather files:

- Menu `Weather` -> `Airport Weather Source` -> `Flight Simulator`
- Menu `Weather` -> `Wind Source` -> `Flight Simulator`
- All `Flight Simulator` boxes on options page `Weather`

#### I get an error message about missing directories when loading X-Plane scenery [**▲**](#top) [🔗](#missing-xplane-scenery) {#missing-xplane-scenery}

You have `Read inactive Scenery Entries:` disabled in the scenery loading dialog and X-Plane's `scenery_packs.ini` contains stale entries. Fix this by restarting X-Plane which will remove the old entries.

You might as well enable `Read inactive Scenery Entries:` which will cause _Little Navmap_ to ignore `scenery_packs.ini` and read all. See [Little Navmap User Manual - Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html).

#### Airports missing in X-Plane scenery after reloading [**▲**](#top) [🔗](#airports-missing-xplane-scenery) {#airports-missing-xplane-scenery}

If you have `Read inactive Scenery Entries:` enabled: Restart X-Plane so that it can update the `scenery_packs.ini`.

See [Little Navmap User Manual - Load Scenery Library Dialog](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/SCENERY.html).

#### I still see an older AIRAC cycle in the Scenery Libary menu for X-Plane [**▲**](#top) [🔗](#update-navdata-cycle) {#update-navdata-cycle}

You have to reload the scenery library in *Little Navmap* after updating the navdata in the simulator.
*Little Navmap* will show the correct cycle and navdata after reloading.

#### X-Plane crashes and the last log message is `--=={This application has crashed because of the plugin: Little Xpconnect/64/*.xpl}==--` [**▲**](#top) [🔗](#xpconnect-crash) {#xpconnect-crash}

This crash is caused by a wrong installation of *Little Xpconnect*. You either installed the plugin manually and did not keep the folder structure or you installed it more than once using different folder names.

1. Check for duplicate installations of *Little Xpconnect* and remove them.
2. Then remove the file `.../X-Plane 11/Resources/plugins/win.xpl` (`mac.xpl` on macOS and `lin.xpl` on Linux) if present.
3. Reinstall *Little Xpconnect* correctly. See also [Little Navmap User Manual - Little Xpconnect](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html).


<!-- ================================================================================================ -->
<!-- ================================================================================================ -->

*[🔗]: Get permalink
*[▲]: Go to top
