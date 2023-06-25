import React, { useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {

    let [name, setName] = useState('');
    let [pass, setPass] = useState('');
    let [error, setError] = useState('');
    let [success, setSuccess] = useState('');

    const navigate = useNavigate();

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
            if(response.message){
                setSuccess('');
                setError(response.message);
                return;
            }
            setSuccess('Logged in successfully!');
            console.log(response);
            setError('');
            setName('');
            setPass('');

            localStorage.setItem('user',JSON.stringify(response.data));
            
            const data = await axios.get(`https://dummyjson.com/users/${response.data.id}`);
            console.log(data.data);

            localStorage.setItem('userinfo', JSON.stringify(data.data));

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
                    <span>Username</span>
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