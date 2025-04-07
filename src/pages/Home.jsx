import React from 'react';
import Header from '../components/home/Header';
import MainMenu from '../components/home/MainMenu';
import LanguageSelector from '../components/home/LanguageSelector';

function Home() {
  return (
    <div className="home">
        <Header />
        <MainMenu />
        <LanguageSelector />
    </div>
  );
}

export default Home;
