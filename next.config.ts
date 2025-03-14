import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },

    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: process.env.APP_DOMAIN as string,
        //         port: '',
        //         pathname: '/storage/**',
        //         search: '',
        //     },
        // ],
    },
    async rewrites() {
        return [
            {
                source: '/storage/:path*',
                destination: `${process.env.APP_URL}/storage/:path*`,
            },
        ];
    },
};

export default nextConfig;
