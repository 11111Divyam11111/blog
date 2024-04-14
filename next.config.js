
const { withNextVideo } = require('next-video/process');


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daisyui.com',
      },
    ],
  },
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.mp4$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'videos/',
            publicPath: '/videos/',
          },
        },
      },
  )
    return config
  },
};
module.exports = withNextVideo(nextConfig);
