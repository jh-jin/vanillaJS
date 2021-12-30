//localStorage에 array를 저장할 수 없다 only String!
//JSON.stringify()
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function saveToDos(newToDo){
    localStorage.setItem("todos", JSON.stringify(toDos));

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