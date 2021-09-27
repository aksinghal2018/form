import React, { Component } from 'react'
import Tablecomponent from './Tablecomponent';
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForAge=RegExp(/^[0-9]+$/);
const regForMobile=RegExp(/^[6-9]{1}[0-9]{9}$/);
export class ValidationForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:null,
            email:null,
            Age:null,
            password:null,
            Mobile:null,
            Status:"false",
            errors:{
                name:'',
                email:'',
                age:'',
                password:'',
                cpassword:'',
                mobile:''
            }
        }
    }
    handler=(event)=>{
        const {name,value}=event.target;
        let errors=this.state.errors;
        this.setState({Status:"true"})
        switch(name){
            case 'name':
                    errors.name=value.length==0?'name field not be empty':'';
                    break;
            case 'email':
                errors.email=regForEmail.test(value)?'':'Email is not valid';
                break;
            case 'age':
                errors.age=regForAge.test(value)?'':'Age should be a number';
                    break;
            case 'password':
                    errors.password=value.length<8?'Password must me 8 chanrater long':'';
                    break;
            case 'cpassword':
                    value!=this.state.password?(errors.cpassword='confirm password not match'):(errors.cpassword='');
                    break;
            case 'mobile':
                errors.mobile=regForMobile.test(value)?'':'Mobile number is not valid';
                break;
                break;
        }
        this.setState({errors,[name]:value},()=>{
            console.log(errors)
        })
    }
        formSubmit=(event)=>{
            event.preventDefault();
            if(this.validate(this.state.errors))
            {
                alert("Valid Form");
                Tablecomponent.loadData();
            }
            else {
                alert("Invalid Form");
            }
         }
          validate=(errors)=>{
             let valid=true;
                if(this.state.name==null){
                    this.state.errors.name="name field not be empty";
                }
             Object.values(errors).forEach((val)=> (this.state.Status=="false") && (valid=false) || val.length >0 && (valid=false));
             return valid;
         }
    
    render() {
        const {errors}=this.state;
        return (
            <div className="container" style={{height:"600px",backgroundImage:'url("../Images/background.jpg")',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
                <h2 className=" " style={{}}> Form Validation</h2>
                <form className="container p-2" style={{marginTop:"40px",width:"40%",border:"2px solid black",borderRadius:"20px",backgroundImage:'url("../Images/images.jpg")'}} onSubmit={this.formSubmit}>
                <div className="form-group row mt-4">
                <label htmlFor="name" className="col-sm-2 col-form-label text-left">Name:</label> 
                <div className="col-sm-8 ">
                   <input type="text" id="name" className="form-control " name="name" onChange={this.handler} />{errors.name.length>0 && 
            <div className="alert alert-danger" role="alert">
            {errors.name}
          </div>}</div></div>
            <div className="form-group row p-2">
                <label htmlFor="email" className="col-sm-2 col-form-label text-left">Email:</label> 
                <div className="col-sm-8 ">
             <input type="text" id="email" className="form-control" name="email" onChange={this.handler}/> {errors.email.length>0 && 
            <div className="alert alert-danger" role="alert">
            {errors.email}
          </div>}</div>
            </div>
            <div className="form-group row p-2">
                <label htmlFor="age" className="col-sm-2 col-form-label text-left">Age:</label> 
                <div className="col-sm-8 ">
            <input type="text" id="age" className="form-control" name="age" onChange={this.handler} />{errors.age.length>0 && 
            <div className="alert alert-danger" role="alert">
            {errors.age}
          </div>}</div>
            </div>
            <div className="form-group row p-2">
                <label htmlFor="password" className="col-sm-2 col-form-label text-left">Password:</label> 
                <div className="col-sm-8 ">
             <input type="password" id="password" className="form-control" name="password" onChange={this.handler}/>
            {errors.password.length>0 && 
            <div className="alert alert-danger" role="alert">
            {errors.password}
          </div>}</div>
            </div>
            
            <div className="form-group row p-2">
                <label htmlFor="cpassword" className="col-sm-2 col-form-label text-left">Confirm Password:</label> 
                <div className="col-sm-8 ">
            <input type="password" id="cpassword" className="form-control" name="cpassword" onChange={this.handler}/>
            {errors.cpassword.length>0 && 
            <div className="alert alert-danger" role="alert">
            {errors.cpassword}
          </div>}</div>
            </div>
            
            <input type="submit" className="btn btn-primary" value="submit"/>
                </form>
                <div  className="container" style={{marginLeft:"-450px",marginTop:"100px"}}>
                <Tablecomponent name={this.state.name} email={this.state.email} age={this.state.Age} password={this.state.password} />
                </div>
            </div>
        )
    }
}

export default ValidationForm
