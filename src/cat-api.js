const breedsUrl = 'https://api.thecatapi.com/v1/breeds';
const picUrl = 'https://api.thecatapi.com/v1/images';

//cat key
const KEY =
  'live_8LD487u3PW0ACw4mo3clIsgLpSj0QCO01hF4spptpbumXSHheMAfCVCsK7GblUyB';

//fuction to fetchBreeds
const fetchBreeds = () => {
  return fetch(`${breedsUrl}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

//fuction to cat by its breeds
const findCatViaBreed = breedId => {
  return fetch(`${picUrl}/${breedId}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};


export { fetchBreeds, findCatViaBreed };