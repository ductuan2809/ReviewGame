
import React, { useState,useEffect } from "react";
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
  Col,
  Input,
  InputGroup,
  FormGroup
} from 'reactstrap';
import ReactPaginate from "react-paginate";
import './pagination.css'

import { Link } from "react-router-dom";
import Detail from "./GameDetail/Detail";
import {get} from "helper/fetch.helper"






function Icons() {

    
    const [games, setGame] = useState([]);
    const [name, setName] = useState('');
    // const [images, setImage] = useState([]);
    // const [_id, setID] = useState('');
    // const [score, setScore] = useState('');
    // const [types, setTypes] = useState([]);

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, [])


    useEffect(() => {
        (
            async () => {
                const response = await get('http://localhost:5000/game/getGameSort');
                console.log(response);
    
                if(response.success)
                {
                  setGame(response.data);
                //   setImage(content.data.images);
                //   setID(content.data._id);
                //   setScore(content.data.score);
                //   setTypes(content.data.types);
                  console.log(response.message)
                } else {
                    alert(response.message);
                }

                //console.log(gd);
        }    
        )();
    },[])

    const search = async(e) => {
        e.preventDefault()

        const response = await get('http://localhost:5000/game/findGameByName', { name: name });
        console.log(response);
        if (response.success) {
            setGame(response.data);
        } else {
            alert(response.message)
        }
    }
    

    const[item, setItem]=useState(games.slice(0,50))
    //trang ??ang active
    const [pagenumber,setpageNumber]=useState(0)

    //gi???i h???n item
    const itemsPerPage=6
    const prevpage=pagenumber*itemsPerPage

    //render item theo s??? l?????ng c??? ?????nh t???ng trang
    const displayItems=games.slice(prevpage,prevpage+itemsPerPage).map((item) => {
        
        return(
            <Col xs="12" md="4">
                <Card>
                    <CardImg top width="100%" height="350px" style={{objectFit:"cover"}}  src={item.images[0]} />
                    <CardBody>
                        <CardTitle> {item.name}</CardTitle>
                        <CardSubtitle>Th??? lo???i :{item.types.map((type) => <li>{type}</li>)}</CardSubtitle>
                        <CardText>Score : {item.score}</CardText>
                        <CardText>Overall: {item.review}</CardText>
                        <Link to={`/detail-item?id=${item._id}`} className="btn btn-secondary"> View </Link>
                    </CardBody>
                </Card>
            </Col>
        )
    })
    const pageCount=Math.ceil(games.length/itemsPerPage)

    
    
    const changePage=({selected})=>{
        setpageNumber(selected);
    }

    return (
        <div className="content">
            
            <Row>
                <Col>
                <FormGroup className="search-bar">
                    <Row>
                        <Col>
                            <Input 
                                placeholder="SEARCH" 
                                type="text" 
                                onChange={e=> setName(e.target.value)}
                            /> 
                         </Col>
                         <Col>
                            <Button
                                aria-label="Search"
                                className="search"
                                onClick={search}
                                >
                                <i className="tim-icons icon-zoom-split" />
                            </Button>
                         </Col>

                    </Row>
                </FormGroup>
                </Col>
            </Row>
            <Row xs="12" md="4">
                <Col md="12">
                    
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
                         onClick={useEffect}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Icons;
