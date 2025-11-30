import React from 'react'
import './styles/Hero.css'

export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <img src={`${baseUrl}img/Logo.png`} alt="Logo" className="hero-logo" />
        <p className="hero-subtitle">Educación, prevención y apoyo para un ambiente escolar seguro</p>
        <button 
          className="cta-button"
          onClick={() => {
            document.getElementById('que-es').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Aprende más
        </button>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  )
}
