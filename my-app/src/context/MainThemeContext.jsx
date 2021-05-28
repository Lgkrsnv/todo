const { createContext, useContext,useState } = require("react");


//create context
const mainThemeContext = createContext();


//сщзадим компонет-обертку. компонент-провайдер

export const MainThemeContextProvider = ({children}) => {
  const [mainTheme, setMainTheme] = useState('light');
  return (
    <>
      <mainThemeContext.Provider value={{mainTheme, setMainTheme}}>
        {children}
      </mainThemeContext.Provider>
    </>
  )
}

export const useMainThemeContext = () => useContext(mainThemeContext)
