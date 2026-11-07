/* Shared top bar for every page: BIOZOOM logo (left) + hamburger menu (right) */
(function(){
  const css = `
  .has-bar{padding-top:72px}
  .bz-bar{position:fixed;top:0;left:0;right:0;height:56px;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 16px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);box-shadow:0 2px 12px rgba(0,0,0,.12);font-family:'Prompt',sans-serif}
  .bz-logo{font-weight:800;font-size:24px;letter-spacing:1px;text-decoration:none;line-height:1}
  .bz-menu{position:relative}
  .bz-btn{width:44px;height:40px;border:none;border-radius:10px;background:#0b4b82;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}
  .bz-btn span{display:block;width:22px;height:3px;border-radius:2px;background:#fff}
  .bz-drop{display:none;position:absolute;right:0;top:48px;min-width:190px;background:#fff;border-radius:12px;box-shadow:0 8px 20px rgba(0,0,0,.2);overflow:hidden}
  .bz-drop.open{display:block}
  .bz-drop a{display:block;padding:12px 16px;color:#0b4b82;text-decoration:none;font-weight:600;border-bottom:1px solid #eee}
  .bz-drop a:last-child{border-bottom:none}
  .bz-drop a:hover{background:#0b4b82;color:#fff}`;
  const st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  const c = ["#0b4b82","#f58634","#f44336","#0b4b82","#f44336","#0b4b82","#0b4b82"];
  const logo = "BIOZOOM".split("").map((ch,i)=>`<span style="color:${c[i]}">${ch}</span>`).join("");
  document.body.classList.add("has-bar");
  document.body.insertAdjacentHTML("afterbegin",
    `<header class="bz-bar">
       <a class="bz-logo" href="index.html" aria-label="BIOZOOM กลับหน้าแรก">${logo}</a>
       <div class="bz-menu">
         <button class="bz-btn" id="bzBtn" aria-label="เมนู"><span></span><span></span><span></span></button>
         <nav class="bz-drop" id="bzDrop">
           <a href="index.html">Home</a>
           <a href="KnowledgeBox.html">Knowledge Box</a>
           <a href="quiz.html">Quiz Game</a>
         </nav>
       </div>
     </header>`);

  const btn = document.getElementById("bzBtn"), drop = document.getElementById("bzDrop");
  btn.addEventListener("click", e => { e.stopPropagation(); drop.classList.toggle("open"); });
  document.addEventListener("click", () => drop.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") drop.classList.remove("open"); });
})();
