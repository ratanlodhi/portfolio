import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover the
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {' '}Future
                </span>
                <br />of Electronics
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Experience cutting-edge technology with our premium collection of smartphones, 
                laptops, tablets, and audio devices. Premium quality, unbeatable prices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products?category=smartphones"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                View Smartphones
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-blue-100">Same-day shipping</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Warranty</h3>
                  <p className="text-sm text-blue-100">2-year guarantee</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Truck className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Shipping</h3>
                  <p className="text-sm text-blue-100">On orders $100+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Showcase */}
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <img
                    src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg"
                    alt="iPhone"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <h3 className="text-white font-semibold mt-3">iPhone 15 Pro</h3>
                  <p className="text-blue-100 text-sm">Starting at $999</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform translate-y-8">
                  <img
                    src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
                    alt="Headphones"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <h3 className="text-white font-semibold mt-3">Sony WH-1000XM5</h3>
                  <p className="text-blue-100 text-sm">Premium Audio</p>
                </div>
              </div>
              <div className="space-y-4 transform -translate-y-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <img
                    src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg"
                    alt="MacBook"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <h3 className="text-white font-semibold mt-3">MacBook Pro</h3>
                  <p className="text-blue-100 text-sm">M3 Chip</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <img
                    src="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
                    alt="iPad"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <h3 className="text-white font-semibold mt-3">iPad Pro</h3>
                  <p className="text-blue-100 text-sm">12.9" Display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;