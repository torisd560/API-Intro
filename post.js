function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data =>displayPost(data))
}
loadPost();

function displayPost(data){
    const postContainer = document.getElementById('post-conainer');
    for ( post of data){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = ` 
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        
        postContainer.appendChild(div)
    }
}