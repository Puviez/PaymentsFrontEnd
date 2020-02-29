import React from 'react';
import Navbar from './navbar'
import QR from './qrcode'
import { Pie } from 'react-chartjs-2';



class Home extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            transactions: [],
            categories: [],
            spending: [],
            pieColours: [] // Create random colours based on number of categories
        }
    }

    componentDidMount () {
        const expenseObj = {};
        const colourGen = () => {
            const r = Math.floor(Math.random() * 255) + 1;
            const g = Math.floor(Math.random() * 255) + 1;
            const b = Math.floor(Math.random() * 255) + 1;
            return "rgb(" + r + "," + g + "," + b + ")";
        }
        fetch("http://localhost:3000/payments/" + this.props.currentUser._id)
        .then(response => response.json())
        .then(payments => {
            console.log(payments)
            this.setState({
            transactions: payments
            });
            payments.forEach(transaction => {
                if(Object.keys(expenseObj).includes(transaction.category)){
                    expenseObj[transaction.category] += transaction.amount;
                } else {
                    expenseObj[transaction.category] = transaction.amount;
                }
            })
            Object.keys(expenseObj).forEach(key => {
                let colour = colourGen()
                this.setState({
                    pieColours: [...this.state.pieColours, colour]
                })
            })
            console.log(expenseObj)
            this.setState({
                categories: Object.keys(expenseObj),
                spending: Object.values(expenseObj)
            })
        });
        console.log(this.state)
    }

    render () {
        return (
            <React.Fragment>
                <h1>{'Welcome '+ this.props.currentUser.name + "!"}</h1>
                <Pie data={{
                    labels: this.state.categories,
                    datasets: [
                        {
                            data: this.state.spending,
                            backgroundColor: this.state.pieColours
                        }
                    ]
                }} options={{
                    title:{
                        display:true,
                        text:'Expense Breakdown',
                        fontSize:20
                    }
                }}/>
                {/* <QR currentUser={this.props.currentUser}/> */}
                <Navbar currentUser={this.props.currentUser} toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}

export default Home;