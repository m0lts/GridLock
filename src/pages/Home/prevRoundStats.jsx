import React from "react";
import "../../assets/global.css";
import hungary_flag from "../../assets/interface/media/flags/hungary_flag.svg";

export default function PrevRoundStats() {
    return (
        <div className="prevRoundStats">
            <h3>Last Round Stats</h3>
            <div className="prevRoundStatsFlexbox">
                <div className="prevRaceResultCont">
                    <div className="prevRaceResultTitle">
                        <img src={hungary_flag} alt="" />
                        <h4 className="pRSubtitle">Hungary Race Result</h4>
                    </div>
                    <ul className="prevRaceResult">
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                        <li className="prevResultItem">
                            <span className="driverNum">33</span>
                            <span className="driverFN">Max</span>
                            <span className="driverSN">Verstappen</span>
                        </li>
                    </ul>
                </div>
                <div className="prevRoundStatsBox">
                    <div className="pointsScored">
                        <h4>Points Scored</h4>
                        <p className="pointsBig">14</p>
                    </div>
                    <div className="avgPointsScored">
                        <h4>Average Points Scored</h4>
                        <p className="pointsBig">12.1</p>
                    </div>
                    <div className="topPointsScored">
                        <h4>Top Points Scored</h4>
                        <p className="pointsBig">31</p>
                    </div>
                </div>
            </div>
        </div>
    )
}