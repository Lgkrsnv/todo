import css from "./index.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMainThemeContext } from "../../context/MainThemeContext";
import { PageHeader, Button } from "antd";

export const Header = () => {
  const { mainTheme, setMainTheme } = useMainThemeContext();
  const changeTheme = () =>
    mainTheme === "light" ? setMainTheme("dark") : setMainTheme("light");

  const userState = useSelector((state) => state.user);

  let extraArray = [];
  if (userState.isLogin) {
    extraArray = [
      <Link to="/" key={1} className={css.link}>
        Home
      </Link>,
      <Link to="/adriana" key={2} className={css.link}>
        Адриана
      </Link>,
      <Link to="/logout" key={3} className={css.link}>
        Logout
      </Link>,
      <Button key={4} onClick={changeTheme}>Change theme</Button>,
    ];
  } else {
    extraArray = [
      <Link to="/" key={1} className={css.link}>
        Home
      </Link>,
      <Link to="/adriana" key={2} className={css.link}>
        Адриана
      </Link>,
      <Link to="/login" key={5} className={css.link}>
        Login
      </Link>,
      <Link to="/signup" key={6} className={css.link}>
        Signup
      </Link>,
      <Button key={4} onClick={changeTheme}>Change theme</Button>,
    ];
  }

  return (
    <PageHeader
      className="site-page-header"
      onBack={() => window.history.back()}
      title="Todo App"
      subTitle="achieve your goals!"
      extra={extraArray}
    />
  );
};
