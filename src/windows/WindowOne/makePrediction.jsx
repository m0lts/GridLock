import React from "react";
import { StaticRaceInformation, DynamicRaceInformation } from "../../hooks/raceInfoErgast";
import { DriverInformation } from "../../hooks/driverInfoErgast";
import { PredictionForm } from "../../components/forms";
import "../../assets/global.css";
import BelgianFlag from "../../assets/interface/media/flags/belgium_flag.svg";
import { useState, useEffect } from "react";


export default function MakePrediction() {
    // GET API RACE DATA
    const { grandPrixName } = StaticRaceInformation();
    const { qualifyingStartTime } = DynamicRaceInformation();
    
    // GET API DRIVER DATA
    const { drivers } = DriverInformation();
    // HANDLE PICKED DRIVER LISTS
    const initialUnpickedDrivers = drivers.map(driver => ({
        number: driver.permanentNumber,
        givenName: driver.givenName,
        familyName: driver.familyName,
        fullName: `${driver.givenName} ${driver.familyName}`,
        code: driver.code,
    }));


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
                        {driver.number}
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
                        <td>{driver.fullName}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}