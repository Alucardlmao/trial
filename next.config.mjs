/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.API_URL,
        FRONT_URL: 'https://beta.sustainology.life/',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd1zqikvhquyes6.cloudfront.net',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;
