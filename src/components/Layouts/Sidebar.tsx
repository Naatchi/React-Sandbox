import { useRouter } from 'next/router'
import NavLink from '../NavLink/NavLink'
import {
    faExclamationTriangle,
    faHouse,
    faTShirt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../hooks/auth'
import { ResponsiveNavButton } from '../NavLink/ResponsiveNavLink'
import clsx from 'clsx'

const Sidebar = ({ user, open }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const gradientClasses = clsx([
        {
            'md:bg-gradient-to-br md:from-orange-300 md:to-rose-300':
                user?.accountType === 'DONATOR',
        },
        {
            'md:bg-gradient-to-br md:from-green-200/50 md:to-green-500/50':
                user?.accountType === 'MODERATOR',
        },
        {
            'md:bg-gradient-to-br md:from-yellow-200/50 md:to-yellow-500/50':
                user?.accountType === 'HELPER',
        },
        {
            'md:bg-gradient-to-br md:from-cyan-200/50 md:to-cyan-500/50':
                user?.accountType === 'CONTENT_TEAM',
        },
        {
            'md:bg-gradient-to-br md:from-gray-200/75 md:to-gray-300/75':
                user?.accountType === 'NORMAL' ||
                user?.accountType === 'BANNED',
        },
    ])
    const openClasses = open ? '' : 'hidden'

    return (
        <aside
            className={`sidebar xs:w-16 md:w-64 h-screen shadow bg-white z-20 ${openClasses}`}>
            <div className="mt-5 sidebar-header">
                <div
                    className={`flex items-center xs:justify-center md:justify-start md:gap-x-4 md:mx-5 md:p-3  mb-6 rounded-md  ${gradientClasses} md:shadow-md`}>
                    <img
                        src={`https://minotar.net/helm/${user?._id}.png`}
                        alt="User avatar"
                        className="h-10 rounded-md"
                    />
                    <div className="flex-row text-gray-800 xs:hidden md:inline ">
                        <h1 className="grow leading-tight font-bold">
                            {user?.username}
                        </h1>
                        <p className="leading-tight text-sm">
                            {user?.accountType.replace('_', ' ')}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="mt-5 border-gray-200" />
            <div className="sidebar-content mt-5 space-y-3">
                <h1 className="xs:hidden md:block px-5 flex font-semibold text-sm text-gray-500 my-4 font-sans uppercase">
                    Dashboard
                </h1>
                <NavLink
                    active={router.pathname === '/user/dashboard'}
                    href="/user/dashboard"
                    icon={<FontAwesomeIcon icon={faHouse} size={'lg'} />}>
                    Home
                </NavLink>
                <NavLink
                    active={router.pathname === '/user/capes'}
                    href="/user/dashboard"
                    icon={<FontAwesomeIcon icon={faTShirt} size={'lg'} />}>
                    Cape Designs
                </NavLink>
                <NavLink
                    active={router.pathname === '/user/punishments'}
                    href="/user/punishments"
                    icon={
                        <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            size={'lg'}
                        />
                    }>
                    My Punishments
                </NavLink>
                <ResponsiveNavButton onClick={logout}>
                    Log Out
                </ResponsiveNavButton>
            </div>
        </aside>
    )
}

export default Sidebar
