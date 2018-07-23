import React from "react";
import DayNight from "../dayandnight";
import "./well.css";
class Well extends React.Component {
  render() {
    return (
      <div className="about-well">
        <div className="about-internal">
          <h2>Hi. I am Christopher Daniel</h2>
          <p>I am a software consultant and developer.</p>
          <p>
            In my spare time when not working with clients I{" "}
            <a href="http://cincinnaticodes.com">teach</a> new developers.
          </p>
        </div>
      </div>
    );
  }
}
export default Well;
