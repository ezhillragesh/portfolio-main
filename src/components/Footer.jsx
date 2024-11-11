import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-transparent py-8 flex flex-col md:flex-row justify-between items-center px-6 md:px-10 space-y-4 md:space-y-0">
      <div className="text-white text-center md:text-left">
        <p className="text-sm">Let's be friends!</p>
        <p className="text-sm">
          <a href="mailto:ezhillragesh@gmail.com" className="text-indigo-400">ezhillragesh@gmail.com</a>
        </p>
      </div>
      <div className="text-white text-sm text-center md:text-right">
        <p>&copy; 2024 Ezhill Ragesh. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
