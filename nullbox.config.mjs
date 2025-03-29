/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add experimental features for React 19 compatibility
  experimental: {
    serverActions: {
	  allowedOrigins: ['localhost:3000', 'nullbox.org','null-box.org', '*.vercel.app'],
    },
  },
};

export default nextConfig;
