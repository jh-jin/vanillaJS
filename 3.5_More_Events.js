/* event 종류 보기: 
google검색 h1 html element web APIs mdn(Mozilla Developer Network)
혹은 dir로 on으로 시작하는 항목을 보면 on 이후 eventname! */

h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click(){
    console.log("mouse clicked");
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "mouse is gone"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
    //body, head, title 등은 바로 document.body 접근이 가능, 나머지는 querySelector
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("wifi unconnected!");
}

function handleWindowOnline(){
    alert("wifi connected!");
}

h1.addEventListener("click", handleh1Click);
h1.onclick = handleh1Click; //위와 동일
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
