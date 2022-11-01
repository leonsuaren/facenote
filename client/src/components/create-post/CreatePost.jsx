import React, { useContext } from 'react';
import { PostContext } from '../../context/post-context';
import { FcGallery } from "react-icons/fc";

import './styles.css';

export const CreatePost = () => {
  const postContext = useContext(PostContext);

  return (
    <div className='add-posts'>
      <div>
        <button type="button" className='thinking-button' data-bs-toggle="modal" data-bs-target="#postModal">
          ¿Que estas pensando?
        </button>
        <div className="modal fade" id="postModal" tabindex="-1" aria-labelledby="postModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="postModalLabel">Crear Publicación</h1>
                <button type="button" className="btn-close close-button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='divisor' />
      <div className='posting-media'>
        <div></div>
        <div></div>
        <div>
          <button type="button" className='post-media-button' data-bs-toggle="modal" data-bs-target="#mediaModal">
            <FcGallery className='gallery-icon' />&nbsp;Foto
          </button>
          <div className="modal fade" id="mediaModal" tabindex="-1" aria-labelledby="mediaModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="mediaModalLabel">Media Modal</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ...
              </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}