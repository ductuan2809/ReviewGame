import React, {SyntheticEvent, useState} from "react";
import { Redirect,Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";


const ResetPassword = () => {
    const [redirect, setRedirect] = useState(false);
    const [confirmNewPassword, setconfirmNewPassword] = useState('');
    const [newPassword, setnewPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        // const token = GetURLParameter('token')
        // const email = GetURLParameter('email')
        // const response = await fetch('https://lmsg03.azurewebsites.net/api/Authenticate/resetpassword',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     credentials: 'include',
        //     body: JSON.stringify({
        //         newPassword,
        //         confirmNewPassword,
        //         email,
        //         token
        //     })
        // });

        // const content = await response.json();

        // if(content.status === '200')
        // {
        //     setRedirect(true);
        //     alert(content.message)
        //     //localStorage.setItem('username', content.message)
        // }else
        // {
        //     setRedirect(false);
        //     alert(content.message)
        // }     
    }
    const GetURLParameter = (sParam) =>{
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return (sParameterName[1].toString());
            }
        }
    }
    // if(redirect)
    //     return <Redirect to="/login"/>;

    return (           
      <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader className="mb-5">
              <h5 className="card-category">Reset Password</h5>
              <CardTitle tag="h3">
                Hãy điền mật khẩu mới cho tài khoản của bạn !
              </CardTitle>
            </CardHeader>
            <CardBody>
            <form onSubmit={submit}>
            <div className="form-group">
                 <label>New Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="**************"
                    onChange={e => setnewPassword(e.target.value)}
                    />
              </div>
              <div className="form-group">
                 <label>Confirm New Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="**************"
                    onChange={e => setconfirmNewPassword(e.target.value)}
                    />
              </div>
              <input id="resetpass" className="btn btn-block login-btn mb-4" type="submit" defaultValue="Submit"  />
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

export default ResetPassword;

