'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects, projectCategories } from '@/data/projects';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-24 px-4 md:px-6 bg-dark-900/30">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            A selection of projects showcasing expertise in web development, automation, and AI
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 border border-dark-700'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-xl overflow-hidden border border-dark-800 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-dark-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400'
                          : project.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-dark-700 text-dark-400'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-dark-800 rounded text-xs font-medium text-accent">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>

                  {/* Description */}
                  <p className="text-dark-400 text-sm mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-dark-900/50 rounded text-xs text-accent border border-dark-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-dark-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4 border-t border-dark-700">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="flex-1 px-4 py-2 rounded-lg bg-primary text-white text-center text-sm font-medium hover:bg-blue-600 transition-colors"
                      >
                        View Live
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex-1 px-4 py-2 rounded-lg border border-dark-700 text-white text-center text-sm font-medium hover:bg-dark-800 transition-colors"
                      >
                        GitHub
                      </Link>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 px-4 py-2 rounded-lg border border-dark-700 text-accent text-center text-sm font-medium hover:bg-dark-800 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Projects
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
