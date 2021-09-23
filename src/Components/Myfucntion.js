const Myfunction=(props)=>{
    return(
        <div>
            <hr/>
        <h1>Myfunction Component</h1>
        <ul>
        {        props.data1.map(latest=>
        <li>{latest}</li>
        )};
      </ul>
      <table border={1}>
        <thead>
          <th>pid</th>
          <th>pname</th>
          <th>price</th>
          <th>pquantity</th>
          <th>pfeature</th>
        </thead>
        <tbody>
          {props.data2.map(products=>
          <tr>
            <td>{products.pid}</td>
            <td>{products.pname}</td>
            <td>{products.price}</td>
            <td>{products.pquantity}</td>
            <td>{products.pfeature}</td></tr>
            )}
        </tbody>
      </table>
      <hr />
      </div>
    )
}
export default Myfunction