import React, { useContext } from 'react';
import { PostContext } from '../../context/post-context';
import './styles.css';

import { FcLike, FcDeleteRow } from "react-icons/fc";

export const Post = () => {
  const postContext = useContext(PostContext);
  const posts = postContext.posts;

  return (
    <div>
      {
        posts.map((post, key) => {
          return (
            <div className='view-posts' key={key}>
              <div className='post-header'>
                <div>
                  <span className='post-name'>{post.userName} </span>
                  <span className='post-date'> {post.date}</span>
                </div>
                <div className='delete-post-button-wrapper'>
                  <button className='delete-post-button'><FcDeleteRow className='delete-post-icon'/></button>
                </div>
              </div>
              <div>
                {
                  post.type === 'text' ? <div className='post-text-area'>{post.post}</div> : <div><img className='post-image-container' src={post.image} /></div>
                }
              </div>
              <div className='likes-comments'>
                <div className='like-division'><FcLike className='like-icon' />  {post.likes}</div>
                <div className='like-division add-like'>
                  <button className='add-like-button'><FcLike className='like-icon' />  Me Gusta</button>
                </div>
              </div>
              <div className='comments-section'>
                <input className='comment-input' placeholder='Escribe un comentario...' />
                <hr />
                <div className='commnets-area'>
                  <div className='comment-input comments-area-input' />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}