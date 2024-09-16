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
}
module.exports = nextConfig
