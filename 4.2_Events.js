
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){ //첫 인자는 event로 받는 게 관행
    event.preventDefault(); //브라우저의 기본 동작을 막아준다. 여기선 새로고침 막기
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
//addEventlistner는 첫번째 인자로 event를 넘겨준다.