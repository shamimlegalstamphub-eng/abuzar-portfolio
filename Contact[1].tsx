'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { personalInfo, socialLinks } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Let's discuss your project, ideas, or any collaboration opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group glass rounded-lg p-6 border border-dark-800 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📧
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-accent hover:text-cyan-300 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="group glass rounded-lg p-6 border border-dark-800 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-accent hover:text-cyan-300 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="group glass rounded-lg p-6 border border-dark-800 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-dark-400">{personalInfo.location}</p>
                  <p className="text-dark-500 text-sm mt-1">{personalInfo.timezone}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className="w-12 h-12 rounded-lg glass border border-dark-800 flex items-center justify-center text-lg hover:border-accent/50 hover:text-accent transition-all duration-300"
                  >
                    {link.icon === 'github' && '🐙'}
                    {link.icon === 'linkedin' && '💼'}
                    {link.icon === 'twitter' && '𝕏'}
                    {link.icon === 'email' && '✉️'}
                  </Link>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
              <p className="text-sm text-dark-400">
                <span className="text-green-400 font-semibold">✓ Available for new projects</span>
                <br />
                Typically respond within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-lg p-8 border border-dark-800 space-y-6"
            >
              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                  ✓ Thanks for your message! I'll get back to you soon.
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-glow active:scale-95 transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-dark-500 text-center">
                I respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
