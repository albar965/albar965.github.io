---
layout: post
title:  Little Navmap 3.2.2.beta released
date:   2026-10-10 14:00 +0200
categories: release
release-version: 3.2.2.beta
---

<!-- ==================== DO NOT EDIT POST DATE AFTER RELASE ==================== -->

### Direct Download

#### Windows

[**► Little Navmap Windows 64-bit Installer - preferred for Windows** - LittleNavmap-win64-3.2.2.beta-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.2.2.beta/LittleNavmap-win64-3.2.2.beta-Install.exe)<br/>
[**► Little Navmap Windows 64-bit Zip - can run in portable mode** - LittleNavmap-win64-3.2.2.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.2.beta/LittleNavmap-win64-3.2.2.beta.zip)

[**► Little Navconnect Windows 32-bit Zip - required to connect to FSX or P3D** - LittleNavconnect-win32-3.0.17.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.2.beta/LittleNavconnect-win32-3.0.17.zip)

#### macOS

[**► Little Navmap Apple macOS - Universal Binary for Intel and Silicon** - LittleNavmap-macOS-3.2.2.beta.zip](https://github.com/albar965/littlenavmap/releases/download/v3.2.2.beta/LittleNavmap-macOS-3.2.2.beta.zip)

#### Linux

[**► Little Navmap Linux - 64 bit, Ubuntu 26.04** - LittleNavmap-linux-ubuntu-26.04-3.2.2.beta.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.2.2.beta/LittleNavmap-linux-ubuntu-26.04-3.2.2.beta.tar.xz)<br/>
[**► Little Navmap Linux Debian Installation Package - 64 bit, Ubuntu 26.04** - LittleNavmap-linux-ubuntu-26.04-3.2.2.beta-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.2.2.beta/LittleNavmap-linux-ubuntu-26.04-3.2.2.beta-1_amd64.deb)

[**► Little Navmap Linux - 64 bit, Ubuntu 24.04** - LittleNavmap-linux-ubuntu-24.04-3.2.2.beta.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.2.2.beta/LittleNavmap-linux-ubuntu-24.04-3.2.2.beta.tar.xz)<br/>
[**► Little Navmap Linux Debian Installation Package - 64 bit, Ubuntu 24.04** - LittleNavmap-linux-ubuntu-24.04-3.2.2.beta-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.2.2.beta/LittleNavmap-linux-ubuntu-24.04-3.2.2.beta-1_amd64.deb)

**[► Alternative Download Locations](https://albar965.github.io/downloads.html).** Look into sub-folders for beta, development or release candidates.

<p style="color: #c00000; background: rgba(250, 220, 220, 0.5); font-size: 1em;">
  <b>
    <a style="color: #a00000;" href="https://albar965.github.io/littlenavmap-faq.html#windows-download">► Read here if you have problems downloading Little Navmap for Windows</a><br>
    <a style="color: #a00000;" href="https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/INSTALLATION.html#macos">► See here if you have problems running Little Navmap on macOS</a>
  </b>
</p>

**This is a beta/test release of Little Navmap which fixes several crashes on startup which
first appeared in the release 3.2.1.beta.**

**See [Version 3.2.1.beta](https://github.com/albar965/littlenavmap/releases/tag/v3.2.1.beta) for
the full changelog.**

**Please note that when reverting to Little Navmap 3.0.18, file names may appear garbled and
corresponding error messages may be shown if the paths contain special characters such as
umlauts or accents. This can happen when loading files from one of the menus `Recent`, for example.
You can ignore the error messages and adjust paths in options and simply reload the affected files
normally to fix this.**

## Changes from 3.2.1.beta to 3.2.2.beta

* Several crashes on startup have been fixed. The window layout will be reset to the default settings
  on update, so you will need to rearrange the windows manually to your liking. See
  [Little Navmap User Manual - Dock Windows](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/DOCKWINDOWS.html)
  for more information. Previously saved old window layout files can still be used in most cases.
  Note that layouts cannot always be restored to 100 percent. You might see slightly shifted dock
  windows and other differences. [#1389](https://github.com/albar965/littlenavmap/issues/1389)
* The setting `Load window layout from last used file` on options page `Startup and Updates` is now
  reset to off on update to avoid potential crashes when loading incompatible layout files. Enable
  it again if you do not see issues loading your preferred window layout.
* Fixed crash with setting `Load window layout from last used file` enabled.
* Removed the option `Allow to undock Map Window` in options. This is now default and gives
  more flexibility. This means that you can move and detach the map window like any other dock
  window now. See the link to the user manual about dock windows above. Note that a warning can
  show up when trying to load incompatible layout files which can result in a garbled layout.
  Use the the function `Reset Window layout to default` (`Ctrl+Alt+Shift+W`) if you broke your
  layout.
* Now setting departure or destination (parking and others) also when selecting `Showing Procedures`
  from dialog window `Select Destination Airport or Runway` and `Select Departure Airport or Runway`.
* Fixed crash on startup with enabled web server.
* Eliminated crash when hovering above the airport link in procedure search tab after flight plan
  changes.
* Fixed crash with invalid procedures from broken add-on airports without legs on MSFS 2024. The
  damaged procedures are now logged and otherwise ignored.
* Fixed status bar fields all hidden after update.
* The visibility of the status bar fields is now saved correctly. Right click on the status bar
  to change visible fields.
* Map detail level is reset to default to avoid loading wrong values from previous versions.
* Reduced the number of parallel connections to one for CARTO maps to avoid temporary blocks. The maps
  can load a bit slower but more reliably now.
* Adjusted performance collection to use indicated or actual altitude altitude to detect cruise
  phase more reliably.
* Removed old Ubuntu 22.04 build and added new Ubuntu 26.04 build. Now providing two builds for
  Ubuntu 24.04 and 26.04. Ubuntu 26.04 users have to install additional libraries using the
  following command:
  `sudo apt install libopengl0 libxcb-cursor0 libxcb-icccm4 libxcb-keysyms1 libxcb-xkb1 libxkbcommon0 libxkbcommon-x11-0`.
* Removed options page `Map` and put settings for empty airports to page `Map Display Airports`.
* Renamed page `Map Font and Scale` to `Map Display` and put map shading options for dark mode and
  sun shading there.
* Reduced default window size for smaller screens.
* Small text corrections in user interface.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.2.2.beta/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

**Note:** There are always a few false positives on the installer while the majority of 60 to 70 anti-virus see no issue. Download and unpack the Zip archive it if this scares you.
