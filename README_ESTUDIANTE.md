# 📚 Guía para Estudiantes - Portfolio Raúl Dávila

## 🎯 ¡Bienvenido a tu primer proyecto React!

Este README está diseñado para ayudarte a entender cada parte de tu portfolio web. Si estás aprendiendo a programar, esta guía te explicará todo paso a paso.

---

## 🌟 ¿Qué es este proyecto?

Es un **portfolio web personal** creado con:
- **React**: Una librería de JavaScript para crear interfaces de usuario
- **Vite**: Una herramienta moderna y rápida para construir aplicaciones web
- **Tailwind CSS**: Un framework de CSS para diseñar páginas web rápidamente
- **EmailJS**: Un servicio para enviar correos desde tu formulario de contacto

---

## 📁 Estructura del Proyecto Explicada

```
portfolio/
├── 📁 public/          # Archivos que se copian directamente al build
│   ├── favicon.svg     # El icono que aparece en la pestaña del navegador
│   └── .htaccess       # Configuración para que funcione en hosting
├── 📁 src/             # Tu código fuente (aquí es donde trabajas)
│   ├── 📁 assets/      # Imágenes y archivos estáticos
│   ├── 📁 components/  # Componentes reutilizables de React
│   ├── 📁 context/     # Estado global (idioma de la aplicación)
│   ├── 📁 translations/# Traducciones para español e inglés
│   ├── 📁 config/      # Configuraciones (EmailJS)
│   ├── 📁 pages/       # Páginas principales
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── index.html          # Plantilla HTML
├── vite.config.js      # Configuración de Vite
└── package.json        # Dependencias del proyecto
```

---

## 🚀 Cómo Empezar

### 1. Instalar el proyecto
```bash
npm install
```
**¿Qué hace?** Descarga todas las librerías necesarias.

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```
**¿Qué hace?** Inicia tu aplicación en `http://localhost:5173`

### 3. Construir para producción
```bash
npm run build
```
**¿Qué hace?** Crea los archivos optimizados para subir a internet.

---

## 🧩 Conceptos Clave que Debes Entender

### React Componentes
Un componente es como un bloque de LEGO que puedes reutilizar:

```jsx
// Esto es un componente
function MiComponente() {
  return <h1>Hola Mundo</h1>;
}
```

### Props (Propiedades)
Son como parámetros que pasas a los componentes:

```jsx
function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}

// Uso: <Saludo nombre="Raúl" />
```

### Estado (State)
Es información que puede cambiar con el tiempo:

```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); // Estado inicial: 0
  
  return (
    <button onClick={() => setContador(contador + 1)}>
      Clics: {contador}
    </button>
  );
}
```

---

## 🎨 Tailwind CSS - Diseño Fácil

Tailwind usa clases directamente en el HTML:

```html
<!-- Centrado y con fondo azul -->
<div className="flex items-center justify-center bg-blue-500">
  <p className="text-white text-xl">Texto centrado</p>
</div>
```

### Clases Comunes:
- `text-center`: Texto centrado
- `bg-gray-100`: Fondo gris claro
- `p-4`: Padding de 1rem (16px)
- `m-2`: Margin de 0.5rem (8px)
- `flex`: Display flex
- `hidden`: Oculto (para responsive)

---

## 🌍 Sistema de Multiidioma

### ¿Cómo funciona?
1. **LanguageContext**: Guarda el idioma actual
2. **translations.js**: Contiene todos los textos
3. **useLanguage()**: Hook para usar el idioma

### Ejemplo de uso:
```jsx
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Titulo() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return <h1>{t.titulo}</h1>; // Muestra el título en el idioma actual
}
```

---

## 📧 EmailJS - Formulario de Contacto

### ¿Qué es EmailJS?
Permite enviar correos desde tu web sin necesidad de un backend.

### Configuración:
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Crea un servicio de email
4. Crea una plantilla
5. Copia tus IDs en `src/config/emailjs.config.js`

