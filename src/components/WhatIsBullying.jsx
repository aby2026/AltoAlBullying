import React from 'react'
import './styles/WhatIsBullying.css'

export default function WhatIsBullying() {
  const cards = [
    {
      icon: 'fa-exclamation-triangle',
      title: 'Definición',
      description: 'El bullying es el acoso reiterado a una persona por parte de uno o varios individuos con el objetivo de intimidar, excluir o dañar su autoestima.'
    },
    {
      icon: 'fa-users',
      title: 'Participantes',
      description: 'Involucra a acosadores, víctimas y espectadores. Todos tenemos un papel importante en detener el acoso escolar.'
    },
    {
      icon: 'fa-clock',
      title: 'Repetición',
      description: 'A diferencia de conflictos puntuales, el bullying es un patrón de comportamiento repetido y persistente en el tiempo.'
    }
  ]

  return (
    <section id="que-es" className="section">
      <div className="container">
        <h2 className="section-title">¿Qué es el Bullying?</h2>
        <div className="content-grid">
          {cards.map((card, index) => (
            <div key={index} className="content-card">
              <div className="card-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
