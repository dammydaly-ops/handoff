(()=>{
const I={
chat:'<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
bolt:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
check:'<path d="M20 6 9 17l-5-5"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
plug:'<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>',
eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
home:'<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
pulse:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
play:'<path d="M6 4l14 8-14 8z"/>',
pause:'<path d="M8 4v16M16 4v16"/>',
sparkle:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
shield:'<path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z"/>',
edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0M17 4a3.5 3.5 0 0 1 0 7M22 21a7 7 0 0 0-4-6.3"/>',
cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L22 7H6"/>',
calendar:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
chev:'<path d="M9 6l6 6-6 6"/>',
up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
sheet:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
more:'<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
book:'<path d="M4 4h6a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h7z"/>',
split:'<path d="M6 3v6a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v4M18 3v6M6 3 3 6m3-3 3 3"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
refresh:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',
x:'<path d="M18 6 6 18M6 6l12 12"/>',
phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>'
};
const ic=(n,c='')=>`<i class="i ${c}" data-i="${n}"></i>`;
const hydrate=(root=document)=>root.querySelectorAll('i[data-i]:not([data-h])').forEach(el=>{el.dataset.h=1;el.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(I[el.dataset.i]||'')+'</svg>'});
const B=document.body,R=B.dataset.root||'',P=B.dataset.page||'';
const PUB=[['index.html','Home','home'],['pricing.html','Pricing','pricing'],['login.html','Log in','login'],['signup.html','Start free','signup']];
const APP=[['dashboard','Home','home'],['automations','My automations','bolt'],['new','Build new','plus'],['templates','Templates','sparkle'],['connections','Connections','plug'],['activity','Activity','pulse'],['plan','Plan & usage','clock'],['team','Team','users'],['priority','Priority builds','up'],['help','Help center','book'],['settings','Settings','gear']];
const logo=h=>`<a class="logo" href="${h}"><span class="mark">h</span>Handoff</a>`;
const lock=()=>{B.classList.toggle('locked',!!document.querySelector('.ink.open'))};
function ink(el,btn){
  const set=(o)=>{
    if(o){const r=btn.getBoundingClientRect();el.style.setProperty('--ox',(r.left+r.width/2)+'px');el.style.setProperty('--oy',(r.top+r.height/2)+'px')}
    el.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);el.setAttribute('aria-hidden',!o);
    el.inert=!o;lock();if(o)setTimeout(()=>el.querySelector('.ink-x')?.focus(),50);else btn.focus({preventScroll:true});
  };
  btn.addEventListener('click',()=>set(!el.classList.contains('open')));
  el.querySelectorAll('.ink-x').forEach(x=>x.addEventListener('click',()=>set(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&el.classList.contains('open'))set(false)});
  matchMedia('(min-width:1025px)').addEventListener('change',()=>set(false));
  el.inert=true;return set;
}
const mkBtn=(cls='')=>`<button class="inkbtn ${cls}" aria-label="Open menu" aria-expanded="false" aria-controls="ink"><span></span><span></span></button>`;
const closeBtn=()=>`<button class="inkbtn ink-x" aria-label="Close menu" style="display:block;position:relative" aria-expanded="true"><span></span><span></span></button>`;

if(B.dataset.shell==='public'){
  const links=PUB.slice(0,2);
  const nav=document.createElement('header');nav.className='pnav';
  nav.innerHTML=`<div class="wrap pnav-in">${logo(R+'index.html')}
    <nav class="plinks" aria-label="Main"><a href="${R}index.html#how">How it works</a><a href="${R}index.html#examples">Examples</a><a href="${R}pricing.html" class="${P==='pricing'?'on':''}">Pricing</a><a href="${R}index.html#faq">FAQ</a></nav>
    <div class="pcta"><a href="${R}login.html">Log in</a><a class="btn btn-cream btn-sm" href="${R}signup.html">Start free</a></div>
    ${mkBtn()}</div>`;
  B.prepend(nav);
  const items=[['index.html','Home','index'],['index.html#how','How it works','how'],['index.html#examples','Examples','ex'],['pricing.html','Pricing','pricing'],['login.html','Log in','login']];
  const o=document.createElement('div');o.className='ink';o.id='ink';o.setAttribute('aria-hidden','true');o.setAttribute('role','dialog');o.setAttribute('aria-label','Menu');
  o.innerHTML=`<div class="ink-in"><div class="ink-top">${logo(R+'index.html')}${closeBtn()}</div>
   <nav class="ink-nav" aria-label="Mobile">${items.map((x,i)=>`<a href="${R}${x[0]}" style="--i:${i}" class="${x[2]===P?'on':''}"><span class="no">${String(i+1).padStart(2,'0')}</span>${x[1]}<span class="ar">${ic('arrow')}</span></a>`).join('')}</nav>
   <div class="ink-foot"><a class="btn btn-cream btn-lg btn-block" href="${R}signup.html">Start free for 14 days ${ic('arrow')}</a><div class="note"><span class="hand">no card needed</span></div></div></div>`;
  B.append(o);ink(o,nav.querySelector('.inkbtn'));
  o.querySelectorAll('a[href*="#"]').forEach(a=>a.addEventListener('click',()=>{if(location.pathname.endsWith('index.html')||location.pathname.endsWith('/')){o.querySelector('.ink-x').click()}}));
  const f=document.createElement('footer');f.className='pfoot';
  f.innerHTML=`<div class="wrap"><div class="fgrid"><div>${logo(R+'index.html')}<p style="margin-top:16px;max-width:340px;line-height:1.6">Describe an automation in plain words. Handoff builds it and connects it to your WhatsApp, Facebook and Instagram.</p></div>
   <div><h4>Product</h4><a href="${R}index.html#how">How it works</a><a href="${R}index.html#examples">Examples</a><a href="${R}pricing.html">Pricing</a></div>
   <div><h4>Account</h4><a href="${R}signup.html">Start free</a><a href="${R}login.html">Log in</a><a href="${R}app/help.html">Help center</a></div>
   <div><h4>Company</h4><a href="#">About</a><a href="#">Privacy</a><a href="#">Terms</a></div></div>
   <div class="fbot"><span>© 2026 Handoff. Prototype.</span><span>Made by Index Coding</span></div></div>`;
  B.append(f);
  const sc=()=>nav.classList.toggle('scrolled',scrollY>20);sc();addEventListener('scroll',sc,{passive:true});
}

if(B.dataset.shell==='app'){
  const cur=APP.find(a=>a[0]===P)||[];
  const main=document.querySelector('.app-main');
  const meBlock=`<div class="side-me"><div class="av">A</div><div>Amaka Obi<small>Ada's Fashion Store</small></div></div>`;
  const side=document.createElement('aside');side.className='app-side';side.setAttribute('aria-label','App');
  const sn=(a)=>`<a class="nv ${a[0]===P?'on':''}" href="${R}app/${a[0]}.html">${ic(a[2])}${a[1]}${a[0]==='automations'?'<span class="badge">4</span>':''}</a>`;
  side.innerHTML=logo(R+'app/dashboard.html')+APP.slice(0,6).map(sn).join('')+'<div class="slab">Account</div>'+APP.slice(6).map(sn).join('')+
   `<div class="side-plan"><b>Growth plan</b><small>9 of 15 updates used this month</small><div class="meter"><i style="--v:60%"></i></div><a class="btn btn-clay btn-sm" href="${R}app/plan.html">${ic('up')}Upgrade</a></div>${meBlock}`;
  document.body.prepend(side);
  const top=document.createElement('header');top.className='app-top';
  top.innerHTML=`${logo(R+'app/dashboard.html')}<div class="row"><a class="ib" href="${R}app/activity.html" aria-label="Activity">${ic('bell')}<b></b></a>${mkBtn()}</div>`;
  main.before(top);
  const dock=document.createElement('nav');dock.className='dock';dock.setAttribute('aria-label','Quick');
  dock.innerHTML=`<a href="${R}app/dashboard.html" class="${P==='dashboard'?'on':''}">${ic('home')}Home</a><a href="${R}app/automations.html" class="${P==='automations'||P==='detail'?'on':''}">${ic('bolt')}Mine</a><a href="${R}app/new.html" class="plus ${['new','build','test','connect'].includes(P)?'on':''}"><b>${ic('plus')}</b><span>New</span></a><a href="${R}app/activity.html" class="${P==='activity'?'on':''}">${ic('pulse')}Activity</a><button id="more" aria-haspopup="dialog">${ic('grid')}More</button>`;
  document.body.append(dock);
  const o=document.createElement('div');o.className='ink';o.id='ink';o.setAttribute('aria-hidden','true');o.setAttribute('role','dialog');o.setAttribute('aria-label','All pages');
  o.innerHTML=`<div class="ink-in"><div class="ink-top">${logo(R+'app/dashboard.html')}${closeBtn()}</div>
   <div class="ink-user"><div class="av">A</div><div><b>Amaka Obi</b><small>Ada's Fashion Store · Growth plan</small></div></div>
   <nav class="ink-tiles" aria-label="All pages">${APP.map((a,i)=>`<a class="ink-tile ${a[0]===P?'on':''}" style="--i:${i}" href="${R}app/${a[0]}.html">${ic(a[2])}<span>${a[1]}</span></a>`).join('')}</nav>
   <div class="ink-foot" style="margin-top:0"><div class="card gold" style="padding:18px"><b class="serif" style="font-size:20px">9 of 15 updates used</b><div class="meter" style="--v:60%;margin:12px 0"><i></i></div><a class="btn btn-cream btn-block btn-sm" href="${R}app/plan.html">See plans</a></div><a class="btn btn-ghost btn-block" href="${R}login.html">Log out</a></div></div>`;
  B.append(o);
  const set=ink(o,top.querySelector('.inkbtn'));
  document.getElementById('more').addEventListener('click',()=>{
    const b=top.querySelector('.inkbtn');b.click();
    const r=document.getElementById('more').getBoundingClientRect();o.style.setProperty('--ox',(r.left+r.width/2)+'px');o.style.setProperty('--oy',(r.top+r.height/2)+'px');
  });
}
hydrate();
(()=>{let dp=null;const show=()=>document.querySelectorAll('[data-install]').forEach(e=>e.hidden=!dp);
 addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;show()});
 document.addEventListener('click',async e=>{if(e.target.closest('[data-install-btn]')&&dp){dp.prompt();await dp.userChoice;dp=null;show()}});
 addEventListener('appinstalled',()=>{dp=null;show()});
 if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost'))addEventListener('load',()=>navigator.serviceWorker.register(R+'sw.js').catch(()=>{}));
})();
window.H={ic,hydrate,toast(m){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.append(t)}t.innerHTML=ic('check')+m;hydrate(t);t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2600)}};

})();
