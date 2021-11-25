
import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react/cjs/react.development";
import ReactPaginate from "react-paginate";
import '../pagination.css'
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
import { get, post } from "../../helper/fetch.helper";

function Detail(props) {
  //comments
  const {_id } = props;
  const commentarray=[
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
    {user:"Minh Thiện",date:"03/11/2021",score:"10",comment:"During my time with Genshin Impact, I fell in love with Qiqi. After only a few hours, my thoughts about what this adventure was faded away as it truly evolves into a unique experience. There’s a fine level of detail that went into crafting this beautiful world, and you can’t help but want to see every inch of it. Although the grind and the gachas systems are present, this is a game that I will gladly return to again and again. Regardless, all of this is available for free, so nothing stops you from finding out for yourself."},
  ]
  const[comments,setcomments]=useState(commentarray.slice(0,50))
  const[pagenumber,setpageNumber]=useState(0)
  const cmtPerPage=3
  const prevpage=pagenumber*cmtPerPage
  const[score, setScore]=useState('');
  const[types, setTypes]=useState('');
  const[image, setImage]=useState('');
  const[result, setResult]=useState({});

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
            gameTypes = gameTypes + element.toString() + " || ";
          });
          setTypes(gameTypes);
          setScore(response.data.score.toString() + "/10");
          setImage(response.data.images[0]);
        } else {

        }     
      }
  )();
}, [])




  const displayCmt=commentarray.slice(prevpage,prevpage+cmtPerPage).map((item)=>{
    return(
      <Form >
                <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>{item.user}</label>
                        
                        <div className="card-description">
                        {item.date}
                  
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
                        <div className="card-description">
                        {item.comment}
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>

    )
  })

  const pageCount=Math.ceil(commentarray.length/cmtPerPage)

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
                    
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Nhà phát hành
                        </label>
                        <div className="form-control">
                        {result.publisher}
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>User's Score</label>

                        <div className="form-control">
                        {score}
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Thể loại</label>

                        <div className="form-control">
                        {types}
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Sumary</label>
                        <div className="card-description">
                        {result.description}
                  
                        </div>
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  <Row>
                    
                  </Row>
                </Form>
              </CardBody>
              
            </Card>
            <Card>
              <CardBody>
                <Form >
                <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Your Score</label>
                        
                        <Input
                          
                          defaultValue="0"
                          placeholder="On a scale of 10"
                          type="number"
                          max="10"
                          min="0"
                        />
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                      <label>Your review</label>
                      <Input
                          
                          
                          placeholder="Here can be your review"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>

              </CardBody>
              <CardFooter>
                
                <Link to="/" className="btn-fill btn btn-primary" color="primary">Submit</Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader> Comments</CardHeader>
              <CardBody>
                {displayCmt}
                <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                
                
                />

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

export default Detail;
