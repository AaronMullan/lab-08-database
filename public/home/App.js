import Component from '../Component.js';
import Header from '../common/Header.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                  <h1> Know your cities?</h1>
                <a class ="button" href ="./cities-list.html">CLICK TO GO TO CITIES LIST</a>
                </main>
            </div>
        `;
    }
}

export default App;