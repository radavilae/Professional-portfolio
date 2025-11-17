import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import uniformesCandiImage from '../assets/40candi.jpeg';
import spanishWineCampsImage from '../assets/fotoviñedos.jpg';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      technologies: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MongoDB'],
      websiteUrl: t.projects.project1.websiteUrl,
      codeUrl: t.projects.project1.codeUrl,
      image: uniformesCandiImage,
    },
    {
      id: 2,
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      technologies: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MongoDB'],
      websiteUrl: t.projects.project2.websiteUrl,
      codeUrl: t.projects.project2.codeUrl,
      image: spanishWineCampsImage,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16">{t.projects.title}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden flex flex-col"
            >
              {project.image && (
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-light text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{project.description}</p>
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
                <div className="flex gap-2 mt-auto">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
                    >
                      {t.projects.viewWebsite}
                    </a>
                  )}
                  {project.codeUrl && (
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

