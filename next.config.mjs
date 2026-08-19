/** @type {import('next').NextConfig} */
const basePath = process.env.PAGES_BASE_PATH || undefined;

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
