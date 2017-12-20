---
layout: post
title:  Little Navmap 1.8.4 released
date:   2017-12-20 10:00:00 +0100
categories: release
---

[Windows](https://github.com/albar965/littlenavmap/releases/download/v1.8.4/LittleNavmap-win-1.8.4.zip) -
[macOS](https://github.com/albar965/littlenavmap/releases/download/v1.8.4/LittleNavmap-macOS-1.8.4.zip) -
[Linux \(64 bit\)](https://github.com/albar965/littlenavmap/releases/download/v1.8.4/LittleNavmap-linux-1.8.4.tar.gz)**

[**► Screenshots**](/littlenavmapscreens.html)

[**► Online-Handbuch**](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/) (Englisch)

[**► Eigenschaften**](/littlenavmap.html)

## Anmerkungen

Dieses Version behebt mehrere Fehler und fügt zwei neue Exportfunktionen
für [Reality XP](http://www.reality-xp.com) _GNS 530W/430W V2_ und _GTN 750/650 Touch_ hinzu.

Die unten stehende Liste der Änderungen enthält Verweise zu den relevanten Teilen des Handbuchs,
falls zutreffend.

Das Programm zeigt automatisch einen Frage-Dialog an, kopiert und bereitet dann die enthaltene
Navigraph-Datenbank bein ersten Start vor, wenn der enthaltene AIRAC Zyklus 1707 noch verwendet wird.
Die im Download enthaltene Datenbank wurde aktualisiert.

**Für Linux-Benutzer:** Die Startup-Shellskripte wurden gelöscht, da sie nicht mehr benötigt werden. Das Programm
kann direkt aus einem beliebigen Ordner heraus gestartet werden.

**►► Die Szeneriedatenbanken sollten neu geladen werden, um Probleme mit gespeicherten Flugplänen zu vermeiden. ◄◄**

## Enthaltene Programme

*Little Xpconnect* wurde auf 1.0.6 aktualisiert. Eine Liste der Änderungen ist in der Datei `CHANGELOG.txt` enthalten.

*Little Navconnect* wurde auf Version 1.8.3 aktualisiert. Siehe beigefügte `CHANGELOG.txt`.

## Änderungen von Release 1.8.3 zu 1.8.4

* Flugplan-Export für _Reality XP_ GTN- und GNS-Geräte  im Menü `Export Flight Plan to other Formats` hinzugefügt.
  Siehe hier im Handbuch:
  [FPL (Reality XP Garmin GNS)](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-rxpgns),
  [GFP (Reality XP Garmin GTN)](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#flight-plan-formats-rxpgtn) und
  [Untermenü Exportieren](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/MENUS.html#export-submenu).
* Option hinzugefügt, um Garmin-Flugpläne mit benutzerdefinierten Wegpunkten zu speichern. Das dient dazu,
  gesperrte Wegpunkte bei unterschiedlichen AIRAC Zyklen zu vermeiden. Siehe im Dialog `Options` auf dem Tab `Flugplan` und hier im Online-Handbuch:
  [Hinweise zu den Garmin-Formaten GFP und FPL](https://albar965.gitbooks.io/little-navmap-user-manual/content/v/release/1.8/en/FLIGHTPLANFMT.html#garmin-notes).
*  **X-Plane 3D Flugplatzattribut** im Flugplatz-Suchfenster in der Dropdown-Liste `All Ratings` hinzugefügt.
  Das 3D Attribut wird auch in der Liste der Flughafeneinrichtungen, in Tooltips und im Informationsfenster angezeigt.
* Anzeige der Start- und Landebahnnamen für SIDs und STARs mit Bezug auf mehrere parallele oder alle Start- und Landebahnen in der Prozedurensuche hinzugefügt.
  Teillösung für #179. Szenerie-Datenbank muss dazu neu geladen.
* Die MacOS-Kompatibilität wurde geändert, da das Programm ab Version 10.9 und darunter abstürzt.
  **Es wird mindestens macOS Version 10.10 benötigt**. Das Programm kann nun nicht mehr auf Mavericks oder älteren Versionen
  ausgeführt werden und zeigt einen Fehlerdialog an.
* Einstellung im Dialog `Options` auf dem Tab `Map` hinzugefügt, um Tooltips für ausgewählte Kartenmerkmale zu deaktivieren: Flughäfen, Navaids oder Lufträume.
* Das Textfeld für die Routenbeschreibung benutzt jetzt eine dicktengleiche Schriftart für bessere Lesbarkeit.
* Ein Warndialog wird jetzt angezeigt, wenn der AIRAC-Zyklus beim Speichern von Flugplänen im X-Plane FMS 11-Format nicht verfügbar ist.
* Hubschrauberlandeplätze können nun als Startposition aus dem Kontextmenü der Karte ausgewählt werden.
* Kleine Anpassung in der Kartenanzeige, um Rollbahnschilder häufiger zu zeigen.
* Anzeige für Flughafenregionen hinzugefügt, sofern verfügbar.
* Französische Übersetzung, französisches Handbuch und Legende aktualisiert.
* Datenbank aktualisiert, um zukünftige Fehlerbehebungen für Problem [179](https://github.com/albar965/littlenavmap/issues/179) zu ermöglichen.
* Die Minor-Version der Datenbank wurde auf 8 geändert, um ein aktualisiertes Schema anzuzeigen. Es wird empfohlen, die Szenen-Datenbanken neu zu laden.

## Beseitigte Fehler

* **Der Export zur Majestic Dash funktioniert wieder unter Windows.**
* Die Start- und Landebahn wird nun beim Laden von Formaten entsprechend der SID-Landebahn korrekt zugeordnet, wenn ein Flugplanformat geladen wird,
  das keine Abflugparkplätze unterstützt (z.B. FMS oder FPL).
* Die Erkennung des Flugplanformats ist jetzt toleranter für X-Plane FMS 11 Dateien mit fehlenden AIRAC Zyklusinformationen.
* Es wurden Probleme behoben, bei denen X-Plane STAR in den FMS 11 Flugplänen nicht laden konnte, weil der Startbahnbezug fehlt.
* Beim Schreiben von X-Plane FMS 11 Dateien wird nun der korrekte AIRAC-Zyklus aus der Nav-Datenbank verwendet.
  Vorher wurde die Simulator-Datenbankversion verwendet, was zu
  X-Plane Warnungen und unbrauchbaren Flugplänen führen konnte.
* Es wurde ein Problem behoben, bei dem der Hubschrauberlandeplatz in bestimmten Fällen nicht korrekt aus FSX PLN-Dateien geladen wurde.
* Korrektur der Linux Version, um Probleme mit Shared Libraries auf einigen Plattformen für alle Programme zu vermeiden.
* Unnötige Startup-Skripte für Linux entfernt. Die ausführbare Programmdatei kann nun direkt aus einem beliebigen Ordner gestartet werden ohne
  Einstellung des Bibliothekspfades.
* Es wurde ein Problem behoben, bei dem die französische Übersetzung geladen wurde, wenn im Betriebssystem Französisch als zweite oder dritte Sprache eingestellt war.
* Problem behoben, bei dem Übersetzungsdateien in einigen Fällen gemischt geladen wurden.
* Es wurde ein Problem mit der anfänglichen falschen Ordnerauswahl behoben, wenn beim Speichern oder Exportieren von Flugplänen keine Standardeinstellung vorhanden war.
* `No Simulator found...` Warnungsdialog korrigiert. Dialog soll beim ersten Start nur unter Windows angezeigt werden.
* Das Programm wurde toleranter für ältere Datenbankdateien.
* Die Anzahl der Anflugbefeuerungssysteme ist nun korrekt den Flughäfen in den geladenen X-Plane Szeneriedaten zugeordnet.
  Dieses Problem hat dazu geführt, dass viele Flughäfen eine ALS-Anzeige haben, wo kein ALS vorhanden ist.

**See the included `CHANGELOG.txt` or [here](https://github.com/albar965/littlenavmap/blob/release/1.8/CHANGELOG.txt) online for a complete list across all versions.**

**All files are checked by [VirusTotal](https://www.virustotal.com).**

