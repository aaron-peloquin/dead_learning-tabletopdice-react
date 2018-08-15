/**
 * @license
 * Copyright (c) 2018 The Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://raw.githubusercontent.com/aaron-peloquin/tabletopdice-project/master/LICENSE
 * The complete set of authors may be found at https://raw.githubusercontent.com/aaron-peloquin/tabletopdice-project/master/AUTHORS
 */

 import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {TtdChildHelper} from './-ttd-childHelper.js';

/**
 * `ttd-history`
 * Displays a historical readout of all previously rolled dice
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TtdHistory extends TtdChildHelper {
  static get template() {
    return html`
      <style>
      :host{
          padding: 10px;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          overflow-x: scroll;

          -webkit-touch-callout: text; /* iOS Safari */
          -webkit-user-select: text; /* Safari */
          -khtml-user-select: text; /* Konqueror HTML */
          -moz-user-select: text; /* Firefox */
          -ms-user-select: text; /* Internet Explorer/Edge */
          user-select: text; /* Non-prefixed version, currently supported by Chrome and Opera */
        }
        :host::-webkit-scrollbar {
          display: none;
        }

        ol {
          margin: 0 5px;
          padding: 0;
          height: 100%;
          min-height: 75px;

          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fill, 70px);

          /* horizontal scrollbar functionality */
          -ms-overflow-style: -ms-autohiding-scrollbar;
          overflow-x: scroll;
          white-space: nowrap;
        }

        /* horizontal scrollbar functionality */
        ol::-webkit-scrollbar {
          display: none;
        }
        /* disable horizontal scrollbar functionality in firefox due to inability to hide them properly */
        @-moz-document url-prefix() {
          :host,
          ol {
            overflow-x: hidden;
          }
        }

        ol > li {
          box-shadow: -1px -1px 1px 1px #aaa;
          display: inline-grid;
          border-radius: 10px;
          align-items: center;
          margin: 2px 2px 2px 5px;
          padding: 2px;
          align-self: center;
          justify-self: center;
          grid-row: 1;
        }

        li > *{
          grid-row: 1;
          grid-column: 1;
        }

        li > img{
          vertical-align: middle;
          -webkit-filter: invert(90%);
          -filter: invert(90%);
          margin: 0 auto;
        }

        li > span{
          position: relative;
          z-index: 20; /* naturally */
          font-weight: bold;
          text-align: center;
        }

        .invisible-text{
          font-size: 0px;
        }
      </style>
      <ol title="Copy for dice roll log">
        <dom-repeat items="{{results}}">
          <template>
            <li>
              <span>[[formatResultString(item)]]<span class="invisible-text">(from d[[item.sides]]) </span></span>
              <img src="[[dieImageURI(item.sides)]]" />
            </li>
          </template>
        </dom-repeat>
      </ol>
`;
  }
  static get properties() {
    return {
      results: {
        type: Array,
        value: function(){ return []; },
      },
      excited: {
        type: Boolean,
        value: false,
      },
    };
  }

	ready(){
		super.ready();
		this.findTray();
		if (!this.trayElement){
			return false;
		}
    this.trayElement.addEventListener('_updateHistory', e => {this.updateHistory(e)});
  }

  updateHistory(e){
    this.results = [];
    this.results = e.detail.data.slice(0).reverse();
  }

  formatResultString(r){
    return r.result.toLocaleString() + (this.excited && r.result==r.sides?'!':'');
  }
}

window.customElements.define('ttd-history', TtdHistory);
