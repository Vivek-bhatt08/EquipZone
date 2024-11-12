import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css'; // Use `../` to go one directory up from components to src and access assets
 // Updated CSS path

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const suffix = '@chitkara.edu.in';
        return email.includes('@') && email.endsWith(suffix);
    };

    const loginUser = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (!validateEmail(email)) {
            setAlert("Please enter a valid email format.");
            return;
        }

        const user = users.find(user => user[0] === email && user[1] === password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify({ email, password }));
            window.location.href = '/index.html'; // Redirect to home page after successful login
        } else {
            setAlert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {alert && <div className="alert">{alert}</div>}
            <form onSubmit={loginUser}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <a onClick={()=>navigate('/signup')}>Sign Up</a></p>
        </div>
    );
}

export default Login;
