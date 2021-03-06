---
layout: index
title:  "Alex' Projects"
date:   2021-07-11 14:00:00 +0200
---

# Alex' Projects

## [![RSS Feed](assets/images/feed.png)](/feed.xml) News
<p>
  {% for post in site.posts limit:3 %}
    <p>
  {% if forloop.first == true %}
      <span class="bold">{{ post.date | date: "%Y-%m-%d, %H:%M" }} <a href="{{ site.baseurl }}{{ post.url }}"><span class="bold">► {{ post.title }}</span></a></span>
    {% else %}
      <p>{{ post.date | date: "%Y-%m-%d, %H:%M" }} - <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></p>
    {% endif %}
    </p>
  {% endfor %}
</p>

[**► News Archive**](archive.html)

### Little Navmap Downloads

[**► Windows** - LittleNavmap-win-2.6.14.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.14/LittleNavmap-win-2.6.14.zip)\\
[**► macOS** - LittleNavmap-macOS-2.6.14.zip](https://github.com/albar965/littlenavmap/releases/download/v2.6.14/LittleNavmap-macOS-2.6.14.zip)\\
[**► Linux \(64 bit, based on Ubuntu 20.04\)** - LittleNavmap-linux-20.04-2.6.14.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.14/LittleNavmap-linux-20.04-2.6.14.tar.gz)\\
[**► Linux \(64 bit, based on Ubuntu 18.04\)** - LittleNavmap-linux-18.04-2.6.14.tar.gz](https://github.com/albar965/littlenavmap/releases/download/v2.6.14/LittleNavmap-linux-18.04-2.6.14.tar.gz)

**Alternative download locations:** **[Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa)**, **[Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w)** and **[OneDrive](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)**.

### Little Navmap Links

[**► User Manuals**](/manuals.html)

[**► Screenshots**](littlenavmapscreens.html)

-----

[**► Contact and Support**](contact.html) Links, support forum and email.

[**► Support Forum at _Avsim_**](https://www.avsim.com/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) Support and help for users.

[**► Frequently asked Questions**](littlenavmap-faq.html) Solutions for known problems and more.

[**► Install Navigraph Updates**](littlenavmap_navigraph.html) Shows how to update the included Navigraph database to the latest cycle.

[**► Downloads**](https://www.littlenavmap.org/downloads) Aircraft performance profiles and more.

[► GitHub Profile](https://github.com/albar965) All my projects, releases, source code, issue lists and more.

[► About Translation Packages](littlenavmaptranslations.html) General information about translation packages.

### Little Navmap Donations

|  [![Donate](assets/images/donate.png)](donate.html) | **Donate to show your appreciation if you like my programs.**<br/><br/>**Spenden Sie, um Ihre Wertschätzung zu zeigen, wenn Ihnen  meine Programme gefallen.** |

## Little Navmap {#littlenavmap}

![Little Navmap](assets/images/navroute.png) **_Little Navmap_** is a free open source flight planner, navigation tool, moving map,
airport search and airport information system for **Flight Simulator X, Prepar3D, Microsoft Flight Simulator 2020 and X-Plane** and is available for **Windows, Apple macOS and Linux**.

_Little Navmap_ comes with a **detailed manual** also including tutorials which is available online as well as in PDF and other formats like EPUB.
Help buttons in all relevant areas of the program display corresponding chapters in the online manual on click.

| ---- | ---- |
| [![Little Navmap 2.2.2 spherical map projection and elevation profile with flight plan](assets/images/spherical_small.jpg)](assets/images/spherical.jpg) | [![Little Navmap 2.2.2 sun shadow on globe](assets/images/sunshadow_small.jpg)](assets/images/sunshadow.jpg) |

A widely configurable **map display** using the OpenStreetMap as a background map which is only one
option of many online and included offline maps. The map shows airports, navaids, airways,
airspaces, oceanic tracks, high altitude winds, AI or multiplayer aircraft and ships as well as airport weather, winds aloft and a minimum off-route altitude grid (MORA). A seamlessly integrated **airport diagram** displays
taxiways, displaced thresholds, overrun areas, aprons, parking spots and more.

User can place airport traffic patterns or holdings as a visual guidance on the map.

| ---- | ---- |
| [![Little Navmap 2.4.4 winds aloft](assets/images/user_features_small.jpg)](assets/images/user_features.jpg) | [![Little Navmap 2.4.4 User Features](assets/images/wind_small.jpg)](assets/images/wind.jpg) |

It supports **approach and departure procedures like SIDs, STARs, custom final approaches**, offers a
widely configurable **automatic flight plan calculation** and **several export formats** like GFP \(Reality XP GTN
and Flight1 GTN\), FPL \(Reality XP GNS\), GPX, RTE, FLP and X-Plane FMS as well as drag and drop
flight plan editing on the map. The program can read the PLN, FMS and FLP and more flight plan formats.

Several flight plan formats can be exported using the **flight plan multiexport** feature with one click.

Keyboard shortcuts help to access most functions without mouse.

An **elevation profile** is shown for the flight plan allowing to find a safe cruise altitude also
displaying top of climb, top of descent and procedure altitude restrictions. Calculated and shown
climb as well as descent paths adhere to altitude restrictions.

**Aircraft performance and fuel planning** is included which automatically considers winds aloft for
fuel, top of climb and top of descent calculation. Performance values can be collected
automatically during flight and can be merged into the currently profile at any time.

**Search** functionality allows to look for airports, navaids, procedures, user defined waypoints and
logbook entries by a large amount of criteria also including a spatial search.

Userpoint functionality allow to place, edit and export **user defined features like points of
interest**, visual reporting points and more on the map. Import and export of CSV, X-Plane and Garmin
files.

_Little Navmap_ comes with its own **logbook** allowing to automatically record, search and edit
logbook entries. The logbook records the flight plan and the flown track which can be exported to
GPX files.

**Oceanic and other tracks** like NAT can be downloaded, shown on the map and can be used for
automatic flight plan calculation.

| ---- | ---- |
| [![Little Navmap 2.4.4 Logbook](assets/images/logbook_small.jpg)](assets/images/logbook.jpg) | [![Little Navmap 2.2.2 Airport Weather](assets/images/airportweather_small.jpg)](assets/images/airportweather.jpg) |

The program can generate an **ATS route description** from flight plans and vice versa where the output
is widely configurable.

A cycle 1801 database courtesy of Navigraph is included in the download and includes navaids,
airways, airspaces, procedures and more. The **navigation data can be updated by the Navigraph
FMS Data Manager**.

Display of clients and centers of **VATSIM, IVAO, PilotEdge** and custom online networks.

_Little Navmap_ features its own internal **web server** which allows to follow aircraft progress from
any device across a network.

**Supported Flight Simulators:** All FSX versions from SP2 up, Flight Simulator - Steam Edition,
Prepar3D v2, v3, v4, v5, Microsoft Flight Simulator 2020 and X-Plane 11.

**Supported platforms:** Windows 7/8/10, Apple macOS \(10.12 or newer only\) and Linux \(64 bit only\).

[![Little Navmap](assets/images/Tipp_FSMagazin_D_Neu_2014_50.png)](https://www.facebook.com/FSMAGAZIN/posts/1349379408450042)

## Little Navconnect {#littlenavconnect}

![Little Navconnect](assets/images/navconnect.png) **_Little Navconnect_** is a
small free open source application that acts as an agent connecting *Little Navmap* with a flight
simulator remotely across the network.

**_Little navconnnect_ is included in the download archive of *Little Navmap*.**

**Supported Flight Simulators:** All FSX versions from SP2 up, Flight Simulator - Steam Edition,
Prepar3D v2, v3, v4, v5, Microsoft Flight Simulator 2020 and X-Plane 11.

**Supported platforms:** Windows 7/8/10, Apple macOS \(10.12 or newer only\) and Linux \(64 bit only\).

[**► Downloads and Releases**](https://github.com/albar965/littlenavconnect/releases)

[**► User manuals for _Little Navmap_ and _Little Navconnect_**](/manuals.html)

[► GitHub _Little Navconnect_ Project and Sources](https://github.com/albar965/littlenavconnect)

----

![Little Navconnect](assets/images/littlenavconnect.jpg)

## Little Xpconnect {#littlexpconnect}

![Little Xpconnect](assets/images/xpnavconnect.png) **_Little Xpconnect_** is a X-Plane plugin that
allows *Little Navmap* and *Little Navconnect* to connect to X-Plane.

It is light weight, free and open source.

**_Little Xpconnect_ is included in the download archive of *Little Navmap*.**

**Supported Flight Simulators:** X-Plane 11 \(64 bit\).

**Supported platforms:** Windows 7/8/10, Apple macOS \(10.12 or newer only\) and Linux \(64 bit only\).

[**► Downloads and Releases**](https://github.com/albar965/littlexpconnect/releases)

[**► Installation** (_Little Navmap_ user manual)](https://www.littlenavmap.org/manuals/littlenavmap/release/2.6/en/INSTALLATION.html#x-plane-plugin)

[► GitHub _Little Xpconnect_ Project and Sources](https://github.com/albar965/littlexpconnect)

