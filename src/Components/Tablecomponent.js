import React, { Component } from 'react'

export class Tablecomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tabledata:[
                {"a":1}
             ]
        }
    }
    
    loadData=()=>{
        this.state.tabledata.push({name:this.props.name,email:this.props.email,age:this.props.age,password:this.props.password})
        this.state.tabledata.map((item)=>{
            
                var parent=document.querySelector('tbody');
                var parentchild=document.createElement('tr')
                var age1=document.createElement('td')
                var name1=document.createElement('td')
                var email1=document.createElement('td')
                var password1=document.createElement('td')
                name1.appendChild(document.createTextNode(item.name))
                age1.appendChild(document.createTextNode(item.age))
                email1.appendChild(document.createTextNode(item.email))
                password1.appendChild(document.createTextNode(item.password))
                parentchild.appendChild(name1)
                parentchild.appendChild(email1)
                parentchild.appendChild(age1)
                parentchild.appendChild(password1)
                parent.appendChild(parentchild)

            })
    }
    render() {
        
        return (
            <div>

                <table className="table table-stripped">
                    <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Password
                        </th>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tablecomponent
