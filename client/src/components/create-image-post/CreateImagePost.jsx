import React, { useState, useContext, useCallback } from 'react';
import { PostContext } from '../../context/post-context';
import { FcGallery, FcMultipleCameras } from "react-icons/fc";
import { DateTime } from "luxon";

import './styles.css';

export const CreateImagePost = ({ header, callToAction, userName }) => {
  const postContext = useContext(PostContext);
  const dt = DateTime.now();

  const [postText, setPostText] = useState('');
  const [base64, setBase64] = useState('');

  const posts = postContext.posts;

  /**
 * This function creates a new image post and add the post to the current post's array
 */
  const handleOnCreateImagePost = () => {
    const currentPost = {
      _id: Math.floor(Math.random() * 1000),
      type: 'image',
      userName: userName,
      date: dt.toLocaleString(DateTime.DATETIME_FULL),
      post: postText,
      likes: 0,
      image: base64
    }
    postContext.setPosts([...posts, currentPost]);
    setPostText('');

  }

  const handleOnFileSelected = useCallback(async (e) => {
    const imageFile = e.target.files[0];
    const base64 = await convertToBase64(imageFile);
    setBase64(base64);
    e.target.value = '';
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert('Please select an image');
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      };
      fileReader.onerror = (error) => {
        reject(error);
      }
    });
  };

  const handleOnCreatePostText = (e) => setPostText(e.currentTarget.value);

  return (
      <div>
        <button type="button" className='post-media-button' data-bs-toggle="modal" data-bs-target="#mediaModal">
          <FcGallery className='gallery-icon' />&nbsp;Foto
        </button>
        <div className="modal fade" id="mediaModal" tabIndex="-1" aria-labelledby="mediaModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="mediaModalLabel">{ header }</h1>
                <button type="button" className="btn-close close-button" data-bs-dismiss="modal" aria-label="Close" onClick={() => setPostText('')}></button>
              </div>
              <div className="modal-body modal-media-area">
                <div>{userName}</div>
                <textarea className='media-text-area' placeholder='??Que estas pensando?' value={postText} onChange={handleOnCreatePostText} />
                <label className='upload-image-input-label'> <FcMultipleCameras className='media-input-icon' /> <div>A??adir Foto!</div>
                  <input className='upload-image-input' type='file' accept='image/*, png, jpg, jpeg' onChange={handleOnFileSelected} />
                </label>
              </div>
              <div className="modal-footer">
                <button type="button" className={postText.length <= 0 ? "create-post-button-disabled" : "create-post-button btn btn-primary"} disabled={postText.length <= 0 ? true : false}
                  data-bs-dismiss="modal" aria-label="Close"
                  onClick={handleOnCreateImagePost}
                >{ callToAction }</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}