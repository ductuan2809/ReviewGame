
import React,{useState,useEffect} from "react";
import {get} from 'helper/fetch.helper'
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
import Select from "react-dropdown-select";
import { type } from "jquery";

function DetailAdd() {
  
  const types=[]
  const typearray=[]
  useEffect(() => {
    (
        async () => {
            const response = await get('http://localhost:5000/type/getALLType');
            if(response.success)
            {
              response.data.forEach(element => {
                let type={
                  label:element.typeName,
                  value:element.typeName,
                }
                typearray.push(type)
              });
              console.log(typearray)
            }
    }    
    )();
  },[])
  const onArrayChange=(values)=>{

    types.push(values)
    console.log(types)
    console.log(typearray)
  }
  console.log(types)
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

                        <Select 
                        placeholder="Select genre(s)"
                        addPlaceholder="+ add"
                        clearable
                        multi
                        options={typearray}
                        onChange={onArrayChange}
                          />
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
                      <label>Image</label>
                      <FormGroup>
                        <label>Select image</label>
                        <Input
                          type="file"
                        />
                        
                      </FormGroup>
                      
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
