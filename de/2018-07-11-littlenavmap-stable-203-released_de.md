---
layout: post
title:  Little Navmap 2.0.3 veröffentlicht
date:   2018-07-11 15:00:00 +0200
categories: release
---

**Direkter Download:
[Windows](https://github.com/albar965/littlenavmap/releases/download/v2.0.3/LittleNavmap-win-2.0.3.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v2.0.3/LittleNavmap-macOS-2.0.3.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v2.0.3/LittleNavmap-linux-2.0.3.tar.gz)**

[**► Bildschirmfotos**](/littlenavmapscreens.html)

[**► Online-Handbuch**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/2.0/en/) (Englisch)

[**► Eigenschaften und Funktionen**](/littlenavmap.html) (Englisch)

## Notes

Diese Veröffentlichung dient hauptsächlich der Fehlerbeseitigung.

## Änderungen 2.0.2 to 2.0.3

### Online-Netzwerke

* Problem behoben, bei dem Simulator-, AI- oder Mehrspieler-Flugzeuge auf der Karte nicht aktualisiert wurden.
* Das Programm zeigt nun Informationen für Online-Clients und Simulator-Flugzeuge an, wenn der Benutzer bei der Verwendung des
  Online-Netzwerks auf sein eigenes Flugzeug oder Mehrspieler-Flugzeuge klickt.
* Online-Center werden nun von der Karte entfernt, wenn sie im Online-Netzwerk gelöscht werden.
* Online-Netzwerk-ACC- und FIR-Regionen haben jetzt einen kleineren Radius von 100 NM.
* Fehlerdialog für Online-Netzwerk-Downloads entfernt um Blockaden zu vermeiden.
  Online-Netzwerkfehler bzw. -status werden nun in der Statusleiste
  auf dem Verbindungsstatus und zugehörigen Tooltipp angezeigt.
* Problem behoben, das die Aktualisierung verhinderte, wenn whazzup-Dateien mit kleinen Zeitintervallen aktualisiert wurden. (atools)
* Wenn das Flugzeug auf dem Boden für VATSIM und GS weniger als 30 kts rollt, wird nun der Status angepasst
  (VATSIM hat keine Bodenanzeige). (atools)
* Falscher Tooltipp für Online-Flugzeuge behoben, die sowohl im Simulator als auch im Online-Netzwerk erscheinen.
    Zeigt nun einen Tooltip für Simulatorflugzeuge an.

### Benutzeroberfläche

* Steuerelemente im Suchfenster neu angeordnet, um kleinere Dockfenster zu ermöglichen. Dies erlaubt nun auch, die Karte
größer darzustellen.
* Eine Warnmeldung wird nun angezeigt, wenn SSL / HTTPS aufgrund fehlender MSVC-Redist-Installation oder anderer Probleme
  nicht initialisiert wurde.
* Statusleistenfeld für die Zeitangabe vergrößert, um Wandern bzw. Flackern in macOS zu vermeiden.

### Flugplan

* Mehrere Probleme beim Kopieren von CSV in die Zwischenablage von Flugplan- und Suchergebnistabellen wurden behoben.
* Problem behoben, bei dem der Routentyp (Hohe / Niedrige) nach der Flugplanberechnung oder dem Laden des Flugplanes falsch zugewiesen wurde.
* Korrekturen für den Export des Flugplanes in die Datei `Corte.in` für Flight Factor. RNAV-Anflüge sollten jetzt erkannt werden.
* Flugplannamen für den Flight Factor Flugplan-Export nach `corte.in` werden jetzt beim Sichern eindeutig gemacht.
* Probleme mit dem Export von Flugplänen für iFly 737, die den Simulator zum Absturz bringen könnten, wurden behoben. (atools)
* Problem behoben, bei dem in PLN-Dateien übersetzte Namen für Parkpositionen verwendet wurden, die zu einem falschen
 Flugplan führten. Dies kann in der französischen und spanischen Übersetzung auftreten.
     [# 243] (https://github.com/albar965/littlenavmap/issues/243)

### Karte

* Abflug- und Zielort als Option für die Flugzeugbeschriftung auf der Karte hinzugefügt.
* SSL für OpenMapSurfer Thema aufgrund von Problemen auf macOS ausgeschaltet.
* Alle Lufträume werden jetzt ausgeblendet, wenn das Flughafendiagramm bei niedrigen Zoom angezeigt wird.
* Problem behoben, bei dem Lufträume bei der Auswahl von "Informationen anzeigen" nicht angezeigt wurden.
* Nullfrequenzen von Lufträumen werden jetzt ignoriert.
* Probleme mit dem Kartenkontextmenü behoben, bei denen "Zeige ..." und "Zeige ... in Suche" die falschen Kartenobjekte verwendeten,
     z.B. "Zeige Information für Online-Client" zeigte den Flughafen im Informationsfenster an.
* Online- und Simulatorflugzeuge haben jetzt Priorität über Flughäfen, beim Klick in die Karte. Mehrere Problem mit
  Prioritäten beim Klick in die Karte beseitigt.

### Sonstiges

* Problem behoben, bei dem das Programm nicht von Linux-Dateimanagern geöffnet werden konnte.
* Übersetzungsprobleme in Navserver behoben, die zu verwirrenden Meldungen im Little Navconnect-Protokollfenster führten. (atools)
* Koordinaten werden jetzt in der Suchergebnistabelle für Nutzerpunkte angezeigt.
   Ein "Ansicht zurücksetzen" aus dem Kontextmenü ist erforderlich, um die neuen Spalten anzuzeigen.
* Die Ident-Länge für das Garmin-Exportformat für den Nutzerpunkte erhöht. (atools)
* Problem behoben, bei dem die Vorfelder von Original-Flughäfen beim Laden von FSX- oder P3D-Szenerie übrig blieben.
* Die X-Plane-Wetteranzeige in Little Navmap sollte jetzt beim Start von X-Plane nach Little Navmap immer aktualisiert werden.
* Standardmäßig werden jetzt weniger verwendete Suchoptionen beim ersten Start nach der Erstinstallation deaktiviert,
 um eine weniger überladene Benutzeroberfläche zu erhalten.
* Option hinzugefügt, um weniger verwendete Filter in der Navigationssuche zu verstecken.
* Laden der Szeneriedaten ist nun mehr robust für teilweise ungültige NDB- und Wegpunktstrukturen in P3D, die beim Lesen der
  Szenerie-Bibliothek Fehler verursachen können.

**Siehe im Download enthaltene Datei `CHANGELOG.txt` oder [hier](https://github.com/albar965/littlenavmap/blob/release/2.0/CHANGELOG.txt) online für eine komplette Liste aller Änderungen (Englisch).**

**Alle Dateien werden mit [VirusTotal](https://www.virustotal.com) überprüft.**
