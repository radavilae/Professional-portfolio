# 📚 Tutorial Completo - Portfolio Raúl Dávila

## 🎯 Objetivo del Tutorial
Este tutorial te guiará paso a paso para entender, modificar y desplegar tu portfolio web desarrollado con React y Vite.

---

## 📁 Estructura del Proyecto

```
portfolio/
├── public/                 # Archivos estáticos (imágenes, favicon, etc.)
├── src/                   # Código fuente principal
│   ├── assets/           # Imágenes y recursos estáticos
│   ├── components/       # Componentes de React reutilizables
│   ├── context/          # Contexto de React (estado global)
│   ├── translations/     # Traducciones para multiidioma
│   ├── config/          # Configuraciones (EmailJS)
│   ├── App.jsx          # Componente principal de la aplicación
│   └── main.jsx         # Punto de entrada de la aplicación
├── index.html           # Plantilla HTML principal
├── vite.config.js       # Configuración de Vite
├── package.json         # Dependencias y scripts del proyecto
└── .env.example         # Ejemplo de variables de entorno
```

---

## 🚀 Paso 1: Configuración del Entorno

### 1.1 Instalar Dependencias
```bash
npm install
```
**¿Qué hace esto?** Descarga todas las librerías necesarias para que funcione tu aplicación.

### 1.2 Variables de Entorno (Opcional)
```bash
cp .env.example .env
```
**¿Para qué?** Para configurar claves de APIs o URLs personalizadas.

---

## 🛠️ Paso 2: Entender los Componentes Principales

### 2.1 `main.jsx` - El Corazón de la Aplicación
```javascript
// Este es el punto de entrada
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Crea la raíz donde se montará React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### 2.2 `App.jsx` - El Esqueleto Principal
```javascript
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />        // Barra de navegación
      <HomePage />      // Contenido principal
    </div>
  )
}
```

---

## 🌍 Paso 3: Sistema de Multiidioma

### 3.1 ¿Cómo funciona el cambio de idioma?
1. **LanguageContext.jsx**: Guarda el idioma actual
2. **translations.js**: Contiene todos los textos en español e inglés
3. **Componentes**: Usan el hook `useLanguage()` para obtener traducciones

### 3.2 Ejemplo de uso:
```javascript
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

const MiComponente = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  return <h1>{t.titulo}</h1>  // Muestra el título en el idioma actual
}
```

---

## 🎨 Paso 4: Componentes de UI

### 4.1 `Navbar.jsx` - Barra de Navegación
**Función:** Muestra el menú de navegación y el botón de cambio de idioma.

### 4.2 `Hero.jsx` - Sección Principal
**Función:** Muestra tu nombre, título y el mensaje principal.

### 4.3 `Projects.jsx` - Portfolio de Proyectos
**Función:** Muestra tus proyectos en tarjetas con:
- Imagen del proyecto
- Título y descripción
- Tecnologías usadas
- Botones para ver sitio web y código

### 4.4 `About.jsx` - Sección Sobre Mí
**Función:** Muestra información sobre ti y tu experiencia.

### 4.5 `Contact.jsx` - Formulario de Contacto
**Función:** Permite que los visitantes te envíen correos usando EmailJS.

---

## 📧 Paso 5: Configurar EmailJS (Formulario de Contacto)

### 5.1 ¿Qué es EmailJS?
Es un servicio que permite enviar correos desde tu web sin necesidad de un backend.

### 5.2 Configuración:
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta
3. Crea un servicio de email
4. Crea una plantilla de email
5. Copia tus IDs en `src/config/emailjs.config.js`

```javascript
export const emailConfig = {
  serviceId: 'tu_service_id',
  templateId: 'tu_template_id', 
  publicKey: 'tu_public_key',
  toEmail: 'tu_email@ejemplo.com'
}
```

---

## 🎯 Paso 6: Modificar Contenido

### 6.1 Cambiar Textos y Traducciones
Edita `src/translations/translations.js`:

```javascript
export const translations = {
  es: {
    hero: {
      greeting: 'Hola, soy',
      title: 'Desarrollador Web & Ingeniero de IA'
    }
  },
  en: {
    hero: {
      greeting: 'Hello, I am',
      title: 'Web Developer & AI Engineer'
    }
  }
}
```

### 6.2 Añadir/Modificar Proyectos
Edita `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: t.projects.project1.title,
    description: t.projects.project1.description,
    technologies: ['React', 'Vite', 'JavaScript'],
    websiteUrl: 'https://tu-proyecto.com',
    codeUrl: 'https://github.com/tu-usuario/tu-repo',
    image: tuImagen,
  }
]
```

### 6.3 Cambiar Imágenes
1. Coloca las imágenes en `src/assets/images/`
2. Impórtalas en el componente:
```javascript
import miImagen from '../assets/images/mi-imagen.jpg'
```

---

## 🎨 Paso 7: Personalizar Estilos

### 7.1 Tailwind CSS
El proyecto usa Tailwind CSS para los estilos. Las clases se aplican directamente en los elementos HTML:

```javascript
<div className="container mx-auto px-6 py-12">
  <h1 className="text-4xl font-bold text-gray-900">
    Título principal
  </h1>
