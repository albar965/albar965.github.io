---
layout: post
title:  "Little Navmap 1.4.4 update released"
date:   2017-07-04 20:05:00 +0200
categories: release
---

**Most important change are bugfixes regarding crashes with P3D v4 scenery data.** 

**Direct download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v1.4.4/LittleNavmap-win-1.4.4.zip) - [macOS](https://github.com/albar965/littlenavmap/releases/download/v1.4.4/LittleNavmap-macOS-1.4.4.dmg) - [Linux](https://github.com/albar965/littlenavmap/releases/download/v1.4.4/LittleNavmap-linux-1.4.4.tar.gz)**

[**► Online Manual**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.4/en/)

[**► Features**](/littlenavmap.html)

## Notes

* The `littlenavmap-nosimconnect.exe` was dropped in *Little Navmap* version 1.4.4. You can use `littlenavmap.exe` on all computers now, no matter if SimConnect is installed or not.
* The map theme can change after the update in some cases. Simply change it back to your previous theme.
* The GUI style can change after the update in some cases. Go to the options dialog to revert back to the style you used before.

## Changes from Release 1.4.3 to 1.4.4

* Added light \(`Positron`\) and dark \(`Dark Matter`\) maps from [CARTO](https://carto.com).
* SimConnect is now detected and loaded dynamically. The file `littlenavmap-nosimconnect.exe` was removed since it is not needed anymore. `littlenavmap.exe` can now also be used on bare computers without SimConnect or flight simulator installation.
* Added notification message if SimConnect was not found in connect dialog.
* The file link in the information window is now removed if the file cannot be found. This happens on remote computers with copied databases.
* Added start positions to runway information. These are also available if the airport has no runways.
* Improved aircraft progress display and fixed multiple omissions.
* Fixed potential crashes when a style is unavailable.
* Half transparent aircraft icon fixed.
* Fixed problem with links in scenery database error dialog opening inline.
* Changed to Qt library 5.9. Note that the GTK style is not available anymore in Linux.
* P3D v4 runways, aprons and taxiways are now read correctly. This affects all BGL files that are created using the v4 SDK compiler.
* Fixed crash with P3D v4 BGL files and crashes that appear after applying the P3D v4 hotfix 1.
* Added support for P3D v4 `add-on.xml` packages. These are now read from subdirectories of `C:\Users\YOURUSERNAME\Documents\Prepar3D v4 Files\add-ons` and `C:\Users\YOURUSERNAME\Documents\Prepar3D v4 Add-ons`.

**The long detailed changelog is here:** [1.2.4 to 1.4.4 Changelog](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.4/en/CHANGELOG.html)

