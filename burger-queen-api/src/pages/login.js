import React,{useState} from 'react';
import { auth } from '../firebase-config';
import { useHistory } from 'react-router-dom';
import logoBQ from '../assets/burger-queen-logo.png'
import '../styles/login.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
 

function Login ({handlesetAuthentication}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mnsError, setMnsError] = useState(null)
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault();
    }
    
    const handleLoginUp = (e) => {
       // e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            history.push('/orders')
        })
        .catch((err) => {
            if(err.code === 'auth/wrong-password') { 
            setMnsError('Contraseña incorrecta')
        }
        })
    };
  
    return (
        <div className = 'login'>
            <div>
                <img className="logo" src= {logoBQ} alt="logo-burger-queen"/>
            </div>
            <div className = 'container-form'>
                <form onSubmit = {handleSubmit} className = "formLogin">
                    <div className='input-email'>
                        <input
                        type = 'text'
                        placeholder='email'
                        onChange = {(e) => {setEmail(e.target.value)}} 
                        className = 'input' 
                        />
                    </div>
                    <div className='input-password'>
                        <input
                        type='password'
                        placeholder='password'
                        onChange = {(e) => {setPassword(e.target.value)}}
                        className= 'input' 
                        />
                    </div>
                    <div className='btnLogin'>
                        <button className= 'btn-login' onClick={handleLoginUp()}>Login</button>
                    </div>
                </form>
            </div>
            { 
            mnsError !== null ?
            (<div className =''> {mnsError} </div>) : (<span></span>)
            }           
        </div>
    )
};

export default Login;