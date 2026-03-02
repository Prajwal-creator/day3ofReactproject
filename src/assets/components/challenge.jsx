import React from "react";

function Online({isonline}){
    return(
        <div>
            {isonline ? <h1>online</h1> : <h1>offline</h1>}
        </div>
    )
}

export default Online;