import React from 'react';

import './styles.css';

export const Header = ({ name }) => {
  return (
    <div className='header overall-container'>
      <div className='profile-picture'></div>
      <div className='user-info'>{name}</div>
    </div>
  )
}