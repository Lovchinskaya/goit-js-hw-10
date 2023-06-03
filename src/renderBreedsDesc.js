

const renderBreedsDesc = breed => {
    const markupImage = `<img class="cat-img" src="${breed.url}" alt="${breed.id}">`;
    const markupDesc = `<h2 class="cat-title">${breed.breeds[0].name}</h2>
      <p class="cat-desc">${breed.breeds[0].description}</p>
      <p class="cat-desc-temp"><b>Temperament:</b> ${breed.breeds[0].temperament}</p>`;
      catImg.insertAdjacentHTML('beforeend', markupPicture);
      catDesc.insertAdjacentHTML('beforeend', markupDescript);
  };
  
export {renderBreedsDesc};