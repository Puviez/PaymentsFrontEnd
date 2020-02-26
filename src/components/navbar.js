import React from 'react';
import {
    Link
} from "react-router-dom";

class Navbar extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    <Link to="/home">Home</Link>
                </div>
                <div>
                    <Link to="/history">History</Link>
                </div>
                <div>
                    <Link to="/account">Account</Link>
                </div>
                <div>
                    <Link to="/payment" >Payment</Link>
                </div>
                <div onClick={this.props.toLogout}>
                    <Link to="/">Logout</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar;