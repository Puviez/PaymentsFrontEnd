import React from 'react';
import Navbar from './navbar'

class History extends React.Component {
    render () {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            {/* <th scope="col">Store</th> */}
                            <th scope="col">Category</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.props.currentUser.transactions.map(
                            transaction => {
                                return (
                                    <tr>
                                        <td>{transaction.created}</td>
                                        <td>{store}</td>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.amount}</td>
                                    </tr>
                                )
                            }
                        )} */}
                    </tbody>
                </table>
                <Navbar toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}

export default History;