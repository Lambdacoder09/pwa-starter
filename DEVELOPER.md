# Developer Guide

Welcome to the PWA Starter developer guide. This document provides an overview of the project structure and development workflow.

## Technology Stack

*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Framework**: [Lit](https://lit.dev/) (Web Components)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Routing**: [@thepassle/app-tools/router](https://github.com/thepassle/app-tools/blob/master/router/README.md)
*   **PWA**: [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/)

## Project Structure

```
├── public/              # Static assets (manifest, service worker, icons)
├── src/
│   ├── components/      # Reusable UI components (e.g., header)
│   ├── pages/           # Page-level components
│   ├── styles/          # Global styles (including Tailwind setup)
│   ├── app-index.ts     # Main application entry point
│   └── router.ts        # Route configuration
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## Styling & Architecture

### Tailwind CSS & Light DOM
This project uses Tailwind CSS for styling. To ensure Tailwind utility classes work correctly within Lit custom elements, we use the **Light DOM** instead of the Shadow DOM for most components.

This is achieved by overriding `createRenderRoot` in your Lit components:

```typescript
import { LitElement, html } from 'lit';

export class MyComponent extends LitElement {
  createRenderRoot() {
    return this; // Disable Shadow DOM
  }

  render() {
    return html`
      <div class="bg-blue-500 text-white p-4">
        Content styled with Tailwind
      </div>
    `;
  }
}
```

*Note: By using Light DOM, global styles (like Tailwind) apply to the component, but you lose style encapsulation. Be mindful of class name collisions, though Tailwind's utility-first approach minimizes this risk.*

### Styles Directory
*   `src/styles/global.css`: The main entry point for Tailwind CSS (`@import "tailwindcss";`). This file is imported in `src/app-index.ts`.
*   *Legacy files `shared-styles.ts` and `about-styles.ts` are deprecated/removed in favor of Tailwind classes.*

## Development

### standard Commands

*   `npm run dev`: Start the development server.
*   `npm run build`: Build the project for production.
*   `npm run preview`: Preview the production build locally.

### Adding a New Page

1.  Create a new component in `src/pages/` (e.g., `my-page.ts`).
2.  Implement the component using `createRenderRoot()` if you want Tailwind support.
3.  Register the route in `src/router.ts`:
    ```typescript
    {
      path: resolveRouterPath('my-page'),
      title: 'My Page',
      render: () => html`<my-page></my-page>` // Or use lazy loading
    }
    ```
