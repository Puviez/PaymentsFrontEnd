import React from 'react';
import {
    Redirect
} from "react-router-dom";
import NavButton from './navbutton';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            currentUser: "",
            redirect: false
        }
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:3000/sessions', {
            body: JSON.stringify(this.state),
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
          .then(loggedInUser => {
              return loggedInUser.json();
          })
          .then(jsonedUser => {
              this.setState({
                currentUser: jsonedUser
              })
            //   console.log(this.state.currentUser)
          })
          .then(() => {
              this.props.setUser(this.state.currentUser);
              this.setState({
                  redirect: true
              })
          })
          .catch(error => console.log(error));
    }

    render () {
        if (this.state.redirect === true) {
            return <Redirect to="/home" />;
        }
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input
                        type='submit'
                        value='Submit'
                    />
                </form>
                <NavButton nav={"/"} text={"Back"} />
            </React.Fragment>
            
        )
    }
}

export default Login;