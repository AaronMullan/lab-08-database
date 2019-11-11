import Component from '../Component.js';
import Header from '../common/Header.js';
import CityForm from './citiesForm.js';
import { getRegions } from '../services/domain-api.js';

class CityFormApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'Add a City' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const region = await getRegions();
        const cityForm = new CityForm({ region });
        main.appendChild(cityForm.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                    
                </main>
            </div>
        `;
    }
}

export default CityFormApp;