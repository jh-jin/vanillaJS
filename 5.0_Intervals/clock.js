const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
//매 초 Date객체를 생성함.
getClock(); //0초에도 실행하고싶어서.
setInterval(getClock, 1000); //1000ms후 마다 발생.
//setTimeout(sayHello, 1000); //1000ms후 한번 발생