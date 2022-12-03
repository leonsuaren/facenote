import React, { useContext, useState } from 'react';
import { Modal, DeleteModal } from '../../components/modal';
import { EditPost } from '../../components/edit-post';
import { PostContext } from '../../context/post-context';
import './styles.css';

import { FcLike, FcDeleteRow, FcEditImage } from "react-icons/fc";

export const Post = () => {
  const postContext = useContext(PostContext);
  const userName = postContext.userName;
  const [postId, setPostId] = useState('');
  const posts = [].concat(postContext.posts).reverse();

  /**
   * this function sends the post's Id to the modal in order to delete the post
   * @param {post} post's Id
   */
  const handleOnGetPostId = (post) => {
    setPostId(post);
  };

  return (
    <div>
      {
        posts.length <= 0 ?
          <div className='view-posts'>
            <h3>No has poblicado nada aún!</h3>
          </div> :
          posts.map((post, key) => {
            return (
              <div className='view-posts' key={key}>
                <div className='post-header'>
                  <div>
                    <span className='post-name'>{post.userName} </span>
                    <span className='post-date'> {post.date}</span>
                  </div>
                  <div className='delete-post-button-wrapper'>
                    <button type="button" className='delete-post-button' data-bs-toggle="modal" data-bs-target="#deletePostModal" onClick={() => handleOnGetPostId(post._id)}><FcDeleteRow className='delete-post-icon' /></button>
                  </div>
                </div>
                <div>
                  <div className='edit-post-wrapper'>
                    <button type="button" className='delete-post-button' data-bs-toggle="modal" data-bs-target="#deletePostModal" >
                      <FcEditImage className='delete-post-icon' onClick={() => handleOnGetPostId(post._id)}/>
                    </button>
                  </div>
                  {
                    post.type === 'text' ?
                      <div className='post-text-area'>{post.post}</div> :
                      <div>
                        <div className='post-text-area'>{post.post}</div>
                        <img className='post-image-container' src={post.image} />
                      </div>
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
      <Modal>
        <EditPost 
          header='Editar Publicación'
          callToAction='Editar'
          userName={userName}
          postId={postId}
        />
      </Modal>
      <DeleteModal />
    </div>
  )
}
    // <Modal postToDelete={postToDelete} />