# GridMaterial UI 1.0.0

**Eigenständiges Material-inspiriertes UI-Framework mit deutschsprachiger Dokumentation.**

GridMaterial nutzt ausschließlich HTML, CSS und JavaScript (keine Bootstrap- oder jQuery-Abhängigkeit). Die Dokumentation ist eine vollständige, offline nutzbare Website mit linker Navigation, Komponenten-Suche, Code-Kopierfunktion, Dark Mode, responsive Layout und interaktiven Referenzbeispielen.

## Projektstruktur

```
GridMaterial/
├── index.html             Vollständige Dokumentationswebsite
├── css/
│   ├── gridmaterial.css   Das eigentliche öffentliche UI-Framework
│   └── docs.css           NUR die Dokumentationsoberfläche
├── js/
│   ├── gridmaterial.js    Framework-JavaScript und öffentliche API
│   ├── docs-data.js       Komponenten-Dokumentation & HTML-Beispiele
│   └── docs.js            Dokumentationsnavigation, Suche und Code Copy
├── assets/                Offline-SVGs
├── examples/starter.html  Unabhängige Anwendungs-Vorlage
├── scripts/server.js      Optionaler Node-Server ohne Dependencies
├── package.json           npm start / npm run check
└── tests/                 Browser-/Smoke-Tests
```

## Start

1. `index.html` direkt im Browser öffnen (keine Installation erforderlich).
2. Alternativ `python -m http.server 8000` im Projektordner ausführen und `http://localhost:8000` aufrufen.
3. Mit Node.js alternativ `npm start` ausführen (keine zusätzlichen Pakete nötig) und `http://127.0.0.1:3000` öffnen.
4. Über das linke Menü alle Komponenten kennenlernen; `Ctrl+K` bzw. `Cmd+K` öffnet die schnelle Suche.

## Im eigenen Projekt einsetzen

Kopiere ausschließlich `css/gridmaterial.css` und `js/gridmaterial.js` in dein Projekt. `docs.css`, `docs-data.js` und `docs.js` sind nur für die Dokumentationswebsite erforderlich.

```html
<link rel="stylesheet" href="css/gridmaterial.css">
<script src="js/gridmaterial.js" defer></script>
<button class="gm-btn gm-btn-primary" onclick="GridMaterial.toast('Gespeichert!')">Speichern</button>
```

Ein umfangreicheres Beispiel liegt in `examples/starter.html`.

## Online-Installation (nach npm-Veröffentlichung)

**npm** (Paketname muss im npm-Register verfügbar sein):

```bash
npm install gridmaterial-ui
```

Die CSS- und JS-Dateien liegen danach unter `node_modules/gridmaterial-ui/css/gridmaterial.css` und `node_modules/gridmaterial-ui/js/gridmaterial.js`. Für klassische Browserprojekte müssen diese Dateien über einen Bundler oder öffentliche Asset-Pfade bereitgestellt werden.

**CDN via npm/jsDelivr** (erst nach erfolgreichem `npm publish`):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gridmaterial-ui@1.0.0/css/gridmaterial.css">
<script src="https://cdn.jsdelivr.net/npm/gridmaterial-ui@1.0.0/js/gridmaterial.js" defer></script>
```

**CDN via GitHub-Tag** (wenn der Tag `v1.0.0` die Dateien enthält):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dongannhien99-lgtm/grid-material@v1.0.0/css/gridmaterial.css">
<script src="https://cdn.jsdelivr.net/gh/dongannhien99-lgtm/grid-material@v1.0.0/js/gridmaterial.js" defer></script>
```

- GitHub: https://github.com/dongannhien99-lgtm/grid-material
- Dokumentation (nach Aktivierung von GitHub Pages): https://dongannhien99-lgtm.github.io/grid-material/
- npm (nach Veröffentlichung): https://www.npmjs.com/package/gridmaterial-ui

### Erste Veröffentlichung

