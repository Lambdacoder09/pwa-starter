import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';



import '@shoelace-style/shoelace/dist/components/card/card.js';

import { tailwindStyles } from '../../styles/tailwind';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main class="mt-9 p-3">
        <h2>About Page</h2>

        <sl-card class="lg:max-w-[70vw]">
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games,
            apps that use machine learning and more!
          </p>

          <p>Check out <a
              href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these
              docs</a> to learn more about the advanced features that you can use in your PWA</p>
        </sl-card>
      </main>
    `;
  }
}
