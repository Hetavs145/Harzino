import { motion } from 'motion/react';
import { Footer } from '../Footer';

interface PrivacyPolicyPageSimpleProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPageSimple({ onNavigate }: PrivacyPolicyPageSimpleProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#dc0073] to-[#ff6b35] bg-clip-text text-transparent">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-[#bebebc]">
              <section>
                <p className="mb-4">
                  <strong>Effective Date:</strong> January 1, 2025
                </p>
                <p>
                  Welcome to Harzino, a digital platform operated by Harkeswanen. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
                <div className="space-y-3">
                  <p><strong>Personal Information:</strong> When you contact us through our forms, we may collect your name, email address, and any message content you provide.</p>
                  <p><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on our site.</p>
                  <p><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience and analyze website performance.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To improve our website and services</li>
                  <li>To send you updates about our services (with your consent)</li>
                  <li>To comply with legal obligations</li>
                  <li>To prevent fraud and ensure website security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Information Sharing</h2>
                <p>
                  Harzino, managed by Harkeswanen, does not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us at any time. To exercise these rights, please contact us at support@harzino.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. This privacy policy does not apply to these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Policy</h2>
                <p>
                  Harkeswanen reserves the right to update this Privacy Policy at any time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="ml-4 mt-2">
                  <p>Email: support@harzino.com</p>
                  <p>Company: Harkeswanen</p>
                  <p>Platform: Harzino</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}