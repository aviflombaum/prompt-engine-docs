import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    path: basePath ? `${basePath}/_next/image` : "/_next/image",
  },
  publicRuntimeConfig: {
    basePath: basePath,
  },
};

export default withMDX(config);
