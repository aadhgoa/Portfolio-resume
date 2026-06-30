import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { resumeData } from '../data/resumeData';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Selected <span className="text-cyan-400">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full"
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                glareEnable={true} 
                glareMaxOpacity={0.1} 
                glareColor="lightblue" 
                glarePosition="all"
                className="h-full rounded-2xl p-[1px] relative group overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                onMouseMove={handleMouseMove}
              >
                {/* Magic Border Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" 
                  style={{ background: `radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(0, 243, 255, 0.8), transparent 40%)` }} 
                />
                
                <div className="relative z-10 glass-panel rounded-2xl p-8 flex flex-col h-full bg-[#0a0a0f]/90">
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <Folder className="text-cyan-400 group-hover:text-violet-400 transition-colors" size={40} />
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors z-20">
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors z-20">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="text-slate-300 mb-6 flex-grow relative z-10">
                    <p className="mb-4">{project.description}</p>
                    <p className="text-sm text-slate-400">{project.details}</p>
                  </div>

                  <ul className="flex flex-wrap gap-2 relative z-10 mt-auto pt-4 border-t border-white/10">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-violet-300 bg-violet-900/30 px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
