/* Small pop-up feedback (toast) + answer highlighting, shared by page.html and quiz.html */
(function(){
  const st = document.createElement("style");
  st.textContent = `
  #feedback{position:fixed;left:50%;top:84px;transform:translate(-50%,-10px) scale(.9);opacity:0;pointer-events:none;display:flex;align-items:center;gap:8px;padding:9px 18px 9px 12px;border-radius:99px;background:#fff;font:600 15px 'Prompt',sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.2);transition:all .25s ease;z-index:200;white-space:nowrap}
  #feedback.show{opacity:1;transform:translate(-50%,0) scale(1)}
  #feedback.ok{color:#1c7a3e;border:2px solid #2ecc71}
  #feedback.no{color:#b83a33;border:2px solid #e74c3c}
  #feedback svg{width:22px;height:22px;flex:none}`;
  document.head.appendChild(st);
})();

const ICON_OK = '<svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#2ecc71"/><path d="M6.5 12.5l3.6 3.6 7.4-7.6" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_NO = '<svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#e74c3c"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>';
let fbTimer;

function showFeedback(ok, text){
  const f = document.getElementById("feedback");
  clearTimeout(fbTimer);
  f.className = (ok ? "ok" : "no") + " show";
  f.innerHTML = (ok ? ICON_OK : ICON_NO) + "<span></span>";
  f.querySelector("span").textContent = text;
  fbTimer = setTimeout(hideFeedback, 1400);
}
function hideFeedback(){
  clearTimeout(fbTimer);
  document.getElementById("feedback").classList.remove("show");
}

/* lock the options, mark the right one green and a wrong pick red */
function revealAnswer(btns, correct, picked){
  btns.forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.style.background = "#2ecc71";
  });
  if (picked && picked.textContent !== correct) picked.style.background = "#e74c3c";
}
