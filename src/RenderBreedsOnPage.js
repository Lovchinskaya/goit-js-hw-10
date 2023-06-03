import { loaderEl, selectDropDown } from './index';
import { fetchBreeds } from './cat-api';
import { renderBreeds } from './renderBreeds';

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

  export {RenderBreedsOnPage}