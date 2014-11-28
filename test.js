'use strict';

var Trie = require('./trie');
var assert = require('assert');

var t;
var words = [
  'foo',
  'far',
  'bar',
  'zoo'
];
var badWords = [
  'zaa',
  'barrrr',
  'foooo'
];

function ok(v) {
  assert(v);
};

function notOk(v) {
  assert(!v);
};

describe('Trie', function() {
  it('can be initialized', function(){
    t = new Trie;
  });

  it('can have elements added to it', function() {
    words.forEach(t.add, t);
  });

  it('will retrieve elements that have been placed in it', function() {
    words.map(t.get, t).forEach(ok);
  });

  it('will not retrieve elements that have been placed in it', function() {
    badWords.map(t.get, t).forEach(notOk);
  });
});
