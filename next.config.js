const nextConfig = {
  basePath: "/republica-dauhma",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/republica-dauhma",
  },
};

module.exports = nextConfig;
