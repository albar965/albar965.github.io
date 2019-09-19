---
layout: post
title:  Little Navmap 2.4.1.beta released
date:   2019-09-19 10:00:00 +0200
categories: release
---

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.4.1.beta/LittleNavmap-win-2.4.1.beta.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.4.1.beta/LittleNavmap-macOS-2.4.1.beta.zip) -
[Linux \(64 bit, based on Ubuntu 18.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.1.beta/LittleNavmap-linux-18.04-2.4.1.beta.tar.gz) -
[Linux \(64 bit, based on Ubuntu 16.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.1.beta/LittleNavmap-linux-16.04-2.4.1.beta.tar.gz)**

**Alternative download locations: [Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) -
[Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) -
[OneDrive](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)**

[**► Detailed Changelog for 2.4 Versions**](/pages/24/littlenavmapchangelog.html)

[**► Screenshots of new 2.4 Features (updated for 2.4.1.beta)**](/pages/24/littlenavmapscreens.html)

[**► Little Navmap and Little Navconnect Draft Manuals for 2.4 Versions**](/pages/24/littlenavmapmanuals.html)

**Please do not hesitate to let me know about bugs, inconsistencies and ideas for improvement.**

## Changes from Release 2.4.0.beta to 2.4.1.beta

## Limitations

* Translations are not updated yet. The user interface will be a mix of your local language and
  English.
* The online and offline manuals are not updated yet. Neither the English nor the translated
  versions. Help buttons and links are functional but point to empty placeholder pages.
* The legend is not updated yet.
* Tutorials not updated yet.

## Installation

* Microsoft Visual C++ Redistributables are not needed.
* Reloading the scenery library is recommended.
* Reinstall the Little Xpconnect X-Plane plugin to see bug fixes on macOS.

## Help

* Draft manuals can be accessed here: [2.4 Draft Manuals](https://www.littlenavmap.org/manuals/littlenavmap/release/2.4/en/)
* List of closed issues: [Closed for Milestone 2.4](https://github.com/albar965/littlenavmap/milestone/7?closed=1)

### Program

* Now using an OpenSSL library version 1.1.1 which does not require Microsoft Visual C++ Redistributables.
  No need to install any redistributables at all for Little Navmap on a freshly installed Windows 10.
* Fixed issues with OpenSSL on Linux. The libraries are now included in the archive again.
* Now providing two builds for Linux. One based on Ubuntu 18.04 and one based on Ubuntu 16.04. This allows to use
  Little Navmap on older Linux distributions too.
* Updated to latest Qt 5.12.5 library due to bugfixes.

### Flight Plan

* Fixed issue where flight plans exported for Reality XP had departure wrongly set to destination.
* Fixed small issue where flight plan legs were activated when editing plan with aircraft on ground.
* Showing minimum and maximum altitude for airways in flight plan table now.
* Airway now shown as red text if either direction, minimum or maximum altitude is violated.
* Tooltips on red text in flight plan table now show information for airway restriction
  violations or invalid waypoints.

### Route Description

* Added missing alternate airport parsing functionality to route description dialog.
  - Route description can now read and write more than one alternate airport to and from the string.
  - Added option to drop down menu button to output alternate airports to string.
  - Added option to route description dialog drop down menu button that allows to read trailing airports
    either as alternate airports or simply add the airports as waypoints.
* Better error, warning and information messages now.

### Logbook

* Adding route description string to logbook entries now.
* Cleanup in logbook entry information display.

### Aircraft Performance

* Better error checking before calculating elevation profile to fix crashes with invalid destination or departure.
* Fix for flooding log with warnings about invalid arguments when displaying fuel and weight.
* Potential fix for display of wrong fuel flow values.
* Changed aircraft performance to detect cruise phase if aircraft is above cruise altitude.

### Profile Display

* Keeping aircraft on bottom of elevation profile when climbing and on top of profile if descending.
* Now keeping aircraft in elevation profile more at the left side to avoid manual scrolling.
* Aircraft label could be hidden in elevation profile display.

### Map

* Corrected `View` -> `Reset Display Settings` function and added missing display features to
  reset (weather, airspace sources, user features and more).
* Fixed several issues where airspace buttons were disabled and/or not updated properly after changing source.
* Fixed double drawing of waypoints and navaids which are part of a flight plan.
* Fix for right-click into touch areas on Windows which triggered a wrong scroll event.
* Corrected display priorities from map context menu. Logbook is now prioritized before userpoint
  before airport for all actions.

### Weather

* Moved wind and airport weather source from menu `View` to new menu `Weather` since these functions also
  affect flight planning and not just the map display.
* Wind speed and direction fields are now hidden in flight planning tab if no manual wind is used.
  This allows to shrink the flight planning dock window to a smaller size.
* Added tooltip for flight plan waypoint yellow wind barbs.
* Added 5000 ft wind layer to wind menu and toolbar button.
* Lowered wind drawing threshold for flight plan. Wind barbs are now suppressed for flight plan legs below 4000 ft.

### Options

* Changed defaults in options dialog to more sensible values. This will affect only new users of after selecting
  `Reset all Settings and Restart` in the tools menu.
* Fixed several issues with `Restore Defaults` function in options dialog where values were not reset at all
  or reset to the wrong defaults.
* Fixed issues in options dialog where webserver settings were not used or reverted back to old values.
* Fixed issue where the webserver was always started after exiting options dialog.

### User Interface

* Added `Reset all Settings and Restart` function in tools menu which replaces the need to delete the settings
  folder in case of issues. This will create a backup of the `little_navmap.ini` and erase all contents afterwards.
* Stacks of tabbed dock windows are now completely closed if one of the docks in the stack is closed by
  using the shortcut, menu or toolbar. Closed stacks are reopened completely if one of the dock windows
  is reopened or activated.
* Stacked dock windows are now correctly raised on shortcut or other activation. Before the stack of dock
  windows was raised only while the dock window was still hidden.
* Fixed issue where splitter handles (in elevation profile and route description dialog) were too large.
* Style `macintosh` is now usable again on smaller screens for macOS. Tabs took up too much space previously and
  prevented dock windows from shrinking.
  Default style is now `macintosh` again after a new installation on macOS.
* Attempt to fix options dialog which appeared without content in some cases.
* More small fixes for more clarity and consistency in user interface.

### Little Xpconnect / X-Plane

* Fixed issue in macOS build where plugin failed to initialize in X-Plane.

### related from atools version 3.4.1.beta

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/2.4/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
