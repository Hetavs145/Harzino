import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FloatingBlogImages } from "../FloatingBlogImages";
import { BlogCard } from "../BlogCard";
import { getFeaturedBlogs, BlogPost } from "../BlogData";
import { Button } from "../ui/button";
import { Footer } from "../Footer";
import { BannerCarousel } from "../BannerCarousel";
import { ProductCard } from "../ProductCard";

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

  // Banner carousel images for e-commerce website
  const bannerImages = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
      alt: 'Summer Sale Banner',
      title: 'Summer Sale',
      description: 'Up to 70% off on all summer collection items. Limited time offer!'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop',
      alt: 'New Arrivals',
      title: 'New Arrivals',
      description: 'Discover the latest trends and newest products in our collection'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
      alt: 'Free Shipping',
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50. Shop now and save!'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop',
      alt: 'Customer Rewards',
      title: 'Customer Rewards',
      description: 'Join our loyalty program and earn points on every purchase'
    }
  ];

  // Featured products with multiple images for carousel
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 2499,
      originalPrice: 3999,
      discount: 38,
      rating: 4.5,
      reviewCount: 128,
      isNew: true,
      isFeatured: true,
      images: [
        {
          id: '1-1',
          src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
          alt: 'Wireless Headphones Front View'
        },
        {
          id: '1-2',
          src: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
          alt: 'Wireless Headphones Side View'
        },
        {
          id: '1-3',
          src: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop',
          alt: 'Wireless Headphones Detail'
        }
      ]
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 1899,
      originalPrice: 2499,
      discount: 24,
      rating: 4.3,
      reviewCount: 89,
      isFeatured: true,
      images: [
        {
          id: '2-1',
          src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
          alt: 'Smart Watch Front View'
        },
        {
          id: '2-2',
          src: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop',
          alt: 'Smart Watch Side View'
        },
        {
          id: '2-3',
          src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
          alt: 'Smart Watch Detail'
        }
      ]
    },
    {
      id: '3',
      name: 'Portable Bluetooth Speaker',
      price: 1299,
      originalPrice: 1799,
      discount: 28,
      rating: 4.7,
      reviewCount: 156,
      isNew: true,
      images: [
        {
          id: '3-1',
          src: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
          alt: 'Bluetooth Speaker Front View'
        },
        {
          id: '3-2',
          src: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
          alt: 'Bluetooth Speaker Side View'
        },
        {
          id: '3-3',
          src: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
          alt: 'Bluetooth Speaker Detail'
        }
      ]
    },
    {
      id: '4',
      name: 'Ultra HD Action Camera',
      price: 3499,
      originalPrice: 4999,
      discount: 30,
      rating: 4.6,
      reviewCount: 203,
      isFeatured: true,
      images: [
        {
          id: '4-1',
          src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
          alt: 'Action Camera Front View'
        },
        {
          id: '4-2',
          src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
          alt: 'Action Camera Side View'
        },
        {
          id: '4-3',
          src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
          alt: 'Action Camera Detail'
        }
      ]
    }
  ];

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
      {/* Banner Carousel Section */}
      <section className="relative w-full">
        <BannerCarousel
          images={bannerImages}
          autoPlayInterval={5000}
          showArrows={true}
          showDots={true}
          showTitle={true}
          showDescription={true}
          className="h-64 md:h-80 lg:h-96"
        />
      </section>

      {/* Hero Content Section */}
      <motion.section
        className="relative py-16 md:py-24 flex items-center justify-center"
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
              className="bg-[#dc0073] hover:bg-[#dc0073] text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#dc0073]/25"
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

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products with multiple image views
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  images={product.images}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  discount={product.discount}
                  isNew={product.isNew}
                  isFeatured={product.isFeatured}
                  onClick={() => console.log(`Clicked product: ${product.name}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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