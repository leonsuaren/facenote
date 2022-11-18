import { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('Leon Suarez');

  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider value={{ userName, posts, setPosts }}>
      {children}
    </PostContext.Provider>
  )
}