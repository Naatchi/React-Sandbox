import ApplicationLogo from '../../components/ApplicationLogo'
import AuthCard from '../../components/Auth/AuthCard'
import AuthValidationErrors from '../../components/Auth/AuthValidationErrors'
import Button from '../../components/Button/Button'
import GuestLayout from '../../components/Layouts/GuestLayout'
import Input from '../../components/Form/Input'
import Label from '../../components/Form/Label'
import Link from 'next/link'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [authToken, setAuthToken] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ authToken, password, password_confirmation, setErrors })
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
                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Auth Token */}
                    <div>
                        <Label className="" htmlFor="authToken">
                            Auth Token
                        </Label>

                        <Input
                            id="authToken"
                            type="text"
                            value={authToken}
                            className="block mt-1 w-full"
                            onChange={event => setAuthToken(event.target.value)}
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
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label className="" htmlFor="password_confirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            value={password_confirmation}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/auth/login">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Already registered?
                            </a>
                        </Link>

                        <Button type="" className="ml-4">
                            Register
                        </Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
