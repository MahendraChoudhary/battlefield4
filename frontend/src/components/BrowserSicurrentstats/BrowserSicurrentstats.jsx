import {React} from 'react'
import './styles.css'

export default function BrowserSicurrentstats(serverdata) {
  const {playersn, playersd, ping, tickrate} = serverdata;
  
  return (
    <div className="parent heading">
        <div className="bx">
          <span>PLAYERS</span>
          <span>{playersn}/{playersd}</span>
        </div>
        <div className="bx">
          <span>PING</span>
          <span>{ping}</span>
        </div>
        <div className="bx">
          <span>TICKRATE</span>
          <span>{tickrate}Hz</span>
        </div>
    </div>
  )
}
