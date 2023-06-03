import { selectName } from './index';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

//to create list of select
const buildingBreedsChoice = breeds => {
  const markup = breeds
    .map(breed => {
      return `<option value="${breed.reference_image_id}">${breed.name}</option>`;
    })
    .join('');
    selectName.insertAdjacentHTML('beforeend', markup);
  new SlimSelect({
    select: '#single',
  });
};

export { buildingBreedsChoice };