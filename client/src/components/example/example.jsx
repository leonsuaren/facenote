import React, { useContext } from 'react';

import { PostContext } from '../../context/post-context';

import './styles.css';

export const ModalContent = ({ postToDelete, onClick, callToAction }) => {
  const postContext = useContext(PostContext);
  const posts = postContext.posts;

  /**
   * This function deletes a posts using the post's id 
   */
  // const handleOnConfirmDeletePost = () => {
  //   const singlePostToDelete = posts.filter((post) => post._id !== postToDelete);
  //   postContext.setPosts(singlePostToDelete);
  // };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="postModalLabel">Seguro que desea borrar esta publicación?</h1>
      </div>
      <div className="modal-footer">
        <button type="button" className="create-post-button btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
        <button type="button" className="create-post-button btn btn-danger"
          data-bs-dismiss="modal" aria-label="Close"
          // onClick={handleOnConfirmDeletePost}
          onClick={onClick}
        >{ callToAction }</button>
      </div>
    </div>
  )
}

export const Example = ({ children }) => {

  return (
    <div className="modal fade" id="examplePostModal" tabIndex="-1" aria-labelledby="examplepostModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        {children}
      </div>
    </div>
  )
}