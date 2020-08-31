import React, { Component } from 'react';
class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  };

  componentDidMount() {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: new Date('2019-07-08T05:11:00.000Z'),
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  }

  render() {
    const { timerTime } = this.state;
    let centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ('0' + (Math.floor(timerTime / 3600000) % 24)).slice(-2);
    let days = ('0' + Math.floor(timerTime / 86400000)).slice(-3);
    return (
      <div>
        <b>Time since last PlayTest</b>
        <br />
        <i>
          {days} : {hours} : {minutes} : {seconds} : {centiseconds}
        </i>
      </div>
    );
  }
}

export default Stopwatch;
