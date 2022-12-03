import React, { useContext, useEffect, useState } from 'react';

import { PostContext } from '../../context/post-context';

import './styles.css';

export const EditPost = ({ header, callToAction, userName, postId }) => {
  const postContext = useContext(PostContext);
  const posts = postContext.posts;
  const post = posts.filter((post) => post._id === postId);

  const handleOnConfirmEditPost = () => {
  }

  return (
    <div>
      <div className="modal-header">
        <h5 className="modal-title">{header}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="modal-body modal-posting-area">
          <div>{ userName }</div>
          <textarea className='post-text-area' placeholder={post[0].post} />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="create-post-button btn btn-primary" onClick={handleOnConfirmEditPost}>{callToAction}</button>
      </div>
    </div>
  )
}