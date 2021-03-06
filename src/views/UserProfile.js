
import { get } from "helper/fetch.helper";
import React, {SyntheticEvent, useState, useEffect} from "react"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  //const token = localStorage.getItem('token');
  //const AuthStr = 'Bearer '.concat(token);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [dateofBirth, setdoB] = useState('');
  const [gender, setGender] = useState('');
  //Date({ dateFormat: 'mm-dd-yyyy'});
  const [redirect, setRedirect] = useState();
  const [gioitinh, setGT] = useState('');
  var sex;
  //const [dateofBirth, setDate] = useState(Date);
  //var gd_female = false;
  var date ;

  useEffect(() => {
    (
        async () => {
            /*const response = await fetch('http://localhost:5000/user/findUserByToken',{
                method: 'GET',
                headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
            });
            const content = await response.json();*/
            const response = await get('http://localhost:5000/user/findUserByToken',{},{"Authorization": "Bearer " + localStorage.getItem("token")});
            if(response.success)
            {
              var d = response.data.dateofBirth;
              
              setName(response.data.name);
              setEmail(response.data.email);
              setUsername(response.data.userName);
              setPhone(response.data.phone);
              setGender(response.data.gender.toString());
              console.log(gender);

              setdoB(new Date(d).toISOString().split("T")[0]);
            }
            if(response.data.gender.toString() === '0')
            {
              setGT('male');
            }
            else {
              setGT('female');
            }
            //console.log(gd);
    }    
    )();
  },[])


  const onChangeOptions1 = (e) =>{
    setGT(e.target.value);
    setGender(0);
  }
  const onChangeOptions2 = (e) =>{
    setGT(e.target.value);
    setGender(1);
  }

  const handleRadioButton_Male = (e) =>{
    setGender(0);
  }
  const handleRadioButton_Female = (e) =>{
    setGender(1);
  }

  const handleSetDOB = (e) =>{
    setdoB(e.target.value.toString());
    //date = Date.parse(dateofBirth.toString());
    //setdoB(new Date(dateofBirth));
  }

  const Save = async (e) => {
    // console.log(typeof(name));
    // console.log(typeof(email));
    // console.log(typeof(phone));
    // console.log(typeof(gender));
    // console.log(typeof(dateofBirth));
    e.preventDefault();
    const response = await fetch('http://localhost:5000/user/changeInfo',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',"Authorization": "Bearer " + localStorage.getItem("token")},
        body: JSON.stringify({
          name: name,
          //email: email,
          phone: phone,
          gender: gender,
          dateofBirth: dateofBirth
        })
    });

    const content = await response.json();

    if(content.message === '?????i th??ng tin th??nh c??ng!')
    {
      setRedirect(true);
      console.log("Success");
    }
    else console.log("Fail!");
    alert(content.message)
} 

  return (
    <>
      <div className="content">
        <form onSubmit = {Save}>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue={username}
                          placeholder="Username"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input defaultValue={email} placeholder={email} type="email" onChange={e => setEmail(e.target.value.toString())} readOnly />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Full Name</label>
                        <Input
                          defaultValue={name}
                          placeholder=""
                          type="text"
                          onChange={e => setName(e.target.value.toString())}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Date of Birth</label>
                        <Input
                          defaultValue={dateofBirth}
                          //placeholder="dd-mm-yyyy"
                          type="date"
                          onChange={handleSetDOB}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col className="pl-md-1" md="12">
                      <Row>
                      <Col  className="pl-md-1" md="1">
                        </Col>
                        <Col  className="pl-md-1" md="2">
                        <label>Gender</label>
                        </Col>
                        <Col className="pl-md-1" md="3">
                          </Col>
                          <Col className="pl-md-1" md="3">
                            <Input type="radio" value="MALE" name="gender"/> Male
                          </Col>
                          <Col className="pl-md-1" md="3">
                            <Input type="radio" value="FEMALE" name="gender"/> Male
                          </Col>
                      </Row>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="None"
                          placeholder="None"
                          type="text"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="0,5">
                      <FormGroup>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Gender</label>
                        <div className="radio-buttons">
                          <Row>
                            <Col className="pl-md-1">
                              </Col>
                            <Col className="pl-md-1">
                              <Input 
                              type="radio" 
                              value="male" 
                              name="gender"
                              checked={gioitinh === 'male'}
                              //defaultChecked name="gender"
                              onChange={onChangeOptions1}
                              /> Male
                            </Col>
                            <Col className="pl-md-1">
                              <Input 
                              type="radio" 
                              value="female" 
                              name="gender"
                              checked={gioitinh === 'female'}
                             // defaultChecked name="gender"
                              onChange={onChangeOptions2}
                              /> Female
                            </Col>
                          </Row>
                          </div>
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label>Phone</label>
                        <Input defaultValue={phone} placeholder={phone} type="text" onChange={e => setPhone(e.target.value.toString())}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          cols="80"
                          defaultValue="H??? l?? m??o m??o meo m??o meo."
                          placeholder="H??? l?? m??o m??o meo m??o meo"
                          rows="4"
                          type="textarea"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type='submit'>
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        </form>
      </div>
    </>
  );
}

export default UserProfile;
