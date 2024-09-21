import React, { Component } from 'react'
import './Player.css'
import { Players } from '../Shared/ListOfPlayers'
export default class Player extends Component {
  render() {
   
    return (
        <div className="container">
        <div className="row">
          {Players.map(player=> (
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
}
