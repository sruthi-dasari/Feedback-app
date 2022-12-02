import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackClicked: false}

  const onSmileyClick = () => {
    this.setState({feedbackClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {feedbackClicked} = this.state
    let authButton
    if (feedbackClicked === true) {
      authButton = (
        <div className="thankyou-card">
          <img src={loveEmojiUrl} alt="love emoji" />
        </div>
      )
    } else {
      authButton = (
        <div className="feedback-card">
          <h1 className="question-title">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="smiley-outer-container">
            {emojis.map(eachEmoji => (
              <Smiley emojiDetails={eachEmoji} />
            ))}
          </div>
        </div>
      )
    }
    return (
      <div className="app-container">
        <div className="main-card">{authButton}</div>
      </div>
    )
  }
}

const Smiley = props => {
  const {emojiDetails} = props
  const {id, name, imageUrl} = emojiDetails
  return (
    <div className="smiley-container">
      <button className="button" type="button" onClick={onSmileyClick}>
        <img src={imageUrl} alt={name} className="smiley-img" />
      </button>
      <p className="smiley-name">{name}</p>
    </div>
  )
}

export default Feedback
