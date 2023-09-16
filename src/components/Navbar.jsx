import { useState } from 'react';

import { X, Menu, Star, GitFork, Github } from 'lucide-react';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const gitRepo = 'https://github.com/Guilherme-Arruda/Markdown-Previewer';
  const forkGitRepo = 'https://github.com/Guilherme-Arruda/Markdown-Previewer/fork';
  const gitProfile = 'https://github.com/Guilherme-Arruda';

  return (
    <nav className='bg-gray-900 text-white'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3.5'>
        <span className='text-xl whitespace-nowrap'>Markdown Previewer</span>
        <button
          aria-controls='navbar-default'
          aria-expanded={isExpanded}
          onClick={toggleNavbar}
          className='md:hidden text-gray-400 rounded-lg'
        >
          {isExpanded ? <X /> : <Menu />}
        </button>
        <div className={`${isExpanded ? 'block' : 'hidden'} w-full md:block md:w-auto`} id='navbar-default'>
          <ul className='flex flex-col p-3.5 mt-3.5 font-medium rounded-lg bg-gray-800 md:flex-row md:space-x-5 md:p-0 md:mt-0 md:bg-gray-900 md:text-sm'>
            <li className='flex items-center gap-1.5 py-2 pl-3 pr-4 rounded hover:bg-gray-700 hover:text-blue-500 md:p-0 md:hover:bg-transparent'>
              <Star size={17} />
              <a href={gitRepo} target='_blank' rel='noreferrer'>
                Star this Project
              </a>
            </li>
            <li className='flex items-center gap-1.5 py-2 pl-3 pr-4 rounded hover:bg-gray-700 hover:text-blue-500 md:p-0 md:hover:bg-transparent'>
              <GitFork size={17} />
              <a href={forkGitRepo} target='_blank' rel='noreferrer'>
                Fork to your Github
              </a>
            </li>
            <li className='flex items-center gap-1.5 py-2 pl-3 pr-4 rounded hover:bg-gray-700 hover:text-blue-500 md:p-0 md:hover:bg-transparent'>
              <Github size={17} />
              <a href={gitProfile} target='_blank' rel='noreferrer'>
                Follow Guilherme-Arruda
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
