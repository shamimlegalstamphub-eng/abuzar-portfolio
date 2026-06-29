'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function Journey() {
  return (
    <section className="py-24 px-4 md:px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            A timeline of growth, learning, and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={containerVariants} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                variants={itemVariants}
                className={`relative flex gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-lg p-6 border border-dark-800 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">
                        {event.type === 'milestone' && '📍'}
                        {event.type === 'achievement' && '🏆'}
                        {event.type === 'future' && '🚀'}
                      </span>
                      <h4 className="text-xl font-bold">{event.title}</h4>
                    </div>
                    <p className="text-dark-400 mb-3">{event.description}</p>
                    <p className="text-accent font-semibold text-sm">{event.year}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    whileInView={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 0 0px rgba(37, 99, 235, 0.5)',
                        '0 0 0 10px rgba(37, 99, 235, 0)',
                      ],
                    }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 bg-primary rounded-full border-4 border-dark-950 mt-8"
                  ></motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 mt-20 pt-20 border-t border-dark-800"
        >
          <div className="glass rounded-lg p-6 border border-dark-800 text-center">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <p className="text-dark-400 text-sm">Years in Tech</p>
          </div>
          <div className="glass rounded-lg p-6 border border-dark-800 text-center">
            <div className="text-3xl font-bold text-accent mb-2">20+</div>
            <p className="text-dark-400 text-sm">Projects Built</p>
          </div>
          <div className="glass rounded-lg p-6 border border-dark-800 text-center">
            <div className="text-3xl font-bold text-accent mb-2">6</div>
            <p className="text-dark-400 text-sm">Skill Areas</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
