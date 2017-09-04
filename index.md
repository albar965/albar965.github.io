---
layout: index
title:  "Alex' Projects"
date:   2017-09-03 22:00:00 +0200
---

# Alex' Projects

## [![RSS Feed](assets/images/feed.png)](/feed.xml) News
<p>
  {% for post in site.posts %}
    <p>
  {% if forloop.first == true %}
      <span class="bold">{{ post.date | date: "%Y-%m-%d, %H:%M" }} <a href="{{ site.baseurl }}{{ post.url }}"><span class="bold">► {{ post.title }}</span></a></span>
    {% else %}
      <p>{{ post.date | date: "%Y-%m-%d, %H:%M" }} - <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></p>
    {% endif %}

    </p>
  {% endfor %}

   <br>
</p>

## Links {#links}

<a href="albar 965 AT mail box DOT org"
   rel="nofollow"
   onclick="this.href='mailto:' + 'albar' + '965' + '@' + 'mailbox' + '.' + 'org'"
   onmouseleave="this.href='albar 965 AT mail box DOT org'"><span class="bold">► Contact me by email</span></a>

[**► GitHub Profile**](https://github.com/albar965)

All my projects, releases, source code, issue lists and more.

[**► GitBook Online Manuals**](https://www.gitbook.com/@albar965)

Online manuals for _Little Navmap_ and _Little Navconnect_.

[**► Support Forum at Avsim**](http://www.avsim.com/forum/780-little-navmap-little-navconnect-little-logbook-support-forum)

Help for users, preview of new releases, development progress, screenshots and beta releases.

[**► Donations / Spenden**](donate.html)

[![Donate](assets/images/donate.png)](donate.html)

**Donate to show your appreciation if you like my programs.**

**Spenden Sie, um Ihre Wertschätzung zu zeigen, wenn Ihnen meine Programme gefallen.**

## Little Navmap {#littlenavmap}

[![Little Navmap](assets/images/navroute.png)](littlenavmap.html) [**► Little Navmap**](littlenavmap.html) is a free open source flight planner, navigation tool, moving map, airport search and airport information system for Flight Simulator X and Prepar3D.

A widely configurable map display using the OpenStreetMap as a background map which is only one option of many online or included offline maps. The map shows airports, navaids, airways, airspaces, AI or multiplayer aircraft and ships. A seamlessly integrated airport diagram displays taxiways, displaced thresholds, overrun areas, aprons, parking spots and more.

It supports approach and departure procedures, offers several automatic flight plan calculation options and multiple export formats like GFP, GPX, RTE, FLP and FMS as well as drag and drop flight plan editing on the map.

An elevation profile is shown for the flight plan allowing to find a safe cruise altitude.

Search functionality allows to look for airports, navaids or procedures by a large amount of criteria also including a spatial search.

The program can generate an ATS route string from flight plans and vice versa.

**Supported Flight Simulators:** All FSX versions from SP2 up, Flight Simulator - Steam Edition, Prepar3D v2, v3 and v4. Can also run on computers without simulator installation.

**Supported platforms:** Windows 7/8/10, Apple macOS and Linux (tested on Ubuntu).

[![Little Navmap](assets/images/Tipp_FSMagazin_D_Neu_2014_50.png)](https://www.facebook.com/FSMAGAZIN/posts/1349379408450042)


## Little Navconnect {#littlenavconnect}

[![Little Navconnect](assets/images/navconnect.png)](littlenavconnect.html) [**► Little Navconnect**](littlenavconnect.html) is a
small free open source application that acts as an agent connecting Little Navmap with a flight simulator. This allows to use Little Navmap
on Linux or Mac and saves the the pain of setting up remote SimConnect links.

**Supported Flight Simulators:** All FSX versions from SP2 up, Flight Simulator - Steam Edition, Prepar3D v2, v3 and v4.

**Supported platforms:** Windows 7/8/10.

## Little Logbook {#littlelogbook}

[![Little Logbook](assets/images/logbook.png)](littlelogbook.html) [**► Little Logbook**](littlelogbook.html) is a view and extraction program
for the FSX logbook. It allows fast and intuitive search and grouping of logbook entries based on several parameters, as well as export to HTML,
CSV and Google Earth KML documents. Additional information about airports can be shown together with the MakeRunways Utility by Peter Dowson.

**Supported platforms:** Windows XP/7/8/10.

