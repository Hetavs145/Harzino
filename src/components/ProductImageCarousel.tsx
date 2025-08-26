import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductImage {
  id: string;
  src: string;
  alt: string;
  thumbnail?: string;
}

interface ProductImageCarouselProps {
  images: ProductImage[];
  autoScrollInterval?: number; // in milliseconds
  showThumbnails?: boolean;
  showNavigation?: boolean;
  className?: string;
  imageClassName?: string;
  thumbnailClassName?: string;
  autoScroll?: boolean;
  loop?: boolean;
}

export const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
  autoScrollInterval = 3000,
  showThumbnails = true,
  showNavigation = true,
  className = '',
  imageClassName = '',
  thumbnailClassName = '',
  autoScroll = true,
  loop = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && autoScroll && images.length > 1) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === images.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoScrollInterval);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, autoScroll, autoScrollInterval, images.length, loop]);

  // Pause auto-scroll on hover
  const pauseAutoScroll = useCallback(() => {
    setIsAutoScrolling(false);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  }, []);

  const resumeAutoScroll = useCallback(() => {
    setIsAutoScrolling(true);
  }, []);

  // Navigation functions
  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
    pauseAutoScroll();
    setTimeout(resumeAutoScroll, 1000);
  }, [pauseAutoScroll, resumeAutoScroll]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === images.length - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
    pauseAutoScroll();
    setTimeout(resumeAutoScroll, 1000);
  }, [images.length, loop, pauseAutoScroll, resumeAutoScroll]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return loop ? images.length - 1 : prev;
      }
      return prev - 1;
    });
    pauseAutoScroll();
    setTimeout(resumeAutoScroll, 1000);
  }, [images.length, loop, pauseAutoScroll, resumeAutoScroll]);

  // Scroll to current image in container
  useEffect(() => {
    if (containerRef.current && showThumbnails) {
      const thumbnailElement = containerRef.current.children[currentIndex] as HTMLElement;
      if (thumbnailElement) {
        thumbnailElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentIndex, showThumbnails]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Display */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className={`w-full h-full object-cover ${imageClassName}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            draggable={false}
          />
        </AnimatePresence>

        {/* Navigation Arrows (only show on hover) */}
        {showNavigation && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 md:p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 md:p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Next image"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {showThumbnails && images.length > 1 && (
        <div className="mt-3">
          <div 
            ref={containerRef}
            className="flex space-x-2 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 ${thumbnailClassName}`}
              >
                <img
                  src={image.thumbnail || image.src}
                  alt={`${image.alt} thumbnail`}
                  className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border-2 transition-all duration-200 ${
                    index === currentIndex 
                      ? 'border-blue-500 scale-105' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Auto-scroll Progress Indicator */}
      {isAutoScrolling && autoScroll && images.length > 1 && (
        <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: autoScrollInterval / 1000, ease: 'linear' }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

// CSS for hiding scrollbars
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);