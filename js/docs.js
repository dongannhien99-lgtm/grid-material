/* GridMaterial official documentation and component explorer. */
(()=>{
 'use strict';
 const {groups,items}=window.GridMaterialDocs;
 const $=(s,r=document)=>r.querySelector(s);
 const $$=(s,r=document)=>[...r.querySelectorAll(s)];
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const link=x=>`#/${x.group}/${x.id}`;
 const allByPath=new Map(items.map(x=>[`${x.group}/${x.id}`,x]));
 const state={current:null,query:'',palette:[],paletteIndex:0};
 const icons={
  rocket:'<path d="M4 13c2-4 6-8 13-9 2 7-2 11-6 13l-4-4-3 0zM11 17l-2 3M7 13l-3 2M16 8l.01 0"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/>',
  forms:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  type:'<path d="M4 7V5h16v2M12 5v14M8 19h8"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  wand:'<path d="m4 20 12-12 4 4L8 24M15 3v2M21 6l-2 1M18 2l-1 2M3 11l2 1"/>',
  settings:'<path d="M4 7h16M4 12h16M4 17h16M9 5v4M15 10v4M8 15v4"/>',
  sparkles:'<path d="m12 2 2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2ZM19 18l.7 2.3L22 21l-2.3.7L19 24l-.7-2.3L16 21l2.3-.7L19 18Z"/>'
 };
 function icon(name){return `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">${icons[name]||icons.layers}</svg>`}
 function toggleMenu(open){
  $('#docs-sidebar').classList.toggle('is-open',open);
  $('#nav-scrim').classList.toggle('is-open',open);
  $('#mobile-nav-toggle').setAttribute('aria-expanded',String(open));
 }
 function renderSidebar(){
  const query=state.query.trim().toLocaleLowerCase('de');
  const nav=$('#docs-sidebar-nav');
  let count=0;
  nav.innerHTML=groups.map(g=>{
   const matches=items.filter(i=>i.group===g.id&&(i.title+' '+i.description+' '+g.title).toLocaleLowerCase('de').includes(query));
   count+=matches.length;
   if(!matches.length)return '';
   return `<section class="docs-nav-group" data-nav-group="${g.id}">
     <button class="docs-group-toggle" data-group-toggle="${g.id}" aria-expanded="true" type="button"><span class="docs-group-icon">${icon(g.icon)}</span>${esc(g.title)}<span class="docs-count">${matches.length}</span><span class="docs-group-chevron">⌄</span></button>
     <div class="docs-group-links">${matches.map(i=>`<a class="docs-nav-link${state.current===i?' is-active':''}" href="${link(i)}" ${state.current===i?'aria-current="page"':''}>${esc(i.title)}</a>`).join('')}</div></section>`;
  }).join('')||'<p class="docs-no-search">Keine Komponenten gefunden.</p>';
  $('#sidebar-total').textContent=`${count} Einträge`;
 }
 function homeHero(){
  return `<div class="docs-home-hero">
    <span class="docs-hero-label">✦ &nbsp; Eigenständiges UI Framework · v1.1.0</span>
    <h2>Alles, was dein Interface braucht.</h2>
    <p>Eine vollständige, moderne Komponentenbibliothek mit eigenem Material-inspiriertem Design. Entwickelt für echte Anwendungen – ganz ohne Bootstrap oder jQuery.</p>
    <div class="docs-hero-buttons"><a class="gm-btn gm-btn-primary" href="#/start/installation">Jetzt starten &nbsp; ↗</a><a class="gm-btn gm-btn-outlined" href="#/components/accordion">Komponenten entdecken</a></div>
    <div class="docs-hero-stats"><div><strong>24</strong><span>UI-Komponenten</span></div><div><strong>${items.length}</strong><span>Dokumentationsseiten</span></div><div><strong>0</strong><span>Framework-Abhängigkeiten</span></div></div>
   </div>
   <div class="docs-quick-grid">
    <a class="docs-quick-card" href="#/components/buttons"><span class="docs-quick-ico">◈</span><b>Komponenten</b><span>Buttons, Cards, Modals, Menüs und interaktive Controls.</span></a>
    <a class="docs-quick-card" href="#/layout/grid-system"><span class="docs-quick-ico">▦</span><b>Responsive Layout</b><span>12 Spalten, sechs Breakpoints und flexible Utilities.</span></a>
    <a class="docs-quick-card" href="#/start/customization"><span class="docs-quick-ico">✦</span><b>Design Tokens</b><span>Light/Dark Mode, Farben, Radius und anpassbare Themes.</span></a>
   </div>`;
 }
 function formatHTML(source){
  // Pretty-print only the source shown/copied, never the live markup.
  const flat=source.trim().replace(/>\s*</g,'>\n<');
  let depth=0;
  return flat.split('\n').map(raw=>{
    const line=raw.trim();if(!line)return '';
    if(/^<\//.test(line))depth=Math.max(0,depth-1);
    const indent='  '.repeat(Math.min(depth,12));
    const opening=(line.match(/<(?!\/|!)[A-Za-z][^>]*>/g)||[]).length;
    const closing=(line.match(/<\/[A-Za-z][^>]*>/g)||[]).length;
    const selfClosing=(line.match(/<(?:(?:input|img|br|hr|meta|link|path|circle|rect)\b)[^>]*>|<[^>]+\/>/gi)||[]).length;
    depth=Math.max(0,depth+opening-closing-selfClosing+( /^<\//.test(line)?1:0));
    return indent+line;
  }).join('\n').split('\n').map(line=>{
    if(line.length<=110)return line;
    const padding=' '.repeat((line.match(/^\s*/)||[''])[0].length+2);
    return line.replace(/ (?=[\w:-]+=(?:"[^"]*"|'[^']*'))/g,'\n'+padding);
  }).join('\n');
 }
 function prettyCode(source){
   // Tokenize before producing highlighting HTML to avoid re-highlighting spans.
   const re=/<\/?[a-z][^>]*>/gi;
   let output='',last=0,match;
   while((match=re.exec(source))){
     output+=esc(source.slice(last,match.index));
     const tag=match[0];
     const parts=tag.match(/^(<\/?)([\w:-]+)([\s\S]*?)(\/?>)$/);
     if(!parts){output+=esc(tag);last=re.lastIndex;continue}
     const attrs=parts[3].replace(/([\w:-]+)(=)("[^"]*"|'[^']*')/g,(_,name,eq,value)=>
       `\u0001${name}\u0002${eq}\u0003${value}\u0004`);
     const safeAttrs=esc(attrs).replace(/\u0001/g,'<span class="tok-attr">').replace(/\u0002/g,'</span>').replace(/\u0003/g,'<span class="tok-value">').replace(/\u0004/g,'</span>');
     output+=`<span class="tok-tag">${esc(parts[1]+parts[2])}</span>${safeAttrs}<span class="tok-tag">${esc(parts[4])}</span>`;
     last=re.lastIndex;
   }
   return output+esc(source.slice(last));
 }
 function previewPage(item){
  const group=groups.find(g=>g.id===item.group);
  const pos=items.indexOf(item),prev=items[pos-1],next=items[pos+1];
  const showHome=item.group==='start'&&item.id==='introduction';
  const isCode=item.api&&item.api.trim();
  return `${showHome?homeHero():''}
   <div class="docs-eyebrow"><span class="docs-eyebrow-line"></span>${esc(group.title)} <span style="color:var(--gm-outline)">/</span> ${esc(item.title)}</div>
   <h1 class="docs-title">${esc(item.title)}</h1>
   <p class="docs-desc">${esc(item.description)}</p>
   <div class="docs-feature-pills"><span>GridMaterial v1.1</span><span>CSS + Vanilla JS</span><span>Responsive</span><span>Dark Mode</span></div>
   <div class="docs-hairline"></div>
   <section id="docs-example" aria-labelledby="docs-preview-heading"><h2 class="docs-section-title" id="docs-preview-heading">Beispiel</h2><p class="docs-section-desc">Interaktive Vorschau der echten Framework-Komponente.</p><div class="docs-preview"><div class="docs-example-label">LIVE PREVIEW</div>${item.html}</div>
    <div class="docs-code-frame" id="docs-markup"><div class="docs-code-top"><div class="docs-code-meta"><span class="docs-code-dot"></span> HTML &nbsp;·&nbsp; kopierfertig</div><button class="docs-copy" type="button" data-copy="markup" aria-label="HTML-Code kopieren">${copyIcon()} Code kopieren</button></div><pre class="docs-code-pre"><code>${prettyCode(formatHTML(item.html))}</code></pre></div></section>

   ${item.variants?.length?`<section id="docs-variants" class="gm-mt-5"><h2 class="docs-section-title">10 Varianten: ${esc(item.title)}</h2><p class="docs-section-desc">Zehn nutzbare Varianten mit eigener Vorschau und individuell kopierbarem HTML.</p><div class="docs-variant-list">${item.variants.map((variant,index)=>`<article class="docs-variant-card"><div class="docs-variant-header"><b>${String(index+1).padStart(2,'0')} · ${esc(variant.name)}</b><button class="docs-copy" type="button" data-copy-variant="${index}">${copyIcon()} Code kopieren</button></div><div class="docs-variant-preview">${variant.html}</div><details class="docs-variant-source"><summary>HTML anzeigen</summary><pre class="docs-code-pre"><code>${prettyCode(formatHTML(variant.html))}</code></pre></details></article>`).join('')}</div></section>`:''}
   ${item.usage?`<section id="docs-usage" class="gm-mt-5"><h2 class="docs-section-title">Verwendung</h2><p class="docs-section-desc">${esc(item.usage)}</p></section>`:''}
   ${isCode?`<section id="docs-api" class="gm-mt-4"><h2 class="docs-section-title">${item.group==='start'?'Konfiguration / API':'Codebeispiel'}</h2><div class="docs-code-frame" style="border-radius:14px"><div class="docs-code-top"><span class="docs-code-meta">CSS / JavaScript</span><button class="docs-copy" type="button" data-copy="api">${copyIcon()} Code kopieren</button></div><pre class="docs-code-pre"><code>${esc(item.api)}</code></pre></div></section>`:''}
   <section id="docs-source" class="gm-mt-5"><h2 class="docs-section-title">Quellcode & API</h2><p class="docs-section-desc">Die gebündelten Komponentenstile sind in <strong>gridmaterial.css</strong> enthalten; editierbare Einzelmodule liegen in <strong>css/modules/</strong>. Interaktionen liegen in <strong>gridmaterial.js</strong>. Beide Dateien können direkt geöffnet und kopiert werden.</p><div class="docs-source-links"><a href="css/gridmaterial.css" target="_blank" rel="noopener">${codeIcon()} Vollständiges CSS ansehen</a><a href="css/modules/variants.css" target="_blank" rel="noopener">${codeIcon()} Komponenten-Varianten CSS</a><a href="js/gridmaterial.js" target="_blank" rel="noopener">${codeIcon()} JavaScript ansehen</a><a href="examples/starter.html" target="_blank" rel="noopener">${codeIcon()} Starter-Projekt öffnen</a></div></section>
   ${item.group==='start'&&item.id==='accessibility'?'<div class="docs-note"><b>Hinweis zur Produktivnutzung</b>Teste Komponenten mit verschiedenen Screenreadern und assistiven Technologien. Dieses Framework ist eigenständig; eine formale WCAG-Zertifizierung ist damit nicht verbunden.</div>':''}
   <div class="docs-next-prev">${prev?`<a href="${link(prev)}"><small>← Vorherige Seite</small><strong>${esc(prev.title)}</strong></a>`:'<div></div>'}${next?`<a href="${link(next)}"><small>Nächste Seite →</small><strong>${esc(next.title)}</strong></a>`:'<div></div>'}</div>
   <footer class="docs-footer"><span>© 2026 GridMaterial UI · MIT License</span><span>Made for interfaces that matter.</span></footer>`;
 }
 function copyIcon(){return '<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>'}
 function codeIcon(){return '<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>'}
 function buildToc(item){
  const entries=[['docs-example','Beispiel'],['docs-markup','HTML-Code'],...(item.variants?.length?[['docs-variants','10 Varianten']]:[]),...(item.usage?[['docs-usage','Verwendung']]:[]),...(item.api?[['docs-api','API / Konfiguration']]:[]),['docs-source','Quellcode']];
  $('#docs-toc').innerHTML=entries.map(([id,name],ix)=>`<button class="docs-toc-link${!ix?' is-active':''}" data-scroll-to="${id}">${esc(name)}</button>`).join('');
 }
 function route(){
  const path=location.hash.replace(/^#\/?/,'').split(/[?&]/)[0]||'start/introduction';
  const item=allByPath.get(path)||items[0];
  const changed=item!==state.current;
  state.current=item;
  renderSidebar();
  $('#docs-content').innerHTML=previewPage(item);
  buildToc(item);
  document.title=`${item.title} · GridMaterial UI`;
  $('#top-home').setAttribute('aria-current',item.group==='start'?'page':'false');
  $('#top-components').setAttribute('aria-current',item.group==='components'?'page':'false');
  $('#top-design').setAttribute('aria-current',item.id==='customization'?'page':'false');
  // Reinitialize dynamic component areas, e.g. carousel and modal.
  GridMaterial.init();
  if(changed){window.scrollTo({top:0,behavior:'instant'});toggleMenu(false)}
  const active=$('.docs-nav-link.is-active');active?.scrollIntoView({block:'nearest',behavior:'instant'});
  $('#docs-main').setAttribute('aria-label',`${item.title} Dokumentation`);
 }
 async function copy(text,button){
  let success=false;
  try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);success=true}}catch(e){}
  if(!success){const area=document.createElement('textarea');area.value=text;area.style.cssText='position:fixed;opacity:0;top:-1000px';document.body.append(area);area.select();try{success=document.execCommand('copy')}catch(e){}area.remove()}
  if(success){const original=button.innerHTML;button.classList.add('is-copied');button.textContent='✓ Kopiert';setTimeout(()=>{button.innerHTML=original;button.classList.remove('is-copied')},1500)}
  else GridMaterial.toast('Kopieren nicht verfügbar. Markiere den Code manuell.');
 }
 function filterSidebar(query){state.query=query;renderSidebar()}
 function openPalette(){
  $('#search-dialog').hidden=false;
  $('#palette-search').value='';
  updatePalette('');
  requestAnimationFrame(()=>$('#palette-search').focus());
 }
 function closePalette(){$('#search-dialog').hidden=true;$('#open-search').focus()}
 function updatePalette(query){
  const q=query.toLocaleLowerCase('de').trim();
  state.palette=items.filter(x=>!q||(x.title+' '+x.description+' '+x.group).toLocaleLowerCase('de').includes(q)).slice(0,12);
  state.paletteIndex=0;
  renderPalette();
 }
 function renderPalette(){
  $('#palette-results').innerHTML=state.palette.map((x,i)=>{
   const g=groups.find(y=>y.id===x.group);
   return `<button class="docs-search-result${i===state.paletteIndex?' is-highlighted':''}" data-palette-to="${link(x)}"><span><b>${esc(x.title)}</b><small>${esc(g.title)} · ${esc(x.description.slice(0,72))}</small></span><span aria-hidden="true">↗</span></button>`;
  }).join('')||'<p class="docs-no-search">Keine passenden Einträge.</p>';
 }
 document.addEventListener('click',event=>{
  const group=event.target.closest('[data-group-toggle]');if(group){
   const wrap=group.closest('.docs-nav-group');wrap.classList.toggle('is-collapsed');group.setAttribute('aria-expanded',String(!wrap.classList.contains('is-collapsed')));
  }
  const copied=event.target.closest('[data-copy]');
  if(copied&&state.current)copy(copied.dataset.copy==='api'?state.current.api:formatHTML(state.current.html),copied);
  const variantCopy=event.target.closest('[data-copy-variant]');
  if(variantCopy&&state.current?.variants){const sample=state.current.variants[Number(variantCopy.dataset.copyVariant)];if(sample)copy(formatHTML(sample.html),variantCopy)}
  const scroll=event.target.closest('[data-scroll-to]');
  if(scroll){const el=document.getElementById(scroll.dataset.scrollTo);el?.scrollIntoView({behavior:'smooth',block:'start'});$$('.docs-toc-link').forEach(x=>x.classList.toggle('is-active',x===scroll))}
  if(event.target.closest('#open-search'))openPalette();
  if(event.target.closest('#mobile-nav-toggle'))toggleMenu(!$('#docs-sidebar').classList.contains('is-open'));
  if(event.target.id==='nav-scrim')toggleMenu(false);
  if(event.target.id==='search-dialog')closePalette();
  const result=event.target.closest('[data-palette-to]');if(result){location.hash=result.dataset.paletteTo;closePalette()}
  const pagination=event.target.closest('[data-doc-page]');
  if(pagination){
   const buttons=$$('[data-doc-page]',pagination.closest('.gm-pagination'));
   const current=Number(buttons.find(b=>b.classList.contains('gm-active'))?.dataset.docPage)||1;
   const value=pagination.dataset.docPage;
   const page=value==='prev'?Math.max(1,current-1):value==='next'?Math.min(3,current+1):Number(value);
   buttons.forEach(b=>{b.classList.toggle('gm-active',Number(b.dataset.docPage)===page);if(Number(b.dataset.docPage)===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
   const status=$('#gm-page-status');if(status)status.textContent=`Seite ${page} von 3`;
  }
  const spy=event.target.closest('[data-gm-scrollspy] a[href^="#spy-"]');
  if(spy){event.preventDefault();const t=document.getElementById(spy.hash.slice(1));t?.scrollIntoView({block:'start',behavior:'smooth'});}
 });
 document.addEventListener('submit',event=>{
   if(event.target.closest('.docs-preview')){
     event.preventDefault();
     if(event.target.checkValidity())GridMaterial.toast('Formular erfolgreich validiert!',{type:'success'});
   }
 });
 $('#side-search').addEventListener('input',e=>filterSidebar(e.target.value));
 $('#palette-search').addEventListener('input',e=>updatePalette(e.target.value));
 $('#palette-search').addEventListener('keydown',event=>{
  if(event.key==='ArrowDown'){event.preventDefault();state.paletteIndex=Math.min(state.palette.length-1,state.paletteIndex+1);renderPalette()}
  if(event.key==='ArrowUp'){event.preventDefault();state.paletteIndex=Math.max(0,state.paletteIndex-1);renderPalette()}
  if(event.key==='Enter'&&state.palette.length){event.preventDefault();location.hash=link(state.palette[state.paletteIndex]);closePalette()}
 });
 document.addEventListener('keydown',event=>{
  if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();openPalette()}
  if(event.key==='Escape'){
   if(!$('#search-dialog').hidden){event.preventDefault();closePalette()}
   else if($('#docs-sidebar').classList.contains('is-open'))toggleMenu(false);
  }
 });
 window.addEventListener('hashchange',route);
 route();
})();
