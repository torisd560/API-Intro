fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=> res.json())
.then(data=>displayPhoto(data))


function displayPhoto(data){
    const photoContainer = document.getElementById('photos');
    for ( photo of data){
        const img = document.createElement('img');
        img.src = `${photo.thumbnailUrl}`
        img.classList.add('img')
        photoContainer.appendChild(img)
    }
}