import * as React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "Components/Shared/Navbar";
import "./App.scss"

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