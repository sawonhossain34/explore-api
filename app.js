function dataTap2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data => console.log(data))
}

function loadUsers(){
    fetch('https://Jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
console.log(data);
}