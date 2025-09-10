import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" }
        ],
    },
}
export default nextConfig
