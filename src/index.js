const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const API = "live_8LD487u3PW0ACw4mo3clIsgLpSj0QCO01hF4spptpbumXSHheMAfCVCsK7GblUyB";

function fetchEvents(keyword) {
    const params = new URLSearchParams({
        apikey: API,
        value: breed_ids,
        category_ids
        });
    return fetch(`${BASE_URL}?${params}`)
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch((error) => console.log(error));
  }