import React from 'react';

import { Header } from '../../components/header';

import './styles.css';

export const Home = () => {
  return (
    <div className='home-layout'>
      <Header name='Leon Suarez'/>
      <div className='body overall-container'>
        <div className='display'>
          <div className='pictures'>pictures</div>
        </div>
        <div className='posting'>
          <div className='add-posts'>posting</div>
          <div className='view-posts'>view</div>
        </div>
      </div>
    </div>
  )
}