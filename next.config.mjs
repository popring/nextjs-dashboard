import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import remarkMdxImages from 'remark-mdx-images';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    // 图片路径限制
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
  experimental: {
    // 路由校验
    typedRoutes: false,
  },
  // 页面文件尾缀
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // 响应头配置
  async headers() {
    return [
      // 路径匹配
      {
        source: '/course/chapter33/blog/:slug',
        headers: [
          {
            key: 'x-slug',
            value: ':slug', // 匹配参数可以在 value 中使用
          },
          {
            key: 'x-slug-:slug', // 匹配参数可以在 key 中使用
            value: 'path match',
          },
        ],
      },

      // 通配符路径匹配
      {
        source: '/blog/:slug*',
        headers: [
          {
            key: 'x-slug-v2',
            value: ':slug*',
          },
          {
            key: 'x-slug-v2-:slug*',
            value: 'my other custom header value',
          },
        ],
      },

      // 正则表达式路径匹配
      {
        source: '/course/chapter33/blog/:post(\\d{1,})',
        headers: [
          {
            key: 'x-post-v3',
            value: ':post',
          },
        ],
      },
    ];
  },
  // 重定向配置
  async redirects() {
    return [
      {
        source: '/blog/:slug',
        destination: '/course/chapter33/blog/:slug',
        permanent: false,
      },
    ];
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right'
  },
  poweredByHeader: false,
};

const withMDX = createMDX({
  // 添加 markdown 插件
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMdxImages,
      [remarkFrontmatter],
      [remarkMdxFrontmatter],
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
