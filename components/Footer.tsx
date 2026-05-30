'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/work' },
        { label: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'Team', href: '/team' },
        { label: 'Contact', href: '/contact' },
        { label: 'Press', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Sitemap', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: '🔗' },
    { label: 'Twitter', href: '#', icon: '𝕏' },
    { label: 'GitHub', href: '#', icon: '🐙' },
    { label: 'Dribbble', href: '#', icon: '🎨' }
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="font-bold text-brand-dark">RothSpark</span>
            </div>
            <p className="text-sm text-brand-slate mb-6 max-w-xs">
              Premium technology studio creating next-generation digital experiences for forward-thinking enterprises.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={`social-${idx}-${link.label}`}
                  href={link.href}
                  aria-label={link.label}
                  className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-base hover:bg-brand-indigo hover:text-white transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
            >
              <h3 className="font-semibold text-brand-dark mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={`${section.title}-link-${idx}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-slate hover:text-brand-indigo transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-sm text-brand-slate">
            © {currentYear} RothSpark. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-brand-slate hover:text-brand-indigo transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-brand-slate hover:text-brand-indigo transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
