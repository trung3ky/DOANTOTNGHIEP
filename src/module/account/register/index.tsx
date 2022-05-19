import { ReloadOutlined } from "@ant-design/icons";
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
        label={
          <div className="label-verification">
            <span>Verification code</span>
            <span className="resend-code">
              Resend code &nbsp;
              <ReloadOutlined />
            </span>
          </div>
        }
        className="verification"
        name="verificationcode"
        rules={[
          { required: true, message: "Please input your verification code!" },
        ]}
      >
        <Input
          disabled={true}
          placeholder="Please enter the verification code"
        />
      </Form.Item>

      <Form.Item>
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
          <span className="have-account">
            Have an account? &nbsp;<Link to="./login">Sign In</Link>
          </span>
          <h1 className="title">Welcome to Shop3</h1>
          <div className="sub-content">
            <span>Đây chỉ là 1 đoạn văn bản mẫu dài hơn</span>
            <span>Đây chỉ là 1 đoạn văn bản mẫu</span>
          </div>
        </div>
        <div className="container-body">
          <FormRegister />
        </div>
        <div className="signup-other-text">
          <span></span>
          <span className="other">Or sign up with</span>
          <span></span>
        </div>
        <div className="signup-other-container">
          <div className="facebook-container">
            <img
              src="https://www.facebook.com/images/fb_icon_325x325.png"
              alt="logo-facebook"
            />
          </div>
          <div className="google-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
              alt="logo-google"
            />
          </div>
        </div>
      </div>
      <div className="slogan-container"></div>
    </div>
  );
};
