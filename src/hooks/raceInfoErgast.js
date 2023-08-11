import { useEffect, useState } from "react";
import { circuitNames, circuitFlags, circuitTracks } from "../data/circuitInfo";
import React from "react";

export function RaceInformation() {
    const [round, setRound] = useState('');
    const [flag, setFlag] = useState('');
    const [circuitName, setCircuitName] = useState('');
    const [circuitTrackImg, setCircuitTrackImg] = useState('');
    const [raceName, setRaceName] = useState('');
    const [grandPrixName, setGrandPrixName] = useState('');
    const [raceStartTime, setRaceStartTime] = useState('');
    const [qualifyingStartTime, setQualifyingStartTime] = useState('');

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

                // SET GRAND PRIX NAME
                const grandPrixName = deconstructedAPI.raceName;
                setGrandPrixName(grandPrixName);

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

                // SET QUALIFYING TIME COUNTDOWN
                const qualiTime = deconstructedAPI.Qualifying.time;
                let qualiTimeString = qualiTime.split("");
                qualiTimeString.pop();
                qualiTimeString[1]++;
                const returnedQualiTime = qualiTimeString.join("");
                const qualiDate = deconstructedAPI.Qualifying.date;
                let qualiCountdownDate = new Date(`${qualiDate} ${returnedQualiTime}`);
                let qualiCountdown = setInterval(function() {
                    let now = new Date().getTime();
                    let distance = qualiCountdownDate - now;
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
                    setQualifyingStartTime(addZero(days) + ":" + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds));
                    if (distance < 0) {
                        clearInterval(qualiCountdown);
                        setQualifyingStartTime('00:00:00');
                    }
                }, 1000);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return {
        round,
        flag,
        circuitName,
        circuitTrackImg,
        raceName,
        grandPrixName,
        raceStartTime,
        qualifyingStartTime
    }
}

export function DriverInformation() {
    useEffect(() => {
        async function fetchDriverData() {
            const responses = await fetch('https://ergast.com/api/f1/current/drivers.json');
            const datas = await responses.json();
            console.log(datas);
        }
        fetchDriverData()
    }, []);
    
}
