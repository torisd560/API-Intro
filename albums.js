function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then( data => displayAblums(data))
}
loadAlbums()
function displayAblums(albums){
    const albumsContainer = document.getElementById('albums');
    for (album of albums){
        const h4 = document.createElement('h4');
        h4.innerText = `id : ${album.id} ${album.title}`
        albumsContainer.appendChild(h4)
    }
}