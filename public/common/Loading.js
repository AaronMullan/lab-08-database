import Component from '../Component.js';

class Loading extends Component {
    renderHTML() {
        const { loading } = this.props;
        if (!loading) {
            return /*html*/`<div id="findout"></div>
    `;
        }

        return /*html*/`
            <div class="loading-container">
                    <img src="./asset/loading.gif">
            </div>
    
        `;
    }
}

export default Loading;