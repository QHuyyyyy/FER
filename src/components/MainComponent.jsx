import React, { Component } from 'react'
import ContentPre from './ContentPre';
import { Players } from './Shared/ListOfPlayers';

export default class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            players: Players
        };
    }
    render() {
    return <ContentPre players = {this.state.players}/>
    
  }
}
