'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { personalInfo, socialLinks, footerLinks } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800 bg-dark-950">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 inline-block">
              ABUZAR
            </Link>
            <p className="text-dark-400 text-sm mb-6">{personalInfo.bio}</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-300"
                  title={link.name}
                >
                  {link.icon === 'github' && '🐙'}
                  {link.icon === 'linkedin' && '💼'}
                  {link.icon === 'twitter' && '𝕏'}
                  {link.icon === 'email' && '✉️'}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-dark-400 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-dark-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-dark-500 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-dark-500 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-dark-500 hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="flex justify-center mt-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-lg bg-dark-800 hover:bg-primary hover:text-white transition-colors duration-300"
            title="Back to top"
          >
            ↑
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
