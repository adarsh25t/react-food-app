import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navitem() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="align-items-center fixed-top navbar">
          <div className="container-fluid">
          <Navbar.Brand><Link to='/' className="heading"><span>food</span>hub</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto mx-auto text-center">
              <Nav.Link><Link to='/' className="list">Home </Link></Nav.Link>
              <Nav.Link><Link to='About' className="list">About Us </Link></Nav.Link>
              <Nav.Link><Link to='FilteredDishes' className="list">Menu </Link></Nav.Link>
              <Nav.Link><Link to='/' className="list">Reviews </Link></Nav.Link>
              <Nav.Link> <Link to='/' className="list">Contact </Link></Nav.Link>
            </Nav>
            <Nav className=" text-center">
            <Nav.Link> <Link to='Checkout' className="list">Checkout </Link></Nav.Link>
              <Nav.Link className="signIn"><Link to='register' className="list">Sign Up </Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
    </div>
  );
}

export default Navitem;
