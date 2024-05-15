/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['iustudio-storage.s3.eu-north-1.amazonaws.com', 'placehold.co'],
      unoptimized: true,
    },
  output:'export',
    // Your other Next.js configurations...
  };
  
  export default nextConfig;
  