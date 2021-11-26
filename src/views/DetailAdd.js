
import React from "react";

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

function DetailAdd() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Add games</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          
                          
                          placeholder="Game's name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Score</label>
                        <Input
                          defaultValue="0"
                          min="0"
                          max="10"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                 </Row>
                 <Row>
            

                    <Col  md="12">
                      <FormGroup>
                        <label >
                          Nhà phát hành
                        </label>
                        <Input placeholder="Publisher's name" type="text" />
                      </FormGroup>
                    </Col>
                 </Row>
                    <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Thể loại</label>

                        <Input placeholder="Genre(s)" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Review</label>

                        <Input placeholder="Review" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  
                  
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Sumary</label>
                        <Input
                          cols="80"
                          
                          placeholder="Here can be your sumary"
                          rows="5"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="9">
                      <FormGroup>
                        <label>Image</label>
                        <Input
                          cols="80"
                          
                          placeholder="Here can be your sumary"
                          
                          type="text"
                        />
                        
                      </FormGroup>
                      
                    </Col>
                    <Col md="2">
                    <label></label>
                    <Button>Chọn</Button>
                    </Col>
                  </Row>
                  
                  
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default DetailAdd;
