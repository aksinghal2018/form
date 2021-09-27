import React, { Component } from 'react'

export class Events extends Component {
    constructor(props){
        super(props);
        this.state={name:"anuj"};
    }
    handler=(event)=>{
        let {name,value}=event.target;
        this.setState({[name]:value});
    }
    componentWillUnmount=()=>{
        alert("unmountData")
    }
    render() {
        return (
            <div>
                <h1>Events</h1>
                
                <input type="text" name="name" onChange={this.handler}></input><br/>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default Events
