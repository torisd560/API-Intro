function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=> res.json())
    .then(data=>addComment(data))
}
function addComment(data){
    const commentContainer = document.getElementById('comment-container')
    for ( comment of data){
        const div = document.createElement('div');
        div.innerHTML =`
        <h3> Name : ${comment.name}</h3>
        <h5> Email : ${comment.email}</h5>
        <p> Comment :${comment.body}</p>
        `;
        div.classList.add('comment')
        commentContainer.appendChild(div)
    }
}