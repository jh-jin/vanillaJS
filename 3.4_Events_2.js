/* event 종류 보기: 
google검색 h1 html element web APIs mdn(Mozilla Developer Network)
혹은 dir로 on으로 시작하는 항목을 보면 on 이후가 event 이름! */

title = document.querySelector(".hello h1");

console.dir(title);

function handleTitleClick(){
    console.log("mouse clicked");
    title.style.color = "blue";
}

function handleMouseEnter(){
    console.log("mouse is here");
    title.innerText = "mouse is here";
}

function handleMouseLeave(){
    title.innerText = "mouse is gone"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);