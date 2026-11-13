(function(){
  var drawer=document.getElementById('drawer');
  var openBtn=document.getElementById('burger');
  var closeBtn=document.getElementById('drawer-close');
  var lastFocus=null;
  function openDrawer(){lastFocus=document.activeElement;drawer.setAttribute('data-open','true');openBtn.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';closeBtn.focus();}
  function closeDrawer(){drawer.setAttribute('data-open','false');openBtn.setAttribute('aria-expanded','false');document.body.style.overflow='';if(lastFocus){lastFocus.focus();}}
  if(openBtn){openBtn.addEventListener('click',openDrawer);}
  if(closeBtn){closeBtn.addEventListener('click',closeDrawer);}
  drawer.addEventListener('click',function(e){if(e.target.closest('a')){closeDrawer();}});
  drawer.addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeDrawer();return;}
    if(e.key==='Tab'){var f=drawer.querySelectorAll('a,button,summary');if(!f.length)return;var first=f[0],last=f[f.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
  });
  document.querySelectorAll('.dd').forEach(function(dd){
    var b=dd.querySelector('button'),m=dd.querySelector('.menu');
    function set(o){m.setAttribute('data-open',o?'true':'false');b.setAttribute('aria-expanded',o?'true':'false');}
    b.addEventListener('click',function(){set(m.getAttribute('data-open')!=='true');});
    dd.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);b.focus();}});
    document.addEventListener('click',function(e){if(!dd.contains(e.target)){set(false);}});
    m.addEventListener('click',function(){set(false);});
  });
  window.__closeDrawer=closeDrawer;
})();
