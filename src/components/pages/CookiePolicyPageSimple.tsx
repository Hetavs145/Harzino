import { motion } from 'motion/react';
import { Footer } from '../Footer';

interface CookiePolicyPageSimpleProps {
  onNavigate: (page: string) => void;
}

export function CookiePolicyPageSimple({ onNavigate }: CookiePolicyPageSimpleProps) {
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
              Cookie Policy
            </h1>

            <div className="space-y-8 text-[#bebebc]">
              <section>
                <p className="mb-4">
                  <strong>Effective Date:</strong> January 1, 2025
                </p>
                <p>
                  This Cookie Policy explains how Harzino, operated by Harkeswanen, uses cookies and similar technologies when you visit our website. This policy helps you understand what cookies are, how we use them, and what choices you have regarding their use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">What Are Cookies</h2>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about user behavior and preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Cookies</h2>
                <p>
                  Harkeswanen uses cookies on the Harzino platform for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled.</li>
                  <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information.</li>
                  <li><strong>Functionality Cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
                  <li><strong>Analytics Cookies:</strong> These help us analyze website traffic and improve our services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Session Cookies</h3>
                    <p>These are temporary cookies that expire when you close your browser. They help us remember your preferences during your visit.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Persistent Cookies</h3>
                    <p>These cookies remain on your device for a set period or until you delete them. They help us recognize you as a returning visitor.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Third-Party Cookies</h3>
                    <p>Some cookies are set by third-party services that appear on our pages, such as analytics providers or social media platforms.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Managing Your Cookie Preferences</h2>
                <p>
                  You have the right to choose whether to accept or reject cookies. You can manage your cookie preferences through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                <p className="mt-3">
                  Please note that disabling certain cookies may impact the functionality of our website and your user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Services</h2>
                <p>
                  We may use third-party services that also use cookies. These services have their own cookie policies, and Harkeswanen is not responsible for their practices. We recommend reviewing the cookie policies of these third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Cookie Policy</h2>
                <p>
                  Harkeswanen may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on this page with a revised effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                </p>
                <div className="ml-4 mt-2">
                  <p>Email: support@harzino.com</p>
                  <p>Company: Harkeswanen</p>
                  <p>Platform: Harzino</p>
                  <p>Location: Vadodara, Gujarat, India</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Your Consent</h2>
                <p>
                  By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using our website.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}