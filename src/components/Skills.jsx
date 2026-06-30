import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  const skillCategories = [
    { title: "AI & GenAI", skills: resumeData.skills.ai, color: "cyan" },
    { title: "Backend & Systems", skills: resumeData.skills.backend, color: "violet" },
    { title: "Cloud & DevOps", skills: resumeData.skills.devops, color: "cyan" },
    { title: "Languages", skills: resumeData.skills.languages, color: "violet" },
    { title: "Vector DBs", skills: resumeData.skills.vectorDb, color: "cyan" },
    { title: "On-Device AI", skills: resumeData.skills.onDevice, color: "violet" }
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-cyan-400">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-6 relative z-10">{category.title}</h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    drag
                    dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                    dragElastic={0.3}
                    whileDrag={{ scale: 1.1, zIndex: 10, cursor: 'grabbing' }}
                    whileHover={{ y: -5 }}
                    className={`px-4 py-2 rounded-full glass-panel text-sm font-medium cursor-grab ${
                      category.color === 'cyan' 
                        ? 'text-cyan-300 border border-cyan-500/20' 
                        : 'text-violet-300 border border-violet-500/20'
                    }`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              {/* Decorative background blur */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none ${
                category.color === 'cyan' ? 'bg-cyan-400' : 'bg-violet-400'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
