import React from 'react'
import './styles/AlertSignals.css'

export default function AlertSignals() {
  const signals = [
    { icon: 'fa-face-sad-tear', title: 'Cambios Emocionales', description: 'Tristeza persistente, ansiedad, baja autoestima, depresión o cambios bruscos en el estado de ánimo.' },
    { icon: 'fa-bed', title: 'Cambios en Hábitos', description: 'Problemas de sueño, cambios en el apetito, fatiga constante o falta de energía.' },
    { icon: 'fa-book', title: 'Académico', description: 'Disminución del rendimiento escolar, falta de concentración, pérdida de interés en la educación.' },
    { icon: 'fa-users-slash', title: 'Aislamiento Social', description: 'Evitar interacciones sociales, rechazo a salir, pérdida de amistades o aislamiento voluntario.' },
    { icon: 'fa-exclamation', title: 'Comportamiento', description: 'Silencio defensivo, evasión de preguntas, regreso a casa con ropa rasgada o marcas.' },
    { icon: 'fa-phone', title: 'Tecnología', description: 'Uso excesivo de redes sociales, comportamiento evasivo con dispositivos o miedo a notificaciones.' }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Señales de Alerta</h2>
        <div className="signals-grid">
          {signals.map((signal, index) => (
            <div key={index} className="signal-card">
              <h3><i className={`fas ${signal.icon}`}></i> {signal.title}</h3>
              <p>{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
