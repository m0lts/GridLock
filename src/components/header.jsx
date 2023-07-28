import React from "react";
import logo from "../assets/interface/logos/logo_standard_vector.svg";
import { SignUpBtn } from "./buttons";
import { LoginBtn } from "./buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import "../assets/global.css";

export default function Header() {
    return (
        <header>
            <div className="headerLeftFlex">
                <img src={logo} alt="GridLock Logo" className="logoImg" />
                <ul className="navList">
                    <li className="navItem onPage">
                        <FontAwesomeIcon icon={faFlagCheckered} className="iconNarrowWindow"/>
                        Next Race
                    </li>
                    <li className="navItem">
                        <FontAwesomeIcon icon={faListOl} className="iconNarrowWindow"/>
                        Standings
                    </li>
                    <li className="navItem">
                        <FontAwesomeIcon icon={faCalendar} className="iconNarrowWindow"/>
                        Calendar
                    </li>
                    <li className="navItem narrowScreen">
                        <FontAwesomeIcon icon={faUser} className="iconNarrowWindow"/>
                        Login
                    </li>
                </ul>
            </div>
            <div className="headerRightFlex">
                <SignUpBtn />
                <LoginBtn />
            </div>
        </header>
    )
}