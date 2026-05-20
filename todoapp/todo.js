let todoList=document.getElementById("todoList");
let todoInput=document.getElementById("todoInput");
let addBtn=document.getElementById("addBtn");

function getTodosFromLocalStorage(){

let parsedTodos=JSON.parse(localStorage.getItem("todos"));
if(parsedTodos===null){
    return[];
}
else{
    return parsedTodos;
}
}





 let todos=getTodosFromLocalStorage();
 function lastIndex(){
    let max = 0;

for (let todo of todos) {
  if (todo.id > max) {
    max = todo.id;
  }
}
return max;
 }
 let todoId=lastIndex()+1;
function addtodo(){
    if(todoInput.value==""){
    return;
}
let todoItem={
    text:todoInput.value,
    id:todoId
    
}

todos.push(todoItem);
 
todoId++;
//li item create cheysam

let li=document.createElement("li");
li.textContent=todoItem.text;
li.id="todoList"+todoItem.id;


//delete item create cheysam
let deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete-icon");

//i tage for icon create cheysam
let i=document.createElement("i");
i.classList.add("fa-solid", "fa-trash");
//delete button lo icon i add cheysam
deleteBtn.appendChild(i);
//delete button ni li list lo add cheysam
li.appendChild(deleteBtn);
//li list ni ul list lo add cheysam
todoList.appendChild(li);
todoInput.value = "";

deleteBtn.onclick = function () {
    deleteTodo(todoItem.id, li);
};


 
}
function deleteTodo(idd,li){
    

      let id=idd;
        
    let index=todos.findIndex(function(todo){
         
     return todo.id==id;
    });
        todoList.removeChild(li);
    todos.splice(index,1);

    }


// to show the ui after refresh the page we need to render the todos from local storage
 function render(todoItem){
    
            let li=document.createElement("li");
        li.textContent=todoItem.text;
        li.id="todoList"+todoItem.id;

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-icon");

        //i tage for icon create cheysam
        let i=document.createElement("i");
        i.classList.add("fa-solid", "fa-trash");
        //delete button lo icon i add cheysam
        deleteBtn.appendChild(i);
        //delete button ni li list lo add cheysam
        li.appendChild(deleteBtn);
        //li list ni ul list lo add cheysam
        todoList.appendChild(li);

        deleteBtn.onclick = function () {
    deleteTodo(todoItem.id, li);
};

 }
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
    alert("Todos saved successfully ✅");

}
for(todoItem of todos){
    render(todoItem);
   
}


 

 




