// BlogCard.js
import React from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';

const BlogCard = ({ title, link }) => {
  return (
    <div className="relative group flex flex-col gap-2 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-4 px-6 hover:bg-zinc-800 transition-all">
      {/* Blog Title */}
      <h3 className="text-white font-semibold title-text">{title}</h3>

      {/* Link Button */}
      <div className="flex gap-4 mt-auto z-20">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300"
          aria-label="Read Blog"
        >
          <FaExternalLinkAlt size={18} />
        </a>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogCard;
