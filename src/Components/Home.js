import Myfunction from "./Myfucntion"
const Home=(props)=>{
    return(
        <div>
        <h1>Home Component</h1>
        <Myfunction data1={props.technologies} data2={props.productdata}/>
        </div>
    )
}
export default Home;