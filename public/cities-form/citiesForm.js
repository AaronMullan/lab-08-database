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
                nickname: formData.get('nickname'),
                year: parseInt(formData.get('year')),
                isWestcoast: formData.get('westcoast') === 'on'
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
        const optionsList = regions.map(region => {
            return `<option value="${region.id}">${region.name}</option>`;
        });

        const joinedOptionsList = optionsList.join('');

        console.log(joinedOptionsList);
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
                                ${joinedOptionsList}
                            </select>
                        </p>
                        <p>
                            <label for="url">Image Url</label>
                            <input id="url" name="url" required placeholder="Image URL">
                        </p>
                            <p>
                                <label for="year">Year Founded</label>
                                <input id="year"
                                    name="year" required  pattern="[0-9]{4}"
                                    placeholder="2005" title="Four digit year">
                             </p>

                                    <p>
                                    <label for="nickname">City Nickname</label>
                                    <input id="nickname" name="name" placeholder="City Nickname">
                                    </p>
                                
                                    <fieldset for="westcoast">
                                        <legend>Is it Westcoast?</legend>
                                        <label class="horizontally-centered">
                                     <input id="westcoast" name="westcoast" type="checkbox"> Yes</label>
                                    </fieldset>
                                        <p>
                                            <button class="button">Add This City</button>
                                        </p>
                         </form>
                                    `;
    }
}

export default CityForm;