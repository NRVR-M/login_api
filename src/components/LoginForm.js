import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

function login(e) {
    e.preventDefault();
    // const url = 'API URL'; then json the data etc
}

    return (
        <form
            id=" customer"
            onSubmit={login}>
<br />
            <div>
                <label htmlFor="username">Benutzername:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    required />
            </div>
            <div>
                <br />
                <label htmlFor="password">Passwort:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required />
            </div>
            {/*Momentane Lösung  */}
            <button onClick={() => navigate('/eingeloggt')}>
                Login
            </button>
        </form>
    )
};