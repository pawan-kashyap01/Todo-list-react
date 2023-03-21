import React, { Component } from 'react'
//RAJ@123m
class MyLifeComponent extends Component {
    constructor(){
        super();
        this.state ={
            name:'Pawan'
        }
        console.log('Constructor ran');
    }

    componentDidMount(){
        if(window.innerWidth<1000){
            this.setState({innerWidth:window.innerWidth});
            console.log('if Ran')
        }
        console.log('Component didMount ran ',this.state);
    }
    render() {
        console.log('render');
    return (
      <div>
         <h2>{this.state.name}</h2>
         age:{this.state.age}
         width:{this.state.innerWidth}
      </div>
    )
  }
}


export default MyLifeComponent;