# GridMaterial UI 1.1.0

Eigenständige Material-inspirierte Komponentenbibliothek mit responsivem Layout, UI-Interaktionen, 20 CSS-Modulen und einer vollständigen deutschsprachigen Dokumentationswebsite. **Keine Bootstrap-, jQuery- oder Runtime-Abhängigkeiten.**

## Installation

```bash
npm install gridmaterial-ui
```

In Projekten mit CSS-fähigem Bundler:

```javascript
import 'gridmaterial-ui/css/gridmaterial.css';
import 'gridmaterial-ui/js/gridmaterial.js';
```

Im klassischen HTML-Projekt:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gridmaterial-ui@1.1.0/css/gridmaterial.css">
<script src="https://cdn.jsdelivr.net/npm/gridmaterial-ui@1.1.0/js/gridmaterial.js" defer></script>
```

## Paketinhalt

- `css/gridmaterial.css`: **gebündelte, vollständige CSS-Datei** aller Komponenten
- `css/modules/*.css`: **20 editierbare CSS-Module** (Tokens, Layout, Buttons, Forms, Overlays, Navigation, Feedback, Utilities und mehr)
- `js/gridmaterial.js`: Interaktionen und öffentliche API
- `js/docs-data.js`, `js/docs-variants.js`, `js/docs.js`: Dokumentationsinhalt und Beispiele
- `css/docs.css`: Design der Dokumentationswebsite
- `assets/`, `examples/`: Icons und sofort nutzbares Einstiegsprojekt
- `index.html`: Komponentenreferenz mit 73 Einträgen, Suche, Live-Vorschauen und kopierbarem HTML

## CSS-Module bearbeiten

Die Quelldateien sind unter `css/modules/` nach Bereichen aufgeteilt. Eine Änderung wird mit `npm run build:css` in die öffentliche Datei `css/gridmaterial.css` übertragen. Alternativ können Module einzeln in Projekten importiert werden. Für vollständige Darstellung stets `tokens.css` zuerst laden und auf Reihenfolge/Abhängigkeiten achten.

```bash
npm run build:css
npm run check
npm pack --dry-run
```

## Lokal starten

```bash
npm start
```

Die Dokumentationswebsite wird unter `http://127.0.0.1:3000` angezeigt. Alternativ lässt sie sich aus `index.html` direkt öffnen.

## npm veröffentlichen

```bash
npm login
npm run check
npm publish
```

Der paketierte Inhalt kann mit `npm pack --dry-run` kontrolliert werden. `prepack` erzeugt die vollständige CSS-Datei und prüft JavaScript-Dateien. Für eine neue Version `npm version patch` bzw. `npm version minor` verwenden. In der GitHub-Repository-Dokumentation dieselbe Versionsnummer aktualisieren.

## Links

- Quellcode: https://github.com/dongannhien99-lgtm/grid-material
- Dokumentation: https://dongannhien99-lgtm.github.io/grid-material/
- npm: https://www.npmjs.com/package/gridmaterial-ui

## Komponenten

24 klassische UI-Komponenten, 9 Formularthemen sowie Inhalte, Layout, Helpers, Utilities und zusätzliche Material-Komponenten. Jede Komponenten-, Formular- und Design-Referenz enthält zehn separat kopierbare Varianten mit Live-Vorschau.

## Lizenz

MIT – siehe `LICENSE`.
