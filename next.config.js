/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
