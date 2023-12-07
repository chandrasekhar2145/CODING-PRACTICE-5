// Write your code here
import {Component} from 'react'
import './index.css'
class Welcome extends Component {
  state = {buttonClick: false}

  buttonText = () => {
    this.setState(prevState => ({buttonClick: !prevState.buttonClick}))
  }

  onGetClick = () => {
    const {buttonClick} = this.state
    return buttonClick ? 'Subscribed' : 'Subscribe'
  }
  render() {
    const buttonClick = this.onGetClick()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        <button className="button" type="button" onClick={this.buttonText}>
          {buttonClick}
        </button>
      </div>
    )
  }
}
export default Welcome
