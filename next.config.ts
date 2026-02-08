import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour GitHub Pages
  output: 'export',
  // basePath retiré temporairement pour debug
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.daniel-moquet.fr',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