</div>
```

### 7.2 Colores Personalizados
Puedes modificar los colores en `tailwind.config.js` si lo necesitas.

---

## 🚀 Paso 8: Desarrollo Local

### 8.1 Iniciar Servidor de Desarrollo
```bash
npm run dev
```
**¿Qué hace?** Inicia un servidor local en `http://localhost:5173`

### 8.2 Ver Cambios en Tiempo Real
Cada vez que guardes un archivo, la página se actualizará automáticamente.

---

## 📦 Paso 9: Preparar para Producción

### 9.1 Construir la Aplicación
```bash
npm run build
```
**¿Qué hace?** Crea una carpeta `dist/` con los archivos optimizados para producción.

### 9.2 Probar la Versión de Producción
```bash
npm run preview
```
**¿Qué hace?** Sirve los archivos de producción localmente para probarlos.

---

## 🌐 Paso 10: Despliegue en Hosting

### 10.1 Para Hosting Compartido (Hostinger, etc.)

1. **Construye el proyecto:**
   ```bash
   npm run build
   ```

2. **Sube los archivos:**
   - Sube TODO el contenido de la carpeta `dist/`
   - NO subas la carpeta `dist/`, sino su contenido

3. **Configura .htaccess:**
   - Renombra `htaccess.txt` a `.htaccess` en el servidor
   - Esto permite que las rutas de React funcionen

### 10.2 Para Vercel/Netlify
1. Conecta tu repositorio de GitHub
2. Configura el comando de build: `npm run build`
3. Configura la carpeta de publicación: `dist`

---

## 🔧 Paso 11: Solución de Problemas Comunes

### 11.1 "La página no existe"
**Causa:** Falta el archivo `.htaccess` o está mal configurado.
**Solución:** Asegúrate de que el archivo `.htaccess` esté en el servidor con el nombre correcto.

### 11.2 "Error 404 en rutas"
**Causa:** El servidor no está redirigiendo las rutas al `index.html`.
**Solución:** Verifica el contenido del `.htaccess`:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### 11.3 "Los estilos no cargan"
**Causa:** Rutas incorrectas en el build.
**Solución:** Asegúrate de tener `base: './'` en `vite.config.js`.

---

## 📚 Paso 12: Buenas Prácticas

### 12.1 Organización del Código
- Mantén los componentes pequeños y específicos
- Usa nombres descriptivos para variables y funciones
- Comenta el código complejo

### 12.2 Version Control
```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

### 12.3 Actualizar Dependencias
```bash
npm update
npm audit fix
```

---

## 🎯 Paso 13: Próximos Mejoras

### 13.1 Posibles Mejoras
- Añadir animaciones con Framer Motion
- Implementar dark mode
- Añadir blog con Markdown
- Integrar Google Analytics
- Optimizar SEO con React Helmet

### 13.2 Aprender Más
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Vite](https://vitejs.dev/)

---

## 🆘 Paso 14: Ayuda y Soporte

### 14.1 Recursos Útiles
- [MDN Web Docs](https://developer.mozilla.org/)
- [Stack Overflow](https://stackoverflow.com/)
- [React Community](https://react.dev/community)

### 14.2 Debugging
- Usa `console.log()` para depurar
- Usa las herramientas de desarrollador del navegador (F12)
- Revisa la pestaña Console para errores

---

## 🎉 ¡Felicidades!

Has llegado al final del tutorial. Ahora tienes un portfolio web profesional que puedes:
- ✅ Modificar y personalizar
- ✅ Desplegar en cualquier hosting
- ✅ Expandir con nuevas funcionalidades
- ✅ Usar como base para otros proyectos

**Sigue aprendiendo y mejorando tus habilidades de programación! 🚀**

---

## 📝 Checklist Final

- [ ] Entiendo la estructura del proyecto
- [ ] Sé cómo modificar textos y traducciones
- [ ] Puedo añadir/modificar proyectos
- [ ] Configuré EmailJS correctamente
- [ ] Puedo desplegar en producción
- [ ] Sé cómo solucionar problemas comunes
- [ ] Conozco las buenas prácticas

**¡Tu portfolio está listo para impresionar al mundo! 🌟**
