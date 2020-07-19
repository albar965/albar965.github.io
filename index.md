---
layout: index
title:  "Alex' Projects"
date:   2020-07-19 11:20:00 +0200
---

# Alex' Projects

## [![RSS Feed](assets/images/feed.png)](/feed.xml) News
<p>
  {% for post in site.posts limit:5 %}
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

## Links {#links}

**► Download _Little Navmap_: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.4.5/LittleNavmap-win-2.4.5.zip) - [macOS](https://github.com/albar965/littlenavmap/releases/download/v2.4.5/LittleNavmap-macOS-2.4.5.zip)** - [**Linux** \(64 bit, based on Ubuntu 18.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.5/LittleNavmap-linux-18.04-2.4.5.tar.gz) - [Linux \(64 bit, based on Ubuntu 16.04\)](https://github.com/albar965/littlenavmap/releases/download/v2.4.5/LittleNavmap-linux-16.04-2.4.5.tar.gz) - Alternative download locations: [Dropbox](https://www.dropbox.com/sh/eh446yent4rz3uq/AACg8vMEmX8AxY_5Hjpt90kWa) -
[Mega.nz](https://mega.nz/#F!iOZHlIab!65qqRGToUUCxiSMmzbab1w) - [OneDrive](https://1drv.ms/u/s!AoWYKlNEZds9auvFMliyQ3HK-lY?e=42ud1g)

[**► Other Downloads** (SimConnect, Aircraft Performance and more)](https://www.littlenavmap.org/downloads)

[**► User manuals for _Little Navmap_ and _Little Navconnect_ in different formats and languages**](/manuals.html)

----

<a href="alex AT littlenavmap DOT org"
   rel="nofollow"
   onclick="this.href='mailto:' + 'alex' + '@' + 'little' + 'nav' + 'map' + '.' + 'org'"
   onmouseleave="this.href='alex AT littlenavmap DOT org'"><span class="bold">► Contact me by email (English / Deutsch)</span></a>

[**► Support Forum at _Avsim_**](https://www.avsim.com/forum/780-little-navmap-little-navconnect-little-logbook-support-forum) **Support and help for users.**

[**► _Little Navmap_ - Frequently asked Questions**](littlenavmap-faq.html) <!--[**► Oft gestellte Fragen**](littlenavmap-faq_de.html)-->

[**► _Little Navmap_ - Install Navigraph Updates**](littlenavmap_navigraph.html) Shows how to update the included Navigraph database to the latest cycle.

----

[**► GitHub Profile**](https://github.com/albar965) All my projects, releases, source code, issue lists and more.

[**► About Translation Packages**](littlenavmaptranslations.html) General information about translation packages.

----

[**► Donations / Spenden**](donate.html)

[![Donate](assets/images/donate.png)](donate.html)

**Donate to show your appreciation if you like my programs.**

**Spenden Sie, um Ihre Wertschätzung zu zeigen, wenn Ihnen meine Programme gefallen.**

## Little Navmap {#littlenavmap}

[![Little Navmap](assets/images/navroute.png)](littlenavmap.html) [**► Little
Navmap**](littlenavmap.html) is a free open source flight planner, navigation tool, moving map,
airport search and airport information system for **Flight Simulator X, Prepar3D and X-Plane** and is available for **Windows, Apple macOS and Linux**.

_Little Navmap_ comes with a 270 page manual also including tutorials which is available online as well as in PDF and other formats.
Help buttons in all relevant areas of the program display corresponding chapters in the online manual.

| ---- | ---- |
| [![Little Navmap 2.2.2 spherical map projection and elevation profile with flight plan](assets/images/spherical_small.jpg)](assets/images/spherical.jpg) | [![Little Navmap 2.2.2 sun shadow on globe](assets/images/sunshadow_small.jpg)](assets/images/sunshadow.jpg) |

A widely configurable map display using the OpenStreetMap as a background map which is only one
option of many online and included offline maps. The map shows airports, navaids, airways,
airspaces, AI or multiplayer aircraft and ships as well as airport weather, winds aloft and a minimum off-route altitude grid (MORA). A seamlessly integrated airport diagram displays
taxiways, displaced thresholds, overrun areas, aprons, parking spots and more.

User can place airport traffic patterns or holdings as a visual guidance on the map .

| ---- | ---- |
| [![Little Navmap 2.4.4 winds aloft](assets/images/user_features_small.jpg)](assets/images/user_features.jpg) | [![Little Navmap 2.4.4 User Features](assets/images/wind_small.jpg)](assets/images/wind.jpg) |

It supports approach and departure procedures like SIDs, STARs, custom final approaches, offers several automatic flight
plan calculation options and multiple export formats like GFP \(Reality XP GTN and Flight1 GTN\),
FPL \(Reality XP GNS\), GPX, RTE, FLP and X-Plane FMS as well as
drag and drop flight plan editing on the map. The program can read the PLN, FMS and FLP flight plan
formats.

Keyboard shortcuts help to access most functions without mouse.

An elevation profile is shown for the flight plan allowing to find a safe cruise altitude also displaying top of climb,
top of descent and procedure altitude restrictions. Calculated and shown climb as well as descent paths adhere to altitude
restrictions .

Aircraft performance and fuel planning is included which automatically considers winds aloft for fuel, top of climb and top of descent calculation. Performance values can be collected automatically during flight and can be merged into the currently profile at any time.

Search functionality allows to look for airports, navaids, procedures, user defined waypoints and logbook entries by a large amount of
criteria also including a spatial search.

_Little Navmap_ comes with its own logbook allowing to automatically record, search and edit logbook entries.

| ---- | ---- |
| [![Little Navmap 2.4.4 Logbook](assets/images/logbook_small.jpg)](assets/images/logbook.jpg) | [![Little Navmap 2.2.2 Airport Weather](assets/images/airportweather_small.jpg)](assets/images/airportweather.jpg) |

The program can generate an ATS route description from flight plans and vice versa where the output is widely configurable.

The nav database can be updated by the _Navigraph FMS Data Manager_. A cycle 1801 database
courtesy of Navigraph is included in the download and includes navaids, airways, airspaces, procedures and more.

Complete edit, display, import and export functionality for user defined waypoints.
Import and export of CSV, X-Plane and Garmin files.

Display of clients and centers of VATSIM, IVAO, PilotEdge and custom online networks.

_Little Navmap_ features its own internal web server which allows to follow aircraft progress from any device.

**Supported Flight Simulators:** All FSX versions from SP2 up, Flight Simulator - Steam Edition,
Prepar3D v2, v3, v4, v5 and X-Plane 11.

**Supported platforms:** Windows 7/8/10, Apple macOS \(10.10 or newer only\) and Linux \(64 bit only\).

[![Little Navmap](assets/images/Tipp_FSMagazin_D_Neu_2014_50.png)](https://www.facebook.com/FSMAGAZIN/posts/1349379408450042)


## Little Navconnect {#littlenavconnect}

[![Little Navconnect](assets/images/navconnect.png)](littlenavconnect.html) [**► Little
Navconnect**](littlenavconnect.html) is a
small free open source application that acts as an agent connecting *Little Navmap* with a flight
simulator. This allows to use *Little Navmap*
on Linux or Apple macOS and saves the the pain of setting up remote SimConnect links for FSX or Prepar3D.

**Supported Flight Simulators:** All FSX versions from SP2 up, Flight Simulator - Steam Edition,
Prepar3D v2, v3, v4, v5 and X-Plane 11.

**Supported platforms:** Windows 7/8/10, Apple macOS and Linux \(64 bit\).

## Little Xpconnect {#littlexpconnect}

![Little Xpconnect](assets/images/xpnavconnect.png) **Little Xpconnect** is a X-Plane plugin that
allows *Little Navmap* and *Little Navconnect* to connect to X-Plane.

It is light weight, free and open source.

*Little Xpconnect* is included in the download archive of [Little Navmap](littlenavmap.html).

**Supported Flight Simulators:** X-Plane 11 \(64 bit\).

**Supported platforms:** Windows 7/8/10, Apple macOS and Linux.

[**► Readme and Installation**](https://github.com/albar965/littlexpconnect/blob/release/1.0/README.txt)

[**► Downloads and Releases**](https://github.com/albar965/littlexpconnect/releases)

