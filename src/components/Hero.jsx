// Hero.jsx - SECCIÓN PRINCIPAL DEL PORTFOLIO
// =========================================
// Este componente muestra la primera sección que ven los visitantes
// Incluye tu nombre, título profesional y mensaje principal

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Hero = () => {
  // 🎯 Hook personalizado para obtener el idioma actual
  // useLanguage() devuelve { language, toggleLanguage }
  const { language } = useLanguage();
  
  // Obtenemos las traducciones según el idioma actual
  // Si language='es', obtenemos translations.es
  // Si language='en', obtenemos translations.en
  const t = translations[language];

  return (
    // Sección principal que ocupa toda la pantalla
    // min-h-screen: altura mínima de la pantalla
    // flex items-center justify-center: centrado vertical y horizontal
    // px-6 pt-20: padding horizontal y espacio para la navbar
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Saludo inicial - "Hola, soy" */}
        <p className="text-lg md:text-xl text-gray-600 mb-4">{t.hero.greeting}</p>
        
        {/* Tu nombre - el elemento más grande y prominente */}
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
          Raúl Dávila
        </h1>
        
        {/* Tu título profesional */}
        <p className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
          {t.hero.title}
        </p>
        
        <div className="mb-12" />
        
        {/* Botones de acción */}
        <div className="flex gap-4 justify-center">
          {/* Botón principal - "Ver Proyectos" */}
          <a
            href="#projects"  // Enlace a la sección de proyectos
            className="px-8 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
          >
            {t.hero.viewProjects}
          </a>
          
          {/* Botón secundario - "Contacto" */}
          <a
            href="#contact"   // Enlace a la sección de contacto
            className="px-8 py-3 border border-gray-900 text-gray-900 text-sm hover:bg-gray-50 transition-colors"
          >
            {t.hero.contact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

