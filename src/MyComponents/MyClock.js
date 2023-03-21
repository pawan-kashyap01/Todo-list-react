import React, { Component } from 'react'

export default class MyClock extends Component {
    constructor(props){
        super(props);
        this.state={time: new Date(),
        counter: 1000}
    }
    componentDidMount(){
        console.log('Clock didmount')
        this.timerId = setInterval(
            ()=>{ this.tick();}
            ,1000);
    
    }
    componentWillUnmount(){
        console.log('Clock didunmount')
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({time: new Date()});
        // this.setState({counter: this.state.counter + this.props.step});
        this.setState((state,props)=>({
            counter: state.counter + props.step
        }))
    }
  render() {
    return (
      <div>
        <h2>From {this.props.name} Current Time is {this.state.time.toLocaleTimeString()} and counter is {this.state.counter}</h2>
      </div>
    )
  }
}

