
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event){ //첫 인자는 event로 받는 게 관행
    event.preventDefault(); //브라우저의 기본 동작을 막음. 여기선 제출 시 새로고침 막기
    console.log(loginInput.value);
}

function handleLink(event){
    event.preventDefault();
    alert("Clicked!");
    console.dir(event);
    console.log(event.defaultPrevented);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);
//addEventlistner는 onLoginSubmit의 첫번째 인자로 event를 넘겨준다.