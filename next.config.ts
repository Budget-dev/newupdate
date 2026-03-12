import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Enable compression for smaller payload sizes
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Support modern formats for better compression ratios
    formats: ['image/avif', 'image/webp'],
    // Optimized cache duration for images
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yasodha.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's0.wp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
