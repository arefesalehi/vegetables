/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
      },
      images: {
           unoptimized: true,
        remotePatterns: [{
          protocol: 'http',
          hostname: 'localhost',
          port: '3000',
          pathname: '/uploads/**',
        
        }]
      },
      
    
};

export default nextConfig;
