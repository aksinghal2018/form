import React, { Component } from 'react'

export class Person extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <p onClick={this.props.myclick} >My name is {this.props.name} and My age is {this.props.age} ! {this.props.children}</p>
            </div>
        )
    }
}

export default Person

