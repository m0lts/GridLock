import React from "react";
import "../assets/global.css";

// Check if user is logged in - if truthy, return solid icon, else return empty one.
function Icon({isLoggedIn}) {
    if (isLoggedIn) {
        return <span><i class="fa-solid fa-user"></i> Account</span>;
    }
    return <span><i class="fa-regular fa-user"></i> Log In</span>;
}



export function SignUpBtn() {
    return (
        <button className="btn signUpBtn">
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign Up
        </button>
    )
}

export function LoginBtn() {
    return (
        <button className="btn loginBtn">
            <Icon 
                isLoggedIn={false}
            />
        </button>
    )
}

export function SubmitBtn() {
    return (
        <button className="btn submitBtn">
            Submit
        </button>
    )
}