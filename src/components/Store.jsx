import React, { useState } from 'react'
import './styles/Store.css'

export default function Store() {
  const [cart, setCart] = useState([])

  const products = [
    {
      id: 1,
      icon: 'fa-book',
      title: 'Libro: "Conciencia Bullying"',
      description: 'Guía completa sobre prevención y concientización del acoso escolar. Perfecto para padres y educadores.',
      price: 25,
      image: '📚'
    },
    {
      id: 2,
      icon: 'fa-puzzle-piece',
      title: 'Quiz Interactivo de Bullying',
      description: 'Test dinámico para aprender sobre tipos de bullying, señales de alerta y cómo intervenir correctamente.',
      price: 20,
      image: '🧩'
    },
    {
      id: 3,
      icon: 'fa-video',
      title: 'Curso Video: Prevención y Apoyo',
      description: '5 módulos en video sobre cómo identificar, prevenir y actuar ante situaciones de bullying.',
      price: 35,
      image: '🎥'
    },
    {
      id: 4,
      icon: 'fa-lightbulb',
      title: 'Guía de Actividades Escolares',
      description: '30 actividades lúdicas y educativas para implementar en el aula y fomentar la empatía.',
      price: 40,
      image: '💡'
    },
    {
      id: 5,
      icon: 'fa-heart',
      title: 'Kit de Recursos para Víctimas',
      description: 'Materiales de apoyo psicológico, ejercicios de autoestima y cartas de esperanza para víctimas de bullying.',
      price: 35,
      image: '❤️'
    },
    {
      id: 6,
      icon: 'fa-handshake',
      title: 'Plan Estratégico Anti-Bullying',
      description: 'Documento comprensivo con estrategias para implementar en instituciones educativas y comunidades.',
      price: 40,
      image: '🤝'
    }
  ]

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.title} agregado al carrito`)
  }

  return (
    <section id="tienda" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Tienda Anti-Bullying</h2>
        <p className="section-subtitle">Recursos y herramientas para la prevención y conciencia del acoso escolar</p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-emoji">{product.image}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="price">S/. {product.price}</span>
                <button 
                  className="add-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  <i className="fas fa-shopping-cart"></i> Comprar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-info">
          <p>Carrito: <strong>{cart.length}</strong> producto(s)</p>
          <p className="total">Total: <strong>S/. {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong></p>
        </div>
      </div>
    </section>
  )
}
