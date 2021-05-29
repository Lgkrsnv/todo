// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../../redux/actionCreators/deleteUserAC";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const Logout = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = async () => {
      dispatch(deleteUser());
      if (!userState.isLogin) {
        history.push("/login");
      }
  };

  return (
    <>
      <h3 style={{marginTop: '50px'}}>Уверены, что хотите выйти?</h3>
      <Button type="primary" onClick={logout} size={"large"} icon={<LogoutOutlined />}>
        ВЫЙТИ{" "}
      </Button>
    </>
  );
};
