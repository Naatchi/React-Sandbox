import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>TheReactSandbox</title>
            </Head>
            <section id="the-entire-site" className="grid place-items-center bg-gray-800 h-screen">
                <div className="border-gray-600 border-2 bg-gray-700 p-2 rounded-md shadow-md" style={{width: '500px', height: '300px'}}>
                    <div className='border-gray-600 border-2 p-2 rounded-md'>
                        The Sandbox
                    </div>
                    <div id="spacer" className='h-2' />

                    <div className={styles.one}>
                        this is a thing<br/>
                        <div>
                            <li>
                                thing
                            </li>
                            <li>
                                thing 2
                            </li>
                        </div>
                    </div>
                    <div className={styles.two}>
                        this is text
                        <a href='https://cdn.discordapp.com/attachments/838991750584074240/976605107108085810/Screenshot_260.png'>
                            <img src='https://cdn.discordapp.com/attachments/838991750584074240/976605107108085810/Screenshot_260.png' alt='test-image' />
                        </a>
                    </div>
                    <div className={styles.three}>
                        hello jonny :)
                    </div>
                    <div className={styles.four}>
                        this is a thing
                    </div>
                </div>
            </section>
            <section className='h-screen' />
        </>
    )
}
