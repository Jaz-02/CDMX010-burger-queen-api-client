import React, { Component } from 'react'
import axios from 'axios';
import md5 from 'md5';

const baseUrl ='http://localhost:3001/usuarios'

class Login extends Component {
  state = {
    form: {
      email:'',
      password:''
    }
  }
  handleChange = async e =>{
    await this.setState({
      from:{
        ...this.state.from,
        [e.target.name]: e.target.value
      }
    })
  }

iniciarSesion = async () => {
  await axios.get(baseUrl, {params:{ email: this.state.form.email, password: md5(this.state.form.password)}})
  .then(response =>{
    console.log(response.data);
  })
  .catch(error =>{
    console.log(error);
  })
} 
  
  render() {
    return (
    <div className="containerPrincipal">
      <div className="containerSecond">
        <div className= "form-group">
          
          <input
          type = 'text'
          placeholder = 'email'
          name = 'email'
          onChange = {this.handleChange}
          />
          <br />
          <input
          type = 'password'
          placeholder = 'password'
          name = 'password'
          onChange = {this.handleChange}
          />
          <br />
          <button onClick={() => this.iniciarSesion()}>Login</button>
        </div> 
      </div>
    </div>
    );  
  } 
}

export default Login;