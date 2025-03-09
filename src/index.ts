import { html, LitElement } from "lit";
import { customElement } from 'lit/decorators.js'

@customElement("sample-element")
export class SampleElement extends LitElement {
    connectedCallback(): void {
        console.log('connected');
        this.dispatchEvent(new CustomEvent('custom-event', {
            bubbles: true,
            composed: true,
            detail: { message: 'Hello World' }
            }));
    }
  render() {
    return html`<p>div</p>`;
  }
}