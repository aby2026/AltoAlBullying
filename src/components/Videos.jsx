import React from 'react'
import './styles/Videos.css'

export default function Videos() {
  const videos = [
    {
      id: 1,
      title: 'Prevención del Bullying - Conciencia Escolar',
      youtubeId: 'F8qKKdwRADI',
      description: 'Video educativo sobre prevención del bullying en ambientes escolares'
    },
    {
      id: 2,
      title: 'Cómo Enfrentar el Bullying',
      youtubeId: '29OnjuwekVQ',
      description: 'Estrategias y consejos prácticos para enfrentar situaciones de acoso'
    },
    {
      id: 3,
      title: 'Bullying: Impacto y Soluciones',
      youtubeId: 'bpSTJ_1tIQA',
      description: 'Análisis del impacto del bullying y soluciones efectivas'
    }
  ]

  return (
    <section id="videos" className="section">
      <div className="container">
        <h2 className="section-title">Videos Educativos</h2>
        <p className="section-subtitle">Aprende más sobre prevención y conciencia del bullying</p>
        
        <div className="videos-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
