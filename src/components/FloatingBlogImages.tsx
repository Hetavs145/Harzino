import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { BlogPost, dummyBlogs } from './BlogData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FloatingBlogImagesProps {
  onImageClick: (blog: BlogPost) => void;
}

export function FloatingBlogImages({ onImageClick }: FloatingBlogImagesProps) {
  const [randomBlogs, setRandomBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Get 6 random blogs
    const shuffled = [...dummyBlogs].sort(() => 0.5 - Math.random());
    setRandomBlogs(shuffled.slice(0, 6));
  }, []);

  const floatingPositions = [
    { top: '10%', left: '5%', delay: 0, size: 'large' },
    { top: '60%', left: '8%', delay: 0.2, size: 'medium' },
    { top: '25%', left: '20%', delay: 0.4, size: 'small' },
    { top: '15%', right: '8%', delay: 0.6, size: 'medium' },
    { top: '45%', right: '5%', delay: 0.8, size: 'large' },
    { top: '75%', right: '15%', delay: 1.0, size: 'small' }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'w-48 h-28 sm:w-56 sm:h-32 lg:w-64 lg:h-36';
      case 'medium':
        return 'w-40 h-24 sm:w-48 sm:h-28 lg:w-52 lg:h-30';
      case 'small':
        return 'w-32 h-20 sm:w-40 sm:h-24 lg:w-44 lg:h-26';
      default:
        return 'w-40 h-24 sm:w-48 sm:h-28 lg:w-52 lg:h-30';
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {randomBlogs.map((blog, index) => {
        const position = floatingPositions[index];
        return (
          <motion.div
            key={blog.id}
            className="absolute cursor-pointer pointer-events-auto group"
            style={{
              top: position.top,
              left: position.left,
              right: position.right
            }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: position.delay,
              duration: 0.8,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05, z: 10 }}
            onClick={() => onImageClick(blog)}
          >
            {/* Floating Animation Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-1, 1, -1],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 5 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Image Container with 16:9 aspect ratio */}
              <div 
                className={`${getSizeClasses(position.size)} rounded-lg overflow-hidden shadow-2xl border border-white/10 group-hover:border-[#dc0073]/50 transition-all duration-300 bg-[#1a1a1a]`}
              >
                <ImageWithFallback
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay with blog info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium line-clamp-2 mb-1">
                      {blog.title}
                    </p>
                    <p className="text-[#dc0073] text-xs">
                      {blog.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#dc0073]/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Featured Blog Circular Element */}
      <motion.div
        className="absolute top-1/2 right-12 lg:right-20 transform -translate-y-1/2 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative w-28 h-28 lg:w-32 lg:h-32"
        >
          {/* Circular Text */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text className="text-[8px] fill-[#dc0073] font-medium">
              <textPath href="#circle">
                Featured Blog • Featured Blog • 
              </textPath>
            </text>
          </svg>
          
          {/* Center Arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#dc0073]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Additional floating elements to match the image */}
      <motion.div
        className="absolute top-20 left-1/3 w-16 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />

      <motion.div
        className="absolute bottom-20 right-1/3 w-12 h-16 bg-gradient-to-br from-[#dc0073]/20 to-purple-600/20 rounded-lg backdrop-blur-sm border border-[#dc0073]/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}