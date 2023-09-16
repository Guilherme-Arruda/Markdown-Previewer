import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

const Output = () => {
  const { input } = useContext(AppContext);

  return (
    <div className='flex flex-col w-full h-[calc(100vh-56px)] md:w-1/2'>
      <p className='py-1 m-0 text-center text-white bg-blue-500 leading-5'>Preview</p>
      <div className='no-tailwind flex-1 w-full bg-white text-gray-900 px-[15px] py-[5px] overflow-auto break-all md:border-l-2 md:border-solid md:border-gray-300'>
        <ReactMarkdown className='markdown' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize]}>
          {input}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Output;
