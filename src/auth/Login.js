import React, {SyntheticEvent, useState} from "react";
import { Redirect,Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { get, post } from "../helper/fetch.helper";



const Login = (props) => {
    //const {setName} = props;
    
    
    const [userName, setUsername] = useState('');
    const [userPwd, setPassword] = useState('');
    const [redirect, setRedirect] = useState(-1);
    // const [redirectadmin,setRedirectAdmin]=useState(false)

    const submit = async (e) => {
      e.preventDefault();

      

      const response = await post('http://localhost:5000/user/login', { userName: userName, userPwd: userPwd });
      console.log(response);
      if(response.success)
      {
        localStorage.setItem("token", response.data);
        const admin=await get('http://localhost:5000/user/findUserByToken',{},{"Authorization": "Bearer " + localStorage.getItem("token")})
        console.log(admin.data.role)
        
        if(admin.data.role==1) setRedirect(1);
        else setRedirect(0);
        
        
        console.log(localStorage.getItem("token"));
      }

      /*const response = await fetch('http://localhost:5000/user/login',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          //credentials: 'include',
          body: JSON.stringify({
            userName,
            userPwd
          })
      });

      const content = await response.json();
      console.log(response.status);

      // const content = await response.json();
      if(content.message === 'Đăng nhập thành công!')
      {
        setRedirect(true);
        localStorage.setItem("token", content.data);
        console.log(localStorage.getItem("token"));
      }*/
  }

  const handleUserNameChange = (e) =>{
      setUsername(e.target.value);
  }
  const handlePassChange = (e) =>{
      setPassword(e.target.value);
  }
  if(redirect==1) return <Redirect to="/admin/games"/>;
  else if (redirect==0) return <Redirect to="/user/games"/>
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
                  <label>Password</label>
                  <input
                    type="password" 
                    name="password"  
                    className="form-control" 
                    data-type="password" 
                    placeholder="***********"
                    onChange={handlePassChange}
                    />
                </div>
                <input id="login" className="btn btn-block login-btn mb-4" type="submit" value="Đăng nhập"/>
              </form>
              <Link to="/guest/forgotpass" className="forgot-password-link" textAlign= "left">Forgot password?</Link>
              <p className="login-card-footer-text"></p>
              <a href="/guest/register" className="login-card-footer-text">Register ?</a>
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