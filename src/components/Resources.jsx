import React from 'react'
import './styles/Resources.css'

export default function Resources() {
  const resources = [
    {
      icon: 'fa-phone',
      title: 'Líneas de Ayuda',
      description: 'Contacta con profesionales que pueden ayudarte 24/7',
      link: 'https://www.google.com/search?q=lineas+de+ayuda+contra+el+bullying+Peru',
      linkText: 'Ver números'
    },
    {
      icon: 'fa-book',
      title: 'Material Educativo',
      description: 'Descarga guías y recursos para educadores',
      link: 'https://www.google.com/search?q=Material+Educativo+contra+el+bullying+Peru',
      linkText: 'Ver material'
    },
    {
      icon: 'fa-user',
      title: 'Apoyo Psicológico',
      description: 'Encuentra profesionales especializados en tu área',
      link: 'https://www.gob.pe/62013-reportar-casos-de-violencia-escolar-en-la-plataforma-siseve-del-minedu',
      linkText: 'Ver información'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Recursos Útiles</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-icon">
                <i className={`fas ${resource.icon}`}></i>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                {resource.linkText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
