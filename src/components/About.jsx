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
            <p className="text-lg">
              {t.about.paragraph2}
            </p>
            <p className="text-lg">
              {t.about.paragraph3}
            </p>
            <p className="text-lg">
              {t.about.paragraph4}
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
              {['React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Express', 'Tailwind CSS', 'Python', 'WordPress', 'Express.js', 'Git', 'Make', 'n8n'].map((tech) => (
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

      {/* Modal del CV */}
      {showCV && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg p-8 relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center border-b border-gray-200 pb-4">
                <h3 className="text-3xl font-light text-gray-900 mb-2">{t.about.cv.name}</h3>
                <p className="text-xl text-gray-700 mb-4">{t.about.cv.position}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div>{t.about.cv.email}: raul.davila.esp@gmail.com</div>
                  <div>{t.about.cv.phone}: +34 617 043 838</div>
                  <div>{t.about.cv.location}: Barcelona</div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-2">
                  <div>{t.about.cv.linkedin}: <a href="https://www.linkedin.com/in/radavilae/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">www.linkedin.com/in/radavilae</a></div>
                  <div>{t.about.cv.github}: <a href="https://github.com/radavilae" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">radavilae</a></div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.about.cv.summary}</h4>
                <p className="text-gray-700">{t.about.cv.summaryText}</p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.about.cv.skills}</h4>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-gray-800 mb-1">{t.about.cv.hardSkills}:</p>
                    <p className="text-gray-700 text-sm">{t.about.cv.hardSkillsList}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">{t.about.cv.softSkills}:</p>
                    <p className="text-gray-700 text-sm">{t.about.cv.softSkillsList}</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t.about.cv.education}</h4>
                <ul className="space-y-2">
                  {t.about.cv.educationItems.map((item, index) => (
                    <li key={index} className="text-gray-700 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t.about.cv.projects}</h4>
                <ul className="space-y-2">
                  {t.about.cv.projectsItems.map((item, index) => {
                    const parts = item.split(': ');
                    const title = parts[0];
                    const url = parts[1];
                    return (
                      <li key={index} className="text-gray-700 text-sm">
                        {title}: <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">{url}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t.about.cv.workExperience}</h4>
                <ul className="space-y-2">
                  {t.about.cv.workItems.map((item, index) => (
                    <li key={index} className="text-gray-700 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t.about.cv.languages}</h4>
                <p className="text-gray-700 text-sm">{t.about.cv.languagesList}</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowCV(false)}
                className="px-6 py-2 border border-gray-900 text-gray-900 text-sm hover:bg-gray-50 transition-colors"
              >
                {t.about.cv.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
