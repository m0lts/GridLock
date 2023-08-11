import React from "react";
import { RaceInformation, DriverInformation } from "../../hooks/raceInfoErgast";
import { PredictionForm } from "../../components/forms";
import "../../assets/global.css";
import BelgianFlag from "../../assets/interface/media/flags/belgium_flag.svg";
import { useState } from "react";


export default function MakePrediction({...props}) {
    // GET API DATA
    const { grandPrixName, qualifyingStartTime } = RaceInformation();

    // HANDLE PICKED DRIVER LISTS
    const initialUnpickedDrivers = [
        { number: 5, name: "Alex ALBON"}, 
        { number: 10, name: "Fernando ALONSO"}, 
        { number: 10, name: "Valterri BOTTAS"}, 
        { number: 10, name: "Pierre GASLY"}, 
        { number: 10, name: "Lewis HAMILTON"}, 
        { number: 10, name: "Niko HULKENBERG"}, 
        { number: 10, name: "Charles LECLERC"}, 
        { number: 10, name: "Kevin MAGNUSSEN"}, 
        { number: 10, name: "Lando NORRIS"}, 
        { number: 10, name: "Esteban OCON"}, 
        { number: 10, name: "Sergio PEREZ"}, 
        { number: 10, name: "Oscar PIASTRI"}, 
        { number: 10, name: "Daniel RICCIARDO"}, 
        { number: 10, name: "George RUSSELL"}, 
        { number: 10, name: "Carlos SAINZ"}, 
        { number: 10, name: "Logan SARGEANT"}, 
        { number: 10, name: "Lance STROLL"}, 
        { number: 10, name: "Yuki TSUNODA"}, 
        { number: 10, name: "Max VERSTAPPEN"}, 
        { number: 10, name: "Guanyo ZHOU"}
    ];

    const [unpickedDrivers, setUnpickedDrivers] = useState(initialUnpickedDrivers);
    const [pickedDrivers, setPickedDrivers] = useState([]);

    const handlePickDriver = (driver) => {
        if (pickedDrivers.length < 10) {
        const updatedUnpickedDrivers = unpickedDrivers.filter((d) => d !== driver);
        setUnpickedDrivers(updatedUnpickedDrivers);
        setPickedDrivers((prevPickedDrivers) => [...prevPickedDrivers, driver]);
        }
      };

      const handleUnpickDriver = (driver) => {
        const updatedPickedDrivers = pickedDrivers.filter((d) => d !== driver);
        setPickedDrivers(updatedPickedDrivers);
        setUnpickedDrivers((prevUnpickedDrivers) => [...prevUnpickedDrivers, driver]);
      };



    

    return (
        <div className="makePredictionWindow">
            <div className="makePredictionInfo">
                <h6 className="qualifyingCountdown">Predictions close in: {qualifyingStartTime}</h6>
                <p className="infoText">Make your prediction for the {grandPrixName} below by selecting your Top 10 drivers.</p>
            </div>
            <div className="unpickedDriversCont">
                <h3>Unpicked Drivers</h3>
                <ul className="unpickedDrivers">
                    {unpickedDrivers.map((driver, index) => (
                    <li key={index} className="unpickedDriver" onClick={() => handlePickDriver(driver)}>
                        {driver.name}
                    </li>
                    ))}
                </ul>
            </div>
            <div className="pickedDriversCont">
                <h3>Picked Drivers</h3>
                <table className="pickedDrivers">
                    <thead>
                        <tr>
                            <td>Number</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                    {pickedDrivers.map((driver, index) => (
                    <tr key={index} onClick={() => handleUnpickDriver(driver)}>
                        <td>{driver.number}</td>
                        <td>{driver.name}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* <PredictionForm /> */}
        </div>
    )
}