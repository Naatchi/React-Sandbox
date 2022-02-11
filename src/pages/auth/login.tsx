import ApplicationLogo from '../../components/ApplicationLogo'
import AuthCard from '../../components/Auth/AuthCard'
import AuthSessionStatus from '../../components/Auth/AuthSessionStatus'
import AuthValidationErrors from '../../components/Auth/AuthValidationErrors'
import Button from '../../components/Button/Button'
import GuestLayout from '../../components/Layouts/GuestLayout'
import Input from '../../components/Form/Input'
import Label from '../../components/Form/Label'
import Link from 'next/link'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length == 0) {
            setStatus(Buffer.from(router.query.reset.toString(), 'base64'))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({ username, password, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </a>
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                {/* Account warning */}
                <div className="bg-yellow-200 my-4 p-5 rounded-md ">
                    <p>
                        Log in with your <strong>Wynntils account</strong>, not
                        your <strong>Minecraft account</strong>
                    </p>
                </div>

                <form onSubmit={submitForm}>
                    {/* Username */}
                    <div>
                        <Label className="" htmlFor="usenrame">
                            Minecraft Username
                        </Label>

                        <Input
                            id="username"
                            type="text"
                            value={username}
                            className="block mt-1 w-full"
                            onChange={event => setUsername(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label className="" htmlFor="password">
                            Password
                        </Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button type="" className="ml-3">
                            Login
                        </Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
