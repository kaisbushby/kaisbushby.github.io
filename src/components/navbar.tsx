import React, {useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";
import {configData} from "./config";


class Navbar extends React.Component<any, any> {
  render() {
    return (
      <div className={"navbar"}>
        {configData.navLinks.map((link)=> (
          <NavLink to={link.url} activeClassName="selected">
            {link.name}
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Navbar;