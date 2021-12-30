const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hh = String(date.getHours()).padStart(2,"0"); //int라서 변환
    const mm = String(date.getMinutes()).padStart(2,"0");
    const ss = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hh}:${mm}:${ss}`;
}
//매 초 Date객체를 생성함.
getClock(); //0초에도 실행
setInterval(getClock, 1000); //1000ms후 마다 발생.
//setTimeout(sayHello, 1000); //1000ms후 한번 발생

//"a".padEnd(3,"bcd"); //전체길이, 모자라면padding. 'abc'