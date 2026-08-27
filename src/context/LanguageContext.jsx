// LanguageContext.jsx - GESTIÓN DEL IDIOMA GLOBAL
// ================================================
// Este archivo implementa el "Contexto" de React para manejar el idioma
// ¿Qué es un Contexto? Es una forma de compartir datos entre componentes
// sin tener que pasar "props" manualmente a través de cada nivel

import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Creamos el contexto - es como una "caja" para guardar nuestros datos
const LanguageContext = createContext();

// 2. Proveedor del contexto - es el componente que "provee" los datos a los hijos
export const LanguageProvider = ({ children }) => {
  // Estado para guardar el idioma actual ('es' o 'en')
  const [language, setLanguage] = useState(() => {
    // 🎯 ¿Qué hace esto?
    // 1. Busca en localStorage si hay un idioma guardado
    // 2. Si hay, usa ese idioma
    // 3. Si no, usa 'es' (español) como idioma por defecto
    const saved = localStorage.getItem('language');
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  // El valor que se compartirá con todos los componentes hijos
  const value = {
    language,        // Idioma actual ('es' o 'en')
    toggleLanguage,  // Función para cambiar idioma
  };

  return (
    // El Provider envuelve a los componentes hijos y les da acceso al contexto
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto fácilmente
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  // Si no hay contexto, significa que intentamos usarlo fuera del Provider
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};
