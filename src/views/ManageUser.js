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

function ManageUser() {
    const pageCount=0
    const changePage=false
    
    return (
        <div className="content">
        <Row>
          
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Users</CardTitle>
                <Link to="/admin/add" className="btn btn-primary"> Thêm </Link>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>UserName</th>
                      <th>Gender</th>
                      <th>Phone</th>
                      {/* xem,ban,unban */}
                    </tr>
                  </thead>
                  <tbody>
                    
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
    )
}

export default ManageUser
