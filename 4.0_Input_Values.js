//드디어 앱

//const loginForm = document.querySelector("#login-form");
//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username); //이제 관심사는 click이 아니라 submit된 정보
    // 아래 방법은 별로 좋지 않음. html input을 form으로 감싸면 from이 submit됨. browser가 도와줌!
    // if(username === ""){  
    //     alert("Please write your name");
    // } else if(username.length>15){
    //     alert("Your name is too long.")
    // }
}


loginButton.addEventListener("click", onLoginBtnClick);