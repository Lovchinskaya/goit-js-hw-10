import { catImage, catInfo } from './index';

//render description of the cat
const renderDescOfCatBreed = breed => {
  const markupPicture = `<img class="cat-picture" src="${breed.url}" alt="${breed.id}" >`;
  const markupDescript = `<h2 class="cat-info-desc-title">${breed.breeds[0].name}</h2>
    <p class="cat-info-desc-desc">${breed.breeds[0].description}</p>
    <p class="cat-info-desc-temp"><b>Temperament:</b> ${breed.breeds[0].temperament}</p>`;
    catImage.insertAdjacentHTML('beforeend', markupPicture);
    catInfo.insertAdjacentHTML('beforeend', markupDescript);
};

export { renderDescOfCatBreed };

