/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravindoberkatisukses.co.id",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
