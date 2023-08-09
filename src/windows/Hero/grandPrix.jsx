import React, { useState, useEffect } from "react";
import { circuitNames, circuitFlags, circuitTracks } from "../../data/circuitInfo";
import "../../assets/global.css";
import BelgianFlag from "../../assets/interface/media/flags/belgium_flag.svg";
import BelgianCircuit from "../../assets/interface/media/circuits/belgium_track.png";

export default function GrandPrix() {
    const [round, setRound] = useState('');
    const [flag, setFlag] = useState('');
    const [circuitName, setCircuitName] = useState('');
    const [circuitTrackImg, setCircuitTrackImg] = useState('');
    const [raceName, setRaceName] = useState('');
    const [raceStartTime, setRaceStartTime] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                // CALL API
                const response = await fetch('https://ergast.com/api/f1/current/next.json');
                const data = await response.json();
                const deconstructedAPI = data.MRData.RaceTable.Races[0];

                // SET ROUND NUMBER
                const roundNumber = deconstructedAPI.round;
                setRound(roundNumber);

                // SET FLAG
                const circuitCountry = deconstructedAPI.Circuit.Location.country;
                const countryFlag = circuitFlags[circuitCountry];
                setFlag(countryFlag);

                // SET CIRCUIT IMG
                const raceName = deconstructedAPI.raceName;
                const circuitTrack = circuitTracks[raceName];
                setCircuitTrackImg(circuitTrack);

                // SET CIRCUIT NAME
                const circuitName = circuitNames[raceName];
                setCircuitName(circuitName);

                // SET SECONDARY CIRCUIT NAME
                const technicalCircuitName = deconstructedAPI.Circuit.circuitName;
                setRaceName(technicalCircuitName);

                // SET RACE TIME COUNTDOWN
                const raceTime = deconstructedAPI.time;
                let timeString = raceTime.split("");
                timeString.pop();
                timeString[1]++;
                const returnedRaceTime = timeString.join("");
                const raceDate = deconstructedAPI.date;
                let countdownDate = new Date(`${raceDate} ${returnedRaceTime}`);
                let countdown = setInterval(function() {
                    let now = new Date().getTime();
                    let distance = countdownDate - now;
                    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    const addZero = (num) => {
                        if (num < 10) {
                            num = "0" + num;
                            return num;
                        } else {
                            return num;
                        }
                    }
                    setRaceStartTime(addZero(days) + ":" + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds));
                    if (distance < 0) {
                        clearInterval(countdown);
                        setRaceStartTime('00:00:00');
                    }
                }, 1000);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])


    return (
        <section className="nextRaceBanner">
            <div className="heroTop">
                <img src={flag} alt={circuitName + " Flag"} className="flagFill"/>
                <h3>Round {round}</h3>
            </div>
            <div className="bannerHeroMain">
                <div className="heroMainLeft">
                    <div>
                        <h1 className="raceCountry">{circuitName}</h1>
                        <h2 className="raceName">{raceName}</h2>
                    </div>
                    <div className="timerBox">
                        <h3 className="timerTitle">Lights Out:</h3>
                        <h1 className="timer">{raceStartTime}</h1>
                    </div>
                </div>
                <div className="heroMainRight">
                    <img className="circuitImg" src={circuitTrackImg} alt={circuitName + " Track"} />
                </div>
            </div>
        </section>
    )
}