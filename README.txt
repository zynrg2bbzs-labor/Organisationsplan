Organisationsplan V0.2.13.5 – Sicherheits-Testversion

Nur mit fiktiven Testdaten verwenden. Vor dem Update verschlüsselte
Datensicherung der funktionierenden V0.2.13.4 erstellen.

Neu:
- Face ID / Passkey als optionale Entsperrmethode via WebAuthn-PRF.
  Einrichtung unter Mehr > Sicherheit mit dem aktuellen App-Passwort.
  Passwortentsperrung bleibt als Rückfalllösung erhalten.
- Optionaler Schnellzugriff ohne zusätzliche App-Sperre, z.B. auf einem
  gesondert abgesicherten Diensthandy. Hierbei wird ein lokal gespeicherter,
  nicht exportierbarer IndexedDB-Schlüssel für das automatische Entsperren
  verwendet. Dieser Modus ist weniger sicher: Skripte derselben Web-Origin
  können den Schlüssel ohne Nutzerbestätigung benutzen.
- Passwortänderung deaktiviert alternative Entsperrmethoden vorsorglich.
  Face ID bzw. Schnellzugriff können danach neu eingerichtet werden.

Einschränkungen:
- Face ID/PRF ist in der installierten iPhone-PWA noch NICHT getestet.
- Offline-Neustart mit Face ID muss gesondert getestet werden.
- Vollständige Sicherheitsprüfung und Originalimport stehen noch aus.
- Bei Problemen App nicht löschen, keine Website-Daten zurücksetzen.
- App-Passwort sicher aufbewahren.

Alle zehn Programmdateien ins bestehende GitHub-Repository hochladen.
Keine Excel-Daten ins Repository hochladen.
