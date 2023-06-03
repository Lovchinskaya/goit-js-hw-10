import Notiflix from 'notiflix';
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




