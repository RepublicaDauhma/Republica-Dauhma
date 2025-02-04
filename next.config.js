/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/republica-dauhma',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}
 
module.exports = nextConfig
