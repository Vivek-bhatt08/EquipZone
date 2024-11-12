import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css'; // Use `../` to go one directory up from components to src and access assets
 // Correct path for your CSS

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const suffix = '@chitkara.edu.in';
        return email.includes('@') && email.endsWith(suffix);
    };

    const validatePassword = (password) => {
        return password.length >= 8 && password.length <= 12 && /^[a-zA-Z0-9]+$/.test(password);
    };

    const signupUser = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (!validateEmail(email)) {
            setAlert("Please enter a valid email format.");
            return;
        }

        if (!validatePassword(password)) {
            setAlert("Password must be alphanumeric and 8-12 characters long.");
            return;
        }

        if (users.some(user => user[0] === email)) {
            setAlert("Email already exists. Please choose a different one.");
            return;
        }

        users.push([email, password]);
        localStorage.setItem('users', JSON.stringify(users));
        setAlert("Signup successful! Redirecting to login...");
        setTimeout(() => navigate('/'), 2000); // Redirect after a delay
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            {alert && <div className="alert">{alert}</div>}
            <form onSubmit={signupUser}>
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
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a onClick={()=>navigate('/')}>Log In</a></p>
        </div>
    );
}

export default Signup;
