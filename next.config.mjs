/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { remotePatterns: [{ hostname: "images.pexels.com", protocol: "https" }, { hostname: "media.istockphoto.com", protocol: "https" }] }
};

export default nextConfig;
