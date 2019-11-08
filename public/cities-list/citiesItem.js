import Component from '../Component.js';

class CitiesItem extends Component {

    renderHTML(){
        const city = this.props.city;

        return /*html*/ `
        <li class = "city-item">
            <div class="info-container">
                <h2>${city.name}</h2>
    <p class="city-westCoast">is Westcoast?: ${city.isWestcoast}</p>
        <p class="city-region">Region: ${city.region}</p>
        
        <p class="year">Year Founded: ${city.year}</p>
    <p class="nickname">City Nickname: ${city.nickname}</p>
                 </div>
                </li>

        `;

    }
}
export default CitiesItem;