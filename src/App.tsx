import * as React from "react";
import NavBar from "./components/navBar";
import Layout from "./components/layout";
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from "react-router-dom";

class App extends React.Component<any, any> {
  render() {
    return (
      <div className={"AppWindow"}>
        <Layout />
      </div>
    );
  }
}

export default App;