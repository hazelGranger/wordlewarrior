import LetterBox from './components/LetterBox'
import { color } from './constants/color'
import './App.css'

function App() {
  return (
    <div className="words">
      <LetterBox letter={'a'} colorCode={color.correct} />
      <LetterBox letter={'b'} colorCode={color.included} />
      <LetterBox letter={'c'} colorCode={color.excluded} />
      <LetterBox letter={'b'} colorCode={color.included} />
      <LetterBox letter={'c'} colorCode={color.excluded} />
    </div>
  )
}

export default App
