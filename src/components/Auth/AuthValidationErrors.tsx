import { faSkull } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AuthValidationErrors = ({ errors = [], ...props }) => (
    <>
        {errors.length > 0 && (
            <div {...props}>
                <div className="pr-5">
                    <FontAwesomeIcon icon={faSkull} size="lg" />
                </div>
                <div>
                    <h1 className="font-bold">Whoops! Something went wrong.</h1>
                    <ul className="list-disc list-inside text-sm">
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </>
)

export default AuthValidationErrors
