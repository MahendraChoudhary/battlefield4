import {React} from 'react'
import './styles.css'

export default function Browserinfo(serverdata) {
  const {settings, advanced, rules} = serverdata;
  const {region, punkbuster, fairfight, password, preset} = {...settings};
  const {minimap, onlysquadleaderspawn, vehicles, teambalance, hud, vehiclecam, regenerativehealth, killcam, friendlyfire, spotting, enemynametags} = {...advanced};
  const {tickets, vehiclespawndelay, bulletdamage, kickafterteamkills, playerhealth, playerrespawntime, kickafteridle, banafterkicks} = {...rules};

  return (
    <div className="parent1 heading4">
        <div className="bx1">
          Settings
          <div className='bx2'><span>REGION</span><span>{region}</span></div>
          <div className='bx2'><span>PUNKBUSTER</span><span>{punkbuster}</span></div>
          <div className='bx2'><span>FAIRFIGHT</span><span>{fairfight}</span></div>
          <div className='bx2'><span>PASSWORD</span><span>{password}</span></div>
          <div className='bx2'><span>PRESET</span><span>{preset}</span> </div>
        </div>
        <div className="bx1">
          Advanced
          <div className='bx2'><span>MINIMAP</span><span>{minimap}</span></div>
          <div className='bx2'><span>ONLY SQUAD LEADER SPAWN</span>{onlysquadleaderspawn}</div>
          <div className='bx2'><span>VEHICLES</span><span>{vehicles}</span></div>
          <div className='bx2'><span>TEAM BALANCE</span><span>{teambalance}</span></div>
          <div className='bx2'><span>MINIMAP SPOTTING</span><span>on</span></div>
          <div className='bx2'><span>HUD</span><span>{hud}</span></div>
          <div className='bx2'><span>3D VEHICLE CAM</span><span>{vehiclecam}</span></div>
          <div className='bx2'><span>REGENERATIVE HEALTH</span><span>{regenerativehealth}</span></div>
          <div className='bx2'><span>KILL CAM</span><span>{killcam}</span></div>
          <div className='bx2'><span>FRIENDLY FIRE</span><span>{friendlyfire}</span></div>
          <div className='bx2'><span>SPOTTING</span><span>{spotting}</span></div>
          <div className='bx2'><span>ENEMY NAME TAGS</span><span>{enemynametags}</span></div>
        </div>
        <div className="bx1">
          Rules
          <div className='bx2'><span>TICKETS</span><span>{tickets}</span></div>
          <div className='bx2'><span>VEHICLE SPAWN DELAY</span><span>{vehiclespawndelay}</span></div>
          <div className='bx2'><span>BULLET DAMAGE</span><span>{bulletdamage}</span></div>
          <div className='bx2'><span>KICK AFTER TEAM KILLS</span><span>{kickafterteamkills}</span></div>
          <div className='bx2'><span>PLAYER HEALTH</span><span>{playerhealth}</span></div>
          <div className='bx2'><span>PLAYER RESPAWN TIME</span><span>{playerrespawntime}</span></div>
          <div className='bx2'><span>KICK AFTER IDLE</span><span>{kickafteridle}</span></div>
          <div className='bx2'><span>BAN AFTER KICKS</span><span>{banafterkicks}</span></div>
        </div>
    </div>
  )
}
