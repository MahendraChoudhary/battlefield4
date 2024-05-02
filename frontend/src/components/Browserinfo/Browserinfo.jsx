import {React} from 'react'
import './styles.css'

export default function Browserinfo(serverdata) {
  const {settings, advanced, rules} = serverdata;

  return (
    <div className="parent1 heading">
        <div className="bx1">
          Settings
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bx1">
          Advanced
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bx1">
          Rules
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  )
}
