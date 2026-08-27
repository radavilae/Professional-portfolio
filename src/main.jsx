import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// main.jsx - PUNTO DE ENTRADA DE LA APLICACIÓN
// ==========================================
// Este archivo es el primero que se ejecuta cuando tu aplicación se carga
// Su trabajo es "montar" tu aplicación React en el documento HTML

import './index.css'
// Importamos el componente principal App (el esqueleto de nuestra web)
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

// 🎯 ¿Qué está pasando aquí?
// 1. Buscamos el elemento con id="root" en el HTML (está en index.html)
// 2. Creamos una "raíz" de React ahí
// 3. Renderizamos nuestro componente App dentro de esa raíz
// 4. StrictMode ayuda a detectar problemas potenciales durante el desarrollo

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
