
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){ //첫 인자는 event로 받는 게 관행
    event.preventDefault(); //브라우저의 기본 동작을 막음. 여기선 제출 시 새로고침 막기

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerHTML = "Hello "+username;
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
