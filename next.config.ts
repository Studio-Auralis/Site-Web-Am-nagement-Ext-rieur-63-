import type { NextConfig } from "next";

// Nom du repository pour GitHub Pages
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/Site-Web-Am-nagement-Ext-rieur-63-';

const nextConfig: NextConfig = {
  // Configuration pour GitHub Pages
  output: 'export',
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
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
