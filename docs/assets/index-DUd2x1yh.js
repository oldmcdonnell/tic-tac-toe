(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))g(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&g(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function g(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();let C=document.getElementById("currentTurn"),y=document.getElementById("winner"),x=document.getElementById("winnerX"),h=document.getElementById("winnerY"),d=0,f=0,m=!0,c=!1,o=1,s=[0,0,0,0,0,0,0,0,0],l={1:"X","-1":"O",null:""};const i=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function L(){return Math.random()>.5?o=1:o=-1,console.log("FirstMark turn: "+o),o}const w=document.getElementsByClassName("square");for(const t of w)t.addEventListener("click",O);function O(t){let e=t.target;if(console.log(e.id),e.classList.add("noClick"),e.classList.add("opacityStyle"),m===!0){L(),p(e),e.textContent=l[o];let a=e.textContent=l[o];localStorage.setItem("setting a string",JSON.stringify(a)),console.log(localStorage),m=!1}else c===!1&&(p(e),e.textContent=l[o])}function p(t){const e=parseInt(t.id.replace("cell",""));console.log("idx: ",e),s[e]===0&&c===!1&&(s[e]=o,C.textContent=`Next Turn, ${l[o]}`,o*=-1,E(),localStorage.setItem("result array",JSON.stringify({resultArray:s})))}function B(){l[o]==="X"?d++:f++,d>=1&&(x.textContent=d),f>=1&&(h.textContent=f)}function E(){for(let t=0;t<i.length;t++)Math.abs(s[i[t][0]]+s[i[t][1]]+s[i[t][2]])===3?(B(),y.textContent=`The winner is ${l[o]}`,c=!0):s.includes(0)?console.log("good to go"):(console.log("cat"),y.textContent="No winners, Cat game")}const I=document.getElementById("resetGame");I.addEventListener("click",N);function N(){let t=document.getElementsByClassName("square");for(const e of t)e.classList.remove("noClick"),e.classList.remove("opacityStyle"),e.textContent="";console.log(t.classList),s=[0,0,0,0,0,0,0,0,0],m=!0,c=!1,console.log(s),o=1,C.textContent=""}
