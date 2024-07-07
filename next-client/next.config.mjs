/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fcmb1-2.fna.fbcdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
