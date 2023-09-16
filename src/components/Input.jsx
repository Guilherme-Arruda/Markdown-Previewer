import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Input = () => {
  const { input, handleChange } = useContext(AppContext);

  return (
    <div className='w-full md:w-1/2 h-[calc(100vh-56px)] flex flex-col'>
      <p className='text-center py-1 leading-5 text-white m-0 bg-blue-500'>Editor</p>
      <textarea
        className='flex-1 bg-white text-gray-900 resize-none w-full p-3 font-mono outline-none md:border-r-2 md:border-solid md:border-gray-300'
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
