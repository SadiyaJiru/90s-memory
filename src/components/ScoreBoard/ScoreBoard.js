import React, { Component } from "react";
import "./score.css";

// By extending the React.Component class, Counter inherits functionality from it
class ScoreBoard extends Component {

  // The render method returns the JSX that should be rendered
  render() {
        return (
          <nav className="navbar navbar-default navbar-fixed-top">
             <ul>
              <h1 className="itemLeft">Test Your 90's Cartoon Memory</h1>
              <h2 className="itemCenter">Highest Score: </h2>
              <h2 className="itemRight">Score: {this.props.score}</h2>
            </ul>
          </nav>
        );
      }
    }

export default ScoreBoard;
