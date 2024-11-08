import './login.css'
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const result = await axios.post('http://localhost:3000/api/auth/login', { email, password });
            console.log(result);
            localStorage.setItem('token', result.data.authtoken);
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data) {
                setError(err.response.data.error || "Failed to Login. Please try again.");
            } else {
                setError("Failed to Login. Please try again.");
            }
        }
    }

    return(
        <>
        <div className="login-main">
            <form action="" method="post" onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Enter your email" value={email} id="" onChange={handleEmailChange} />
                <input type="password" name="password" placeholder="Enter your Password" value={password} id="" onChange={handlePasswordChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    );
}