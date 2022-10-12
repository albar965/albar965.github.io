---
layout: post
title:  Little Navmap 2.8.1.beta released
date:   2022-10-12 10:00:00 +0200
categories: release
---

### Direct Download

[**► Windows** - LittleNavmap-win-2.8.1.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.1.beta/LittleNavmap-win-2.8.1.beta.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.1.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.1.beta/LittleNavmap-macOS-2.8.1.beta.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.8.1.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.1.beta/LittleNavmap-linux-20.04-2.8.1.beta.tar.gz)<br/>
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.8.1.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.1.beta/LittleNavmap-linux-18.04-2.8.1.beta.tar.gz)

### Alternative Download Locations

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g) - **Look into folder `Beta`.**

## Notes

This is a public beta release which is feature complete but might have issues. Furthermore, some
translations are incomplete, new help links do not work and the user manual is not adapted yet to
the new features. Feel free to ask if something is not clear.

This changelog also explains new features. First read here if anything is not clear.

**First a big thank you to all who reported bugs and issues!**

**This version is ready MSFS SU10 and for X-Plane 12.**

**X-Plane users: In any case reinstall Little Xpconnect from this package. Otherwise fuel flow
calculation or other functions might not work correctly in Little Navmap.**

**Little Navmap probably reminds you to reload scenery library databases after updating. Please do
so to benefit from new features and bug fixes.**

Note that certain settings and table layouts are reset to default after updating.

A few keyboard shortcuts have changed.

**Create a backup of your settings and database folder just in case you'd like to go back to the
stable release. Backup `ABarthel` in `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel` on Windows
and `$HOME/.config/ABarthel` on Linux and macOS.**

Alternatively use one of the scripts `Little Navmap Portable.cmd` (Windows),
`Little Navmap Portable.command` (macOS) and `Little Navmap Portable.sh` (Linux) to let
Little Navmap store all settings, databases and caches in the installation folder (portable mode).

