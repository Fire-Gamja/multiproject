import React from 'react';

function MenuButton({ label, icon, onClick }) {
  return (
    <button className="menu-button" onClick={onClick}>
      <div className="icon">
        <img src={icon} alt={`${label} Icon`} />
      </div>
      <span>{label}</span>
    </button>
  );
}

export default MenuButton;
