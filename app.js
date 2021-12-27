//3.2 Searching for Elements: 원소 가져오기
let hellos = [];
hellos[0] = document.getElementsByClassName("hello0");
hellos[1] = document.getElementsByTagName("h1");
hellos[2] = document.getElementById("hey")
//*중요* CSS selector로 가져오기
hellos[3] = document.querySelector(".hello1 h1"); //첫 하나 가져오기
hellos[4] = document.querySelectorAll(".hello1 h1") //해당 모두 가져오기
hellos[5] = document.querySelector(".hello1 h1:last-child")
console.log(hellos);