import { useRouter } from 'next/router'
import NavLink from '../NavLink/NavLink'
import {
    faExclamationTriangle,
    faHouse,
    faMoneyBillWave,
    faPaintBrush,
    faShield,
    faTShirt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = ({ user }) => {
    const router = useRouter()

    // const { logout } = useAuth()

    let bgGradient
    let rankIcon
    if (user?.accountType === 'DONATOR') {
        bgGradient = 'bg-gradient-to-br from-yellow-200/50  to-rose-300/50'
        rankIcon = <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
    } else if (
        user?.accountType === 'MODERATOR' ||
        user?.accountType === 'HELPER'
    ) {
        bgGradient = 'bg-gradient-to-br from-teal-200/50 to-green-400/50'
        rankIcon = <FontAwesomeIcon icon={faShield} size="2x" />
    } else if (user?.accountType === 'CONTENT_TEAM') {
        bgGradient = 'bg-gradient-to-br from-cyan-200/50 to-sky-300/50'
        rankIcon = <FontAwesomeIcon icon={faPaintBrush} size="2x" />
    } else {
        bgGradient = 'bg-gradient-to-br from-gray-200/75 to-gray-300/75'
    }

    // const [open, setOpen] = useState(true)

    return (
        <aside
            className="flex flex-col w-full max-w-xs h-screen pb-5 overflow-y-auto bg-white shadow-md z-[100]"
            id="dashboardSidenav">
            <div className="mt-5">
                <div
                    className={`relative flex items-center gap-x-4 mx-5 p-3  mb-6 rounded-md  ${bgGradient} shadow`}>
                    <img
                        src={`https://minotar.net/helm/${user?._id}/100.png`}
                        alt="User avatar"
                        className="h-10 rounded-md"
                    />
                    <div className="flex-row">
                        <h1 className="grow leading-tight font-bold">
                            {user?.username}
                        </h1>
                        <p className="leading-tight text-sm">
                            {user?.accountType.replace('_', ' ')}
                        </p>
                    </div>
                    <div className="absolute top-4 right-4">{rankIcon}</div>
                </div>
                <hr className="mt-5 border-gray-200" />
                <div className="mt-5 space-y-3">
                    <h1 className="px-5 flex font-semibold text-sm text-gray-500 my-4 font-sans uppercase">
                        Dashboard
                    </h1>
                    <NavLink
                        active={router.pathname === '/dashboard'}
                        href="/dashboard"
                        icon={<FontAwesomeIcon icon={faHouse} size={'lg'} />}>
                        Home
                    </NavLink>
                    <NavLink
                        active={router.pathname === '/hello'}
                        href="/"
                        icon={<FontAwesomeIcon icon={faTShirt} size={'lg'} />}>
                        Cape Designs
                    </NavLink>
                    <NavLink
                        active={router.pathname === '/punishments'}
                        href="/"
                        icon={
                            <FontAwesomeIcon
                                icon={faExclamationTriangle}
                                size={'lg'}
                            />
                        }>
                        My Punishments
                    </NavLink>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
