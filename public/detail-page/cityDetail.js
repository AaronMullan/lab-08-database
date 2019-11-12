import Component from '../Component.js';

class CityDetail extends Component {
    renderHTML() {
        const city = this.city;
        const json = JSON.stringify(city);
        return /*html*/ `
        <pre>${json}</pre>
        
        `;

    }
}
export default CityDetail;