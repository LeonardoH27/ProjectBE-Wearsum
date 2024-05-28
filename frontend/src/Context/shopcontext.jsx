import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const shopcontext = createContext(null);

const shopcontextprovider =(props) =>{
    const contextvalue = {all_product}
    return (
        <shopcontext.Provider value={contextvalue}>
            {props.children}
        </shopcontext.Provider>
    )
}

export default shopcontextprovider;