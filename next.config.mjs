/** @type {import('next').NextConfig} */
const nextConfig = {
    // This configuration is required whenever the next/Image is used to let it know about the souce of the images, so it approves teh images from the specifiec URL
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
