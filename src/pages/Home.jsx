import Button from '../components/Button'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 pb-2">
                React PWA Starter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                A modern, lightweight foundation for building Progressive Web Apps with React, Vite, and Tailwind CSS v4.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
                <FeatureCard
                    title="⚡ Blazing Fast"
                    description="Powered by Vite for instant server start and lightning-fast HMR."
                />
                <FeatureCard
                    title="🎨 Tailwind CSS"
                    description="Utility-first styling with the latest Tailwind v4 engine."
                />
                <FeatureCard
                    title="📱 PWA Ready"
                    description="Offline support and installable on all devices out of the box."
                />
            </div>

            <div className="mt-8">
                <Button onClick={() => alert('PWA is awesome!')}>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

function FeatureCard({ title, description }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    )
}