Or see [Multiple Installations](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/INSTALLATION.html#multiple-installations)
for information how to run the stable and alpha versions in parallel.

Some features like MSA, vertical paths or en-route holdings require either X-Plane, the included
AIRAC 1801 database or a Navigraph database newer or equal than AIRAC 2201.

See here for a [list of issues done](https://github.com/albar965/littlenavmap/milestone/11?closed=1).
More issues are solved than publicly known on Github. This changelog lists the most important.

Please report if something does not work or does not work as expected.

## Known Issues

* Scenery library folders linked with macOS aliases do no work. Use symbolic links instead.
* En-route holding courses were not correct due to an error in declination calculation. This was
  fixed with AIRAC cycle 2210.
* Running Little Navmap with autoconnect for P3D, FSX or MSFS for several hours without starting
  the simulator leaks a small amount of resources. This is mitigated by reducing the connection
  rate automatically after 30 minutes. Disable autoconnect or quit the program to avoid this.

## Changes from 2.8.0.beta to 2.8.1.beta

### Scenery Library

* Now supporting symbolic links (all OS), Windows junctions and Windows shortcuts (`.lnk` files) in
  MSFS `Community` and X-Plane `Custom Scenery` folders. Note that macOS aliases are not supported.
  Use symbolic links instead.
* Fixed exclude file, exclude directory and exclude add-on recognition to work with symbolic
  links, shortcuts or junctions.

### X-Plane 11 and 12

* Little Xpconnect now supports Apple Silicon / ARM 64 machines. Note that this is untested.
  Please report if you run into issues. [#923](https://github.com/albar965/littlenavmap/issues/923)
* The included Little Xpconnect might not work with older macOS version. You can use Xpconnect from
  the previous release if needed
* Reinstall the Little Xpconnect plugin from this or the last package. Otherwise fuel flow
  calculation or other functions might not work in Little Navmap.
* Now supporting X-Plane 12 METAR airport weather reports and GRIB winds aloft by checking folder
  `Output/real weather`. Added folder configuration in options on page `Weather Files`. [#926](https://github.com/albar965/littlenavmap/issues/926)
* Fixed issue where X-Plane 12 add-on airports were not read from `Custom Scenery` in some cases.
  Airports not included in the file `scenery_packs.ini` are now treated like enabled. [#927](https://github.com/albar965/littlenavmap/issues/927)
* Corrected userpoint export and import to and from `user_fix.dat` for X-Plane 11 and 12. Exporting
  and importing waypoint flags and full name for X-Plane 12 now. The Little Navmap Userpoint tags
  field is used to load and save the ID of the airport terminal area as well as the waypoint type.
  Waypoint type is based on ARINC 424 field type definition 5.42.
  Spaces are replaced by underscores '_' for userpoint tags. Alternatively double quotes and
  spaces can be used.
  Example tags: `EDDF V__` is a VFR Waypoint at airport EDDF, `ENRT "I  "` is an en-route unnamed
  charted intersection and `ENRT R__` is an en-route named intersection.
* Made reading of X-Plane `scenery_packs.ini` more error tolerant for XP12. Now printing warnings
  into the log file instead of failing with an exception.

### Flight Plan

* Magnetic course of flight plan legs is now always calculated using normal magnetic declination. VOR
  calibrated declination is ignored. The content of the chapter
  [User Manual - 27.3. Magnetic Declination](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/FLIGHTPLAN.html#magnetic-declination)
  is not valid anymore. Other options to display VOR inbound and outbound magnetic course are now
  available.
* Added optional inbound and outbound VOR course to aircraft progress display considering VOR
  calibrated declination. This is always shown when the next or last waypoint is a VOR, VORDME or
  VORTAC.
  Enable this in `Tools` -> `Aircraft progress display options` -> branch `Next Waypoint` ->
  `Leg course from` and `Leg course to`.
* Removed merging (e.g. grouping of multiple deletions into one) of same changes for undo or redo
  in flight plan operations. Now single changes can be undone.
* Fixed issues where selection in flight plan table was cleared after undo or delete operations
  making modifications using keyboard shortcuts more difficult.
  Now keeping selection stable during various operations like undo/redo and others.
* Added option to use either Pilot Id or username for SimBrief download.
* Removed `Ignore declination of VOR and other radio navaids` on options page `Flight Plan` since
  there are other ways to display VOR inbound and outbound magnetic course now.

### Map

* Added option on page `Map Display Labels` to show start and end course labels also
  considering VOR calibrated declination. Useful when flying VOR to VOR. Labels are shown at a
  fixed position at start or end of flight plan legs.
* Outbound and inbound VOR calibrated declination now ignored per default in normal route leg
  course shown in the moving labels.
* Options `Show Selected Altitude Range` and `Show Turn flight path` in menu `View` are disabled
  on first startup after a new installation.
* Fixed issues where the turn path disappeared after user changed simulator time. Note that the
  turn path now requires the updated Little Xpconnect plugin for X-Plane to get accurate timestamps.
* Fixed detailed label display for the 5 nearest AI aircraft which are 10 NM near user and within
  5000 ft of altitude.
* Criteria for nearby AI labels can be changed in configuration file in group `[Map]` and keys
  `MaxNearestAiLabels`, `MaxNearestAiLabelsDistNm` as well as `MaxNearestAiLabelsVertDistFt`.
* Adjusted AI aircraft label visibility depending on aircraft ground status and details.
* Added configuration file options for online shadow aircraft detection in group `[Options]` keys
  `MaxShadow...`. Tuned shadow aircraft detection. Increased allowed heading difference.
* Final course for measurement lines at VOR is now calculated based on VOR calibrated declination.
* Fixed incorrect endurance range display and wrong warnings when simulator time is changed.

### Undo / Redo

* Added progress dialog for long undo operations in logbook and userpoints which can happen when
  undoing the import or a bulk change of large datasets. Operations can be canceled now.
* Fixed performance issues for undo and redo operations resulting in frozen program.
* Fixed issue where import of logbook or userpoint data resulted in a messed up undo state.

### User Interface

* Now showing the canonical path (i.e. symbolic links, Windows shortcuts and Windows junctions
  resolved to the real path) for airport add-ons in information display. This means that the real
  installation location of linked add-ons is shown now.
* Moved option `Remove duplicate aircraft from online service and simulator` to page `Online Flying`.
* Added option for tooltips in menus which is off per default. Option to show tooltips in whole program
  is now reset to enabled. Not available on macOS.
* Fuel sampling is now based on simulator time for more accuracy and requires the updated
  Little Xpconnect plugin for X-Plane. No actions required for FSX, P3D and MSFS.
* Resetting flight plan table, airport search result table and navaid search result table view on
  update to 2.8.1.beta now to avoid display of wrong columns or missing table columns.
* Fixed issues with some labels not updating after style change.
* Fixed memory leak caused by AI aicraft collection resulting in crashes. These appeared with a
  message containing `std::bad_alloc` in the log file.
* Fixed occasional crash on exit.
* Updated Italian translation by Flavio Borgna.
* Updated German translation.
* More small user interface improvements.

### Command Line and Startup

* Added scripts for portable execution: `Little Navmap Portable.cmd` (Windows),
  `Little Navmap Portable.command` (macOS) and `Little Navmap Portable.sh` (Linux).
  All settings, databases and cache folders are saved to the installation folder when starting the
  program with these scripts.
* New command line parameter `-c`, `--cache-path` to define the location of the Marble map tile
  cache folder. Start Little Navmap with the option `-h` for help on all command line options.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.1.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
