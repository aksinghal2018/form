import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Myclass from './Components/Myclass';
import Button from './Components/Button';
import Sumclass from './Components/Sumclass';
import Person from './Components/Person';
import Login from './Components/Login';
import { Todo } from './Components/Todo';
function App() {
  // const title ="NeoSoftTechnologies";
  // const latestTechnilogies=["React","Angular","Node Js"];
  // const product=[
  //   {pid:"101",pname:"A",price:1000,pquantity:1000,pfeature:"Good Design"},
  //   {pid:"102",pname:"B",price:1001,pquantity:1000,pfeature:"Good Data"},
  //   {pid:"103",pname:"C",price:1002,pquantity:1000,pfeature:"Effecient colling"},
  //   {pid:"104",pname:"D",price:1003,pquantity:1000,pfeature:"Smart Design"},
  //   {pid:"105",pname:"E",price:1004,pquantity:1000,pfeature:"Fast"},
  //   {pid:"106",pname:"F",price:1005,pquantity:1000,pfeature:"Good Design"},
  //   {pid:"107",pname:"G",price:1006,pquantity:1000,pfeature:"Good Design"},
  //   {pid:"108",pname:"H",price:1007,pquantity:1000,pfeature:"Good Design"}
  // ];
  // const clickhandler=(data)=>{
  //   alert(data);
  //}
  return (
    <div className="App">
      <Todo />
      {/* <ul>
        {latestTechnilogies.map((lat,ind)=>
        <li key={ind}>{lat}</li>
        )}
        </ul>
      <Login />
      <h1>Welcome to {title}</h1>
      <p>Here we learn Mern Stack Training.</p>
      <Home technologies={latestTechnilogies} productdata={product}/>
      <Myclass mytitle={"My Class Component"} />
      <Sumclass />
      <Person name={"sumit"} age={"34"} myclick={()=>clickhandler("clickhandler")}>
        Person Child
      </Person> */}
    </div>
  );
}

export default App;
