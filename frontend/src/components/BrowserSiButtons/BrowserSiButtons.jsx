import {React, useState} from 'react';
import './styles.css'

export default function BrowserSiButtons() {
  const [hoverText, setHoverText] = useState(null);

  const handleMouseOver = (event) => {
    const text = event.target.innerText;
    setHoverText(text);
  }

  const handleMouseOut = (event, t) => {
    const text = event.target.innerText;
    setHoverText("abcd");
  }

  const divs = ["JOIN", "SPECTATE", "JOIN AS COMMANDER", "RATING"];

  return (
    <div className='container'>
        {divs.map((text) => (
          <div key={text} onMouseEnter = {(e) => handleMouseOver(e)} onMouseLeave = {(e) => handleMouseOut(e)} className={`heading ${text === hoverText ? "box11" : "box"}`}>{text}</div>
        ))}
    </div>
  )
}
