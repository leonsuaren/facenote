import React from 'react';

import { Header } from '../../components/header';
import { CreatePost } from '../../components/create-post';
import { Post } from '../../components/post';

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
          <Post />
        </div>
      </div>
    </div>
  )
}