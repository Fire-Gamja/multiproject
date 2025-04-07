import React from 'react';
import '../../styles/BuyTicket.css';
import { useTranslation } from 'react-i18next';

function TicketToolbar() {
  const { t } = useTranslation();

  return (
    <div className="ticket-toolbar">
      <button className="ghost-button">{t('changeCinema')}</button>
      <button className="ghost-button">{t('viewSchedule')}</button>
    </div>
  );
}

export default TicketToolbar;
