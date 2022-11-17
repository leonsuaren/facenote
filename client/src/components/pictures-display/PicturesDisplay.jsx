import React, { useContext } from 'react';
import { PostContext } from '../../context/post-context';

import './styles.css';

export const PicturesDisplay = () => {
  const postContext = useContext(PostContext);
  const posts = postContext.newPost;

  return (
      <div className='pictures'>
        <h4 className='pictures-title'>Fotos</h4>
        <div className='pictures-display'>
          <div className='left-top-one'>
            <img src=''/>
          </div>
          <div className='left-top-two'>
            <img src=''/>
          </div>
          <div className='left-top-three'>
            <img src=''/>
          </div>
          <div className='center-top'>
            <img src=''/>
          </div>
          <div className='right-top'>
            <img src=''/>
          </div>
          <div className='left-center'>
            <img src=''/>
          </div>
          <div className='center-center-one'>
            <img src=''/>
          </div>
          <div className='center-center-two'>
            <img src=''/>
          </div>
          <div className='center-center-three'>
            <img src=''/>
          </div>
          <div className='right-center'>
            <img src=''/>
          </div>
          <div className='left-bottom'>
            <img src=''/>
          </div>
          <div className='center-bottom'>
            <img src=''/>
          </div>
          <div className='right-bottom-one'>
            <img src=''/>
          </div>
          <div className='right-bottom-two'>
            <img src=''/>
          </div>
          <div className='right-bottom-three'>
            <img src=''/>
          </div>
        </div>
      </div>
  )
};