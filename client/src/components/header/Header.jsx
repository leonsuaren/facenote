import React, { useContext } from 'react';
import { PostContext } from '../../context/post-context';

import './styles.css';

export const Header = () => {
  const postContext = useContext(PostContext);
  const userName = postContext.userName;

  return (
    <div className='header overall-container'>
      <div className='profile-picture'></div>
      <div className='user-info'>{ userName }</div>
    </div>
  )
}