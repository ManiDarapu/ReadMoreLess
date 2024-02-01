// Write your code here
import {useState} from 'react'
import {Div1, Div2, H1, Img} from './styledComponents'

const ReadMore = () => {
  const para =
    'Hooks solve a wide variety of semingly unconnected problems in react that we have encountered over five years of writing and maintained tens of thousands of componenets. For curious readers, we have prepared  adetailed RFC. Hooks allow you to reuse stateful logic without changing your components hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'
  const lessPara = para.slice(0, 107)
  const [clicked, setClick] = useState(false)
  const toggleClick = () => {
    setClick(prevClicked => !prevClicked)
  }
  return (
    <Div1>
      <Div2>
        <H1>React Hooks</H1>
        <p>Hooks are a new addition to React</p>
        <Img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
          alt="react hooks"
        />
        {clicked ? <p>{para}</p> : <p>{lessPara}</p>}

        <button type="button" onClick={toggleClick}>
          {clicked ? 'Read Less' : 'Read More'}
        </button>
      </Div2>
    </Div1>
  )
}

export default ReadMore
