---
layout: post
title:  Little Navmap 2.8.2.beta released
date:   2022-11-18 14:00:00 +0100
categories: release
release-version: 2.8.2.beta
---

### Direct Download

<!-- ============================================================================== -->
<!-- ============================================================================== -->

<!-- LittleNavmap-win32-2.8.2.beta.zip -->
[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-{{ page.release-version }}.zip](https://github.com/albar965/littlenavmap/releases/download/v{{ page.release-version }}/LittleNavmap-win64-{{ page.release-version }}.zip)<br/>
<!-- LittleNavmap-macOS-2.8.1.beta.zip -->
[**► macOS** - LittleNavmap-macOS-{{ page.release-version }}.zip](https://github.com/albar965/littlenavmap/releases/download/v{{ page.release-version }}/LittleNavmap-macOS-{{ page.release-version }}.zip)<br/>
<!-- LittleNavmap-linux-22.04-2.8.2.beta.tar.gz -->
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-{{ page.release-version }}.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v{{ page.release-version }}/LittleNavmap-linux-22.04-{{ page.release-version }}.tar.gz)

**Alternative Download Locations - Look into folder `Beta`:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-{{ page.release-version }}.zip](https://github.com/albar965/littlenavmap/releases/download/v{{ page.release-version }}/LittleNavmap-win32-{{ page.release-version }}.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-{{ page.release-version }}.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v{{ page.release-version }}/LittleNavmap-linux-20.04-{{ page.release-version }}.tar.gz)

<!-- ============================================================================== -->
<!-- TODO ADD CHANGELOG TEXT starting with NOTES ================================== -->
<!-- ============================================================================== -->


## Notes

This is a public beta release which is feature complete but might have small issues.

This changelog also explains new features. First look here if anything is not clear or missing.

**First a big thank you to all who reported bugs and issues!**

**This version is ready for MSFS SU11 and for the X-Plane 12 beta. See known issues below.**

**X-Plane users: In any case reinstall Little Xpconnect from this package. Otherwise fuel flow
calculation or other functions might not work correctly in Little Navmap.**

**Little Navmap probably reminds you to reload scenery library databases after updating. Please do
so to benefit from new features and bug fixes.**

Note that certain settings and table layouts are reset to default after updating.

**Use one of the scripts `Little Navmap Portable.cmd` (Windows),
`Little Navmap Portable.command` (macOS) and `Little Navmap Portable.sh` (Linux) to let
Little Navmap store all settings, databases and caches in the installation folder (portable mode) to try out the program.**

Some features like MSA, vertical paths or en-route holdings require either X-Plane, the included
AIRAC 1801 database or a Navigraph database newer or equal than AIRAC 2201.

See here for a [list of issues done](https://github.com/albar965/littlenavmap/milestone/11?closed=1).
More issues are solved than publicly known on Github. This changelog lists the most important.

Please report if something does not work or does not work as expected.

## Known Issues MSFS

* **Active pause in MSFS breaks the connection and does not allow to reconnect.
  Use the Escape key for normal pause to avoid problems.**
* **Some third-party plugins like traffic add-ons might cause connection issues when used together
  with Little Navmap and MSFS.**
* **The autoconnect function of Little Navmap does not work reliably with MSFS. Connect manually
  after starting your flight if you see problems.**
* **Little Navconnect can have the same issues as Little Navmap since it always uses
  autconnect. Start the simulator first and then Little Navconnect.**

## Known Issues

* Running Little Navmap with autoconnect for P3D, FSX or MSFS for several hours without starting
  the simulator leaks a small amount of resources. This is mitigated by reducing the connection
  rate automatically after 30 minutes. Disable autoconnect or quit the program to avoid this.
* En-route holding courses were not correct due to an error in declination calculation. This was
  fixed with AIRAC cycle 2210.

## Changes from 2.8.1.beta to 2.8.2.beta

### Windows Builds

**There are two builds of Little Navmap and Little Navconnect for Windows available now. :**

* **Windows 64-bit:** For MSFS and all X-Plane versions.
* **Windows 32-bit:** For FSX and Prepar3D.

Note that Little Navmap and all related programs are interoperable across the network (Little Navmap and Little Navconnect)
as well as the X-Plane plugin (Little Navmap, Little Navconnect and Little Xpconnect).

### User Manual and Help

* Updated English [Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/).
  Adapted to new features and first draft is available online as well as included as PDF
  (see [User Manuals - Beta Releases](https://albar965.github.io/manuals.html#beta)).
* All help buttons now point to the related chapters in user manual.

### X-Plane

* Little Xpconnect version 1.0.30 now adds items in X-Plane plugin menus to set AI fetch and performance options. See README.txt or
  [Little Navmap User Manual - Little Xpconnect](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/XPCONNECT.html).
* Internal changes in Little Xpconnect to mitigate probable simulator stutters with X-Plane 12.
* Change Little Xpconnect build for Linux to use a minimum of dependencies to avoid issues with X-Plane 12.
* Calculating RNP value now correct for procedures from X-Plane data.

### MSFS

* Fixed issue where airport city names were missing since MSFS SU11 beta. Note that country names
  are not available from the simulator.
* Changed fuel detection for MSFS. An airport now gets Avgas and Jet A availability assigned if it
  has a fuel pad (which has no fuel type information). Now showing only `Fuel` for MSFS if both are
  available. [#918](https://github.com/albar965/littlenavmap/issues/918)
* Added GFP flight plan export for TDS GTNXi and MSFS IniBuilds Airbus.
* Added workaround for wrong on-ground state in MSFS AI.

### General

* Added option to hide dock window title bars in menu `Window` -> `Show Dock Window Title Bars`.
  Uncheck this to get more screen space inside the main window.
* Added function `Map` -> `Goto User Aircraft` to the toolbar.
* Copied `Map` -> `Delete Aircraft Trail` back to the toolbar. Enabling question dialog for this
  action again to avoid accidental deletion.
* Added zoom out on takeoff option. See `Options` on page `Simulator Aircraft` checkbox `Zoom out
  on takeoff`.
* Added cleanup function for logbook which removes invalid logbook entries that can result from
  pattern work or repeated approches. Main menu `Logbook` -> `Cleanup Logbook Entries` or logbook
  table context menu.
* Added menu item `Aircraft` -> `Warning for Aircraft Type Mismatch` which is enabled per default.
  This allows to disable the warnings for aircraft types which are often wrong from the simulator.
* The default performance profile which is created when using menu `Aircraft` -> `New Aircraft Performance`
  is now based on the data of a Cessna C172 and named `Example Performance Profile`. This avoids warning
  messages when using a new performance profile. Adapt it to your aircraft as needed.
* Changed aircraft performance type error to warning. Removed warning about wrong aircraft type
  from fuel report.
* Now clearing undo/redo data in logbook and userpoint databases if updating from 2.8.1.beta. This
  happens only once during update and was implemented due to a bug in 2.8.1.beta which could leave
  the databases in inconsistent state.
* Fixed parsing of coordinates for ARINC formats when lat/lon is swapped in the user interface.
* Corrected display of endurance which differed from map and progress display. Now using 10 second
  rolling average for both values.
* Removing artificial waypoints from procedure preview for tooltip, context menu and information to
  fix duplicate waypoint entries in context menu. This type of waypoints is present in the database
  but should not be shown in the user interface.
* Fixed issue where paths were stored with the wrong separators in the scenery library database on
  Windows.
* Removed built-in map legend. This now available either online or in the included PDF user manual.
  The HTML manual can now be downloaded from the [User Manual Page](https://albar965.github.io/manuals.html).
* Fixed missing tooltip and information click for RNP/GLS approaches when having ILS disabled.
* Fixed issue where changing AI aircraft TAS labels affected other settings.
* Now clearing out departure and destination alternates from SimBrief to avoid strange routing.
* Now always using IFR for SimBrief imported flight plans. For all other functions the current
  IFR/VFR state is kept. [#943](https://github.com/albar965/littlenavmap/issues/943)
* Now downloading track automatically after changing sources in `Flight Plan` ->
  `Oceanic Track Sources`.
* Fixed several issues where values were not reset after using `Restore Defaults` in options dialog.
* Adjustments to map display features like `Show selected altitude range` (green banana), turn path
  indicator `Show turn flight path` and AI aircraft labels.
* Changed layout and texts in search dock window to allow a slightly smaller window.
* Updated stock icon translations. Translated userpoint types now shown in tooltip and information
  tab.
* Fixed hanging wait cursor after userpoint or logbook import exception.
* German translations updated.
* Updated French translation by Patrick.
* Many more user interface and text corrections and improvements.
* Added command line language code option `-l` or `--language` for user interface.

### Wind

* Resetting wind source to NOAA on update now. Adjust as needed.
* Changed user interface for wind for more consistency. Removed wind checkbox from fuel report
  header and added drop down box which mirrors the items in menu `Weather` -> `Wind source`.
* Added manual wind layer altitude to fuel report which is independent from flight plan cruise
  altitude.
* Improved indications in wind tooltip to show manually selected wind altitude layer, altitude of
  shown wind barbs and flight plan cruise altitude indication.
* Performance optimizations. Wind barbs now drawn sparse at higher zoom levels and near the
  poles. [#940](https://github.com/albar965/littlenavmap/issues/940)

### macOS

* Fixed issues with macOS aliases. These can now be used in X-Plane `Custom Scenery`.
* Default style on macOS after first start is now Fusion and also reset on update since the default
  macOS style is too clunky.
* Removed check for wrong macOS version on program startup.
* Raised macOS minimum requirement to 10.13 High Sierra.





<!-- ============================================================================== -->
<!-- TODO END OF CHANGELOG TEXT =================================================== -->
<!-- ============================================================================== -->

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v{{ page.release-version }}/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
