---
layout: post
title:  Little Navmap 3.0.9 released
date:   2024-07-31 14:00 +0200
categories: release
release-version: 3.0.9
---

### Direct Download

[**► Windows 64-bit Installer \(*MSFS and X-Plane*\)** - LittleNavmap-win64-3.0.9-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.9/LittleNavmap-win64-3.0.9-Install.exe)<br/>
[**► macOS** - LittleNavmap-macOS-3.0.9.zip](https://github.com/albar965/littlenavmap/releases/download/v3.0.9/LittleNavmap-macOS-3.0.9.zip)<br/>
[**► Linux \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.9.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.9/LittleNavmap-linux-ubuntu-22.04-3.0.9.tar.xz)<br/>
[**► Linux Debian Installation Package \(64 bit, based on Ubuntu 22.04\)** - LittleNavmap-linux-ubuntu-22.04-3.0.9-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.9/LittleNavmap-linux-ubuntu-22.04-3.0.9-1_amd64.deb)

**Other Versions:**

[► Windows 32-bit Installer \(*only for FSX and P3D*\) - LittleNavmap-win32-3.0.9-Install.exe](https://github.com/albar965/littlenavmap/releases/download/v3.0.9/LittleNavmap-win32-3.0.9-Install.exe)<br/>
[► Linux \(64 bit, based on Ubuntu 20.04 for Debian or older systems\) - LittleNavmap-linux-ubuntu-20.04-3.0.9.tar.xz](https://github.com/albar965/littlenavmap/releases/download/v3.0.9/LittleNavmap-linux-ubuntu-20.04-3.0.9.tar.xz)<br/>
[► Linux Debian Installation Package \(64 bit, based on Ubuntu 20.04\) - LittleNavmap-linux-ubuntu-20.04-3.0.9-1_amd64.deb](https://github.com/albar965/littlenavmap/releases/download/v3.0.9/LittleNavmap-linux-ubuntu-20.04-3.0.9-1_amd64.deb)

Zipped Windows releases without installer are available in the alternative download locations below or from the release assets at [GitHub - Little Navmap Releases - Version 3.0.9](https://github.com/albar965/littlenavmap/releases/v3.0.9) \(scroll down to `Assets`\).

**Alternative Download Locations - Look into sub-folders for beta, development or release candidates:**

**► [Alternative Download Locations](https://albar965.github.io/downloads.html)**

## Notes

**This is a stable release of Little Navmap which fixes a few issues and provides better error reporting for crashes.
New features and small improvements are planned for the next release 3.0.10.**

**macOS users: Keep in mind that you have to clear the quarantine flag when updating Little Xpconnect. See
[Clearing the Quarantine Flag on macOS](https://www.littlenavmap.org/manuals/littlenavmap/release/latest/en/XPCONNECT.html#clearing-the-quarantine-flag-on-macos).**

A big thank you to all who reported bugs and issues!

## Changes from 3.0.8 to 3.0.9

* Fixed issue where NOAA and X-Plane 12 weather stations were not updated and showed
  outdated weather.
* Installer now removes all Dutch, Chinese and Spanish compiled `.qm` translation files before
  installing. These translations have not been updated for a long time which can cause problems in
  the user user interface. The resulting issues range from arrows pointing into the wrong
  direction to missing texts and numbers.
  You can still install the translations manually if you wish by downloading the related `*.qm`
  files from [GitHub - littlenavmap - release/3.0](https://github.com/albar965/littlenavmap/tree/release/3.0)
  and saving them in the directory `translations` in the installation folder.
  Contact me if you'd like to update a translation or if you would like to create a new one:
  [Contact](https://albar965.github.io/contact.html).
* Attempt to fix crashes for the web server when accessing databases resulting in a crash.
* Fixed issue where program could be started more than once if stuck in an early warning or
  question dialog window. This could result in crashes and other problems.
* Now collecting detailed location information on crashes (stack traces). Note that this is only
  enabled for the Windows 64-bit version. Other operating systems already have means to collect crash
  information (Linux core files and macOS crash reports). A file
  `C:\Users\YOURUSERNAME\AppData\Roaming\ABarthel\little_navmap_stacktrace.txt` is created on crash
  and included in all generated crash reports.
* Other small text changes in the user interface.
* Updates to user manual.

* *Little Navconnect*: See file `CHANGELOG.txt` in sub-directory `Little Navconnect` in the
  installation folder for a list of changes.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/v3.0.9/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**
