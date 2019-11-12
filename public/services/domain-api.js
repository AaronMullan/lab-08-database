const URL = '/api';

export async function getCities() {
    const url = `${URL}/cities`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data;
    
}

export async function getRegions() {
    const url = `${URL}/region`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function addCity(city) {
    const url = `${URL}/cities`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(city)
    });
    const data = await response.json();
    return data;
}

export function getCity(id) {  
    const url = `${URL}/city/${id}`;
    return fetch(url)
        .then(response => response.json());
}
