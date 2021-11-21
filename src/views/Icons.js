
import React, { useState } from "react";
// reactstrap components
//import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardColumns,
  CardGroup,
  CardDeck,
  CardLink,
  CardHeader,
  CardFooter,
  Button,
  Row,
  Col
} from 'reactstrap';
import ReactPaginate from "react-paginate";
import './pagination.css'


import img1 from '../assets/img/big/genshin.JPG';
import img2 from '../assets/img/big/ER.JPG';
import img3 from '../assets/img/big/weed.JPG';
import img4 from '../assets/img/big/img2.jpg';
import img5 from '../assets/img/big/img1.jpg';
import img6 from '../assets/img/big/img1.jpg';
import { Link } from "react-router-dom";





function Icons() {

    
    
    //mảng data ảo
    const cardinfo=[
        {image: img1,tile:"Genshin Impact",genre:"Open World",text:"Guaranteed Qiqi(5 stars) within 90rolls",id:"1"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img4,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: "https://storage.googleapis.com/webreviewgame-518cf.appspot.com/Sekiro%20-%20Shadows%20Die%20Twice%20Images/images-163739313349055.jpg?GoogleAccessId=firebase-adminsdk-l8b18%40webreviewgame-518cf.iam.gserviceaccount.com&Expires=16446992400&Signature=Pr4EpjaJsm%2FK3wgseY1XH9TtWjK9CjpIVeWN1eRzhMfxzRF1vezV92Q9w2PF7Oj1hFB9KI%2B3%2FwVOJzVATXciu5foEYc%2BtzXqRsdtwRVy39mJ4gB9LhJIMP72d%2FhjrmcasvgJCXL%2F0qq9pTVJqUHDIuImm06tTCmNuAWr3m%2FcJRXySaXKoo0Yq%2BbyLpWSVNMjjpuzndZ4O6biEsRokC060ftvjzrXN9AKj1qQBBVtSSwmzusMpqi1tYZkqXTdW%2FLbrDDCRFqgvLSOU1dlG7Hs62Qez4eqcAlIVpiMj9NMdQRI5H5btQfCTWgZ0BiHDj4BAIRH0hxwljLotHGUCRTeow%3D%3D",tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img1,tile:"Genshin Impact",genre:"Open World",text:"Guaranteed Qiqi(5 stars) within 90rolls"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img4,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},
        {image: img2,tile:"Elden Ring",genre:"Open World, RPG, Casual",text:"Chilling Adventure"},

    ]

    
    const[item, setItem]=useState(cardinfo.slice(0,50))
    //trang đang active
    const [pagenumber,setpageNumber]=useState(0)

    //giới hạn item
    const itemsPerPage=6
    const prevpage=pagenumber*itemsPerPage

    //render item theo số lượng cố định từng trang
    const displayItems=cardinfo.slice(prevpage,prevpage+itemsPerPage).map((item) => {
        return(
            <Col xs="12" md="4">
                <Card>
                    <CardImg top width="100%" height="350px" style={{objectFit:"cover"}}  src={item.image} />
                    <CardBody>
                        <CardTitle> {item.tile}</CardTitle>
                        <CardSubtitle>{item.genre}</CardSubtitle>
                        <CardText>{item.text}</CardText>
                        <Link to="/admin/detail" className="btn btn-secondary"> View </Link>
                        
                    </CardBody>
                </Card>
            </Col>
        )
    })
    const pageCount=Math.ceil(cardinfo.length/itemsPerPage)

    const changePage=({selected})=>{
        setpageNumber(selected);
    }
    
    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <h5 className="mb-3">Games</h5>
                    <Row>
                        {displayItems}
                        
                    </Row>
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
                </Col>
            </Row>
        </div>
    );
}

export default Icons;
