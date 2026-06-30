import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="experience" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Professional <span className="text-violet-400">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 mb-12 relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-[20%] top-0 bottom-[-3rem] w-px bg-white/10" />
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-[20%] top-2 w-3 h-3 rounded-full bg-violet-400 md:-translate-x-1.5 shadow-[0_0_10px_rgba(157,0,255,0.5)] z-10" />

                <div className="md:col-span-1 md:text-right pt-1 mb-2 md:mb-0">
                  <div className="text-sm font-mono text-cyan-400">{exp.period}</div>
                  <div className="text-xs text-slate-500 mt-1">{exp.location}</div>
                </div>

                <div 
                  className="md:col-span-4 p-[1px] rounded-2xl relative group transition-colors overflow-hidden"
                  onMouseMove={handleMouseMove}
                >
                  {/* Magic Glow Border background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" 
                    style={{ background: `radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(157, 0, 255, 0.8), transparent 40%)` }} 
                  />
                  
                  <div className="relative z-10 glass-panel p-6 rounded-2xl h-full w-full bg-[#0a0a0f]/90">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">{exp.role}</h3>
                    <h4 className="text-lg text-slate-400 mb-4 font-medium">{exp.company}</h4>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <span className="text-cyan-400 mt-1 text-sm">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
