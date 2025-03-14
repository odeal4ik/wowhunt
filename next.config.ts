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
        domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN as string],
    },
    async rewrites() {
        return [
            {
                source: '/storage/:path*',
                destination: `https://${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/storage/:path*`,
            },
        ];
    },
};

export default nextConfig;
