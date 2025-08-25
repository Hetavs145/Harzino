import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Filter, Search, Grid, List } from 'lucide-react';
import { BlogCard } from '../BlogCard';
import { dummyBlogs, blogCategories, getBlogsByCategory, searchBlogs, BlogPost } from '../BlogData';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Footer } from '../Footer';

interface BlogsPageProps {
  onBlogClick: (blog: BlogPost) => void;
  searchQuery?: string;
  onNavigate?: (page: string) => void;
}

export function BlogsPage({ onBlogClick, searchQuery = '', onNavigate }: BlogsPageProps) {
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(dummyBlogs);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'readTime'>('date');

  useEffect(() => {
    let blogs = dummyBlogs;
    
    // Apply search filter
    if (localSearchQuery.trim()) {
      blogs = searchBlogs(localSearchQuery);
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      blogs = blogs.filter(blog => blog.category === selectedCategory);
    }
    
    // Apply sorting
    blogs = [...blogs].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'readTime':
          return a.readTime - b.readTime;
        case 'date':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
    
    setFilteredBlogs(blogs);
  }, [selectedCategory, localSearchQuery, sortBy]);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#dc0073] to-purple-500 bg-clip-text text-transparent">
                Our Blog
              </span>
            </h1>
            <p className="text-xl text-[#bebebc] max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on technology, design, and innovation
            </p>
          </motion.div>

          {/* Filters and Controls */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-[#0a0a0a] rounded-xl border border-[#2a2a2a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Search */}
            <div className="flex-1">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  className="w-full bg-[#181818] border-[#353535] text-[#bebebc] placeholder-[#6b7280] pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6b7280]" />
              </form>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#6b7280]" />
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-48 bg-[#181818] border-[#353535] text-[#bebebc]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#181818] border-[#353535]">
                  {blogCategories.map((category) => (
                    <SelectItem key={category} value={category} className="text-[#bebebc] hover:bg-[#2a2a2a]">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={(value: 'date' | 'title' | 'readTime') => setSortBy(value)}>
              <SelectTrigger className="w-40 bg-[#181818] border-[#353535] text-[#bebebc]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#181818] border-[#353535]">
                <SelectItem value="date" className="text-[#bebebc] hover:bg-[#2a2a2a]">Latest</SelectItem>
                <SelectItem value="title" className="text-[#bebebc] hover:bg-[#2a2a2a]">Title</SelectItem>
                <SelectItem value="readTime" className="text-[#bebebc] hover:bg-[#2a2a2a]">Read Time</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex bg-[#181818] rounded-lg p-1 border border-[#353535]">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#dc0073] text-white' : 'text-[#6b7280] hover:text-[#bebebc]'}`}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[#dc0073] text-white' : 'text-[#6b7280] hover:text-[#bebebc]'}`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-[#6b7280]">
              {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {localSearchQuery && ` matching "${localSearchQuery}"`}
            </p>
          </motion.div>

          {/* Blog Grid/List with uniform sizing */}
          {filteredBlogs.length > 0 ? (
            <motion.div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'grid grid-cols-1 gap-6'
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.6 }}
                  className="h-full"
                >
                  <BlogCard
                    blog={blog}
                    onClick={() => onBlogClick(blog)}
                    featured={blog.featured}
                    index={index}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-[#bebebc] mb-2">No articles found</h3>
              <p className="text-[#6b7280] mb-6">
                Try adjusting your search terms or category filters
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('All');
                  setLocalSearchQuery('');
                }}
                variant="outline"
                className="border-[#dc0073] text-[#dc0073] hover:bg-[#dc0073] hover:text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}