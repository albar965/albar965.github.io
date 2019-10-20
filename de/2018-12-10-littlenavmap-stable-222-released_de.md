---
layout: post
title:  Little Navmap 2.2.2 veröffentlicht
date:   2018-12-10 09:30:00 +0100
categories: release
---

**Direkter Download: [Windows](https://github.com/albar965/littlenavmap/releases/download/v2.2.2/LittleNavmap-win-2.2.2.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.2.2/LittleNavmap-macOS-2.2.2.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v2.2.2/LittleNavmap-linux-2.2.2.tar.gz)**

[**► Bildschirmfotos**](/littlenavmapscreens.html)

[**► Online-Handbuch**](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/) (Englisch)

[**► Eigenschaften und Funktionen**](/littlenavmap.html) (Englisch)

## Anmerkungen

* Die Liste der abgeschlossenen Aufgaben für Version 2.2 ist [hier auf GitHub](https://github.com/albar965/littlenavmap/milestone/6?closed=1).
* **Es wird empfohlen, die Szeneriebibliothek neu zu laden.**
* **Übersetzungen für die grafische Benutzeroberfläche sind im Download enthalten.
  Übersetzungspakete sind nicht erforderlich. Beachten Sie, dass einige Übersetzungen unvollständig sind. Die fertigen Pakete werden später nachgeliefert.**
* **Einige neue Funktionen, wie das MORA-Gitter, die Anzeige von FAF, MAP und anderen, benötigen entweder einen AIRAC-Zyklus von Navigraph neuer oder gleich 1810 oder alternativ den im Download enthaltenen AIRAC-Zyklus 1801.**
* **X-Plane: Ersetzen Sie das _Little Xpconnect_ Plugin durch das neue im Download enthaltene Plugin, um die unten genannten Verbesserungen für die Flugzeuganzeige unter `X-Plane / Little Xpconnect` zu sehen.**

## Änderungen von 2.0.3 zu 2.2.2

**Siehe im Download enthaltene Datei `CHANGELOG.txt` oder [hier online](https://github.com/albar965/littlenavmap/blob/release/2.2/CHANGELOG.txt) für eine
komplette Liste aller Änderungen (Englisch).**

Für vergrößerte Ansicht auf die Bilder klicken.

### Übersicht

* Flugzeugleistung, Treibstoffplanung und mehr.
* Höhenprofil kann jetzt vergrößert und verkleinert werden, zeigt Steig- und Sinkpunkte sowie Höhenbeschränkungen für Prozeduren an.
* Darstellung von Platzrunden.
* MORA Gitter (Minimum Off-Route Höhenraster) auf der Karte.
* Sonnenschatten auf der Karte.
* Wettersymbole und Flugregeln auf der Karte.
* Spezielle Mausklicks in der Karte. Z.B. `Strg+Klick`, um die Messung zu starten oder `Shift+Klick`, um Messbereichsringe zu platzieren.
* Sonnenauf- und Sonnenuntergangszeiten für Flugplätze.
* Kurs und Entfernung zum Benutzerflugzeug in der Informationsanzeige für Flughäfen und Navigationshilfen.
* Bessere Druckqualität und mehr Funktionen für das Drucken von Karte und Flugplan.
* Flugplan an beliebiger Position in den aktuellen Plan einfügen.
* Oberflächenstile (auch `Nacht`) können spontan ohne Neustart aus dem Menü `Window` geändert werden.
* Karten als Bild in die Zwischenablage kopieren.
* Langsame Darstellung von komplexen X-Plane Flughäfen behoben.
* Vorbereitet für Active Sky XP.

### Neue Online-Handbuch Kapitel und / oder Änderungen

Alle Verweise zeigen auf das Englische Handbuch.

* Großes Update und Verbesserungen im Höhenprofil:
  [Höhenprofil](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/PROFILE.html)
  und
  [Legende](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/LEGEND.html#elevation-profile-legend).
* Flugzeugleistung und Treibstoffplanung:
  [Allgemein](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/AIRCRAFTPERF.html),
  [Bearbeiten](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/AIRCRAFTPERFEDIT.html)
  und
  [Neue Spalten in der Flugplantabelle](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/FLIGHTPLAN.html#flight-plan-table-columns).
* Flugplatzwetter:
  [Allgemein](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/WEATHER.html#airport-weather),
  [Menüpunkte](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/MENUS.html#show-airport-weather)
  und
  [Legende](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/LEGEND.html#airport-weather).
* [Sonnenschatten](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/SUNSHADOW.html).
* Neue Einstellungen für die Kompassrose, Schiebewinkel und Kurs zum nächsten Wegpunkt:
  [Kompassrose](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/COMPASSROSE.html)
  und
  [Legende](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/LEGEND.html#compass-rose).
* Platzrunde:
  [Allgemein](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/TRAFFICPATTERN.html),
  [Menüpunkte](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/MAPDISPLAY.html#show-traffic-pattern)
  und
  [Legende](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/LEGEND.html#airport-traffic-pattern).
* MORA Gitter (Minimum Off-Route Höhenraster) auf der Karte:
  [Menüpunkte](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/MENUS.html#show-mora-grid)
  und
  [Legende](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/LEGEND.html#mora-grid).
* [Spezielle Mausklicks in der Karte](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/MAPDISPLAY.html#mouse-clicks-modifiers).
* [Stil der Benutzeroberfläche schnell ändern](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/MENUS.html#window-styles).
* Einstellungen zur Kartenanzeige und Simulatorflugzeug:
  [Unscharfe Karten vermeiden](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/OPTIONS.html#blurred-map)
  und
  [mehr Details zum Scollen und Zoomen währed des Fliegens](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/OPTIONS.html#simulator-aircraft-allow-scroll-zoom).
* [X-Plane scenery\_packs.ini wird jetzt ausgewertet](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/SCENERY.html#load-scenery-library-dialog-options).
* [Beim Laden der Szenerie können nun Dateien ausgeschlossen werden](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/OPTIONS.html#scenery-library-database_exclude).
* [Verbesserungen beim Drucken](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/PRINT.html#printing-the-flight-plan).
* [Neue Menüpunkte für Flugplatz in der Prozedursuche](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/SEARCHPROCS.html#show-information).
* [Flugplan in den aktuellen einfügen](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/FLIGHTPLAN.html#insert-flight-plan).
* [Sonnenauf- und Sonnenuntergangszeiten für Flugplätze](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/INFO.html#airport).
* [Kurs und Entfernung zum Benutzerflugzeug in der Informationsanzeige für Flughäfen und Navigationshilfen](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/INFO.html#general).
* [Mehr oder wenige Daten in Reiter `Fortschritt` anzeigen](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/INFO.html#progress).
* [Bessere Hervorhebung von Lufträumen im Informationsfenster](https://www.littlenavmap.org/manuals/littlenavmap/release/2.2/en/INFO.html#airspaces).

### Neue Einstellungen

Die Tooltips im Dialog `Einstellungen` geben Hilfestellung.

| ---- | ---- |
| **Karte**<br/> [![Map](/assets/images/littlenavmap_new_options_22_map_small.jpg)](/assets/images/littlenavmap_new_options_22_map.jpg) | **Map Display**<br/> [![Map Display](/assets/images/littlenavmap_new_options_22_mapdisplay_small.jpg)](/assets/images/littlenavmap_new_options_22_mapdisplay.jpg) |
| **Online Kartenanzeige**<br/> [![Map Display Online](/assets/images/littlenavmap_new_options_22_online_small.jpg)](/assets/images/littlenavmap_new_options_22_online.jpg) | **Flight Plan**<br/> [![Flight Plan](/assets/images/littlenavmap_new_options_22_plan_small.jpg)](/assets/images/littlenavmap_new_options_22_plan.jpg) |
| **Szeneriebibliothek**<br/> [![Scenery Library](/assets/images/littlenavmap_new_options_22_scenery_small.jpg)](/assets/images/littlenavmap_new_options_22_scenery.jpg) | **User Interface**<br/> [![User Interface](/assets/images/littlenavmap_new_options_22_ui_small.jpg)](/assets/images/littlenavmap_new_options_22_ui.jpg) |

### Neue Funktionen

| ---- | ---- |
| [![New Features](/assets/images/littlenavmap_new_22_small.jpg)](/assets/images/littlenavmap_new_22.jpg) | [![New Menu Items](/assets/images/littlenavmap_new_22_menus_small.jpg)](/assets/images/littlenavmap_new_22_menus.jpg) | [![New Context Menu Items](/assets/images/littlenavmap_new_22_contextmenus_small.jpg)](/assets/images/littlenavmap_new_22_contextmenus.jpg) |

### Höhenprofil

| ---- | ---- | ---- |
| [![New](/assets/images/littlenavmap_new_22_profile_descent_small.jpg)](/assets/images/littlenavmap_new_22_profile_descent.jpg) | [![New](/assets/images/littlenavmap_new_22_profile_ils_small.jpg)](/assets/images/littlenavmap_new_22_profile_ils.jpg) | [![New](/assets/images/littlenavmap_new_22_profile_vasi_small.jpg)](/assets/images/littlenavmap_new_22_profile_vasi.jpg) |

<!--* Added scrolling and zooming ability to elevation profile. Elevation profile now has a context menu also including `Show on Map` and more functions.\\
  Added splitter to elevation profile dock window which has sliders for zooming vertically and horizontally. These can be hidden by dragging the splitter to the right.\\
  Zooming can also be done using mouse wheel (`Wheel+Shift` for vertical zooming).\\
  Added keyboard navigation using cursor keys and numpad keys for zooming and scrolling.\\
  Panning in elevation profile with mouse click and moving like in map. Double click zooms to position on map.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Elevation profile now uses same aircraft icon as map. Changed elevation profile to completely adhere to map painting settings like line width, text size and symbol size. Profile display now hides flight plan if hidden on map.
  [#298](https://github.com/albar965/littlenavmap/issues/298)
* Adjusted elevation profile to display passed, active, straight-in and circle-to-land flight plan legs in the same colors like the flight plan on the map. Navaid symbols are now on the descending or ascending line.
  [#298](https://github.com/albar965/littlenavmap/issues/298)
* Added option to display ILS and VASI slopes in elevation profile if an approach is selected. Menu items allow to disable these.
  [#299](https://github.com/albar965/littlenavmap/issues/299)
* Added calculation and display for top of climb to elevation profile display. Calculation based on aircraft performance data.
* Now showing procedure altitude restrictions in profile display.
* Top of descent is calculated considering altitude restrictions of approach or STAR. Same for top of climb and SID. All legs after and at the FAF and FACF points are forced to minimum altitude to avoid arriving above ILS glideslope.
* Display of `Above Ground Altitude` on top label in profile window follows climb and descent slope instead of using cruise altitude.
* Giving clear error indication if cruise altitude is too high (i.e. TOC and TOC overlap) or if restrictions are violated due to too low cruise altitude.
* Removed barely visible highlight on map when hovering cursor above elevation profile. Highlight colors can now be customized in `little_navmap_mapstyle.ini`. Mouse position in elevation profile is now shown with a cyan/black circle on the map.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Jump back to aircraft functionality added in elevation profile. Uses the same settings as the map.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Fixed display color of profile labels for night mode. Removed all dark profile colors and pens from `little_navmap_mapstyle.ini`. Using OS and style colors now.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Solved problems where aircraft in elevation profile jumped to wrong leg or moved backwards.
* Aircraft track is now ignored when determining profile window altitude to avoid confusion when stale tracks result in wrong profile maximum.
* Aircraft direction now turned if reversal relative to active leg detected.
* Fixed issue where short lines were given wrong elevation with GLOBE data resulting in gaps in the elevation profile ground.
* Fixed several issues with aircraft movement and trail in elevation profile. Profile trail now depends on active leg and is now saved separately from aircraft trail on map.-->

* Scrollen und Zoomen im Höhenprofil hinzugefügt. Das Höhenprofil hat jetzt ein Kontextmenü mit `Zeige Position auf der Karte` und weiteren Funktionen.\\
  Schieberegler zum vertikalen und horizontalen Vergrößern und Verkleinern hinzugefügt. Diese können versteckt werden, indem man den Trennbalken im Fenster nach rechts zieht.\\
  Das Zoomen kann auch mit dem Mausrad durchgeführt werden (`Umsch+Mausrad` für vertikales Zoomen).\\
  Tastaturnavigation mit Pfeiltasten und Nummernblocktasten zum Zoomen und Scrollen ist jetzt möglich.\\
  Scrollen im Höhenprofil per Mausklick funktioniert wie in der Karte. Ein Doppelklick vergrößert die Ansicht auf der Karte.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Das Höhenprofil verwendet nun das gleiche Flugzeugsymbol wie die Karte. Das Profil wurde geändert, um die Einstellungen der Karten wie Linienbreite, Textgröße und Symbolgröße vollständig einzuhalten. Die Profilanzeige blendet nun den Flugplan aus, wenn er auf der Karte ausgeblendet ist.
  [#298](https://github.com/albar965/littlenavmap/issues/298)
* Zur Darstellung von abgeflogenen, aktiven, geradeaus (Straight-In) und Circle-to-Land Abschnitten werden die gleichen Farben wie für den Flugplan auf der Karte benutzt. Symbole befinden sich auf den absteigenden oder aufsteigenden Linien für Steig- und Sinkflug.
  [#298](https://github.com/albar965/littlenavmap/issues/298)
* ILS-Gleitpfad und der vertikale Pfad von VASI werden im Höhenprofil angezeigt, wenn eine Prozedur ausgewählt wurde. Menüpunkte ermöglichen es, diese zu deaktivieren.
  [#299](https://github.com/albar965/littlenavmap/issues/299)
* Berechnung und Anzeige des Steigphase hinzugefügt. Die Berechnung wird auf Grundlage der Leistungsdaten des Flugzeugs durchgeführt.
* Höhenrestriktionen von Prozeduren werden angezeigt.
* Der Start des Sinkfluges wird unter Berücksichtigung der Höhenbeschränkungen von Anflugprozedur oder der STAR berechnet. Dasselbe gilt für das Ende des Steigfluges und SID. Alle Flugplanabschnitte nach den FAF- und FACF-Punkten werden auf Mindesthöhe gezwungen, um nicht über den ILS-Gleitpfad anzukommen.
* Die Anzeige von `Höhe über Grund` im oberen Teil des Profilfensters folgt Steig- und Sinkflug, anstelle der Reiseflughöhe.
* Deutliche Fehleranzeige, wenn die Reiseflughöhe zu hoch ist (d.h. die Steig- und Sinkflugphasen überlappen sich) oder wenn Höhenrestriktionen aufgrund einer zu niedrigen Reiseflughöhe verletzt werden.
* Kaum sichtbare Hervorhebung auf der Karte entfernt, wenn der Mauszeiger über dem Höhenprofil bewegt wird. Hervorhebungsfarben können nun in `little_navmap_map_mapstyle.ini` angepasst werden. Die Mausposition im Höhenprofil wird mit einem cyan/schwarzen Kreis auf der Karte angezeigt.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Funktionalität `Zurück zum Flugzeug springen` im Höhenprofil verwendet die gleichen Einstellungen wie die Karte.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Die Anzeigefarbe der Profilbeschriftung für den Nachtmodus korrigiert. Alle dunklen Profilfarben aus `little_navmap_map_mapstyle.ini` entfernt. Es werden jetzt die Systemfarben verwendet.
  [#34](https://github.com/albar965/littlenavmap/issues/34)
* Probleme behoben, bei denen Flugzeuge im Höhenprofil auf den falschen Abschnitt sprangen oder sich rückwärts bewegten.
* Die Flugzeugspur wird bei der Bestimmung der Profilfensterhöhe ignoriert, um Verwirrung zu vermeiden, wenn veraltete Spuren zu einem falschen Profilmaximum führen.
* Das Flugzeug dreht sich, wenn die Flugrichtung in Bezug auf den aktuellen Abschnitt umkehrt.
* Mehrere Probleme mit der Flugzeugbewegung und -spur im Höhenprofil behoben. Die Spur im Profil hängt vom aktiven Abschnitt ab und wird separat vom Flugzeugpfad auf der Karte gespeichert.

### Flugzeugleistung und Treibstoffplanung

[#255](https://github.com/albar965/littlenavmap/issues/255)

<!--
See main menu -&gt; `Aircraft` and tab `Aircraft` in dock window `Flight plan`.

Note that the new tab in the `Flight plan` dock window is meant for fuel planning and does not change during flight (except when collecting performance data).

| ---- |
| [![New](/assets/images/littlenavmap_new_22_perf_small.jpg)](/assets/images/littlenavmap_new_22_perf.jpg) |

* Added aircraft performance facilities including edit dialog, new, save, save as, load, file history and report.\\
  Performance files (`lnmperf`) can be dragged into the main window of _Little Navmap_ to load.\\
  Added main menu `Aircraft` and tab on flight plan dock window for loading, saving and editing of performance files.
* Performance and fuel calculation can use an average cruise wind setting where wind is interpolated for climb and descent for calculation.
* Added automatic aircraft performance calculation option during flight (`Aircraft` -&gt; `Collect Performance for Flight`).
* A default performance profile with 3 NM / 1000 ft descent and climb rules and no fuel consumption is default.
* Flight plan table shows both fuel weight and volume in separate columns.
* Window title now shows aircraft performance file name additionally to flight plan file and change state indicated by `*`.
* URLs are recognized in aircraft performance description and can be opened there. Local file and directory links (e.g. `file:///C:/Projekte/atools` or `file:///home/alex/`) as well as web URLs are recognized and opened.
* Showing red error messages on top of fuel report indicating invalid or missing values.
* Added setting in options to change text size in performance report.
* Added aircraft performance file to userpoint log entry.
* Removed now useless speed setting from flight plan dock and deleted rule of thumb descent setting in options dialog.
-->

Siehe Hauptmenü -&gt; `Flugzeug` und Tab `Flugzeug` im Dockfenster `Flugplan`.

Beachten Sie, dass die neue Registerkarte im Dockfenster `Flugplan` für die Treibstoffplanung bestimmt ist und sich während des Fluges nicht ändert (außer bei der Erfassung von Leistungsdaten).

| ---- |
| [![New](/assets/images/littlenavmap_new_22_perf_small.jpg)](/assets/images/littlenavmap_new_22_perf.jpg) |

* Neue Funktionen für Flugzeugleistung und Treibstoffberechnung hinzugefügt, darunter Bearbeitungsdialog, Neu, Speichern, Speichern unter, Laden, Dateiverlauf und Bericht.
  Dateien für Flugzeugleistung (`lnmperf`) können aus einem Dateimanager in das Hauptfenster von _Little Navmap_ zum Laden gezogen werden.
  Hauptmenü `Flugzeug` und Registerkarte im Flugplan-Dockfenster zum Laden, Speichern und Bearbeiten von Leistungsdateien.
* Die Leistungs- und Kraftstoffberechnung kann eine durchschnittliche Windstärke und -richtung verwenden, bei der Wind für Steig- und Sinkflug für die Berechnung interpoliert wird.
* Option zur automatischen Berechnung der Flugzeugleistung und Treibstoffverbrauches während des Fluges hinzugefügt (`Aircraft` -&gt; `Collect Performance for Flight`).
* Ein Leistungsprofil mit 3 NM / 1000 Fuß Steig- und Sinkflug ist Standard.
* Die Flugplantabelle zeigt sowohl den verfügbaren Treibstoff in Volumen und Gewicht in separaten Spalten.
* Der Fenstertitel zeigt nun zusätzlich zur Flugplandatei und dem Änderungsstatus, der durch `*` angezeigt wird, auch den Namen der Flugzeugleistungsdatei an.
* URLs werden in der Beschreibung des Flugzeugs erkannt und können dort geöffnet werden. Lokale Datei- und Verzeichnislinks (z.B. `file:///C:/Projekte/atools` oder `file:///home/alex/`) sowie Web-URLs werden erkannt und geöffnet.
* Fehlermeldungen, die auf ungültige oder fehlende Werte hinweisen, werden auf dem Kraftstoffbericht angezeigt.
* Einstellung hinzugefügt, um die Textgröße im Leistungsbericht zu ändern.
* Flugzeugleistungsdatei wird zum generierten Nutzerpunkt Log-Eintrag hinzugefügt.
* Die unnötige Geschwindigkeitseinstellung wurde aus dem Dock des Flugplans entfernt und die Einstellung der Faustregel für den Sinkflug im Einstellungsdialog gelöscht.

### Drucken

<!--See main menu -&gt; `File` -&gt; `Print Map` and `Print Flight Plan`.

* Added flight plan column selection to print dialog. Added more options for header, fuel, performance and others to print dialog.
* Improved printing of flight plan table. Now has proper word wrap, proper column sizes and shows a header for each page.
* Now uses printer resolution for printing the map to get sharper images. This does not apply to the map background.
* Added colors for procedures to printed flight plan table as shown in flight plan dock window.
* Hiding all overlays except scale bar when printing map now.-->

Siehe Hauptmenü -&gt; `Datei` -&gt; `Karte drucken` und `Flugplan drucken`.

* Spaltenauswahl zum Drucken der Flugplantabelle im Druckdialog hinzugefügt. Weitere Einstellungen für Kopfzeilen, Treibstoffplanung, Leistung und Weiteres für den Druckdialog hinzugefügt.
* Verbessertes Drucken der Flugplantabelle. Jetzt mit korrekten Zeilenumbruch, Spaltengrößen und Kopfzeile für jede Seite.
* Verwendet nun die Druckerauflösung zum Drucken der Karte, um schärfere Bilder zu erhalten. Dies gilt nicht für den Kartenhintergrund.
* Prozeduren werden in den gleichen Farben wie im Dockfenster des Flugplans gedruckt.

### Online-Netzwerke

<!--* Added settings for online center sizes in options dialog. Previous settings from INI file are now ignored. See dialog `Options` on tab `Map Display Online`.
  [#267](https://github.com/albar965/littlenavmap/issues/267)
* Added estimated arrival time to online client information tab and search table. Invalid times are now omitted in display.
  [#303](https://github.com/albar965/littlenavmap/issues/303)
* Changed lower limit of online updates for custom networks to five seconds. Emphasized warning to **not to use this for official networks**. See dialog `Options` on tab `Online Flying`.
* Fixed wrong heading display for online aircraft in information display in some cases.
* Improved check for valid whazzup file in options dialog. Now looking for sections `!GENERAL` and `!CLIENTS`.-->

* Einstellungen für die Größen der Online-Center im Einstellungsdialog hinzugefügt. Vorherige Einstellungen aus der INI-Datei werden nun ignoriert. Siehe Dialog `Einstellungen` auf der Registerkarte `Online Kartenanzeige`.
  [#267](https://github.com/albar965/littlenavmap/issues/267)
* Geschätzte Ankunftszeit zur Information und zur Suche hinzugefügt. Ungültige Zeiten werden nun in der Anzeige weggelassen.
  [#303](https://github.com/albar965/littlenavmap/issues/303)
* Die untere Grenze für Online-Updates für benutzerdefinierte Netzwerke wurde auf fünf Sekunden geändert. Warnung, **dies nicht für offizielle Netzwerke** zu verwenden hervorgehoben. Siehe Dialog `Einstellungen` auf der Registerkarte `Online Fliegen`.
* Falsche Kursanzeige für Online-Flugzeuge in der Informationsanzeige korrigiert, die unter bestimmten Bedingungen auftreten kann.
* Verbesserte Überprüfung auf gültige Whazzup-Datei im Einstellungsdialog. Teste nun für Abschnitte `!GENERAL` und `!CLIENTS`.

### Kompassrose

<!--* Now showing crab angle and added display indicator for next waypoint in compass rose.
  [#284](https://github.com/albar965/littlenavmap/issues/284)
* Added configuration options for compass rose in tree view in dialog `Options` on tab `Map Display`.
  [#285](https://github.com/albar965/littlenavmap/issues/285)
* Text size for compass rose, measurement lines and range rings can now be set in dialog `Options` on tab `Map Display`.
* Compass rose range rings are now always drawn. Also if not connected to simulator.
* Fixed error in compass rose where decimal digits were truncated in some cases.-->

* Der Schiebewinkel und der Kurs zum nächsten Wegpunkt wird angezeigt.
  [#284](https://github.com/albar965/littlenavmap/issues/284)
* Konfiguration für die Kompassrose in der Baumansicht im Dialog `Einstellungen` auf der Registerkarte `Kartenanzeige` hinzugefügt.
  [#285](https://github.com/albar965/littlenavmap/issues/285)
* Textgröße für Kompassrose, Messlinien und Entfernungsringe kann im Dialog `Einstellungen` auf der Registerkarte `Kartenanzeige` links unten eingestellt werden.
* Entfernungsringe werden immer gezeichnet. Auch wenn das Programm nicht mit dem Simulator verbunden sind.
* Fehler in der Kompassrose behoben, bei dem in einigen Fällen Dezimalstellen in der Entfernung abgeschnitten wurden.

### Flugplan

<!--* Added drag and drop of flight plans from file manager into main window for loading. Accepts a single flight plan file and all allowed formats for loading (`fms`, `flp`, `pln`) as well as aircraft performance files (`lnmperf`).
  [#291](https://github.com/albar965/littlenavmap/issues/291)
* Added `Insert Flight Plan` menu item into flight plan table context menu. Added `Append Flight Plan` menu item into flight plan table context menu.
* Now selecting and highlighting imported legs after inserting or appending flight plan.
  [#264](https://github.com/albar965/littlenavmap/issues/264)
* Now displaying FAF, IAF, FACF and MAP in the procedure preview, flight plan table and tooltips.
  [#196](https://github.com/albar965/littlenavmap/issues/196)
* FAF and/or FACF is shown with a Maltese cross on the map and in elevation profile. The Maltese cross is applied to either final approach fix or final approach course fix depending on ILS GS intercept altitude and approach type.
  [#196](https://github.com/albar965/littlenavmap/issues/196)
* Changed last `Proceed to Runway` leg to correct `Circle to Land` for approaches without runway ends and `Straight In` for others.
* Circle-to-land and straight-in legs following a missed approach point are now drawn correctly with a dashed line on the map and in the flight plan profile.
  [#252](https://github.com/albar965/littlenavmap/issues/252)
* Added indication for DME distance to or from waypoint in procedure search (e.g. `TAU+6`) and flight plan table for leg types `track from fix from distance`, `track from fix to dme distance`, `heading to dme distance termination` and `course to dme distance`.\\
  This minimizes the confusing duplicate display of idents in the flight plan table.
  [#265](https://github.com/albar965/littlenavmap/issues/265)
* Added procedure name to flight plan table instead of the generic names like `SID` or `STAR`.
* Added display of ARINC name (e.g. `Q21` or `I16`) to flight plan header label since some FMCs need this value.
  [#306](https://github.com/albar965/littlenavmap/issues/306)
* Added warning dialog for flight plan zero cruise altitude before saving.
  [#263](https://github.com/albar965/littlenavmap/issues/263)
* Made loading of procedures more tolerant for renamed runways and for ARINC names of procedures.
* Removed annoying change in flight plan when _Little Navmap_ adapted start position on loading. Now leaving flight plan status as unchanged.
* Disabled export of approach procedures for Flight Factor airbus since required data is unknown.
* Fixed issue with missing runway in X-Plane FMS files having circle-to-land approaches. X-Plane can now load these type of approaches without error message.
* Fixed issue for FSX/P3D flight plans missing byte order mark. These were not accepted by ASN or ASX.
* Added saving of altitudes for X-Plane FMS formats which will show up for each waypoint in the stock FMS now.
* Fixed issue in route description generator which omitted SID and STAR when no intermediate waypoints were present.
* Flight plan table now displays localizer frequencies for approaches.
* Moved FMS 3 format to export sub-menu since it became less important.-->


* Drag & Drop von Flugplänen aus einen Dateimanager in das Hauptfenster ermöglicht nun das einfache Öffnen von Dateien. Akzeptiert werden eine einzelne Flugplandatei und alle zulässigen Formate zum Laden (`fms`, `flp`, `pln`) sowie Flugzeugleistungsdateien (`lnmperf`).
  [#291](https://github.com/albar965/littlenavmap/issues/291)
* Menüpunkt `Füge Flugplan vor ... ein` in das Kontextmenü der Flugplantabelle hinzugefügt. Menüpunkt `Flugplan anhängen ...` wurde in das Kontextmenü der Flugplantabelle aufgenommen.
* Importierte Abschnitte werden ausgewählt, nachdem ein Flugplan eingefügt oder angehängt wurde.
  [#264](https://github.com/albar965/littlenavmap/issues/264)
* Anzeige von FAF, IAF, FACF und MAP in der Prozedurenvorschau, Flugplantabelle und Tooltips.
  [#196](https://github.com/albar965/littlenavmap/issues/196)
* Der FAF bzw. der FACF wird mit Malteserkreuz auf der Karte und im Höhenprofil dargestellt. Das Malteserkreuz wird je nach ILS GS Abfanghöhe und Anflugtyp entweder auf FAF oder den FACF fixiert.
  [#196](https://github.com/albar965/littlenavmap/issues/196)
* Letzter Prozedurabschnitt `Weiter zur Start- und Landebahn` geändert, um `Kreisen um zu Landen` für Anflüge ohne Start- und Landebahnende und `Geradeaus` für andere zu korrigieren.
* `Kreisen um zu Landen` und gerade Strecken, die dem Start des Fehlanfluges folgen, werden nun korrekt mit einer gestrichelten Linie auf der Karte und im Flugplanprofil dargestellt.
  [#252](https://github.com/albar965/littlenavmap/issues/252)
* DME-Distanz zu oder von Wegpunkt in der Prozedursuche (z.B. `TAU+6`) und Flugplantabelle für bestimmte Abschnittstypen hinzugefügt.
  Dadurch wird die verwirrende doppelte Anzeige von Kennungen in der Flugplantabelle minimiert.
  [#265](https://github.com/albar965/littlenavmap/issues/265)
* In der Flugplantabelle wird jetzt der Prozedurname anstelle der allgemeinen Namen wie `SID` oder `STAR` hinzugefügt.
* ARINC-Name der Prozedur (z.B. `Q21` oder `I16`) zur Beschriftung im Flugplanfenster hinzugefügt, da einige FMCs diesen Wert benötigen.
  [#306](https://github.com/albar965/littlenavmap/issues/306)
* Warndialog vor dem Speichern hinzugefügt, der angezeigt wird, wenn die Flugplanhöhe Null ist.
  [#263](https://github.com/albar965/littlenavmap/issues/263)
* Das Laden von Prozeduren wurde toleranter für umbenannte Start- und Landebahnen und für ARINC-Prozedurnamen.
* Lästige Änderungen im Flugplan wurden entfernt, wenn _Little Navmap_ die Startposition beim Laden angepasst hat. Der Änderungsstatus des Flugplans bleibt nun unverändert.
* Der Export von Anflugprozeduren für den Flight Factor Airbus wurde deaktiviert, da die erforderlichen Daten unbekannt sind.
* Problem mit fehlender Start- und Landebahn in X-Plane FMS-Dateien behoben, die eine Fehlermeldung in X-Plane verursachten.
* Ein Problem bei FSX/P3D-Flugplänen behoben, bei denen die Byte-Order-Mark fehlte. Diese wurden von ASN oder ASX nicht akzeptiert.
* Speichern von Höhen für X-Plane FMS-Formate hinzugefügt, die nun für jeden Wegpunkt im X-Plane FMS angezeigt werden.
* Problem in der Routenbeschreibung behoben, bei dem SID und STAR weggelassen wurden, wenn keine Zwischenziele vorhanden waren.
* Die Flugplantabelle zeigt nun die Localizer-Frequenzen für Anflüge an.
* Das X-Plane FMS 3-Format wurde in das Untermenü `Export` verschoben.

### Prozeduren

<!--* Now loading procedures partially from a flight plan if some could not be found.
* Better error report on procedure loading issues. Now showing the procedure names which cannot be found in the database.
* Fixed several drawing and other issues with procedures.
* Added workaround for 3-letter airport idents in procedures which were not recognized and showed an error in the procedure search (red procedure leg).-->

* Prozeduren werden teilweise aus einem Flugplan geladen, auch wenn einige nicht gefunden werden konnten.
* Besserer Fehlerbericht über Probleme beim Laden der Prozeduren. Es werden die Prozedurnamen angezeigt, die in der Datenbank nicht gefunden werden können.
* Mehrere Probleme mit dem Zeichnen und Laden von Prozeduren wurden behoben.
* Problem mit dreistelligen Flugplatz-Kennungen in Prozeduren beseitigt. Diese wurden nicht erkannt und zeigten einen Fehler in der Prozedursuche (roter Prozedurabschnitt).

### Karte

| ---- |
| [![New](/assets/images/littlenavmap_new_22_sunshadow_small.jpg)](/assets/images/littlenavmap_new_22_sunshadow.jpg) | [![New](/assets/images/littlenavmap_new_22_mora_small.jpg)](/assets/images/littlenavmap_new_22_mora.jpg) |

<!--* Added mouse click and modifier options for quick access. Doing a second click on the hot spot of a shown feature like range rings or measurement lines removes it. [#268](https://github.com/albar965/littlenavmap/issues/268)
  * Shift+Click: Add or remove range rings or navaid range ring.
  * Ctrl+Click: Start rhumb-line measurement or delete measurement line.
  * Alt+Click: Start great circle line measurement or delete measurement line.
  * Ctrl+Shift+Click: Add or edit userpoint.
  * Ctrl+Alt+Click: Insert point into nearest flight plan leg.
  * Shift+Alt+Click: Append point to flight plan.
* Added `Shift+Wheel` and key combinations for zooming in small steps. See legend for a list of keys.
* Added minimum off route altitude (MORA) data one degree grid display to map. Data coming from Navigraph. See main menu -&gt; `View` -&gt; `Show Minimum Altitude`.
  [#84](https://github.com/albar965/littlenavmap/issues/84)
* Added extra airport display layer in map that shows runways and runway numbers before airport diagram shows up.
  [#308](https://github.com/albar965/littlenavmap/issues/308)
* Fixed several problems for aircraft and next waypoint centering mode. Updates are now triggered by a timer depending on speed and distance to waypoint. Minimum zoom distance is now a function of altitude above ground.\\
  See dialog `Options` on tab `Simulator Aircraft`: `Allow scrolling ...` and `Jump back ...`.
* Centering of active flight plan leg and aircraft (if enabled in options) falls back to simple aircraft centering if distance to flight plan is larger than 50 NM.\\
  This helps to avoid situations where the program zoomed too far out when flying with stale flight plans.
* Changed jump-back-to-aircraft logic to avoid weird behavior (zooming far out and other issues).\\
  **When aircraft is on ground or `Center map on aircraft and next flight plan waypoint` is not selected:**\\
  * Start looking around on the map by moving first (mouse drag or cursor keys) and not by zooming (mouse wheel or plus and minus keys) to suppress aircraft centering for a while.
  * Zooming without movement (drag or cursor keys only) keeps the zoom distance.
* Added option to avoid blurred online maps. This is enabled per default. See dialog `Options` on tab `Map`: `Avoid blurred ...`. This options works best with the map projection `Mercator`.
  [#254](https://github.com/albar965/littlenavmap/issues/254)
* Added option for sun shading on map which can use real time, simulator time or user defined time. See main menu `View` -&gt; `Show Sun Shading` and `Sun Shading` sub-menu.\\
  Shading darkness can be adjusted in dialog `Options` on tab `Map Display`: `Sun shading ...`.
* Added dialog to set user defined time and date for sun shading. See main menu `View` -&gt; `Sun Shading` -&gt; `Set user defined time`.
  [#60](https://github.com/albar965/littlenavmap/issues/60)
* Drawing of complex X-Plane airports accelerated significantly.
  [#245](https://github.com/albar965/littlenavmap/issues/245)
* Added dashed center line to ILS feathers and made feathers semi-transparent.
* ILS labels now adhere to the text background color setting for navaids. This allows to select a white background for the labels for better visibility.
* Now omitting curves, arcs, holds, procedure turns and other fancy geometry of procedures on high zoom factors to avoid a mess up of graphics in the spherical projection. Fixed flight plan leg distance label turning into weird directions when using spherical projection and at high zoom factors.
  [#287](https://github.com/albar965/littlenavmap/issues/287)
* Aircraft icon heading is now more correct at higher zoom levels when using spherical projection.
  [#239](https://github.com/albar965/littlenavmap/issues/239)
* Improved zooming when using a touchpad. Now less sensitive when using two finger touchpad or other gestures.
* Added workaround for issues when zooming to map objects. Now determining the best zoom distance until all is visible.
* Fixed issue of map jumping to the wrong place when zooming around the anti-meridian with the mouse wheel.
* Changed map context menu to correctly show only the mentioned item in `Show information` menu item and nothing else.
* Replaced home view symbol on map with actual icon from toolbar button.
* Moved `Remove all Ranges, Measurements and Patterns` from all context menus to main menu `Map`.
* Several issues with the map context menu and `Show Information fixed`.
* Fixed several drawing issues with the aircraft trail, procedures on high zoom levels, flight plan, ILS and others.-->




* Spezielle Mausklicks für den schnellen Zugriff hinzugefügt. Ein zweiter Klick auf den Punkt eines angezeigten Objektes, wie Entfernungsringe oder Messlinien, entfernt diese. [#268](https://github.com/albar965/littlenavmap/issues/268)
  * Umschalt+Klick: Hinzufügen oder Entfernen von Entfernungsringen oder Reichweitenringen für Funkfeuer.
  * Strg+Klick: Rhumb-Line-Messung starten oder löschen.
  * Alt+Klick: Großkreislinie messen oder löschen.
  * Strg+Shift+Klick: Benutzerpunkt hinzufügen oder bearbeiten.
  * Strg+Alt+Klick: Punkt in die nächstgelegene Flugplanstrecke einfügen.
  * Umschalt+Alt+Klicken: Punkt an den Flugplan anhängen.
* `Umsch+Mausrad` und Tastenkombinationen für Zoomen in kleinen Schritten hinzugefügt. Siehe Legende für eine Liste der Schlüssel.
* Minimale Off-Route-Höhenangaben (MORA) von einem Grad Raster zur Karte hinzugefügt. Die Daten dazu kommen von Navigraph (in der beigelegten Datenbank Zyklus 1801 enthalten). Siehe Hauptmenü -&gt; `Ansicht` -&gt; `Minmale Flughöhe anzeigen`.
  [#84](https://github.com/albar965/littlenavmap/issues/84)
* Start- und Landebahnen werden jetzt beim Vergrößern der Karte früher vor dem Flughafendiagramm angezeigt.
  [#308](https://github.com/albar965/littlenavmap/issues/308)
* Mehrere Probleme mit der Zentrierung von Flugzeug und dem nächsten Wegpunkt behoben. Aktualisierungen werden durch einen Timer ausgelöst, der von der Geschwindigkeit und der Entfernung zum Wegpunkt abhängt. Der minimale Zoomabstand ist jetzt eine Funktion der Höhe über Grund.
  Siehe Dialog `Einstellungen` auf der Registerkarte `Simulatorflugzeug`: `Scrollen und Zoomen erlauben ...` und `Springe nach dieser Zeit zurück ...`.
* Die Zentrierung von aktiven Flugplanabschnitten und Flugzeugen (wenn in den Einstellungen aktiviert) fällt nun zurück auf die einfache Flugzeugzentrierung, wenn die Entfernung zum Flugplan größer als 50 NM ist.
  Dies hilft, Situationen zu vermeiden, in denen das Programm beim Fliegen mit alten Flugplänen zu weit herauszoomt.
* Sprung zurück zum Flugzeug wurde geändert, um seltsames Verhalten zu vermeiden (weites hinauszoomen und andere Probleme).
  **Wenn das Flugzeug am Boden ist oder Zentrieren des Flugzeugs und des nächsten Wegpunktes nicht ausgewählt ist:**\\\
  * Auf der Karte umsehen, indem diese zuerst bewegt wird (Mausklick oder Cursortasten) und nicht durch Zoomen (Mausrad oder Plus- und Minustaste). Dies unterdrückt die Flugzeugzentrierung für eine Weile.
  * Das Zoomen ohne Bewegung (nur mit Mausrad, Plus- oder Minustasten) hält den aktuellen Zoomabstand bei.
* Verschwommene Online-Karten können vermieden werden. Dies ist standardmäßig aktiviert. Siehe Dialog `Einstellungen` auf der Registerkarte `Karte`: `Unscharfe Kartenanzeige vermeiden`. Diese Option funktioniert am besten mit der Kartenprojektion `Mercator`.
  [#254](https://github.com/albar965/littlenavmap/issues/254)
* Option für Sonnenschatten auf der Karte hinzugefügt, die Echtzeit, Simulatorzeit oder benutzerdefinierte Zeit verwenden kann. Siehe Hauptmenü `Ansicht` -&gt; `Sonnenschatten anzeigen` und `Sonnenschatten Zeit` Untermenü.\\\
  Die Schattierung kann im Dialog `Einstellungen` auf der Registerkarte `Kartenanzeige` eingestellt werden: `Sonnenschattierung ...`.
* Dialog zum Einstellen der benutzerdefinierten Uhrzeit und des Datums für den Sonnenschatten hinzugefügt. Siehe Hauptmenü `Ansicht` -&gt; `Sonnenschatten Zeit` -&gt; `Benutzerdefinierte Zeit einstellen`.
  [#60](https://github.com/albar965/littlenavmap/issues/60)
* Die Darstellung komplexer X-Plane-Flughäfen hat sich deutlich beschleunigt.
  [#245](https://github.com/albar965/littlenavmap/issues/245)
* ILS-Federn werden mit gestrichelter Mittellinie und halbtransparent dargestellt.
* ILS-Beschriftungen halten sich an die Einstellung der Texthintergrundfarbe für Navigationshilfen. Dies ermöglicht es, einen weißen Hintergrund für die Beschriftung auszuwählen, um die Sichtbarkeit zu verbessern.
* Jetzt werden Kurven, Bögen und andere Geometrien von Prozeduren bei hohen Zoomfaktoren weggelassen, um Probleme bei der Darstellung zu vermeiden.
  [#287](https://github.com/albar965/littlenavmap/issues/287)
* Die Überschrift der Flugzeugsymbols ist bei höheren Zoomstufen bei sphärischer Projektion genauer.
  [#239](https://github.com/albar965/littlenavmap/issues/239)
* Das Zoomen bei Verwendung eines Touchpads wurde verbessert und ist jetzt weniger empfindlich bei der Verwendung von Zwei-Finger- oder anderen Gesten.
* Probleme beim Zoomen auf Kartenobjekte beseitigt. Nun wird der besten Zoomabstand ermittelt, bis alles sichtbar ist.
* Karte ist an die falsche Stelle gesprungen, wenn man mit dem Mausrad in der Nähe des Anti-Meridians (Datumsgrenze) zoomte. Problem wurde beseitigt.
* Das Kontextmenü der Karte wurde so geändert, dass nur noch das erwähnte Kartenobjekt im Menüpunkt `Informationen anzeigen` korrekt angezeigt wird.
* Das Symbol für die Heimansicht auf der Karte wurde durch das aktuelle Symbol der Werkzeugleiste ersetzt.
* Menüpunkte zum Entfernen von Messlinien und anderen von Kontextmenüs in das Hauptmenü `Karte` verschoben.
* Mehrere Probleme mit dem Kontextmenü der Karte und `Informationen anzeigen` behoben.
* Mehrere Probleme beim Zeichnen des Flugzeugpfads, Prozeduren, Flugplan, ILS und anderen behoben.
* Die OpenMapSurfer Bergschattierung wurde durch diejenige ersetzt, die für OpenStreetMap verwendet wird, da der Server offline ist.

### Flugplatzwetter

Siehe Hauptmenü -&gt; `Ansicht` -&gt; `Flugplatzwetter anzeigen` und
`Flugplatzwetter Quelle`. [#6](https://github.com/albar965/littlenavmap/issues/6)

| [![New](/assets/images/littlenavmap_new_22_weather_map_small.jpg)](/assets/images/littlenavmap_new_22_weather_map.jpg) |

<!--* Added display for weather symbols to map showing lowest cloud coverage (from empty to filled circle), wind direction, wind speed (barbs) and flight rules according to official color coding: LIFR/magenta, IFR/red, MVFR/blue and VFR/green.
* Added map weather selection for all supported weather sources in menu view. See main menu -&gt; `View` -&gt; `Airport Weather Source`.
* Airport weather icons are loaded from FSX/P3D and remote connections too.
* Showing flight rules and icons for all sources in information and tooltip. Showing selected source for weather in map in the information display by adding suffix `- Map` to `Flight Rules` text.-->

* Anzeige für Wettersymbole hinzugefügt, die die niedrigste Wolkenabdeckung (vom leeren
bis zum gefüllten Kreis), die Windrichtung, die Windgeschwindigkeit (Fahnen) und die Flugregeln
gemäß der offiziellen Farbcodierung anzeigen: LIFR/magenta, IFR/rot, MVFR/blau und VFR/grün.
* Auswahl für alle unterstützten Wetterquellen in der Menüansicht hinzugefügt.
Siehe Hauptmenü -&gt; `Ansicht` -&gt; `Flugplatzwetter anzeigen`.
* Flughafen-Wettersymbole werden vom FSX/P3D und auch über Netzwerkverbindungen geladen.
* Flugregeln und Symbole für alle Quellen werden in Informationen und Tooltips angezeigt. Anzeige der
ausgewählten Wetterquelle in der Karte wird durch Hinzufügen des Suffixes
`- Map` zum Text `Flugregeln`.


### Wetter

<!--* Attempt to fix weather loading issues (disappearing report) for X-Plane `metar.dat`. Weather data is now kept if file was deleted.
* Fixed issue with ActiveSky showing old weather from stale `activeflightplanwx.txt` flight plan files. Now always using the latest from either `activeflightplanwx.txt` or `current_wx_snapshot.txt`.
* General improvements to improve reliability when reading weather files and detecting changes on them.
* More improvements on error tolerance and fixes when reading METARs.-->

* Wetterladeprobleme (verschwindender Bericht) für X-Plane `METAR.rwx` behoben. Wetterdaten werden nun gespeichert, wenn die Datei gelöscht wurde.
* Problem behoben, bei dem ActiveSky das alte Wetter aus veralteten `activeflightplanwx.txt` Flugplandateien zeigte. Nun wird immer das Neueste aus `activeflightplanwx.txt` oder `current_wx_snapshot.txt` verwendet.
* Allgemeine Verbesserungen beim Lesen von Wetterdateien und beim Erkennen von Änderungen.
* Weitere Verbesserungen bei der Fehlertoleranz und Korrekturen beim Lesen von METARs.
* Vorbereitet für Active Sky XP.

### Informationen und Fortschritt

<!--* Added sunrise and sunset display (civil twilight) in UTC for airport information display. Time is based on simulator date or real date depending on connection status. See in dock window `Information` on tab `Airport`.
  [#281](https://github.com/albar965/littlenavmap/issues/281)
* Added distance and bearing (rhumb line) to navaids and airports from the user aircraft in information window and tooltip. Disabled when distance is larger than 500 NM.
  [#274](https://github.com/albar965/littlenavmap/issues/274)
* Added `More` / `Less` link to aircraft progress display to show detailed or brief performance information during flight.
* Added crab angle to aircraft progress display to indicate the needed heading to the next flight plan waypoint in cross wind.
  [#284](https://github.com/albar965/littlenavmap/issues/284)
* Information tabs for airspaces and online centers now highlight geometry on map when clicking the blue `Map` link in the information window.\\
  Above mentioned tabs also have a `Remove Highlights from Map` link on top that clears all highlighted airspaces from the map.
* Now showing restricted airspace designation (like `D-30`) in information and tooltip.
* Showing active time criteria (NOTAM, holidays or others) for airspaces in information window. Added multiple code as indicator for duplicate overlapping airspaces. Navigraph data only.
  [#279](https://github.com/albar965/littlenavmap/issues/279)
* Now displaying related airport information for navaids if available.
  [#289](https://github.com/albar965/littlenavmap/issues/289)
* Com frequencies are now forced into 25 kHz raster on display to avoid invalid frequencies like 0.69 MHz.
* Showing more important flight parameters (IAS, indicated altitude, etc.) bold in aircraft progress.
* More fixes and improvements to information display and tooltips.-->

* Anzeige für die Zeit des Sonnenaufgangs und -untergangs (zivile Dämmerung) in UTC in der Anzeige von Flughafeninformationen hinzugefügt. Die Zeit basiert auf dem Datum des Simulators oder dem tatsächlichen Datum, abhängig vom Verbindungsstatus. Siehe im Dockfenster `Informationen` auf der Registerkarte `Flugplatz`.
  [#281](https://github.com/albar965/littlenavmap/issues/281)
* Entfernung und Peilung (Rhumb-Line bzw. Loxodrome) zu Navigationshilfen und Flugplätzen vom Benutzerflugzeug aus im Informationsfenster und Tooltip hinzugefügt. Deaktiviert, wenn die Entfernung größer als 500 NM ist.
  [#274](https://github.com/albar965/littlenavmap/issues/274)
* Link `Mehr` und `Weniger` zur Anzeige des Flugzeugfortschritts hinzugefügt, um detaillierte oder kurze Informationen während des Fluges anzuzeigen.
* Der Flugzeugfortschrittsanzeige wurde der Schiebewinkel hinzugefügt, um bei Seitenwind den benötigten Kurs zum nächsten Flugplan-Wegpunkt anzuzeigen.
  [#284](https://github.com/albar965/littlenavmap/issues/284)
* Informationsreiter für Lufträume und Online-Zentren zeigen die Geometrie auf der Karte, wenn auf den blauen Link `Karte` im Informationsfenster geklickt wird.
  Die oben genannten Registerkarten haben auch einen Link `Hervorhebungen von der Karte entfernen`, der alle markierten Lufträume von der Karte entfernt.
* Die Bezeichnung des Luftraums (z.B. `D-30`) wird nun in Informationen und Tooltips angezeigt.
* Anzeige aktiver Zeitkriterien (NOTAM, Feiertage oder andere) für Lufträume im Informationsfenster. Mehrfachcode als Indikator für doppelte, sich überlappende Lufträume hinzugefügt. Nur Navigationsdaten.
  [#279](https://github.com/albar965/littlenavmap/issues/279)
* Falls verfügbar, wird nun die zugehörige Flughafeninformationen für Navigationshilfen angezeigt.
  [#289](https://github.com/albar965/littlenavmap/issues/289)
* Com-Frequenzen werden in das 25 kHz-Raster der Anzeige gezwungen, um ungültige Frequenzen wie 0,69 MHz zu vermeiden.
* Darstellung wichtigerer Flugparameter (IAS, angezeigte Höhe usw.) werden im Flugzeugfortschritt hervorgehoben.
* Weitere Korrekturen und Verbesserungen an der Informationsanzeige und den Tooltips.

### Platzrunde

[#197](https://github.com/albar965/littlenavmap/issues/197)

| ---- | ---- |
| [![New](/assets/images/littlenavmap_new_22_pattern_dialog_small.jpg)](/assets/images/littlenavmap_new_22_pattern_dialog.jpg)  | [![New](/assets/images/littlenavmap_new_22_pattern_small.jpg)](/assets/images/littlenavmap_new_22_pattern.jpg) |

<!--* Added option to draw airport traffic pattern on the map to all map, flight plan table and airport search context menus. `Platzrunde anzeigen at ...` is enabled when right clicking on an airport.\\
  Right click on traffic patter hotspot near runway threshold to remove it.
* A configuration dialog is shown when adding a traffic pattern that allows to customize distances, colors and other options.-->

* Option zur Darstellung von Platzrunden auf der Karte in alle Kontextmenüs von Karte, Flugplantabelle und Flughafensuche hinzugefügt. `Platzrunde für ... anzeigen` ist aktiviert, wenn Sie mit der rechten Maustaste auf einen Flughafen klicken.
  Klicken Sie mit der rechten Maustaste auf den aktiven Punkt der Platzrunde in der Nähe der Start- und Landebahnschwelle, um ihn im Kontextmenü zu entfernen.
* Beim Hinzufügen einer Platzrunde wird ein Konfigurationsdialog angezeigt, der es ermöglicht, Abstände, Farben und andere Einstellungen anzupassen.

### Einstellungen

<!--* Moved options `Use a short name ICAO_ICAO.pln when saving FSX or P3D flight plans instead of the long name`, `Avoid overwriting Flight Plan with not matching departure and destination` and `Center flight plan on map after loading` to flight plan tab in options.
* Various other changes for online networks, map display, scenery library and more. See related items in this change log.-->

* Diverse Einstellungen bezüglich Flugplan auf den Reiter `Flugplan` verschoben.
* Verschiedene andere Änderungen für Online-Netzwerke, Kartendarstellung, Szeneriebibliothek und mehr. Siehe zugehörige Elemente in diesem Änderungsprotokoll.

### Suche

<!--* Added `Show Information for Airport`, `Show Airport on Map` and `Show Airport in Search` items to the context menu in the procedure search tab.
* Various other improvements and fixes to procedure search.-->

* Neue Menüpunkte für Flugplatz in der Prozedursuche eingefügt.
* Verschiedene andere Verbesserungen und Korrekturen bei der Prozedursuche.

### Nutzerpunkte

<!--* URLs are now recognized in userpoint information display and can be opened there. Local file and directory links (e.g. `file:///C:/Projekte/atools` or `file:///home/alex/`) links as well as web URLs are recognized and opened.
* Fixed issue where takeoff or landing airports and runways were not recognized correctly for logbook entries.-->

* URLs werden nun in der Informationsanzeige für Nutzerpunkte erkannt und können dort geöffnet werden. Lokale Datei- und Verzeichnislinks (z.B. `file:///C:/Projekte/atools` oder `file:///home/alex/`) sowie Web-URLs werden erkannt und geöffnet.
* Es wurde ein Problem behoben, bei dem Start- und Landebahnen für Logbucheinträge nicht korrekt erkannt wurden.

### Benutzerschnittstelle und Allgemeines

<!--* GUI style including `Night` can now be changed on the fly from the menu `Window` -&gt; `Style`. Removed style from options dialog and moved map darkness for night style to dialog `Options` to tab `Map Display`. Fixed all remaining artifacts which appeared after style change.
  [#142](https://github.com/albar965/littlenavmap/issues/142)
* Added option to disable map window undocking in options dialog on tab `Map`.\\
  Allowing to undock the map window (option checked - default) can cause issues when resizing dock windows or the main window.\\
  Uncheck this option if you see strange or annoying resizing behavior when changing dock window or main window sizes.\\
  In some cases the dock window might also freeze, i.e. docks cannot be resized. Uncheck this option if you see one of these issues.
* `Reset window layout` now also changes window size and centers window to avoid messed up layouts. Changed default layout to avoid locked elevation profile size.
* Disabled restoring of full screen mode on macOS since Qt freezes dock windows.\\
  If that happens double click the title bar of any dock window to float it. Double click again to dock it back and you can resize all docks again.
* Now always showing version in main window title. Development versions also show Git revision.
  [#304](https://github.com/albar965/littlenavmap/issues/304)
* Added `Copy Map Image to Clipboard` function in file menu.
* Now appending date and time suffix to map screenshot name to avoid overwriting for `Save Map as Image`.
* Added warning dialog when using the buggy and limited online elevation data.
* Added information dialog for Navigraph only scenery mode.
  [#262](https://github.com/albar965/littlenavmap/issues/262)
* Using extra icon and background color to make splitter in route string dialog better visible. Now preventing collapsing of upper part in route string dialog to avoid confusion.
* Made warning about saving X-Plane FMS 11 format less alarming.
* Changed `Show map window` menu item to `Show all floating Windows` which raises all floating dock windows. Can also be used to get a lost map window back.
* Now raising all floating windows on startup to avoid hidden and/or inaccessible windows.
* Changed search path for custom map themes to be based on executable path since macOS gives a wrong current directory.
  [#261](https://github.com/albar965/littlenavmap/issues/261)
* Log file is now rotated if the file size of 10 MB is exceeded. This avoids overwriting on startup and eases error reporting.
  [#275](https://github.com/albar965/littlenavmap/issues/275)
* Added new `Remove all Highlights and Selections` menu item to menu `Map` and toolbar. [#308](https://github.com/albar965/littlenavmap/issues/308)
* Added `Copy to Clipboard` to update notification dialog to copy contents as plain and formatted text.
* Added FAQ link help menu.
* Various other improvements regarding error messages and changes in menu structure.-->

* Der Stil der Benutzeroberfläche (auch `Night`) kann schnell über das Menü `Fenster` -&gt; `Stil` geändert werden. Einstellung aus dem Optionsdialog entfernt und die Einstellung für den Nachtstil in den Dialog `Einstellungen` auf die Registerkarte `Kartenanzeige` verschoben. Alle verbleibenden Artefakte, die nach einem Wechsel auftraten, wurden korrigiert.
  [#142](https://github.com/albar965/littlenavmap/issues/142)
* Neue Option zum Deaktivieren des Abdockens des Kartenfensters im Optionsdialog auf der Registerkarte `Karte`.\\
  Das Deaktivieren des Kartenfensters (Option aktiviert - Standard) kann Probleme bei der Größenänderung von Dockfenstern oder des Hauptfensters verursachen.
  Deaktivieren Sie diese Option, wenn Sie beim Ändern der Größe von Dockfenstern oder Hauptfenstern ein unerwünschtes Größenänderungsverhalten feststellen.
  In einigen Fällen kann das Dockfenster auch einfrieren, d.h. Docks können nicht in der Größe verändert werden. Deaktivieren Sie diese Option, wenn Sie eines dieser Probleme sehen.
* `Fensteranordnung zurücksetzen` ändert nun auch die Fenstergröße und zentriert das Fenster. Die Standardanordnung wurde geändert, um die Größe des gesperrten Höhenprofils zu vermeiden.
* Wiederherstellung des Vollbildmodus auf macOS deaktiviert, da Qt die Dockfenster einfriert.
  Wenn das passiert, auf die Titelleiste eines beliebigen Dockfensters doppelklicken, um das Fenster abzulösen. Erneut doppelklicken, um es wieder anzudocken. Danach kann die Größe aller Docks erneut geändert werden.
* Die Programmversion wird im Titel des Hauptfensters angezeigt. Entwicklungsversionen zeigen auch die Git-Revision.
  [#304](https://github.com/albar965/littlenavmap/issues/304)
* Funktion `Kartenbild in die Zwischenablage kopieren` im Datei-Menü hinzugefügt.
* Datums- und Zeit wird an den Dateinamen bei `Karte als Bild speichern` angefügt.
* Warndialog bei der Verwendung der fehlerhaften und begrenzten Online-Höhendaten hinzugefügt.
* Informationsdialog für den Szeneriemodus `Nutze Navigraph für alle...` hinzugefügt.
  [#262](https://github.com/albar965/littlenavmap/issues/262)
* Der Menüpunkt `Kartenfenster anzeigen` wurde zu `Alle schwebenden Fenster anzeigen` geändert, wodurch alle abgelösten Dockfenster angehoben werden. Dies kann auch verwendet werden, um ein verlorenes Kartenfenster wiederherzustellen.
* Jetzt werden beim Start alle schwebenden Fenster angehoben, um versteckte bzw. unzugängliche Fenster zu vermeiden.
* Der Suchpfad für benutzerdefinierte Kartenthemen wurde geändert, da macOS ein falsches aktuelles Verzeichnis angibt.
  [#261](https://github.com/albar965/littlenavmap/issues/261)
* Die Protokolldatei wird neu erstellt, wenn die Dateigröße von 10 MB überschritten wird. Dadurch wird ein Überschreiben beim Hochfahren vermieden und die Fehlerberichterstattung erleichtert.
  [#275](https://github.com/albar965/littlenavmap/issues/275)
* Neuer Menüpunkt `Alle Hervorhebungen und Auswahlen entfernen` im Menü `Karte` und in der Symbolleiste hinzugefügt. [#308](https://github.com/albar965/littlenavmap/issues/308)
* `Kopieren in die Zwischenablage` zum Benachrichtigungsdialog für Aktualisierungen hinzugefügt, um den Inhalt als formatierten Text zu kopieren.
* `Oft gestellte Fragen` im Hilfemenü hinzugefügt.
* Verschiedene weitere Verbesserungen bei Fehlermeldungen und Änderungen in der Menüstruktur.

### Szeneriebibliothek

<!--* Files can now be excluded from loading for all simulators in options dialog.
  [#29](https://github.com/albar965/littlenavmap/issues/29)
* List in exclusion paths now allow multi selection. See dialog `Options` on tab `Scenery Library Database`: `Add Files ...`.
* Check box for reading inactive scenery is now enabled for X-Plane to choose between reading  `scenery_packs.ini` or full directory structure in scenery loading dialog. This helps if using tools to disable scenery.
  [#151](https://github.com/albar965/littlenavmap/issues/151)
* Now fetching the first X-Plane installation path from `x-plane_install_11.txt` as base path.
* X-Plane parking positions are now at correct coordinates.
  [#256](https://github.com/albar965/littlenavmap/issues/256)
* Fixed issues with symbolic links in scenery loader. Now using path as-is instead of converting to canonical path (i.e. resolving the symbolic links).
  [#29](https://github.com/albar965/littlenavmap/issues/29)
* Database minor version updated to 13.-->

* Einzelne Dateien können nun für alle Simulatoren im Einstellungsdialog vom Laden ausgeschlossen werden.
  [#29](https://github.com/albar965/littlenavmap/issues/29)
* Die Liste der Pfade erlaubt nun Mehrfachauswahl. Siehe Dialog `Einstellungen` auf der Registerkarte `Szeneriebibliothek`: `Dateien hinzufügen ...`.
* Das Kontrollkästchen zum Lesen inaktiver Szenerie ist aktiviert, damit man für X-Plane zwischen dem Lesen von `scenery_packs.ini` oder der vollständigen Verzeichnisstruktur wählen kann. Dies ist hilfreich, wenn Sie Werkzeuge verwenden, um die Szenerien zu deaktivieren.
  [#151](https://github.com/albar965/littlenavmap/issues/151)
* Der X-Plane-Installationspfad von `x-plane_install_11.txt` wird nun als Basispfad im Dialog beim ersten Start eingestellt.
* X-Plane Parkpositionen sind an den richtigen Koordinaten.
  [#256](https://github.com/albar965/littlenavmap/issues/256)
* Probleme mit symbolischen Links beim Laden von Szenerie behoben. Den Pfad wird wie gegeben verwendet, anstatt ihn in den kanonischen Pfad zu konvertieren (d.h. die symbolischen Links aufzulösen).
  [#29](https://github.com/albar965/littlenavmap/issues/29)
* Datenbankversion aktualisiert auf 13.

### X-Plane / Little Xpconnect

<!--* Now reading X-Plane `acf` files once to get aircraft name and engine type for a better classification. Allows to show helicopter and jet AI symbols in Little Navmap.
  [#271](https://github.com/albar965/littlenavmap/issues/271)
* Added airplane model and registration. Now using description for title.-->

* Die X-Plane `acf` Dateien werde nun von _Little Xpconnect_ gelesen, um den Namen des Flugzeugs und den Triebwerkstyp für eine bessere Klassifizierung zu erhalten. Das ermöglicht die Anzeige von Symbolen für Helikopter oder Jets in _Little Navmap_.
  [#271](https://github.com/albar965/littlenavmap/issues/271)
* Flugzeugmodell und Registrierung hinzugefügt. Jetzt mit Beschreibung für den Titel.

**Siehe im Download enthaltene Datei `CHANGELOG.txt` oder [hier online](https://github.com/albar965/littlenavmap/blob/release/2.2/CHANGELOG.txt) für eine komplette Liste aller Änderungen (Englisch).**

**Alle Dateien wurden mit [VirusTotal](https://www.virustotal.com) überprüft.**
