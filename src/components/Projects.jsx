// Projects.jsx - PORTFOLIO DE PROYECTOS
// ==================================
// Este componente muestra tus proyectos en tarjetas atractivas
// Cada proyecto incluye imagen, descripción, tecnologías y botones de acción

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

// Importamos las imágenes de los proyectos
// React necesita que las imágenes se importen explícitamente
import uniformesCandiImage from '../assets/images/40candi.jpeg';
import spanishWineCampsImage from '../assets/images/spanishwinecamps.jpg';
import raulDavilaImage from '../assets/images/rauldavila.jpg';
import photoMicheleImage from '../assets/images/photomichele.jpeg';

const Projects = () => {
  // 🎯 Obtenemos el idioma actual y las traducciones
  const { language } = useLanguage();
  const t = translations[language];

  // 📋 Array de proyectos - aquí defines todos tus proyectos
  // Cada objeto representa un proyecto con toda su información
  const projects = [
    {
      id: 1,  // Identificador único
      title: t.projects.project1.title,           // Título (desde traducciones)
      description: t.projects.project1.description, // Descripción (desde traducciones)
      technologies: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MongoDB'],
      websiteUrl: t.projects.project1.websiteUrl, // URL del sitio web
      codeUrl: t.projects.project1.codeUrl,       // URL del código fuente
      image: uniformesCandiImage,                 // Imagen del proyecto
    },
    {
      id: 2,
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      technologies: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Strapi 5 CMS', 'GitHub Actions', 'Render', 'PostgreSQL', 'React Router', 'Strapi 5', 'Node.js', 'REST API', 'Vercel'],
      websiteUrl: t.projects.project2.websiteUrl,
      codeUrl: t.projects.project2.codeUrl,
      image: spanishWineCampsImage,
    },
    {
      id: 3,
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      technologies: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'EmailJS'],
      websiteUrl: t.projects.project3.websiteUrl,
      codeUrl: t.projects.project3.codeUrl,
      image: raulDavilaImage,
    },
    {
      id: 4,
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      technologies: ['WordPress', 'Blocksy', 'Gutenberg', 'HTML5', 'CSS3', 'Responsive Design', 'SEO'],
      websiteUrl: t.projects.project4.websiteUrl,
      codeUrl: t.projects.project4.codeUrl,
      image: photoMicheleImage,
    },
  ];

  return (
    // Sección de proyectos con padding vertical y horizontal
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <h2 className="text-4xl font-light text-gray-900 mb-16">{t.projects.title}</h2>
        
        {/* Grid de proyectos - responsive: 1 columna en móvil, 2 en tablet, 3 en desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}  // Key única para React (importante para rendimiento)
              className="border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden flex flex-col"
            >
              {/* 🖼️ Imagen del proyecto */}
              {project.image && (
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"  // object-cover: imagen sin deformar
                  />
                </div>
              )}
              
              {/* 📝 Contenido de la tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Título del proyecto */}
                <h3 className="text-xl font-light text-gray-900 mb-3">{project.title}</h3>
                
                {/* Descripción */}
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{project.description}</p>
                
                {/* 🏷️ Tecnologías usadas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-500 border border-gray-200 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* 🔘 Botones de acción */}
                <div className="flex gap-2 mt-auto">
                  {/* Botón "Ver Sitio Web" - solo si hay URL */}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"        // Abrir en nueva pestaña
                      rel="noopener noreferrer" // Seguridad para enlaces externos
                      className="px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
                    >
                      {t.projects.viewWebsite}
                    </a>
                  )}
                  
                  {/* Botón "Ver Código" - solo si hay URL Y no es el proyecto 3 */}
                  {project.codeUrl && project.id !== 3 && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-900 text-gray-900 text-sm hover:bg-gray-50 transition-colors"
                    >
                      {t.projects.viewCode}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

