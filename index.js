function loadUsers2(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => displayUser2(data))
}

function displayUser2(data){
    const ul =document.getElementById('users-list');
    for(let user of data){
        console.log(user.username);
        const li = document.createElement('li');
        li.innerText = user.username;
        ul.appendChild(li);
    }
}