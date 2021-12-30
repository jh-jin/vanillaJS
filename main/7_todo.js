//localStorage에 array를 저장할 수 없다 only String!
//JSON.stringify()
//JSON.parse()
//.forEach()

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const toDoli = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo;
    button.innerText = "❌";
    toDoli.appendChild(span);
    toDoli.appendChild(button);
    toDoList.appendChild(toDoli); 
    button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 방지
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log("S",savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log("P",parsedToDos);
    parsedToDos.forEach(sayHello);
}