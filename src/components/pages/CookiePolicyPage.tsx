import { motion } from "motion/react";
import { Database, Settings, BarChart3, Shield, Calendar } from "lucide-react";
import { Footer } from "../Footer";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card } from "../ui/card";

interface CookiePolicyPageProps {
  onNavigate: (page: string) => void;
}

export function CookiePolicyPage({ onNavigate }: CookiePolicyPageProps) {
  const lastUpdated = "January 15, 2025";

  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: <Shield className="h-6 w-6" />,
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: [
        "Authentication and security cookies",
        "Session management cookies",
        "Load balancing cookies",
        "CSRF protection cookies"
      ],
      color: "from-green-600/20 to-emerald-600/20"
    },
    {
      title: "Analytics Cookies",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "These cookies help us understand how visitors interact with our website.",
      examples: [
        "Google Analytics cookies",
        "Page view tracking cookies",
        "User behavior analysis cookies",
        "Performance monitoring cookies"
      ],
      color: "from-blue-600/20 to-cyan-600/20"
    },
    {
      title: "Functional Cookies",
      icon: <Settings className="h-6 w-6" />,
      description: "These cookies enable enhanced functionality and personalization.",
      examples: [
        "Language preference cookies",
        "Theme selection cookies",
        "User interface customization cookies",
        "Feature toggle cookies"
      ],
      color: "from-[#dc0073]/20 to-purple-600/20"
    }
  ];

  const managementOptions = [
    {
      title: "Browser Settings",
      description: "Most browsers allow you to control cookies through their settings menu.",
      steps: [
        "Access your browser's settings or preferences",
        "Look for 'Privacy' or 'Security' section",
        "Find 'Cookies' or 'Site Data' options",
        "Choose your preferred cookie settings"
      ]
    },
    {
      title: "Our Cookie Preferences",
      description: "You can manage your cookie preferences directly on our website.",
      steps: [
        "Click the cookie preferences link in our footer",
        "Choose which types of cookies to enable",
        "Save your preferences",
        "Your choices will be remembered for future visits"
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
                <Database className="h-12 w-12 text-[#dc0073]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Cookie </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc0073] to-purple-600">
                Policy
              </span>
            </h1>
            <p className="text-xl text-[#bebebc] max-w-3xl mx-auto mb-8 leading-relaxed">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
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
              src="https://images.unsplash.com/photo-1661417117002-994e79d23b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwdGVjaG5vbG9neSUyMGRhdGF8ZW58MXx8fHwxNzU2MTAwNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cookies Technology Data" 
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
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-[#bebebc] leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us 
                provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
              <p className="text-[#bebebc] leading-relaxed">
                We use cookies responsibly and transparently. This policy explains what cookies we use, why we use them, 
                and how you can control them.
              </p>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Types of Cookies We Use</h2>
            <div className="space-y-8">
              {cookieTypes.map((cookieType, index) => (
                <Card key={cookieType.title} className="bg-[#0f0f0f] border-[#2a2a2a] p-8 hover:border-[#dc0073]/30 transition-colors duration-300">
                  <div className="flex items-start mb-6">
                    <div className={`p-3 bg-gradient-to-r ${cookieType.color} rounded-lg mr-4 flex-shrink-0`}>
                      <div className="text-[#dc0073]">
                        {cookieType.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{cookieType.title}</h3>
                      <p className="text-[#bebebc] leading-relaxed mb-4">{cookieType.description}</p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <h4 className="text-white font-semibold mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {cookieType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#dc0073] rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-[#bebebc]">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Cookie Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How to Manage Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {managementOptions.map((option, index) => (
                <Card key={option.title} className="bg-[#0f0f0f] border-[#2a2a2a] p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
                  <p className="text-[#bebebc] mb-4">{option.description}</p>
                  <ol className="space-y-2">
                    {option.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="bg-[#dc0073] text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-[#bebebc]">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Third-Party Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Third-Party Cookies</h3>
              <p className="text-[#bebebc] leading-relaxed mb-4">
                Some cookies on our site are set by third-party services that we use to enhance your experience. 
                These may include analytics services, social media platforms, or advertising networks.
              </p>
              <p className="text-[#bebebc] leading-relaxed">
                We carefully select our third-party partners and ensure they meet our privacy and security standards. 
                You can learn more about these services and their cookie policies through their respective websites.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-[#dc0073]/10 to-purple-600/10 rounded-xl p-8 border border-[#dc0073]/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Need Help with Cookie Settings?</h3>
              <p className="text-[#bebebc] leading-relaxed mb-6">
                If you need assistance with managing your cookie preferences or have questions about our cookie policy, 
                we're here to help.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-[#dc0073] to-purple-600 hover:from-[#b8005f] hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
              >
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}