const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: true,
  },
});

module.exports = nextConfig;