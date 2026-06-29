'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { personalInfo } from '@/lib/constants';
import { heroContent, heroItem, buttonHover } from '@/lib/animations';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow animation-delay-4000"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={heroContent}
        initial="initial"
        animate="animate"
      >
        {/* Main Heading */}
        <motion.div variants={heroItem}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
              ABUZAR
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={heroItem} className="mb-8">
          <p className="text-xl md:text-2xl text-dark-400 font-medium">
            {personalInfo.roles.join(' • ')}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={heroItem} className="mb-12">
          <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold 
                hover:shadow-glow active:scale-95 transition-all duration-250 inline-flex items-center gap-2"
            >
              View Projects
              <span className="text-xl">→</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/journey"
              className="px-8 py-4 rounded-lg border border-dark-600 text-white font-semibold 
                hover:bg-dark-800 active:scale-95 transition-all duration-250"
            >
              Explore Journey
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg text-accent font-semibold hover:text-cyan-300
                transition-colors duration-250"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={heroItem}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-dark-500 text-sm">Scroll to explore</div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent rounded-full opacity-50 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary rounded-full opacity-50 animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent rounded-full opacity-50 animate-float animation-delay-2000"></div>
    </section>
  );
}
