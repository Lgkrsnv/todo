import css from "./index.module.css";
import { Link } from "react-router-dom";
import { useMainThemeContext } from "../../context/MainThemeContext";

export const Header = () => {
  const { mainTheme, setMainTheme } = useMainThemeContext();
  const changeTheme = () => mainTheme === "light" ? setMainTheme("dark") : setMainTheme("light");

  return (
    <header>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/adriana" className={css.link}>
        Фильмы
      </Link>
      <button onClick={changeTheme}>Change theme</button>
    </header>
  );
};
