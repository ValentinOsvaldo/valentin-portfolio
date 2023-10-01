/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'store-images.s-microsoft.com' },
      { hostname: 'res.cloudinary.com' },
    ],
  },
};

module.exports = nextConfig;
