import React from 'react';
import { useTranslation } from 'react-i18next';
import img7 from "../assets/pl.png";
import img8 from "../assets/uk.png";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-toggle">
      <button onClick={() => changeLanguage('en')}>
        <img src={img8} alt="English" />
      </button>
      <button  onClick={() => changeLanguage('pl')}>
        <img src={img7} alt="Polish" />
      </button>
    </div>
  );
};

export default LanguageToggle;