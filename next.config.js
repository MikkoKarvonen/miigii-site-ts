/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["airtable.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
