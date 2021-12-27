//3.2 Searching for Elements: 원소 가져오기
let hellos = [];
hellos[0] = document.getElementsByClassName("hello0");
hellos[1] = document.getElementsByTagName("h1");
hellos[2] = document.getElementById("hey")
//*중요* CSS selector로 가져오기
hellos[3] = document.querySelector(".hello1 h1"); //첫 하나 가져오기
hellos[4] = document.querySelectorAll(".hello1 h1") //해당 모두 가져오기
hellos[5] = document.querySelector(".hello1 h1:last-child")

hellos[6] = document.querySelector("#hey"); //CSS selector라서 #붙여줘야함
//#hey form 이런식으로 id 하위의 form을 가져오는 등 다양 조작 가능, 아래로는 불가능
hellos[7] = document.getElementById("hey"); //id 바로입력

console.log(hellos);