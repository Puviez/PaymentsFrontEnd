import React from 'react';
import {
    Link
} from "react-router-dom";

class NavButton extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    <Link to={this.props.nav}>{this.props.text}</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default NavButton;