---
layout: post
title:  Little Navmap 1.8.3 veröffentlicht - Navigraph Unterstützung
date:   2017-11-29 19:00:00 +0100
categories: release
---

**Direkter Download:
[Windows](https://github.com/albar965/littlenavmap/releases/download/v1.8.3/LittleNavmap-win-1.8.3.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v1.8.3/LittleNavmap-macOS-1.8.3.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v1.8.3/LittleNavmap-linux-1.8.3.tar.gz)**

[**► Bildschirmfotos**](/littlenavmapscreens.html)

[**► Online-Handbuch** \(Englisch\)](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/)

[**► Eigenschaften** \(Englisch\)](/littlenavmap.html)

## Anmerkungen

Diese Version bietet **Unterstützung für Navigraph-Updates** und beinhaltet einen kompletten AIRAC-Zyklus, der
Prozeduren, Lufträume, Navaids und mehr beinhaltet.

**Bitte beachten, dass Navigraph-Updates erst ab dem 7. Dezember mit dem nächsten Zyklus 1713 verfügbar sein werden.**

Darüber hinaus wurden neue Flugplan-Exportformate wie das der Majestic Dash und das neue X-Plane 11 FMS-Format hinzugefügt.

## Änderungen von Release 1.6.7 zu 1.8.3

*Little Xpconnect* wurde auf 1.0.5 aktualisiert. Nur geringfügige Änderungen.

*Little Navconnect* wurde auf Version 1.8.2 aktualisiert. Nur kleinere Änderungen und Fehlerbeseitigungen.

**Das Programm bereitet beim ersten Start automatisch die beigefügte Navigraph-Datenbank vor.**

**Es wird empfohlen, die Szenen-Datenbanken neu zu laden.**

### Verbesserungen

#### Navigraph
* Navigraph Datenbank-Zyklus 1707 zum Programm-Archiv hinzugefügt. Die Datenbank wird beim ersten Start vorbereitet und
  automatisch verwendet. Siehe unter
  [Navigation Databases](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/NAVDATA.html)
  im Handbuch für weitere Informationen.
* Untermenü für die Navigraph-Datenbank im Menü `Scenery Library` mit drei Anzeigeoptionen hinzugefügt.
* Das Programm kann nun gemischte Daten (z.B. `FSX/N` in der Titelleiste) auf der Karte und im Informationsfenster anzeigen:
  * Komplette Flughäfen und ILS aus Simulatordaten.
  * Navaids, Airways, Airspaces und Prozeduren von Drittanbieter-Navdata wie Navigraph.
* Die Titelleiste des Hauptfensters wurde geändert, um die Verwendung von Navigationsdaten (z.B. Navigraph) anzuzeigen:
  `FSX/N`: Simulator und Navdata, `(FSX)/N`: nur Navdata und `FSX`: nur Simulator.
  Siehe unter [Window Title](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/INTRO.html#window-title)
  im Online-Handbuch.
* Die Navigationsdatenbank wird nun aus dem Anwendungsverzeichnis geöffnet
  und kann im Settings-Datenbank-Verzeichnis durch eine neuere überladen werden. Das Programm prüft die den Zeitstempel
  vor dem Kopieren und erstellt bei Bedarf Datenbankindizes.
  Die Datenbank wird beim ersten Start kopiert und vorbereitet.

#### Flugplan-Export
* Ermöglicht das Speichern des neuen X-Plane 11 FMS-Dateiformats und gibt eine Warnung vor dem Speichern aus, da das
  Format für X-Plane 11.05 nicht verwendbar ist.
  FMS 11 ist nun das Standardformat beim Speichern von FMS, obwohl es mindestens eine 11.10 Beta-Version benötigt.
  FMS 3 kann weiterhin über die Exportoption gespeichert werden. Siehe im Handbuch unter
  [FMS 11](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-fms11)
  und
  [FMS 3](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-fms3).
* Flugplan-Export für die Majestic Dash hinzugefügt. Der Export ist derzeit auf Wegpunkte beschränkt. Siehe Handbuch:
  [FPR](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-fpr).
* Export für das Flugplanformat IXEG 737 hinzugefügt. Siehe Handbuch:
  [FPL](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-fpl).
* Flugplan-Export zu Flight Factor Airbus hinzugefügt. Siehe Handbuch:
  [corte.in](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-cortein).

#### Übersetzung
* Englisches Handbuch und französische Programmübersetzung aktualisiert.
* Übersetztes Offline-Handbuch PDF von Patrick hinzugefügt. Noch nicht online verfügbar.
* Französische Legende und Aktualisierungen der Übersetzung hinzugefügt.

#### Einstellungen

* Einstellungen im Optionsdialog auf der Registerkarte `Benutzeroberfläche` hinzugefügt.
  um die Sprache der Benutzeroberfläche und des Gebietsschemas (Zahlenformat, Datumsformat und mehr) im Programm auf Englisch zu erzwingen.
* Optionen zum Deaktivieren der Wiederherstellung der letzten Suchparameter, des Inhalts des Informationsfensters und der
  Flugzeugspur beim Start im Optionsdialog auf der Registerkarte `Startup` hinzugefügt.

#### Sonstiges

* Aktualisiertes Linux-Startup-Skript, so dass es auch vom Desktop-Launcher verwendet werden kann (Danke an Valerio für den Tipp).
* Alle Readme- und Changelog-Dateien werden nun zum macOS Download-Archiv hinzugefügt.
* Kommandozeilen-Option `-s` oder `--settings-directory` hinzugefügt, die es erlaubt, den `ABarthel`-Teil des
  Settings-Verzeichnis für Testzwecke wie z.B. das Ausführen mehrerer Versionen von Little Navmap zu ändern.
* Die Anzeige von Navaids im Information Dock Fenster auf der Prozedur-Registerkarte wurde korrigiert und SIDs und STARs wurden entfernt.
* Informationen zum X-Plane Menüeintrag in der Szeneriebibliothek hinzugefügt, der den AIRAC-Zyklus der geladenen X-Plane-Datenbank anzeigt.
* Der Menüpunkt `Scenery Library` ist nun deaktiviert anstatt ausgeblendet, wenn nur ein Simulator installiert ist.
* Anpassung des Luftraums und der COM-Anzeige an neue Typen angepasst.
* Information Dock-Fenster auf der Registerkarte `Runways/Helipads` kann nun mehr als ein ILS für ein Start-
  und Landebahnende anzeigen (EDDF 25R/07L in X-Plane).

### Fehlerbeseitigungen

* Fehler behoben, bei dem der ARINC-Name der Prozeduren nicht geladen wurde, was zu Problemen beim Exportieren und Laden von Flugplänen führte.
* Es wurde ein Problem im ATS-Route-String-Parser behoben, bei dem ein Luftweg als ungültiger erster Eintrag keine Warnmeldung erzeugte.
* Fehler im Route-String-Parser behoben, der STARs nicht richtig erkannt hat.
* Es wurde ein Fehler behoben, bei dem der erste Wegpunkt auf der Strecke nach der Berechnung mit SID in manchen Fällen eine Luftstraße enthielt.
  Dies führte zu Problemen beim Export einiger Flugplanformate und im Route-String-Parser.
* Mehrere Darstellungsprobleme mit großen Lufträumen und Luftstraßen, die den Anti-Meridian kreuzen, wurden behoben. Diese zeigten sich
  gespiegelt mit ihren Tooltips in anderen Teilen der Welt. Kleinere Probleme bleiben bestehen (z.B. Melbourne FIR).
* FSX/P3D: Workaround für die Sortierreihenfolge von Szenerien mit `add-on.xml`-Dateien ohne Layer-ID hinzugefügt.
  Erzwingt nun, dass Navigationsdaten-Updates von fsAerodata auf höchste Priorität gesetzt werden.
* Es wurde ein Fehler behoben, bei dem eine automatische Verbindung versucht wurde, auch wenn der Hostname leer ist.
* Problem mit fast unsichtbaren Checkboxen, Radiobuttons und Toolbar-Buttons im Nachtmodus behoben.
* Fehler mit falschen ILS-Gleitpfadwinkel im X-Plane Compiler behoben. Der Winkel wurde auf ganzzahlige Werte gerundet.
* Besserer Umgang mit X-Plane OpenAirspace-Kommentaren.
* Abstürze und Einfrieren mit ungültigen oder unvollständigen Prozeduren behoben.
  Der Zeichencode ist nun robuster für ungültige Prozedurabschnitte, wie sie in einigen Add-On-Szenarien vorkommen.
* Problem behoben, bei dem ungültige Prozedurabschnitte nicht erkannt wurden (Kurs / Kurs auf DME-Distanz oder VOR-Radial).
* Es wurde ein Problem behoben, bei dem beim ersten Start keine Szeneriedatenbank ausgewählt wurde, was zu Abstürzen beim Laden eines Flugplans führte.
* Die Behandlung von fehlenden oder unzugänglichen Legenden-Dateien wurde korrigiert. Fehler beim Laden werden nun ignoriert und auf die Webseite verwiesen.
* Es wurde ein Fehler im Szenenbibliotheksmenü behoben, bei dem ein Menüeintrag abgewählt werden konnte, was zu keiner Auswahl führte.

**Sehen Sie sich die mitgelieferte `CHANGELOG.txt` oder [hier](https://github.com/albar965/littlenavmap/blob/release/1.8/CHANGELOG.txt)
online an, um eine vollständige Liste aller Versionen zu erhalten.**

**Alle Dateien wurden von [VirusTotal](https://www.virustotal.com) geprüft.**

