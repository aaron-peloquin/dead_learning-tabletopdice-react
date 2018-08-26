/**
 * @license
 * Copyright (c) 2018 The Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://raw.githubusercontent.com/aaron-peloquin/tabletopdice-project/master/LICENSE
 * The complete set of authors may be found at https://raw.githubusercontent.com/aaron-peloquin/tabletopdice-project/master/AUTHORS
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './app-monetizer.js';
import './ttd/ttd-tray.js';
import './ttd/ttd-history.js';
import './ttd/ttd-die.js';
import './ttd/ttd-clear.js';

/**
 * `ttd-view-quick`
 * Very simple implimentation of a dice tray.
 *
 * @customElement
 * @polymer
 */
class TtdViewQuick extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      /* [Responsive] Tiny Styles */
      ttd-tray{
        grid-template-columns: 1fr 1fr;

        /* just wanna say, grid-template-areas is amazing. IE does not support, tho.. :(    */
        grid-template-areas:
          "history history"
          "clear__ clear__"
          "die___4 die___6"
          "die___8 die__10"
          "die__12 die__20";
      }

      /* [Responsive] Small Styles */
      @media (min-width: 350px) {
        ttd-tray{
          grid-template-columns: 1fr 1fr 1fr;

          /* just wanna say, grid-template-areas is amazing. IE does not support, tho.. :(    */
          grid-template-areas:
            "history history history"
            "clear__ clear__ clear__"
            "die___4 die___6 die___8"
            "die__10 die__12 die__20";
        }
      }

      /* [Responsive] Medium Styles */
      @media (min-width: 875px) {
        :host{
          font-size: 2rem;
        }

        ttd-tray{
          grid-template-areas:
          "history history history history"
          "die___4 die___6 die___8 clear__"
          "die__10 die__12 die__20 clear__";
        }
      }

      /** [Responsive] Large Styles */
      @media screen and (min-width: 1200px) {
        :host{
           font-size: 32px;
        }
      }

      </style>

      <div class="card">
        <h1>Quick Dice Tray</h1>
        <div class="tray-wrapper">
            <slot>
              <ttd-tray>
                <ttd-history excited></ttd-history>
                <ttd-die sides="4"></ttd-die>
                <ttd-die></ttd-die>
                <ttd-die sides="8"></ttd-die>
                <ttd-die sides="10"></ttd-die>
                <ttd-die sides="12"></ttd-die>
                <ttd-die sides="20"></ttd-die>
                <ttd-clear></ttd-clear>
              </ttd-tray>
            </slot>
        </div>
        <app-monetizer></app-monetizer>
        <div class="card">
          <div class="copy-box">
            <p>
              The quick dice tray is meant to be the most straightforward. It provides the roll history, the dice buttons most commonly used in tabletop gaming, and a clear button.
            </p>
            <dl>
              <dt>Roll History</dt>
              <dd>Displays the full history of all dice since the last time you cleared the dice tray.</dd>

              <dt>Dice Button</dt>
              <dd>A standard array of polyhdron dice most commonly used in tabletop gaming to makine ability checks, deal damage, and make saving throws.</dd>

              <dt>Clear Button</dt>
              <dd>This button clears the dice tray, resetting it back to having no dice rolled.</dd>
            </dl>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * @param {str} page Two-way data bind for what the current page is. Can be used to send the browser to another page on the site.
   */
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        notify: true,
      },
    };
  }
}

window.customElements.define('ttd-view-quick', TtdViewQuick);
