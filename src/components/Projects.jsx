import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'SourceGuide',
    description: 'Provides curated beginner-friendly GSoC issues and showcases 50+ open source programs, emphasizing community engagement.',
    techStack: 'Next.js, TypeScript, shadcn UI',
    liveLink: 'https://sourceguide.vercel.app/',
    githubLink: 'https://github.com/ezhillragesh/SourceGuide',
  },
  {
    title: 'AI-Tic-Tac-Toe: Minimax Game',
    description: 'A Tic-Tac-Toe game with an AI opponent using the minimax strategy for smarter decision-making.',
    techStack: 'React, Tailwind CSS',
    liveLink: 'https://ezhillragesh.github.io/AI-Tic-Tac-Toe/',
    githubLink: 'https://github.com/ezhillragesh/AI-Tic-Tac-Toe',
  },
  {
    title: 'Files to QR',
    description: 'A web app that converts uploaded text files into QR codes for easy download.',
    techStack: 'Node.js, Express.js, Multer, QRCode.js',
    liveLink: 'https://filetoqr.onrender.com/',
    githubLink: 'https://github.com/ezhillragesh/Files-to-QR',
  },
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

const Projects = () => {
  return (
    <section className="section px-6 sm:px-8 md:px-16 py-12 md:py-20" id="projects">

      <div className="container px-4 md:px-8 text-left">
        <h2 className="text-4xl font-semibold text-white mb-4">My Projects</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Here are some of my recent works showcasing my skills in building applications with various technologies.
        </p>

        {/* Motion div for float-in effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {projectData.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
