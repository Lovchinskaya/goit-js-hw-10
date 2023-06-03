import Notiflix from 'notiflix';
import { fetchBreeds, findBreedOfCat } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectDropDown = document.querySelector(".breed-select");
const catImg = document.querySelector('.cat-img');
const catDesc = document.querySelector('.cat-desc');
const loaderEl = document.querySelector('.loader');
selectDropDown.addEventListener('change', onChangeSelect)


function onChangeSelect(event) {
    loaderEl.classList.remove('unvisible');
    divPictEl.innerHTML = '';
    divDescEl.innerHTML = '';
    const breedId = event.target.value;
    console.log('breedId: ', breedId);
    findBreedOfCat(breedId)
      .then(breed => renderBreedsDesc(breed))
      // .then(breed => console.log(breed))
      .catch(error => {
        console.log(error);
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
      })
      .finally(() => loaderEl.classList.add('unvisible'));
  }

const RenderBreedsOnPage = () => {
    loaderEl.classList.remove('unvisible');
    fetchBreeds()
      // .then(breeds => console.log(breeds))
      .then(breeds => renderBreeds(breeds))
      .catch(error => {
        console.log(error);
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
      })
      .finally(() => {
        loaderEl.classList.add('unvisible');
        selectDropDown.classList.remove('unvisible');
      });
  };
  RenderBreedsOnPage();

const renderBreeds = breeds => {
    const markup = breeds.map((breed) => {
return `<option value="${breed.name}">${breed.name}</option>`
    }).join('');
    selectDropDown.insertAdjacentHTML('afterend', markup)
    console.log(markup);
    new SlimSelect({
        select: '#single',
    });
}

const renderBreedsDesc = breed => {
    const markupImage = `<img class="cat-img" src="${breed.url}" alt="${breed.id}">`;
    const markupDesc = `<h2 class="cat-title">${breed.breeds[0].name}</h2>
      <p class="cat-desc">${breed.breeds[0].description}</p>
      <p class="cat-desc-temp"><b>Temperament:</b> ${breed.breeds[0].temperament}</p>`;
      catImg.insertAdjacentHTML('beforeend', markupPicture);
      catDesc.insertAdjacentHTML('beforeend', markupDescript);
  };
  
