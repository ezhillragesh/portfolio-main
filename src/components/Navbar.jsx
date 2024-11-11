import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsGithub, BsLinkedin, BsMedium, BsTwitterX, BsHouseDoor, BsCodeSlash, BsBriefcase, BsEnvelope } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 z-20 h-full bg-neutral-900/80 text-white w-20 px-4 py-6 backdrop-blur-lg">
      <div className="flex flex-col items-center justify-between h-full">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-semibold opacity-80 hover:opacity-100">
        எ
        </a>

        {/* Menu Icons */}
        <ul className="flex flex-col items-center gap-8 mt-10">
          <li><a href="#home" className="text-2xl hover:text-indigo-400"><BsHouseDoor /></a></li>
          <li><a href="#tech" className="text-2xl hover:text-indigo-400"><BsCodeSlash /></a></li>
          <li><a href="#projects" className="text-2xl hover:text-indigo-400"><BsBriefcase /></a></li>
          <li><a href="mailto:ezhillragesh@gmail.com" className="text-2xl hover:text-indigo-400"><BsEnvelope /></a></li>
        </ul>

        {/* Social Icons */}
        <ul className="flex flex-col gap-6 text-xl mt-10">
          <a href="https://github.com/ezhillragesh" target="_blank" rel="noopener noreferrer">
            <BsGithub className="hover:text-indigo-400" />
          </a>
          <a href="https://linkedin.com/in/ezhillragesh" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="hover:text-indigo-400" />
          </a>
          <a href="https://medium.com/@ezhillragesh" target="_blank" rel="noopener noreferrer">
            <BsMedium className="hover:text-indigo-400" />
          </a>
          <a href="https://twitter.com/ezhillragesh" target="_blank" rel="noopener noreferrer">
            <BsTwitterX className="hover:text-indigo-400" />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
