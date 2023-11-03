
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    domains: ["localhost", "api.myforexbuddy.com", "images.unsplash.com"],
    unoptimized:true
  },
  swcMinify: true,
}
 
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
