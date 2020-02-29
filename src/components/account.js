import React from 'react';
import Navlinks from './navbar'

class Account extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            username: this.props.currentUser.username,
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
            cards: this.props.currentUser.cards,
            addCard: false
        }
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    // Edit the User 
    handleEdit = event => {
        event.preventDefault();
        fetch('http://localhost:3000/users/' + this.props.currentUser._id, {
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email
            }),
            method: "PUT",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
          .then(editedUser => {
              return editedUser.json();
          })
          .then(jsonedEditedUser => {
              console.log(jsonedEditedUser);
          })
          .catch(error => console.log(error));
    }

    toggleAddCard = () => {
        this.setState({
            addCard: !this.state.addCard
        })
    }

    render () {
        return (
            <React.Fragment>
                <div className="auth-inner">
                    <form onSubmit={this.handleEdit}>
                        <div className="form-group">
                        <label htmlFor='username'>Username: </label>
                        <input readOnly
                            id='username'
                            type='text'
                            value={this.state.username}
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
                            value='Edit Details'
                            className="btn btn-primary btn-block"
                        />
                    </form>
                </div>
                <Navlinks toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}

export default Account;