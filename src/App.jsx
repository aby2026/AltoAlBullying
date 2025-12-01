import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsBullying from './components/WhatIsBullying'
import BullyingTypes from './components/BullyingTypes'
import AlertSignals from './components/AlertSignals'
import Advice from './components/Advice'
import Resources from './components/Resources'
import Videos from './components/Videos'
import Store from './components/Store'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <WhatIsBullying />
        <BullyingTypes />
        <AlertSignals />
        <Advice />
        <Resources />
        <Videos />
        <Store />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
