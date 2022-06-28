/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    app_base_url: process.env.APP_BASE_URL,
  },
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/restaurant_users',
      //   permanent: true,
      // },
    ];
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
