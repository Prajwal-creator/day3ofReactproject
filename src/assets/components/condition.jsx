import React from "react";

function Status({logged}){
    return(
        <div>
            {logged ? <h1>welcome Back</h1> : <h1>loggined failed{logged}</h1>}
        </div>
    );
}

export default Status;