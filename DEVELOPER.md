# Developer Guide

Welcome to the PWA Starter developer guide. This document provides an overview of the project structure and development workflow.

## Technology Stack

*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Framework**: [Lit](https://lit.dev/) (Web Components)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Routing**: [@thepassle/app-tools/router](https://github.com/thepassle/app-tools/blob/master/router/README.md)
*   **PWA**: [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/)

## Files Breakdown & Purpose

The following table guides you on which files are safe to modify and which should be handled with caution.

| File / Folder | Safety | Purpose |
| :--- | :--- | :--- |
| **`src/pages/`** | ✅ **Safe** | Contains your application pages (e.g., Home, About). **This is where you'll do most of your work.** |
| **`src/components/`** | ✅ **Safe** | Reusable UI components (e.g., Headers, Cards). Modify these to build your UI. |
| **`src/router.ts`** | ✅ **Safe** | Defines your app's routes. **Edit this** when adding new pages. |
| **`src/app-index.ts`** | ⚠️ **Caution** | The main app shell. Modify only if changing the global layout/providers. |
| **`src/styles/global.css`** | ✅ **Safe** | Global CSS. Tailwind is initialized here. Add global fonts/variables here. |
| **`public/manifest.json`** | ✅ **Safe** | PWA Manifest. **Edit this** to change your app's name, icons, and theme colors. |
| **`public/sw.js`** | ⚠️ **Caution** | Service Worker. Contains logic for offline support and widgets. |
| **`index.html`** | ✅ **Safe** | HTML entry point. Edit to change `<title>`, meta tags, or add external scripts. |
| **`package.json`** | ⚠️ **Caution** | Manages dependencies. Edit to add packages, but be careful with versions/scripts. |
| **`vite.config.ts`** | ⛔ **Advanced** | Build configuration. **Do not touch** unless you know exactly what you are doing. |
| **`tsconfig.json`** | ⛔ **Advanced** | TypeScript configuration. Changing this can break type checking. |
| **`src/styles/shared-styles.ts`** | ❌ **Do Not Use** | Deprecated. Use Tailwind CSS classes instead. |

## Project Structure

```
├── public/
│   ├── manifest.json    # App metadata (name, icons)
│   ├── sw.js            # Service Worker logic
│   └── assets/          # Images/Icons
├── src/
│   ├── components/      # UI Components (Header, etc.)
│   ├── pages/           # Page Components (Home, About)
│   ├── styles/          # Global CSS
│   ├── app-index.ts     # Main App Shell
│   └── router.ts        # Routing Logic
├── index.html           # HTML Entry
└── vite.config.ts       # Build Config
```

## Styling & Architecture

### Tailwind CSS & Shadow DOM
This project uses Tailwind CSS for styling. To ensure Tailwind utility classes work correctly within Lit custom elements (which use Shadow DOM), **we must inject the Tailwind styles into each component**.

We have a helper file `src/styles/tailwind.ts` that exports the compiled Tailwind CSS.

To use Tailwind in your components:

1.  Import `tailwindStyles`.
2.  Add it to the `static styles` array.

```typescript
import { LitElement, html } from 'lit';
import { tailwindStyles } from '../styles/tailwind';

export class MyComponent extends LitElement {
  static styles = [tailwindStyles]; // Inject Tailwind styles

  render() {
    return html`
      <div class="bg-blue-500 text-white p-4">
        Content styled with Tailwind
      </div>
    `;
  }
}
```

### Styles Directory
*   `src/styles/global.css`: The main entry point for Tailwind CSS (`@import "tailwindcss";`).
*   `src/styles/tailwind.ts`: **Helper module** that exports the Global CSS + Tailwind as a Lit-compatible style object. Use this in all your components.

## Development

### standard Commands

*   `npm run dev`: Start the development server.
*   `npm run build`: Build the project for production.
*   `npm run preview`: Preview the production build locally.

### Adding a New Page

1.  Create a new component in `src/pages/` (e.g., `my-page.ts`).
2.  Implement the component using `static styles = [tailwindStyles]` for Tailwind support.
3.  Register the route in `src/router.ts`:
    ```typescript
    {
      path: resolveRouterPath('my-page'),
      title: 'My Page',
      render: () => html`<my-page></my-page>` // Or use lazy loading
    }
    ```
