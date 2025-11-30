import React, { useState } from 'react'
import './styles/BullyingTypes.css'

export default function BullyingTypes() {
  const [activeTab, setActiveTab] = useState('fisico')

  const types = {
    fisico: {
      title: 'Bullying Físico',
      image: '/AltoAlBullying/img/BullyingFisico.jpg',
      description: 'Incluye golpes, empujones, daño de propiedades y cualquier contacto físico que cause daño. Es el tipo más evidente pero también el más fácil de detectar.',
      items: ['Golpes y empujones', 'Robo de pertenencias', 'Daño a la propiedad', 'Gestos intimidantes']
    },
    verbal: {
      title: 'Bullying Verbal',
      image: '/AltoAlBullying/img/BullyingVerbal.webp',
      description: 'Consiste en insultos, burlas, críticas constantes y humillación. Es más difícil de detectar pero genera daño psicológico considerable.',
      items: ['Insultos y groserías', 'Burlas permanentes', 'Críticas hirientes', 'Amenazas verbales']
    },
    social: {
      title: 'Bullying Social',
      image: '/AltoAlBullying/img/BullyingSocial.webp',
      description: 'Implica exclusión deliberada, rumores y daño a la reputación social. Afecta profundamente la autoestima y el sentido de pertenencia.',
      items: ['Exclusión de grupos', 'Propagación de rumores', 'Aislamiento deliberado', 'Rechazo público']
    },
    cibernetico: {
      title: 'Ciberacoso (Cyberbullying)',
      image: '/AltoAlBullying/img/Ciberacoso.jpg',
      description: 'Acoso a través de internet, redes sociales y dispositivos digitales. Es persistente, llega a millones y deja registros permanentes.',
      items: ['Mensajes ofensivos', 'Publicaciones hirientes', 'Suplantación de identidad', 'Difusión de fotos sin consentimiento']
    }
  }

  return (
    <section id="tipos" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Tipos de Bullying</h2>
        
        <div className="tabs">
          {Object.keys(types).map(key => (
            <button 
              key={key}
              className={`tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {key === 'fisico' ? 'Físico' : key === 'verbal' ? 'Verbal' : key === 'social' ? 'Social' : 'Cibernético'}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <div className="tab-pane active">
            <div className="tab-info">
              <img src={types[activeTab].image} alt={types[activeTab].title} className="tab-image" />
              <div>
                <h3>{types[activeTab].title}</h3>
                <p>{types[activeTab].description}</p>
                <ul className="bullet-list">
                  {types[activeTab].items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
