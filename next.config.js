/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration for production build
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  
  // Enable experimental features including Turbopack
  experimental: {
    turbo: {
      rules: {
        // Add Turbopack-specific rules here if needed
      },
    },
  },

  images: {
    domains: [], // Add any external domains if needed
  },
}

module.exports = nextConfig 