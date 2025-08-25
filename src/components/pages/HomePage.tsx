import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FloatingBlogImages } from "../FloatingBlogImages";
import { BlogCard } from "../BlogCard";
import { getFeaturedBlogs, BlogPost } from "../BlogData";
import { Button } from "../ui/button";
import { Footer } from "../Footer";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onBlogClick: (blog: BlogPost) => void;
}

export function HomePage({
  onNavigate,
  onBlogClick,
}: HomePageProps) {
  const [featuredBlogs, setFeaturedBlogs] = useState<
    BlogPost[]
  >([]);
  const [showFeatured, setShowFeatured] = useState(false);
  const [breakAnimation, setBreakAnimation] = useState(false);

  useEffect(() => {
    setFeaturedBlogs(getFeaturedBlogs());

    // Check if this is the first time visiting the homepage
    const hasVisitedHomepage = sessionStorage.getItem('hasVisitedHomepage');
    const scrollDelay = hasVisitedHomepage ? 5000 : 1000; // 5s for return visits, 1s for first visit
    
    // Mark as visited
    sessionStorage.setItem('hasVisitedHomepage', 'true');
    
    const timer = setTimeout(() => {
      setBreakAnimation(true);
      setTimeout(() => {
        setShowFeatured(true);
        // Auto scroll to featured section after breakthrough animation
        setTimeout(() => {
          document.querySelector('#featured-section')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 400);
      }, 800); // Delay for breakthrough animation
    }, scrollDelay);

    return () => clearTimeout(timer);
  }, []); // Only run on mount

  const scrollToFeatured = () => {
    if (!showFeatured) {
      setBreakAnimation(true);
      setTimeout(() => {
        setShowFeatured(true);
        // Scroll to featured section after breakthrough animation
        setTimeout(() => {
          document.querySelector('#featured-section')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 400);
      }, 800);
    } else {
      document
        .querySelector("#featured-section")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Main Hero Viewport */}
      <motion.section
        className="relative h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: breakAnimation ? [1, 0.95, 1.1] : 1,
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        {/* Background with Animated Elements */}
        <div className="absolute inset-0">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#0f0f0f]" />

          {/* Subtle animated background shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#dc0073]/5 to-purple-600/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 0.8, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating Blog Images */}
        <FloatingBlogImages onImageClick={onBlogClick} />

        {/* Central Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight max-w-3xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Transforming ideas into{" "}
              </motion.span>
              <motion.span
                className="text-[#dc0073]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                digital reality
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {" "}
                with innovative solutions and cutting-edge
                technology.
              </motion.span>
            </h1>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <blockquote className="text-lg text-[#bebebc] italic max-w-2xl mx-auto">
              "I am always doing things I can't do; that's how I
              get to do them." - Picasso
            </blockquote>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <Button
              onClick={() => onNavigate("blogs")}
              className="bg-[#dc0073] hover:bg-[#b8005f] text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
            >
              Explore Our Work
            </Button>
            <Button
              variant="outline"
              onClick={scrollToFeatured}
              className="border-[#dc0073] text-[#dc0073] hover:bg-[#dc0073] hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300"
            >
              {showFeatured ? "View Featured" : "Discover More"}
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToFeatured}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-[#dc0073] text-sm mb-2">
            Scroll to explore
          </div>
          <div className="w-6 h-10 border-2 border-[#dc0073] rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-[#dc0073] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Breakthrough Animation Overlay */}
      {breakAnimation && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Breaking Fragments */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#050505] border border-[#dc0073]/20"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                scale: [1, 0.8, 0],
                opacity: [1, 0.8, 0],
                rotate: Math.random() * 360,
                x: (Math.random() - 0.5) * 1000,
                y: (Math.random() - 0.5) * 1000,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Featured Blogs Section */}
      <motion.section
        id="featured-section"
        className="py-20 px-4"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{
          opacity: showFeatured ? 1 : 0,
          y: showFeatured ? 0 : 100,
          scale: showFeatured ? 1 : 0.9,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Featured Header with Emergence Effect */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: showFeatured ? 1 : 0,
              scale: showFeatured ? 1 : 0.8,
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text"
                animate={
                  showFeatured
                    ? {
                        backgroundImage: [
                          "linear-gradient(45deg, #dc0073, #dc0073)",
                          "linear-gradient(45deg, #dc0073, #8b45ff)",
                          "linear-gradient(45deg, #8b45ff, #dc0073)",
                          "linear-gradient(45deg, #dc0073, #dc0073)",
                        ],
                      }
                    : {
                        backgroundImage: "linear-gradient(45deg, #dc0073, #8b45ff)",
                      }
                }
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  backgroundImage: "linear-gradient(45deg, #dc0073, #8b45ff)",
                }}
              >
                Featured Stories
              </motion.h2>
            </div>
            <p className="text-xl text-[#bebebc] max-w-2xl mx-auto">
              Discover our latest insights on technology,
              design, and innovation
            </p>
          </motion.div>

          {/* Featured Blogs Grid with uniform sizing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{
                  opacity: showFeatured ? 1 : 0,
                  y: showFeatured ? 0 : 100,
                  rotateX: showFeatured ? 0 : -90,
                }}
                transition={{
                  delay: showFeatured ? 0.5 + index * 0.15 : 0,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <BlogCard
                  blog={blog}
                  onClick={() => onBlogClick(blog)}
                  featured={true}
                  index={index}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: showFeatured ? 1 : 0,
              y: showFeatured ? 0 : 50,
            }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button
              onClick={() => onNavigate("blogs")}
              className="bg-gradient-to-r from-[#dc0073] to-purple-600 hover:from-[#b8005f] hover:to-purple-700 text-white px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
            >
              View All Articles
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}