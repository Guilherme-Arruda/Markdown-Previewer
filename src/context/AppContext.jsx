/* eslint-disable react/prop-types */

import { createContext, useState } from 'react';
import markdown from '../utils/markdown';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState(markdown);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return <AppContext.Provider value={{ input, handleChange }}>{children}</AppContext.Provider>;
};

export default AppProvider;
