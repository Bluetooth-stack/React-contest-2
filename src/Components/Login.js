import React, { useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import userContext from "../context/userContext";

const Login = () => {

    let [name, setName] = useState('');
    let [pass, setPass] = useState('');
    let [error, setError] = useState('');
    let [success, setSuccess] = useState('');

    const navigate = useNavigate();

    // const {user, setUser} = useContext(userContext)

    async function loginHandle(e) {
        e.preventDefault();
        try {
            const response = await axios('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify({
                    username: name,
                    password: pass,
                })
            })
            setError('')
            setSuccess('Logged in successfully!')
            console.log(response);
            localStorage.setItem('user',JSON.stringify(response.data));
            // setUser(response.data);
            setTimeout(()=>{
                navigate('/profile')
            }, 1000)
        }
        catch (err) {
            console.log(new Error(err));
            setError("Cradentials doesn't match!")
            setSuccess("")
        }
    }

    return (
        <div>
            <form id="loginForm" onSubmit={(e) => { loginHandle(e) }}>
                <h1>Login</h1>
                <div className="box">
                    <input type="text" name="username" id="username" required onChange={(e) => { setName(e.target.value) }} />
                    <span>Username / Email</span>
                </div>

                <div className="box">
                    <input type="password" id="pass" required onChange={(e) => { setPass(e.target.value) }} />
                    <span>Password</span>
                </div>

                <p className="success">{success}</p>
                <p className="error">{error}</p>
                <button type="submit" id="login" >Login</button>
            </form>
        </div>
    )
}

export default Login;