import React from 'react';

import { Header } from '../../components/header';
import { CreatePost } from '../../components/create-post';

import './styles.css';

export const Home = () => {
  return (
    <div className='home-layout'>
      <Header/>
      <div className='body overall-container'>
        <div className='display'>
          <div className='pictures'>pictures</div>
        </div>
        <div className='posting'>
          <CreatePost />
          <div className='view-posts'>view</div>
        </div>
      </div>
    </div>
  )
}