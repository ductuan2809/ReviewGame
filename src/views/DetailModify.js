
import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react/cjs/react.development";
import ReactPaginate from "react-paginate";
import '../views/pagination.css'
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
  Table,
} from "reactstrap";
import { get, post } from "../helper/fetch.helper";
import Select from "react-dropdown-select";


function DetailModify(props) {
  //comments
  const {_id } = props;
  const commentarray=[
    
  ]
  const types=[]
  const [typearray,setTypeArray]=useState([])
  const [scdtypearray,setScdtypearray]=useState([])
  const termarray=[]
  const scdtermarray=[]
  const[comments,setcomments]=useState(commentarray.slice(0,50))
  const[pagenumber,setpageNumber]=useState(0)
  const cmtPerPage=3
  const prevpage=pagenumber*cmtPerPage
  const[score, setScore]=useState('');
  
  const[image, setImage]=useState('');
  const[result, setResult]=useState({});
  const[evaluates, setEvaluates]=useState([]);

  
  const onArrayChange=(values)=>{

    types.push(values)
    
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

useEffect(() => {
  (    
      async () => {               
        const id = GetURLParameter('id')
        const response = await get('http://localhost:5000/game/getGameDetail', { id: id });
        console.log(response);
        
        if (response.success) {
          //làm gì đó
          setResult(response.data);
          console.log(result);
          let gameTypes = "|| ";
          response.data.types.forEach(element => {
            let type ={label:element,value:element}
            termarray.push(type)
          });
          setTypeArray(termarray)
          console.log(typearray)
          setScore(response.data.score.toString() + "/10");
          setImage(response.data.images[0]);
        } else {

        }     


        //get game type
        const response2 = await get('http://localhost:5000/evaluate/getEvaluateOfGame', { gID: id });
        console.log(response2);

        if (response2.success) {
          //làm gì đó
          setEvaluates(response2.data)
        } else {

        }   
        const responses = await get('http://localhost:5000/type/getALLType');
            if(responses.success)
            {
              responses.data.forEach(element => {
                let type={
                  label:element.typeName,
                  value:element.typeName,
                }
                scdtermarray.push(type)
              });
              setScdtypearray(scdtermarray)
              console.log(scdtypearray)
            } 
      }
  )();
}, [])



  
  const displayCmt=evaluates.slice(prevpage,prevpage+cmtPerPage).map((item)=>{
    return(
      <Form >
                <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>{item.name}</label>
                        
                        <div className="form-control">
                        {new Date(item.dateEvaluate).toISOString().split("T")[0]}
                  
                        </div>
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Score</label>

                        <div className="form-control">
                        {item.score}/10
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <div className="form-control">
                        {item.comment}
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>

    )
  })

  const pageCount=Math.ceil(evaluates.length/cmtPerPage)

  const changePage=({selected})=>{
        setpageNumber(selected);
  }
  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Game Details</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    
                  <Col  md="12">
                      <FormGroup>
                        <label >
                          Tên Game
                        </label>
                        <Input
                          defaultValue={result.name}
                          
                          type="text"
                        />
                        
                      </FormGroup>
                    </Col>
                    
                    <Col  md="12">
                      <FormGroup>
                        <label >
                          Nhà phát hành
                        </label>
                        <Input
                          defaultValue={result.publisher}
                          
                          type="text"
                        />
                        
                      </FormGroup>
                    </Col>
                    <Col  md="12">
                      <FormGroup>
                        <label >
                          Review
                        </label>
                        <Input
                          defaultValue={result.review}
                          
                          type="text"
                        />
                        
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    
                    <Col  md="12">
                      <FormGroup>
                        <label>User's Score</label>
                        <Input
                          defaultValue={score}
                          min="0"
                          max="10"
                          step="any"
                          type="number"
                        />
                        
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Thể loại</label>
                        <Select 
                        checked={typearray}
                        keepSelectedInList
                        values={typearray}
                        addPlaceholder="+ add"
                        clearable
                        multi
                        options={scdtypearray}
                        onChange={onArrayChange}
                          />

                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Sumary</label>
                        <Input
                          defaultValue={result.description}
                          cols="80"
                          rows="4"
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
                <Button className="btn btn-primary">Save</Button>
              </CardBody>
              
            </Card>
            
            
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={image}
                    />
                    <h5 className="title">{result.name}</h5>
                  </a>
                </div>
                <div className="card-description">
                {result.description}
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DetailModify;
