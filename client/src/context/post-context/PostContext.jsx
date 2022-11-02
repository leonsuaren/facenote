import { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('Leon Suarez');
  const [newPost, setNewPost] = useState([]);
  
  return (
    <PostContext.Provider value={{ userName, newPost, setNewPost }}>
      {children}
    </PostContext.Provider>
  )
}