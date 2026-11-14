/* GridMaterial reference documentation — each snippet is a usable HTML example. */
(function(){
const groups=[
 {id:'start',title:'Erste Schritte',icon:'rocket'},
 {id:'components',title:'Komponenten',icon:'layers'},
 {id:'forms',title:'Formulare',icon:'forms'},
 {id:'content',title:'Inhalte & Medien',icon:'type'},
 {id:'layout',title:'Layout',icon:'grid'},
 {id:'helpers',title:'Helpers',icon:'wand'},
 {id:'utilities',title:'Utilities',icon:'settings'},
 {id:'material',title:'Material Extras',icon:'sparkles'}
];
const items=[];
function add(group,id,title,description,html,usage='',api=''){
 items.push({group,id,title,description,html:html.trim(),usage,api});
}
/* Guide */
add('start','introduction','Einführung','Ein eigenständiges, produktiv einsetzbares Designsystem mit 24 klassischen UI-Komponenten, Formularen, responsivem Layout und modernen Material-Elementen.',`
<div class="gm-row gm-g-3">
  <div class="gm-col-12 gm-col-md-6">
    <div class="gm-card gm-card-elevated">
      <div class="gm-card-body">
        <span class="gm-badge">GridMaterial 1.1</span>
        <h3 style="margin-top:14px">Gestalte mit System.</h3>
        <p class="gm-text-muted">Ein konsistentes UI – ganz ohne Abhängigkeiten.</p>
        <button class="gm-btn gm-btn-primary" onclick="GridMaterial.toast('Bereit für dein Projekt!')">Loslegen →</button>
      </div>
    </div>
  </div>
  <div class="gm-col-12 gm-col-md-6">
    <div class="gm-card gm-card-filled"><div class="gm-card-body">
      <h3>Dein Designsystem</h3><p>CSS-Variablen, 12-Spalten-Grid, Themes und moderne Interaktionen.</p>
      <div class="gm-progress" role="progressbar" aria-label="Fortschritt" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"><div class="gm-progress-bar" style="--gm-progress:78%"></div></div>
      <p class="gm-small gm-text-muted" style="margin-top:12px">Einheitliche Komponenten</p>
    </div></div>
  </div>
</div>
`,'Die Bibliothek wird lokal durch eine CSS-Datei und eine JavaScript-Datei eingebunden. Beide sind unabhängig von Bootstrap, jQuery oder einem Build-Tool.');
add('start','installation','Installation','Nutze GridMaterial mit npm, CDN oder lokalen Projektdateien.',`
<div class="gm-card gm-card-outlined"><div class="gm-card-body"><h3>Installation mit npm</h3><pre><code>npm install gridmaterial-ui</code></pre><p>Das Paket enthält die komplette CSS-Bibliothek, ihre 20 Einzelmodule und das Framework-JavaScript.</p><pre><code>import 'gridmaterial-ui/css/gridmaterial.css';
import 'gridmaterial-ui/js/gridmaterial.js';</code></pre><p class="gm-text-muted">Für Projekte mit Vite, Webpack oder einem anderen CSS-fähigen Bundler.</p></div></div>
<div class="gm-card gm-card-outlined gm-mt-3"><div class="gm-card-body"><h3>CDN – jsDelivr</h3><pre><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gridmaterial-ui@1.1.0/css/gridmaterial.css"&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/gridmaterial-ui@1.1.0/js/gridmaterial.js" defer&gt;&lt;/script&gt;</code></pre><p>Für einfache HTML-Seiten ohne Build-Werkzeuge.</p></div></div>
<div class="gm-card gm-card-outlined gm-mt-3"><div class="gm-card-body"><h3>Einzelne CSS-Module</h3><pre><code>import 'gridmaterial-ui/css/modules/tokens.css';
import 'gridmaterial-ui/css/modules/buttons.css';
import 'gridmaterial-ui/css/modules/forms.css';
import 'gridmaterial-ui/css/modules/variants.css';</code></pre><p>Module können gezielt eingebunden werden; <code>tokens.css</code> gehört an den Anfang. Die vollständige Datei enthält bereits sämtliche Module.</p></div></div>
<div class="gm-card gm-card-outlined gm-mt-3"><div class="gm-card-body"><h3>Projekt und Dokumentation</h3><p><a href="https://github.com/dongannhien99-lgtm/grid-material" target="_blank" rel="noopener noreferrer">Quellcode auf GitHub</a> · <a href="https://www.npmjs.com/package/gridmaterial-ui" target="_blank" rel="noopener noreferrer">Paket auf npm</a> · <a href="https://dongannhien99-lgtm.github.io/grid-material/" target="_blank" rel="noopener noreferrer">Online-Dokumentation</a></p></div></div>
`,'Die gebündelte CSS-Datei enthält alle Komponenten. Einzelne Stylesheets sind unter css/modules/ organisiert.',`npm install gridmaterial-ui

import 'gridmaterial-ui/css/gridmaterial.css';
import 'gridmaterial-ui/js/gridmaterial.js';`);
add('start','customization','Design Tokens','Alle Farben, Rundungen, Abstände und Schatten lassen sich über CSS Custom Properties anpassen.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap"><button class="gm-btn gm-btn-primary">Primary</button><button class="gm-btn gm-btn-tonal">Tonal</button><button class="gm-btn gm-btn-outlined">Outlined</button><span class="gm-badge">Badge</span></div>
<div class="gm-card gm-card-filled" style="margin-top:16px"><div class="gm-card-body">Die Palette passt sich automatisch dem Light-/Dark-Theme an.</div></div>
`,'Lege eigene Token-Overrides nach der GridMaterial-CSS-Datei an. Nutze data-theme="dark" am html-Element, um in den dunklen Modus zu wechseln.',`:root {
  --gm-primary: #6846b6;
  --gm-radius-lg: 20px;
  --gm-shadow-md: 0 8px 24px #3228491e;
}`);
add('start','javascript','JavaScript API','Alle interaktiven Komponenten funktionieren über data-gm-* Attribute oder über das globale GridMaterial-Objekt.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap">
 <button class="gm-btn gm-btn-primary" onclick="GridMaterial.toast('JavaScript API funktioniert!')">Toast öffnen</button>
 <button class="gm-btn gm-btn-tonal" data-gm-toggle="theme">Theme umschalten</button>
</div>
`,'Öffne Dialoge mit GridMaterial.modal.show(id), Toasts mit GridMaterial.toast(text) und wähle Carousel-Slides mit GridMaterial.carousel.go(id, index). Events werden als gm:shown / gm:hidden / gm:slide ausgelöst.',`GridMaterial.modal.show('meinModal');
GridMaterial.toast('Erfolgreich gespeichert!', { type: 'success' });
GridMaterial.theme.set('dark');`);
add('start','accessibility','Barrierefreiheit','Semantische HTML-Elemente, ARIA-Attribute, sichtbare Fokus-Stile und die Unterstützung reduzierter Bewegung gehören zum Fundament.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap"><button class="gm-btn gm-btn-primary" data-gm-tooltip="Mit Tab fokussieren">Fokus testen</button><label class="gm-check-label"><input type="checkbox" class="gm-check" checked> Barrierearm</label></div>
`,'Für zugängliche Komponenten sind korrekte Labels, aria-controls, aria-expanded und aussagekräftige Texte erforderlich. Dialoge haben Fokus-Falle und Escape-Schließen; Tabs unterstützen Pfeiltasten. Teste mit Tastatur und Screenreader.');
/* Components: complete 24-entry catalog */
add('components','accordion','Accordion','Aufklappbare Informationsbereiche, auch für FAQs und verschachtelte Inhalte.',`
<div class="gm-accordion" id="acc-example">
 <div class="gm-accordion-item"><button class="gm-accordion-trigger" aria-expanded="true" aria-controls="acc-a" data-gm-toggle="accordion">Wie funktioniert GridMaterial?</button><div class="gm-accordion-panel" id="acc-a">Mit eigenen CSS-Klassen und einer kleinen JavaScript-API – ohne Bootstrap.</div></div>
 <div class="gm-accordion-item"><button class="gm-accordion-trigger" aria-expanded="false" aria-controls="acc-b" data-gm-toggle="accordion">Ist Dark Mode enthalten?</button><div class="gm-accordion-panel" id="acc-b" hidden>Ja. Er wird über das Attribut data-theme gesteuert.</div></div>
 <div class="gm-accordion-item"><button class="gm-accordion-trigger" aria-expanded="false" aria-controls="acc-c" data-gm-toggle="accordion">Kann ich alles anpassen?</button><div class="gm-accordion-panel" id="acc-c" hidden>Farben, Rundungen, Abstände und Schatten sind Design-Tokens.</div></div>
</div>
`,'Für mehrere gleichzeitig geöffnete Elemente data-gm-multiple="true" am .gm-accordion setzen. Jeder Trigger benötigt eine eindeutige aria-controls-ID.');
add('components','alerts','Alerts','Kontextabhängige Hinweise, Warnungen, Fehler und Erfolgsmeldungen.',`
<div class="gm-d-grid gm-gap-2">
 <div class="gm-alert gm-alert-info"><span>ⓘ</span><div><strong>Information</strong><div>Deine Einstellungen sind synchronisiert.</div></div></div>
 <div class="gm-alert gm-alert-success"><span>✓</span><div><strong>Erfolgreich</strong><div>Alle Änderungen wurden gespeichert.</div></div></div>
 <div class="gm-alert gm-alert-warning"><span>!</span><div><strong>Achtung</strong><div>Bitte überprüfe die Eingaben.</div></div></div>
 <div class="gm-alert gm-alert-danger"><span>×</span><div><strong>Fehler</strong><div>Die Verbindung konnte nicht hergestellt werden.</div></div><button class="gm-close" aria-label="Hinweis schließen" data-gm-dismiss="alert">×</button></div>
</div>`,'Alerts sind semantisch Hinweise, keine automatisch verschwindenden Benachrichtigungen. Verwende für temporäre Nachrichten Toasts.');
add('components','badge','Badge','Kompakte Statusanzeigen und Zähler in verschiedenen Varianten.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap"><span class="gm-badge">Standard</span><span class="gm-badge gm-badge-success">● Aktiv</span><span class="gm-badge gm-badge-warning">In Prüfung</span><span class="gm-badge gm-badge-danger">3 Fehler</span><span class="gm-badge gm-badge-outline">Entwurf</span></div>`);
add('components','breadcrumb','Breadcrumb','Kontext für die aktuelle Position innerhalb der Seitenhierarchie.',`
<nav aria-label="Brotkrumennavigation"><ol class="gm-breadcrumb"><li><a href="#/start/introduction">Start</a></li><li><a href="#/components/card">Komponenten</a></li><li aria-current="page">Breadcrumb</li></ol></nav>`,'Nutze ein nav mit aria-label und markiere den aktuellen Eintrag über aria-current="page".');
add('components','buttons','Buttons','Material-inspirierte Aktionen mit Filled, Tonal, Outlined, Text und Elevated.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap">
 <button class="gm-btn gm-btn-primary" onclick="GridMaterial.toast('Primary geklickt')">Filled</button>
 <button class="gm-btn gm-btn-tonal" onclick="GridMaterial.toast('Tonal geklickt')">Tonal</button>
 <button class="gm-btn gm-btn-outlined">Outlined</button>
 <button class="gm-btn gm-btn-text">Text</button>
 <button class="gm-btn gm-btn-elevated">Elevated</button>
 <button class="gm-btn gm-btn-primary gm-btn-sm">Small</button>
 <button class="gm-btn gm-btn-primary gm-btn-lg">Large</button>
 <button class="gm-btn gm-btn-primary" disabled>Disabled</button>
</div>`,'Buttons sollten eindeutige Aktionsbeschriftungen haben. Für Icons .gm-btn-icon ergänzen, Ladezustände mit .gm-btn-loading anzeigen.');
add('components','button-group','Button group','Zusammenhängende Buttons für Werkzeugleisten oder Optionsgruppen.',`
<div class="gm-btn-group" role="group" aria-label="Textausrichtung"><button class="gm-btn gm-btn-outlined" aria-pressed="true" data-gm-press>Links</button><button class="gm-btn gm-btn-outlined" aria-pressed="false" data-gm-press>Mitte</button><button class="gm-btn gm-btn-outlined" aria-pressed="false" data-gm-press>Rechts</button></div>`,'Verwende role="group" mit einer aussagekräftigen Beschriftung. data-gm-press schaltet den aktiven Zustand innerhalb der Gruppe um.');
add('components','card','Card','Flexible Inhaltscontainer mit optionalem Header, Bild, Footer und Elevation.',`
<div class="gm-row gm-g-3"><div class="gm-col-12 gm-col-md-6"><article class="gm-card gm-card-elevated"><div class="gm-card-header"><span class="gm-badge">Empfohlen</span></div><div class="gm-card-body"><h3 class="gm-card-title">Design System</h3><p class="gm-card-subtitle">Wiederverwendbare Oberfläche</p><p>Baue einheitliche Benutzeroberflächen mit klaren Komponenten.</p><button class="gm-btn gm-btn-primary" onclick="GridMaterial.toast('Details geöffnet')">Mehr erfahren</button></div></article></div><div class="gm-col-12 gm-col-md-6"><article class="gm-card gm-card-filled"><div class="gm-card-body"><h3 class="gm-card-title">Filled Card</h3><p>Dezente Flächen ohne störende Rahmen.</p><span class="gm-badge gm-badge-success">Bereit</span></div><div class="gm-card-footer">Aktualisiert heute</div></article></div></div>`);
add('components','carousel','Carousel','Ein Slider für unterschiedliche Inhalte mit Buttons und Indikatoren.',`
<div class="gm-carousel" id="carousel-reference" aria-roledescription="Karussell" aria-label="Features" data-gm-index="0"><div class="gm-carousel-track">
 <div class="gm-carousel-slide"><div class="gm-slide-art gm-slide-purple"><span>01 / 03</span><h3>Build beautiful interfaces.</h3><p>Eine Bibliothek. Unzählige Möglichkeiten.</p></div></div>
 <div class="gm-carousel-slide"><div class="gm-slide-art gm-slide-blue"><span>02 / 03</span><h3>Responsive by design.</h3><p>Passend für jede Bildschirmgröße.</p></div></div>
 <div class="gm-carousel-slide"><div class="gm-slide-art gm-slide-green"><span>03 / 03</span><h3>Ready for production.</h3><p>Vanilla CSS und JavaScript.</p></div></div>
 </div><div class="gm-carousel-controls"><button class="gm-carousel-control" data-gm-slide="-1" data-gm-target="carousel-reference" aria-label="Vorherige Folie">‹</button><button class="gm-carousel-control" data-gm-slide="+1" data-gm-target="carousel-reference" aria-label="Nächste Folie">›</button></div><div class="gm-carousel-indicators"><button data-gm-slide="0" data-gm-target="carousel-reference" aria-label="Folie 1"></button><button data-gm-slide="1" data-gm-target="carousel-reference" aria-label="Folie 2"></button><button data-gm-slide="2" data-gm-target="carousel-reference" aria-label="Folie 3"></button></div></div>
`,'Die Folien laufen nicht automatisch. Das vermeidet unerwartete Bewegungen; bei Bedarf kann die Anwendung per API selbst ein Intervall ansteuern.');
add('components','close-button','Close button','Eine einheitliche Schließen-Schaltfläche für Dialoge, Alerts und Panels.',`
<div class="gm-hstack gm-gap-2"><div class="gm-card gm-p-2 gm-hstack gm-gap-3"><span>Hinweis schließen</span><button class="gm-close" aria-label="Schließen" onclick="GridMaterial.toast('Schließen ausgelöst')">×</button></div></div>`);
add('components','collapse','Collapse','Zusätzliche Inhalte bei Bedarf ein- und ausblenden.',`
<button class="gm-btn gm-btn-outlined" data-gm-toggle="collapse" data-gm-target="collapse-ref" aria-controls="collapse-ref" aria-expanded="false">Weitere Details anzeigen</button>
<div class="gm-card gm-mt-3" id="collapse-ref" hidden><div class="gm-card-body">Diese Inhalte werden durch die Collapse-Komponente gesteuert. Der aria-expanded-Zustand aktualisiert sich automatisch.</div></div>`);
add('components','dropdowns','Dropdowns','Kontextmenüs mit Tastatur-fokussierbaren Aktionen.',`
<div class="gm-dropdown"><button class="gm-btn gm-btn-outlined" data-gm-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Aktionen <span>⌄</span></button><div class="gm-menu" hidden role="menu"><div class="gm-menu-label">DATEI</div><button class="gm-menu-item" role="menuitem" onclick="GridMaterial.toast('Datei geöffnet')">↗ &nbsp; Öffnen</button><button class="gm-menu-item" role="menuitem" onclick="GridMaterial.toast('Datei umbenannt')">✎ &nbsp; Umbenennen</button><div class="gm-menu-divider"></div><button class="gm-menu-item" role="menuitem" onclick="GridMaterial.toast('Element gelöscht')">× &nbsp; Löschen</button></div></div>`,'Menüs schließen sich automatisch bei Klick außerhalb oder Escape. Nutze data-gm-toggle="dropdown" am Auslöser.');
add('components','list-group','List group','Strukturierte Listen für Aktionen, Einstellungen und Statusinformationen.',`
<ul class="gm-list-group" style="max-width:480px"><li class="gm-list-group-item"><span>📁 &nbsp; Projekte</span><span class="gm-badge">12</span></li><li class="gm-list-group-item gm-active"><span>✦ &nbsp; Favoriten</span><span class="gm-badge">4</span></li><li class="gm-list-group-item"><span>☑ &nbsp; Aufgaben</span><span class="gm-badge gm-badge-success">Fertig</span></li></ul>`);
add('components','modal','Modal','Fokussierte Dialogfenster mit Backdrop, Escape-Unterstützung und Fokusmanagement.',`
<button class="gm-btn gm-btn-primary" data-gm-toggle="modal" data-gm-target="modal-reference">Dialog öffnen</button>
<div class="gm-backdrop" id="modal-reference" aria-hidden="true" inert><div class="gm-modal" role="dialog" aria-modal="true" aria-labelledby="modal-reference-title" tabindex="-1"><div class="gm-modal-header"><h3 id="modal-reference-title">Projekt erstellen</h3><button class="gm-close" data-gm-dismiss="modal" data-gm-target="modal-reference" aria-label="Schließen">×</button></div><p class="gm-text-muted">Gib deinem Projekt einen Namen und bestätige die Aktion.</p><label class="gm-form-field"><span class="gm-label">Projektname</span><input class="gm-input" placeholder="Neues Projekt"></label><div class="gm-modal-footer"><button class="gm-btn gm-btn-text" data-gm-dismiss="modal" data-gm-target="modal-reference">Abbrechen</button><button class="gm-btn gm-btn-primary" onclick="GridMaterial.modal.hide('modal-reference');GridMaterial.toast('Projekt angelegt',{type:'success'})">Erstellen</button></div></div></div>
`,'Nutze GridMaterial.modal.show(id) und .hide(id). Das Schließen gibt den Fokus an den vorherigen Auslöser zurück.');
add('components','navbar','Navbar','Responsive Hauptnavigation für Desktop und Mobilgeräte.',`
<nav class="gm-navbar gm-rounded-lg gm-border" aria-label="Beispielnavigation"><a href="#/start/introduction" class="gm-navbar-brand"><span class="gm-logo-mini">G</span>GridMaterial</a><button class="gm-btn gm-btn-icon gm-navbar-toggle" aria-label="Menü umschalten" data-gm-toggle="navbar" data-gm-target="nav-reference" aria-expanded="false">☰</button><div class="gm-navbar-collapse" id="nav-reference"><ul class="gm-navbar-nav"><li><a class="gm-nav-link gm-active" href="#/components/navbar">Start</a></li><li><a class="gm-nav-link" href="#/components/buttons">Komponenten</a></li><li><a class="gm-nav-link" href="#/start/installation">Dokumentation</a></li></ul><button class="gm-btn gm-btn-primary gm-ms-auto" onclick="GridMaterial.toast('Willkommen!')">Loslegen</button></div></nav>
`,'Unter 768 Pixeln wird der Toggle-Button eingeblendet; die Navigation lässt sich ein- und ausklappen.');
add('components','navs-tabs','Navs & Tabs','Zugängliche Registerkarten und Pills mit Pfeiltasten-Navigation.',`
<div class="gm-tabs" role="tablist" aria-label="Details"><button class="gm-tab" id="t-first" role="tab" aria-controls="p-first" aria-selected="true" tabindex="0">Übersicht</button><button class="gm-tab" id="t-second" role="tab" aria-controls="p-second" aria-selected="false" tabindex="-1">Statistik</button><button class="gm-tab" id="t-third" role="tab" aria-controls="p-third" aria-selected="false" tabindex="-1">Einstellungen</button></div>
<div class="gm-tab-panel" role="tabpanel" aria-labelledby="t-first" id="p-first">Willkommen zur Übersicht deines Projekts.</div><div class="gm-tab-panel" role="tabpanel" aria-labelledby="t-second" id="p-second" hidden>Hier werden Statistiken angezeigt.</div><div class="gm-tab-panel" role="tabpanel" aria-labelledby="t-third" id="p-third" hidden>Einstellungen können hier verändert werden.</div>
`,'Tabs nutzen aria-controls und role="tabpanel". Pfeiltasten, Home und End wechseln die Auswahl. Mit .gm-pills werden die Tabs rund.');
add('components','offcanvas','Offcanvas','Seitliche Panels, die bei Bedarf in den Vordergrund gleiten.',`
<button class="gm-btn gm-btn-primary" data-gm-toggle="offcanvas" data-gm-target="drawer-ref">Menü öffnen →</button><aside class="gm-offcanvas" id="drawer-ref" aria-hidden="true" inert role="dialog" aria-labelledby="drawer-ref-title" tabindex="-1"><div class="gm-hstack gm-justify-between"><h3 id="drawer-ref-title">Arbeitsbereich</h3><button class="gm-close" data-gm-dismiss="offcanvas" data-gm-target="drawer-ref" aria-label="Schließen">×</button></div><p class="gm-text-muted">Schneller Zugriff auf deine Bereiche.</p><nav class="gm-vstack gm-gap-2"><a class="gm-nav-link gm-active" href="#/components/offcanvas">Übersicht</a><a class="gm-nav-link" href="#/components/card">Projekte</a><a class="gm-nav-link" href="#/forms/form-control">Einstellungen</a></nav></aside>`,'Füge .gm-offcanvas-end hinzu, um das Panel von rechts einfahren zu lassen. Escape und Backdrop schließen das Panel.');
add('components','pagination','Pagination','Navigation durch mehrere Seiten einer Liste oder Datenansicht.',`
<nav aria-label="Seitennavigation"><ul class="gm-pagination"><li><button class="gm-page-link" data-doc-page="prev" aria-label="Vorherige Seite">‹</button></li><li><button class="gm-page-link gm-active" data-doc-page="1" aria-current="page">1</button></li><li><button class="gm-page-link" data-doc-page="2">2</button></li><li><button class="gm-page-link" data-doc-page="3">3</button></li><li><button class="gm-page-link" data-doc-page="next" aria-label="Nächste Seite">›</button></li></ul></nav><p class="gm-small gm-text-muted" id="gm-page-status" style="margin-top:10px">Seite 1 von 3</p>`,'Die Utility stellt die Anzeige bereit. Die Daten für die neue Seite lädt deine Anwendung; das Beispiel aktualisiert die Seitennummer.');
add('components','placeholders','Placeholders','Skeleton-Ladezustände für noch nicht geladene Inhalte.',`
<div class="gm-hstack gm-gap-3" style="max-width:440px"><span class="gm-skeleton gm-skeleton-circle" style="width:54px;flex:none"></span><div style="flex:1"><span class="gm-skeleton gm-skeleton-title"></span><span class="gm-skeleton gm-skeleton-line"></span><span class="gm-skeleton gm-skeleton-line" style="width:68%"></span></div></div>`,'Die Animation beachtet prefers-reduced-motion. Skeletons sollten ungefähr dem späteren Layout entsprechen.');
add('components','popovers','Popovers','Kontextbezogene Informationskarten per Klick.',`
<button class="gm-btn gm-btn-outlined" data-gm-toggle="popover" data-gm-title="Information zum Feature" data-gm-content="Popover-Inhalte sind beliebig positionierte, kompakte Informationskarten.">Popover öffnen ⓘ</button>`,'Titel und Text werden aus data-gm-title und data-gm-content als TextContent gesetzt (kein unkontrolliertes HTML).');
add('components','progress','Progress','Fortschrittsbalken für Aufgaben, Uploads und mehrstufige Abläufe.',`
<div class="gm-vstack gm-gap-3" style="max-width:500px"><div><div class="gm-hstack gm-justify-between gm-small"><strong>Projektfortschritt</strong><span>68 %</span></div><div class="gm-progress gm-mt-2" role="progressbar" aria-label="Projektfortschritt" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"><div class="gm-progress-bar" style="--gm-progress:68%"></div></div></div><div class="gm-progress gm-progress-success" role="progressbar" aria-label="Abgeschlossen" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div class="gm-progress-bar" style="--gm-progress:100%"></div></div><div class="gm-progress gm-progress-indeterminate" role="progressbar" aria-label="Lädt"><div class="gm-progress-bar"></div></div></div>`,'Setze --gm-progress auf den Prozentwert und aktualisiere aria-valuenow. Unbestimmter Fortschritt verwendet .gm-progress-indeterminate.');
add('components','scrollspy','Scrollspy','Aktive Menüeinträge beim Scrollen anhand sichtbarer Abschnitte markieren.',`
<div class="gm-hstack gm-gap-3" style="align-items:flex-start"><nav data-gm-scrollspy data-gm-scroll-root="spy-box" class="gm-vstack gm-gap-1" style="min-width:125px"><a href="#spy-one" class="gm-nav-link gm-active">Überblick</a><a href="#spy-two" class="gm-nav-link">Details</a><a href="#spy-three" class="gm-nav-link">Kontakt</a></nav><div id="spy-box" style="height:170px;overflow:auto;flex:1;border:1px solid var(--gm-border);border-radius:12px;padding:15px;scroll-behavior:smooth"><section id="spy-one" style="min-height:125px"><strong>Überblick</strong><p>Scrolle in diesem Fenster nach unten.</p></section><section id="spy-two" style="min-height:125px"><strong>Details</strong><p>Der aktive Menüpunkt wechselt automatisch.</p></section><section id="spy-three" style="min-height:125px"><strong>Kontakt</strong><p>Die Navigation bleibt synchron.</p></section></div></div>`,'Für Scroll-Container setze data-gm-scroll-root="container-id" am Scrollspy-Menü. Ohne diese Angabe wird das Browserfenster beobachtet.');
add('components','spinners','Spinners','Animierte Ladeindikatoren als Kreis oder pulsierende Punkte.',`
<div class="gm-hstack gm-gap-4"><span class="gm-spinner" role="status" aria-label="Lädt"></span><span class="gm-spinner gm-spinner-sm" role="status" aria-label="Lädt"></span><span class="gm-spinner-dots" role="status" aria-label="Lädt"><i></i><i></i><i></i></span><button class="gm-btn gm-btn-primary gm-btn-loading" disabled>Speichern</button></div>`);
add('components','toasts','Toasts','Kurzlebige Benachrichtigungen ohne Unterbrechung des Workflows.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap"><button class="gm-btn gm-btn-primary" onclick="GridMaterial.toast('Erfolgreich gespeichert!',{type:'success'})">Erfolg anzeigen</button><button class="gm-btn gm-btn-outlined" onclick="GridMaterial.toast('Vorgang fehlgeschlagen',{type:'danger'})">Fehler anzeigen</button></div>`,'GridMaterial.toast(message, {type: "success"|"danger", duration: 4000}). duration:0 deaktiviert das automatische Schließen.');
add('components','tooltips','Tooltips','Knappe Informationen bei Hover oder Tastaturfokus.',`
<div class="gm-hstack gm-gap-2"><button class="gm-btn gm-btn-outlined" data-gm-tooltip="Kopiert Inhalte in die Zwischenablage">Kopieren ⓘ</button><button class="gm-btn gm-btn-tonal" data-gm-tooltip="Mehr Details über diese Aktion">Information ⓘ</button></div>`,'Nutze data-gm-tooltip für kurze, ergänzende Hinweise. Pflichtinformationen sollten ohne Hover sichtbar bleiben.');
/* Forms */
add('forms','form-control','Form control','Mehrzeilige und einzeilige Eingabefelder mit einheitlichem Fokus-Stil.',`
<div style="max-width:480px"><div class="gm-form-field"><label class="gm-label" for="form-name">Vollständiger Name</label><input class="gm-input" id="form-name" placeholder="Max Mustermann"><span class="gm-form-hint">So erscheint dein Name im Profil.</span></div><div class="gm-form-field"><label class="gm-label" for="form-msg">Nachricht</label><textarea class="gm-textarea" id="form-msg" placeholder="Deine Nachricht …"></textarea></div><div class="gm-form-field"><label class="gm-label">Deaktiviert</label><input class="gm-input" disabled value="Nicht bearbeitbar"></div></div>`);
add('forms','select','Select','Native Select-Felder in einheitlicher Material-Optik.',`
<div class="gm-form-field" style="max-width:400px"><label class="gm-label" for="select-ref">Kategorie wählen</label><select class="gm-select" id="select-ref"><option>Design</option><option>Frontend</option><option>Backend</option><option>Projektmanagement</option></select><span class="gm-form-hint">Wähle eine der verfügbaren Optionen.</span></div>`);
add('forms','checks-radios','Checks & Radios','Einzelauswahl, Mehrfachauswahl und kontrollierte Eingaben.',`
<div class="gm-row gm-g-3"><div class="gm-col-12 gm-col-md-6"><h4>Checkboxen</h4><div class="gm-vstack gm-gap-2"><label class="gm-check-label"><input type="checkbox" class="gm-check" checked> Newsletter abonnieren</label><label class="gm-check-label"><input type="checkbox" class="gm-check"> Updates erhalten</label></div></div><div class="gm-col-12 gm-col-md-6"><h4>Radio</h4><div class="gm-vstack gm-gap-2"><label class="gm-check-label"><input type="radio" name="gm-plan" class="gm-radio" checked> Monatlich</label><label class="gm-check-label"><input type="radio" name="gm-plan" class="gm-radio"> Jährlich</label></div></div></div>`);
add('forms','switches','Switches','Kippschalter für sofort wirksame Einstellungen.',`
<div class="gm-vstack gm-gap-3"><label class="gm-hstack gm-gap-3"><input class="gm-switch" type="checkbox" checked><span>Benachrichtigungen aktivieren</span></label><label class="gm-hstack gm-gap-3"><input class="gm-switch" type="checkbox"><span>Automatische Updates</span></label><label class="gm-hstack gm-gap-3"><input class="gm-switch" type="checkbox" disabled><span class="gm-text-muted">Gesperrte Einstellung</span></label></div>`);
add('forms','range','Range','Schieberegler für numerische Werte und Live-Anzeige.',`
<div style="max-width:430px"><div class="gm-hstack gm-justify-between"><label for="range-ref" class="gm-label">Lautstärke</label><output id="range-output">45</output></div><input id="range-ref" class="gm-range" type="range" min="0" max="100" value="45" data-gm-output="range-output"><div class="gm-hstack gm-justify-between gm-small gm-text-muted"><span>0</span><span>100</span></div></div>`);
add('forms','input-group','Input group','Eingaben mit vorangestellten oder nachgestellten Texten und Aktionen.',`
<div class="gm-vstack gm-gap-3" style="max-width:490px"><div class="gm-input-group"><span class="gm-input-addon">@</span><input class="gm-input" placeholder="benutzername" aria-label="Benutzername"></div><div class="gm-input-group"><input class="gm-input" type="url" placeholder="https://beispiel.de" aria-label="Webadresse"><button class="gm-btn gm-btn-primary" onclick="GridMaterial.toast('Adresse geprüft')">Prüfen</button></div></div>`);
add('forms','floating-labels','Floating labels','Beschriftungen, die bei Fokus oder Eingabe nach oben wandern.',`
<div class="gm-vstack gm-gap-3" style="max-width:400px"><div class="gm-floating"><input class="gm-input" id="float-mail" type="email" placeholder=" "><label for="float-mail">E-Mail-Adresse</label></div><div class="gm-floating"><input class="gm-input" id="float-name" value="Jane Doe" placeholder=" "><label for="float-name">Vollständiger Name</label></div></div>`,'Wichtig: Setze placeholder=" " (ein Leerzeichen), damit :placeholder-shown korrekt funktioniert.');
add('forms','form-layout','Form layout','Formularfelder responsiv in Zeilen, Spalten oder Grids anordnen.',`
<div class="gm-form-row"><div class="gm-form-field"><label class="gm-label" for="firstname">Vorname</label><input class="gm-input" id="firstname" placeholder="Jane"></div><div class="gm-form-field"><label class="gm-label" for="lastname">Nachname</label><input class="gm-input" id="lastname" placeholder="Doe"></div></div><div class="gm-form-field"><label class="gm-label" for="company">Unternehmen</label><input class="gm-input" id="company" placeholder="Beispiel GmbH"></div>`);
add('forms','validation','Validation','Formularvalidierung mit nachvollziehbaren Fehlermeldungen.',`
<form class="gm-vstack" data-gm-validate novalidate id="validate-ref" style="max-width:450px"><div class="gm-form-field"><label class="gm-label" for="valid-name">Name *</label><input class="gm-input" id="valid-name" name="name" required minlength="3" placeholder="Mindestens drei Zeichen"><span class="gm-error-message">Bitte mindestens drei Zeichen eingeben.</span></div><div class="gm-form-field"><label class="gm-label" for="valid-email">E-Mail *</label><input class="gm-input" type="email" id="valid-email" name="email" required placeholder="hallo@beispiel.de"><span class="gm-error-message">Bitte eine gültige E-Mail angeben.</span></div><button class="gm-btn gm-btn-primary" type="submit">Formular prüfen</button></form>`,'Die Bibliothek ergänzt .gm-invalid/.gm-valid und aria-invalid. Eigene Fehlermeldungen können mit .gm-error-message eingebunden werden.');
/* Content */
add('content','typography','Typography','Ein konsistentes Typosystem mit Headlines, Fließtext, Lead, Highlight und Zitaten.',`
<div><div class="gm-display-2">Design, das bleibt.</div><p class="gm-lead">Klar strukturiert, lesbar und flexibel – auf jedem Bildschirm.</p><h3>Abschnittsüberschrift</h3><p>Dies ist gewöhnlicher Fließtext mit einem <span class="gm-mark">hervorgehobenen Abschnitt</span> und einem <a href="#/components/buttons">interaktiven Link</a>.</p><blockquote>Gutes Design macht komplexe Dinge verständlich.</blockquote></div>`);
add('content','images','Images','Responsive Bilder mit abgerundeten Ecken oder Thumbnail-Rahmen.',`
<div class="gm-row gm-g-3"><div class="gm-col-12 gm-col-md-6"><img class="gm-img-fluid gm-img-rounded" src="assets/landscape.svg" alt="Abstrakte Berglandschaft mit Sonnenuntergang"></div><div class="gm-col-12 gm-col-md-6"><img class="gm-img-fluid gm-img-thumbnail" src="assets/landscape.svg" alt="Abstrakte Berglandschaft als Thumbnail"></div></div>`);
add('content','tables','Tables','Tabellen mit Varianten für Rahmen, Zebra-Streifen und Hoverzustände.',`
<div class="gm-table-responsive"><table class="gm-table gm-table-striped gm-table-hover"><thead><tr><th>Projekt</th><th>Status</th><th>Team</th><th>Fortschritt</th></tr></thead><tbody><tr><td>Website</td><td><span class="gm-badge gm-badge-success">Aktiv</span></td><td>Design</td><td>84 %</td></tr><tr><td>Mobile App</td><td><span class="gm-badge gm-badge-warning">Review</span></td><td>Frontend</td><td>56 %</td></tr><tr><td>Dashboard</td><td><span class="gm-badge">Geplant</span></td><td>Produkt</td><td>12 %</td></tr></tbody></table></div>`);
add('content','figures','Figures','Bilder mit semantischer Bildunterschrift kombinieren.',`
<figure class="gm-figure" style="max-width:410px"><img src="assets/landscape.svg" class="gm-img-fluid gm-img-rounded" alt="Illustrative Landschaft mit Bergen"><figcaption class="gm-figure-caption">Abb. 1: Beispielillustration als responsive Figure.</figcaption></figure>`);
/* Layout */
add('layout','breakpoints','Breakpoints','Sechs Breakpoint-Stufen für ein flexibles responsives Layout.',`
<div class="gm-table-responsive"><table class="gm-table gm-table-striped"><thead><tr><th>Breakpoint</th><th>CSS-Präfix</th><th>Viewport</th></tr></thead><tbody><tr><td>Extra small</td><td>Standard</td><td>&lt; 576 px</td></tr><tr><td>Small</td><td>sm</td><td>≥ 576 px</td></tr><tr><td>Medium</td><td>md</td><td>≥ 768 px</td></tr><tr><td>Large</td><td>lg</td><td>≥ 992 px</td></tr><tr><td>Extra large</td><td>xl</td><td>≥ 1200 px</td></tr><tr><td>XXL</td><td>xxl</td><td>≥ 1400 px</td></tr></tbody></table></div>`,'Die Stufen folgen dem vertrauten Bootstrap-Schema; das Design und die Klassenpräfixe bleiben GridMaterial-eigenständig.');
add('layout','containers','Containers','Zentrierte Inhaltsbereiche mit variabler maximaler Breite.',`
<div class="gm-bg-primary-soft gm-rounded-lg gm-p-3"><div class="gm-container gm-bg-surface gm-rounded gm-p-3 gm-border" style="max-width:550px;text-align:center">.gm-container zentriert die Inhalte</div></div>`,'Verfügbar: gm-container, gm-container-fluid, gm-container-sm, gm-container-md, gm-container-lg, gm-container-xl, gm-container-xxl.');
add('layout','grid-system','Grid-System','12-Spalten-Flexbox-Grid mit responsiven Spaltenbreiten.',`
<div class="gm-row gm-g-2 gm-grid-preview"><div class="gm-col-12 gm-col-md-8"><div>8 Spalten</div></div><div class="gm-col-12 gm-col-md-4"><div>4 Spalten</div></div><div class="gm-col-6 gm-col-md-4"><div>4 Spalten</div></div><div class="gm-col-6 gm-col-md-4"><div>4 Spalten</div></div><div class="gm-col-12 gm-col-md-4"><div>4 Spalten</div></div></div>`,'Spalten und Offset-Klassen stehen für xs, sm, md, lg, xl und xxl zur Verfügung. .gm-row kombiniert sich mit .gm-col-*.');
add('layout','columns-gutters','Columns & Gutters','Spaltenabstände, Offsets und automatische Verteilung.',`
<div class="gm-row gm-g-3 gm-grid-preview"><div class="gm-col-6"><div>Abstand 24px</div></div><div class="gm-col-6"><div>Abstand 24px</div></div><div class="gm-col-8 gm-offset-2"><div>Zentriert mit Offset 2</div></div></div>`,'gm-g-0 bis gm-g-4, gm-gx-2 und gm-gy-3 steuern horizontalen und vertikalen Abstand.');
add('layout','css-grid','CSS Grid','Native CSS-Grid-Klassen für komplexere Oberflächen.',`
<div class="gm-grid gm-grid-preview" style="--gm-grid-cols:6;--gm-grid-gap:12px"><div class="gm-grid-span-3">3 / 6</div><div class="gm-grid-span-3">3 / 6</div><div class="gm-grid-span-2">2 / 6</div><div class="gm-grid-span-4">4 / 6</div></div>`,'Die Anzahl der Spalten wird über --gm-grid-cols gesteuert. Auf schmalen Displays fällt die Vorschau automatisch auf zwei Spalten zurück.');
add('layout','z-index','Z-index','Ein abgestuftes Ebenensystem verhindert Überlagerungsfehler.',`
<div class="gm-vstack gm-gap-2" style="max-width:460px"><div class="gm-card gm-p-2">Dropdown <strong class="gm-ms-auto">1000</strong></div><div class="gm-card gm-p-2">Sticky / Fixed <strong>1020 / 1030</strong></div><div class="gm-card gm-p-2">Overlay / Modal <strong>1040 / 1050</strong></div><div class="gm-card gm-p-2">Popover / Tooltip / Toast <strong>1070–1090</strong></div></div>`,'Alle Werte sind als --gm-z-* Variablen definiert; UI-Komponenten nutzen diese zentralen Design-Tokens.');
/* Helpers */
add('helpers','clearfix','Clearfix','Float-basierte Inhalte in einem Container vollständig einschließen.',`
<div class="gm-clearfix gm-card gm-p-3"><div style="float:left;width:75px;height:75px;background:var(--gm-primary-container);border-radius:12px;margin-right:14px"></div><strong>Clearfix-Container</strong><p class="gm-text-muted">Die Höhe enthält auch das links schwebende Element.</p></div>`);
add('helpers','color-background','Color & Background','Farben und Kontrast abgestimmt auf die aktuellen Design-Tokens.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap"><span class="gm-text-bg-primary gm-rounded gm-p-2">Primary</span><span class="gm-text-bg-success gm-rounded gm-p-2">Success</span><span class="gm-text-bg-danger gm-rounded gm-p-2">Danger</span></div>`);
add('helpers','colored-links','Colored links','Semantisch eingefärbte Links in der Designpalette.',`
<div class="gm-hstack gm-gap-3 gm-flex-wrap"><a href="#/start/introduction" class="gm-link-primary">Primary Link</a><a href="#/components/alerts" class="gm-link-success">Success Link</a><a href="#/components/alerts" class="gm-link-danger">Danger Link</a><a href="#/components/alerts" class="gm-link-warning">Warning Link</a></div>`);
add('helpers','focus-ring','Focus ring','Gut sichtbare Fokus-Konturen für Tastaturbedienung.',`
<div class="gm-hstack gm-gap-3"><button class="gm-btn gm-btn-outlined gm-focus-ring">Tab drücken und fokussieren</button><input class="gm-input gm-focus-ring" style="max-width:210px" placeholder="Hier fokussieren"></div>`);
add('helpers','icon-links','Icon links','Text und Icons entlang einer gemeinsamen Basislinie ausrichten.',`
<a class="gm-icon-link" href="#/components/buttons"><span style="font-size:19px">↗</span> Alle Buttons entdecken</a>`);
add('helpers','position','Position','Vordefinierte Klassen für feste, sticky und absolute Positionen.',`
<div class="gm-position-relative gm-rounded-lg gm-bg-subtle gm-border" style="height:140px"><span class="gm-position-absolute gm-top-0 gm-start-0 gm-badge">top-0 start-0</span><span class="gm-position-absolute gm-top-50 gm-start-50 gm-translate-middle gm-badge gm-badge-success">Zentriert</span><span class="gm-position-absolute gm-bottom-0 gm-end-0 gm-badge">bottom-0 end-0</span></div>`);
add('helpers','ratio','Ratio','Seitenverhältnisse für Bilder, Videos, Iframes und Medienflächen.',`
<div style="max-width:400px"><div class="gm-ratio gm-ratio-16x9 gm-rounded-lg gm-bg-primary-soft gm-overflow-hidden"><div class="gm-d-flex gm-align-center gm-justify-center" style="color:var(--gm-on-primary-container);font-weight:750;font-size:2rem">16 : 9</div></div></div>`);
add('helpers','stacks','Stacks','Flexbox-Helfer für vertikale oder horizontale Elemente.',`
<div class="gm-vstack gm-gap-2" style="max-width:370px"><div class="gm-hstack gm-gap-2"><span class="gm-badge">A</span><span class="gm-badge">B</span><span class="gm-badge">C</span></div><div class="gm-card gm-p-2">Vertikaler Abschnitt 1</div><div class="gm-card gm-p-2">Vertikaler Abschnitt 2</div></div>`);
add('helpers','stretched-link','Stretched link','Eine komplette Karte über einen positionierten Link anklickbar machen.',`
<article class="gm-card gm-position-relative gm-card-interactive" style="max-width:360px"><div class="gm-card-body"><h3 class="gm-card-title">Mehr erfahren</h3><p>Die gesamte Karte ist eine Klickfläche.</p><a class="gm-stretched-link" href="#/components/card">Card-Dokumentation ↗</a></div></article>`);
add('helpers','text-truncation','Text truncation','Überlange einzeilige Texte durch Auslassungspunkte kürzen.',`
<div class="gm-truncate gm-card gm-p-3" style="max-width:300px">Eine wirklich sehr lange Überschrift, die nicht in eine einzelne schmale Karte passt.</div>`);
add('helpers','vertical-rule','Vertical rule','Vertikale Trennlinien für horizontale Layouts.',`
<div class="gm-hstack gm-gap-3" style="height:48px"><strong>Start</strong><span class="gm-vr"></span><span>Komponenten</span><span class="gm-vr"></span><span class="gm-text-muted">Design Tokens</span></div>`);
add('helpers','visually-hidden','Visually hidden','Für Screenreader lesbare Beschriftungen optisch ausblenden.',`
<div><label for="vis-search" class="gm-visually-hidden">Suche</label><input class="gm-input" id="vis-search" placeholder="Feld mit Screenreader-Label" style="max-width:380px"><p class="gm-form-hint gm-mt-2">Die unsichtbare Beschriftung ist im Accessibility Tree vorhanden.</p></div>`);
/* Utilities */
add('utilities','spacing','Spacing','Ein konsistentes Abstands-Raster für Margin, Padding und Gap.',`
<div class="gm-d-flex gm-gap-2 gm-flex-wrap"><div class="gm-bg-primary-soft gm-p-1 gm-rounded">p-1</div><div class="gm-bg-primary-soft gm-p-2 gm-rounded">p-2</div><div class="gm-bg-primary-soft gm-p-3 gm-rounded">p-3</div><div class="gm-bg-primary-soft gm-p-4 gm-rounded">p-4</div><div class="gm-bg-primary-soft gm-p-5 gm-rounded">p-5</div></div>`,'Verfügbar: gm-m-*, gm-mt-*, gm-mb-*, gm-ms-*, gm-me-*, gm-mx-*, gm-my-* und entsprechende gm-p-*. Skala 0–6 (0,4,8,12,16,24,32 px).');
add('utilities','colors-backgrounds','Colors & Backgrounds','Semantische Farbklassen, Hintergründe und Farbverläufe.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap"><div class="gm-bg-primary gm-bg-gradient gm-p-3 gm-rounded" style="color:var(--gm-on-primary)">Primary Gradient</div><div class="gm-bg-primary-soft gm-p-3 gm-rounded">Primary Soft</div><div class="gm-bg-success-soft gm-p-3 gm-rounded gm-text-success">Success</div><div class="gm-bg-danger-soft gm-p-3 gm-rounded gm-text-danger">Danger</div></div>`);
add('utilities','borders','Borders','Rahmen, Rahmenvarianten und unterschiedliche Radiusgrößen.',`
<div class="gm-hstack gm-gap-3 gm-flex-wrap"><div class="gm-border gm-rounded-sm gm-p-3">Small</div><div class="gm-border gm-rounded gm-p-3">Medium</div><div class="gm-border gm-rounded-xl gm-p-3">Extra large</div><div class="gm-border gm-rounded-pill gm-p-3">Pill</div></div>`);
add('utilities','flex-display','Flex & Display','Anzeige, Anordnung, Ausrichtung und Verteilung von Flex-Elementen.',`
<div class="gm-d-flex gm-justify-between gm-align-center gm-gap-2 gm-bg-subtle gm-rounded-lg gm-p-3"><span class="gm-badge">Links</span><span class="gm-badge">Mitte</span><span class="gm-badge">Rechts</span></div>`,'Klassen wie gm-d-flex, gm-d-grid, gm-justify-between, gm-align-center und gm-flex-column stehen unmittelbar bereit.');
add('utilities','sizing-position','Sizing & Position','Abmessungen und Positionen mit einheitlichen Utility-Klassen.',`
<div class="gm-bg-subtle gm-rounded-lg gm-p-2"><div class="gm-bg-primary-soft gm-rounded gm-p-2 gm-w-25">25 %</div><div class="gm-bg-primary-soft gm-rounded gm-p-2 gm-w-50 gm-mt-2">50 %</div><div class="gm-bg-primary-soft gm-rounded gm-p-2 gm-w-100 gm-mt-2">100 %</div></div>`);
add('utilities','shadows-opacity','Shadows & Opacity','Räumliche Tiefe und abgestufte Transparenz.',`
<div class="gm-hstack gm-gap-3 gm-flex-wrap gm-p-3"><div class="gm-card gm-shadow-sm gm-p-3">shadow-sm</div><div class="gm-card gm-shadow gm-p-3">shadow</div><div class="gm-card gm-shadow-lg gm-p-3">shadow-lg</div><div class="gm-card gm-opacity-50 gm-p-3">opacity-50</div></div>`);
add('utilities','text-overflow','Text & Overflow','Typografie-, Ausrichtungs- und Überlauf-Klassen.',`
<div class="gm-vstack gm-gap-2"><span class="gm-text-primary gm-fw-bold">Bold Primary</span><span class="gm-text-muted gm-fs-6">Small Muted</span><div class="gm-truncate gm-border gm-p-2 gm-rounded" style="max-width:270px">Sehr langer Text mit Ellipsis bei Überlauf im Container</div></div>`);
/* Additional Material components */
add('material','fab','Floating Action Button','Hervorgehobene Hauptaktion, optional mit Text.',`
<div class="gm-hstack gm-gap-3"><button class="gm-fab" aria-label="Neues Element erstellen" onclick="GridMaterial.toast('Neues Element')">＋</button><button class="gm-fab gm-fab-extended" onclick="GridMaterial.toast('Neues Projekt')">＋ Neues Projekt</button><button class="gm-fab gm-fab-small" aria-label="Favorisieren">♡</button></div>`);
add('material','chips','Chips','Filter- und Auswahlchips mit interaktivem Auswahlzustand.',`
<div class="gm-hstack gm-gap-2 gm-flex-wrap"><button class="gm-chip" aria-pressed="true">✓ Design</button><button class="gm-chip" aria-pressed="false">Frontend</button><button class="gm-chip" aria-pressed="false">Backend</button><span class="gm-chip">Aktiver Filter <button class="gm-close" aria-label="Filter entfernen" data-gm-dismiss="chip">×</button></span></div>`);
add('material','segmented-buttons','Segmented Buttons','Kompakte exklusive Auswahl mit klarer visueller Rückmeldung.',`
<div class="gm-segmented" role="group" aria-label="Ansichtsmodus"><button aria-pressed="true" data-gm-press>Liste</button><button aria-pressed="false" data-gm-press>Raster</button><button aria-pressed="false" data-gm-press>Board</button></div>`);
add('material','bottom-sheet','Bottom Sheet','Material-typisches Panel, das vom unteren Bildschirmrand erscheint.',`
<button class="gm-btn gm-btn-primary" data-gm-toggle="sheet" data-gm-target="sheet-ref">Bottom Sheet öffnen</button><div class="gm-bottom-sheet" id="sheet-ref" role="dialog" aria-hidden="true" inert aria-labelledby="sheet-title" tabindex="-1"><div class="gm-sheet-handle"></div><div class="gm-hstack gm-justify-between"><h3 id="sheet-title">Schnellaktionen</h3><button class="gm-close" data-gm-dismiss="sheet" data-gm-target="sheet-ref" aria-label="Schließen">×</button></div><p class="gm-text-muted">Wähle eine der verfügbaren Aktionen.</p><div class="gm-hstack gm-gap-2 gm-flex-wrap"><button class="gm-btn gm-btn-tonal" onclick="GridMaterial.sheet.hide('sheet-ref');GridMaterial.toast('Geteilt')">Teilen</button><button class="gm-btn gm-btn-outlined" onclick="GridMaterial.sheet.hide('sheet-ref');GridMaterial.toast('Gespeichert')">Speichern</button></div></div>`);
add('material','navigation-rail','Navigation Rail','Platzsparende Seitennavigation für Desktop-Anwendungen.',`
<nav class="gm-nav-rail gm-rounded-lg" aria-label="Beispiel-Navigation"><a class="gm-active" href="#/material/navigation-rail"><span style="font-size:1.35rem">⌂</span>Home</a><a href="#/components/card"><span style="font-size:1.35rem">▦</span>Projekte</a><a href="#/forms/form-control"><span style="font-size:1.35rem">⚙</span>Settings</a></nav>`);
add('material','date-picker','Date Picker','Ein gestylter nativer Date Picker ohne externe Bibliothek.',`
<div class="gm-form-field" style="max-width:330px"><label class="gm-label" for="date-reference">Datum auswählen</label><input class="gm-input" id="date-reference" type="date"><span class="gm-form-hint">Verwendet die Datumsauswahl des Browsers bzw. Betriebssystems.</span></div>`,'Die native Browsersteuerung bietet bessere internationale Formate und Eingabegeräte-Unterstützung als ein unvollständiger Custom-Kalender.');
window.GridMaterialDocs={groups,items};
})();
