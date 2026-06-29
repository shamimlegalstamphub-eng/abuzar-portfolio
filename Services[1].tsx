'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/projects';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function Services() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-xl p-8 border border-dark-800 hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10"></div>

              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-dark-400 mb-6 flex-grow">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-dark-300 text-sm">
                    <span className="text-accent font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="border-t border-dark-700 pt-6">
                <p className="text-accent font-semibold mb-4">{service.price}</p>
                <Link
                  href={`/contact?service=${service.id}`}
                  className="w-full px-4 py-3 rounded-lg bg-primary text-white font-semibold text-center hover:bg-blue-600 active:scale-95 transition-all duration-250 inline-block"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-xl p-12 border border-dark-800 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
        >
          <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-lg text-dark-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300"
          >
            Start a Conversation
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
