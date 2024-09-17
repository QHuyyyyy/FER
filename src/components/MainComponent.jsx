import React, { Component } from 'react'
import { Players } from './Shared/ListOfPlayers';
import ContentPre from './ContentPre';

export default class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            player: Players
        };
    }
    render() {
    return <ContentPre PlayerDate = {this.state.player}/>
    
  }
}
