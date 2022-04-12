import Link from 'next/link'

const ResponsiveNavLink = ({
    active = false,
    href,
    children,
    ...props
}: any) => (
    <Link {...props} href={href}>
        <a
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
                active
                    ? 'border-green-400 text-green-700 bg-green-50 focus:text-green-800 focus:bg-green-100 focus:border-green-700'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
            }`}>
            {children}
        </a>
    </Link>
)

export const ResponsiveNavButton = (props: any) => (
    <button
        className={`inline-flex items-center gap-x-4 pl-4 pr-4 py-2 hover:bg-red-400 transition-all ease-in-out`}
        {...props}
    />
)

export default ResponsiveNavLink
