import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  onChangeInput = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    const count = word.length()

    return (
      <div className="app-container">
        <div className="content-container">
          <div className="">
            <h1 className="heading">Calculate Letters you enter</h1>
            <p className="tagline">Enter the phrase</p>
            <input
              className="input-element"
              type="text"
              value={word}
              onChange={this.onChangeInput}
              placeholder="Enter the phrase"
            />
            <p className="count-letters">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
