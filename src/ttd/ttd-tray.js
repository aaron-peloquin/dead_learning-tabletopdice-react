/**
 * @license
 * Copyright (c) 2018 The Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://raw.githubusercontent.com/aaron-peloquin/tabletopdice-project/master/LICENSE
 * The complete set of authors may be found at https://raw.githubusercontent.com/aaron-peloquin/tabletopdice-project/master/AUTHORS
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 * @ttd
 *  Events:
 *    _updateHistory, dispatched whenever this.results is changed
 *    _clearResults, dispatched whenever an element wants to clear the rolled results
 *    _rollCustomDie, dispatched whenever the custom dice are requested to be rolled
 *    _updateLocalStorage, dispatched whenever the localStorage needs to be updated.
 *    This is because of a limitation in polymer's observer functionality, since we do not know how deep the storage can go.
 */
class TtdTray extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host{
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
        }
      </style>
      <slot></slot>
    `;
  }

  /**
   * @param {array} results Holds all a local copy of all roll results, which
   * can be cloned and pushed out to [_updateHistory] listeners
   * the dice with sides equal to this.exclude
   * @param {num} exclude The type of dice to exclude
   */
  static get properties() {
    return {
      results: {
        type: Array,
        value: function() { return []; },
      },
      exclude: {
        type: Number,
        value: 0,
      },
      standardPolyhedrons: {
        type: Array,
        reflectToAttribute: true,
        value: function() { return [4,6,8,10,12,20]; }
      },
      storage: {
        type: Object,
        value: function() {
          if(!localStorage.getItem('ttd')) {
            let newStorage = {"conf":{},"data":{}};
            localStorage.setItem('ttd', JSON.stringify(newStorage));
          };
      
          let ttdStorage = localStorage.getItem('ttd');
          return JSON.parse(ttdStorage);
        },
      },
    };
  }

  /**
   * Element ready for use, fire super.ready() for native functionality
   * Add [_clearResults] to clear this.results, then update all listeners
   * Add [_updateLocalStorage] to update localStorage.ttd with a JSON string of this.storage
   * @returns {void}
   */
  ready() {
    super.ready();
    console.log("ready storage",this.storage);
    this.addEventListener('_clearResults', e => {
      this.results = [];
      this.updateHistoricalNodes();
    });
    this.addEventListener('_updateLocalStorage', e=> { localStorage.setItem('ttd',JSON.stringify(this.storage)); });
  }

  /**
   * @param {num} max The maximum value returned. Minimum values are 1.
   * @returns {num} a Random(y) number
   */
  random(max) {
    /** Utilize seedrandom.js for better random values. */
    Math.seedrandom();
    return (Math.random() * max | 0) + 1;
  }

  /**
   * Roll a basic die and updates this.results
   * Reports to Google with the result rolled, and any criticals
   * @param {num} sides The number of sides
   * @returns {void}
   */
  roll(sides) {
    let value = this.random(sides);
    this.results.push({"sides":sides,"result":value});

    //Report to Google Analytics
    if(typeof gtag=='function') {
      gtag('event', 'rollStandard', {
        "event_category":"roll",
        "event_label":"1d"+sides,
        'dieSides': sides,
        'rollResult': value
      });

      if(sides==20) {
        if(value==20) {
          gtag('event', 'naturalTwenty', {
            "event_category":"critical",
          });
        }
        else if(value==1) {
          gtag('event', 'naturalOne', {
            "event_category":"critical",
          });
        }
      }
    }

    this.updateHistoricalNodes();
    return value;
  }

  /**
   * Send this.results to all [_updateHistory] listeners
   * @returns {void}
   */
  updateHistoricalNodes() {
    this.dispatchEvent(new CustomEvent('_updateHistory', {detail: {data:this.results}}));
  }

  /**
   * Fully refresh all app data.
   */
  fullRefresh() {
    this.updateHistoricalNodes();
  }
}

window.customElements.define('ttd-tray', TtdTray);
