/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Tells Next.js to create a static 'out' folder for iOS
  trailingSlash: true,    // Required for static routing inside the iOS app view
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // This allows the production build to successfully complete 
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This allows the production build to successfully complete
    // even if your project has TypeScript type errors.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
