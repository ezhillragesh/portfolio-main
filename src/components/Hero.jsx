import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin, BsMedium, BsTwitterX } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-32 flex min-h-screen w-full items-center py-16 md:py-28" id="home">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl">
        
        {/* Text Motion Animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Hey, I'm Ezhill Ragesh
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-400">
            Engineer | Problem Solver 
          </h3>
          <p className="text-gray-400 max-w-xs sm:max-w-md md:max-w-lg">
            I'm on a mission to learn as many things as possible! Skilled in React, Next.js, and Tailwind, 
            I focus on building scalable applications. In my free time, I share educational content and write blogs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg sm:text-xl text-white">
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
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              View My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
