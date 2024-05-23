import './index.css'

const GreetingOption = props => {
  const {greeting, activeOptionId, updateActiveOption} = props
  const {buttonText, id} = greeting
  const activeBtn = activeOptionId === id ? 'active-btn' : ''
  const onClickUpdateActiveOption = () => {
    updateActiveOption(id)
  }
  return (
    <li className="list-item">
      <button
        className={`btn ${activeBtn}`}
        onClick={onClickUpdateActiveOption}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingOption
