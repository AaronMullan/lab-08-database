import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import CityDetail from './cityDetail.js';
import { getCity } from '../services/domain-api.js';


class CityDetailApp extends Component {
    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');

        if (!id) {
            window.location = 'cities-list.html';
            return;
        }

        try {
            const city = await getCity(id);
            const cityDetail = new CityDetail({ city });
            main.appendChild(cityDetail.renderDOM());
        }
        catch (err) {
            console.log(err);
        }

        finally {
            loading.update({ loading: false });
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

export default CityDetailApp;