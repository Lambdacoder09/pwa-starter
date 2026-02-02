import { css, unsafeCSS } from 'lit';
import globalCss from './global.css?inline';

export const tailwindStyles = css`${unsafeCSS(globalCss)}`;
