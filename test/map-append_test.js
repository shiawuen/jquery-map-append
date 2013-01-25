/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery#mapAppend', {
    setup: function() {
      this.array = [1,2,3,4,5];
      this.obj = { first:'1', second:'2' };
      this.container = $('#test-container');
    }
  });

  test('is chainable', 1, function() {
    // Not a bad test to run on collection methods.
    strictEqual(this.container.mapAppend(), this.container, 'should be chaninable');
  });

  test('do nothing if no collection given', function() {
    var len = this.container.children().length;
    var c = this.container;
    equal(c.mapAppend([]).children().length, len);
    equal(c.mapAppend({}).children().length, len);
    equal(c.mapAppend(null).children().length, len);
    equal(c.mapAppend(undefined).children().length, len);
  });

  test('accept only collection with no callback', function() {
    var actual, expected;
    var c = this.container;
    expected = this.array.join('');
    actual = c.mapAppend(this.array).html();
    equal(actual, expected);

    c.empty();

    expected = $.map(this.obj, function(val){ return val; }).join('');
    actual = c.mapAppend(this.obj).html();
    equal(actual, expected);
  });

  test('accept collection with callback to generate template', function() {
    var expected, actual;
    var callback = function(val, key){
      return '<div>' + val + '</div>';
    };
    var c = this.container;

    expected = this.array.length;
    actual = c.mapAppend(this.array, callback).children().length;
    equal(actual, expected);

    c.empty();

    expected = 0;
    for (var k in this.obj) {
      this.obj.hasOwnProperty(k) && expected++;
    }
    actual = c.mapAppend(this.obj, callback).children().length;
    equal(actual, expected);
  });


}(jQuery));
