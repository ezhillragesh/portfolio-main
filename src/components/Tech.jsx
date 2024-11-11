import React from 'react';
import PropTypes from "prop-types";
import { motion } from 'framer-motion';

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Tech = () => {
  return (
    <section className="section px-6 sm:px-8 md:px-16 py-12 md:py-20" id="tech">
      <div className="text-left max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-white mb-4">Essential Tools I Use</h2>
        <p className="text-zinc-400 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        {/* Motion div for grid container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillItem.map(({ imgSrc, label, desc }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.15 }}
            >
              <SkillCard imgSrc={imgSrc} label={label} desc={desc} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const SkillCard = ({ imgSrc, label, desc }) => (
  <div className="flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group">
    <figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
      <img src={imgSrc} width={32} height={32} alt={label} />
    </figure>
    <div>
      <h3 className='text-white'>{label}</h3>
      <p className='text-zinc-400 text-sm'>{desc}</p>
    </div>
  </div>
);

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Tech;
