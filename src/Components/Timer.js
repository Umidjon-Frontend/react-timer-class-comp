import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  state = {
    isActiveBtn: false,
    isDisabled: true,
    secunds: 0,
    minutes: 0,
    hours: 0,
  };

  // START TIMER
  startTimer = () => {
    this.interval = setInterval(() => {
      const { secunds, minutes, hours } = this.state;
      if (secunds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            this.resetTimer();
          } else {
            this.setState({
              hours: hours - 1,
              minutes: 59,
              secunds: 59,
            });
          }
        } else {
          this.setState({
            minutes: minutes - 1,
            secunds: 59,
          });
        }
      } else {
        this.setState({
          secunds: secunds - 1,
        });
      }
    }, 1000);
    this.setState({
      isActiveBtn: true,
      isDisabled: true,
    });
  };

  // STOP TIMER
  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({
      isActiveBtn: false,
      isDisabled: false,
    });
  };

  // RESET TIMER
  resetTimer = () => {
    this.setState({
      isActiveBtn: false,
      isDisabled: true,
      secunds: 0,
      minutes: 0,
      hours: 0,
    });
    clearInterval(this.interval);
  };

  // SECUND ADD AND REMOVE COUNT
  secondCount = (str) => {
    const { secunds } = this.state;
    if (str === "add") {
      if (secunds < 59) {
        this.setState({
          secunds: secunds + 1,
        });
      } else {
        this.setState({
          secunds: 0,
        });
      }
    }
    if (str === "remove") {
      if (secunds > 0) {
        this.setState({
          secunds: secunds - 1,
        });
      } else {
        this.setState({
          secunds: 59,
        });
      }
    }
  };

  // MINUTE ADD AND REMOVE COUNT
  minutesCount = (str) => {
    const { minutes } = this.state;
    if (str === "add") {
      if (minutes < 59) {
        this.setState({
          minutes: minutes + 1,
        });
      } else {
        this.setState({
          minutes: 0,
        });
      }
    }
    if (str === "remove") {
      if (minutes > 0) {
        this.setState({
          minutes: minutes - 1,
        });
      } else {
        this.setState({
          minutes: 59,
        });
      }
    }
  };

  // HOURS ADD AND REMOVE COUNT
  hoursCount = (str) => {
    const { hours } = this.state;
    if (str === "add") {
      if (hours < 59) {
        this.setState({
          hours: hours + 1,
        });
      } else {
        this.setState({
          hours: 0,
        });
      }
    }
    if (str === "remove") {
      if (hours > 0) {
        this.setState({
          hours: hours - 1,
        });
      } else {
        this.setState({
          hours: 59,
        });
      }
    }
  };
  
  render() {
    const { isActiveBtn, isDisabled, hours, minutes, secunds } = this.state;
    return (
      <div className="timer-container">
        <div className="timer-box">
          <div className="box-header">
            <h1>Online Timer</h1>
          </div>
          <div className="box-body">
            <div className="item">
              <span className="item-title">Hours</span>
              <button className="btn" onClick={() => this.hoursCount("add")}>
                +
              </button>
              <h1>{hours}</h1>
              <button className="btn" onClick={() => this.hoursCount("remove")}>
                -
              </button>
            </div>
            <span>:</span>
            <div className="item">
              <span className="item-title">Minutes</span>
              <button className="btn" onClick={() => this.minutesCount("add")}>
                +
              </button>
              <h1>{minutes}</h1>
              <button
                className="btn"
                onClick={() => this.minutesCount("remove")}
              >
                -
              </button>
            </div>
            <span>:</span>
            <div className="item">
              <span className="item-title">Seconds</span>
              <button className="btn" onClick={() => this.secondCount("add")}>
                +
              </button>
              <h1>{secunds}</h1>
              <button
                className="btn"
                onClick={() => this.secondCount("remove")}
              >
                -
              </button>
            </div>
          </div>
          <div className="box-footer">
            {!isActiveBtn ? (
              <button className="btn-start" onClick={this.startTimer}>
                Start
              </button>
            ) : (
              <button className="btn-stop" onClick={this.stopTimer}>
                Stop
              </button>
            )}
            <button
              className="btn-reset"
              disabled={isDisabled}
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
