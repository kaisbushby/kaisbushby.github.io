import * as React from "react";
import Navbar from "./components/navbar";
import Layout from "./components/layout";

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