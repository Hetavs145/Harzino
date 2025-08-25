import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/pages/HomePage';
import { BlogsPage } from './components/pages/BlogsPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { CommunityPageSimple } from './components/pages/CommunityPageSimple';
import { PrivacyPolicyPageSimple } from './components/pages/PrivacyPolicyPageSimple';
import { TermsOfServicePageSimple } from './components/pages/TermsOfServicePageSimple';
import { CookiePolicyPageSimple } from './components/pages/CookiePolicyPageSimple';
import { BlogModal } from './components/BlogModal';
import { BlogPost } from './components/BlogData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [homePageKey, setHomePageKey] = useState(0);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Force HomePage to re-mount when navigating back to it
    if (page === 'home') {
      setHomePageKey(prev => prev + 1);
    }
  };

  const handleBlogClick = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setIsBlogModalOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (currentPage !== 'blogs') {
      setCurrentPage('blogs');
    }
  };

  const renderCurrentPage = () => {
    try {
      switch (currentPage) {
        case 'home':
          return <HomePage key={homePageKey} onNavigate={handleNavigate} onBlogClick={handleBlogClick} />;
        case 'blogs':
          return <BlogsPage onBlogClick={handleBlogClick} searchQuery={searchQuery} onNavigate={handleNavigate} />;
        case 'about':
          return <AboutPage onNavigate={handleNavigate} />;
        case 'contact':
          return <ContactPage onNavigate={handleNavigate} />;
        case 'community':
          return <CommunityPageSimple onNavigate={handleNavigate} />;
        case 'privacy-policy':
          return <PrivacyPolicyPageSimple onNavigate={handleNavigate} />;
        case 'terms-of-service':
          return <TermsOfServicePageSimple onNavigate={handleNavigate} />;
        case 'cookie-policy':
          return <CookiePolicyPageSimple onNavigate={handleNavigate} />;
        default:
          return <HomePage key={homePageKey} onNavigate={handleNavigate} onBlogClick={handleBlogClick} />;
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      return <HomePage key={homePageKey} onNavigate={handleNavigate} onBlogClick={handleBlogClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {renderCurrentPage()}
        </motion.main>
      </AnimatePresence>

      {/* Blog Modal */}
      <BlogModal
        blog={selectedBlog}
        isOpen={isBlogModalOpen}
        onClose={() => {
          setIsBlogModalOpen(false);
          setSelectedBlog(null);
        }}
      />
    </div>
  );
}