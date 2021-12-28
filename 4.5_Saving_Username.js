//localStorage!

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){ //첫 인자는 event로 받는 게 관행
    event.preventDefault(); //브라우저의 기본 동작을 막음. 여기선 제출 시 새로고침 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    //greeting.innerHTML = "Hello "+username;
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    //show the loginForm
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    greeting.innerHTML = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} //둘다 hidden이 default

console.log(savedUsername);