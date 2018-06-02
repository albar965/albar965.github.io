---
layout: post
title:  Little Navmap 2.0.2 veröffentlicht
date:   2018-06-02 09:30:00 +0200
categories: release
---

**Direkter Download:
[Windows](https://github.com/albar965/littlenavmap/releases/download/v2.0.2/LittleNavmap-win-2.0.2.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.0.2/LittleNavmap-macOS-2.0.2.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v2.0.2/LittleNavmap-linux-2.0.2.tar.gz)**

[**► Bildschirmfotos**](/littlenavmapscreens.html)

[**► Online-Handbuch**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/) (Englisch)

[**► Eigenschaften und Funktionen**](/littlenavmap.html) (Englisch)

## Anmerkungen

* **Die Szenerie-Bibliothek sollte neu geladen werden.**
* **X-Plane-Benutzer: Installieren Sie das beigelegte _Little Xpconnect_ 1.0.9 erneut für Fehlerbehebungen bezüglich falscher magnetischer Deklination.**
* **Die Übersetzungen der graphischen Oberfläche sind im Download-Archiv mit enthalten.<br/>Die Übersetzungspakete sind nicht mehr erforderlich.**

## Änderungen 1.8.5 to 2.0.2

### Übersicht

* Mehrere Übersetzungen (u.a. Deutsch) für die Benutzeroberfläche sind enthalten.
* Unterstützung für Online-Netzwerke wie VATSIM oder benutzerdefinierte Netzwerke.
* Benutzerdefinierte Wegpunkte: Komplette Verwaltung, Import, Export, Suche und Anzeige.
* Mehr Flugplan Exportformate.
* Zusätzliche Menüoptionen zum Speichern von Wegpunkten anstelle von SID / STAR oder Anflugprozeduren.
* Neue Anzeigeoptionen für Flugplätze.
* Kompassrose
* IVAO Wetter und nächstes NOAA Wetter.
* Die enthaltene Navigraph AIRAC Datenbank wurde auf den Zyklus 1801 aktualisiert.

### Neue Online-Handbuch Kapitel und / oder Änderungen

Alle Verweise zeigen auf das Englische Handbuch.

* [Benutzerdefinierte Wegpunkte](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/USERPOINT.html)
* [Nutzerdatenmenü](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/MENUS.html#userdata-menu)
* [Nutzerpunkte im Kontextmenü der Karte](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/MAPDISPLAY.html#add-userpoint)
* [Online-Netzwerke](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/ONLINENETWORKS.html)
* [Kompassrose](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/de/COMPASSROSE.html)
* [Benutzerdefinierte Flugplanpositionen bearbeiten](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/EDITFPPOSITION.html)
* [Koordinatenformate](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/COORDINATES.html)
* [Anzeigebereich für Online-Center anpassen](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/de/CUSTOMIZE.html#customize-online-center)
* [Benutzerpiktogramm-Symbole anpassen](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/CUSTOMIZE.html#customize-userpoint-icons)

Thanks to Marc from Germany for revising the manual!

### Neue Einstellungen

Für vergrößerte Ansicht auf das Bild klicken (Englische Version). Die Tooltips im Dialog `Einstellungen` geben Hilfestellung.

| ---- | ---- |
| **Kartenanzeige**<br/> [![Options Map Display](/assets/images/littlenavmap_new_options_mapdisplay_small.jpg)](/assets/images/littlenavmap_new_options_mapdisplay.jpg) | **Simulatorflugzeug**<br/> [![Options Simulator Aircraft](/assets/images/littlenavmap_new_options_aircraft_small.jpg)](/assets/images/littlenavmap_new_options_aircraft.jpg) |
| **Wetter**<br/> [![Options Weather](/assets/images/littlenavmap_new_options_weather_small.jpg)](/assets/images/littlenavmap_new_options_weather.jpg) | **Karte**<br/> [![Options Map](/assets/images/littlenavmap_new_options_map_small.jpg)](/assets/images/littlenavmap_new_options_map.jpg) |

### Übersetzungen

* Github Issue: [#135](https://github.com/albar965/littlenavmap/issues/135)
* Übersetzungen der Benutzeroberfläche nach Niederländisch, brasilianisches Portugiesisch, Französisch, Spanisch und
  Deutsch. Alles komplett. Sprachpakete werden nicht mehr benötigt. Danke an alle, die dazu beigetragen haben!
* Beigelegte Kartenlegende in Spanisch, Französisch und Deutsch verfügbar.
* Das Hilfesystem ist nun flexibler und kann Legenden- und Hilfedateien laden, wenn sie für die Systemsprache vorhanden sind.

Vielen herzlichen Dank an Daniel "Wolf", Eddy Crequie, merspieler, Patrick JUNG , Ricardo Vitor and Stephan Leukert für die Übersetzungen.

### Online-Netzwerke

* Github Issue: [#45](https://github.com/albar965/littlenavmap/issues/45)
* Handbuch: [Online-Netzwerke](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/ONLINENETWORKS.html) (Englisch)
* IVAO, VATSIM und benutzerdefinierte Online-Netzwerke werden nun unterstützt. **IVAO ist derzeit aufgrund fehlender Freigabe deaktiviert.
  Es werden Freiwillige benötigt, um einen Spiegelserver einzurichten und zu verwalten.**
* Alle Registerkarten und Menüelemente für Online-Netzwerke sind in Little Navmap verborgen, bis ein Netzwerk im Dialog `Einstellungen` auf der Registerkarte `Online Fliegen` aktiviert wird.
* Aktualisierungsrate für eigene Netzwerke und Web-Adresse können im Dialog `Einstellungen` auf der Registerkarte `Online Fliegen` eingestellt werden.
* Anzeige von Clients, Servern und Online-Zentren auf der Karte, in Informationsfenstern, Suchregisterkarten und Kontextmenüs.
* Kartenhervorhebungen und Tooltips für Center und Kundenflugzeuge ähnlich Flughäfen und Navigationshilfen.
* CSV-Export über die Zwischenablage für alle Online-Informationen im Suchfenster.

### Nutzerpunkte

Benutzerdefinierte Wegpunkte wie VRP, Lesezeichen, Orte und andere.

* Github Issue: [#3](https://github.com/albar965/littlenavmap/issues/3)
* Handbuch: [Nutzerpunkte](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/USERPOINT.html)
* Neues Hauptmenü `Nutzerdaten` mit verschiedenen Import- und Exportoptionen.
* Eine neue Registerkarte `Nutzerpunkte` im Fenster `Suche` zum Bearbeiten und Suchen mit derselben Funktionalität wie die anderen Suchen.
* Neue Menüpunkte im Kontextmenü der Karte zum Hinzufügen, Bearbeiten, Löschen oder Verschieben von Nutzerpunkten.
* Tooltips für Informationsfenster und Karten können Benutzerinformationen auf der Registerkarte `Navigationshilfen` anzeigen.
* Bearbeiten-Dialog für Nutzerpunkte erlaubt, auch Mehrfachbearbeitungen an mehr als einem ausgewählten Punkt.
* Der Dialog zum Hinzufügen von Nutzerpunkten merkt sich Eingaben, um das Hinzufügen von mehr als einem ähnlichen Punkt zu erleichtern. Der Inhalt kann mit der Schaltfläche `Zurücksetzen` gelöscht werden.
* Der Dialog `Hinzufügen` ist kontextsensitiv und füllt z.B. Flugplatzdaten vor, wenn Sie ein Lesezeichen auf einem Flugplatz hinzufügen.
* Nutzerpunkt aus Karte hinzufügen wird mit der tatsächlichen Höhe bei angeklickter Position gefüllt (nur für GLOBE-Daten).
* Koordinaten können im Bearbeiten- bzw. Hinzufügen-Dialog manuell bearbeitet werden. Mehr als 10 Koordinatenformate werden erkannt.
  Siehe Tooltip im Feld `Breiten- und Längengrad`.
* Nutzerpunkte können zu einem Flugplan hinzugefügt und in benutzerdefinierte Flugplan-Wegpunkte (grünes Quadrat) umgewandelt werden.
* Für jeden Nutzerpunkt wird ein Zeitstempel gespeichert, der es ermöglicht, die letzten Änderungen oder Importe zu finden.
* Als temporär deklarierte Nutzerpunkte werden beim nächsten Start gelöscht.
* Drag-and-Drop-Bearbeitung des Flugplans ermöglicht das Hinzufügen von Nutzerpunkten.
* Import und Export für CSV (Format von anderen bekannten Programmen unterstützt), Garmin `user.wpt` und X-Plane` user_fix.dat`.
* Export in eine XML-Datei, die für den FSX / P3D BGL-Compiler geeignet ist.
* Icons und Typen können erweitert werden, indem SVG-Dateien mit Namen wie `userdata_Mein eigener Typ.svg` im Einstellungsverzeichnis abgelegt werden. Symbole für Bestandsdaten können geändert werden, indem ein Symbol mit dem gleichen Namen wie `userdata_Airstrip.svg` im Einstellungsverzeichnis abgelegt wird. Siehe unter Anpassung unten.
* Option zur automatischen Erstellung eines Benutzereintrags vom Typ `Logbuch` für jeden Start und jede Landung.
  Der Logbucheintrag für die Landung enthält Reiseinformationen wie Durchschnittsgeschwindigkeit, Kraftstoffverbrauch und mehr.
* Die Benennung in der graphischen Oberfläche wurde konsistenter gemacht. `Nutzerpunkte` sind Lesezeichen, VRPs usw. während
  `Positionen` benutzerdefinierte Positionen in einem Flugplan sind.
* Von der Datei `little_navmap_userdata.sqlite` wird bei jedem Start eine Sicherheitskopie angelegt, da Undo / Redo noch nicht verfügbar sind.

### Flugplan speichern und exportieren

* Zusätzliche Menüoptionen zum Speichern von Wegpunkten anstelle von SID / STAR oder Anflugprozeduren. Dies betrifft alle Flugplanformate.
  Beachten Sie, dass die Prozedurinformationen in den Flugplänen nicht gespeichert werden, wenn diese Menüpunkte aktiviert sind.
  Siehe [Wegpunkte für Anflüge speichern und Wegpunkte für SID und STAR speichern](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/MENUS.html#export-flight -Plan-Ansatz-Wegpunkte) in der Bedienungsanleitung.
    [#195](https://github.com/albar965/littlenavmap/issues/195)
* Neue Exportformate für Flugpläne: Blackbox-Simulationen Airbus, iFly 737, ProSim, UFMC und X-FMC.
* `Show in SkyVector` im Export Menü hinzugefügt.
* Das Programm kann jetzt FSC-Flugplandateien laden. Prozeduren werden dabei ignoriert.
* Die Schaltfläche `Speichern` ist jetzt immer aktiviert, um das erneute Speichern der PLN-Datei zu ermöglichen.
* Option hinzugefügt, um FSX / P3D Flugpläne mit kurzen Namen zu speichern. Siehe Dialog `Einstellungen` auf der Registerkarte `Flugplan`.
* `Als reinen PLN speichern` merkt sich jetzt das Verzeichnis, um das Speichern in einem separaten Ordner zu ermöglichen.
* Es wurden Probleme behoben, bei denen Circle-to-Land-Prozeduren nicht richtig geladen und einer falschen Landebahn zugewiesen wurden.
* Problem behoben, bei dem STAR-Prozeduren mit Runway-Zuweisung nicht korrekt geladen wurden.
* Probleme beim `corte.in` Export für Flight Factor behoben. Die letzte `DCT` wird jetzt beim Export weggelassen und vollständige Namen
  werden für die Anflugkennung verwendet (`I16L` vorher, jetzt `ILS16L`).
* Problem behoben, bei dem der Flugplan nach Rückgängig / Wiederherstellen und
  `Speichern unter` falsch gespeichert wurde. Dies führte z.B. zu FSX PLN-Inhalt in einer X-Plane FMS-Datei.
* Fsbuild-Flugplänen, bei denen die Höhenangabe fehlt, können jetzt geladen werden.

### Flugplan

* Die Koordinaten der benutzerdefinierten Wegpunkte im Flugplan können jetzt im Bearbeitungsdialog geändert werden.
  Siehe [Flugplanposition bearbeiten](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/EDITFPPOSITION.html).
* Die ILS-Frequenz wird nun in der Flugplantabelle angezeigt, wenn eine ILS- oder LOC-Anflugprozedur verwendet wird.
* Dem Kontextmenü des Flugplanfensters wurde der Modus `Folge Auswahl` hinzugefügt.
  Dies zentriert ausgewählte Navaids oder Flughäfen auf der Karte mit dem aktuellen Zoomlevel, wenn aktiviert. [#129](https://github.com/albar965/littlenavmap/issues/129)
* Im Abfragedialog zur Parkposition wurde die Option `Zeige Abflug auf Karte` hinzugefügt. Dies ermöglicht das schnelle Zuweisen einer Parkposition auf der Karte.
* Jetzt kann in der Flugplantabelle auch die Reichweite von Navigationshilfen angezeigt werden, die Teil einer Prozedur sind.
* Flugplansegmente, die gegen die Richtung von Luftstraßen laufen, werden nun als Fehler in der Flugplantabelle rot angezeigt.
* Probleme mit der Anzeige von Prozedurnamen und Suffixen wurden behoben.

### Routenbeschreibung

* Fehler beim Lesen des Flugplans behoben. Jetzt wird der nächstgelegene Flughafen oder Navaid für nicht
  eindeutige Namen verwendet, anstatt einen möglicherweise weit entfernten Wegpunkten den Vorzug zu geben.
  [#213](https://github.com/albar965/littlenavmap/issues/213)
* Mehrere Probleme beim Lesen der Routenbeschreibung behoben. Nimmt jetzt nur die nächste Navigationshilfe, wenn keine Wegpunkt- / Luftstraßenkombination gefunden wurde.
* Irreführende Warnung beim Lesen der Routenbeschreibung entfernt, wenn eine Flughafenkennung als Zwischenziel oder Wegpunkt angegeben wurde, die den gleichen Namen wie eine Luftstraße hat.

### Benutzeroberfläche

* Zulu/UTC Zeit und Tag des Monats zur Statusleiste rechts unten hinzugefügt. Diese sind Echtzeit und Datum und nicht Simulator Zeit und Datum.
* Magnetischen Deklination unter dem Mauszeiger wird jetzt in der Statusleiste angezeigt.
* Das Menü `Karte` wurde aufgeteilt, da es zu groß wurde.
* Tooltipps für alle Reiter im Hauptfenster hinzugefügt und einige Reiternamen gekürzt, um Platz zu sparen.
* Menüpunkte aus dem macOS-Anwendungsmenü entfernt, da die automatische Anpassung von Qt nicht funktioniert.
* Korrekturen für den fehlenden Dialog auf macOS.

### Fliegen

* Option hinzugefügt, um den aktiven Flugplanabschnitt während des Fluges oben auf der Flugplantabelle zu halten. `Einstellungen` auf der Registerkarte` Simulator Aircraft`.
* Neuer Flugplan- und Flugzeugzentriermodus hinzugefügt, der aktive Abschnitte und Flugzeuge beim Fliegen auf der Karte sichtbar hält.
   `Einstellungen` auf der Registerkarte `Simulatorflugzeug`.
  [#133](https://github.com/albar965/littlenavmap/issues/133)
* Option `Zurück zu Flugzeug` nach gegebener Zeit beim Fliegen hinzugefügt. Dialog `Einstellungen` auf der Registerkarte` Simulatorflugzeug`.
  Ermöglicht Zoomen und Scrollen während des Fluges, ohne `Flugzeug auf der Karte zentrieren` zu deaktivieren und wieder zu aktivieren.
  [#133](https://github.com/albar965/littlenavmap/issues/133)
* Option hinzugefügt, um abgeflogene Abschnitte des Flugplans auf der Karte auszublenden. Beschriftungen für abgeflogene Abschnitte werden weggelassen, um die Karte aufzuräumen. Siehe `Einstellungen` auf der Registerkarte` Kartenanzeige`. [#218](https://github.com/albar965/littlenavmap/issues/218)
* Anzeige der Beschriftung für die nächsten fünf AI- oder Mehrspielerflugzeuge, die innerhalb von 20 nm angezeigt werden, wenn die vertikale Differenz nicht mehr als 5000 ft beträgt.
* Die Information über den Flugzeugstatus war für X-Plane unzuverlässig, wodurch der erste Flugplanabschnitt bereits auf dem Boden zentriert war.
  [#133](https://github.com/albar965/littlenavmap/issues/133)

### Wetter

* Anzeige für nächste NOAA Wetterstation hinzugefügt.
* IVAO Wetterberichte einschließlich Optionen, URL-Konfiguration, URL-Test und Anzeige der nächsten Station hinzugefügt.
  [#132](https://github.com/albar965/littlenavmap/issues/132)
* Das Datum und die Zeit für Wetterberichte, die älter als sechs Stunden sind, werden nun im Informationsfenster auf der Registerkarte `Wetter` rot angezeigt.
* Fehler für METAR-Stationen behoben, die `CAVOK 9999` falsch gemeldet haben.
* Der Wetterbericht korrigiert jetzt das Datum zurück zum letzten gültigen, anstatt auf die Zukunft zu datieren.
* Variable Winde werden jetzt korrekt angezeigt, wenn die Geschwindigkeit fehlt. [#212](https://github.com/albar965/littlenavmap/issues/212)
* Variable Windgeschwindigkeit wird jetzt zusammen mit Wind und Richtung angezeigt, wenn beide gegeben sind. [#212](https://github.com/albar965/littlenavmap/issues/212)
* Der Bericht über Wolken wird jetzt korrekt angezeigt, wenn die Höhe nicht angegeben wurde. [#212](https://github.com/albar965/littlenavmap/issues/212)
* Variabler Wind wurde für `/// KT` METAR falsch gemeldet. [#224](https://github.com/albar965/littlenavmap/issues/224)
* Problem mit X-Plane METAR.rwx behoben, das doppelte Datensätze enthält. [#212](https://github.com/albar965/littlenavmap/issues/212)
* METAR-Datum für das Simulatorwetter entfernt, da es falsch gelesen wurde und dem Simulatordatum entspricht.

### Kompassrose

* Github Issue: [#141](https://github.com/albar965/littlenavmap/issues/141)
* Handbuch: [Kompassrose](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/de/COMPASSROSE.html)
* Kompassrose zeigt magnetische Richtung plus Option für Linienstärke
 (`Einstellungen` auf der Registerkarte` Kartenanzeige`). Kompassrose ist immer sichtbar, wenn sie aktiviert ist.
 Kurs- und Spurlinien werden angezeigt, wenn das Nutzerflugzeug gezeigt wird. Die Größe wird an den Bildschirm angepasst mit einem Maximum von 500 nm Radius. Aktivierbar im Menü `Ansicht` -> `Kompassrose anzeigen`.

### Karte

* Der magnetischen Kurs wird nun für die Flugzeugrotation auf der Karte benutzt, wenn die wahre Kursrichtung nicht verfügbar ist.
  Dies sollte Probleme für Online-Netzwerk-Clients lösen, bei denen alle Flugzeuge mit der falschen Richtung angezeigt werden.
* Zusätzliches X-Plane 3D-Flugplatzattribut als Kriterium für die Behandlung von leeren Flughäfen eingefügt. Das kann
  verwendet werden, um alle X-Plane-Flughäfen, die nicht 3D sind, zu verstecken. Siehe `Einstellungen` auf der Registerkarte `Karte`.
* Der weiße Flugplatzhintergrund kann jetzt deaktiviert werden. `Einstellungen` auf der Registerkarte `Kartenanzeige`.
* Rollbahnen, Parkpositionen und Vorfelder können nun im Flughafendiagramm deaktiviert werden. Dies ist für alle, die OpenStreetMap oder einen anderen Kartenhintergrund benutzen wollen. Siehe Dialog `Einstellungen` auf der Registerkarte` Kartenanzeige`.
* Hintergrundfarbe der Beschriftungen kann zu deaktiviert werden. `Einstellungen` auf der Registerkarte `Kartenanzeige`.
* Kartenklicks für Flughäfen, Navigationshilfen und Lufträume können deaktiviert werden.
  Siehe Dialog `Einstellungen` auf der Registerkarte `Karte`.
* Problem behoben, bei dem Karten-Overlays beim Wechseln des Kartenthemas wieder angezeigt wurden.

### Kartenthemen

* Die OpenStreetMap-, OpenMapSurfer- und Hillshading-Karten benutzen nun SSL-verschlüsselte Verbindungen (HTTPS).
* Probleme beim Laden von SSL unter Linux behoben (zuerst unter Ubuntu 18.04 bemerkt).

### Suche

* Spezialsuchmodus für die Suche nach Flughafenkennung hinzugefügt. Alle anderen Suchoptionen werden ignoriert, wenn mehr als zwei Zeichen in das Feld ICAO-Code eingegeben werden. Die Aktivierung des Modus wird im Fenster unten angezeigt. Dies hilft, um schnell einen Flughafen zu finden, ohne die Suchoptionen zurückzusetzen.
* Der Modus `Folge Auswahl` wurde den Kontextmenüs aller Suchfenster hinzugefügt.
  Dies zentriert ausgewählte Navigationshilfen, Flugplätze oder Prozeduren auf der Karte, wenn
  aktiviert. [#129](https://github.com/albar965/littlenavmap/issues/129)
* Maximaler Suchradius für Flughäfen auf 8000 nm erhöht.

### Information

* Das Gesamtgewicht ohne Treibstoff und die gesamte Nutzlast werden nun im Fenster `Simulatorflugzeug` auf der Registerkarte `Flugzeug` angezeigt.
* Geschätzte Treibstoffmenge am Ziel und am Start des Sinkfluges hinzugefügt. Geschätztes Gesamtgewicht am Ziel wird nun angezeigt. Alles im Fenster `Simulatorflugzeug` auf der Registerkarte `Fortschritt`.
* Die Übergangshöhe (Transition Altitude) wird nun in den Flughafeninformationen angezeigt, falls diese in der Navigraph-Datenbank verfügbar ist.

### Prozeduren

* Änderungen für SID und STAR, die mehrfache oder parallele Bahn-Zuweisungen verwenden. Diese werden z.B. mit  `Alle` oder `23L / 23R` angezeigt. Ein Untermenü in der Prozedursuche erlaubt nun in diesem Fall die Landebahnauswahl. Die Prozeduren werden nun korrekt aufgelöst, wenn Flugpläne geladen werden. Dies löst Probleme beim Speichern von Prozeduren im X-Plane FMC 11-Format oder anderen Formaten. [#179](https://github.com/albar965/littlenavmap/issues/179)
* Kontextmenü `Zeige Prozeduren` geändert. Prozedurauswahl wird nun eingeschränkt, abhängig davon, ob der Flugplatz Start oder Ziel ist.
* Eine rote Warnmeldung wird jetzt über dem Flugplanfenster angezeigt, wenn Landebahnen von STAR und Anflug nicht überein stimmen. [#179](https://github.com/albar965/littlenavmap/issues/179)
* Informationsanzeige zeigte die Eigenschaft `Prozeduren` für alle Flugplätze an. Problem beseitigt.
* Problem behoben, bei dem Wegpunkte für lange (> 200 NM) SID- oder STAR-Prozeduren nicht aufgelöst werden konnten.
* Mehrfache Anflugprozeduren für Circle-to-Land werden jetzt unterdrückt.

### Szeneriedatenbank

#### Navigraph

* Die enthaltene Navigraph AIRAC Datenbank wurde auf den Zyklus 1801 aktualisiert.
* Falsche magnetische Deklination für VOR-Stationen jetzt behoben.
* Prozeduren von Flughäfen mit drei Buchstaben werden jetzt erkannt, wenn sich die Flughafenkennung nicht geändert hat.
* Übergangshöhe zu Flughäfen hinzugefügt.
* Die magnetischen Deklination für VOR, DME oder TACAN wird nun mit einem berechneten Wert gefüllt, wenn der Wert fehlt.
* Problem mit falschem Landebahnkurs für Navigraph Datenbanken beseitigt. [#214](https://github.com/albar965/littlenavmap/issues/214)
* Korrekturen für fehlende Luftstraßensegmente im DFD-Compiler. [#201](https://github.com/albar965/littlenavmap/issues/201)
* Zusätzliche Circle-to-Land Prozeduren werden jetzt ignoriert.

#### X-Plane und Navigraph

* Die gemeinsamen SID- und STAR-Routen (common routes) werden nun korrekt im Navigraph und X-Plane Compiler zusammengeführt. Dies ergibt korrekte SID und STAR und entfernt auch
  die falschen Einträge. [#193](https://github.com/albar965/littlenavmap/issues/193)
* Entferne nun alle unnötigen NDB- und VOR-Wegpunkte, die für die Luftstraßenerzeugung erstellt wurden. [#201](https://github.com/albar965/littlenavmap/issues/201)
* Problem behoben, bei dem der Prozedurname bzw. das Suffix im X-Plane- und DFD-Compiler nicht korrekt gelesen wurden.

#### FSX / P3D

* FSX bzw. P3D-Szeneneinträge, die direkt auf das Verzeichnis `Scenery` zeigen, werden nun gelesen. Diese wurden zuvor stillschweigend ausgelassen.
* Szeneriedaten werden jetzt auch aus Einträgen in `.../Roaming/.../add-on.cfg` und
  `.../ProgramData/.../add-on.cfg` gelesen. [#211](https://github.com/albar965/littlenavmap/issues/211)
* FSX bzw. P3D wird jetzt im Menü der Szeneriebibliothek ausgeblendet, wenn das Basisverzeichnis des Simulators nicht existiert.
  Dies hilft, Menüpunkte aus unvollständigen Deinstallation des Simulators zu vermeiden.
* Skript von Gérard hinzugefügt, um Start- und Landebahnen für AI in FSX / P3D zu entfernen.
* Protokollierung der Flughafenhöhe in der Logdatei hinzugefügt, welche beim Lesen von Datensätzen von FSX / P3D zu erzeugt wird.
  Beispiel: `Add-on airport altitude for VQ10 changed from 7703 ft (BGL Scenery/0902/APX72220.bgl) to 8363 ft`
* BGL-Dateien und Szenerie werden nun auch aus versteckten und Systemdateien gelesen.

#### X-Plane

* Werte für magnetische Deklination auf 2018 aktualisiert.
* Probleme mit X-Plane-Flugplätzen behoben, die eine weit entfernte Referenzposition haben.
* Problem behoben, bei dem CIFP-Dateien mit Kleinschreibung im Dateinamen nicht korrekt erkannt wurden.
* Probleme mit Datei- und Verzeichnisausschluss für X-Plane behoben.
* `Custom Scenery/Global Airports/Earth nav data/earth_nav.dat` wird jetzt korrekt gelesen, was Probleme mit falschem ILS-Kursen an Stellen wie LOWI behebt.

## Anpassung

* Das Programm erstellt eine Kopie von `little_navmap_mapstyle.ini` und ersetzt die Datei durch eine Konfiguration mit neuen Farben (blaue Luftstraßen). Alle Anpassungsdateien enthalten jetzt Versionsinformationen.
* Verzeichnis `customize` und Datei `icons.zip` hinzugefügt, die Vorlagen für Flugzeugsymbole und Symbole für Nutzerpunkte enthält.

**Siehe im Download enthaltene Datei `CHANGELOG.txt` oder [hier](https://github.com/albar965/littlenavmap/blob/release/2.0/CHANGELOG.txt) online für eine komplette Liste aller Änderungen (Englisch).**

**Alle Dateien werden mit [VirusTotal](https://www.virustotal.com) überprüft.**
