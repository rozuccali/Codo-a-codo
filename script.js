function createCards(data) {
    const galleryDiv = document.getElementById('gallery');
  

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const images = data[key];
 
        images.forEach(image => {
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('card');
  
          const img = document.createElement('img');
          img.src = image.url;
          cardDiv.appendChild(img);
  
          const desc = document.createElement('p');
          desc.textContent = image.descripcion;
          cardDiv.appendChild(desc);
  
          galleryDiv.appendChild(cardDiv);
        });
      }
    }
  }
  

  fetch('./fotos/imagenes.json')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching JSON:', error));