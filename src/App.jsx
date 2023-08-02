import { useState } from 'react';
import Header from './components/header';
import NextRace from './pages/Home/nextRace';
import MakePrediction from './pages/Home/makePrediction';
import StandingsWindow from './pages/Home/standingsWindow';
import PrevRoundStats from './pages/Home/prevRoundStats';
import './assets/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <NextRace />
        <section className="homeMiddleSection">
          <MakePrediction />
          <StandingsWindow />
        </section>
        <section className="homeBottomSection">
          <PrevRoundStats />
        </section>
      </main>
    </>
  )
}

export default App
