/*!
 * GridMaterial UI 1.0.0 — no dependencies
 * Global API: GridMaterial.{modal,offcanvas,toast,tooltip,popover,carousel,...}
 * Markup attributes: data-gm-toggle, data-gm-target, data-gm-dismiss.
 * MIT License.
 */
(function(global){
 'use strict';
 const d=document;
 const one=(s,r=d)=>r.querySelector(s);
 const all=(s,r=d)=>Array.from(r.querySelectorAll(s));
 const byId=id=>typeof id==='string'?d.getElementById(id.replace(/^#/,'')):id;
 const focusable='a[href],area[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
 const emit=(node,name,detail={})=>node?.dispatchEvent(new CustomEvent('gm:'+name,{bubbles:true,detail}));
 const overlays=[];
 let floatNode=null,floatOwner=null;
 const savedTheme=()=>{try{return localStorage.getItem('gm-theme')}catch(e){return null}};
 const saveTheme=x=>{try{localStorage.setItem('gm-theme',x)}catch(e){}};
 const escapeHTML=str=>String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function focusFirst(node){(one('[autofocus]',node)||one(focusable,node)||node).focus({preventScroll:true})}
 function updateLock(){d.body.classList.toggle('gm-body-locked',overlays.length>0)}
 function openOverlay(el,kind){
   el=byId(el);if(!el||el.classList.contains('gm-open'))return;
   const old=d.activeElement;
   if(kind==='offcanvas'||kind==='sheet'){
     const shade=d.createElement('div');shade.className='gm-offcanvas-backdrop';
     shade.dataset.gmShade=el.id;
     shade.addEventListener('click',()=>closeOverlay(el));
     d.body.appendChild(shade);el.__gmShade=shade;
   }
   el.classList.add('gm-open');el.removeAttribute('inert');el.setAttribute('aria-hidden','false');
   el.setAttribute('aria-modal','true');
   overlays.push({el,old});updateLock();focusFirst(el);
   emit(el,'shown',{kind});
 }
 function closeOverlay(el){
   el=byId(el);if(!el||!el.classList.contains('gm-open'))return;
   el.classList.remove('gm-open');el.setAttribute('aria-hidden','true');
   el.removeAttribute('aria-modal');el.setAttribute('inert','');
   if(el.__gmShade){el.__gmShade.remove();el.__gmShade=null}
   const pos=overlays.findIndex(x=>x.el===el),old=pos>=0?overlays[pos].old:null;
   if(pos>=0)overlays.splice(pos,1);updateLock();
   if(old?.isConnected)old.focus({preventScroll:true});
   emit(el,'hidden');
 }
 function closeAllMenus(except){
   all('.gm-dropdown .gm-menu:not([hidden])').forEach(menu=>{
     if(except?.contains(menu))return;
     menu.hidden=true;
     const btn=one('[data-gm-toggle="dropdown"]',menu.closest('.gm-dropdown'));
     btn?.setAttribute('aria-expanded','false');
   });
 }
 function showFloating(owner,kind){
   hideFloating();
   const text=owner.dataset.gmTitle||owner.getAttribute('title')||owner.dataset.gmTooltip||'';
   const body=owner.dataset.gmContent||'';
   if(!text&&!body)return;
   if(owner.hasAttribute('title')){owner.dataset.gmTitle=text;owner.removeAttribute('title')}
   floatOwner=owner;
   const el=d.createElement('div');el.className=kind==='popover'?'gm-popover':'gm-tooltip';
   el.setAttribute('role',kind==='popover'?'dialog':'tooltip');
   if(kind==='popover'){
     if(text){const title=d.createElement('div');title.className='gm-popover-title';title.textContent=text;el.appendChild(title)}
     if(body){const p=d.createElement('div');p.textContent=body;el.appendChild(p)}
   }else el.textContent=text;
   d.body.appendChild(el);floatNode=el;
   const rect=owner.getBoundingClientRect(),w=el.offsetWidth,h=el.offsetHeight;
   const top=rect.bottom+10+h<innerHeight?rect.bottom+10:Math.max(8,rect.top-h-10);
   const left=Math.max(8,Math.min(innerWidth-w-8,rect.left+rect.width/2-w/2));
   el.style.left=left+'px';el.style.top=top+'px';
 }
 function hideFloating(){if(floatNode)floatNode.remove();floatNode=null;floatOwner=null}
 function accordion(btn){
   const container=btn.closest('.gm-accordion');
   const panel=byId(btn.getAttribute('aria-controls')||btn.dataset.gmTarget);
   if(!panel)return;
   const next=btn.getAttribute('aria-expanded')!=='true';
   if(next&&container?.dataset.gmMultiple!=='true'){
     all('.gm-accordion-trigger[aria-expanded="true"]',container).forEach(other=>{
       if(other===btn)return;other.setAttribute('aria-expanded','false');
       const p=byId(other.getAttribute('aria-controls'));if(p)p.hidden=true;
     });
   }
   btn.setAttribute('aria-expanded',String(next));panel.hidden=!next;emit(panel,next?'shown':'hidden');
 }
 function collapse(btn){
   const panel=byId(btn.dataset.gmTarget);if(!panel)return;
   panel.hidden=!panel.hidden;btn.setAttribute('aria-expanded',String(!panel.hidden));
   emit(panel,panel.hidden?'hidden':'shown');
 }
 function selectTab(tab,focus=true){
   const list=tab.closest('[role="tablist"]');if(!list)return;
   all('[role="tab"]',list).forEach(btn=>{
     const active=btn===tab;btn.setAttribute('aria-selected',String(active));btn.tabIndex=active?0:-1;
     const panel=byId(btn.getAttribute('aria-controls'));
     if(panel)panel.hidden=!active;
   });
   if(focus)tab.focus({preventScroll:true});emit(tab,'tabchange');
 }
 function carouselGo(root,target){
   root=byId(root);if(!root)return;
   const slides=all('.gm-carousel-slide',root),track=one('.gm-carousel-track',root);
   if(!slides.length||!track)return;
   let ix=Number(root.dataset.gmIndex)||0;
   if(typeof target==='string'&&/^[+-]/.test(target))ix+=Number(target);
   else ix=Number(target)||0;
   ix=((ix%slides.length)+slides.length)%slides.length;
   root.dataset.gmIndex=ix;track.style.transform=`translateX(-${ix*100}%)`;
   slides.forEach((slide,i)=>{slide.setAttribute('aria-hidden',String(i!==ix));slide.inert=i!==ix});
   all('.gm-carousel-indicators button',root).forEach((b,i)=>b.setAttribute('aria-current',String(i===ix)));
   emit(root,'slide',{index:ix});
 }
 function toast(message,options={}){
   if(typeof options==='number')options={duration:options};
   let root=one('.gm-toast-stack');
   if(!root){root=d.createElement('div');root.className='gm-toast-stack';root.setAttribute('aria-live','polite');root.setAttribute('aria-atomic','false');d.body.append(root)}
   const el=d.createElement('div');el.className='gm-toast'+(options.type?' gm-toast-'+options.type:'');el.setAttribute('role','status');
   const content=d.createElement('span');content.textContent=String(message);content.style.flex='1';el.append(content);
   const close=d.createElement('button');close.className='gm-close';close.type='button';close.setAttribute('aria-label','Benachrichtigung schließen');close.textContent='×';close.addEventListener('click',()=>el.remove());el.append(close);
   root.appendChild(el);
   const duration=options.duration===0?0:(options.duration??4000);
   if(duration>0)setTimeout(()=>el.remove(),duration);
   return el;
 }
 function setTheme(theme){
   const t=theme==='dark'?'dark':'light';d.documentElement.dataset.theme=t;saveTheme(t);
   emit(d.documentElement,'themechange',{theme:t});return t;
 }
 function setAccent(color){
   if(!/^#[0-9a-f]{6}$/i.test(color))return false;
   d.documentElement.style.setProperty('--gm-primary',color);
   d.documentElement.style.setProperty('--gm-primary-hover',color);
   return true;
 }
 function validate(form){
   const fields=all('input,select,textarea',form).filter(x=>x.willValidate);
   fields.forEach(field=>{
     const wrap=field.closest('.gm-form-field');if(!wrap)return;
     const valid=field.checkValidity();wrap.classList.toggle('gm-invalid',!valid);wrap.classList.toggle('gm-valid',valid);
     field.setAttribute('aria-invalid',String(!valid));
   });
   if(!form.checkValidity()){form.reportValidity();return false}return true;
 }
 function updateScrollspy(){
   all('[data-gm-scrollspy]').forEach(nav=>{
     const container=byId(nav.dataset.gmScrollRoot);
     const links=all('a[href^="#"]',nav).filter(x=>byId(x.hash.slice(1)));
     if(!links.length)return;
     let selected=links[0];
     for(const l of links){
       const rect=byId(l.hash.slice(1)).getBoundingClientRect();
       const relativeTop=container?rect.top-container.getBoundingClientRect().top:rect.top;
       if(relativeTop<(container?65:160))selected=l;
     }
     links.forEach(l=>{
       l.classList.toggle('gm-active',l===selected);
       if(l===selected)l.setAttribute('aria-current','location');else l.removeAttribute('aria-current');
     });
   });
 }
 const api={
   version:'1.0.0',
   modal:{show:id=>openOverlay(id,'modal'),hide:closeOverlay},
   offcanvas:{show:id=>openOverlay(id,'offcanvas'),hide:closeOverlay},
   sheet:{show:id=>openOverlay(id,'sheet'),hide:closeOverlay},
   dropdown:{hideAll:()=>closeAllMenus()},
   carousel:{go:carouselGo,next:id=>carouselGo(id,'+1'),prev:id=>carouselGo(id,'-1')},
   tabs:{select:selectTab},
   toast,tooltip:{show:el=>showFloating(el,'tooltip'),hide:hideFloating},
   popover:{show:el=>showFloating(el,'popover'),hide:hideFloating},
   theme:{set:setTheme,toggle:()=>setTheme(d.documentElement.dataset.theme==='dark'?'light':'dark'),accent:setAccent},
   forms:{validate},init:init,
   // Backwards-compatible convenience methods.
   openModal:id=>openOverlay(id,'modal'),closeModal:closeOverlay,openOffcanvas:id=>openOverlay(id,'offcanvas'),closeOffcanvas:closeOverlay,
   toggleTheme:()=>setTheme(d.documentElement.dataset.theme==='dark'?'light':'dark')
 };
 function init(){
   const t=savedTheme();if(t==='light'||t==='dark')d.documentElement.dataset.theme=t;
   all('.gm-backdrop').forEach(el=>{el.setAttribute('aria-hidden','true');el.inert=true});
   all('.gm-offcanvas,.gm-bottom-sheet').forEach(el=>{el.setAttribute('aria-hidden','true');el.inert=true});
   all('.gm-carousel').forEach(el=>carouselGo(el,el.dataset.gmIndex||0));
   updateScrollspy();
   all('[data-gm-scrollspy][data-gm-scroll-root]').forEach(nav=>{
     const root=byId(nav.dataset.gmScrollRoot);
     if(root&&!root.__gmSpyListening){root.addEventListener('scroll',updateScrollspy,{passive:true});root.__gmSpyListening=true}
   });
 }
 d.addEventListener('click',event=>{
   const trigger=event.target.closest('[data-gm-toggle]');
   if(trigger){
     const kind=trigger.dataset.gmToggle,target=trigger.dataset.gmTarget;
     if(kind==='accordion')accordion(trigger);
     if(kind==='collapse')collapse(trigger);
     if(kind==='modal')openOverlay(target,'modal');
     if(kind==='offcanvas')openOverlay(target,'offcanvas');
     if(kind==='sheet')openOverlay(target,'sheet');
     if(kind==='theme')api.theme.toggle();
     if(kind==='dropdown'){
       const menu=one('.gm-menu',trigger.closest('.gm-dropdown'));
       if(menu){const next=menu.hidden;closeAllMenus();menu.hidden=!next;trigger.setAttribute('aria-expanded',String(next));if(next)emit(menu,'shown')}
     }
     if(kind==='popover'){if(floatOwner===trigger)hideFloating();else showFloating(trigger,'popover')}
     if(kind==='navbar'){
       const node=byId(target);if(node){node.classList.toggle('gm-open');trigger.setAttribute('aria-expanded',String(node.classList.contains('gm-open')))}
     }
   }
   const dismiss=event.target.closest('[data-gm-dismiss]');
   if(dismiss){
     const kind=dismiss.dataset.gmDismiss,target=dismiss.dataset.gmTarget;
     if(kind==='modal'||kind==='offcanvas'||kind==='sheet')closeOverlay(target||dismiss.closest('.gm-modal,.gm-offcanvas,.gm-bottom-sheet')?.closest('.gm-backdrop')||dismiss.closest('.gm-offcanvas,.gm-bottom-sheet'));
     if(kind==='alert')dismiss.closest('.gm-alert')?.remove();
     if(kind==='toast')dismiss.closest('.gm-toast')?.remove();
     if(kind==='chip')dismiss.closest('.gm-chip')?.remove();
   }
   const tab=event.target.closest('[role="tab"]');if(tab)selectTab(tab,false);
   const slide=event.target.closest('[data-gm-slide]');if(slide)carouselGo(slide.dataset.gmTarget||slide.closest('.gm-carousel'),slide.dataset.gmSlide);
   const pressed=event.target.closest('[data-gm-press]');if(pressed){
     const group=pressed.closest('.gm-btn-group,.gm-segmented');
     if(group)all('[data-gm-press]',group).forEach(x=>x.setAttribute('aria-pressed',String(x===pressed)));
     else pressed.setAttribute('aria-pressed',String(pressed.getAttribute('aria-pressed')!=='true'));
   }
   const chip=event.target.closest('button.gm-chip:not(:has(.gm-close))');if(chip&&!chip.dataset.gmDismiss)chip.setAttribute('aria-pressed',String(chip.getAttribute('aria-pressed')!=='true'));
   if(event.target.closest('.gm-menu-item'))closeAllMenus();
   if(!event.target.closest('.gm-dropdown'))closeAllMenus();
   if(floatOwner&&!event.target.closest('[data-gm-toggle="popover"]')&&!event.target.closest('.gm-popover'))hideFloating();
   if(event.target.classList.contains('gm-backdrop'))closeOverlay(event.target);
 });
 d.addEventListener('keydown',event=>{
   if(event.key==='Escape'){
     hideFloating();closeAllMenus();
     if(overlays.length){event.preventDefault();closeOverlay(overlays[overlays.length-1].el)}
     return;
   }
   if(event.key==='Tab'&&overlays.length){
     const root=overlays[overlays.length-1].el;
     const opts=all(focusable,root).filter(x=>x.getClientRects().length&&x.tabIndex!==-1);
     if(!opts.length){event.preventDefault();root.focus();return}
     const first=opts[0],last=opts[opts.length-1];
     if(event.shiftKey&&d.activeElement===first){event.preventDefault();last.focus()}
     else if(!event.shiftKey&&d.activeElement===last){event.preventDefault();first.focus()}
     return;
   }
   const tab=event.target.closest('[role="tab"]');
   if(tab&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
     const tabs=all('[role="tab"]',tab.closest('[role="tablist"]'));
     const ix=tabs.indexOf(tab);
     const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(ix+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
     event.preventDefault();selectTab(tabs[next]);
   }
 });
 d.addEventListener('pointerover',event=>{
   const target=event.target.closest('[data-gm-tooltip]');if(target&&target!==floatOwner)showFloating(target,'tooltip');
 });
 d.addEventListener('pointerout',event=>{
   if(floatNode?.classList.contains('gm-tooltip')&&event.target.closest('[data-gm-tooltip]')===floatOwner&&!floatOwner.contains(event.relatedTarget))hideFloating();
 });
 d.addEventListener('focusin',event=>{const t=event.target.closest('[data-gm-tooltip]');if(t)showFloating(t,'tooltip')});
 d.addEventListener('focusout',event=>{if(event.target===floatOwner&&floatNode?.classList.contains('gm-tooltip'))hideFloating()});
 d.addEventListener('input',event=>{
   const field=event.target;
   if(field.matches('input[type="range"][data-gm-output]')){
     const output=byId(field.dataset.gmOutput);if(output)output.textContent=field.value;
   }
   if(field.closest('form[data-gm-validate]')){
     const wrap=field.closest('.gm-form-field');if(wrap?.classList.contains('gm-invalid')){wrap.classList.toggle('gm-invalid',!field.checkValidity());field.setAttribute('aria-invalid',String(!field.checkValidity()))}
   }
 });
 d.addEventListener('submit',event=>{
   if(event.target.matches('form[data-gm-validate]')){
     if(!validate(event.target))event.preventDefault();
   }
 });
 global.addEventListener('scroll',updateScrollspy,{passive:true});
 global.addEventListener('resize',()=>{if(floatOwner)hideFloating()},{passive:true});
 if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',init,{once:true});else init();
 global.GridMaterial=api;
})(window);
