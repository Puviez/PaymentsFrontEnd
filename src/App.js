import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Import React Router
// const {
//     Redirect,
//     BrowserRouter,
//     Link,
//     Switch,
//     Route,
//     browserHistory
//   } = ReactRouterDOM;

import {
    Redirect,
    BrowserRouter,
    Link,
    Switch,
    Route,
    browserHistory
} from "react-router-dom";

import Account from './components/account'
import History from './components/history'
import Home from './components/home'
import Login from './components/login'
import Main from './components/main'
import Signup from './components/signup'
import Payment from './components/payments'


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentUser: ""
        }
    }

    updateUser = (user) => {
        this.setState({
            currentUser: user
        })
    }

    toLogout = () => {
        this.setState({
          currentUser: ""
        });
      };

    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/login">
                        <Login setUser={this.updateUser}/>
                    </Route> 
                    <Route path="/home">
                        {this.state.currentUser ? (
                            <Home currentUser={this.state.currentUser} toLogout={this.toLogout} />
                        ) : (
                                <Redirect to="/login" setUser={this.userState} />
                            )}
                    </Route>
                    <Route path="/history">
                        {this.state.currentUser ? (
                            <History currentUser={this.state.currentUser} toLogout={this.toLogout} />
                        ) : (
                                <Redirect to="/login" setUser={this.userState} />
                            )}
                    </Route>
                    <Route path="/account">
                        {this.state.currentUser ? (
                            <Account currentUser={this.state.currentUser} toLogout={this.toLogout} />
                        ) : (
                                <Redirect to="/login" setUser={this.userState} />
                            )}
                    </Route>
                    <Route path="/payment" render={(props) => <Payment {...props} currentUser={this.state.currentUser} />} />
                        {/* {this.state.currentUser ? (
                            <Payment currentUser={this.state.currentUser} toLogout={this.toLogout} />
                        ) : (
                                <Redirect to="/login" setUser={this.userState} />
                            )} */}
                        {/* <Payment currentUser={this.state.currentUser} />
                    </Route> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

// ReactDOM.render(<App />, document.querySelector(".containerReact"));

export default App;