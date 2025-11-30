import React, { useState } from 'react'
import './styles/Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    e.target.reset()
  }

  return (
    <section id="contacto" className="section section-alt">
      <div className="container contact-center">
        <h2 className="section-title">¿Necesitas Ayuda?</h2>
        <p className="contact-subtitle">Ponte en contacto con nosotros. Tu mensaje es importante.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Tu correo electrónico" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Tu mensaje..." rows="5" required></textarea>
          </div>
          <button type="submit" className={`cta-button ${submitted ? 'submitted' : ''}`}>
            {submitted ? '✓ ¡Mensaje enviado!' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </section>
  )
}
