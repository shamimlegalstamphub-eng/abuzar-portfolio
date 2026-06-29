'use client';

import { motion } from 'framer-motion';
import { personalInfo, education, experience } from '@/lib/constants';
import { containerVariants, itemVariants, revealVariants } from '@/lib/animations';

const aboutCards = [
  {
    icon: '💼',
    title: 'Entrepreneur',
    description: 'Building digital solutions and exploring new opportunities in tech.',
  },
  {
    icon: '🎓',
    title: 'BA (Russian)',
    description: 'Studying Russian language and culture at Aligarh Muslim University.',
  },
  {
    icon: '🤖',
    title: 'AI Explorer',
    description: 'Experimenting with AI tools and LLMs to solve real-world problems.',
  },
  {
    icon: '☁️',
    title: 'Cloud Enthusiast',
    description: 'Passionate about cloud infrastructure and deployment automation.',
  },
  {
    icon: '🗣️',
    title: 'Communication',
    description: 'Strong communicator with focus on clear, effective interactions.',
  },
  {
    icon: '⚙️',
    title: 'Automation',
    description: 'Building intelligent workflows and process automation solutions.',
  },
];

export default function About() {
  return (
    <section className="py-24 px-4 md:px-6 bg-dark-900/50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Entrepreneur and digital builder passionate about technology and innovation
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-xl p-8 md:p-12 mb-16 border border-dark-800"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-dark-300 mb-4 leading-relaxed">
                I'm Abuzar, an entrepreneur and developer passionate about building digital solutions that make a difference. With a background in Russian language studies and hands-on experience in web development, I combine diverse perspectives to create innovative solutions.
              </p>
              <p className="text-dark-300 leading-relaxed">
                My journey spans from learning web development to exploring AI and automation technologies. I'm driven by curiosity and the desire to understand how technology can solve real-world problems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-800/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <p className="text-sm text-dark-400">Projects Completed</p>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <p className="text-sm text-dark-400">Years Experience</p>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <p className="text-sm text-dark-400">Skills Areas</p>
              </div>
              <div className="bg-dark-800/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <p className="text-sm text-dark-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Cards */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {aboutCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass rounded-xl p-6 border border-dark-800 hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{card.title}</h4>
              <p className="text-dark-400 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="glass rounded-lg p-6 border border-dark-800 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-accent text-sm">{edu.field}</p>
                  </div>
                  <span className="text-dark-500 text-sm">
                    {edu.startYear} - {edu.current ? 'Present' : edu.endYear}
                  </span>
                </div>
                <p className="text-dark-400 text-sm mb-2">{edu.institution}</p>
                <p className="text-dark-300 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-6 border border-dark-800 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold">{exp.title}</h4>
                    <p className="text-accent text-sm">{exp.company}</p>
                  </div>
                  <span className="text-dark-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-dark-300 text-sm mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="text-dark-400 text-sm flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
