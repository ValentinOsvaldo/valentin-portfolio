/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'store-images.s-microsoft.com' }],
  },
};

module.exports = nextConfig;
