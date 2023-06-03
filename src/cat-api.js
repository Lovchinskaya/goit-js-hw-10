const API = "live_8LD487u3PW0ACw4mo3clIsgLpSj0QCO01hF4spptpbumXSHheMAfCVCsK7GblUyB";
const UrlGeneral = "https://api.thecatapi.com/v1/breeds"
export function fetchBreeds(keyword) {
    return fetch(`${UrlGeneral}?api_key=${API}`)
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();    
    })
    .catch((error) => console.log(error));
}




