import React, { useContext } from 'react';

import { PostContext }  from '../../context/post-context';

import './styles.css';

export const Modal = ({ postToDelete }) => {
  const postContext = useContext(PostContext);
  const posts = postContext.posts;

  /**
   * This function deletes a posts using the post's id 
   */
  const handleOnConfirmDeletePost = () => {
    const singlePostToDelete = posts.filter((post) => post._id !== postToDelete);
    postContext.setPosts(singlePostToDelete);
  };

  return (
    <div className="modal fade" id="deletePostModal" tabIndex="-1" aria-labelledby="postModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="postModalLabel">Seguro que desea borrar esta publicación?</h1>
          </div>
          <div className="modal-footer">
            <button type="button" className="create-post-button btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
            <button type="button" className="create-post-button btn btn-danger"
              data-bs-dismiss="modal" aria-label="Close"
              onClick={handleOnConfirmDeletePost}
            >Borrar Publicación</button>
          </div>
        </div>
      </div>
    </div>
  )
}