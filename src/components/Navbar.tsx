import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function Navbar({ currentPage, onNavigate, onSearch, searchQuery }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchQuery);
    if (currentPage !== 'blogs') {
      onNavigate('blogs');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#353535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-2xl font-bold text-[#dc0073]">Harzino</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-[#dc0073] bg-[#dc0073]/10'
                      : 'text-[#bebebc] hover:text-[#dc0073] hover:bg-[#dc0073]/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-xs ml-8">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search blogs..."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="w-full bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280] pr-10"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6b7280] hover:text-[#dc0073] transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#bebebc] hover:text-[#dc0073] hover:bg-[#dc0073]/5"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[#353535] mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    currentPage === item.id
                      ? 'text-[#dc0073] bg-[#dc0073]/10'
                      : 'text-[#bebebc] hover:text-[#dc0073] hover:bg-[#dc0073]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Search */}
              <div className="pt-2">
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="text"
                    placeholder="Search blogs..."
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    className="w-full bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280] pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6b7280] hover:text-[#dc0073] transition-colors"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}