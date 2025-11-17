import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-8">
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

