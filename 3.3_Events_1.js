//class hello를 가진 div 내부의 first-child인 h1 가져오기
const title = document.querySelector("div.hello:first-child h1");
console.dir(title);
console.log(title);
title.innerText = "Hello";

function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color = "blue"; //위에서 dir로 확인한 객체속성 변경 = powerful js!
}

title.addEventListener("click", handleTitleClick);
//HTML element인 title에 click event 발생 시, 함수 실행. ()떼는 것에 주의!

/*element를 가져와서 event를 listen하고 실행할 함수를 짜는 것, that's it!*/