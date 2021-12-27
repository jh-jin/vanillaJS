//클라스명 변경으로 색깔 토글하기 - classList 사용하기

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked"; //raw value 사용 줄이기 = clean code!
    h1.classList.toggle(clickedClass); //아래를 한 줄로.
    // 3.6의 코드는 sexy-font 클래스를 덮어써버리는 문제가 있음
    // if(h1.classList.contains(clickedClass)){ //
    //     h1.classList.remove(clickedClass); //
    // }else{
    //     h1.classList.add(clickedClass); //classList 자주 쓰인다!
    // }
}

h1.addEventListener("click", handleTitleClick);