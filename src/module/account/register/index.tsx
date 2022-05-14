import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

const FormRegister = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Phone number"
        name="phonenumber"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="+123456789" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="6+ strong character" />
      </Form.Item>

      <Form.Item
        label="Verification code"
        name="verificationcode"
        rules={[
          { required: true, message: "Please input your verification code!" },
        ]}
      >
        <Input placeholder="Please enter the verification code" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export const Register = () => {
  return (
    <div className="register">
      <div className="form-register-container">
        <div className="container-header">
          <span>
            Have an account?<Link to="./login">Sign In</Link>
          </span>
          <h1>Welcome to Shop3</h1>
          <div className="">
            <span>Đây chỉ là 1 đoạn văn bản mẫu dài hơn</span>
            <span>Đây chỉ là 1 đoạn văn bản mẫu</span>
          </div>
        </div>
        <div className="container-body">
          <FormRegister />
        </div>
      </div>
      <div className="slogan-container"></div>
    </div>
  );
};
