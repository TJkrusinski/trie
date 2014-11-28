'use strict';

/**
 *  Expose `Trie`
 */

module.exports = Trie;

/**
 *  Trie constructor
 */

function Trie() {
  this.data = {};
};

/**
 *  Add (an) element(s) to the trie
 *
 *  @param {String}
 */

Trie.prototype.add = function(el) {
  ;(function _add(el, i, node) {
    if (i == el.length) return;

    var e = el[i];

    if (!node[e]) node[e] = {};

    _add(el, ++i, node[e]);
  }(el, 0, this.data));
};

/**
 *  Retrieve an element from the trie
 *
 *  @param {String} val
 *  @return {String}
 */

Trie.prototype.get = function(val) {
  function _get(v, i, node){
    var n = node[v[i]];

    if (!n) return '';
    if (i+1 == v.length) return v;

    return _get(v, ++i, n);
  };

  return _get(val, 0, this.data);
};
