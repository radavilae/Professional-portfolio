import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-8">{t.about.title}</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              {t.about.paragraph1}
            </p>
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowCV(true)}
              className="px-8 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
            >
              {t.about.viewCV}
            </button>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-light text-gray-900 mb-6">{t.about.technologies}</h3>
            <div className="flex flex-wrap gap-3">
              {['React 18/19', 'TypeScript', 'JavaScript ES6+', 'Vite', 'HTML5', 'CSS', 'Tailwind CSS', 'React Router 7', 'Context API', 'Jasmine', 'Jest', 'Vitest', 'React Testing Library', 'Node.js', 'Express.js', 'Strapi 5', 'RESTful APIs', 'Supabase Edge Functions', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub Actions', 'Vercel', 'Render', 'Python', 'WordPress', 'Hostinger (hPanel)', 'IONOS', 'Scrum', 'Kanban'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal del CV con PDF */}
      {showCV && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-6xl w-full rounded-lg shadow-2xl relative h-[90vh] flex flex-col">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              ×
            </button>
            <div className="flex-1 overflow-hidden p-4">
              <iframe
                src="/CV-Raul-Davila-ESP.pdf"
                className="w-full h-full border-0"
                title="CV Raúl Dávila"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
