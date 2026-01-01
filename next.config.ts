const isGitHubPages = process.env.GITHUB_PAGES === 'true';

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : 'standalone',
  basePath: isGitHubPages ? '/dashboard-25-26' : '',
  assetPrefix: isGitHubPages ? '/dashboard-25-26/' : '/',
  trailingSlash: true,
  outputFileTracingExcludes: {
    '/api/*': ['src/app/api/**/*'],
  }
};

export default nextConfig;
