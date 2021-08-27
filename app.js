document.getElementById('load-data').addEventListener('click', function(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then( response=> response.json())
            .then(data=> console.log(data))
    })
// load users
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUsers(data))
}
 function displayUsers(data){
    const ul = document.getElementById('users');
     for (user of data){
        const li = document.createElement('li');
        li.innerText = `Username : ${user.username}  
        Email :${ user.email}`
        ul.appendChild(li)
    }
        
 }