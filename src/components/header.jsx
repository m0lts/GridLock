import React from "react";
import logo from "../assets/interface/logos/logo_standard_vector.svg";
import { SignUpBtn } from "./buttons";
import { LoginBtn } from "./buttons";
import "../assets/global.css";

export default function Header() {
    return (
        <header>
            <div className="headerLeftFlex">
                <img src={logo} alt="GridLock Logo" className="logoImg" />
                <ul className="navList">
                    <li className="navItem onPage">Next Race</li>
                    <li className="navItem">Standings</li>
                    <li className="navItem">Calendar</li>
                </ul>
            </div>
            <div className="headerRightFlex">
                <SignUpBtn />
                <LoginBtn />
            </div>
        </header>
    )
}