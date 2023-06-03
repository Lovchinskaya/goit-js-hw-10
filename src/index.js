
import Notiflix from 'notiflix';
import { fetchBreeds } from './cat-api';

const selectDropDown = document.querySelector(".breed-select");

function getEvents(query){
   fetchBreeds(query).then(data => {

const events = data;
//renderEvents(events)
console.log(events);
   })
}
getEvents('cat')

//console.log()

//console.log(fetchBreeds('cat'))

/*function renderBreeds(breeds){
    const markup = breeds.map((breed) => {
return `<li><h2>${breed.name}</h2><img src="${breed.reference_image_id}" alt="" width="200px"></img></li>`
    }).join('');
    ulList.insertAdjacentHTML('afterend', markup)
    console.log(markup)
}

  <option value="${breed.name}">${breed.name}</option>*/
