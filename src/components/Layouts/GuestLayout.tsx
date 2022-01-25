import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Wynntils</title>
                <link rel="icon" href="/images/icons/favicon.svg" type="image/x-icon" />
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </>
    )
}

export default GuestLayout
