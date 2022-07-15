import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Component_css/appnav.css'
import logo from '../Image/logo.jpg'
import { Link } from "react-router-dom";
import '../Component_css/Header.css'
function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg" >
                <Container fluid>
                    <Link to="/"><Navbar.Brand ><img src={logo} className="img-fluid" alt="Logo" style={{ width: 40, height: 40 }} /></Navbar.Brand></Link>
                    <h3 className='farzi'>Farzi Bank</h3>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end" style={{ width: "100%" }}>
                        <Nav className="justify-content-end" activeKey="/home">
                            <Link to="/" className='links__'>Home</Link>
                            <Link to="/aboutus" className='links__'>Aboutus</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header