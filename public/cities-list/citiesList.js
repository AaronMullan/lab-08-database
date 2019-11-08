  
import Component from '../Component.js';
import CitiesItem from './citiesItem.js';

class CitiesList extends Component {
    
    onRender(dom) {
        const cities = this.props.cities;
console.log(this.props);
        cities.forEach(city => {
            const props = { city: city };
            const cityItem = new CitiesItem(props);
            const cityItemDOM = cityItem.renderDOM();
            dom.appendChild(cityItemDOM);
        });

    }

    renderHTML() {
        
        return /*html*/`
            <ul class="cities"></ul>
        `;
    }
}

export default CitiesList;