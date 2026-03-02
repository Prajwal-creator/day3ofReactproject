import React from "react";
import Status from "./assets/components/condition";
import { useState } from "react";

function App(){
const [toggle,settoggle]=useState(false)

  return(
    <div>
      <h1>it is app</h1>
      <button type="button" onClick={()=>settoggle(()=>toggle? false : true)}>button</button>
      <Status logged={toggle}/>
      
      
    </div>
  )
}

export default App;