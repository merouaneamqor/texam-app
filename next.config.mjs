import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,          // Enable SWC minification
  compress: true,           // Enable compression
  productionBrowserSourceMaps: true  // Better debugging for production
};

export default withNextIntl(nextConfig);
