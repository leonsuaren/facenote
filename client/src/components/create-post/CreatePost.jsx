import React, { useContext } from 'react';
import { PostContext } from '../../context/post-context';

import './styles.css';

export const CreatePost = () => {
  const postContext = useContext(PostContext);

  return (
    <div className='add-posts'>
      <div>
        <button type="button" className='thinking-button' data-bs-toggle="modal" data-bs-target="#exampleModal">
            ¿Que estas pensando?
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='posting-media'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
<button className='thinking-button'>¿Que estas pensando?</button>