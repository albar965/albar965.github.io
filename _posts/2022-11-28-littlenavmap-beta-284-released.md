---
layout: post
title:  Little Navmap 2.8.4.beta released
date:   2022-11-28 15:00 +0100
categories: release
release-version: 2.8.4.beta
---

### Direct Download

[**► Windows 64-bit (*MSFS and X-Plane*)** - LittleNavmap-win64-2.8.4.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.4.beta/LittleNavmap-win64-2.8.4.beta.zip)<br/>
[**► macOS** - LittleNavmap-macOS-2.8.4.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.4.beta/LittleNavmap-macOS-2.8.4.beta.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-2.8.4.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.4.beta/LittleNavmap-linux-22.04-2.8.4.beta.tar.gz)

**Alternative Download Locations - Look into sub-folders for beta or development releases:**

**►** [**Box**](https://app.box.com/s/8c9x2f91enpkn41cmc4b5tkzlil9ouhy) / [**Dropbox**](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) / [**Mega.nz**](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) / [**OneDrive**](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

Other Versions:

[► Windows 32-bit (*only for FSX and P3D*) - LittleNavmap-win32-2.8.4.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v2.8.4.beta/LittleNavmap-win32-2.8.4.beta.zip)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-20.04-2.8.4.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.8.4.beta/LittleNavmap-linux-20.04-2.8.4.beta.tar.gz)

## Notes

This is a public beta release which is feature complete but might have small issues.

**This version is ready for MSFS SU11 and for the X-Plane 12 beta. See known issues below for MSFS.**

**Draft user manual available here:
[Little Navmap - User Manual](https://www.littlenavmap.org/manuals/littlenavmap/release/2.8/en/)**.

**See here for user manual downloads:
[User Manuals - Beta Releases](https://albar965.github.io/manuals.html#beta).**

**This changelog also explains new or moved/changed features.
First look here if anything is not clear or missing.**

**X-Plane users: In any case reinstall Little Xpconnect from this package. Otherwise fuel flow
calculation or other functions might not work correctly in Little Navmap.**

**Little Navmap probably reminds you to reload scenery library databases after updating. Please do
so to benefit from new features and bug fixes.**

**To try out the program: Use one of the scripts `Little Navmap Portable.cmd` (Windows),
`Little Navmap Portable.command` (macOS) and `Little Navmap Portable.sh` (Linux) to let
Little Navmap store all settings, databases and caches in the installation folder (portable mode).**

Note that certain settings and table layouts are reset to default after updating.

See here for a [list of issues done](https://github.com/albar965/littlenavmap/milestone/11?closed=1).
More issues are solved than publicly known on Github. This changelog lists the most important.
Please report if something does not work or does not work as expected.

A big thank you to all who reported bugs and issues!

## Known Issues MSFS

* **Active pause in MSFS breaks the connection and does not allow to reconnect.
  Use the Escape key for normal pause to avoid problems.**
* **Some third-party plugins like traffic add-ons might cause connection issues when used together
  with Little Navmap and MSFS.**
* **The autoconnect function of Little Navmap does not work reliably with MSFS. Connect manually
  after starting your flight if you see problems. Little Navconnect can have the same issues as
  Little Navmap since it always uses autoconnect. Start the simulator first and then Little Navconnect.**

## Changes from 2.8.3.beta to 2.8.4.beta

* Flight plan is now saved to a temporary file on exit if created from scratch. This avoids the question
  dialog when exiting the program after building a new plan. This means: You create a new flight plan from
  scratch and Little Navmap will not ask to save the plan when exiting. Instead the same plan
  is reloaded on next startup. Continue editing without saving and the changed plan will be
  reloaded on next startup. You can still use the `Save` and `Save as` functions as before.
* Now allowing arbitrary points for departure and destination. This covers all navaids, user points
  and coordinates which can be used as start or destination points. The elevation profile is now
  calculated without error messages for these kind of flight plans. Note that you have to install the
  GLOBE elevation data to get the correct elevations for these points. You have to use the `Add to
  flight plan` menu item, the `Append to flight plan` menu item, the keyboard shortcut
  `Ctrl+Alt+Click` (add),  `Shift+Alt+Click` (append) or the drag and drop flight plan editing to add
  arbitrary points as  departure or destination. Note these flight plans are not supported by all
  simulators or add-ons.
* Fixed for label placement on flight plan line. Label is now placed aside if the options
  `Transparent line` or `Text background` are not used in options on page `Map Display Flight Plan`.
* Fixed performance issue when loading X-Plane 12 METAR and GRIB (wind) files resulting in temporary
  program freezes. Now only reading the latest three METAR and the latest GRIB file.
* Now removing area/country codes from X-Plane country names.
* Now also taking userpoint names into flight plan waypoint if ident is missing.
* Reverted change "MSA, holdings and MORA grid are now shown when using MSFS and scenery library
  mode `Do not use Navigraph Database`". The scenery library mode `Do not use Navigraph Database` now
  strictly fetches all data from the simulator database which results in certain features being
  disabled in this mode.
* Updated Italian translation by Flavio Borgna.
* More small text, translation and user interface fixes.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v2.8.4.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
