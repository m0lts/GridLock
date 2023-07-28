import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/global.css";

// Check if user is logged in - if truthy, return solid icon, else return empty one.
function Icon({isLoggedIn}) {
    if (isLoggedIn) {
        return <span><FontAwesomeIcon icon={faUser} /> Account</span>;
    }
    return <span><FontAwesomeIcon icon={faUser} /> Log In</span>;
}



export function SignUpBtn() {
    return (
        <button className="btn signUpBtn">
            <FontAwesomeIcon icon={faArrowRightToBracket} /> 
            Sign Up
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