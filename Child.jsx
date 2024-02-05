import React from 'react'

function Child(props) {   //here we read name by "props" nd we can pass data by using "state"
  console.log(props);
  return (   // here we write data but it should comes from Parent
    <div>  
      <p>Child {props.name} </p>  
     <button onClick={()=>props.setName("Nishika")}>Click me</button>  
      </div> //here we update vaishnavi to nishika
    )
}

export default Child;