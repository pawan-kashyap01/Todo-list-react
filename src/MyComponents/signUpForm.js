import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }
 render () {
   return (
     <form className='signUpForm'>
       <h2>Sign up</h2>
       <div className='form-group'>
         <label htmlFor='email'>Email address</label>
         <input type='email' className='form-control' value={this.state.email} onChange={(e)=>this.handleUserInput(e)}
           name='email' />
       </div>
       <div className='form-group'>
         <label htmlFor='password'>Password</label>
         <input type='password' className='form-control' value={this.state.password} onChange ={(e)=>{this.handleUserInput(e)}}
           name='password' />
       </div>
       <button type='submit' className='btn btn-primary'>
          Sign up
       </button>
     </form>
   )
 }
}
export default SignUpForm;