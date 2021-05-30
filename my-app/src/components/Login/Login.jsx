import { useDispatch, useSelector } from "react-redux";
import { loginUserSaga } from "../../redux/actionCreators/addUserAC";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";

import { Form, Input, Button } from "antd";
import { useState } from "react";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const Login = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState(false);
  const onFinish = async (values) => {
    dispatch(loginUserSaga(values));

    // if (!userState.isLogin) {
    //   onFinishFailed();
    // } else {
      // localStorage.setItem('USER', { username: userState.username });
      history.push('/');
    // }
  };

  const onFinishFailed = () => {
    setError(true);
  };

  return (
    <div className="container">
      <div className="wrapper">
        {!userState.isLogin && (
          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <h1>Login form</h1>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
        {error && <div style={{color: 'red'}}>Check your username and password please</div>}
      </div>
    </div>
  );
};
