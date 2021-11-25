
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
        const link = 'http://localhost:5000/game/getGameDetail'
          const response = await fetch(link, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
              body : JSON.stringify({id})
          });
         
          const content = await response.json();
          console.log(content.data)
          if (content.status === 302) {
            alert("success")
          }
          else{

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
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Ngày phát hành</label>
                        <div className="form-control">
                        28 tháng 9, 2020
                  
                        </div>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Khung phần mềm</label>
                        <div className="form-control">
                        Unity
                  
                        </div>
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Nhà phát hành
                        </label>
                        <div className="form-control">
                        miHoYo
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Meta's Score</label>
                        
                        <div className="form-control">
                        84/100
                  
                        </div>
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>User's Score</label>

                        <div className="form-control">
                        4.0/10
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Thể loại</label>

                        <div className="form-control">
                        Role-Playing, Open World, Action RPG
                  
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Sumary</label>
                        <div className="card-description">
                        Welcome to the beautiful fantasy world of Teyvat. Step into a huge open-world of adventure and mystery, where heroic quests await. As a traveller from another world, you must find your lost sibling and unravel Teyvat's many secrets. Joined by Paimon, a kind-hearted sprite guide, your mission takes you through beautiful forests, bustling towns, and treacherous dungeons. And while your journey may put you into the path of merciless foes and fiendish puzzles you can count on numerous playable allies to join your custom party of four, harnessing the power of the elements to overcome all obstacles. Key Features: Explore Teyvat however you want Fly across the open-world, swim in a massive sea, climb mountains, and stray off the beaten path. Whether you decide to follow the storyline or just enjoy the gorgeous environment, Teyvat is yours to discover. Add up to four party members Choose who fights by your side, with over 30 characters to meet and create your party witheach possessing different abilities, personalities, and combat styles. Will you pick Jean, the acting grand master of the knights? Or Lisa, a witch harnessing the raw force of lightning? Master the seven elements Control and combine Pyro, Hydro, Electro, Anemo, Dendro, Cryo, and Geo to solve challenging puzzles and unleash powerful attacks. Travel alone or hunt together Charge head-on into battles by yourself, or invite your friends to join the fight against dangerous monsters, and discover the secrets of this vast world together.
                  
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
                      src="https://pht.qoo-static.com/yxNC32xtwtBEKe7E83pyuOLu49y_DPikkJQXdb99bxKdhn8HOYbgucJQBTki98uR1g=w512"
                    />
                    <h5 className="title">Genshin Impact</h5>
                  </a>
                </div>
                <div className="card-description">
                Genshin Impact, hay còn gọi là Nguyên Thần ở thị trường Đông Á là một trò chơi nhập vai hành động sinh tồn phiêu lưu thế giới mở do miHoYo phát triển. Genshin Impact là IP được miHoYo phát triển tiếp nối sau IP trước là series Honkai.
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
