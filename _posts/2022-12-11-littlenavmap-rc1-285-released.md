---
layout: post
title:  Little Navmap 2.8.5.rc1 released
date:   2022-12-11 13:00 +0100
categories: release
release-version: 2.8.5.rc1
---

### Direct Download

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.5.rc1.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.5.rc1/LittleNavmap-win64-2.8.5.rc1.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.5.rc1.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.5.rc1/LittleNavmap-macOS-2.8.5.rc1.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.5.rc1.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.5.rc1/LittleNavmap-linux-22.04-2.8.5.rc1.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.5.rc1.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.5.rc1/LittleNavmap-win32-2.8.5.rc1.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.5.rc1.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.5.rc1/LittleNavmap-linux-20.04-2.8.5.rc1.tar.gz)

## Notes

This is a release candidate for the next major release of Little Navmap.

**This version is ready for MSFS SU11 and for the X-Plane 12 beta. See known issues below for MSFS.**

**The user manual is available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/)**.

**See here for user manual downloads:
[User Manuals - Beta Releases](https://albar965.github.io/manuals.html#beta).**

**This changelog also explains new or moved/changed features.
First look here if anything is not clear or missing.**

**X-Plane users: Reinstall Little Xpconnect from this package. Otherwise fuel flow
calculation, X-Plane weather information or other functions might not work correctly in Little Navmap.**

**Little Navmap probably reminds you to reload scenery library databases after updating. Please do
so to benefit from new features and bug fixes.**

Note that certain settings and table layouts are reset to default after updating. These are
mentioned in the list of changes below.

See here for a [list of issues done](https://github.com/albar965/littlenavmap/milestone/11?closed=1).
More issues are solved than publicly known on Github. This changelog lists the most important.
Please report if something does not work or does not work as expected.

A big thank you to all who reported bugs and issues!

## Known Issues MSFS

* **Active pause in MSFS breaks the connection and does not allow to reconnect.
  Use the key `Esc` for normal pause to avoid problems.**
* **Some third-party plugins like traffic add-ons might cause connection issues when used together
  with Little Navmap and MSFS.**
* **The autoconnect function of Little Navmap does not work reliably with MSFS. Connect manually
  after starting your flight if you see problems. Little Navconnect can have the same issues as
  Little Navmap since it always uses autoconnect. Start the simulator first and then Little Navconnect.**

## Changes from 2.8.4.beta to 2.8.5.rc1

### Flight Plan, Export and Procedures

* Update flight plan saving to files. Changes are now kept in a background file without asking for
  save. This is now also true if a plan was already saved to a file. You can disable this behavior on
  options page `Startup and Updates` by disabling `Load last used flight plan`. The temporary plan is
  stored in the settings folder as file `little_navmap.lnmpln` besides `little_navmap.ini`.
* Corrected export format MSFS IniBuilds A310 and updated default export paths.
* Fixed issues where the table layout in multi export options was lost at times.
* `Avoid overwriting Flight Plan with not matching departure and destination` now enabled per
  default on new installations. You can disable this setting in the options dialog on page `Flight
  Plan` if needed.
* Fixed regression where waypoint altitude was missing in X-Plane FMS flight plan export.
* Fixed safe altitude not updated in flight plan table if elevation profile window is hidden. Now
  always calculating elevation data in background.
* Improved airport matching between simulator and navdata when selecting procedures. Example:
  Scandinavian Mountains (ICAO ESKS) was not found since it has an internal X-Plane ident of XESV5
  but its ICAO code is equal to the internal X-Plane ident ESKS for the closed Strängnäs Airbase.
  Now relying more on coordinates when checking for airports using official ids.
* Fixes for flight plan export. Now saving display ident (ICAO, IATA or others) instead of X-Plane
  internal for airport into LNMPLN files now. This eases exchange of plans with other simulators.
* Fixed export for X-Plane FMS to use ADEP/ADES keywords when using procedures at airport.
* Corrected display for procedures usable with all or parallel runways in procedure search tab.
  The tree display now shows a list of runways or `All` again instead of a wrong single runway.
* Adjusted warning for descent fuel flow to allow slightly more fuel flow than in cruise phase.

### Map

* Adjusted airport drawing. Corrected size of minor airport symbols at higher zoom levels. Airports
  are now shown up to zoomlevels of 8000 km for Spherical and 10000 km for Mercator projection.
* Smaller font for airport labels on large zoom levels.
* Adjusted size of airport add-on highlight on map.
* Now showing top of climb and top of descent on map and in elevation profile even if very close to
  departure or destination.

### Weather

* Weather reading for X-Plane 12 fixed which failed to recognize new files if the weather folder
  was intially empty. This affected METAR and GRIB (winds aloft) files.
* Added warning message if X-Plane 11 or 12 weather files cannot be read due to broken weather
  paths or wrong simulator base path in dialog `Load Scenery Library`.
* Changes in display of wind barbs to avoid flooding the map with symbols. More optimizations to
  speed up map rendering at high zoom levels.

### User Interface

* Fixed wrong display of airways in tooltip and information tab on NDB and VOR having no airways
  attached.
* Changed status bar to avoid growing and shrinking fields. Now keeping maximum size to avoid jitter.
* Now keeping the undock map window state to avoid a messed up layout after a restart when using
  `Restore Defaults`. The `Allow to undock the map window` option on page `Map` is now unchanged
  after resetting settings.
* Simplified update notification dialog to show only HTML message from server. Removed `Download in
  Browser` button as well as header information and `Download now`.
* Warning for performance file aircraft type mismatch is now reset to off on update since MSFS
  causes too many issues. You can enable this again in menu `Aircraft` -> `Warning for aircraft type
  mismatch` if you use another simulator than MSFS.
* Corrected logic for edit and save aircraft performance to avoid wrong questions to save file.
* Added changelog item to help menu.
* Enabled missing tooltips with full path on aircraft performance recent menu.
* Updated French translations by Patrick.
* Updated Italian translations by Flavio.

### Little Xpconnect Version 1.0.32

* Adapted new weather and environment datarefs to X-Plane 12 changes.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.5.rc1/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
