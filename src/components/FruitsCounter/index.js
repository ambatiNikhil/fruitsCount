import {Component} from 'react'

import './index.css'

class FruitCounter extends Component {
  state = {mcount: 0, bcount: 0}

  mangoCount = () => {
    this.setState(prevState => {
      console.log(`previous state value : ${prevState.mcount}`)
      return {mcount: prevState.mcount + 1}
    })
  }

  bananaCount = () => {
    this.setState(prevState => {
      console.log(`previous state banana value : ${prevState.bcount}`)
      return {bcount: prevState.bcount + 1}
    })
  }

  render() {
    const {mcount, bcount} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate <span className="counter">{mcount}</span> mangos and{' '}
            <span className="counter">{bcount}</span> bananas
          </h1>

          <div className="image-container">
            <div className="image-box">
              <div className="image">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  className="image-size"
                  alt="mango"
                />
                <button
                  className="btn-style"
                  type="button"
                  onClick={this.mangoCount}
                >
                  Eat Mango
                </button>
              </div>
              <div className="image">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  className="image-size"
                  alt="banana"
                />
                <button
                  className="btn-style"
                  type="button"
                  onClick={this.bananaCount}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
