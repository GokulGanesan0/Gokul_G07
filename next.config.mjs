/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure trailing slashes are handled correctly for static exports
  trailingSlash: true,
  // If deploying to a repo subdirectory (e.g., https://username.github.io/repo-name/),
  // uncomment and change 'repo-name' below to match your repository name:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
};

export default nextConfig;
