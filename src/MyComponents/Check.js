import React, { Component } from 'react'
import MyClock from './MyClock';

export default class Check extends Component {
    constructor(){
        super();
        this.state={clockCheck:true,
        name:'"Check-component"'}    
    }
    componentDidMount(){
        console.log('Check didmount')
        this.timerId = setTimeout(
            ()=>{ this.setState({clockCheck:false})}
            ,15000);   
        this.timerId = setTimeout(
            ()=>{ this.setState({name:'"Check-component-updated"'})}
            ,7000);   
    }
  render() {
    return (
      <div>
        { this.state.clockCheck ? <MyClock step={3} name={this.state.name}/> :''
        }
        <Toggle/>
      </div>
    )
  }
}


class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }