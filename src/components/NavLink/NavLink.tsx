import Link from 'next/link'

const NavLink = ({ active = false, href, children, ...props }) => (
    <Link {...props} href={href}>
        <a
            className={`flex items-center py-3 pl-[17px] ${
                active
                    ? 'border-l-[3px] border-indigo-500 bg-indigo-200/50 text-gray-500 font-bold'
                    : 'border-l-[3px] border-transparent transition-all text-gray-500 hover:pl-6 hover:border-indigo-500 hover:bg-indigo-200/50 hover:font-bold'
            } gap-x-4`}>
            {props?.icon}
            {children}
        </a>
    </Link>
)

export default NavLink
