import React, { Component } from "react";

// By extending the React.Component class, Counter inherits functionality from it
class ScoreBoard extends Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
        return (
          <nav className="navbar navbar-default navbar-fixed-top">
             <ul>
              <li className="itemLeft">Test Your 90's Cartoon memory Memory</li>
              <li className="itemCenter"></li>
              <li className="itemRight">Score: {this.props.score}</li>
            </ul>
          </nav>
        );
      }
    }

export default ScoreBoard;
