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
            //   localStorage.setItem('user',jsonedUser._id)
              this.setState({
                currentUser: jsonedUser
              })
              localStorage.setItem('user',JSON.stringify(this.state.currentUser));

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
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='username'>Username</label>
                                <input
                                    id='username'
                                    type='text'
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='password'>Password</label>
                                <input
                                    id='password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <input
                                type='submit'
                                value='Submit'
                                className="btn btn-primary btn-block"
                            />
                        </form>
                        <NavButton nav={"/"} text={"Back"} />
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default Login;