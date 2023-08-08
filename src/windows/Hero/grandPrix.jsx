import React from "react";
import "../../assets/global.css";
import BelgianFlag from "../../assets/interface/media/flags/belgium_flag.svg";
import BelgianCircuit from "../../assets/interface/media/circuits/belgium_track.png";

export default function GrandPrix() {
    return (
        <section className="nextRaceBanner">
            <div className="bannerRoundCarousel">
                <h3>Round 1</h3>
                <h3>Round 2</h3>
                <h3>Round 3</h3>
                <h3>Round 4</h3>
                <h3>Round 5</h3>
                <h3>Round 6</h3>
                <h3>Round 7</h3>
                <h3>Round 8</h3>
                <h3>Round 9</h3>
                <h3>Round 10</h3>
                <h3>Round 11</h3>
                <h3>Round 12</h3>
            </div>
            <div className="bannerHeroMain">
                <div className="heroMainLeft">
                    <div>
                        <img src={BelgianFlag} alt="Belgian Flag" className="flagFill"/>
                        <h1 className="raceCountry">Belgium</h1>
                        <h2 className="raceName">Formula 1 MSC Cruises Belgian Grand Prix 2023</h2>
                    </div>
                    <div className="timerBox">
                        <h3 className="timerTitle">Lights Out:</h3>
                        <h1 className="timer">21:03:57</h1>
                    </div>
                </div>
                <div className="heroMainRight">
                    <ul className="weekendSchedule">
                        <li className="sessionItem">
                            <span className="session">Practice 1:</span>
                            <span>28th July</span>
                            <span id="practice1Time">12:00</span>
                        </li>
                        <li className="sessionItem">
                            <span className="session">Practice 2:</span>
                            <span>28th July</span>
                            <span id="practice2Time">15:00</span>
                        </li>
                        <li className="sessionItem">
                            <span className="session">Practice 3:</span>
                            <span>29th July</span>
                            <span id="practice3Time">12:00</span>
                        </li>
                        <li className="sessionItem">
                            <span className="session">Qualifying:</span>
                            <span>29th July</span>
                            <span id="qualiTime">15:00</span>
                        </li>
                        <li className="sessionItem">
                            <span className="session">Race:</span>
                            <span>30th July</span>
                            <span id="raceTime">14:00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}