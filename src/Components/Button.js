const Button=({action,label})=>{
    return <button type="button" onClick={()=>action()}>{label}</button>;
}
export default Button;