import { loader, selectName } from './index';
import { fetchBreeds } from './cat-api';
import { buildingBreedsChoice } from './buildingBreedsChoice';

//Функція, що фетчить дані та на їх основі створює розмітку випадаючого списку (працює відразу після завантаження сторінки)
const lookingForBreeds = () => {
  loader.classList.remove('blind');
  fetchBreeds()
    // .then(breeds => console.log(breeds))
    .then(breeds => buildingBreedsChoice(breeds))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      loader.classList.add('blind');
      selectName.classList.remove('blind');
    });
};

export { lookingForBreeds };

