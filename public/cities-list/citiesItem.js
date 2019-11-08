import Component from '../Component.js';

class CitiesItem extends Component {

    renderHTML(){
        const city = this.props.city;

        return /*html*/ `
        <li class = "city-item">
            <div class="info-container">
                <h2>${city.name}</h2>
    <p class="city-westCoast">${city.isWestcoast}</p>
        <p class="city-region">${city.region}</p>
        
        <p class="year">${city.year}</p>
    <p class="nickname">${city.nickname}</p>
                 </div>
                </li>

        `;

    }
}
export default CitiesItem;