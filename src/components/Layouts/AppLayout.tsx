import Sidebar from './Sidebar'
import { useAuth } from '../../hooks/auth'
import Head from 'next/head'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: true,
    })

    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="/images/icons/favicon.svg"
                    type="image/x-icon"
                />
            </Head>

            <div className="min-h-screen bg-gray-100 flex ">
                <Sidebar user={user} />
                {/* Page Content */}
                <main className="flex-1">
                    <header className="bg-white border-b ">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                    {children}
                </main>
            </div>
        </>
    )
}

export default AppLayout
