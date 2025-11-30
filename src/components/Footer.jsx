import React from 'react'
import './styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>StopBullying</h4>
            <p>Trabajando juntos para crear un mundo sin acoso.</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#que-es">¿Qué es?</a></li>
              <li><a href="#tipos">Tipos</a></li>
              <li><a href="#consejos">Consejos</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 StopBullying. Todos los derechos reservados. | <a href="#">Política de Privacidad</a> | <a href="#">Términos de Servicio</a></p>
        </div>
      </div>
    </footer>
  )
}
