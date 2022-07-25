import { createContext, useContext, useState } from "react";

export const themes ={
    dark:{
        id:1,
        bg:"#202121",
        font:"#ffffff"
    },
    light:{
        id:2,
        bg:'#ffffff',
        font:"#000000"
    }
}

export const ThemeContext = createContext();
export const ThemeProvider = ({children})=>{
    const [ActiveTheme, setActiveTheme] = useState(themes.dark)

    return(
        <ThemeContext.Provider value={{ActiveTheme,setActiveTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    return useContext(ThemeContext);
}