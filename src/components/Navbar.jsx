// Navbar.jsx - BARRA DE NAVEGACIÓN PRINCIPAL
// ========================================
// Este componente muestra la barra de navegación superior
// Incluye el menú de navegación y el botón para cambiar idioma

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { scrollToSection } from '../utils/helpers';

const Navbar = () => {
  // 🎯 Hook para obtener el idioma actual y función para cambiarlo
  const { language, toggleLanguage } = useLanguage();
  
  // Obtenemos las traducciones según el idioma actual
  const t = translations[language] || translations.es; // Fallback a español

  return (
    // Navbar fija en la parte superior con fondo blanco y sombra
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-8">
            {/* Enlaces de navegación */}
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t.nav.contact}
            </button>
            {/* Botón de cambio de idioma */}
            <button
              onClick={toggleLanguage}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors border-l border-gray-200 pl-6"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

