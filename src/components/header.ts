import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'PWA Starter';

  @property({ type: Boolean }) enableBack: boolean = false;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <header class="flex justify-between items-center bg-blue-600 text-white p-3 pt-1 fixed left-[env(titlebar-area-x,0)] top-[env(titlebar-area-y,0)] h-[env(titlebar-area-height,30px)] w-[env(titlebar-area-width,100%)] dark:text-gray-100" style="-webkit-app-region: drag">
        <div id="back-button-block" class="flex justify-between items-center gap-2">
          ${this.enableBack ? html`<sl-button size="small" href="${resolveRouterPath()}">
            Back
          </sl-button>` : null}

          <h1 class="my-0 text-xs font-bold">${this.title}</h1>
        </div>
      </header>
    `;
  }
}
