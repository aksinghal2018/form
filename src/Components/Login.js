import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={islogin:true};
    }
    render() {
        let isloginbutton = this.state.islogin;
        let button;
        if(isloginbutton){
            button=<button type="button">Login</button>
        }
        else{
            button=<button type="button">Logout</button>
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}

export default Login
