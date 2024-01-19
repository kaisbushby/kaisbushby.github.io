import * as React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss"

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="wrapper">
        <Outlet />
      </div>
    );
  }
}

export default App;