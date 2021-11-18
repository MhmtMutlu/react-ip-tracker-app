import React from 'react'
import "./header-info.scss"

const HeaderInfo: React.FC = () => {
  return (
    <div className='info-wrapper'>
      <div className='info-wrapper-container'>
        <div className="sections">
          <h5>IP ADDRESS</h5>
          <h2>192.212.174.101</h2>
        </div>
        <hr />
        <div className='sections'>
          <h5>LOCATION</h5>
          <h2>Brooklyn, NY 10001</h2>
        </div>
        <hr />
        <div className='sections'>
          <h5>TIMEZONE</h5>
          <h2>UTC - 05.00</h2>
        </div>
        <hr />
        <div className='sections'>
          <h5>ISP</h5>
          <h2>SpaceX Starlink</h2>
        </div>
      </div>
    </div>
  )
}

export default HeaderInfo
