import Component from '../Component.js';

class CitiesItem extends Component {

    renderHTML(){
        const city = this.props.city;
        console.log(city, 'city')
        return /*html*/ `

        <li class = "city-item">
        <a  class="link" href="detail-page.html?id=${city.id}">

            <div class="info-container">
                <h2>${city.name}</h2>
    <p class="city-westCoast">is Westcoast?: ${city.westcoast}</p>
        <p class="city-region">Region: ${city.region}</p>
        <div class="image-container">
        <img class ="image" src="${city.url}" alt="${city.name}">
         </div>
        <p class="year">Year Founded: ${city.year}</p>
    <p class="nickname">City Nickname: ${city.nickname}</p>
                 </div>
                 </a>
                </li>
            

        `;

    }
}
export default CitiesItem;