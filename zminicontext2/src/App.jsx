import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")   // state to manage the themeMode and default vale is Light 

  const darkTheme = () => {     // we gave the function definition to change the theme mode to dark
    setThemeMode("dark")
  }
  const lightTheme = () => {    // we gave the function definition to change the theme mode to light
    setThemeMode("light")
  }

  //Actual change in theme 
  useEffect(() =>{
    document.querySelector('html').classList.remove("light","dark")  // To delete the html default theme colour in html file 
    document.querySelector('html').classList.add(themeMode) // to set theme in html through themeMode
  }, [themeMode])  // it set the themeMode accoeding to the value which is present in it

  return (
   <>
    // we got the acces to the themeMode and other function and we can pass it to the value prop of ThemeProvider
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>  
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                  <Card/>
                </div>
            </div>
        </div>
      </ThemeProvider>  
   </>
  )
}

export default App
