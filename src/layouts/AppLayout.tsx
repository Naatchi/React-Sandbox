import Head from 'next/head'
import Sidebar from '@/components/Sidebar'

const AppLayout = ({ header, children }: any) => {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="/images/icons/favicon.svg"
                    type="image/x-icon"
                />
            </Head>

            <Sidebar />
            <div className="relative md:ml-64 bg-gray-100 min-h-screen">
                {/* Page Content */}
                <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-roz md:flex-nowrap md:justify-start flex items-center p-4">
                    <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                        <h1 className="text-white text-lg uppercase hidden lg:inline-block font-semibold">
                            {header}
                        </h1>
                    </div>
                </nav>
                <div className="relative bg-slate-900 md:pt-32 pb-32 pt-12">
                    <p className="text-white">Info here?</p>
                </div>

                <div className="relative px-4 md:px-10 mx-auto w-full -m-24 z-11">
                    {children}
                </div>
            </div>
        </>
    )
}

export default AppLayout
