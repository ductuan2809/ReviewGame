import React, { SyntheticEvent, useState } from 'react';
import { Redirect,Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

const Register = () => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userPwd, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [dateofBirth, setDateofBirth] = useState('');
    const [gender, setGender] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        // // const response = 
        // await fetch('https://lmsg03.azurewebsites.net/api/Authenticate/register',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //       userName,
        //       userPwd,
        //       confirmPassword,
        //       email,
        //       name,
        //       phone,
        //       gender,
        //       dateofBirth
        //     })
        // });
        // setRedirect(true);
        // if(userName || userPwd || email || confirmPassword || name || phone ||  gender || dateofBirth ==='')
        // {
        //     alert("Bạn vui lòng nhập đầy đủ thông tin !")
        // }
        // // const content = await response.json();
    }

    // if(redirect)
    //     return <Redirect to="/login"/>;

    return (
      <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader className="mb-5">
              <h5 className="card-category">Register</h5>
              <CardTitle tag="h3">
                Hãy điền đầy đủ thông tin để ĐĂNG KÝ !
              </CardTitle>
            </CardHeader>
            <CardBody>
            <form method="post" onSubmit={submit}>
              <div className="form-group">
                 <label>Username</label>
                  <input 
                    type="text" 
                    name="username" 
                    className="form-control" 
                    placeholder="Your Account"
                    onChange={e => setUsername(e.target.value)}
                    />
              </div>
              <div className="form-group">
                 <label>Email</label>
                  <input 
                    type="text" 
                    name="email" 
                    className="form-control"
                    data-type="email" 
                    placeholder="Your Email"
                    onChange={e => setEmail(e.target.value)}
                    />
              </div>
                <div className="form-group mb-4">
                  <label>Password</label>
                  <input
                    type="password" 
                    name="password"  
                    className="form-control" 
                    data-type="password" 
                    placeholder="**************"
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group mb-4">
                  <label>Confirm Password</label>
                  <input
                    type="password" 
                    name="repassword"  
                    className="form-control" 
                    data-type="password" 
                    placeholder="**************"
                    onChange={e => setConfirmpassword(e.target.value)}
                    />
                </div>
                <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" defaultValue="Register"  />
              </form>
              <Link to="#!" className="forgot-password-link" textAlign= "left">Forgot password?</Link>
              <p className="login-card-footer-text"></p>
              <a href="/admin/login" className="login-card-footer-text">Login ?</a>
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

export default Register;