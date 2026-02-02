import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700">404</h1>
            <h2 className="text-2xl font-bold mt-4 mb-2">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    )
}
