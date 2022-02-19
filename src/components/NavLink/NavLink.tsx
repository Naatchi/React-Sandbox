import Link from 'next/link'

const NavLink = ({ active = false, href, children, ...props }) => (
    <Link {...props} href={href}>
        <a
            className={`flex items-center py-3 pl-[17px] w-full ${
                active
                    ? 'border-l-[4px] border-emerald-500 bg-emerald-200/50 text-gray-800 font-bold'
                    : 'border-l-[4px] border-transparent transition-all text-gray-800 hover:pl-6 hover:border-emerald-500 hover:bg-emerald-200/50 hover:font-bold'
            } gap-x-4`}>
            {props?.icon}
            <p className="xs:hidden md:block">{children}</p>
        </a>
    </Link>
)

export default NavLink
