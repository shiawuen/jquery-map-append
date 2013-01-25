/*
 * map-append
 * https://github.com/shiawuen/jquery-map-append
 *
 * Copyright (c) 2013 Tan Shiaw Uen
 * Licensed under the MIT license.
 */

(function($) {

  /**
   * execute $.map function against collection pass in
   * and aggregate generated template to append into
   * element at once
   * 
   * @param  {Array|Object} collection 
   * @param  {Function} callback   
   * @param  {Boolean} empty      
   * @return {jQuery}
   */
  $.fn.mapAppend = function(collection, callback, empty) {

    // escape if no collection or callback given
    if (!collection) { return this; }

    if (!callback) {
      callback = function(val, key) { return val; };
    }

    var $tmpl = $.map(collection || {}, callback).join('');

    return this.each(function() {
      var $this = $(this);
      empty && $this.empty();
      $this.append($tmpl);
    });
  };

}(jQuery));
