import { motion } from "motion/react";
import { FileText, Scale, AlertTriangle, CheckCircle, Calendar } from "lucide-react";
import { Footer } from "../Footer";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface TermsOfServicePageProps {
  onNavigate: (page: string) => void;
}

export function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <CheckCircle className="h-6 w-6" />,
      content: [
        "By accessing and using our services, you accept and agree to be bound by these terms",
        "If you do not agree with any part of these terms, you must not use our services",
        "We reserve the right to update these terms at any time without prior notice",
        "Continued use of our services after changes constitutes acceptance of new terms"
      ]
    },
    {
      title: "Use of Services",
      icon: <FileText className="h-6 w-6" />,
      content: [
        "You must be at least 18 years old to use our services",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to use our services only for lawful purposes",
        "You will not attempt to gain unauthorized access to our systems",
        "You will not use our services to transmit harmful or malicious content"
      ]
    },
    {
      title: "Intellectual Property",
      icon: <Scale className="h-6 w-6" />,
      content: [
        "All content and materials on our platform are owned by Harzino or licensed to us",
        "You may not reproduce, distribute, or create derivative works without permission",
        "User-generated content remains your property, but you grant us a license to use it",
        "We respect intellectual property rights and expect users to do the same"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: [
        "Our services are provided 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability shall not exceed the amount paid by you for our services",
        "Some jurisdictions do not allow exclusion of warranties, so some limitations may not apply"
      ]
    }
  ];

  const additionalTerms = [
    {
      title: "Account Termination",
      description: "We reserve the right to terminate accounts that violate our terms of service or engage in harmful activities."
    },
    {
      title: "Data Security",
      description: "While we implement security measures, you acknowledge that no system is completely secure."
    },
    {
      title: "Third-Party Services",
      description: "Our platform may contain links to third-party services. We are not responsible for their content or practices."
    },
    {
      title: "Governing Law",
      description: "These terms are governed by the laws of the jurisdiction where our company is registered."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-[#dc0073]/20 to-purple-600/20 rounded-full">
                <Scale className="h-12 w-12 text-[#dc0073]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Terms of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc0073] to-purple-600">
                Service
              </span>
            </h1>
            <p className="text-xl text-[#bebebc] max-w-3xl mx-auto mb-8 leading-relaxed">
              Please read these terms carefully before using our services. These terms govern your use of our platform and services.
            </p>
            <div className="flex items-center justify-center text-[#bebebc]">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden mb-16"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnRyYWN0JTIwZG9jdW1lbnR8ZW58MXx8fHwxNzU2MTAwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Legal Contract Document" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Agreement Overview</h2>
              <p className="text-[#bebebc] leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your access to and use of Harzino's services, including our website, 
                applications, and any related services provided by Harzino ("Services").
              </p>
              <p className="text-[#bebebc] leading-relaxed">
                These Terms form a legally binding agreement between you and Harzino. Please read them carefully and 
                contact us if you have any questions before using our Services.
              </p>
            </div>
          </motion.div>

          {/* Main Sections */}
          <div className="space-y-8 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#dc0073]/30 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-gradient-to-r from-[#dc0073]/20 to-purple-600/20 rounded-lg mr-4">
                      <div className="text-[#dc0073]">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-[#dc0073] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-[#bebebc] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Additional Important Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalTerms.map((term, index) => (
                <div key={term.title} className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{term.title}</h4>
                  <p className="text-[#bebebc] leading-relaxed">{term.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-[#dc0073]/10 to-purple-600/10 rounded-xl p-8 border border-[#dc0073]/20">
              <h3 className="text-xl font-bold text-white mb-4">Questions About These Terms?</h3>
              <p className="text-[#bebebc] leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us. We're committed to 
                providing clear information about our terms and conditions.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-[#dc0073] to-purple-600 hover:from-[#b8005f] hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}