import React from 'react';
import NavButton from './navbutton'
import '../App.css'

class Main extends React.Component {
    render () {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <NavButton nav={"/login"} text={"Login"} />
                    <NavButton nav={"/signup"} text={"Sign Up"} />        
                </div>    
            </div>
        )
    }
}

export default Main;