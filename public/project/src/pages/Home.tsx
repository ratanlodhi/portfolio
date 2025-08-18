import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Home/Hero';
import ProductCard from '../components/Product/ProductCard';
import { products } from '../data/products';
import { Star, TrendingUp, Award, Users } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">4.8/5</div>
              <div className="text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">99%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of the latest and greatest electronics
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/products?category=smartphones"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Smartphones</h3>
                <p className="text-blue-100 text-sm">Latest models from top brands</p>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            </Link>
            
            <Link
              to="/products?category=laptops"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Laptops</h3>
                <p className="text-purple-100 text-sm">Powerful computing solutions</p>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            </Link>
            
            <Link
              to="/products?category=audio"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 text-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Audio</h3>
                <p className="text-orange-100 text-sm">Premium headphones & speakers</p>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            </Link>
            
            <Link
              to="/products?category=tablets"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-8 text-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Tablets</h3>
                <p className="text-green-100 text-sm">Portable productivity devices</p>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest deals and product updates delivered to your inbox
            </p>
            
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;