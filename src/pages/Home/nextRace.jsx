import React from "react";
import "../../assets/global.css";
import BelgianFlag from "../../assets/interface/media/flags/belgium_flag.svg";
import BelgianCircuit from "../../assets/interface/media/circuits/belgium_track.png";

export default function NextRace() {
    return (
        <section className="nextRaceBanner">
            <div className="bannerHeroTop">
                <h3>Round 12</h3>
                <img src={BelgianFlag} alt="Belgian Flag" className="flagFill"/>
                <h3>28-30 July</h3>
            </div>
            <div className="bannerHeroMain">
                <div className="heroMainLeft">
                    <div>
                        <h1 className="raceCountry">Belgium</h1>
                        <h2 className="raceName">Formula 1 MSC Cruises Belgian Grand Prix 2023</h2>
                    </div>
                    <div className="timerBox">
                        <h3 className="timerTitle">Starts in:</h3>
                        <h1 className="timer">21:03:57</h1>
                    </div>
                </div>
                <div className="heroMainRight">
                    <img src={BelgianCircuit} alt="Spa-Francorchamps Circuit" className="circuitFill"/>
                </div>
            </div>
        </section>
    )
}