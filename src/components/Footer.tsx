import { motion } from 'motion/react';
import { ChevronUp, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Company: [
      { name: 'About', action: () => onNavigate?.('about') },
      { name: 'Contact', action: () => onNavigate?.('contact') }
    ],
    Resources: [
      { name: 'Blog', action: () => onNavigate?.('blogs') },
      { name: 'Community', action: () => onNavigate?.('community') }
    ],
    Legal: [
      { name: 'Privacy Policy', action: () => onNavigate?.('privacy-policy') },
      { name: 'Terms of Service', action: () => onNavigate?.('terms-of-service') },
      { name: 'Cookie Policy', action: () => onNavigate?.('cookie-policy') }
    ]
  };

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/harzino', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/company/harzino', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:support@harzino.com', label: 'Email' }
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] relative">
      {/* Scroll to Top Button */}
      <motion.div
        className="absolute -top-6 right-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={scrollToTop}
          className="bg-[#dc0073] hover:bg-[#b8005f] text-white rounded-full p-3 shadow-lg hover:shadow-[#dc0073]/25 transition-all duration-300"
          size="sm"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#dc0073] mb-4">Harzino</h3>
              <p className="text-[#bebebc] mb-6 max-w-md leading-relaxed">
                Transforming ideas into digital reality with innovative solutions and cutting-edge technology.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-[#6b7280] hover:text-[#dc0073] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-[#6b7280] hover:text-[#dc0073] transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Centered Copyright */}
        <motion.div
          className="border-t border-[#2a2a2a] mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#6b7280] text-sm">
            © 2025 Harzino. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}