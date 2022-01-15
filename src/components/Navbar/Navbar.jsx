import React from "react";
import {Navbar , Container , Nav} from "react-bootstrap";
import {Outlet} from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="https://www.imdb.com">Imdb</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Table">movie list</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}
export default NavBar