import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

const nextConfig: NextConfig = {
	devIndicators: false,
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
