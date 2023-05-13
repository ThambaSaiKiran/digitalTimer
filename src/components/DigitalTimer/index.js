// Write your code here
import {Component} from 'react'

class DigitalTimer extends Component {
  state = {min: 25, sec: 0, count: 25, start: true}

  componentDidMount() {
    this.timerId = setInterval(this.changeTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  resetFunc = () => {
    this.setState({min: 25, sec: 0, start: false})
  }

  onIncrement = () => {
    this.setState(prevState => {
      const {min} = prevState
      return {min: min + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      const {min} = prevState
      return {min: min - 1}
    })
  }

  changeTime = () => {
    const {min, sec} = this.state
    if (sec === 0) {
      this.setState({min: min - 1, sec: 59})
    } else {
      this.setState({sec: sec - 1})
    }
  }

  render() {
    const {min, sec, count, start} = this.state
    const stpimg = start ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        alt="Play"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
        alt="Pause"
      />
    )
    const para = start ? 'Play' : 'Pause'
    const runBt = start ? 'Pause' : 'Running'
    return (
      <div className="bg">
        <h1>Digital Timer</h1>
        <div className="bg1">
          <div className="timerCont">
            <div>
              <p>
                {min}:{sec}
              </p>
              <p>{runBt}</p>
            </div>
          </div>
          <div>
            <div>
              <button className="setTimeCont">
                {stpimg}
                <p>{para}</p>
              </button>
              <button className="setTimeCont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset"
                  onClick={this.resetFunc}
                />
                <p>Reset</p>
              </button>
            </div>
            <p>Set Timer Limit</p>
            <div className="setTimeCont">
              <p onClick={this.onDecrement}>-</p>
              <p className="countText">min</p>
              <p onClick={this.onIncrement}>+</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
