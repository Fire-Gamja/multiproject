import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/BuyTicket.css';
import CJONElogo from '../../assets/cjone_logo.svg';
import Home from '../../assets/home_logo.svg';
import { useTranslation } from 'react-i18next';

function BuyTicketHeader() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="buy-ticket-header">
      <div className="logo">
        <button className="back-button" onClick={() => navigate(-1)}>&lt;</button>
        <p></p>
        <br />
        <p>{t('cinema')}</p>
      </div>

      <h2 className="buy-ticket-title">{t('buyTicket')}</h2>

      <div className="ticket-back">
        <button className="home-button" onClick={() => navigate('/')}>
          <img className='buy-ticket-home-button' src={Home} alt="home button" />
        </button>
        <img className='buy-ticket-cjlogo' src={CJONElogo} alt="CJONE Logo" />
      </div>
    </header>
  );
}

export default BuyTicketHeader;
