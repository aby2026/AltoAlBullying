import React, { useState } from 'react'
import './styles/Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <span>Rompe el silencio ¡NO MÁS BULLYING!</span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('inicio')}>Inicio</a></li>
          <li><a onClick={() => scrollToSection('que-es')}>¿Qué es?</a></li>
          <li><a onClick={() => scrollToSection('tipos')}>Tipos</a></li>
          <li><a onClick={() => scrollToSection('consejos')}>Consejos</a></li>
          <li><a onClick={() => scrollToSection('contacto')}>Contacto</a></li>
        </ul>
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
