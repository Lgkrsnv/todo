import './App.css';
import {Main} from './components/Main/Main'
import { useMainThemeContext } from './context/MainThemeContext';
function App() {
  const {mainTheme} = useMainThemeContext()

  return (
    <div className={`App ${mainTheme}`}>
      <Main />
    </div>
  );
}

export default App;
