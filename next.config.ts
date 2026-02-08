import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour GitHub Pages
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Site-Web-Am-nagement-Ext-rieur-63-' : '',
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
