import { html, customElement, property } from 'lit-element';
import ifNonNull from '../../directives/if-non-null.js';
import ButtonBase from '../button/button-base.js';

const templateSlot = html`<slot name="icon"></slot> <slot></slot>`;

@customElement('mdui-link')
class MduiLink extends ButtonBase {
  static get styles() {
    return [super.styles!];
  }

  @property({ reflect: true })
  download!: string;

  /**
   * 若指定了该参数，则按钮内部会渲染为 `<a>` 元素
   */
  @property({ reflect: true })
  href = '';

  @property({ reflect: true })
  hreflang!: string;

  @property({ reflect: true })
  rel!: string;

  @property({ reflect: true })
  target!: string;

  @property({ reflect: true })
  type!: string;

  render() {
    const { download, href, hreflang, rel, target, type } = this;

    return html`<a
      class="${this.getButtonClasses()}"
      href="${href}"
      download="${ifNonNull(download)}"
      hreflang="${ifNonNull(hreflang)}"
      rel="${ifNonNull(rel)}"
      target="${ifNonNull(target)}"
      type="${ifNonNull(type)}"
      >${templateSlot}</a
    >`;
  }
}

export default MduiLink;
