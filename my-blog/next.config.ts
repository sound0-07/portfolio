import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: isProduction ? '/blog-front-end': '',
};

export default nextConfig;
