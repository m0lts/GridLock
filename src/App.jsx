import { useState } from 'react';
import Header from './components/header';
import Home from './pages/Home/home';
import './assets/global.css';


function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  )
}

export default App
