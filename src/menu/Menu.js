import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function Menu(){

    return(

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/sum">Sum</Nav.Link>
                    <Nav.Link href="/sub">Substraction</Nav.Link>
                    <Nav.Link href="/mul">Multiplication</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}