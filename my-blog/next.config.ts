import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: '/blog-front-end',
};

export default nextConfig;
