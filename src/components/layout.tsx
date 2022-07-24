import * as React from "react";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styled, {css} from "styled-components";
import Container from "@mui/material/Container"
import Home from "./sections/home";
import Projects from "./sections/projects";
import Work from "./sections/work";
import Navbar from "./navbar";
import Footer from "./sections/footer";
import About from "./sections/about";

class Layout extends React.Component<any, any> {
  render() {
    return (
      <div className={"layout"}>
        <Navbar />
        <Container fixed>
          <Router>
            <Navbar/>
            <Switch>
              <Route strict path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/projects">
                <Projects/>
              </Route>
              <Route path="/work">
                <Work/>
              </Route>
            </Switch>
            <Footer/>
          </Router>
        </Container>
      </div>
    );
  }
}

export default Layout;