import React from 'react';

import {
    Redirect
} from "react-router-dom";
import NavButton from './navbutton'
import { Form } from "react-bootstrap";

class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            type: "User",
            stripe_id: "",
            username: "",
            password: "",
            name: "",
            email: "",
            cards: [],
            transactions: [],
            category: "",
            description: "",
            bank_account_num: "",
            merchant: false,
            redirect: false
        };
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    toggleMerchant = () => {
        this.setState({merchant: !this.state.merchant})
        console.log("State:" + this.state.merchant)
        if (this.state.merchant) {
            this.setState({type: "User"})
        } else {
            this.setState({type: "Merchant"})
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.merchant === true) {
            fetch("http://localhost:3000/merchants", {
                body: JSON.stringify(this.state),
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json"
                }
            })
              .then(createdMerchant => {
                console.log(createdMerchant);
                return createdMerchant.json();
              })
              .then(() => {
                // to toggle to true to redirect
                this.setState({
                  redirect: true
                });
              })
              .catch((error) => console.log(error));
        } else {

        
            // Create Stripe User
            
            // var urlencoded = new URLSearchParams();
            // urlencoded.append("description",this.state.username)
            // urlencoded.append("email",this.state.email)
            // urlencoded.append("name",this.state.name)

            // var myHeaders = new Headers();
            // myHeaders.append("Authorization", "Bearer sk_test_gkQR8IrPPm3BHB3HXiPDbslu00UmRZMhQc");
            // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
            // fetch("https://api.stripe.com/v1/customers", {
            //     method: "POST",
            //     headers: myHeaders,
            //     body: urlencoded,
            //     redirect: 'follow'
            // })
            // .then(createdStripeUser => {
            //     console.log("Hello", createdStripeUser)
            //     return createdStripeUser.json();
            // })
            // .then(stripeUser => {
            //     this.setState({
            //         stripe_id: stripeUser.id
            //     });
            // })
            // .catch(error => console.log(error));

            fetch("http://localhost:3000/users", {
                body: JSON.stringify(this.state),
                method: "POST",
                headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
                }
            })
                .then(createdUser => {
                    console.log(createdUser);
                    return createdUser.json();
                })
                .then(() => {
                    // to toggle to true to redirect
                    this.setState({
                        redirect: true
                });
                })
                .catch(error => console.log(error));
            };
        }

    render () {
        if (this.state.redirect === true) {
            return <Redirect to="/login" />;
        } else if(this.state.merchant) {
            return (
                <React.Fragment>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                onClick={this.toggleMerchant}
                                label={this.state.merchant ? "Merchant" : "User"}
                            />
                            {/* <button onClick={this.toggleMerchant}>{this.state.merchant ? "Merchant" : "User"}</button> */}
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor='username'>Username: </label>
                                    <input
                                        id='username'
                                        type='text'
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='password'>Password: </label>
                                    <input
                                        id='password'
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='email'>Email: </label>
                                    <input
                                        id='email'
                                        type='text'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='category'>Category: </label>
                                    <input
                                        id='category'
                                        type='text'
                                        value={this.state.category}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                <label htmlFor='description'>Description: </label>
                                    <input
                                        id='description'
                                        type='text'
                                        value={this.state.description}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='bank_account_num'>Bank Account Number: </label>
                                    <input
                                        id='bank_account_num'
                                        type='number'
                                        value={this.state.bank_account_num}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <input
                                    type='submit'
                                    value='Submit'
                                />
                            </form>
                            <NavButton nav={"/"} text={"Back"} />
                        </div>
                    </div>
                </React.Fragment>  
            )
        }
        return (
            <React.Fragment>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            onClick={this.toggleMerchant}
                            label={this.state.merchant ? "Merchant" : "User"}
                        />
                        {/* <button onClick={this.toggleMerchant}>{this.state.merchant ? "Merchant" : "User"}</button> */}
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='username'>Username: </label>
                                <input
                                    id='username'
                                    type='text'
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='password'>Password: </label>
                                <input
                                    id='password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='name'>Name: </label>
                                <input
                                    id='name'
                                    type='text'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email: </label>
                                <input
                                    id='email'
                                    type='text'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <input
                                type='submit'
                                value='Submit'
                            />
                        </form>
                        <NavButton nav={"/"} text={"Back"} />
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default Signup;