---

## 🔧 Modificar tu Portfolio

### Cambiar Textos
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

### Añadir un Proyecto
Edita `src/components/Projects.jsx`:

```javascript
const projects = [
  // ...proyectos existentes...
  {
    id: 4, // Nuevo ID
    title: 'Mi Nuevo Proyecto',
    description: 'Descripción de mi proyecto',
    technologies: ['React', 'Node.js', 'MongoDB'],
    websiteUrl: 'https://mi-proyecto.com',
    codeUrl: 'https://github.com/usuario/repo',
    image: miImagen, // Importada arriba
  }
];
```

### Cambiar Colores
Busca las clases de color en los componentes:
- `text-gray-900` → `text-blue-900` (texto azul oscuro)
- `bg-gray-900` → `bg-blue-600` (fondo azul)
- `border-gray-900` → `border-blue-600` (borde azul)

---

## 📱 Diseño Responsive

El proyecto ya es responsive gracias a Tailwind:

```html
<!-- Móvil: 1 columna, Tablet: 2, Desktop: 3 -->
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Contenido -->
</div>
```

### Breakpoints de Tailwind:
- `sm`: 640px (móvil grande)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (desktop grande)

---

## 🐛 Problemas Comunes y Soluciones

### "Mi imagen no aparece"
1. Verifica que la imagen esté en `src/assets/images/`
2. Importa la imagen: `import miImagen from '../assets/images/mi-imagen.jpg'`
3. Úsala: `src={miImagen}`

### "El texto no cambia de idioma"
1. Verifica que el texto esté en `translations.js`
2. Usa `t.seccion.clave` en el componente
3. Revisa que `useLanguage()` esté importado

### "Los estilos no se aplican"
1. Verifica que las clases de Tailwind estén escritas correctamente
2. Revisa que no haya espacios extra en `className`
3. Asegúrate de que `index.css` esté importado

---

## 🚀 Subir a Internet

### Opción 1: Hosting Compartido (Hostinger, etc.)
1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/`
3. Renombra `htaccess.txt` a `.htaccess`

### Opción 2: Vercel (Gratis y fácil)
1. Conecta tu GitHub a Vercel
2. Configura el comando de build: `npm run build`
3. Configura la carpeta: `dist`

---

## 📚 Recursos para Aprender Más

### React
- [Documentación oficial de React](https://react.dev/)
- [React Tutorial para principiantes](https://reactjs.org/tutorial/tutorial.html)

### Tailwind CSS
- [Documentación oficial](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 🎯 Próximos Pasos

1. **Personaliza el contenido**: Cambia textos, colores, proyectos
2. **Añade nuevas secciones**: Blog, testimonios, habilidades
3. **Optimiza el SEO**: Metadatos, palabras clave
4. **Añade animaciones**: Framer Motion, CSS animations
5. **Conecta un backend**: Para guardar mensajes, analytics

---

## 💡 Tips Importantes

- **Guarda tu código frecuentemente**: `git add . && git commit -m "Descripción"`
- **Lee los errores**: Los mensajes de error son tus amigos
- **Experimenta**: No tengas miedo de probar cosas nuevas
- **Pide ayuda**: Stack Overflow, Discord, comunidades de programación

---

## 🎉 ¡Felicidades!

Has llegado al final de esta guía. Ahora tienes:
- ✅ Un portfolio web funcional
- ✅ Conocimientos básicos de React
- ✅ Entendimiento del sistema de multiidioma
- ✅ Capacidad para modificar y personalizar tu web

**¡Sigue aprendiendo y construyendo cosas increíbles! 🚀**

---

## 🆘 ¿Necesitas ayuda?

- Revisa el archivo `TUTORIAL_COMPLETO.md` para más detalles
- Lee los comentarios en el código
- Experimenta con los componentes
- No tengas miedo de romper cosas (siempre puedes usar git)

**¡El código es para aprender y divertirse! 😊**
