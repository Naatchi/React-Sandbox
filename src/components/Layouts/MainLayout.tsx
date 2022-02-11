import Head from 'next/head'

const MainLayout = ({ title, headerTitle, children }) => {
    return (
        <>
            <Head>
                <title>Wynntils || {title}</title>
            </Head>

            <header>
                <h1>{headerTitle}</h1>
            </header>

            <main>{children}</main>
        </>
    )
}

export default MainLayout
