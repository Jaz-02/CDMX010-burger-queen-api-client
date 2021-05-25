import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
//import {Cards} from '../components/Cards-bkfst'

function Options() {
  return(
<div>
<Nav variant="tabs" defaultActiveKey="/orders">
  {/* <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item> */}
  <Link to = "/orders">
  <Nav.Item>
    <Nav.Link href="/orders">Desayunos</Nav.Link>
  </Nav.Item>
  </Link>
  <Link to = "/orders/lunch">
  <Nav.Item>
    <Nav.Link href="/orders/lunch">Lunch</Nav.Link>
  </Nav.Item>
  </Link>
</Nav>
</div>
)
}

export default Options;