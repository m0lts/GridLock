import React from "react";
import { StaticRaceInformation, DynamicRaceInformation } from "../../hooks/raceInfoErgast";
import { driverInfo } from "../../data/driverInfo";
import { PredictionForm } from "../../components/forms";
import "../../assets/global.css";
import BelgianFlag from "../../assets/interface/media/flags/belgium_flag.svg";
import { useState, useEffect } from "react";
import axios from "axios";


export default function MakePrediction() {

    const [positionCounter, setPositionCounter] = useState(1);


    // GET API RACE DATA
    const { grandPrixName } = StaticRaceInformation();
    const { qualifyingStartTime } = DynamicRaceInformation();

    const driverDetails = driverInfo;

    const [unpickedDrivers, setUnpickedDrivers] = useState(driverDetails);
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

    //   FORM HANDLING

    const [submissionResult, setSubmissionResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const formData = new FormData(event.target);
            await axios.post("/src/utils/form-handling.php", formData);

            // Set the submission result message based on success or error
            setSubmissionResult("Form submitted successfully!");
        } catch (error) {
            console.error("An error occurred:", error);
            setSubmissionResult("An error occurred while submitting the form.");
        }
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
                        {driver.firstName} {driver.lastName}
                    </li>
                    ))}
                </ul>
            </div>
            <div className="pickedDriversCont">
                <h3>Picked Drivers</h3>
                <table className="pickedDriversTable">
                    <thead className="pickedDriversTableHeader">
                        <tr>
                            <td>Position</td>
                            <td>Number</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                    {pickedDrivers.map((driver, index) => (
                    <tr key={index} onClick={() => handleUnpickDriver(driver)}>
                        <td className="position">{positionCounter + index}</td>
                        <td className="driverNumber">{driver.number}</td>
                        <td><span className="driverFirstName">{driver.firstName}</span> <span className="driverLastName">{driver.lastName}</span></td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <form method="post" onSubmit={handleSubmit}>
                {pickedDrivers.map((driver, index) => (
                    <input type="text" key={index} name={`P${index + 1}`} defaultValue={driver.lastName} />
                ))}
                <input type="submit" value="Submit"/>
            </form>
            {submissionResult && <p>{submissionResult}</p>}
        </div>
    )
}