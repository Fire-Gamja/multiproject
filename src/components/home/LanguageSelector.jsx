import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-selector">
      <button
        className={currentLang === 'ko' ? 'selected' : ''}
        onClick={() => handleLangChange('ko')}
      >
        {t('korean')}
      </button>
      <button
        className={currentLang === 'en' ? 'selected' : ''}
        onClick={() => handleLangChange('en')}
      >
        {t('english')}
      </button>
    </div>
  );
}

export default LanguageSelector;