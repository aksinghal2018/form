import React,{Component} from "react";
import Button from "./Button";
import Events from "./Events";
import Sumclass from "./Sumclass";
class Myclass extends Component{

    constructor(props){
        super(props);
        this.state={name:"anuj",age:34,counter:0};
    }
    updateData=()=>{
        this.setState({name:"sumit"});
    }
    updateCounter=()=>{
        this.setState({counter:this.state.counter+1});
    }
    render(){
        return(
            <div>
                <h1>
                Class Component :{this.props.mytitle}</h1>
                <p>{this.state.name} has age {this.state.age}.</p>
                <p>{this.state.counter}</p>
                <Button label="update data" action={this.updateData}/>
                <Button label="click" action={this.updateCounter}/>
                <Events />
                
            </div>
        )
    }
}
export default Myclass;