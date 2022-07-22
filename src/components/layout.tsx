import * as React from "react";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styled, {css} from "styled-components";
import Home from "./sections/home";
import Projects from "./sections/projects";
import Work from "./sections/work";
import Navbar from "./navbar";
import Footer from "./footer";
import About from "./sections/about";

class Layout extends React.Component<any, any> {
    render() {
        return (
            <div className={"layout"}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path="/">
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
            </div>

    )
        ;
    }
}

export default Layout;