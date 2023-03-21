import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',
        flavour:'coconut',
        desc:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        console.log(event);
      this.setState({name: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
    //   alert('A name was submitted: ' + this.state);
      console.log(this.state);
      this.setState({name: ''});
      this.setState({flavour: 'coconut',desc:''});
    }
  
    render() {
      return (
        <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Item:</label>
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          
          <br/>
          <label htmlFor="flavour">Flavor:</label>
          <select name="flavour" value={this.state.flavour} onChange={(e)=>{this.setState({flavour:e.target.value})}} id="flavour">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        <br/>
          <label htmlFor="desc">Description:</label>
            <textarea name="desc" value={this.state.desc} onChange={(e)=>{console.log(e);this.setState({desc: e.target.value})}} id="desc"/>    
          <input type="submit" value="Submit" />
        </form>
            </>
      );
    }
  }
  