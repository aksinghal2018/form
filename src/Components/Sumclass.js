import React, { Component } from 'react'
import  '../Styles/sum.css'
export default class Sumclass extends Component {
    constructor(props){
        super(props);
        this.state={num1:0,num2:0,sum:0};
    }
    handler=(event)=>{
      let {name,value}=event.target;
      this.setState({[name]:value});
    }
    sum1=()=>{
        this.setState({sum:parseInt(this.state.num1)+parseInt(this.state.num2)});
    }
    render() {
        const styledata={
            button:{
                color:"red"
            }
        }
        return (
            <div>
                Num1: <input type="number" name="num1" onChange={this.handler}></input><br/>
                Num2: <input type="number" name="num2" onChange={this.handler} style={styledata.button}></input><br/>
                <button type="button" onClick={this.sum1} style={styledata.button}>Sum</button>
                <p>Sum is : {this.state.sum}</p>
            </div>
        )
    }
}
