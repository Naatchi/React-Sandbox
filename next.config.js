module.exports = {

    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

    experimental: {
        outputStandalone: true,
    },
    async redirects() {
        return [
            {
                source: '/register',
                destination: '/auth/register',
                permanent: true,
            },
        ]
    },
}
