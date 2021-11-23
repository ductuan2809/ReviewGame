import React, {SyntheticEvent, useState} from "react";
import { Redirect,Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";



const Login = (props) => {
    const {setName } = props;
    const [userName, setUsername] = useState('');
    const [userPwd, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
      e.preventDefault();

      // const response = await fetch('https://lmsg03.azurewebsites.net/api/Authenticate/login',{
      //     method: 'POST',
      //     headers: {'Content-Type': 'application/json'},
      //     credentials: 'include',
      //     body: JSON.stringify({
      //       userName,
      //       userPwd
      //     })
      // });

      // const content = await response.json();
      // console.log(content.status)

      // // const content = await response.json();
      // if(content.status === 200)
      // {
      //   setRedirect(true);
      //   setName(userName);
      // }
  }

  const handleUserNameChange = (e) =>{
      setUsername(e.target.value);
  }
  const handlePassChange = (e) =>{
      setPassword(e.target.value);
  }
  // if(redirect)
  //   return <Redirect to="/"/>;

    return (
      <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader className="mb-5">
              <h5 className="card-category">Login</h5>
              <CardTitle tag="h3">
                Hãy điền đầy đủ thông tin để ĐĂNG NHẬP !
              </CardTitle>
            </CardHeader>
            <CardBody>
            <form method="post" onSubmit={submit}>
              <div className="form-group">
                 <label>Tài khoản</label>
                  <input 
                    type="text" 
                    name="username" 
                    className="form-control" 
                    placeholder="Your Account"
                    onChange={handleUserNameChange}
                    />
              </div>
                <div className="form-group mb-4">
                  <label>Mật khẩu</label>
                  <input
                    type="password" 
                    name="password"  
                    className="form-control" 
                    data-type="password" 
                    placeholder="***********"
                    onChange={handlePassChange}
                    />
                </div>
                <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Đăng nhập"  />
              </form>
              <Link to="#!" className="forgot-password-link" textAlign= "left">Forgot password?</Link>
              <p className="login-card-footer-text"></p>
              <a href="/admin/register" className="login-card-footer-text">Register ?</a>
              <p className="login-card-footer-text"></p>
              <Link to="/" className="text-reset">Back to Home!</Link><p />
              <nav className="login-card-footer-nav">
                <a href="https://www.facebook.com/phamduy.lap.16/">Contact me for more information</a>
              </nav>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    );
};

export default Login;