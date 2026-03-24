import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { normalizeLanguage, translateHash, translatePath } from "@/lib/routes";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: 'ca', name: 'Català', flag: 'catalan' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === normalizeLanguage(i18n.language)) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    const nextPath = translatePath(location.pathname, langCode);
    const nextHash = translateHash(location.hash, langCode);
    navigate(`${nextPath}${nextHash}`);
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-xl font-sans text-foreground opacity-80 hover:opacity-100 transition-opacity"
        style={{ background: 'none', border: 'none', boxShadow: 'none', padding: 0, minWidth: 0, minHeight: 0 }}
        aria-label={t('language.switch')}
      >
        <span className="uppercase tracking-widest text-xl">{currentLanguage.code}</span>
        <span className="text-xl">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-card py-2 min-w-[180px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-5 py-4 text-lg font-sans hover:bg-background transition-colors ${
                normalizeLanguage(i18n.language) === lang.code ? 'text-primary font-bold' : 'text-foreground opacity-80'
              }`}
              style={{ minHeight: '48px' }}
            >
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;