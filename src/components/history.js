import React from 'react';
import Navlinks from './navbar'
import Moment from 'react-moment';
import 'moment-timezone';
import { Table } from "react-bootstrap"; 
import { Navbar } from "react-bootstrap";

class History extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            transactions: []
        }
    }

    componentDidMount () {
        fetch("http://localhost:3000/payments/" + this.props.currentUser._id)
        .then(response => response.json())
        .then(payments => {
            console.log(payments)
            this.setState({
            transactions: payments
            });
        }); 
        console.log(this.state)
    }
    render () {
        return (
            <React.Fragment>
                <h1>Transaction History</h1>
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Store</th>
                            <th scope="col">Category</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map(
                            transaction => {
                                return (
                                    <tr>
                                        <td><Moment format="DD/MM/YYYY">{transaction.date}</Moment></td>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.category}</td>
                                        <td>{"$" + transaction.amount}</td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </Table>
                <Navlinks toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}

export default History;