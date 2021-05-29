import css from "./index.module.css";
import { Link } from "react-router-dom";
import { useMainThemeContext } from "../../context/MainThemeContext";
import { PageHeader, Button } from 'antd'

export const Header = () => {
  const { mainTheme, setMainTheme } = useMainThemeContext();
  const changeTheme = () => mainTheme === "light" ? setMainTheme("dark") : setMainTheme("light");

  return (
    <PageHeader
    className="site-page-header"
    onBack={() => window.history.back()}
    title="Todo App"
    subTitle="achieve your goals!"
    extra={[
      <Link to="/" className={css.link}>
        Home
      </Link>,
      <Link to="/adriana" className={css.link}>
        Фильмы
      </Link>,
      <Button onClick={changeTheme}>Change theme</Button>
    ]}
  />

   
  )
};
