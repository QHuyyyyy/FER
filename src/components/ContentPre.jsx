import React, { Component } from 'react'

export default function ContentPre({PlayerDate}) {
   console.log(PlayerDate)
    return (
      <div className="container">
      <div className="row">
        {PlayerDate.map(player=> (
          <div className="column">
          <div className="card">
            <img src={player.img} alt={player.name} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <button>Detail</button>
          </div>
        </div>
        ))}
      </div>
    </div>
    
    )
}
