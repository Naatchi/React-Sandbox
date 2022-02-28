module.exports = {
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
