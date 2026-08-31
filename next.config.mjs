/** @type {import('next').NextConfig} */
const basePath = process.env.PAGES_BASE_PATH || undefined;

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1"],
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
