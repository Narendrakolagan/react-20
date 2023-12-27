import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
    isTimeRunning: false,
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalTime)
  }

  onResetTime = () => {
    clearInterval(this.intervalTime)
    this.setState({
      timeElapsedInSeconds: 0,
      isTimeRunning: false,
    })
  }

  onStopTimer = () => {
    clearInterval(this.intervalTime)
    this.setState({isTimeRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.intervalTime = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  timeInSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  timeInMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.timeInMinutes()}: ${this.timeInSeconds()}`

    return (
      <div className="bg-container">
        <div>
          <h1>Stopwatch</h1>

          <div className="timer-card">
            <div className="time-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stop-watch"
              />
              <p>Timer</p>
            </div>
            <h1 className="time-heading">{time}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-button"
                onClick={this.onStartTimer}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.onResetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
