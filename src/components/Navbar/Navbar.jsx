import React from "react";
import {Navbar , Container , Nav} from "react-bootstrap";
import {Outlet , Link} from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="https://www.imdb.com">Imdb</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link> <Link style={{color:'white' , textDecoration:'none'}} to="/"> Home </Link> </Nav.Link>
                        <Nav.Link> <Link style={{color:'white' , textDecoration:'none'}} to="/Table"> movie list </Link> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}
export default NavBar