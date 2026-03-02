import React from "react";
import Status from "./assets/components/condition";
import { useState } from "react";
import Online from "./assets/components/challenge";

function App(){
const [toggle,settoggle]=useState(false)
const [value,setvalue] =useState(false)

  return(
    <div>
      <h1>it is app</h1>
      <button type="button" onClick={()=>settoggle(()=>toggle? false : true)}>button</button>
      <Status logged={toggle}/>
      <Online isonline={value}/>
      <button type="button"onClick={()=>setvalue(()=>value? false : true)}>{value.tostring}</button>
      
    </div>
  )
}

export default App;