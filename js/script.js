

// tempat penyimpnan
let todos = [];

function validateForm(todo,date){
    if(todo.trim() === '' || date ===  ''){
        // alert ('plese enter a todo item and select a due date')
        return false;
    }
    return true;

}

function addtodo(){
    const todoInput = document.getElementById('todo-input').value;
    const todoDate = document.getElementById('todo-date').value;

    if (!validateForm(todoInput,todoDate)){
        alert(' form validate failed. please chek your input')
    } else {
        console.log('Todo added:', todoInput, 'Due date:',todoDate);

        // menyimpan
        todos.push({task: todoInput, dueDate: todoDate});

        rendertodos();

       
    }

}

function deletetodo(){

}

function filtertodo(){
    
}

function rendertodos(){
    const todoList = document.getElementById('todo-list');

    // clear
    todoList.innerHTML = '';

    todos.forEach((todo, index) =>{
    todoList.innerHTML += `<li>
        <span>${todo.task} - ${todo.dueDate}</span>
        <button onClick="deleteTodo(${index})"> Delete</button>
    </li>`;
    });
    
}


