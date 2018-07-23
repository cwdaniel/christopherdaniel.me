import React from "react";
import ReactDOM from "react-dom";
import Well from "./design/well";
import Navigation from "./design/navigation";
import { Scrollbars } from "react-custom-scrollbars";
import "./site.css";
class App extends React.Component {
  render() {
    let phoneOwner = this.getOwner();
    return (
      <div className="App">
        <Navigation />
        <Scrollbars>
          <Well />
        </Scrollbars>
      </div>
    );
  }
  getOwner() {}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
