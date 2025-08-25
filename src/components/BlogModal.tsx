import { motion } from 'motion/react';
import { X, Calendar, Clock, User, Tag } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BlogPost } from './BlogData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogModalProps {
  blog: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BlogModal({ blog, isOpen, onClose }: BlogModalProps) {
  if (!blog) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#050505] border-[#353535] text-[#bebebc] p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header Image */}
          <div className="relative aspect-video overflow-hidden">
            <ImageWithFallback
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Featured Badge */}
            {blog.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#dc0073] text-white border-none">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#6b7280]">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blog.readTime} min read
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {blog.author}
              </div>
            </div>

            {/* Category */}
            <Badge variant="secondary" className="bg-[#dc0073]/10 text-[#dc0073] border-[#dc0073]/20 mb-4">
              {blog.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="text-lg text-[#bebebc] leading-relaxed space-y-6">
                {blog.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                    return (
                      <blockquote key={index} className="border-l-4 border-[#dc0073] pl-6 italic text-[#dc0073] text-xl my-8">
                        {paragraph}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={index} className="text-[#bebebc] leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-[#2a2a2a]">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-4 w-4 text-[#6b7280]" />
                <span className="text-sm text-[#6b7280]">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-[#1a1a1a] text-[#8b949e] rounded-full border border-[#2a2a2a] hover:border-[#dc0073]/30 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-[#2a2a2a]">
              <Button
                onClick={onClose}
                className="bg-[#dc0073] hover:bg-[#b8005f] text-white px-8 py-2"
              >
                Share Article
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
                className="border-[#353535] text-[#bebebc] hover:bg-[#252525] px-8 py-2"
              >
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}