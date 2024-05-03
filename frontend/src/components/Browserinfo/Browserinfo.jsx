import {React} from 'react'
import './styles.css'

export default function Browserinfo(serverdata) {
  const {settings} = serverdata;
  const {advanced} = serverdata;
  const {rules} = serverdata;

  return (
    <div className="parent1 heading">
        <div className="bx1">
          Settings
          {/* <div className='bx2'><span>REGION</span><span>{settings.region}</span></div>
          <div className='bx2'><span>PUNKBUSTER</span><span>{settings.punkbuster}</span></div>
          <div className='bx2'><span>FAIRFIGHT</span><span>{settings.fairfight}</span></div>
          <div className='bx2'><span>PASSWORD</span><span>{settings.password}</span></div>
          <div className='bx2'><span>PRESET</span><span>{settings.preset}</span> </div> */}
        </div>
        <div className="bx1">
          Advanced
          {/* <div className='bx2'><span>MINIMAP</span><span>{advanced.minimap}</span></div>
          <div className='bx2'><span>ONLY SQUAD LEADER SPAWN</span>{advanced.onlysquadleaderspawn}</div>
          <div className='bx2'><span>VEHICLES</span><span>{advanced.vehicles}</span></div>
          <div className='bx2'><span>TEAM BALANCE</span><span>{advanced.teambalance}</span></div>
          <div className='bx2'><span>MINIMAP SPOTTING</span><span>{advanced.minimapspotting}</span></div>
          <div className='bx2'><span>HUD</span><span>{advanced.hud}</span></div>
          <div className='bx2'><span>3D VEHICLE CAM</span><span>{advanced.vehiclecam}</span></div>
          <div className='bx2'><span>REGENERATIVE HEALTH</span><span>{advanced.regenerativehealth}</span></div>
          <div className='bx2'><span>KILL CAM</span><span>{advanced.killcam}</span></div>
          <div className='bx2'><span>FRIENDLY FIRE</span><span>{advanced.friendlyfire}</span></div>
          <div className='bx2'><span>SPOTTING</span><span>{advanced.spotting}</span></div>
          <div className='bx2'><span>ENEMY NAME TAGS</span><span>{advanced.enemynametags}</span></div> */}
        </div>
        <div className="bx1">
          Rules
          {/* <div className='bx2'><span>TICKETS</span><span>{rules.tickets}</span></div>
          <div className='bx2'><span>VEHICLE SPAWN DELAY</span><span>{rules.vehiclespawndelay}</span></div>
          <div className='bx2'><span>BULLET DAMAGE</span><span>{rules.bulletdamage}</span></div>
          <div className='bx2'><span>KICK AFTER TEAM KILLS</span><span>{rules.kickafterteamkills}</span></div>
          <div className='bx2'><span>PLAYER HEALTH</span><span>{rules.playerhealth}</span></div>
          <div className='bx2'><span>PLAYER RESPAWN TIME</span><span>{rules.playerrespawntime}</span></div>
          <div className='bx2'><span>KICK AFTER IDLE</span><span>{rules.kickafteridle}</span></div>
          <div className='bx2'><span>BAN AFTER KICKS</span><span>{rules.banafterkicks}</span></div> */}
        </div>
    </div>
  )
}
