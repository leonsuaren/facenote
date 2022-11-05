import React from 'react';

import { Header } from '../../components/header';
import { CreatePost } from '../../components/create-post';
import { Post } from '../../components/post';
import { PicturesDisplay } from '../../components/pictures-display';

import './styles.css';

export const Home = () => {
  return (
    <div className='home-layout'>
      <Header/>
      <div className='body overall-container'>
        <div className='display'>
          <PicturesDisplay />
        </div>
        <div className='posting'>
          <CreatePost />
          <Post />
        </div>
      </div>
    </div>
  )
}