const e=document.body,t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(l=>{a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(e=>{clearInterval(a),d.disabled=!0,t.disabled=!1,console.log(disabled)}));
//# sourceMappingURL=01-color-switcher.03bbbac5.js.map
