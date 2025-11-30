import React from 'react'
import './styles/Advice.css'

export default function Advice() {
  const adviceColumns = [
    {
      icon: 'fa-shield',
      title: 'Para Padres y Educadores',
      items: [
        'Mantén diálogo abierto y sin juzgamiento con los menores',
        'Educa sobre empatía y respeto desde temprana edad',
        'Establece reglas claras sobre el uso de internet',
        'Monitorea el comportamiento en redes sociales',
        'Reporta casos de acoso a las autoridades escolares',
        'Busca apoyo profesional cuando sea necesario'
      ]
    },
    {
      icon: 'fa-heart',
      title: 'Para Víctimas',
      items: [
        'No es tu culpa - el acoso no es responsabilidad tuya',
        'Habla con un adulto de confianza sobre lo que está pasando',
        'Guarda evidencia de acoso (mensajes, fotos, capturas)',
        'Evita estar solo en lugares vulnerables',
        'Mantén contacto con amigos que te apoyen',
        'Cuida tu salud mental buscando ayuda profesional'
      ]
    },
    {
      icon: 'fa-handshake',
      title: 'Para Espectadores',
      items: [
        'No participes ni alimentes el acoso con risas o comentarios',
        'Atrévete a defender a la víctima de forma segura',
        'Reporta el acoso a un adulto de confianza',
        'Ofrece apoyo y amistad a la víctima',
        'Crea conciencia entre tus compañeros',
        'Tu silencio no es neutral - tienes poder para cambiar'
      ]
    }
  ]

  return (
    <section id="consejos" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Cómo Prevenir y Actuar</h2>
        <div className="advice-container">
          {adviceColumns.map((column, index) => (
            <div key={index} className="advice-column">
              <h3><i className={`fas ${column.icon}`}></i> {column.title}</h3>
              <ul className="advice-list">
                {column.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
