'use client';

import { motion } from 'framer-motion';
import { technicalSkills, professionalSkills, languages, learningAreas } from '@/data/skills';
import { containerVariants, itemVariants } from '@/lib/animations';

function SkillCard({ skill }: { skill: any }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="glass rounded-lg p-6 border border-dark-800 hover:border-primary/50 transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-lg font-semibold mb-1">{skill.name}</h4>
          <p className="text-accent text-sm font-medium">{skill.level}</p>
        </div>
        {skill.icon && <span className="text-2xl">{skill.icon}</span>}
      </div>

      {skill.description && (
        <p className="text-dark-400 text-sm mb-4">{skill.description}</p>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-dark-500">Proficiency</span>
          <span className="text-xs text-accent font-semibold">{skill.progress}%</span>
        </div>
        <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.progress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
      </div>

      {/* Tags */}
      {skill.tags && (
        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-dark-800 rounded-full text-xs text-accent font-medium hover:bg-dark-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="py-24 px-4 md:px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            A diverse skill set spanning technology, automation, and professional development
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">💻</span>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            Professional Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">🌍</span>
            Languages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <motion.div
                key={lang.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass rounded-lg p-6 border border-dark-800 hover:border-accent/50 transition-colors"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-1">{lang.name}</h4>
                  <p className="text-accent text-sm font-medium">{lang.level}</p>
                </div>
                <p className="text-dark-400 text-sm mb-4">{lang.proficiency}</p>
                <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Areas */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">📚</span>
            Currently Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learningAreas.map((area) => (
              <motion.div
                key={area.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass rounded-lg p-6 border border-dark-800 hover:border-primary/50 transition-colors"
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{area.name}</h4>
                    <span className="px-3 py-1 bg-dark-800 rounded-full text-xs font-medium text-primary">
                      {area.status}
                    </span>
                  </div>
                  <p className="text-dark-400 text-sm">{area.description}</p>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-dark-500">Learning Progress</span>
                    <span className="text-xs text-primary font-semibold">{area.progress}%</span>
                  </div>
                  <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.progress}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.resources.map((resource) => (
                    <span
                      key={resource}
                      className="px-2 py-1 bg-dark-900 rounded text-xs text-dark-400 border border-dark-800"
                    >
                      {resource}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
