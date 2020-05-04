import React from "react";
import "./Timer Control.css";

class TimerControl extends React.Component {
  state = { start_stop: "play icon", is_positive: "positive ui button" };

  handleClick = () => {
    if (this.state.start_stop === "play icon") {
      this.setState({
        start_stop: "pause icon",
        is_positive: "negative ui button",
      });
    }
    if (this.state.start_stop === "pause icon") {
      this.setState({
        start_stop: "play icon",
        is_positive: "positive ui button",
      });
    }
    this.props.play();
  };

  revert = () => {
    this.setState({
      start_stop: "play icon",
      is_positive: "positive ui button",
    });
  };

  render() {
    return (
      <div>
        <audio
          id="beep"
          src="https://onlineclock.net/audio/options/default.mp3"
        ></audio>
        <button
          id="start_stop"
          onClick={this.handleClick}
          className={this.state.is_positive}
        >
          <i className={this.state.start_stop}></i>
        </button>
        <button id="reset" onClick={this.props.reset} className="ui button">
          <i
            className="undo
 icon"
          ></i>
        </button>
      </div>
    );
  }
}

export default TimerControl;
