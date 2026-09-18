document.addEventListener('DOMContentLoaded',()=>{
  // FAQ
  document.querySelectorAll('.acc button').forEach(b=>b.addEventListener('click',()=>{
    const it=b.parentElement; const was=it.classList.contains('open');
    document.querySelectorAll('.acc').forEach(x=>x.classList.remove('open'));
    if(!was) it.classList.add('open');
  }));
  // Modal
  const modal=document.getElementById('modal');
  document.querySelectorAll('[data-modal-open]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();modal.classList.add('open');document.body.style.overflow='hidden'}));
  document.getElementById('mClose').addEventListener('click',closeM);
  modal.addEventListener('click',e=>{if(e.target===modal)closeM()});
  window.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});
  function closeM(){modal.classList.remove('open');document.body.style.overflow=''}
  document.getElementById('toTop').addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});

  // Calendar – September 2026 (Sept 1 = Tuesday)
  // Build grid: MON..SUN, offset: Tue start => 1 empty (Mon)
  const daysEl=document.getElementById('days');
  const daysEl2=document.getElementById('days2');
  const slotsEl=document.getElementById('slots');
  const slotsEl2=document.getElementById('slots2');
  const slotDay=document.getElementById('slotDay');
  let selDay=24;
  const highlighted=new Set([21,22,23,24,25,5,6,7,8,9]);
  function renderDays(){
    [daysEl,daysEl2].forEach(el=>{
      if(!el) return; el.innerHTML='';
      // leading blank for Mon (Sept 1 Tue => 1 blank)
      const blank=document.createElement('span'); el.appendChild(blank);
      for(let d=1;d<=30;d++){
        const b=document.createElement('button');
        b.textContent=d;
        if(d<8) b.classList.add('dim');
        if(highlighted.has(d)) b.classList.add('hl');
        if(d===18) {b.classList.add('sel'); b.innerHTML='18<br style="line-height:0">•';}
        if(d===selDay) b.classList.add('sel');
        b.addEventListener('click',()=>{selDay=d; renderDays(); renderSlots();});
        el.appendChild(b);
      }
      // oct overflow 1-11
      for(let d=1;d<=11;d++){const b=document.createElement('button');b.textContent=d==1?'1':d;b.classList.add(d<=9&&highlighted.has(d)?'hl':'dim');if(d<=9&&[5,6,7,8,9].includes(d))b.classList.remove('dim');el.appendChild(b);}
    });
  }
  const times=['12:30pm','12:45pm','1:00pm','1:15pm','1:30pm','1:45pm','3:00pm','3:15pm','3:30pm','3:45pm'];
  let selTime='1:15pm';
  function renderSlots(){
    const label=`Sept ${selDay}th`;
    if(slotDay) slotDay.textContent='Thu '+selDay+'th';
    [slotsEl,slotsEl2].forEach(el=>{
      if(!el) return; el.innerHTML='';
      times.forEach(t=>{
        const b=document.createElement('button');b.textContent=t;
        if(t===selTime)b.classList.add('sel');
        b.addEventListener('click',()=>{selTime=t;renderSlots()});
        el.appendChild(b);
      });
    });
  }
  renderDays();renderSlots();
});
