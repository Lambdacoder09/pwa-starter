import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    React PWA
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
