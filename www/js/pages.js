(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P=document.body.dataset.page,H=window.H,ic=H.ic;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const go=(u,d=0)=>setTimeout(()=>location.href=u,d);

const pages={
index(){
  const lines=["When a customer asks about a price on WhatsApp, reply with the price list and ask which size they want.","Remind clients a day before their appointment and let them reschedule by replying.","If someone comments 'price' on my Instagram post, send them the price list in a message.","When an order comes in, confirm it, ask for the address and send me a summary."];
  const el=$('#typedText');let li=0;
  if(!RM)(async()=>{while(1){const t=lines[li];for(let i=0;i<=t.length;i++){el.textContent=t.slice(0,i);await wait(26)}await wait(2400);for(let i=t.length;i>=0;i-=3){el.textContent=t.slice(0,Math.max(i,0));await wait(8)}await wait(300);li=(li+1)%lines.length}})();
  const S=[['Understood your idea','Reading your idea and finding the questions customers will ask.'],['Designed the flow','Deciding the order: greet, find the price, ask the size.'],['Wrote the replies','Drafting friendly messages with your price list.'],['Ran safety checks','Trying odd questions and empty answers.']];
  const box=$('#landSteps');let k=0;
  const draw=()=>{box.innerHTML=S.map((s,i)=>`<div class="stp ${i<k?'':(i===k?'now':'todo')}"><span class="c ${i<k?'done':(i===k?'now':'todo')}">${i<k?ic('check'):''}</span>${s[0]}</div>`).join('');H.hydrate(box);$('#landMeter').style.setProperty('--v',(k/S.length*100||8)+'%');$('#landSay').textContent=S[Math.min(k,S.length-1)][1]};
  draw();setInterval(()=>{k=(k+1)%(S.length+1);draw()},2200);
},
pricing(){
  const b=$$('[data-bill]');b.forEach(x=>x.addEventListener('click',()=>{b.forEach(y=>y.classList.toggle('on',y===x));const y=x.dataset.bill==='y';
    $$('.plan .pr b').forEach(p=>p.textContent=y?p.dataset.y:p.dataset.m);
    $$('.plan .note').forEach(n=>{if(n.dataset.note==='Billed monthly')n.textContent=y?'Billed yearly · 2 months free':'Billed monthly'})}));
},
signup(){
  const f=$('#suForm'),steps=$$('[data-s]',f),bars=$$('.steps i',f);let cur=1;
  const show=n=>{cur=n;steps.forEach(s=>s.hidden=+s.dataset.s!==n);bars.forEach((b,i)=>b.classList.toggle('on',i<n));scrollTo({top:0,behavior:'smooth'})};
  const pw=$('#pw');pw.addEventListener('input',()=>{const v=pw.value;let sc=0;if(v.length>=8)sc++;if(/[A-Z]/.test(v))sc++;if(/\d/.test(v))sc++;if(/[^A-Za-z0-9]/.test(v))sc++;$$('#pwm span').forEach((s,i)=>s.classList.toggle('on',i<sc));$('#pwt').textContent=!v?'Too short':['Too short','Weak','Okay','Good','Strong'][sc]});
  $$('[data-next]',f).forEach(b=>b.addEventListener('click',()=>{
    if(cur===1){const bad=$$('[data-s="1"] [required]',f).find(i=>!i.checkValidity());if(bad){bad.reportValidity();return}}
    show(cur+1)}));
  $$('[data-back]',f).forEach(b=>b.addEventListener('click',()=>show(cur-1)));
  f.addEventListener('submit',e=>{e.preventDefault();const c=$('[type=checkbox]',f);if(!c.checked){c.focus();H.toast('Please accept the terms');return}
    const g=$('#suGo');g.innerHTML='<span class="spin"></span> Creating your account…';g.disabled=true;go('app/dashboard.html',1200)});
},
login(){const f=$('#liForm');f.addEventListener('submit',e=>{e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}const b=$('button[type=submit]',f);b.innerHTML='<span class="spin"></span> Logging in…';go('app/dashboard.html',900)})},
dashboard(){const q=$('#quick');q.addEventListener('keydown',e=>{if(e.key==='Enter'){sessionStorage.setItem('idea',q.value);go('new.html')}});$('.pbar .btn').addEventListener('click',()=>{try{sessionStorage.setItem('idea',q.value)}catch(e){}})},
automations(){$$('#atabs .tab').forEach(t=>t.addEventListener('click',()=>{$$('#atabs .tab').forEach(x=>x.classList.toggle('on',x===t));$$('#alist>div').forEach(r=>r.hidden=t.dataset.f!=='all'&&r.dataset.s!==t.dataset.f)}))},
new(){
  const idea=$('#idea');try{const s=sessionStorage.getItem('idea');if(s)idea.value=s}catch(e){}
  const K=[[/price|cost|how much/i,'price','Customer asks about a price','Replies with the price from your list'],[/order|buy|purchase/i,'order','Customer wants to order','Collects item, size and address, then confirms'],[/remind|appointment|book/i,'book','A day before an appointment','Sends a reminder and lets them reschedule'],[/lead|number|sign ?up|comment/i,'lead','Someone shows interest','Asks for name and number and saves it'],[/refund|complain|human|person/i,'human','Customer asks for a person','Hands the chat to you with a note']];
  const run=()=>{const v=idea.value.trim();const hit=K.filter(k=>k[0].test(v));const l=$('#uList');$('#uEmpty').hidden=v.length>5;l.hidden=v.length<=5;if(v.length<=5)return;
    const rows=[['When',hit[0]?hit[0][2]:'A customer sends a message'],['Then',hit.length?hit.map(h=>h[3]).join('. '):'Replies using what you described'],['Needs from you',hit.some(h=>h[1]==='price')?'Your price list':'A few example replies'],['Runs on',$$('#chsel input:checked').length?$$('#chsel input:checked').map(i=>i.parentNode.textContent.trim()).join(', '):'Pick a channel']];
    l.innerHTML=rows.map(r=>`<div><div class="eyebrow" style="font-size:11.5px">${r[0]}</div><div style="margin-top:4px">${esc(r[1])}</div></div>`).join('')};
  idea.addEventListener('input',run);$$('#chsel input').forEach(i=>i.addEventListener('change',run));
  $$('#ideas button').forEach(b=>b.addEventListener('click',()=>{idea.value=({'Answer price questions':'When a customer asks for a price, reply with my price list.','Take orders':'When a customer wants to order, collect the item, size and address and confirm.','Remind about appointments':'Remind clients a day before their appointment and let them reschedule.','Capture leads':'When someone comments on my post, ask for their name and number.'})[b.textContent];run();idea.focus()}));
  run();
  $('#goBuild').addEventListener('click',()=>{if(idea.value.trim().length<6){idea.focus();H.toast('Describe your idea first');return}const m=$('[name=mode]:checked').value;go(m==='watch'?'build.html':'automations.html',200);if(m!=='watch')H.toast('Building in the background. We will tell you when it is ready.')});
},
build(){
  const nodes=$$('.fn'),steps=$$('#bSteps .s');const names=[...steps].map(s=>[$('b',s).textContent,$('small',s).textContent]);
  const set=(n)=>{steps.forEach((s,i)=>{s.className='s '+(i<n?'done':i===n?'now':'todo')});nodes.forEach((x,i)=>{const k=Math.min(Math.floor(n*nodes.length/steps.length),nodes.length);x.className='fn '+(i<k?'done':i===k?'now':'todo')});
    const pct=Math.round(n/steps.length*100);$('#bPct').textContent=pct+'%';$('#bMeter').style.setProperty('--v',pct+'%');if(n<steps.length){$('#bStepName').textContent=names[n][0];$('#bSay').textContent=names[n][1]}};
  (async()=>{for(let i=0;i<=steps.length;i++){set(i);if(i<steps.length)await wait(RM?200:1700)}
    nodes.forEach(x=>x.className='fn done');$('#bPill').className='pill live';$('#bPill').innerHTML=ic('check')+'Ready';H.hydrate($('#bPill'));$('#bSub').textContent='Built and checked. Time to test it.';$('#bStepName').textContent='All done';$('#bSay').textContent='Your automation is ready for testing.';$('#bDone').hidden=false})();
},
test(){
  const msgs=$('#tmsgs'),tr=$('#ttrace');let n=0;
  const add=(c,t)=>{const d=document.createElement('div');d.className='bub '+c;d.innerHTML=esc(t)+'<small>now</small>';msgs.append(d);msgs.scrollTop=msgs.scrollHeight};
  const R=(q)=>{q=q.toLowerCase();if(/price|much|cost/.test(q))return{rep:'The red dress is ₦18,500. Which size would you like?',steps:[['Message received','chat','Your customer said: "'+q+'". The automation starts whenever a message arrives.','trigger: new_message'],['Found a price question','search','It spotted words like "price" or "how much", so it looked in your price list.','match: red dress → ₦18,500'],['Replied with the price','send','It answered and asked a follow-up so the order can continue.','sent: price + size question']]};
    if(/deliver|abuja|lagos|ship/.test(q))return{rep:'Yes, we deliver nationwide. Lagos is 1 to 2 days, other states 3 to 5.',steps:[['Message received','chat','A delivery question came in.','trigger: new_message'],['Checked delivery rules','split','It matched your delivery FAQ.','faq: delivery'],['Replied','send','It answered from your FAQ.','sent: delivery info']]};
    if(/order|buy/.test(q))return{rep:'Great! What item and size would you like?',steps:[['Message received','chat','The customer wants to order.','trigger: new_message'],['Started an order','edit','It opened a new order and asks one question at a time.','order: draft'],['Asked for the item','send','Next it will ask for the size and address.','sent: item question']]};
    return{rep:'Thanks for your message! I can help with prices, delivery and orders. What do you need?',steps:[['Message received','chat','Your customer wrote something unexpected.','trigger: new_message'],['No exact match','shield','Instead of guessing, it offered the things it can do.','fallback: menu'],['Replied','send','A friendly fallback, so the customer is never left hanging.','sent: menu']]}};
  const ask=async q=>{if(!q.trim())return;add('u',q);$('#tempty')?.remove();const t=document.createElement('div');t.className='typing';t.innerHTML='<i></i><i></i><i></i>';msgs.append(t);msgs.scrollTop=msgs.scrollHeight;
    const r=R(q);for(const s of r.steps){const d=document.createElement('div');d.className='ts now';d.innerHTML=`<div class="h">${ic(s[1])}${s[0]}<span>step ${++n}</span></div><p>${esc(s[2])}</p><div class="out">${s[3]}</div>`;$$('.ts.now',tr).forEach(x=>x.classList.remove('now'));tr.append(d);H.hydrate(d);await wait(RM?50:700)}
    t.remove();add('b',r.rep);$('#tcount').textContent=$$('.ts',tr).length+' steps'};
  $('#tform').addEventListener('submit',e=>{e.preventDefault();const i=$('#tin');const v=i.value;i.value='';ask(v)});
  $$('#tsug button').forEach(b=>b.addEventListener('click',()=>ask(b.textContent)));
},
connect(){
  const cs=$$('.cstep'),acts=['Sign in with Facebook','Choose number: +234 80 0000 0000','Allow access','Send test message'];let cur=0;
  const render=()=>cs.forEach((c,i)=>{const sc=$('.sc',c),a=$('.cact',c);c.style.opacity=i>cur?.45:1;sc.style.background=i<cur?'var(--green)':'transparent';sc.style.color=i<cur?'#1d2b14':'transparent';sc.style.borderColor=i<cur?'var(--green)':i===cur?'var(--gold)':'rgba(243,230,211,.3)';
    a.innerHTML=i===cur?`<button class="btn btn-clay">${acts[i]}</button>`:'';const b=$('button',a);if(b)b.addEventListener('click',async()=>{b.innerHTML='<span class="spin"></span> Working…';b.disabled=true;await wait(RM?100:1100);cur++;if(cur>=cs.length){$('#cDone').hidden=false;H.toast('WhatsApp connected')}render()})});
  render();
},
detail(){
  $('#pauseBtn').addEventListener('click',e=>{const b=e.currentTarget;const p=b.textContent.trim()==='Pause';b.innerHTML=ic(p?'play':'pause')+(p?'Resume':'Pause');H.hydrate(b);H.toast(p?'Paused. Customers get no auto replies.':'Resumed')});
  $$('[data-restore]').forEach(b=>b.addEventListener('click',()=>H.toast('Restore requested. Test it before it goes live.')));
  $$('#updChips button').forEach(b=>b.addEventListener('click',()=>{$('#upd').value=b.textContent+': ';$('#upd').focus()}));
  $('#updGo').addEventListener('click',()=>{if($('#upd').value.trim().length<4){$('#upd').focus();H.toast('Say what should change');return}H.toast('Update requested. Building version 4…');go('build.html',1400)});
},
activity(){
  const box=$('#inbox'),items=$$('.it'),cust=['Chidi Okafor','Ngozi Eze','Tunde Bello','Fatima Musa','Emeka Obi'];
  items.forEach((it,i)=>it.addEventListener('click',()=>{items.forEach(x=>x.classList.toggle('on',x===it));$('#chName').textContent=cust[i];$('#chAv').textContent=cust[i][0];$('#chAv').style.background=$('.av2',it).style.background;box.classList.add('chat-open')}));
  $('#ibk').addEventListener('click',()=>box.classList.remove('chat-open'));
  $('#iform').addEventListener('submit',e=>{e.preventDefault();const v=$('#iin').value.trim();if(!v)return;const d=document.createElement('div');d.className='bub me';d.textContent=v;$('#ibody').append(d);$('#iin').value='';$('#ibody').scrollTop=1e5});
},
templates(){$$('#ttabs .tab').forEach(t=>t.addEventListener('click',()=>{$$('#ttabs .tab').forEach(x=>x.classList.toggle('on',x===t));$$('.tpl').forEach(c=>{const l=c.dataset.cat==='pro';c.hidden=t.dataset.f==='free'&&l||t.dataset.f==='pro'&&!l})}))},
team(){$('#invBtn').addEventListener('click',()=>H.toast('Your plan includes 2 seats. Upgrade to add more.'))},
help(){
  $('#hq').addEventListener('input',e=>{const q=e.target.value.toLowerCase();$$('#hgrid>article').forEach(a=>a.hidden=q&&!a.dataset.t.toLowerCase().includes(q))});
  const A={update:'Each change request counts as one update. Growth includes 15 a month.',plan:'Starter suits one shop. Growth adds more updates and Instagram. Pro adds a team and expert review.',default:'Good question. Check the articles above, or message support from your plan page.'};
  const m=$('#hmsgs'),say=q=>{const u=document.createElement('div');u.className='bub u';u.textContent=q;m.append(u);setTimeout(()=>{const b=document.createElement('div');b.className='bub b';b.textContent=/update/i.test(q)?A.update:/plan|price/i.test(q)?A.plan:A.default;m.append(b);m.scrollTop=1e5},500)};
  $('#hform').addEventListener('submit',e=>{e.preventDefault();const i=$('#hin');if(i.value.trim())say(i.value);i.value=''});$$('#hsug button').forEach(b=>b.addEventListener('click',()=>say(b.textContent)));
},
settings(){$$('[data-save]').forEach(b=>b.addEventListener('click',()=>H.toast('Saved')));const links=$$('.snav a');links.forEach(a=>a.addEventListener('click',()=>links.forEach(x=>x.classList.toggle('on',x===a))));$$('.snav a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();$(a.getAttribute('href')).scrollIntoView({behavior:'smooth',block:'start'})}))}
};
(pages[P]||(()=>{}))();
})();
