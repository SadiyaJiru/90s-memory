import React, { Component } from "react";
import "./score.css";

// By extending the React.Component class, Counter inherits functionality from it
class ScoreBoard extends Component {

  // The render method returns the JSX that should be rendered
  render() {
        return (
          <nav className="navbar navbar-default navbar-fixed-top">
             <ul>
              <h2 className="itemLeft">Test Your 90's Cartoon Memory</h2>
              <li className="itemCenter">Highest Score: </li>
              <li className="itemRight">Score: {this.props.score}
              {this.handleIncrement}</li>
            </ul>
          </nav>
        );
      }
    }

export default ScoreBoard;
