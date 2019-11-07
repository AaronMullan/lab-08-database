  
import Component from '../Component.js';
import CitiesItem from './citiesItem.js';

class CitiesList extends Component {
    
    onRender(dom) {
        const city = this.props.city;

        city.forEach(city => {
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