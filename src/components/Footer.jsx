export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-8">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} React PWA Starter. Built with React & Tailwind.</p>
            </div>
        </footer>
    )
}
