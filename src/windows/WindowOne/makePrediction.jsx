import React from "react";
import { RaceInformation } from "../../hooks/raceInfoErgast";
import { PredictionForm } from "../../components/forms";
import "../../assets/global.css";
import BelgianFlag from "../../assets/interface/media/flags/belgium_flag.svg";


export default function MakePrediction({...props}) {
    const { grandPrixName, qualifyingStartTime } = RaceInformation();

    return (
        <div className="makePredictionWindow">
            <div className="makePredictionInfo">
                <h6 className="qualifyingCountdown">Predictions close in: {qualifyingStartTime}</h6>
                <p className="infoText">Make your prediction for the {grandPrixName} below.</p>
            </div>
            <ul className="unpickedDrivers">
                <li className="unpickedDriver">
                    <span className="unpickedDriverNumber">44</span>
                    <span className="unpickedDriverSurname">hamilton</span>
                </li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
                <li className="unpickedDriver"></li>
            </ul>

        </div>
    )
}