import React, { useState } from 'react';

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState('en');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    // You can add logic here to change the displayed text based on the language.
  };

  return (
    <div>
      <label htmlFor="language-select">Language: </label>
      <select id="language-select" value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="ko">한국어 (Korean)</option>
        <option value="es">Español (Spanish)</option>
      </select>
    </div>
  );
};

export default LanguageSelector;