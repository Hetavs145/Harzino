import React from 'react';
import { BannerCarousel } from './BannerCarousel';

// Sample banner images for e-commerce website
const sampleBannerImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    alt: 'Summer Sale Banner',
    title: 'Summer Sale',
    description: 'Up to 70% off on all summer collection items. Limited time offer!'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=400&fit=crop',
    alt: 'New Arrivals',
    title: 'New Arrivals',
    description: 'Discover the latest trends and newest products in our collection'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    alt: 'Free Shipping',
    title: 'Free Shipping',
    description: 'Free shipping on orders over $50. Shop now and save!'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=400&fit=crop',
    alt: 'Customer Rewards',
    title: 'Customer Rewards',
    description: 'Join our loyalty program and earn points on every purchase'
  }
];

export const BannerCarouselDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Banner Carousel Demo</h1>
          <p className="text-gray-600 mt-1">Responsive e-commerce banner carousel with auto-rotation and mobile swipe support</p>
        </div>
      </div>

      {/* Main Banner Carousel */}
      <div className="w-full">
        <BannerCarousel
          images={sampleBannerImages}
          autoPlayInterval={4000}
          showArrows={true}
          showDots={true}
          showTitle={true}
          showDescription={true}
          className="h-64 md:h-80 lg:h-96"
        />
      </div>

      {/* Configuration Examples */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Minimal Carousel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Minimal Carousel</h3>
            <div className="h-48 rounded-lg overflow-hidden">
              <BannerCarousel
                images={sampleBannerImages.slice(0, 2)}
                autoPlayInterval={3000}
                showArrows={true}
                showDots={false}
                showTitle={false}
                showDescription={false}
                className="h-full"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Simple carousel with arrows only, no text overlay
            </p>
          </div>

          {/* Example 2: Text-Only Carousel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Text-Only Carousel</h3>
            <div className="h-48 rounded-lg overflow-hidden">
              <BannerCarousel
                images={sampleBannerImages.slice(0, 2)}
                autoPlayInterval={5000}
                showArrows={false}
                showDots={true}
                showTitle={true}
                showDescription={true}
                className="h-full"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Carousel with dots navigation and text overlay
            </p>
          </div>

          {/* Example 3: Fast Auto-Play */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Fast Auto-Play</h3>
            <div className="h-48 rounded-lg overflow-hidden">
              <BannerCarousel
                images={sampleBannerImages}
                autoPlayInterval={2000}
                showArrows={true}
                showDots={true}
                showTitle={true}
                showDescription={false}
                className="h-full"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Fast rotation (2 seconds) with title only
            </p>
          </div>

          {/* Example 4: Manual Control */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Manual Control</h3>
            <div className="h-48 rounded-lg overflow-hidden">
              <BannerCarousel
                images={sampleBannerImages.slice(0, 3)}
                autoPlayInterval={0} // Disable auto-play
                showArrows={true}
                showDots={true}
                showTitle={true}
                showDescription={true}
                className="h-full"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Manual navigation only, no auto-rotation
            </p>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">How to Use</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Basic Usage</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<BannerCarousel
  images={bannerImages}
  className="h-64"
/>`}
              </pre>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">With All Options</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<BannerCarousel
  images={bannerImages}
  autoPlayInterval={5000}
  showArrows={true}
  showDots={true}
  showTitle={true}
  showDescription={true}
  className="h-96"
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Responsive design for all screen sizes
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Automatic image rotation with configurable interval
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Navigation arrows and dots
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Mobile swipe support (horizontal only)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Desktop drag support
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Pause on hover/touch
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Optional title and description overlays
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Progress bar indicator
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Smooth transitions and animations
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Accessible navigation controls
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};