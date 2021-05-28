import './App.css';
import {Main} from './components/Main/Main'
import {Header} from './components/Header/Header'
import { useMainThemeContext } from './context/MainThemeContext';
function App() {
  const {mainTheme} = useMainThemeContext()

  return (
    <div className={`App ${mainTheme}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
