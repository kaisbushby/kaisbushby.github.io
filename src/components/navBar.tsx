import React, {useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styled, {css} from "styled-components";
import {Nav, Navbar, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class NavBar extends React.Component<any, any> {
    render() {
        return (
            <div>
                {/*<div className={"logo-container"}></div>
                <div className={"navlinks"}>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/project"}>Projects</NavLink>
                    <NavLink to={"/work"}>Work</NavLink>
                </div>*/}

                <Navbar>
                    <Container>
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/projects">
                                <Nav.Link>Project</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/work">
                                <Nav.Link>Work</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Container>
                </Navbar>

                {/*<Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>*/}

            </div>
        );
    }
}

export default NavBar;