import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoSaga } from '../../redux/actionCreators/addTodoAC'
import { Form, Input, Button } from 'antd';
import { showUserTodos } from '../../redux/actionCreators/showUserTodosAC'

export const TodoList = () => {
  const userState = useSelector((state) => state.user);
  const todosState = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => setShowForm(!showForm);

  useEffect(() => {
    dispatch(showUserTodos(userState.username))

  }, [dispatch, userState.username])

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();
  
    const onFinish = (values) => {
      dispatch(addTodoSaga(values.text, userState.username))
      form.resetFields();
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    console.log();
  return (
    <>
      {" "}
      {userState.isLogin ? (
        <h2>Hello, {userState.username}</h2>
      ) : (
        <h2>Привет, зарегистрируйся сначала :)</h2>
      )}
      <Button
      onClick={showFormHandler}
        type="primary"
        style={{
          background: "#DFFF00",
          borderColor: "yellow",
          color: "#3A95CB",
        }}
      >
        Добавить цель
      </Button>

      <div className="container">
        <div className="wrapper">
          {userState.isLogin && showForm && (
            <Form
              {...layout}
              form={form}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Your todo"
                name="text"
                rules={[
                  {
                    required: true,
                    message: "Please input your todo!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

             
              <Form.Item {...tailLayout}>
                <Button
                  type="primary"

                  htmlType="submit"
                >
                  Добавить todo
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </div>
      <h3>Твои цели:</h3>
      <ul>
      { todosState.map(item => <li key={item._id}>{item.text}</li>)}
      </ul>
    </>
  );
};
