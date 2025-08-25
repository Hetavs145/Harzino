import { motion } from "motion/react";
import { Shield, Eye, Lock, FileText, Calendar } from "lucide-react";
import { Footer } from "../Footer";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      title: "Information We Collect",
      icon: <Eye className="h-6 w-6" />,
      content: [
        "Personal information you provide when creating an account (name, email address)",
        "Technical information about your device and browser",
        "Usage data and analytics to improve our services",
        "Cookies and similar tracking technologies"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <FileText className="h-6 w-6" />,
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support and assistance",
        "To gather analysis or valuable information to improve our services",
        "To monitor the usage of our services"
      ]
    },
    {
      title: "Data Protection & Security",
      icon: <Lock className="h-6 w-6" />,
      content: [
        "We implement appropriate security measures to protect your personal information",
        "Your data is encrypted in transit and at rest",
        "We regularly review our security practices and update them as needed",
        "Access to your personal information is restricted to authorized personnel only"
      ]
    },
    {
      title: "Your Rights",
      icon: <Shield className="h-6 w-6" />,
      content: [
        "Right to access your personal information",
        "Right to rectify inaccurate personal information",
        "Right to request deletion of your personal information",
        "Right to object to processing of your personal information",
        "Right to data portability"
      ]
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
                <Shield className="h-12 w-12 text-[#dc0073]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Privacy </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc0073] to-purple-600">
                Policy
              </span>
            </h1>
            <p className="text-xl text-[#bebebc] max-w-3xl mx-auto mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              src="https://images.unsplash.com/photo-1599350686877-382a54114d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YWN5JTIwc2VjdXJpdHklMjBzaGllbGR8ZW58MXx8fHwxNzU2MDk5NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Privacy and Security" 
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
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-[#bebebc] leading-relaxed mb-4">
                At Harzino, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or use our services.
              </p>
              <p className="text-[#bebebc] leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
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

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-[#dc0073]/10 to-purple-600/10 rounded-xl p-8 border border-[#dc0073]/20">
              <h3 className="text-xl font-bold text-white mb-4">Questions About This Policy?</h3>
              <p className="text-[#bebebc] leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please don't hesitate to contact us. 
                We're here to help and ensure your privacy concerns are addressed.
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