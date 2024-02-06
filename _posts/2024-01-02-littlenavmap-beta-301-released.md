---
layout: post
title:  Little Navmap 3.0.1.beta released
date:   2024-01-02 14:00 +0100
categories: release
release-version: 3.0.1.beta
---

### Direct Download (outdated Version)

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.1.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.1.beta/LittleNavmap-win64-3.0.1.beta-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.1.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.1.beta/LittleNavmap-macOS-3.0.1.beta.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-22.04-3.0.1.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.1.beta/LittleNavmap-linux-22.04-3.0.1.beta.tar.gz)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.1.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.1.beta/LittleNavmap-win32-3.0.1.beta-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-20.04-3.0.1.beta.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v3.0.1.beta/LittleNavmap-linux-20.04-3.0.1.beta.tar.gz)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.1.beta](https://github.com/albar965/littlenavmap/releases/v3.0.1.beta) \(scroll down to `Assets`\).

**► [Alternative Download Locations](/downloads.html)**

# Version 3.0.1.beta

## Notes

**This is a beta/test release of Little Navmap which adds new features, user interface improvements and fixes bugs.**

**Note that the program translations and the user manual have not been updated yet.**

**Toolbar layout has changed. See below in section "User Interface" for more information.**

**See here if you would like to run the beta release besides your stable installation:
[Little Navmap - User Manual - Portable Execution](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#portable-execution).**

**Also update Little Navconnect and Little Xpconnect if you're using one of these.
Little Navmap will show a notification dialog if you use an outdated version of Little Xpconnect.
You can still continue to use it, though.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Little Navmap - User Manual - Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

Note that the font handling has changed. You probably have to adapt font sizes in the information display, the
map display and the rest of the application.

A big thank you to all who reported bugs and issues!

## Changes from 3.0.0.beta to 3.0.1.beta

* Fixed issues where web-server map reverted back to Atlas map themes when using external map
  themes like Google.
* Fix for missing map updates when using touchpad for zooming.
* Fixed map drawing since it may cause frozen screens or missing updates on some systems.
* Fixed blank map screen in macOS after click.
* Fixed crash when zooming out with airspace highlights visible.
* More internal fixes for potential crashes when accessing empty lists.
* Improved taxiway labels and increased number of labels.
* Adjusted airspace boundaries and made lines thinner for some types.
* Fixed issues with wrong error messages with runway mismatches. The logic is now more tolerant for
  airports where renamed runway numbers do not match exactly the runways in the navigation data.
* Fixed route string reader which did not recognize approach for short plans.
  Example: MMBT MMGL/PLADE.I29-Z
* Corrected a problem where procedures could not be found in Navigraph database for airports that
  had moved. Examples are GAKL and DAUU in MSFS.
* Fixed issue with wrong error message that kept the program from building the elevation profile.
  Example: Approach I29-Z via PLADE at MMGL.
* Changed dock window menu items and tool buttons to have same order as docks.
* First draft of German translation.
* More small fixes and text changes.
* Now trying to find a cruise altitude which does not violate restrictions if it cannot be loaded
  from a flight plan or if the plan has an invalid cruise altitude. This applies to all plans
  which are loaded manually by a user. The change is now stored in the undo/redo stack and can be
  undone to revert to the previously invalid cruise altitude.
* Fixed issue wher PLN, FMS or other imported flight plan files were wrongly overwritten in LNMPLN
  format in some cases.
* Updated all message dialogs to make text in dialog boxes selectable by mouse click and
  right-click context menu. Text can now copied and pasted from all message boxes. No need
  to make screenshots.
* All message box messages are now logged.
* Fixed large font in tables on macOS.
* Fix for excessive warnings in HTTP server flooding the log.
* Updated Italian translation by Flavio Borgna.

**🎉🎉🎉 A Happy New Year to all of you! 🎉🎉🎉**

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.1.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
