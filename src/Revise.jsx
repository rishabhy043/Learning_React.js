import React from 'react';

export const EventProps = () => {
  const buttonStyle = {
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    color: 'white',
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
  };

  const handleClick = (user) => {
    alert(`Say hi to ${user}`);
  };

  const handleHover = () => {
    alert(`Say hi to everyone from anywhere`);
  };

  const sayWelcome = () => {
    alert('GOOD MORNING');
  };

  return (
    <>
      <button style={buttonStyle} onClick={() => handleClick('Aman')}>
        HandleClick
      </button>
      <button style={buttonStyle} onMouseEnter={handleHover}>
        HandleHover
      </button>
      <button style={buttonStyle} onClick={sayWelcome}>
        GREET
      </button>
    </>
  );
};
