"""Chromium smoke tests using inline project source (works in restricted environments)."""
from pathlib import Path
import re,base64
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
html=(ROOT/'index.html').read_text()
html=re.sub(r'<script\s+[^>]*src=[^>]*></script>','',html)
html=re.sub(r'<link[^>]*rel="stylesheet"[^>]*>','',html)
html=html.replace('assets/gridmaterial.svg','data:image/svg+xml;base64,'+ base64.b64encode((ROOT/'assets/gridmaterial.svg').read_bytes()).decode())
with sync_playwright() as pw:
 browser=pw.chromium.launch(headless=True, executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 page=browser.new_page(viewport={'width':1440,'height':940}, device_scale_factor=1)
 page.set_content(html)
 page.add_style_tag(content=(ROOT/'css/gridmaterial.css').read_text())
 page.add_style_tag(content=(ROOT/'css/docs.css').read_text())
 errors=[]
 page.on('pageerror', lambda e: errors.append(str(e)))
 for name in ['gridmaterial.js','docs-data.js','docs.js']:
  page.add_script_tag(content=(ROOT/'js'/name).read_text())
 assert page.locator('.docs-nav-link').count()==73, page.locator('.docs-nav-link').count()
 assert page.locator('.docs-title').inner_text()=='Einführung'
 page.screenshot(path=str(ROOT/'tests/home-desktop.png'),full_page=True)
 def route(path):page.evaluate(f"location.hash='#{path}'")
 route('/components/accordion')
 assert page.locator('.docs-title').inner_text()=='Accordion'
 page.locator('.gm-accordion-trigger').nth(1).click()
 assert page.locator('.gm-accordion-trigger').nth(1).get_attribute('aria-expanded')=='true'
 page.screenshot(path=str(ROOT/'tests/accordion-desktop.png'),full_page=True)
 route('/components/modal')
 page.locator('button[data-gm-toggle="modal"]').click()
 assert page.locator('#modal-reference.gm-open').count()==1
 page.keyboard.press('Escape')
 assert page.locator('#modal-reference.gm-open').count()==0
 route('/components/carousel')
 page.locator('[data-gm-slide="+1"]').click()
 assert page.locator('#carousel-reference').get_attribute('data-gm-index')=='1'
 route('/forms/validation')
 page.locator('#validate-ref button[type=submit]').click()
 assert page.locator('#valid-name').get_attribute('aria-invalid')=='true'
 route('/components/dropdowns')
 page.locator('[data-gm-toggle="dropdown"]').click()
 assert page.locator('.gm-menu').is_visible()
 page.keyboard.press('Escape')
 assert page.locator('.gm-menu').is_hidden()
 route('/components/navs-tabs')
 page.locator('#t-second').click()
 assert page.locator('#p-second').is_visible()
 route('/material/bottom-sheet')
 page.locator('button[data-gm-toggle="sheet"]').click()
 assert page.locator('#sheet-ref.gm-open').count()==1
 page.keyboard.press('Escape')
 assert page.locator('#sheet-ref.gm-open').count()==0
 route('/components/scrollspy')
 assert page.locator('[data-gm-scrollspy] a').count()==3
 page.locator('#side-search').fill('accordion')
 assert page.locator('.docs-nav-link').count()==1
 page.locator('#side-search').fill('')
 page.locator('#open-search').click()
 assert page.locator('#search-dialog').is_visible()
 page.locator('#palette-search').fill('modal')
 assert page.locator('.docs-search-result').count()>=1
 page.keyboard.press('Escape')
 assert page.locator('#search-dialog').is_hidden()
 # Test small screen, left navigation and main do not overflow.
 page.set_viewport_size({'width':390,'height':844})
 page.screenshot(path=str(ROOT/'tests/home-mobile.png'),full_page=True)
 page.locator('#mobile-nav-toggle').click()
 assert 'is-open' in page.locator('#docs-sidebar').get_attribute('class')
 print('Navigation entries:',page.locator('.docs-nav-link').count())
 print('Browser JS errors:',errors)
 assert not errors,errors
 browser.close()
