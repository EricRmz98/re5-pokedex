import React, { useState } from 'react';
import '../styles/Login.css'
import logo from '../assets/pokedex-logo-small.png'
import pokeball from '../assets/background-pokeball.svg'
import { useDispatch } from 'react-redux';
import { getUserName } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitUserName = e => {
        e.preventDefault();
        dispatch(getUserName(userName));
        navigate('/pokedex')
    }

    return (
        <div className='login-body'>

            <img className='background-ball rotate' src={pokeball}/>

            <div className='login-container'>
                <img src={logo} />
                <div className='login-container-text'>
                    <h2 className='marginless-txt welcome-text'><span>Welcome trainer!</span></h2>
                    <h3 className='marginless-txt petition-text'>Enter your name to start</h3>
                </div>
                <form onSubmit={submitUserName}>
                    <input 
                    className='name-input'
                    type="text"
                    placeholder='Name' 
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    />
                    <button className='start-btn'>Start</button>
                </form>
            </div>

            <footer className='login-footer'>
                <div className='login-footer-dot'></div>
            </footer>
        </div>
    );
};

export default Login;