import * as React from "react";
import Navbar from "./Components/Navbar/Navbar";

class App extends React.Component<any, any> {
  render() {
    return (
      <div className={"AppWindow"}>
        <Navbar/>
      </div>
    );
  }
}

export default App;