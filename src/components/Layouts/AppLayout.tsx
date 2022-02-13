import Sidebar from './Sidebar'
import { useAuth } from '../../hooks/auth'
import Head from 'next/head'
import { useState } from 'react'
import { ResponsiveNavButton } from '../NavLink/ResponsiveNavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: true,
    })

    const [open, setOpen] = useState(true)

    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="/images/icons/favicon.svg"
                    type="image/x-icon"
                />
            </Head>

            <div className="min-h-screen bg-gray-100 flex">
                <Sidebar user={user} open={open} />
                {/* Page Content */}
                <main className="flex-1">
                    <header className="bg-white border-b">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center gap-x-4">
                            <button
                                className="rounded"
                                onClick={() => setOpen(!open)}>
                                {open ? (
                                    <FontAwesomeIcon icon={faTimes} size="xs" />
                                ) : (
                                    <FontAwesomeIcon icon={faBars} size="xs" />
                                )}
                            </button>
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
