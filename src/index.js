import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./design/navigation";
import { Scrollbars } from "react-custom-scrollbars";
import { Content } from "./design/helpers/content";
import { HomeComponent } from "./components/pages/home";
import { WorkExperienceComponent } from "./components/pages/workExperience";
import "./site.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Scrollbars>
            <Content>
              <Switch>
                <Route path="/" exact={true} component={HomeComponent} />
                <Route path="/home" exact={true} component={HomeComponent} />
                <Route
                  path="/work-experience"
                  exact={true}
                  component={WorkExperienceComponent}
                />
              </Switch>
            </Content>
          </Scrollbars>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
