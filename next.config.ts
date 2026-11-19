import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  basePath: isGitHubPages ? "/Ahmed-Rashad-Ali" : "",
};

export default nextConfig;
