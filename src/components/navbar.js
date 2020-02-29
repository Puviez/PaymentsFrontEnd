import React from 'react';
import {
    Link
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Navlinks extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" fixed="bottom">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        {/* <div>
                            <Link to="/home">Home</Link>
                        </div> */}
                        <Nav.Link href="/history">History</Nav.Link>
                        {/* <div>
                            <Link to="/history">History</Link>
                        </div> */}
                        <Nav.Link href="/account">Account</Nav.Link>
                        {/* <div>
                            <Link to="/account">Account</Link>
                        </div> */}
                        <Nav.Link href="/" onClick={this.props.toLogout} >Logout</Nav.Link>
                        {/* <div>
                            <Link to="/payment" >Payment</Link>
                        </div> */}
                        {/* <div onClick={this.props.toLogout}>
                            <Link to="/">Logout</Link>
                        </div> */}
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Navlinks;