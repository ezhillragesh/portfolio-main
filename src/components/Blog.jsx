import React from 'react';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';

const blogData = [
  { title: 'Building Your own Simple JSON Databse', link: 'https://medium.com/@ezhillragesh/building-your-own-simple-json-database-4df982244685' },
  { title: 'Building Your Own Virtual DOM Reconciler in JavaScript', link: 'https://medium.com/stackademic/building-your-own-virtual-dom-reconciler-in-javascript-a-minimal-approach-432af714a924' },
  { title: 'Beating the Odds: The Mathematics Behind Casino Profits', link: 'https://medium.com/stackademic/beating-the-odds-the-mathematics-behind-casino-profits-4ee5543edf7e' },
  { title: 'Building a Dynamic QR Code Generator with JavaScript', link: 'https://medium.com/stackademic/building-a-dynamic-qr-code-generator-with-javascript-and-qrcode-js-0f8def17dc2c' },
  { title: 'Building a Smart Tic-Tac-Toe: Minimax Approach', link: 'https://medium.com/@ezhillragesh/building-a-smart-tic-tac-toe-ai-the-minimax-approach-7b2351a6d6b5' },
  { title: 'How to setup Neovim for competitive Programming in C++', link: 'https://medium.com/@ezhillragesh/how-to-setup-neovim-for-competitive-programming-in-c-windows-e50cafa15ed5' },
];

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Blog = () => {
  return (
    <section className="section px-6 sm:px-8 md:px-16 py-12 md:py-20" id="blog">

      <div className="container px-4 md:px-8 text-left">
        <h2 className="text-4xl font-semibold text-white mb-4">My Blogs</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Here are some of my recent blog posts covering various technical topics.
        </p>

        {/* Motion div for float-in effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {blogData.map((blog, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogCard title={blog.title} link={blog.link} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
