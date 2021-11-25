import React, {SyntheticEvent, useState} from "react";
import { Redirect,Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";



const ChangePassword = () => {
    //const {setName} = props;
    
    const [oldPassword, setoldPassword] = useState('');
    const [newPassword, setnewPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
      e.preventDefault();

      const response = await fetch('http://localhost:5000/user/changePassword',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',"Authorization": "Bearer " + localStorage.getItem("token")},
        body: JSON.stringify({
            oldPassword,
            newPassword,
            confirmPassword
        })
    });

      const content = await response.json();
      console.log(content);

      // const content = await response.json();
      if(content.message === 'Đăng nhập thành công!')
      {
        setRedirect(true);
        localStorage.setItem("token", content.data);
        console.log(localStorage.getItem("token"));
      }
  }

  if(redirect)
    return <Redirect to="/"/>;

    return (
      <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader className="mb-5">
              <h5 className="card-category">Change Password</h5>
              <CardTitle tag="h3">
                Hãy điền thông tin để đổi mật khẩu !
              </CardTitle>
            </CardHeader>
            <CardBody>
            <form method="post" onSubmit={submit}>
              <div className="form-group">
                 <label>Mật khẩu cũ</label>
                  <input 
                    type="password" 
                    name="oldpass" 
                    className="form-control" 
                    placeholder="***********"
                    onChange={e => setoldPassword(e.target.value.toString())}
                    />
              </div>
                <div className="form-group mb-4">
                  <label>Mật khẩu mới</label>
                  <input
                    type="password" 
                    name="newpass"  
                    className="form-control" 
                    data-type="password" 
                    placeholder="***********"
                    onChange={e => setnewPassword(e.target.value.toString())}
                    />
                </div>
                <div className="form-group mb-4">
                  <label>Xác nhận mật khẩu mới</label>
                  <input
                    type="password" 
                    name="confirmnewpass"  
                    className="form-control" 
                    data-type="password" 
                    placeholder="***********"
                    onChange={e => setconfirmPassword(e.target.value.toString())}
                    />
                </div>
                <input name="changepass" id="changepass" className="btn btn-block login-btn mb-4" type="submit" defaultValue="Confirm"  />
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

export default ChangePassword;