import Component from '../Component.js';
import Header from '../common/Header.js';
import CitiesList from './citiesList.js';
import { getCities } from '../services/domain-api.js';
import Loading from '../common/Loading.js';


class CityListApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'List of City' });
        dom.prepend(header.renderDOM());

        const loading = new Loading({ loading: true });
        dom.appendChild(loading.renderDOM());

        const main = dom.querySelector('main');
        const cityList = new CitiesList({ cities: [] });
        main.appendChild(cityList.renderDOM());

        try {
            const cities = await getCities();
            cityList.update({ cities });
        }

        catch (err) {
            console.log('Load city failed', err);
        }

        finally {
            window.setTimeout(() => {
                loading.update({ loading: false });
            }, 2000); 
        }
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

export default CityListApp;