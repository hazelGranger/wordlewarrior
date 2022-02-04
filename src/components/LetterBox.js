import './LetterBox.css'

const LetterBox = ({ letter, colorCode, onLetterChange, onColorChange }) => {
  return (
    <div className={`letterbox ${colorCode}`}>
      <input className="letterbox-input" type="text" value={letter} />
      <div className="indicator-container">
        <div className="indicator correct"></div>
        <div className="indicator included"></div>
        <div className="indicator excluded"></div>
      </div>
    </div>
  )
}

export default LetterBox
