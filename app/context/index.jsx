'use client'

import { createContext,useContext,useState } from "react";

const AppContext = createContext();

export function AppWrapper({children}){
    const [activebutton, setactiveButton]= useState('discussion')

    
    return (
        <AppContext.Provider value={{activebutton,setactiveButton}}>
        {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}