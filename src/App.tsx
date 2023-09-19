import * as React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "components/sections/Navbar";
import "./App.scss"
import { Footer } from "components/sections/Footer";

class App extends React.Component<any, any> {
  render() {
    return (
      <div className={"app-window"}>
        <Navbar/>
        <div className="wrapper">
          <Outlet/>
        </div>
      </div>
    );
  }
}

export default App;