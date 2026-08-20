import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      'remark-gfm',
      'remark-math',
    ],
    rehypePlugins: [
      ['rehype-katex', { strict: false, throwOnError: false }],
      ['rehype-pretty-code', { theme: 'catppuccin-macchiato', keepBackground: false, defaultLang: { block: 'text' } }],
    ],
  }
})

export default withMDX(nextConfig);
