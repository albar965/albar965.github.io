---
layout: subpage
title:  "Little Navmap - Install Navigraph Updates"
date:   2017-12-07 22:00:00 +0100
---
[Alex’ Projects](index.html) ► Little Navmap - Install Navigraph Updates
# ![Little Navmap](assets/images/navroute.png) Little Navmap - Install Navigraph Updates

## Please Note

* **I recommend to use the automatic scan in the _FMS Data Manager_ which usually finds the correct path.**
* **Use the method below only if the automatic scan does not work for you.**
* **Close _Little Navmap_ when updating its database. _Little Navmap_ might crash otherwise.**

### macOS Users

If the automatic scan does not find the folder for _Little Navmap_ you have to add the mapping manually  as shown below for Windows users.

When you add the mapping manually in the _FMS Data Manager_ it should read `/Users/YOURUSERNAME/.config/ABarthel`.

But macOS does not allow to select this directory since it is hidden. Therefore you have to apply a trick:

If the folder selection box is open press `Command+Shift+.` (period) keys to show the hidden files (i.e. all files and folders that start with a period). Then you can get into `.config` and select the folder `ABarthel`.

### Windows Users

See screenshots below.

#### Select Little Navmap in Addon Mappings:

![Select Little Navmap in Addon Mappings](assets/images/navigraph1.jpg)

#### Select the User Defined Folder option:

![Select User Defined Folder](assets/images/navigraph2.jpg)

#### Select the correct Folder 
**Do _not_ select** `little_navmap_db` **.**

![Select Folder](assets/images/navigraph3.jpg)

#### The finished mapping ready to update:

![The finished mapping ready to update](assets/images/navigraph4.jpg)