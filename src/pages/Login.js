import React from "react";
import LoginForm from "../components/LoginForm";
// import ApiRequest from "../components/ApiRequest";
import MainNavigation from "../components/MainNavigation";

function Login() {

    return (
        <div>
            <header>
                <MainNavigation />
            </header>
            <LoginForm />

        </div>
    )
}

export default Login;