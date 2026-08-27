// App.jsx - ESQUELETO PRINCIPAL DE LA APLICACIÓN
// ================================================
// Este componente es el contenedor principal de toda tu aplicación
// Aquí se organizan y se muestran todos los demás componentes

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  // Estructura de la aplicación:
  // - Navbar: Barra de navegación superior (siempre visible)
  // - HomePage: Contenido principal que cambia según la sección
  
  return (
    // Contenedor principal con altura mínima de pantalla y fondo blanco
    <div className="min-h-screen bg-white">
      {/* Barra de navegación - contiene el menú y botón de idioma */}
      <Navbar />
      
      {/* Contenido principal - hero, about, projects, contact */}
      <HomePage />
    </div>
  );
}

export default App;
