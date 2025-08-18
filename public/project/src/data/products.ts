import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'The most advanced iPhone yet with titanium design and A17 Pro chip.',
    price: 999,
    originalPrice: 1099,
    images: [
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'
    ],
    category: 'smartphones',
    brand: 'Apple',
    rating: 4.8,
    reviewCount: 2456,
    inStock: true,
    features: [
      'A17 Pro chip with 6-core GPU',
      'Pro camera system',
      'Titanium design',
      'Action Button',
      'USB-C connectivity'
    ],
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Storage': '128GB, 256GB, 512GB, 1TB',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
      'Battery': 'Up to 23 hours video playback',
      'OS': 'iOS 17'
    }
  },
  {
    id: '2',
    name: 'MacBook Pro 14"',
    description: 'Supercharged by M3 Pro and M3 Max chips for unprecedented performance.',
    price: 1999,
    originalPrice: 2199,
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg'
    ],
    category: 'laptops',
    brand: 'Apple',
    rating: 4.9,
    reviewCount: 1834,
    inStock: true,
    features: [
      'M3 Pro or M3 Max chip',
      '14.2-inch Liquid Retina XDR display',
      'Up to 128GB unified memory',
      'Advanced thermal system',
      'Three Thunderbolt 4 ports'
    ],
    specifications: {
      'Display': '14.2-inch Liquid Retina XDR',
      'Processor': 'Apple M3 Pro or M3 Max',
      'Memory': 'Up to 128GB unified memory',
      'Storage': 'Up to 8TB SSD',
      'Battery': 'Up to 18 hours'
    }
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'The ultimate Galaxy experience with AI-powered features and S Pen.',
    price: 1199,
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg'
    ],
    category: 'smartphones',
    brand: 'Samsung',
    rating: 4.7,
    reviewCount: 3201,
    inStock: true,
    features: [
      'Snapdragon 8 Gen 3 processor',
      '200MP camera with AI zoom',
      'S Pen included',
      '6.8-inch Dynamic AMOLED 2X',
      '5000mAh battery'
    ],
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Storage': '256GB, 512GB, 1TB',
      'Camera': '200MP + 50MP + 12MP + 12MP'
    }
  },
  {
    id: '4',
    name: 'iPad Pro 12.9"',
    description: 'The most advanced iPad with M2 chip and stunning Liquid Retina XDR display.',
    price: 1099,
    originalPrice: 1199,
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg'
    ],
    category: 'tablets',
    brand: 'Apple',
    rating: 4.8,
    reviewCount: 1567,
    inStock: true,
    features: [
      'M2 chip with 8-core CPU',
      '12.9-inch Liquid Retina XDR display',
      'Apple Pencil (2nd generation) support',
      'Magic Keyboard compatible',
      'All-day battery life'
    ],
    specifications: {
      'Display': '12.9-inch Liquid Retina XDR',
      'Processor': 'Apple M2 chip',
      'Storage': '128GB, 256GB, 512GB, 1TB, 2TB',
      'Camera': '12MP Wide, 10MP Ultra Wide',
      'Connectivity': 'Wi-Fi 6E, 5G (cellular models)'
    }
  },
  {
    id: '5',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling wireless headphones with premium sound.',
    price: 399,
    originalPrice: 449,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg'
    ],
    category: 'audio',
    brand: 'Sony',
    rating: 4.6,
    reviewCount: 2890,
    inStock: true,
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Multipoint connection',
      'Speak-to-chat technology',
      'Quick Attention mode'
    ],
    specifications: {
      'Driver Unit': '30mm',
      'Battery Life': '30 hours (ANC ON)',
      'Charging': 'USB-C, Wireless charging',
      'Bluetooth': 'Version 5.2',
      'Weight': '249g'
    }
  },
  {
    id: '6',
    name: 'Dell XPS 13',
    description: 'Ultra-portable laptop with stunning InfinityEdge display and premium build.',
    price: 1299,
    images: [
      'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg',
      'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg'
    ],
    category: 'laptops',
    brand: 'Dell',
    rating: 4.5,
    reviewCount: 1245,
    inStock: true,
    features: [
      'Intel 13th Gen processors',
      '13.4-inch InfinityEdge display',
      'Premium aluminum construction',
      'Thunderbolt 4 ports',
      'Windows 11 Pro'
    ],
    specifications: {
      'Display': '13.4-inch FHD+ or 4K',
      'Processor': 'Intel Core i5 or i7 13th Gen',
      'RAM': '8GB or 16GB LPDDR5',
      'Storage': '256GB or 512GB SSD',
      'Weight': '2.59 lbs'
    }
  }
];

export const categories = [
  { id: 'smartphones', name: 'Smartphones', count: 2 },
  { id: 'laptops', name: 'Laptops', count: 2 },
  { id: 'tablets', name: 'Tablets', count: 1 },
  { id: 'audio', name: 'Audio', count: 1 }
];