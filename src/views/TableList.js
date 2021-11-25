
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  
} from "reactstrap";
import './pagination.css'
import ReactPaginate from "react-paginate";
function Tables() {
  const [games, setGame] = useState([]);
  useEffect(() => {
    (
        async () => {
            const response = await fetch('http://localhost:5000/game/getALLGame',{
                method: 'GET',
                headers: {'Content-Type': 'application/json',}
            });
            const content = await response.json();

            if(response.status === 302)
            {
              setGame(content.data);
            //   setImage(content.data.images);
            //   setID(content.data._id);
            //   setScore(content.data.score);
            //   setTypes(content.data.types);
              console.log(content.message)
            }

            //console.log(gd);
    }    
    )();
  },[])






const[item, setItem]=useState(games.slice(0,50))
//trang đang active
const [pagenumber,setpageNumber]=useState(0)
//giới hạn item
const itemsPerPage=6
//logic lấy item cho từng trang
const prevpage=pagenumber*itemsPerPage
const displayItems=games.slice(prevpage,prevpage+itemsPerPage).map((item) => {
        
  return(
      
      <>
      <tr>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.score}</td>
        <td>{item.review}</td>
        <td>{item.publisher}</td>
        <td>{item.types.map((type) => <li>{type}</li>)}</td>
        
        
        
        <Link to={`/detail-item?id=${item._id}`} className="btn btn-primary"> Sửa </Link>
        <Button>Xóa</Button>
        
      </tr>
      </>
  )
})
const pageCount=Math.ceil(games.length/itemsPerPage)



const changePage=({selected})=>{
  setpageNumber(selected);
}


  return (
    <>
      <div className="content">
        <Row>
          
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Games</CardTitle>
                <Link to="/admin/add" className="btn btn-primary"> Thêm </Link>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Score</th>
                      <th>Review</th>
                      <th>Publisher</th>
                      <th>Genre(s)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayItems}
                  </tbody>
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
                  
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
