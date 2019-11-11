import Component from '../Component.js';

class Header extends Component {
    renderHTML() {

        return /*html*/` 
        <div class="header">

        <img class="icon" src="./asset/cityscape.png">
            <h1 > Know your cities?</h1>
             <img class="icon" src="./asset/cityscape.png">
        <div class="buttons">
             <a class ="button" href ="./cities-list.html">Cities</a>
             <a class ="button" href ="./cities-forms.html">Add City</a>
            </div>
        </div>
        `;
        
    }
}

export default Header;