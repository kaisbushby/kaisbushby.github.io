import * as React from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styled, {css} from "styled-components";
import Home from "./sections/home";
import Projects from "./sections/projects";
import Work from "./sections/work";
import NavBar from "./navBar";
import Footer from "./sections/footer";
import About from "./sections/about";

class Layout extends React.Component<any, any> {
  render() {
    return (
      <div className={"layout"}>

        <div>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/work" element={<Work/>} />
            </Routes>
          </Router>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Layout;