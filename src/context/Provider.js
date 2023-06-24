import { useState } from "react";
import userContext from "./userContext";

const Provider = (props)=>{
    let [user, setUser] = useState({});

    return(
        <userContext.Provider value={{user, setUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export default Provider;