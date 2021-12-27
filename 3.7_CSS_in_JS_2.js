const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked"; //raw value 사용 줄이기 = clean code!
    if(h1.className === clickedClass){
        h1.className = "";
    }else{
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);