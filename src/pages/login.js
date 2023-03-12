import React, { useState } from 'react'
import axios from 'axios'

function LoginPage() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(credentials);
        try {
            const res = await axios.post('/api/auth/login', credentials)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="email@site.com"
                    onChange={handleChange}
                />
                <input name='password' type="password" placeholder="********"
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage