//passing data nd function from parent to child component
import React from 'react'
import Child from './Child';
import { useState } from 'react';
function Parent() {
  //we can pass data by using "usestate"
  const [first, setfirst ]=useState("Vaishnavi")  //first=vaishnavi1 by the help of setfirst we update the state 
  return (
    <div>
        <p>Parent</p> 
        <Child name={first} setName={setfirst}/>           
    </div>   //here we wite attr and it will show in child compo.
  )   //so in parent we write data nd access it into child component.
}


export default Parent;