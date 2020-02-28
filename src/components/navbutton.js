import React from 'react';
import { Button } from "react-bootstrap";

class NavButton extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Button href={this.props.nav} className="form-control">
                    {this.props.text}
                </Button>
            </React.Fragment>
        )
    }
}

export default NavButton;