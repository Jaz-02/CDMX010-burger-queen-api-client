import React, { useState } from 'react'
import axios from 'axios';
import md5 from 'md5';

const baseUrl ='http://localhost:3001/usuarios'

const Login = () => {
  const [form, setValues] = useState({
    email : '',
    password: '',
  });


  const handleInput = async event => {
    await setValues({
      ...form, 
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form)
  }

  loginUp = async () => {
      await axios.get(baseUrl, {params:{ email: useState.form.email, password: md5(useState.form.password)}})
      .then(response =>{
        console.log(response.data);
      })
      .catch(error =>{
        console.log(error);
      })
    } 

  return (
    <div className="containerPrincipal">
      <div className="containerSecond">
        <form className= "form-group" onSubmit = {handleSubmit}>
          <input
          type = 'text'
          placeholder = 'email'
          name = 'email'
          onChange = {handleInput}
          />
          <br />
          <input
          type = 'password'
          placeholder = 'password'
          name = 'password'
          onChange = {handleInput}
          />
          <br />
          <button onClick={() => loginUp()}>Login</button>
        </form> 
      </div>
    </div>
    );  
  } 


export default Login;