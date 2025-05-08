import React from 'react';

const Header = () => {
  const containerStyle = {
    width: 'auto',
    height: '175px', // 44 * 4 = 176px
    paddingLeft: '23px',
    paddingRight: '23px',
    backgroundColor: 'black',
    outline: '5px solid rgba(0, 119, 255, 0.4)',
    outlineOffset: '-5px',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '256px', // 64 * 4
    
  };

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '0 10px',
  };

  const textStyle = {
    color: 'white',
    fontSize: 32,
    fontFamily: 'GFS Didot',
    fontWeight: 400,
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <img style={{ width: 175, height: 175 }} src="https://placehold.co/175x175" alt="logo" />
      
      <div style={sectionStyle}>
        <div style={textStyle}>Work</div>
      </div>
      
      <div style={sectionStyle}>
        <div style={textStyle}>Photos</div>
      </div>
      
      <div style={sectionStyle}>
        <div style={textStyle}>About</div>
      </div>
    </div>
  );
};

export default Header;
