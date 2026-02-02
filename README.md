# React PWA Starter

A modern, lightweight foundation for building Progressive Web Apps (PWA) using React, Vite, and Tailwind CSS.

## 🚀 Features

*   **React 18**: The latest version of the popular UI library.
*   **Vite**: Blazing fast build tool and development server.
*   **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development.
*   **PWA Ready**: Offline support and installable out of the box using `vite-plugin-pwa`.
*   **React Router**: Standard routing for single-page applications.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Routing**: [React Router](https://reactrouter.com/)

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components
│   ├── Button.jsx    # Custom button component
│   ├── Footer.jsx    # App footer
│   └── Navbar.jsx    # Navigation bar
├── pages/            # Page components
│   ├── About.jsx     # About page
│   ├── Home.jsx      # Landing page
│   └── NotFound.jsx  # 404 Error page
├── styles/           # Global styles
├── App.jsx           # Main application layout and routing
├── main.jsx          # Entry point
└── index.css         # Tailwind imports
```

## 🏁 Getting Started

### Prerequisites

*   Node.js (v16 or higher recommended)
*   npm or yarn

### Installation

1.  Clone the repository (or download the source).
2.  Install dependencies:

    ```bash
    npm install
    ```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

Build the app for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📱 PWA Features

This starter uses `vite-plugin-pwa` to generate a Service Worker and Manifest file automatically.

*   **Offline Support**: The app caches assets and works offline.
*   **Installable**: Users can install the app to their home screen on mobile and desktop.
*   **Auto-Update**: The Service Worker is configured to auto-update when new content is available.

To customize the PWA settings, check `vite.config.js`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
