import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static website: `pnpm build` creates an `out` folder to upload to Hostinger (public_html)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;