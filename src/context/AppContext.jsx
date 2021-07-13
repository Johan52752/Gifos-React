import { createContext,useState } from "react";

export const AppContext=createContext();

export const AppProvider=({children})=>{
    const [darkmode,setDarkMode]=useState(false);
    return(
        <AppContext.Provider value={{darkmode,setDarkMode}}>{children}</AppContext.Provider>
    )
}