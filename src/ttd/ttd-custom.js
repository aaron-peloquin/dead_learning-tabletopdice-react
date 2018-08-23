/**
 * @license
 * Copyright (c) 2018 The Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://raw.githubusercontent.com/aaron-peloquin/tabletopdice-project/master/LICENSE
 * The complete set of authors may be found at https://raw.githubusercontent.com/aaron-peloquin/tabletopdice-project/master/AUTHORS
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';
import {TtdChildHelper} from './-ttd-childHelper.js';

/**
 * `ttd-custom`
 * Allow the app visitor to define a custom sided die (ie 1d100 or 1d32),
 * then roll that die on form submit or from a tray event of [_rollCustomDie]
 *
 * @customElement
 * @polymer
 */
class TtdCustom extends TtdChildHelper {
  static get template() {
    return html`
      <style>
        :host {
          flex-wrap: nowrap;
          text-align: center;
          display: table;
          height:100%;
          width: 100%;
        }

        form{
          display: table-cell;
          vertical-align: middle;
        }

        div{
          height: 100%;
          width: 100%;
          display: inline-grid;
          align-items: center;
        }

        div > *{
          grid-row: 1;
        }

        input{
          height: 100%;
          width: 100%;
          margin-right: -1px;
          font-size: inherit;
          border: 0;
          min-width: 0;
          font-family: var(--app-font-family);
          font-weight: var(--app-font-weight);
          background-color: var(--app-ttd-clean-background-color);
          color: var(--app-ttd-clean-color);
        }

        input:focus{
          outline: none;
        }

        span{
          padding: .25em;
          display: table-cell;
          vertical-align: middle;
        }

        /* IE10+ CSS styles go here */
        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
          div{
            display: flex;
          }
          span{
            padding: 0;
          }
        }
  
      </style>
      <form>
        <div>
          <span><template is="dom-if" if="[[rolled]]">{{rolled}}</template>d</span>
          <input aria-label="Number of sides on the custom die" type="text" value="{{customSides::input}}" />
        </div>
      </form>
      `;
  }

  /**
   * @param {num} customSides Tied to the <input> element in this template
   * automatically updates on user input
   * triggers this.resetDie() on change
   * @param {num} rolled The number of times this custom die has been rolled,
   * resets when the customSides is changed or results are cleared
   */
  static get properties() {
    return {
      customSides: {
        type: Number,
        value: 100,
        observer: 'resetDie',
      },
      rolled: {
        type: Number,
        value: 0,
      },
    };
  }

  /**
   * Element ready for use, fire super.ready() for native functionality
   * Attach the <ttd-tray> with TtdChildHelper:findTray()
   * If this browser is supported (not IE), convert <input> from text to number for mobile device keyboards
   * Add [_clearResults] to reset the rolled count
   * Add [_rollCustomDie] to roll this custom die
   * Add [submit] to also roll this custom die
   * @returns {void}
   */
  ready() {
    super.ready();
    this.findTray();
    if (!this.trayElement) {
      return false;
    }

    /** Dynamically upgrade input from text to number for best UX on IE and mobile devices */
    if(this.browserIsSupported()) {
      this.shadowRoot.querySelector('input').setAttribute('type','number');
    }

    this.trayElement.addEventListener('_clearResults', e => {this.resetDie(e)});
    this.trayElement.addEventListener('_rollCustomDie',e => {this.roll(e)});
    this.shadowRoot.querySelector('form').addEventListener('submit', e=>{this.submitRoll(e)});
	}

  /**
   * @param {obj} e eventListener contains the updated data from the <form>'s submit event
   * @returns {void}
   */
  submitRoll(e) {
    e.preventDefault();
    this.roll();
  }

  /**
   * Rolls this custom die
   * @returns {void}
   */
  roll() {
    this.rolled++;
    this.customSides = Math.round(this.customSides);
    this.trayElement.roll(parseInt(this.customSides));
  }

  /**
   * Is this browser supported?
   * @returns {bool}
   */
  browserIsSupported() {
    return true;
    var ua = window.navigator.userAgent;
    var ieClassic = (ua.indexOf("MSIE")>0);
    var ieEleven = (!!ua.match(/Trident\/7\./));
    if (ieClassic || ieEleven) {
      return false;//This is IE.
    }
    return true; //This is not IE
  }


  /**
   * Reset the number of times this die has been rolled
   * @returns {void}
   */
  resetDie() {
    this.rolled = 0;
  }
}

window.customElements.define('ttd-custom', TtdCustom);
