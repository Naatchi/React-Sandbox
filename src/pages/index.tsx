import Head from 'next/head'
import styles from '../styles/index.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Title</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className='bg-gray-800 bg-auto h-screen'>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden">
                    <p className="flex mt-20 justify-center text-lg font-bold uppercase text-white"> Sandbox </p>
                    <div className="w-full p-2 justify-center bg-gray-700 rounded h-96 shadow-md">

                    </div>
                </div>
            </div>
        </>
    )
}
