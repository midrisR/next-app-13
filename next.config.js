/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["projectme.my.id", "api.projectme.my.id"],
  },
  async headers() {
    return [
      // Semua file di /images/** cache 1 tahun + immutable
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // (opsional) HTML/route lain tetap no-cache
      {
        source: "/:path*",
        headers: [{ key: "Cache-Control", value: "no-cache" }],
      },
    ];
  },
};

module.exports = nextConfig;
