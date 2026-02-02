export default function About() {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About This Starter</h1>

            <div className="prose dark:prose-invert">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    This project was scaffolded to provide a clean, modern starting point for React development.
                    It intentionally strips away complex logic to focus on:
                </p>

                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700 dark:text-gray-300">
                    <li><strong>Simplicity:</strong> Minimal boilerplate with clear structure.</li>
                    <li><strong>Performance:</strong> Optimized build settings and modern tooling.</li>
                    <li><strong>Developer Experience:</strong> Fast feedbacks loops with Vite.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Tech Stack</h2>
                <div className="grid grid-cols-2 gap-4">
                    <TechItem name="React 18" />
                    <TechItem name="Vite 5" />
                    <TechItem name="Tailwind CSS 4" />
                    <TechItem name="React Router 6" />
                </div>
            </div>
        </div>
    )
}

function TechItem({ name }) {
    return (
        <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="font-medium">{name}</span>
        </div>
    )
}
