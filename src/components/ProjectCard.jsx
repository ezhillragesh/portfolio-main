import React from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, liveLink, githubLink }) => {
  return (
    <div className="relative group flex flex-col gap-2 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-4 px-6 hover:bg-zinc-800 transition-all">
      {/* Project Title */}
      <h3 className="text-white text-lg font-semibold">{title}</h3>

      {/* Tech Stack */}
      <p className="text-zinc-500 text-xs">{techStack}</p>

      {/* Links Section */}
      <div className="flex gap-4 mt-auto z-20"> {/* Ensuring icons are clickable */}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300"
            aria-label="Live Demo"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300"
            aria-label="GitHub Repository"
          >
            <FaGithub size={18} />
          </a>
        )}
      </div>

      {/* Hover Description */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-center p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
};

export default ProjectCard;
