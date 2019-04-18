import React from "react";
import Timer from "./components/Timer";
import SessionsCompletedCounter from "./components/SessionsCompletedCounter";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increaseSessionsCompleted = this.increaseSessionsCompleted.bind(this);

    this.state = {
      sessionsCompleted: 0
    };
  }

  increaseSessionsCompleted() {
    this.setState(prevState => ({
      sessionsCompleted: prevState.sessionsCompleted + 1
    }));
    // TODO 7.
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">Today</h1>
        {/* TODO 7. */}
        <Timer
          mode="WORK"
          autoPlays
          onSessionComplete={() => this.increaseSessionsCompleted()}
        />
        <SessionsCompletedCounter
          sessionsCompleted={this.state.sessionsCompleted}
        />
      </div>
    );
  }
}

export default App;
