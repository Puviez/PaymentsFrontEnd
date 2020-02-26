import React from 'react';
import NavButton from './navbutton'

class Main extends React.Component {
    render () {
        return (
            <React.Fragment>
                <NavButton nav={"/login"} text={"Login"} />
                <NavButton nav={"/signup"} text={"Sign Up"} />
            </React.Fragment>
        )
    }
}

export default Main;