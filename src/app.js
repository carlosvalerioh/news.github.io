import {html, render} from './htm+preact.js'
import HackerNewsApp from './HackerNewsApp.js'




render(
  html`
    <${HackerNewsApp} />
  `,
  document.body
);
