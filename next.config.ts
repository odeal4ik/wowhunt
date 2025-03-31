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
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/50x50',
                search: '?text=Avatar',
            },
        ],
        // dangerouslyAllowSVG: true,
        // contentDispositionType: 'attachment',
        // contentSecurityPolicy:
        //     "default-src 'self'; script-src 'none'; sandbox;",
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
