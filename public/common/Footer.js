import Component from '../Component.js';

class Header extends Component {
    renderHTML() {

        return /*html*/` 
        <div class="header">
        <img class="icon" src="./asset/cityscape.png">
            <h1 > Know your cities?</h1>
            <img class="icon" src="./asset/cityscape.png">
        </div>
        `;
        
    }
}

export default Header;