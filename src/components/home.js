import React from 'react';
import Navbar from './navbar'
import QR from './qrcode'

class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <h1>{'Welcome '+ this.props.currentUser.name + "!"}</h1>
                <QR currentUser={this.props.currentUser}/>
                <Navbar toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}

export default Home;