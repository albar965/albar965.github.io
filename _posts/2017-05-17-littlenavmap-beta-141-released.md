---
layout: post
title:  "Little Navmap 1.4.1.beta released"
date:   2017-05-17 12:20:00 +0200
categories: release
---

[Release Page on Github](https://github.com/albar965/littlenavmap/releases/tag/v1.4.1.beta)

[Direct download link Windows](https://github.com/albar965/littlenavmap/releases/download/v1.4.1.beta/LittleNavmap-win-1.4.1.beta.zip)

[Direct download link macOS](https://github.com/albar965/littlenavmap/releases/download/v1.4.1.beta/LittleNavmap-macOS-1.4.1.beta.dmg)

[Online Manual](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.4/en/) \(this links directly to the manual of 1.4 while the front page still shows 1.2 until the final release is out\)

## Screenshots

[![Little Navmap 1.4.1.beta Segment Calculation](/assets/images/littlenavmapcalcpartial_small.jpg)](/assets/images/littlenavmapcalcpartial.jpg)

_**Picture above:** Click on image for full size. Flight plan calculation between_ `EKVG` _and_ `BGGH`_. The space between Iceland and Greenland has no low altitude airways. Therefore the first segment_ `EKVG` _to_ `KEF` _and the last segment_ `DA` _to_ `BGGH` _can be calculated automatially while_ `KEF` _to_ `DA` _is a direct connection. See [here](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.4/en/FLIGHTPLAN.html#calculate-for-selected-legs) for more information._

## Notes

[See 1.4.0.beta announcement for changes since version 1.2.4](/release/2017/05/11/littlenavmap-beta-140-released.html)

## Changelog

* Fixed errors with radionavaid flight plan calculation. DME and TACAN are now excluded. Reload the database to activate this fix.
* Added option to calculate flight plan segment between selected waypoints.
* Fixed errors with airway display and airway tooltips appearing in the wrong position.
* Fixed map object overflow logic for airspaces and navaids. Indication `Too many objects` is now more reliable.
* Added separate layer for airspaces without waypoints to get a better overview.
* Added north/south and south/north altitude rules.
* Corrected odd/even altitude rule to use magnetic course.
* Autoconnect is now switched on per default \(on new installations only, otherwise the old state is kept\).
* Now using straight line if recommended fix is missing for arc segments to avoid crashes for invalid procedure legs.
* Procedure legs are now only red if unusable. More tolerance for missing recommended fix now.
* Fixed color customization for profile widget. All colors now have a dark/normal variant. More colors and styles are cutomizable now.
* Added option to overload vehicle icons (see [here in the online manual](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.4/en/CUSTOMIZE.html#customize-aircraft-icons) for instructions.
* Aircraft track is now kept when connecting to simulator. Track is only deleted when aircraft position jumps too far.

**The long detailed changelog is here:** [Changelog 1.2.4 to 1.4.1](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.4/en/CHANGELOG.html)
