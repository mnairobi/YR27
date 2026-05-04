/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '8000', pathname: '/media/**' },
      { protocol: 'https', hostname: '*.yr27movement.co.ke', pathname: '/media/**' },
    ],
    unoptimized: true,
  },
}
module.exports = nextConfig