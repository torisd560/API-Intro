function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
loadTodos()
function displayTodos(data){
    const  todosContainer = document.getElementById('todos');
    for ( todos of data){
        const h3 = document.createElement('h3');
        h3.style.textAlign = 'center'
        h3.innerText= `${todos.title}`
        todosContainer.appendChild(h3)
    }
}