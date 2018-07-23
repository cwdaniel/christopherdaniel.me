import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div>Christopher W. Daniel</div>
        <div className="site-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="work-experience">Work Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
