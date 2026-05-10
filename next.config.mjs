const nextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ]
  }
};

export default nextConfig;
