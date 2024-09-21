import React, { Component } from 'react'
import './Container/Player.css'
export default function ContentPre({players}) {
   console.log(players)
    return (
      <div className="container">
      <div className="row">
        {players.map(players=> (
          <div className="column">
          <div className="card">
            <img src={players.img} alt={players.image} />
            <h2>{players.id}</h2>
            <h3>{players.name}</h3>
            <p className="title">{players.club}</p> <br />
            <button>Detail</button>
          </div>
        </div>
        ))}
      </div>
    </div>
    
    )
}
