import AppLayout from '@/layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '../../hooks/auth'
import clsx from 'clsx'

const Dashboard = () => {
    const { user, punishments } = useAuth({
        middleware: 'auth',
    })

    //    let tagClass
    return (
        <AppLayout header="My Punishments">
            <Head>
                <title>Wynntils - {user?.username}</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white  border-b border-gray-200">
                            You have <strong>{punishments?.length}</strong>{' '}
                            punishments
                        </div>

                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Punishment ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Reason
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Type
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Date received
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {punishments?.map(
                                                    punishment => (
                                                        <tr
                                                            key={
                                                                punishment._id
                                                            }>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                                {punishment._id}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                                {
                                                                    punishment.reason
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                {
                                                                    <span
                                                                        className={`rounded px-2 py-1 uppercase font-bold ${clsx(
                                                                            {
                                                                                'bg-amber-200 text-amber-600':
                                                                                    punishment.type.toLowerCase() ===
                                                                                    'strike',
                                                                                'bg-orange-200 text-orange-600':
                                                                                    punishment.type.toLowerCase() ===
                                                                                    'kick',
                                                                                'bg-red-200 text-red-600':
                                                                                    punishment.type.toLowerCase() ===
                                                                                    'ban',
                                                                                'bg-sky-200 text-sky-600':
                                                                                    punishment.type.toLowerCase() ===
                                                                                    'mute',
                                                                            },
                                                                        )}`}>
                                                                        {
                                                                            punishment.type
                                                                        }
                                                                    </span>
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                                {new Date(
                                                                    punishment.timestamp,
                                                                ).toDateString()}
                                                            </td>
                                                        </tr>
                                                    ),
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
