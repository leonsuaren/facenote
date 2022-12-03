import React, { useContext, useState } from 'react';
import { PostContext } from '../../context/post-context';
import { CreateImagePost } from '../../components/create-image-post';
import { Modal } from '../../components/modal';

import './styles.css';

import { DateTime } from "luxon";

export const CreatePost = () => {
  const postContext = useContext(PostContext);
  const dt = DateTime.now();

  const [postText, setPostText] = useState('');

  const userName = postContext.userName;
  const posts = postContext.posts;

  /**
   * This function creates a new post in variable comming from the context 
   */
  const handleOnCreatePost = () => {
    const currentPost = {
      _id: Math.floor(Math.random() * 1000),
      type: 'text',
      userName: userName,
      date: dt.toLocaleString(DateTime.DATETIME_FULL),
      post: postText,
      likes: 0
    };
    postContext.setPosts([...posts, currentPost]);
    setPostText('');
  };

  const handleOnChange = (e) => setPostText(e.currentTarget.value);

  return (
    <div className='add-posts'>
      <div>
        <button type="button" className='thinking-button' data-bs-toggle="modal" data-bs-target="#createPostModal">
          ¿Que estas pensando?
        </button>
        <div className="modal fade" id="createPostModal" tabIndex="-1" aria-labelledby="postModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="postModalLabel">Crear Publicación</h1>
                <button type="button" className="btn-close close-button" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body modal-posting-area">
                <div>{userName}</div>
                <textarea className='post-text-area' placeholder='¿Que estas pensando?' value={postText} onChange={handleOnChange} />
              </div>
              <div className="modal-footer">
                <button type="button" className={postText.length <= 0 ? "create-post-button-disabled" : "create-post-button btn btn-primary"} disabled={postText.length <= 0 ? true : false}
                  data-bs-dismiss="modal" aria-label="Close"
                  onClick={handleOnCreatePost}
                >Publicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='divisor' />
      <div className='posting-media'>
        <div></div>
        <div></div>
          <CreateImagePost header='Crear Publicación' callToAction='Publicar' userName={userName} />
      </div>
    </div>
  )
}