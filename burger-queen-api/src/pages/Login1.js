import React, { Component } from 'react';
import img from '../assets/burger-queen-logo.png'
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl ='http://localhost:3001/usuarios';
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      email:'',
      password:''
    }
  }

  handleChange = async e => {
    await this.setState({
      from:{
        ...this.state.from,
        [e.target.name]: e.target.value
      }
    });
  }

loginUp = async () => {
  await axios.get(baseUrl, {params:{ email: this.state.form.email, password: md5(this.state.form.password)}})
  .then(response =>{
    return response.data;
  })
  .then(response=>{
    if(response.length > 0){
        let respuesta = response[0];
        cookies.set('id', respuesta.id, {path: "/"});
        cookies.set('email', respuesta.email, {path: "/"});
        
        //alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
        window.location.href="./orders";
    }else{
        alert('El usuario o la contraseña no son correctos');
    }
})
.catch(error=>{
    console.log(error);
})
} 

componentDidMount() {
  if(cookies.get('email')){
    window.location.href = "./orders";
  }
}
  
  render() {
    return (
    <div className="containe">
      <div className="containerSecond">
        <img src = {img} alt ='logo' className = 'logo' />
        </div>
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
          <button onClick={() => this.loginUp()}>Login</button>
        </div> 
      
    </div>
    );  
  } 
}

export default Login;

