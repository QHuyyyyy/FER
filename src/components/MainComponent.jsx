import React, { Component } from 'react'
import ContentPre from './ContentPre';
import { Orchids } from './Shared/ListOfOrchids';

export default class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            Orchid: Orchids
        };
    }
    render() {
    return <ContentPre Orchids = {this.state.Orchid}/>
    
  }
}
