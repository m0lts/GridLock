import React from "react";
import { PredictionForm } from "../../components/forms";
import "../../assets/global.css";
import BelgianFlag from "../../assets/interface/media/flags/belgium_flag.svg";


export default function MakePrediction() {
    return (
        <div className="makePredictionWindow">
            <div className="makePredictionHeader">
                <h3 className="timerMP">21:03:57</h3>
                <h3 className="MPsubtitle">make prediction</h3>
                <img src={BelgianFlag} alt="Belgian Flag" className="MPFlag" />
            </div>
            <PredictionForm />
        </div>
    )
}