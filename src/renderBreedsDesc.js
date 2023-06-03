import { catImg, catDesc } from "./index";

const renderBreedsDesc = breed => {
    const markupImage = `<img class="cat-img" src="${breed.url}" alt="${breed.id}">`;
    const markupDesc = `<h2 class="cat-info-desc-title">${breed.breeds[0].name}</h2>
      <p class="cat-info-desc-desc">${breed.breeds[0].description}</p>
      <p class="cat-info-desc-temp"><b>Temperament:</b> ${breed.breeds[0].temperament}</p>`;
      catImg.insertAdjacentHTML('beforeend', markupImage);
      catDesc.insertAdjacentHTML('beforeend', markupDesc);
  };
  
export {renderBreedsDesc};