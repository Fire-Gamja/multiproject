import React, { useEffect, useState } from 'react';
import CGVlogo from '../../assets/cgv_logo.svg';
import CJONElogo from '../../assets/cjone_logo.svg'
import { useTranslation } from 'react-i18next';

function Header() {
    const [dateString, setDateString] = useState('');
    const [time, setTime] = useState('');
    const { i18n } = useTranslation();
  
    useEffect(() => {
      const updateDateTime = () => {
        const now = new Date();
        const lang = i18n.language;
        let formattedDate = '';
        const weekday = now.toLocaleDateString(lang, { weekday: 'short' });
  
        if (lang === 'ko') {
          const month = String(now.getMonth() + 1).padStart(2, '0');
          const day = String(now.getDate()).padStart(2, '0');
          formattedDate = `${month}/${day}(${weekday})`;
        } else {
          const monthName = now.toLocaleString('en-US', { month: 'long' });
          const day = now.getDate();
          formattedDate = `${monthName} ${day} (${weekday})`;
        }
  
        setDateString(formattedDate);
  
        const formattedTime = now.toLocaleTimeString(lang, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        setTime(formattedTime);
      };
  
      updateDateTime();
      const interval = setInterval(updateDateTime, 1000);
      return () => clearInterval(interval);
    }, [i18n.language]);
    const { t } = useTranslation();

  return (
    <header className="header">
      <div className="logo">
        <img src={CGVlogo} alt="CGV Logo" />
        <p>{t('cinema')}</p>
      </div>
      <div className="date-time">
        <span className="header-date">{dateString}</span>
        <span className="header-time">{time}</span>
        <p></p>
        <p></p>
        <img src={CJONElogo} alt="CJONE Logo" />
      </div>
    </header>
  );
}

export default Header;