1. Auf https://www.npmjs.com/ registrieren und Zwei-Faktor-Authentifizierung aktivieren.
2. Im Terminal im Ordner `GridMaterial`: `npm login`.
3. Paketnamen prüfen: `npm view gridmaterial-ui version` — bei `E404` ist der Name eventuell noch frei (npm-Website prüfen).
4. `npm run check` und `npm pack --dry-run` ausführen.
5. Mit `npm publish` veröffentlichen. Für einen eigenen Scoped-Namen `@DEIN-NPM-USERNAME/gridmaterial-ui` stattdessen `npm publish --access public` nutzen.
6. Für Änderungen die Version erhöhen, zum Beispiel `npm version patch`, dann `npm publish`. Bereits veröffentlichte Versionsnummern können nicht erneut verwendet werden.

**Hinweis:** Das npm-Paket enthält absichtlich nur die Framework-CSS-/JS-Dateien, README und Lizenz. Der vollständige Quellcode mit Dokumentationswebsite, Beispielen und Tests verbleibt auf GitHub.

## Dokumentationsumfang

- **24 Komponenten**: Accordion, Alerts, Badge, Breadcrumb, Buttons, Button group, Card, Carousel, Close button, Collapse, Dropdowns, List group, Modal, Navbar, Navs & Tabs, Offcanvas, Pagination, Placeholders, Popovers, Progress, Scrollspy, Spinners, Toasts, Tooltips.
- **9 Formulare**: Form control, Select, Checks & Radios, Switches, Range, Input group, Floating labels, Form layout, Validation.
- **4 Inhalte**: Typography, Images, Tables, Figures.
- **6 Layout-Bausteine**: Breakpoints, Containers, 12-column Grid, Columns & Gutters, CSS Grid, Z-index.
- **12 Helpers**: Clearfix, Color & Background, Colored links, Focus ring, Icon links, Position, Ratio, Stacks, Stretched link, Text truncation, Vertical rule, Visually hidden.
- **7 Utilities**: Spacing, Colors & Backgrounds, Borders, Flex & Display, Sizing & Position, Shadows & Opacity, Text & Overflow.
- **6 Material Extras**: FAB, Chips, Segmented Buttons, Bottom Sheet, Navigation Rail, Date Picker.
- **5 Anleitungsseiten**: Einführung, Installation, Design Tokens, JavaScript, Accessibility.

## JavaScript API

```js
GridMaterial.modal.show('dialogId');
GridMaterial.modal.hide('dialogId');
GridMaterial.offcanvas.show('drawerId');
GridMaterial.offcanvas.hide('drawerId');
GridMaterial.sheet.show('sheetId');
GridMaterial.sheet.hide('sheetId');
GridMaterial.toast('Erfolg!', { type: 'success', duration: 4000 });
GridMaterial.carousel.go('carouselId', 2);
GridMaterial.carousel.next('carouselId');
GridMaterial.carousel.prev('carouselId');
GridMaterial.theme.set('dark');
GridMaterial.theme.toggle();
GridMaterial.theme.accent('#6846b6');
GridMaterial.forms.validate(formElement);
```

Die Komponenten können auch mit `data-gm-toggle`, `data-gm-target`, `data-gm-dismiss` ohne eigene JavaScript-Dateien gesteuert werden. Für einzelne Komponenten siehe die jeweiligen Referenzseiten.

## CSS / Responsive

Für Layout: `.gm-container`, `.gm-row`, `.gm-col-12`, `.gm-col-md-6`, `.gm-g-3`, `.gm-grid`. Breakpoints: `sm 576`, `md 768`, `lg 992`, `xl 1200`, `xxl 1400`. Das öffentliche Namensschema ist bewusst `gm-` statt Bootstrap-`btn`, `row`, `col`.

Alle Designwerte sind in `:root` und `[data-theme="dark"]` des Framework-CSS zentral hinterlegt. Eigene Styles nach `gridmaterial.css` einbinden, um Tokens zu überschreiben.

## Barrierefreiheit / Qualitätsgrenzen

Eine grundlegende Tastatur- und ARIA-Unterstützung ist implementiert, darunter Fokus-Falle für Dialoge und Escape-Schließen. Eine vollständige WCAG- oder Browser-Matrix-Zertifizierung ist nicht Bestandteil dieser Version. Komplexe Anwendungen sollten weiterhin projektabhängige Screenreader-Tests, Usability-Tests und Cross-Browser-Tests durchführen. Date Picker nutzt bewusst die native Browsersteuerung. Carousel ist manuell und nicht selbstlaufend.

## Lizenz

MIT – siehe `LICENSE`.
