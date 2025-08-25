import { motion } from 'motion/react';
import { Clock, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { BlogPost } from './BlogData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogCardProps {
  blog: BlogPost;
  onClick: () => void;
  featured?: boolean;
  index?: number;
}

export function BlogCard({ blog, onClick, featured = false, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="cursor-pointer h-full"
      onClick={onClick}
    >
      <Card className="bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#dc0073]/30 transition-all duration-300 rounded-xl overflow-hidden group h-full flex flex-col">
        <div className="relative">
          {/* Featured Icon */}
          {featured && (
            <div className="absolute top-3 right-3 z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-[#dc0073] text-white p-2 rounded-full shadow-lg"
              >
                <Star className="h-4 w-4 fill-current" />
              </motion.div>
            </div>
          )}
          
          {/* Image with 16:9 aspect ratio */}
          <div className="aspect-video overflow-hidden">
            <ImageWithFallback
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          {/* Category and Read Time */}
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="bg-[#dc0073]/10 text-[#dc0073] border-[#dc0073]/20">
              {blog.category}
            </Badge>
            <div className="flex items-center text-[#6b7280] text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {blog.readTime} min
            </div>
          </div>

          {/* Title - Fixed height with line clamp */}
          <h3 className="text-xl font-semibold text-[#ffffff] mb-3 line-clamp-2 group-hover:text-[#dc0073] transition-colors min-h-[3.5rem] flex items-start">
            {blog.title}
          </h3>

          {/* Excerpt - Fixed height with line clamp */}
          <p className="text-[#bebebc] text-sm mb-4 line-clamp-3 leading-relaxed flex-1 min-h-[4.5rem]">
            {blog.excerpt}
          </p>

          {/* Author and Date */}
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-[#6b7280]">By {blog.author}</span>
            <span className="text-[#6b7280]">{new Date(blog.date).toLocaleDateString()}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {blog.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#8b949e] rounded-full border border-[#2a2a2a]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}