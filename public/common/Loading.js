import Component from '../Component.js';

class Loading extends Component {
    renderHTML() {
        const { loading } = this.props;
        if (!loading) {
            return /*html*/`<div id="findout"></div>`;
        }

        return /*html*/`
            <div class="loading-container">
                    <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        `;
    }
}

export default Loading;