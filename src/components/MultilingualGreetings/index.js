import {Component} from 'react'
import GreetingOption from '../GreetingOption'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]
class MultilingualGreetings extends Component {
  state = {
    activeOption: languageGreetingsList[0],
  }

  updateActiveOption = id => {
    const activeItem = languageGreetingsList.filter(
      greeting => greeting.id === id,
    )
    this.setState({activeOption: activeItem[0]})
  }

  render() {
    const {activeOption} = this.state
    const {imageAltText, imageUrl, id} = activeOption
    return (
      <div className="app-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="greeting-list">
          {languageGreetingsList.map(greeting => (
            <GreetingOption
              greeting={greeting}
              key={greeting.id}
              activeOptionId={id}
              updateActiveOption={this.updateActiveOption}
            />
          ))}
        </ul>
        <img className="greeting-img" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default MultilingualGreetings
