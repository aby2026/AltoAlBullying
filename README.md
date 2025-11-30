# StopBullying - Prevención del Acoso Escolar 🛡️

Una aplicación React moderna e informativa dedicada a la prevención y conciencia sobre el bullying escolar.

## 🚀 Tecnologías Utilizadas

- **React 18** - Librería de UI
- **Vite** - Build tool rápido y moderno
- **React Router** - Navegación SPA
- **CSS3** - Estilos con variables y animaciones
- **Font Awesome 6.4** - Iconos
- **GitHub Pages** - Hosting

## ✨ Características

✅ **Componentes Reutilizables** - Arquitectura modular y escalable
✅ **Diseño Responsivo** - Funciona en todos los dispositivos
✅ **Paleta de Colores Moderna** - Profesional y atractivo
⚡ **Performance Optimizado** - Vite build ultrarrápido
📱 **Mobile First** - Optimizado para dispositivos móviles
🎯 **Información Completa** - Sobre prevención del bullying
🔄 **Hot Module Replacement** - Desarrollo rápido con HMR

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── WhatIsBullying.jsx
│   ├── BullyingTypes.jsx
│   ├── AlertSignals.jsx
│   ├── Advice.jsx
│   ├── Resources.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── styles/
│       └── [CSS modules]
├── App.jsx
├── App.css
├── main.jsx
└── index.css
index.html
package.json
vite.config.js
```

## 🏠 Secciones Principales

- **Inicio** - Presentación del tema con efecto Hero
- **¿Qué es el Bullying?** - Definición y conceptos fundamentales
- **Tipos de Bullying** - Físico, Verbal, Social y Cibernético (con tabs interactivos)
- **Señales de Alerta** - Cómo identificar el acoso
- **Consejos** - Para padres, víctimas y espectadores
- **Recursos** - Enlaces y líneas de ayuda
- **Contacto** - Formulario de comunicación
- **Footer** - Enlaces rápidos y redes sociales

## 📦 Instalación y Desarrollo

### Requisitos
- Node.js 16+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/aby2026/AltoAlBullying.git
cd AltoAlBullying

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

### Vista Previa

```bash
npm run preview
```

## 🌐 Despliegue en GitHub Pages

1. Fork o clona el repositorio
2. Asegúrate de que el repositorio sea público
3. Habilita GitHub Pages en Settings > Pages
4. Selecciona `Deploy from a branch` y elige `gh-pages`
5. El workflow automático hará build y deploy en cada push a main

Tu sitio estará disponible en: `https://aby2026.github.io/AltoAlBullying/`

## 🎨 Personalización

### Cambiar Colores

Modifica las variables en `src/index.css`:

```css
:root {
    --primary-color: #2d3e7f;
    --secondary-color: #00d4ff;
    --accent-color: #ff6b35;
    /* ... más variables */
}
```

### Agregar Nueva Sección

1. Crea un nuevo componente en `src/components/`
2. Importa en `src/App.jsx`
3. Agrega a la estructura JSX

Ejemplo:
```jsx
import NuevaSeccion from './components/NuevaSeccion'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <NuevaSeccion />
        {/* ... */}
      </main>
      <Footer />
    </div>
  )
}
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm run preview` - Vista previa de build

## 📄 Archivos Importantes

- `vite.config.js` - Configuración de Vite
- `package.json` - Dependencias y scripts
- `.github/workflows/deploy.yml` - CI/CD automatizado
- `.gitignore` - Archivos ignorados por Git

## 🌟 Características Futuras

- [ ] Página de recursos descargables
- [ ] Sistema de comentarios
- [ ] Multilingual (EN, FR, etc.)
- [ ] Testimoniostáticas
- [ ] Integración con API de recursos
- [ ] PWA (Progressive Web App)

## 📞 Contacto y Soporte

Para reportar problemas o sugerir mejoras, abre un issue en GitHub.

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

**Hecho con ❤️ para prevenir el bullying**

