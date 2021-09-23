import React, { Component } from 'react'
export class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            Sno:0,
            task:"1",
            id:"1"
        };
    }
    adddtask=(event)=>{
        let {name,value}=event.target;
        this.setState({[name]:value,id:value});

    }
    deletetasklist=(event)=>{
        var id=event.target.id;
        //alert(id)
        document.getElementById(id).parentNode.parentNode.remove();
        this.updateserial()
    }
    addtasklist=()=>{
        //alert(this.state.task)
        var a=document.getElementById("todolistbody");
        var elem=document.createElement('tr');
        elem.className="listclass";
        var elem1=document.createElement('th');
        var elem2=document.createElement('th');
        var elem3=document.createElement('th');
        var elem4=document.createElement('button');
        var elem5=document.createElement('button');
        elem1.appendChild(document.createTextNode(this.state.Sno));
        elem2.appendChild(document.createTextNode(this.state.task));
        elem4.appendChild(document.createTextNode('Delete'));
        elem4.setAttribute('id',this.state.Sno);
       // alert(elem4.getAttribute('id'))
        elem4.addEventListener("click", this.deletetasklist);
        elem5.appendChild(document.createTextNode('Update'));
        elem5.addEventListener("click", this.updatechild);
        elem5.setAttribute('id',this.state.Sno);
        elem3.appendChild(elem4)
        elem3.appendChild(elem5)
        elem.appendChild(elem1)
        elem.appendChild(elem2)
        elem.appendChild(elem3)
       // elem.setAttribute('id',this.state.id);
        a.appendChild(elem);
        this.state.Sno++;
        this.updateserial()
    }
    updateserial(){
        var tableFields=document.getElementById("todolistbody");
        var children = tableFields.children;
        for (var i = 0; i < children.length; i++) {
        var tableChild = children[i];
        tableChild.children[0].innerHTML=i;
        }
    }
    
    updatechild(event){
        var id=event.target.id;
        var elem=document.getElementById(event.target.id);
        var elemparent=elem.parentNode.parentNode.children;
        var elem1=document.createElement('input');
        elem1.type="text";
        elem1.setAttribute('id','newdata');
        elem1.setAttribute('value',elemparent[1].innerHTML);
        elemparent[1].innerHTML="";
        elemparent[1].appendChild(elem1);
        var elem2=document.createElement('button');
        var button1=(elemparent[2].children[1])
        button1.setAttribute('disabled','true');
        elem1.addEventListener("focusout",function(){
           // alert(button1.innerHTML)
            button1.removeAttribute('disabled');
            var data=elem1.value;
            
            elemparent[1].innerHTML="";
            elemparent[1].appendChild(document.createTextNode(data));
        });
        // elem2.appendChild(document.createTextNode('Update'));
        // elemparent[1].appendChild(elem2);
        
    }
    render() {
        //Sno=0
        return (
            <div>
                <h1>Todo List</h1>
                <h4>Add List</h4>
                Title:<input type="text" onChange={this.adddtask} placeholder="add task" id="titledata" name="task"/>
                <button type="button" onClick={this.addtasklist}>
                    Add
                </button>
                <ul id="todolist">
                    </ul>
                    <table id="todolist">
                        <thead>
                        <tr><th>Sno</th><th>Task</th><th>Events</th></tr></thead>
                        <tbody id="todolistbody">

                        </tbody>
                        
                        </table>
                <hr/>
            </div>
        )
    }
}

export default Todo
