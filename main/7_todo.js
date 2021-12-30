//7.6 Deleting Todos

 /* **filter**
    function f1(item){return item !== 3}
    [1,2,3,4].filter(f1)
    >>[1,2,4]

    [1,2,3,4].filter(item => item > 2) 
    >>[3,4]

    todos = [ {text: "eat"}, {text: "play"} ]
    function todoFilter(todo){ return todo.text !== "eat" }
    todos.filter(todoFilter)
    >>[ {text:"play"} ]

        
    function sayHello(item){
        console.log("this is the turn of", item);
    }
    (item) => console.log("this is turn of", item)과 동일 문장
*/
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //그냥 두면 빈 array에 저장하므로 이전 값은 array에서 사라짐

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id와 다른 애들만 남겨
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const toDoli = document.createElement("li");
    toDoli.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    toDoli.appendChild(span);
    toDoli.appendChild(button);

    toDoList.appendChild(toDoli); 
}

function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 방지
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = { //li를 문자열 말고 객체로 저장하고싶어
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //새로고침 이전 값 복원
    parsedToDos.forEach(paintToDo); //paintToDo("a"), paintToDo("b"), ..
}
