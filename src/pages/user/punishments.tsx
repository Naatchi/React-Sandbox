import AppLayout from '../../components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '../../hooks/auth'
import axios from '../../lib/axios'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const Dashboard = () => {
    const { user } = useAuth({
        middleware: 'auth',
    })

    const router = useRouter()
    const { data: punishments, error, revalidate } = useSWR(
        '/api/punishments',
        () =>
            axios
                .get('/api/punishments')
                .then(res => res.data)
                .catch(error => {
                    if (error.response.status != 409) throw error

                    router.push('/verify-email')
                }),
    )

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My Punishments
                </h2>
            }>
            <Head>
                <title>Wynntils - {user?.username}</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white  border-b border-gray-200">
                            You have {punishments[0].user} punishments
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
