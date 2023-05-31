export function fetchCountries(value) {
    return fetch(`https://api.thecatapi.com/v1/breeds${value}?breed_ids=beng,abys`)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();    
    });
}