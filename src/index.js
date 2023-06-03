import {  findCatViaBreed } from './cat-api';
import { renderDescOfCatBreed } from './renderDescOfCatBreed';
import { lookingForBreeds } from './lookingForBreeds';

import Notiflix from 'notiflix';

const selectName = document.querySelector('.breed-select');
const catImage = document.querySelector('.cat-image');
const catInfo = document.querySelector('.cat-description');
const loader = document.querySelector('.loader');

selectName.addEventListener('change', changingOnSelecting);

lookingForBreeds();

function changingOnSelecting(event) {
loader.classList.remove('blind');
catImage.innerHTML = '';
catInfo.innerHTML = '';
  const breedId = event.target.value;
  console.log('breedId: ', breedId);
  findCatViaBreed(breedId)
    .then(breed => renderDescOfCatBreed(breed))
    // .then(breed => console.log(breed))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => loader.classList.add('blind'));
  }

export { selectName, catImage, catInfo, loader };




/*import { fetchCatByBreed } from './cat-api';
import { renderBreedDesc } from './renderBreedDesc';
import { fetchAndRenderBreeds } from './fetchAndRenderBreeds';

import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const divPictEl = document.querySelector('.cat-info-pict');
const divDescEl = document.querySelector('.cat-info-desc');
const loaderEl = document.querySelector('.loader');

breedSelect.addEventListener('change', onChangeSelect);

fetchAndRenderBreeds();

//Функція, яка виконується при виборі породи кота у списку (подія change на селекті)
function onChangeSelect(event) {
  loaderEl.classList.remove('unvisible');
  divPictEl.innerHTML = '';
  divDescEl.innerHTML = '';
  const breedId = event.target.value;
  console.log('breedId: ', breedId);
  fetchCatByBreed(breedId)
    .then(breed => renderBreedDesc(breed))
    // .then(breed => console.log(breed))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => loaderEl.classList.add('unvisible'));
}

export { breedSelect, divPictEl, divDescEl, loaderEl };

*/








/*import Notiflix from 'notiflix';
import { findBreedOfCat } from './cat-api';
import { renderBreedsDesc } from './renderBreedsDesc';
import { RenderBreedsOnPage } from './RenderBreedsOnPage';

const selectDropDown = document.querySelector(".breed-select");
const catImg = document.querySelector('.cat-info-img');
const catDesc = document.querySelector('.cat-info-desc');
const loaderEl = document.querySelector('.loader');
selectDropDown.addEventListener('change', onChangeSelect)

RenderBreedsOnPage();

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

export {selectDropDown, catDesc, catImg, loaderEl }

*/


