import { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('Leon Suarez');


  return (
    <PostContext.Provider value={{ userName }}>
      {children}
    </PostContext.Provider>
  )
}