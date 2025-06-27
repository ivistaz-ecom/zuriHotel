/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // Temporarily disabled CSS optimization due to critters module issue
    // experimental: {
    //     optimizeCss: true,
    // },
    async headers() {
        return [
            {
                source: '/api/:path*', // Adjust source as needed
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/christmas-new-year-offers',
                destination: '/offers/stay-offers',
                permanent: true, // Set to true if the redirect is permanent, else false
            },
            {
                source: '/christmas-new-year-offers',
                destination: '/offers/stay-offers',
                permanent: true, // Set to true if the redirect is permanent, else false
            },
        ];
    },
};

// module.exports = nextConfig;
module.exports = withBundleAnalyzer(nextConfig);

