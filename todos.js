function loadTodos(){
fetch('https://jsonplaceholder.typicode.com/users/1/todos')
.then(res => res.json())
.then(data => displayTodo(data))
}

function displayTodo(todos){
    const todoContainer = document.getElementById('todo-container');
for(const todo of todos){
    const todoDiv = document.createElement('div');
    todoDiv.innerHTML= `
    <h3>title :${todo.title}</h3>
    <p>User :${todo.userId}</p>
    <p>Completed : ${todo.completed === true ? 'complated' : ' not complated'}</p>
    `;
    todoContainer.appendChild(todoDiv);

}

}


loadTodos();