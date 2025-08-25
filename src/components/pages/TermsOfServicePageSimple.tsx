import { motion } from 'motion/react';
import { Footer } from '../Footer';

interface TermsOfServicePageSimpleProps {
  onNavigate: (page: string) => void;
}

export function TermsOfServicePageSimple({ onNavigate }: TermsOfServicePageSimpleProps) {
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
              Terms of Service
            </h1>

            <div className="space-y-8 text-[#bebebc]">
              <section>
                <p className="mb-4">
                  <strong>Effective Date:</strong> January 1, 2025
                </p>
                <p>
                  Welcome to Harzino, a digital platform operated by Harkeswanen. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using Harzino, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Description of Service</h2>
                <p>
                  Harzino, managed by Harkeswanen, provides digital content, blog articles, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our service at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must provide accurate and complete information when using our services</li>
                  <li>You are responsible for maintaining the confidentiality of your account information</li>
                  <li>You agree not to use our services for any unlawful or prohibited activities</li>
                  <li>You will not attempt to interfere with the proper functioning of our website</li>
                  <li>You will respect the intellectual property rights of others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of Harkeswanen or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Our Privacy Policy, which also governs your use of the service, can be found on our website. By using our service, you consent to the collection and use of information as outlined in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Limitation of Liability</h2>
                <p>
                  In no event shall Harkeswanen or Harzino be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer of Warranties</h2>
                <p>
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Harkeswanen excludes all representations, warranties, and conditions relating to our website and the use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Termination</h2>
                <p>
                  We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Changes to Terms</h2>
                <p>
                  Harkeswanen reserves the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Your continued use of the service after such modifications constitutes your acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, and you submit to the jurisdiction of the courts in Gujarat for the resolution of any disputes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
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