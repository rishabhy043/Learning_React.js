import React from 'react';

export const HandleEvent = () => {
  const handleClick = () => {
    alert('Hey, how are you');
  };

  const handleMouseEnter = () => {
    alert('This is Mouse Enter event');
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleClick}>
        onClick
      </button>

      <button style={buttonStyle} onMouseEnter={handleMouseEnter}>
        onMouseEnter
      </button>

      <button style={buttonStyle} onMouseLeave={handleClick}>
        onMouseLeave
      </button>

      <button style={buttonStyle} onMouseDown={handleMouseEnter}>
        onMouseDown
      </button>

      <button
        style={buttonStyle}
        onClick={() => alert('Heyy this is MouseClick Event')}
      >
        onClick (inline)
      </button>
    </>
  );
};
