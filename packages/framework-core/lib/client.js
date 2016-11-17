import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {
    state = {
        name: ''
    };

    render() {
        console.log("Home Route");
        return (
            <div>
                <h1>Welcome To Meteor Framework</h1>
                <p>Nice to meet you.</p>
            </div>
        )
    }
}

let root = document.createElement('div');
root.id = 'render-target';
document.getElementsByTagName('body')[0].appendChild(root);

render(<Home/>, document.getElementById('render-target'));

