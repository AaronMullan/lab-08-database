import Component from '../Component.js';
import { addCity } from '../services/domain-api.js';

class CityForm extends Component {

    onRender(form) {
        // handle form event
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(form);

            const city = {
                name: formData.get('name'),
                region: parseInt(formData.get('region-id')),
                url: formData.get('url'),
                textarea: formData.get('textarea'),
                type: parseInt(formData.get('types-id'))

            };

            try {
                const saved = await addCity(city);
                console.log(city);
                console.log(saved);

                window.location = `cities-list.html`;
            }
            catch (err) {
                console.log('city not saved', err);
            }
        });

    }

    renderHTML() {
        const regions = this.props.region;
        const types = this.props.types;
        const optionsListRegions = regions.map(region => {
            return `<option value="${region.id}">${region.name}</option>`;
        });

        const optionsListType = types.map(type => {
            return `<option value="${type.id}">${type.name}</option>`;
        });

        const joinedOptionsListRegions = optionsListRegions.join('');
        const joinedOptionsListType = optionsListType.join('');

        return /*html*/`
                <form class="city-form">

                <h1> Add a City</h1>
                    <p>
                        <label for="name">Name</label>
                        <input id="name" name="name" required placeholder="City">
                </p>
                        <p>
                            <label for="region">Region</label>
                            <select id="region" name="region-id" required>
                                <option disabled selected>&lt;select a region&gt;</option>
                                ${joinedOptionsListRegions}
                            </select>
                        </p>
                        
                        <p>
                        <label for="types">Type</label>
                        <select id="types" name="types-id" required>
                            <option disabled selected>&lt;select a type&gt;</option>
                            ${joinedOptionsListType}
                        </select>
                    </p>

                        <p>
                            <label for="url">Image Url</label>
                            <input id="url" name="url" required placeholder="Image URL">
                        </p>

                        <p>Notes:
                            <textarea> </textarea>
                           </p>     
                                    
                                        <p>
                                            <button class="button">Add This City</button>
                                        </p>
                         </form>
                                    `;
    }
}

export default CityForm;