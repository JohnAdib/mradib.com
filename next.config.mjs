/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production';
// const productionUrl = 'https://blog.mradib.com';
// const assetPrefix = isProd ? productionUrl : undefined;

const nextConfig = {
  output: 'export',
  // assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
