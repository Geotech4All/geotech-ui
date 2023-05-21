/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                port: '',
                hostname: "res.cloudinary.com",
                pathname: "/*",
                protocol: "https"
            }
        ]
    }
}

module.exports = nextConfig
