import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",    // to show some initial value like if no theme is there then light theme will be shown
    darkTheme: ()=>{},   // function to set dark theme
    lightTheme: ()=>{},  // function to set light theme
})

export const ThemeProvider = ThemeContext.Provider  //to provide the context value to the children components in different files

export default function useTheme(){
    return useContext(ThemeContext)  // custom hook to use the theme context value in different components
}