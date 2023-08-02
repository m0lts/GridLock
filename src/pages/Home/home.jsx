import React from "react";
import '../../assets/global.css';
import NextRace from './nextRace';
import MakePrediction from './makePrediction';
import StandingsWindow from './standingsWindow';
import PrevRoundStats from './prevRoundStats';

export default function Home() {
    return (
        <section className="homePage">
            <NextRace />
            <section className="homeMiddleSection">
                <MakePrediction />
                <StandingsWindow />
            </section>
            <section className="homeBottomSection">
                <PrevRoundStats />
            </section>
        </section>
    )
}