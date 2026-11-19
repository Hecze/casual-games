import type { NextConfig } from 'next';

// Export estático: la app es 100% cliente, sin servidor, sin base de datos.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
