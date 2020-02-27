import React from 'react';
import Navbar from './navbar'
import QR from './qrcode'
import { Pie } from 'react-chartjs-2';


class Home extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            labels: ['cat1','cat2', 'cat3'],
            datasets: [
                {
                    data: [2000,4000,2850],
                    backgroundColor: ['red','blue','green']
                }
            ]
        }
    }
    render () {
        return (
            <React.Fragment>
                <h1>{'Welcome '+ this.props.currentUser.name + "!"}</h1>
                <Pie data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }} height='50%' />
                <QR currentUser={this.props.currentUser}/>
                <Navbar currentUser={this.props.currentUser} toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}

export default Home;