/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_ENTRYPOINT ? process.env.NEXT_PUBLIC_ENTRYPOINT : "",
  reactStrictMode: false,
  swcMinify: false,
  productionBrowserSourceMaps: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Important: return the modified config
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.mjs$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ];
    return config;
  },
};

module.exports = nextConfig;
