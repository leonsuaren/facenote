import React, { useContext, useState } from 'react';
import { PostContext } from '../../context/post-context';

import './styles.css';

export const PicturesDisplay = () => {
  const postContext = useContext(PostContext);
  const posts = postContext.newPost

  console.log(posts);

  return (
    <div className='pictures'>
      <h4 className='pictures-title'>Fotos</h4>
      <div className='pictures-display'>
        <div className='left-top'>
          <div className='left-top-one'>
            <img className='image-fit' src='./one.jpg' />
          </div>
          <div className='left-top-two'>
            <img className='image-fit' src='./two.jpg' />
          </div>
          <div className='left-top-three'>
            <img className='image-fit' src='./three.jpg' />
          </div>
        </div>
        <div className='center-top'>
          <img className='image-fit' src='./four.jpg' />
        </div>
        <div className='right-top'>
          <img className='image-fit' src='./five.jpg' />
        </div>
        <div className='left-center'>
          <img className='image-fit' src='./six.jpg' />
        </div>
        <div className='center-center'>
          <div className='center-center-one'>
            <img className='image-fit' src='./seven.jpg' />
          </div>
          <div className='center-center-two'>
            <img className='image-fit' src='./eight.jpg' />
          </div>
          <div className='center-center-three'>
            <img className='image-fit' src='./nine.jpg' />
          </div>
        </div>
        <div className='right-center'>
          <img className='image-fit' src='./ten.jpg' />
        </div>
        <div className='left-bottom'>
          <img className='image-fit' src='./eleven.jpg' />
        </div>
        <div className='center-bottom'>
          <img className='image-fit' src='./twelve.jpg' />
        </div>
        <div className='right-bottom'>
          <div className='right-bottom-one'>
            <img className='image-fit' src='./thirteen.jpg' />
          </div>
          <div className='right-bottom-two'>
            <img className='image-fit' src='./fourteen.jpg' />
          </div>
          <div className='right-bottom-three'>
            <img className='image-fit' src='./fifteen.jpg' />
          </div>
        </div>
      </div>
    </div>
  )
};