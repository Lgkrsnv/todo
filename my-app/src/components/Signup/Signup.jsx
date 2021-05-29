import { useDispatch, useSelector } from 'react-redux';
import { signupUserSaga } from '../../redux/actionCreators/addUserAC';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';

export const Signup = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

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



  const onFinish = async (values) => {
    console.log('Success:', values);
    dispatch(signupUserSaga(values));
    history.push('/')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <div className="wrapper">
        {!userState.isLogin && <Form
          {...layout}
          name="basic"

          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1>Signup form</h1>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
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
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" style={{ background: '#DFFF00', borderColor: "yellow" }} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>}
      </div>
    </div>
  )

}
