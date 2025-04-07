import React from 'react';
import MenuButton from './MenuButton';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import TicketIcon from '../../assets/ticket_logo.svg';
import PrintIcon from '../../assets/print_logo.svg';
import PhotoIcon from '../../assets/photo_logo.svg';

function MainMenu() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <main className="main-menu">
      <h2 className="main-title">{t('title')}</h2>
      <div className="menu-grid">
        <MenuButton label={t('ticket')} icon={TicketIcon} onClick={() => navigate('/ticket')} />
        <MenuButton label={t('print')} icon={PrintIcon} />
        <MenuButton label={t('photo')} icon={PhotoIcon} />
      </div>
    </main>
  );
}

export default MainMenu;
