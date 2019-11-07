const URL = '/api';


export async function getCities() {
    const url = `${URL}/cities`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data;
}