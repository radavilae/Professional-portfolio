import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-600 mb-4">{t.hero.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6">
          Raúl Dávila
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
          {t.hero.title}
        </p>
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
          {t.hero.description}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
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

