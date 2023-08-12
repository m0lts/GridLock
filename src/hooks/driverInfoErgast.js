import { useEffect, useState } from "react";


export function DriverInformation() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        async function fetchDriverData() {
            try {
                const response = await fetch('https://ergast.com/api/f1/current/drivers.json');
                const data = await response.json();
                const driverData = data.MRData.DriverTable.Drivers;
                setDrivers(driverData);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchDriverData()
    }, []);

    return {
        drivers
    }
    
}