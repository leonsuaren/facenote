import React from 'react';

import './styles.css';

export const Modal = () => {
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
            >Borrar Publicación</button>
          </div>
        </div>
      </div>
    </div>
  )
}