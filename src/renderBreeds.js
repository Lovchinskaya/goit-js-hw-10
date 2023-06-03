import { selectDropDown } from './index';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const renderBreeds = breeds => {
    const markup = breeds.map(breed => {
return `<option value="${breed.name}">${breed.name}</option>`
    }).join('');
    selectDropDown.insertAdjacentHTML('afterend', markup)
    console.log(markup);
    new SlimSelect({
        select: '#single',
    });
}

export { renderBreeds }